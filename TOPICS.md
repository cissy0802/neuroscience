# Topics Roadmap — 神经科学（Neuroscience）

> **⚠️ routine 须知**：本表即全部计划。只写下面**已列出**的条目；**全部写完就停**——别自己发明新主题、别往本文件加行。写完只发一条 PushNotification 请 BigCat 补充。（新条目由 BigCat / deep-research 反哺加进本表，届时你自然继续写。）

**定位**：脑作为**物理 + 计算系统的机制层**。psychology=行为/心智/治疗，meta-knowledge=泛跨学科，ai-ml=人工神经网络，health-longevity=循证健康协议——本站讲生物脑在认知/意识/系统层面怎么工作、怎么自我调制、以及和人工网络怎么对读。**每一期都嵌一条 AI 对读线。**

**两类页面（index 分两栏）**：
- **主线** `{slug}-topic{N}.html`（按顺序读）：认知 → 意识 → 自我调制 → 临床/前沿 → 计算。
- **参考库** `ref-{slug}.html`（不编号、按需 link）：构件/系统的机制解释。主线碰到某构件/系统就 `→ ref` 链过去；若该 ref 页还不存在就**顺手生成一张**放进参考库栏。于是参考库随主线自然长满，你永不用冷启动读地基，但"最终构件/系统都有独立 page"也自动达成。

## Phase A · 认知（Topic 1–9）
- Topic 1: 感知即推断 — 预测加工/贝叶斯大脑, 错觉作为先验, 主动推理 ｜AI: 生成模型/世界模型 ｜ref→视觉通路
- Topic 2: 注意 — 自上而下 vs 自下而上, 注意瓶颈, 丘脑门控 ｜AI: Transformer attention（点破"同名不同机制"：偏向竞争/门控 ≠ QKV 点积）｜ref→丘脑
- Topic 3: 工作记忆 — 前额叶, 容量限制, 持续放电 vs 突触机制 ｜AI: context window / KV cache ｜ref→前额叶
- Topic 4: 长时记忆与巩固 — 编码/巩固/再巩固, 模式分离与补全, 遗忘的功能 ｜AI: 海马 replay ↔ RL experience replay(主打); 模式分离补全 ↔ Hopfield/联想记忆; 检索 ↔ RAG/向量记忆 ｜ref→海马与内嗅
- Topic 5: 空间导航与认知地图 — 位置细胞/网格细胞(2014 诺奖), 认知地图, 路径整合, 边界/头朝向细胞 ｜AI: successor representation / Tolman-Eichenbaum Machine ｜ref→海马与内嗅
- Topic 6: 决策 — 证据累积(漂移扩散), 价值编码, 探索 vs 利用 ｜AI: RL/bandit ｜ref→基底节·多巴胺 RPE
- Topic 7: 语言的大脑 — Broca/Wernicke 的现代修正, 语言网络, 预测与理解 ｜AI: LLM ｜ref→语言网络
- Topic 8: 情绪的建构 — 经典观 vs 建构论(Barrett), 内感受, 情绪粒度 ｜AI: valence/reward 建模 ｜ref→杏仁核·内感受
- Topic 9: 社会脑与心智理论 — 镜像系统, ToM, 共情回路 ｜AI: multi-agent 里的 ToM ｜ref→镜像系统

## Phase B · 意识（Topic 10–17）
- Topic 10: 意识的难题 — 易问题 vs 难问题, 感受质, 解释鸿沟
- Topic 11: 意识的神经关联(NCC) — 寻找神经标志, 双眼竞争, no-report 范式, Cogitate 联盟的 IIT vs GNW 对抗性实验
- Topic 12: 高阶理论与注意图式 — 高阶理论(HOT, Lau/Rosenthal), 注意图式(AST, Graziano), 递归加工(Lamme) ｜AI: agent 的自我状态模型/元认知
- Topic 13: 全局工作空间(GWT/GNW) — Dehaene, 点燃, 全脑播报 ｜AI: agent 架构里的 global workspace
- Topic 14: 整合信息论(IIT) — Tononi, Φ, 争议与证伪尝试
- Topic 15: 预测加工与自由能 — Friston, 主动推理, 意识作为最优模型 ｜AI: active inference agent
- Topic 16: 意识的开关 — 麻醉, 睡眠阶段, 做梦, 清醒梦, 意识的连续谱
- Topic 17: 自我的神经科学 — 身体自我, 叙事自我, 自我消解(冥想/迷幻) ｜ref→默认模式网络

