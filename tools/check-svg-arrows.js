#!/usr/bin/env node
/*
 * 发布前 SVG 自查：抓"轴对齐直线上叠了会退化的修饰"这一类会消失的箭头/连杆。
 *
 * 坑：纯横 / 纯竖的 <line> 或两点 <path>（M..L..）几何包围盒的宽或高为 0。
 * 相对包围盒(objectBoundingBox)的东西套在这条线上、且作用在那条"零长度"的轴上时，
 * 会退化成零 → 整条线不渲染，只剩手画三角浮着。两类致命修饰：
 *   1) filter="url(#…)"  —— filter 区域按包围盒算，零宽/零高必退化，直线必消失。
 *   2) stroke="url(#grad)" 且该渐变在退化的那个轴上变化（如竖线配横向渐变）。
 *      注意：水平线配横向渐变、竖线配纵向渐变都正常（变化轴长度非零），不报。
 * 斜线、有面积的形状(三角/矩形/圆/椭圆)都不受影响。
 * 修法：直线连杆去掉 filter/渐变改纯色；箭头用 marker-end + orient="auto"。
 *
 * 用法：node tools/check-svg-arrows.js [file...]   不给参数就扫当前目录所有 *.html。
 * 命中即以非 0 退出，供 publish.sh 拦截。
 */
const fs = require('fs');

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync('.').filter(f => f.endsWith('.html'));

const num = s => parseFloat(s);
const eqish = (a, b) => Math.abs(a - b) < 0.5;

// 两点直线的 d → {axis:'x'|'y'} 表示哪个轴长度为 0；不是两点直线则 null
function straightLineAxis(d) {
  const s = d.trim();
  if (/[zZ]/.test(s)) return null;                 // 闭合=有面积
  let m = s.match(/^M\s*(-?\d+\.?\d*)[,\s]+(-?\d+\.?\d*)\s*L\s*(-?\d+\.?\d*)[,\s]+(-?\d+\.?\d*)\s*$/i);
  if (m) {
    const [x1, y1, x2, y2] = m.slice(1).map(num);
    if (eqish(x1, x2)) return { axis: 'x' };
    if (eqish(y1, y2)) return { axis: 'y' };
    return null;
  }
  m = s.match(/^M\s*(-?\d+\.?\d*)[,\s]+(-?\d+\.?\d*)\s*l\s*(-?\d+\.?\d*)[,\s]+(-?\d+\.?\d*)\s*$/);
  if (m) {
    const [dx, dy] = [num(m[3]), num(m[4])];
    if (eqish(dx, 0)) return { axis: 'x' };
    if (eqish(dy, 0)) return { axis: 'y' };
  }
  return null;
}

let hits = 0;

for (const file of files) {
  let html;
  try { html = fs.readFileSync(file, 'utf8'); } catch { continue; }
  const lines = html.split('\n');

  // 渐变表：id → {kind:'linear'|'radial', varies:'x'|'y'|'both', userSpace}
  const grad = new Map();
  let g;
  const gradRe = /<(linear|radial)Gradient\b([^>]*)>/g;
  while ((g = gradRe.exec(html))) {
    const kind = g[1], a = g[2];
    const idm = a.match(/\bid\s*=\s*"([^"]+)"/); if (!idm) continue;
    const userSpace = /gradientUnits\s*=\s*"userSpaceOnUse"/.test(a);
    let varies = 'both';
    if (kind === 'linear') {
      const gv = n => { const m = a.match(new RegExp('\\b' + n + '\\s*=\\s*"(-?\\d+\\.?\\d*)"')); return m ? num(m[1]) : null; };
      const x1 = gv('x1') ?? 0, y1 = gv('y1') ?? 0, x2 = gv('x2') ?? 1, y2 = gv('y2') ?? 0;
      const vx = !eqish(x1, x2), vy = !eqish(y1, y2);
      varies = vx && vy ? 'both' : vx ? 'x' : 'y';
    }
    grad.set(idm[1], { kind, varies, userSpace });
  }

  const elemRe = /<(path|line)\b([^>]*?)\/?>/g;
  let e;
  while ((e = elemRe.exec(html))) {
    const tag = e[1], attrs = e[2];

    let axis = null;
    if (tag === 'line') {
      const gx = n => { const m = attrs.match(new RegExp(n + '\\s*=\\s*"(-?\\d+\\.?\\d*)"')); return m ? num(m[1]) : null; };
      const [x1, y1, x2, y2] = ['x1', 'y1', 'x2', 'y2'].map(gx);
      if ([x1, y1, x2, y2].every(v => v !== null)) axis = eqish(x1, x2) ? 'x' : eqish(y1, y2) ? 'y' : null;
    } else {
      const dm = attrs.match(/\bd\s*=\s*"([^"]+)"/);
      if (dm) { const r = straightLineAxis(dm[1]); axis = r && r.axis; }
    }
    if (!axis) continue; // 只查轴对齐直线

    let why = null;
    if (/\bfilter\s*=\s*"url\(#/.test(attrs)) {
      why = 'filter 辉光(区域按零长度包围盒退化)';
    } else {
      const sm = attrs.match(/\bstroke\s*=\s*"url\(#([^)]+)\)"/);
      if (sm && grad.has(sm[1])) {
        const gi = grad.get(sm[1]);
        // userSpaceOnUse 渐变用绝对坐标, 不退化; 只有在"退化轴上变化"才致命
        if (!gi.userSpace && (gi.kind === 'radial' || gi.varies === 'both' || gi.varies === axis)) {
          why = `渐变 #${sm[1]} 在退化的 ${axis} 轴上变化`;
        }
      }
    }
    if (!why) continue;

    const ln = html.slice(0, e.index).split('\n').length;
    console.log(`  ✗ ${file}:${ln}  ${axis === 'x' ? '竖线' : '横线'} + ${why} → 渲染会消失`);
    console.log(`      ${(lines[ln - 1] || '').trim().slice(0, 110)}`);
    hits++;
  }
}

if (hits) {
  console.error(`\n[check-svg-arrows] 命中 ${hits} 处会消失的箭头/连杆。修法：直线连杆去掉 filter/渐变改纯色，箭头用 marker-end + orient="auto"。`);
  process.exit(1);
}
console.log('[check-svg-arrows] OK：无轴对齐直线叠 filter/退化渐变的隐患。');
