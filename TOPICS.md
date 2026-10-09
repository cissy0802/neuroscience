# Topics Roadmap — 神经科学（Neuroscience）

> **⚠️ routine 须知**：本表即全部计划。只写下面**已列出**的条目；**全部写完就停**——别自己发明新主题、别往本文件加行。写完只发一条 PushNotification 请 BigCat 补充。（新条目由 BigCat / deep-research 反哺加进本表，届时你自然继续写。）

**定位**：脑作为**物理 + 计算系统的机制层**。psychology=行为/心智/治疗，meta-knowledge=泛跨学科，ai-ml=人工神经网络，health-longevity=循证健康协议——本站讲生物脑在认知/意识/系统层面怎么工作、怎么自我调制、以及和人工网络怎么对读。**每一期都嵌一条 AI 对读线。**

**两类页面（index 分两栏）**：
- **主线** `{slug}-topic{N}.html`（按顺序读）：认知 → 意识 → 自我调制 → 临床/前沿 → 计算。
- **参考库** `ref-{slug}.html`（不编号、按需 link）：构件/系统的机制解释。主线碰到某构件/系统就 `→ ref` 链过去；若该 ref 页还不存在就**顺手生成一张**放进参考库栏。于是参考库随主线自然长满，你永不用冷启动读地基，但"最终构件/系统都有独立 page"也自动达成。

