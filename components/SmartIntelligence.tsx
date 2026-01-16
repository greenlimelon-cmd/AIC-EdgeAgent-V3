
import React from 'react';

const SmartIntelligence: React.FC = () => {
  const cards = [
    {
      id: 1,
      label: "CSI 安全指数",
      title: "家庭风险评估与规划",
      desc: "基于全球 11,000+ 城市治安数据，为你的住址生成深度安全报告。知道该防什么，才知道该怎么守。",
      bg: "bg-zinc-950",
      ui: (
        <div className="absolute inset-0 flex items-center justify-center bg-[#000]">
          <img 
            src="https://edgeagent2025.github.io/aic_landing/9.png" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="CSI Security Index Report" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      )
    },
    {
      id: 2,
      label: "Digital Twin",
      title: "3D 可视化家庭安防",
      desc: "安防数字孪生。在 3D 模型中实时查看安全行为事件发生的精确位置，告别盲目搜寻，一切尽在掌握。",
      bg: "bg-white",
      ui: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#F4F8FB]">
          <img 
            src="https://edgeagent2025.github.io/aic_landing/3d-house.png" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Digital Twin 3D House" 
          />
        </div>
      )
    },
    {
      id: 3,
      label: "Intelligence",
      title: "每日/每月安防报告",
      desc: "安防建议一瞥既得。系统自动提炼周期内的重要行为事件，排除噪音，为你提供真正有价值的优化建议。",
      bg: "bg-zinc-950",
      ui: (
        <div className="absolute inset-0 flex items-center justify-center bg-[#000]">
          <img 
            src="https://edgeagent2025.github.io/aic_landing/report.png" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Daily Security Report" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      )
    },
    {
      id: 4,
      label: "Natural Language",
      title: "Eufy 智慧语音交互",
      desc: "自然语言是 3 倍效率。支持模糊搜索与上百种指令，“找一下昨天穿红衣服的人”，安防只是一句话的事。",
      bg: "bg-blue-600",
      ui: (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
           <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center mb-8">
              <div className="flex gap-1 items-end">
                <div className="w-1 h-4 bg-white rounded-full animate-[voiceWave_1s_ease-in-out_infinite_0s]"></div>
                <div className="w-1 h-8 bg-white rounded-full animate-[voiceWave_1s_ease-in-out_infinite_0.2s]"></div>
                <div className="w-1 h-6 bg-white rounded-full animate-[voiceWave_1s_ease-in-out_infinite_0.4s]"></div>
              </div>
           </div>
           <p className="text-lg font-black text-white leading-tight">“找一下昨天穿红衣服的<br/>陌生人”</p>
        </div>
      )
    }
  ];

  return (
    <section id="smart-intelligence" className="bg-black text-white py-32 md:py-48 border-t border-white/5 overflow-hidden stagger-parent">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Header Section - Right Aligned */}
        <div className="mb-24 md:mb-32 max-w-4xl ml-auto text-right flex flex-col items-end reveal">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <span className="text-lg">🧠</span>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-300">智能系统</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.1]">
            系统更智能、<br />
            <span className="text-blue-500">使用更方便</span>
          </h2>
          
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight mb-6">
            eufy 现在更好用了。
          </h3>

          <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
            新增支持3D家园、语音交互、日报/周报、周遭区域风险分析。
          </p>
        </div>

        {/* Horizontal Card Row */}
        <div className="relative reveal">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-12">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[32vw] snap-center flex flex-col gap-10"
              >
                <div className={`aspect-square ${card.bg} rounded-[3.5rem] border border-white/5 relative overflow-hidden group shadow-2xl`}>
                  {card.ui}
                </div>

                <div className="px-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-snug">
                    <span className="text-zinc-400 font-mono text-base mr-3 block md:inline mb-1 md:mb-0">{card.label}。</span>
                    {card.title}
                  </h3>
                  <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes voiceWave {
          0%, 100% { height: 10px; }
          50% { height: 32px; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default SmartIntelligence;
