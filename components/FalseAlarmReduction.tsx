import React, { useRef } from 'react';

const FalseAlarmReduction: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const gates = [
    {
      id: "01",
      title: "先确认“是谁”",
      subtitle: "IDENTITY VERIFICATION",
      desc: "不只看脸，还看身形与长期规律；再加上 DSKey 授权锚点。家人夜归、背影出现或局部遮挡，也不会轻易被误判。",
      img: "https://edgeagent2025.github.io/aic_landing/wubao111.png"
    },
    {
      id: "02",
      title: "再确认“在哪儿”",
      subtitle: "SPATIAL SEMANTICS",
      desc: "同一个动作，位置不同，意义不同。路人走过人行道 vs 陌生人在门口边界徘徊，系统利用厘米级语义分割分得清。",
      img: "https://edgeagent2025.github.io/aic_landing/wubao2.png"
    },
    {
      id: "03",
      title: "最后确认“是否持续”",
      subtitle: "TEMPORAL LOGIC",
      desc: "一闪而过的影子、不完整的一帧，不会立刻升级。只有时间上连得起来、空间上对得上，证据链成立才触发告警。",
      img: "https://edgeagent2025.github.io/aic_landing/wubao3.png"
    }
  ];

  return (
    <section id="false-alarm" className="bg-black text-white py-32 md:py-48 overflow-hidden border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* 1. Header Text */}
        <div className="mb-24 max-w-5xl animate-[fadeIn_1.2s_ease-out]">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none animate-[scaleIn_1s_ease-out]">
            <span className="apple-gradient-text">eufy TrustShield™</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed max-w-4xl">
            树影晃动、行人路过等产品误报，eufy 创新性的通过 edge Agent 系统性的解决了这一行业难题。
          </p>
        </div>

        {/* 2. Carousel */}
        <div className="relative group mb-32">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-10 pb-12 px-2 items-start"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {gates.map((gate) => (
              <div 
                key={gate.id} 
                className="flex-shrink-0 w-[85vw] md:w-[55vw] lg:w-[45vw] snap-center flex flex-col gap-10"
              >
                {/* Visual Card */}
                <div className="bg-zinc-950 rounded-[4rem] border border-white/5 relative overflow-hidden group/card shadow-2xl transition-all duration-700 hover:border-white/10">
                   <img 
                     src={gate.img} 
                     alt={gate.title} 
                     className="w-full h-auto block opacity-100 transition-all duration-[10s] ease-out"
                   />
                   
                   <div className="absolute top-8 left-8 flex items-center gap-4 px-5 py-2.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/10">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-pulse"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">{gate.subtitle}</span>
                   </div>
                </div>

                {/* Content Area */}
                <div className="px-6">
                  <h3 className="text-3xl md:text-4xl font-black mb-4 flex items-center gap-6">
                    <span className="text-blue-500 font-mono text-4xl">{gate.id}</span>
                    {gate.title}
                  </h3>
                  <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed">
                    {gate.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-24 h-full"></div>
          </div>
        </div>

        {/* 3. Integrated Conclusion Panel */}
        <div className="max-w-screen-xl mx-auto pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="animate-[fadeIn_1.4s_ease-out]">
              <h4 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                全天候多模态视觉感知。<br/>
                <span className="text-zinc-400">不押注单一画面。</span>
              </h4>
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-xl">
                夜晚弱光、逆光、雨雪时，让身形特征 + 行为轨迹 + DSKey 交叉印证。视觉信息下降，也不会轻易从“家人”跳回“陌生人”。
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              <div className="p-10 md:p-12 bg-zinc-900/30 rounded-[3.5rem] border border-white/5 backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-500 text-center">
                <span className="text-5xl md:text-6xl font-black text-white block mb-3 tracking-tighter">80%</span>
                <span className="text-[12px] font-black text-zinc-400 uppercase tracking-[0.4em]">误报过滤率</span>
              </div>
              <div className="p-10 md:p-12 bg-zinc-900/30 rounded-[3.5rem] border border-white/5 backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-500 text-center">
                <span className="text-5xl md:text-6xl font-black text-white block mb-3 tracking-tighter">＜3s</span>
                <span className="text-[12px] font-black text-zinc-400 uppercase tracking-[0.4em]">判定系统延时</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.98) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default FalseAlarmReduction;