## Phase A · 认知（Topic 1–9 · 45–46 · 49）
- Topic 1: 感知即推断 — 预测加工/贝叶斯大脑, 错觉作为先验, 主动推理 ｜AI: 生成模型/世界模型 ｜ref→视觉通路
- Topic 2: 注意 — 自上而下 vs 自下而上, 注意瓶颈, 丘脑门控 ｜AI: Transformer attention（点破"同名不同机制"：偏向竞争/门控 ≠ QKV 点积）｜ref→丘脑
- Topic 3: 工作记忆 — 前额叶, 容量限制, 持续放电 vs 突触机制 ｜AI: context window / KV cache ｜ref→前额叶
- Topic 4: 长时记忆与巩固 — 编码/巩固/再巩固, 模式分离与补全, 遗忘的功能 ｜AI: 海马 replay ↔ RL experience replay(主打); 模式分离补全 ↔ Hopfield/联想记忆; 检索 ↔ RAG/向量记忆 ｜ref→海马与内嗅
- Topic 5: 空间导航与认知地图 — 位置细胞/网格细胞(2014 诺奖), 认知地图, 路径整合, 边界/头朝向细胞 ｜AI: successor representation / Tolman-Eichenbaum Machine ｜ref→海马与内嗅
- Topic 6: 决策 — 证据累积(漂移扩散), 价值编码, 探索 vs 利用 ｜AI: RL/bandit ｜ref→基底节·多巴胺 RPE
- Topic 7: 语言的大脑 — Broca/Wernicke 的现代修正, 语言网络, 预测与理解 ｜AI: LLM ｜ref→语言网络
- Topic 8: 情绪的建构 — 经典观 vs 建构论(Barrett), 内感受, 情绪粒度 ｜AI: valence/reward 建模 ｜ref→杏仁核·内感受
- Topic 9: 社会脑与心智理论 — 镜像系统, ToM, 共情回路 ｜AI: multi-agent 里的 ToM ｜ref→镜像系统
- Topic 45: 语义的群体编码 — 人类海马单神经元里的「词向量」, 以及神经元也是多义的: 2026-09 Nature Neuroscience 在受试者听叙事语音时记录海马神经元, 控制音素与语法后仍有稳健语义编码, 单个神经元对多个语义类别的多个词有反应, 群体反应距离与词义距离相关(同 LLM 嵌入几何), 反应模式随多义度变化=编码随语境变; 同方向: 2026-06 Nature 用语言模型在额颞皮层单神经元上定位语法关系/词性/句法结构; 边界: 对齐最好的是 GPT-2 一档嵌入, 「相似」在表示几何层面, 不等于机制相同(承 Topic 2「同名不同机制」; 接 Topic 7 语言的大脑 / Topic 35 神经编码; 月度前沿刷新纳入 2026-10; 来源: https://www.nature.com/articles/s41593-026-02436-4 与 https://www.nature.com/articles/s41586-026-10691-5) ｜AI: polysemanticity / superposition(方法本身见 ai-ml Day 27 的 SAE, 本站只讲生物脑证据) ｜ref→海马与内嗅
- Topic 46: 创造力与顿悟 — 酝酿效应为何"放下才想通"(固着消退/错误线索遗忘/无意识联想三种解释), DMN 与执行控制网络的协作而非对立(Beaty), 顿悟时刻的右前颞上回 gamma 爆发与之前的 alpha 闭眼门控(Jung-Beeman/Kounios), 非高峰时段反而更易顿悟(Wieth & Zacks), 睡眠/REM 与远距联想(Wagner 2004 隐藏规律); 边界: 酝酿效应元分析效应量中等、依任务类型而异(Sio & Ormerod 2009)(接 Topic 5 结尾预告的「创造力与洞察」) ｜AI: 温度采样/探索 vs 贪心解码, 换种子重开 ↔ 跳出局部最优 ｜ref→默认模式网络
- Topic 49: 为什么故事比事实好记 — 「22 倍」的出处之谜与真实效应量(Bower & Clark 1969 叙事串联; Mar 2021 元分析), 因果连接度预测回忆(Trabasso), 事件边界与海马存档峰(Ben-Yakov & Henson; Baldassano), 跨人共享的事件表征(Chen 2017 Sherlock)与说者-听者神经耦合(Stephens & Hasson 2010), 图式加速巩固(Tse 2007)与图式改写(Bartlett), 好奇/情绪调高编码优先级(Gruber 2014; McGaugh), 代价: 记住大意丢细节、个案压倒统计(接 Topic 4 长时记忆 / Topic 46) ｜AI: 可预测即可压缩 ↔ 有结构文本的低困惑度; 按「意外」切分事件的 LLM 情节记忆(EM-LLM) ｜ref→海马与内嗅·默认模式网络

## Phase B · 意识（Topic 10–17 · 44）
- Topic 10: 意识的难题 — 易问题 vs 难问题, 感受质, 解释鸿沟
- Topic 11: 意识的神经关联(NCC) — 寻找神经标志, 双眼竞争, no-report 范式, Cogitate 联盟的 IIT vs GNW 对抗性实验
- Topic 12: 高阶理论与注意图式 — 高阶理论(HOT, Lau/Rosenthal), 注意图式(AST, Graziano), 递归加工(Lamme) ｜AI: agent 的自我状态模型/元认知
- Topic 13: 全局工作空间(GWT/GNW) — Dehaene, 点燃, 全脑播报 ｜AI: agent 架构里的 global workspace
- Topic 14: 整合信息论(IIT) — Tononi, Φ, 争议与证伪尝试
- Topic 15: 预测加工与自由能 — Friston, 主动推理, 意识作为最优模型 ｜AI: active inference agent
- Topic 16: 意识的开关 — 麻醉, 睡眠阶段, 做梦, 清醒梦, 意识的连续谱
- Topic 17: 自我的神经科学 — 身体自我, 叙事自我, 自我消解(冥想/迷幻) ｜ref→默认模式网络
- Topic 44: 麻醉的共同终点 — 从人到线虫, 意识被同一种动力学关掉: Luppi 等 2026-09 Nature Neuroscience 对麻醉期神经活动刻画六千多种动力学特征、覆盖六个物种, 找到共享的动力学终点(局部活动时空隔离: 区域间同步下降、内在时间尺度缩短), 其空间分布与兴奋/抑制递质转录图谱共变并在人/猕猴/小鼠皮层保守; 因果证据: 猕猴中央中核丘脑深部电刺激逆转该动力学并恢复觉醒; 不依赖任何一派意识理论的跨演化经验约束(接 Topic 16 意识的开关; 月度前沿刷新纳入 2026-10; 来源: https://www.nature.com/articles/s41593-026-02460-4 , 开放预印本 https://www.biorxiv.org/content/10.1101/2025.03.22.644729v1.full.pdf) ｜AI: 内在时间尺度与跨区整合 ↔ 循环网络里信息能保持多久、传多远 ｜ref→丘脑

## Phase C · 自我调制与预防（hack 你的神经系统）（Topic 18–25 · 43 · 47–48）
> 机制向：某干预在神经层面动了前面学的哪个回路/网络、为什么就改变了它。给做法时 cross-ref health-longevity，不重复协议细节。
- Topic 18: 运动如何重塑大脑 — BDNF, 海马神经发生, 执行功能, 抗抑郁机制, 有氧 vs 力量
- Topic 19: 营养与大脑 — omega-3/DHA, 血糖与认知, 肠脑轴营养, 生酮/断食的证据 vs 炒作, MIND 饮食
- Topic 20: 冥想的神经科学 — 三类(专注/开放监控/慈悲), DMN 下调, 注意与情绪网络, 长期修行者脑变化, 剂量与证据边界
- Topic 21: 敬畏与总观效应 — awe / overview effect, 自我消解, DMN, 意义与心理健康（接 Topic 17 自我）
- Topic 22: 睡眠作为主动干预 — 深睡巩固/清除, 节律优化, 睡眠债与情绪认知 ｜ref→下丘脑(节律)
- Topic 23: 光照·节律·迷走神经调制 — 晨光/SCN, 褪黑素, HRV/呼吸, 冷热暴露与副交感
- Topic 24: 预防①·抑郁与躁郁 — 可改变风险, 早期信号, 生活方式如何作用于情绪回路, 何时必须找专业(cross-ref psychology)
- Topic 25: 预防②·阿尔茨海默与神经退行 — 认知储备, 血管-脑连接, Lancet 14 项可改变风险(2024 更新, 新增高胆固醇/视力损失), 睡眠/运动/社交, 早筛的真伪
- Topic 43: 学习作为可调制的过程 — 提取练习(测验效应)为何胜过重读, 间隔效应与巩固窗口, 交错 vs 集中练习, desirable difficulty, 睡眠/运动怎么放大巩固, 陈述性 vs 程序性(海马 vs 纹状体/小脑)决定该用哪种练法 ｜AI: spaced replay / 课程学习与灾难性遗忘 ｜ref→海马与内嗅·小脑
- Topic 47: 注意力的一天 — 瞬时零和(偏向竞争)≠全天耗竭(自我损耗大规模重复失败, Hagger 2016), 警觉的双过程调控(昼夜 C 过程 × 睡眠压力 S 过程/腺苷), 时型与同步效应, 午后低谷, 警觉衰减(Mackworth), 蓝斑-去甲肾上腺素的"倒 U"唤醒曲线, 睡眠限制的累积损伤与主观察觉不到(Van Dongen 2003), 微休息与运动的短时增益; 做法 cross-ref health-longevity(接 Topic 2 注意 / Topic 22 睡眠 / Topic 23 节律) ｜AI: 推理算力/上下文预算的分配 ↔ 有限资源的调度 ｜ref→脑干唤醒系统·下丘脑
- Topic 48: 切换的代价与监督自动化 — 任务切换成本与任务集重配置(前额叶-顶叶), 注意力残留, 间歇强化为何让人反复查看(多巴胺 RPE 与不确定奖励), 人是糟糕的监视者: 警觉衰减与自动化自满(Bainbridge"自动化的讽刺"), 工作记忆容量决定能并行盯几条线; 多 agent 时代人的角色从执行者变为调度者/审查者(接 Topic 3 工作记忆 / Topic 47) ｜AI: 人在回路(human-in-the-loop)的注意力瓶颈, agent 编排里的中断设计 ｜ref→前额叶·基底节

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