## Phase C · 自我调制与预防（hack 你的神经系统）（Topic 18–25）
> 机制向：某干预在神经层面动了前面学的哪个回路/网络、为什么就改变了它。给做法时 cross-ref health-longevity，不重复协议细节。
- Topic 18: 运动如何重塑大脑 — BDNF, 海马神经发生, 执行功能, 抗抑郁机制, 有氧 vs 力量
- Topic 19: 营养与大脑 — omega-3/DHA, 血糖与认知, 肠脑轴营养, 生酮/断食的证据 vs 炒作, MIND 饮食
- Topic 20: 冥想的神经科学 — 三类(专注/开放监控/慈悲), DMN 下调, 注意与情绪网络, 长期修行者脑变化, 剂量与证据边界
- Topic 21: 敬畏与总观效应 — awe / overview effect, 自我消解, DMN, 意义与心理健康（接 Topic 17 自我）
- Topic 22: 睡眠作为主动干预 — 深睡巩固/清除, 节律优化, 睡眠债与情绪认知 ｜ref→下丘脑(节律)
- Topic 23: 光照·节律·迷走神经调制 — 晨光/SCN, 褪黑素, HRV/呼吸, 冷热暴露与副交感
- Topic 24: 预防①·抑郁与躁郁 — 可改变风险, 早期信号, 生活方式如何作用于情绪回路, 何时必须找专业(cross-ref psychology)
- Topic 25: 预防②·阿尔茨海默与神经退行 — 认知储备, 血管-脑连接, Lancet 14 项可改变风险(2024 更新, 新增高胆固醇/视力损失), 睡眠/运动/社交, 早筛的真伪

## Phase D · 临床/前沿（Topic 26–34）
- Topic 26: 精神疾病作为回路失调 — 抑郁/焦虑/精神分裂/双相的网络视角, RDoC, 超越"化学失衡"
- Topic 27: 成瘾的神经科学 — 奖赏回路劫持, 渴求, 复发, 多巴胺的误解
- Topic 28: 神经退行 — 阿尔茨海默/帕金森的分子机制, 蛋白错误折叠, tau/淀粉样争议
- Topic 29: 脑机接口 — 读取与写入, Neuralink 与学界, 运动假体, 伦理 ｜AI: 神经解码
- Topic 30: 神经可塑性与康复 — 卒中恢复, 镜像疗法, CI 疗法, 终身可塑的边界
- Topic 31: 迷幻药与神经科学 — 5-HT2A, DMN 抑制, 可塑性窗口, 临床试验现状
- Topic 32: 睡眠与 glymphatic 清除 — 睡眠阶段的神经机制, 类淋巴清除, 与神经退行
- Topic 33: 肠脑轴 — 微生物组, 迷走神经, 第二大脑, 情绪与免疫
- Topic 34: 神经神话与还原论的限度 — 左右脑/10%脑, 神经废话(neurobabble), 相关≠因果, 还原的边界

## Phase E · 计算神经科学（压轴）（Topic 35–42）
- Topic 35: 神经编码 — 频率 vs 时间编码, 群体编码, 稀疏编码 ｜AI: 表示学习
- Topic 36: 单神经元计算 — 树突计算, 非线性, 神经元不是加权和 ｜AI: 对"人工神经元"的挑战
- Topic 37: 神经动力学与神经流形 — 吸引子网络, 动力系统视角, 群体几何/低维流形, 计算即轨迹 ｜AI: RNN 动力学 / 表示几何
- Topic 38: 脑振荡与同步 — gamma/theta, 相位编码, 跨区通信(communication-through-coherence), 节律与门控（机制向, 无强 AI 对读则不硬挂）
- Topic 39: 反向传播的生物合理性之争 — 权重传输问题, 反馈对齐, 预测编码近似, 局部学习规则 ｜AI: backprop vs 生物
- Topic 40: 脉冲网络与神经形态 — SNN, 事件驱动, 神经形态芯片(Loihi/TrueNorth) ｜AI: 能效计算
- Topic 41: 20 瓦的奇迹 — 能量约束如何塑造计算, 稀疏, 代谢与认知
- Topic 42: 连接组学 — 线虫/果蝇全脑, 人脑连接组计划, 结构 vs 功能连接 ｜AI: 图与网络

## 参考库（构件/系统 · `ref-{slug}.html` · 按需 link 生成 · 不占主线节奏）
构件：神经元与动作电位 · 突触传递 · 神经递质系统 · 突触可塑性(LTP/STDP) · 胶质细胞 · 神经发育
系统：大脑地图与分区 · 视觉通路 · 听觉/体感/嗅觉 · 运动系统与小脑 · 基底节 · 海马与内嗅 · 杏仁核 · 下丘脑 · 默认模式网络
