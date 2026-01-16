import React, { useState } from 'react';

const BionicMindDeepDive: React.FC = () => {
  const [activeReasoning, setActiveReasoning] = useState(0);

  const spectrum = [
    { label: "家人", color: "from-blue-400 to-blue-600", desc: "完全信任，无感通行" },
    { label: "熟人", color: "from-cyan-400 to-cyan-600", desc: "友好识别，温馨提醒" },
    { label: "工作人员", color: "from-teal-400 to-teal-600", desc: "职责确认，关注动态" },
    { label: "陌生人", color: "from-zinc-400 to-zinc-600", desc: "匿名观察，保持警觉" },
    { label: "入侵者", color: "from-red-500 to-red-700", desc: "即刻预警，证据锁定" },
  ];

  const reasoningChains = [
    {
      title: "长期记忆",
      enTitle: "Long-term Memory",
      content: "记住常访者的“典型模式”。即使每天遛狗只拍到背影，系统也能基于步态规律稳定归为家人。",
      detail: "14–30 天自动建模",
      image: "https://edgeagent2025.github.io/aic_landing/long_term.PNG",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "短期记忆",
      enTitle: "Short-term Context",
      content: "理解“刚刚发生”与“正在发生”的关联。孩子刚在院子玩耍，相似轨迹会锁定身份，杜绝误报。",
      detail: "实时上下文关联",
      image: "https://edgeagent2025.github.io/aic_landing/short-term.jpg",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: "时间链",
      enTitle: "Temporal Chain",
      content: "用“时段+时长”做异常检测。陌生人多次徘徊且停留过久，风险权重会随时间累积自动升级。",
      detail: "全时空身份追踪",
      image: "https://edgeagent2025.github.io/aic_landing/time-chain2.png",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      title: "因果链",
      enTitle: "Intent Reasoning",
      content: "从动作推理意图。绕行、探头、反复试探边界——系统不只是看画面，而是在解读入侵前兆。",
      detail: "60T 算力实时推理",
      image: "https://edgeagent2025.github.io/aic_landing/cause-chain2.png",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Spectrum Section */}
      <section id="bionic-spectrum" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full -z-10"></div>
        
        <div className="max-w-screen-xl w-full mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none animate-[scaleIn_1s_ease-out]">
              <span className="apple-gradient-text">Bionic Mind™</span>
            </h2>
            <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-white mb-6">
              越用越懂你，误报更少，也更可信
            </h3>
            <h4 className="text-xl md:text-3xl font-semibold tracking-tight text-zinc-300 mb-12">
              从识别一张脸，进化为理解一个角色
            </h4>
            <div className="max-w-4xl mx-auto mb-16 px-4">
              <p className="text-sm md:text-lg text-zinc-200 font-light leading-relaxed">
                家庭高频出入里，误报往往不是“模型不准”，而是缺少身份连续性。我们不再依赖单帧瞬时判断，而是把时间引入模型，建立全时空身份状态。
              </p>
            </div>

            <div className="w-full aspect-video md:aspect-[21/9] bg-zinc-900/30 rounded-[3rem] border border-white/5 overflow-hidden mb-24 relative group">
              <div className="absolute inset-0">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover opacity-100 transition-opacity duration-700"
                >
                  <source src="https://edgeagent2025.github.io/aic_landing/bionicmind.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            <div className="bg-zinc-900/40 rounded-[2.5rem] p-10 border border-white/5 group hover:bg-zinc-900/60 transition-all duration-700">
              <span className="text-blue-500 text-xs font-black tracking-[0.3em] uppercase mb-4 block">代际提升</span>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter">身份识别准确率</h3>
              <div className="flex items-center gap-3">
                <span className="text-6xl md:text-8xl font-black tracking-tighter text-white">30%</span>
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-blue-500 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                  <span className="text-3xl md:text-5xl font-black text-blue-500 -mt-1">+</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900/40 rounded-[2.5rem] p-10 border border-white/5 group hover:bg-zinc-900/60 transition-all duration-700">
              <span className="text-zinc-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block">全球首创</span>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter">行业首次</h3>
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-8xl font-black tracking-tighter text-white">5</span>
                <span className="text-2xl md:text-4xl font-black text-white">大身份属性</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {spectrum.map((item, idx) => (
              <div key={idx} className="group bg-zinc-950 rounded-[2rem] p-6 border border-white/5 relative hover:border-white/20 transition-all duration-500 flex flex-col items-center text-center">
                <div className={`w-full h-1 absolute top-0 left-0 bg-gradient-to-r ${item.color} opacity-30 group-hover:opacity-100 transition-opacity`}></div>
                <h5 className="text-[22px] font-bold mb-3">{item.label}</h5>
                <p className="text-zinc-400 text-[14px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasoning & Memory Section */}
      <section id="bionic-reasoning" className="py-32 px-6 bg-black flex flex-col items-center relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl aspect-square bg-blue-600/5 blur-[200px] rounded-full -z-10"></div>
        
        <div className="max-w-screen-xl w-full mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-4">
              四类记忆与推理
            </h2>
            <p className="text-lg md:text-2xl text-zinc-100 font-bold tracking-tight">
              在本地将碎片化证据串联，彻底解决安防行业的识别痛点。
            </p>
          </div>

          <div className="mb-12 w-full aspect-[21/9] rounded-[3rem] border border-white/10 bg-zinc-950 overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0">
               {reasoningChains.map((chain, i) => (
                 <img 
                   key={i}
                   src={chain.image} 
                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                     activeReasoning === i ? 'opacity-100 scale-100 grayscale-0' : 'opacity-0 scale-105 grayscale'
                   }`} 
                   alt={chain.title} 
                 />
               ))}
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {reasoningChains.map((chain, i) => (
              <button 
                key={i} 
                onClick={() => setActiveReasoning(i)}
                className={`group relative rounded-[2.5rem] p-8 border transition-all duration-500 flex flex-col text-left overflow-hidden min-h-[340px] ${
                  activeReasoning === i 
                  ? 'bg-zinc-900 border-white/20 shadow-xl' 
                  : 'bg-zinc-950/60 border-white/5 hover:border-white/10'
                }`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-8 transition-all duration-500 ${activeReasoning === i ? 'text-blue-500 scale-110' : 'text-zinc-400'}`}>
                    {chain.icon}
                  </div>
                  
                  <div className="mb-4">
                    <h3 className={`text-xl font-bold tracking-tight mb-1 transition-colors ${activeReasoning === i ? 'text-white' : 'text-zinc-100'}`}>
                      {chain.title}
                    </h3>
                    <p className={`text-[11px] font-black uppercase tracking-[0.1em] transition-colors ${activeReasoning === i ? 'text-blue-400' : 'text-zinc-300'}`}>
                      {chain.enTitle}
                    </p>
                  </div>

                  <p className={`text-[14px] leading-relaxed font-light mb-8 transition-colors ${activeReasoning === i ? 'text-zinc-100' : 'text-zinc-200'}`}>
                    {chain.content}
                  </p>
                  
                  <div className={`mt-auto pt-4 border-t ${activeReasoning === i ? 'border-white/10' : 'border-white/5'}`}>
                    <span className={`text-[11px] font-black uppercase tracking-widest ${activeReasoning === i ? 'text-blue-500' : 'text-zinc-300'}`}>
                      {chain.detail}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 opacity-70">
             <div className="flex items-center gap-6">
                <div className="px-5 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full">
                  <span className="text-blue-500 text-[10px] font-black tracking-[0.1em] uppercase">60 TOPS Edge Processing</span>
                </div>
                <p className="text-zinc-100 text-xs font-medium">所有推理均在本地安全架构中完成。</p>
             </div>
             <div className="flex gap-8">
               <div className="text-center">
                 <div className="text-xl font-bold">100%</div>
                 <div className="text-[11px] text-zinc-300 font-black uppercase tracking-widest">Local Privacy</div>
               </div>
               <div className="text-center">
                 <div className="text-xl font-bold">0ms</div>
                 <div className="text-[11px] text-zinc-300 font-black uppercase tracking-widest">Cloud Delay</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.98) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </div>
  );
};

export default BionicMindDeepDive;