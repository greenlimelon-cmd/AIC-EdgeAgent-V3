
import React from 'react';

const ProactivePerception: React.FC = () => {
  const specs = [
    {
      label: "身份",
      title: "eufy Bionic Mind™",
      content: "越用越懂你，误报更少，也更可信。"
    },
    {
      label: "空间",
      title: "eufy DSKey™",
      content: "30 米超视距识别，看清你之前就先认出你"
    },
    {
      label: "行为",
      title: "eufy Scene Intelligence™",
      content: "行业首创，可捕捉 10+ 种高危动作。"
    },
    {
      label: "信赖",
      title: "eufy TrustShield™",
      content: "看见不等于告警，证据链成立才通知。"
    }
  ];

  return (
    <section id="perception" className="bg-black text-white pt-32 pb-48 px-6 overflow-hidden border-t border-white/5 stagger-parent">
      <div className="max-w-screen-xl mx-auto">
        
        {/* 1. Central Bold Headline & Description */}
        <div className="text-center mb-24 max-w-4xl mx-auto px-4 reveal">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-[1.1]">
            早期主动感知系统。
          </h2>
          
          {/* Slogan with smaller font size */}
          <div className="mb-10">
            <span className="apple-gradient-text text-lg md:text-2xl font-bold tracking-tight opacity-80">
              少误报，更早预警。
            </span>
          </div>
          
          {/* Refactored architectural description */}
          <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-8">
            重构主动感知架构，<br className="md:hidden" />
            <span className="text-white font-bold">身份 · 空间 · 行为 · 信赖</span>
          </p>
        </div>

        {/* 2. Large Visual - Neural Network View */}
        <div className="relative w-full aspect-[21/10] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-950 mb-24 group shadow-[0_0_100px_rgba(59,130,246,0.15)] reveal">
          <img 
            src="https://edgeagent2025.github.io/aic_landing/core.jpg" 
            alt="Security Neural Network View" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[8s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60%] h-[60%] border border-blue-500/30 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-[80%] h-[80%] border border-cyan-400/20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <span className="text-blue-500 text-[10px] font-black tracking-[0.5em] uppercase block mb-2">Perception Engine</span>
                  <span className="text-white text-4xl font-black tracking-tighter">60 TOPS</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">eufy Scene Intelligence™ Active</span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 reveal">
          {specs.map((spec, i) => (
            <div key={i} className="flex flex-col">
              <div className="h-px bg-zinc-800 w-full mb-8"></div>
              <h4 className="text-sm font-black text-zinc-500 mb-6 tracking-widest uppercase">
                {spec.label}
              </h4>
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight">
                {spec.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-light">
                {spec.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProactivePerception;
