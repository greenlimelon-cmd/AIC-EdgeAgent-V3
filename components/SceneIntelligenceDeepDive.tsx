import React, { useState } from 'react';

// ==========================================
// 资源配置常量 - 您可以在这里替换图片 URL
// ==========================================
const SCENE_ASSETS = {
  KNIFE: 'https://edgeagent2025.github.io/aic_landing/knife.png',
  LOITER: 'https://edgeagent2025.github.io/aic_landing/loitering.png',
  TAIL: 'https://edgeagent2025.github.io/aic_landing/weisui.png',
  CLIMB: 'https://edgeagent2025.github.io/aic_landing/climb.png',
  PEEK: 'https://edgeagent2025.github.io/aic_landing/toukui.png',
};

interface LogicStep {
  title: string;
  desc: string;
}

interface BehaviorCategory {
  id: string;
  name: string;
  tagline: string;
  logicSteps: LogicStep[];
  image: string;
}

const behaviors: BehaviorCategory[] = [
  {
    id: 'knife',
    name: '持刀行为',
    tagline: '视觉形态特征提取。',
    image: SCENE_ASSETS.KNIFE,
    logicSteps: [
      { title: '金属特征提取', desc: '利用高对比度形态算法，在复杂背景中精准锁定金属器械轮廓。' },
      { title: '手部关联建模', desc: '60 TOPS 算力实时计算人体姿态与高危物体之间的运动关联。' },
      { title: '攻击态势感知', desc: '根据手臂摆幅与移动轨迹，判定是否具备即刻攻击的物理倾向。' }
    ]
  },
  {
    id: 'loiter',
    name: '异常徘徊',
    tagline: '时空特征行为分析。',
    image: SCENE_ASSETS.LOITER,
    logicSteps: [
      { title: '非线性行径监测', desc: '分析目标在特定区域内的路径熵值，识别无目的往返运动。' },
      { title: '逗留时长累积', desc: '当停留时间超过安全阈值且存在多点交叉路径，系统自动标记。' },
      { title: '时空特征建模', desc: '结合昼夜规律与环境语义，区分正常访客与异常逗留者。' }
    ]
  },
  {
    id: 'tail',
    name: '紧随/尾随',
    tagline: '动态间距关联建模。',
    image: SCENE_ASSETS.TAIL,
    logicSteps: [
      { title: '运动矢量同步', desc: '监测两个独立运动目标的矢量方向，计算速度与间距的同步率。' },
      { title: '距离梯度监测', desc: '当后方目标与前方目标保持恒定的小间距运动时，触发尾随判定。' },
      { title: '跟随逻辑校验', desc: '排除正常家庭成员跟随行为，通过身份感知过滤已知安全关系。' }
    ]
  },
  {
    id: 'climb',
    name: '翻越行为',
    tagline: '垂直位移特征捕捉。',
    image: SCENE_ASSETS.CLIMB,
    logicSteps: [
      { title: '垂直象限锁定', desc: '精准捕捉目标在垂直 Z 轴上的异常位移，区分行走与攀爬动作。' },
      { title: '通道逻辑校验', desc: '识别非正常物理入口（如围栏、窗口）的入站行为。' },
      { title: '毫秒级边界预警', desc: '在身体完全越过边界的一瞬间，完成从检测到告警的闭环。' }
    ]
  },
  {
    id: 'peek',
    name: '窥视/探头',
    tagline: '焦点停留深度分析。',
    image: SCENE_ASSETS.PEEK,
    logicSteps: [
      { title: '视线方向追踪', desc: '分析面部朝向与视线交点，判定目标是否在观察室内环境。' },
      { title: '探头频率监测', desc: '捕捉在掩体或门缝边缘频繁探头的瞬时动作，建立风险权重。' },
      { title: '隐私边界防护', desc: '针对窗户、门缝等隐私敏感区域进行 24/7 视觉语义监控。' }
    ]
  }
];

const SceneIntelligenceDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(behaviors[0].id);

  return (
    <section id="scene-intelligence" className="bg-black text-white py-32 md:py-48 border-t border-white/5 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 animate-[scaleIn_1s_ease-out]">
            <span className="apple-gradient-text">eufy Scene Intelligence™</span>
          </h2>

          <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-white mb-6">
            危险行为理解，可捕捉 10+ 种高危动作。
          </h3>
          <p className="text-lg md:text-2xl text-zinc-300 font-medium tracking-tight">
            不只是看见，更能理解行为背后的威胁。
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {behaviors.map((behavior) => {
              const isActive = activeTab === behavior.id;
              return (
                <div key={behavior.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveTab(behavior.id)}
                    className={`w-full text-left p-8 rounded-[2rem] transition-all duration-500 border flex flex-col gap-2 ${
                      isActive 
                      ? 'bg-zinc-900 border-white/10 shadow-xl' 
                      : 'bg-transparent border-transparent hover:bg-zinc-950/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xl font-black transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-zinc-400'
                      }`}>
                        {behavior.name}
                      </span>
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isActive 
                        ? 'bg-blue-500 border-blue-500 rotate-45 text-white' 
                        : 'border-zinc-700 text-zinc-600'
                      }`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      </div>
                    </div>

                    <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}>
                      <div className="overflow-hidden">
                        <p className="text-blue-500 font-bold mb-6 text-sm pt-4">{behavior.tagline}</p>
                        <div className="space-y-6 pr-4 pb-2">
                          {behavior.logicSteps.map((step, idx) => (
                            <div key={idx} className="space-y-1 animate-[fadeIn_0.5s_ease-out_forwards]">
                              <h5 className="text-sm font-black text-white">{step.title}</h5>
                              <p className="text-xs text-zinc-300 leading-relaxed">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Visual Stage */}
          <div className="lg:col-span-8">
            <div className="relative h-full bg-zinc-950 rounded-[4rem] border border-white/5 overflow-hidden group shadow-2xl min-h-[600px]">
              
              <div className="absolute inset-0 transition-opacity duration-1000">
                {behaviors.map((b) => (
                  <img 
                    key={b.id}
                    src={b.image} 
                    alt={b.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      activeTab === b.id 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-10 right-10 flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 z-20">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
                <span className="text-[10px] font-black tracking-widest uppercase text-white/90">Scene Intelligence Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </section>
  );
};

export default SceneIntelligenceDeepDive;