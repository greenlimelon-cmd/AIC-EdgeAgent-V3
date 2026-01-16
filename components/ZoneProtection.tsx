
import React from 'react';

const ZoneProtection: React.FC = () => {
  return (
    <section id="zone-protection" className="bg-black text-white py-32 md:py-48 border-t border-white/5 overflow-hidden relative">
      
      {/* Ambient Background - Purple/Amber mix */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[200px] -z-0 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* --- 1. NEW HEADER DESIGN (Left Aligned) --- */}
        <div className="mb-24 md:mb-32 max-w-5xl">
           {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <span className="text-lg">🛡️</span>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-purple-300">自定义区域守护</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.1]">
            区域守护，<br />
            <span className="text-purple-500">边界由你定义</span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-3xl leading-relaxed">
            每个家的动线、出入口、门廊都不同。在别人家是风险，在你家可能是日常。安防体验必须由你来定义：<span className="text-white font-bold">你画区域、你定规则、你决定哪里该克制、哪里该出手。</span>
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Custom Zones (Purple Focus) */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-10 border border-white/10 hover:border-purple-500/30 transition-all duration-500 group flex flex-col overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             {/* Header */}
             <div className="relative z-10 mb-8">
               <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                  </div>
               </div>
               
               <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
                 自定义区域
               </h3>
               <p className="text-lg md:text-xl font-bold text-purple-400 mb-6">
                 "每个家都不一样，由你定义。"
               </p>

               <div className="pl-5 border-l-2 border-purple-500/50">
                  <p className="text-base text-zinc-400 leading-relaxed">
                    你的安防区域，应该是“为你定制”的。
                  </p>
               </div>
             </div>

             {/* Visual */}
             <div className="relative w-full h-[306px] bg-black rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden mb-8 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-shadow">
                <img src="https://edgeagent2025.github.io/aic_landing/three_layer.PNG" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Zone Map" />
                
                {/* UI Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-500/30 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-[10px] font-bold text-white">Driveway</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-500/30 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-bold text-white">Pool Area</span>
                    </div>
                </div>
             </div>

             {/* List */}
             <div className="mt-auto bg-zinc-950/50 rounded-2xl border border-white/5 p-6">
                <ul className="space-y-4">
                   <li className="flex items-start gap-3 text-base text-zinc-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></div>
                      <span><span className="text-white font-bold">三圈防线：</span>警戒区(远) / 边界区(中) / 核心区(近)，层层递进。</span>
                   </li>
                   <li className="flex items-start gap-3 text-base text-zinc-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></div>
                      <span><span className="text-white font-bold">个性化热区：</span>泳池、车道、侧门、围栏缺口等重点关注。</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Card 2: Personalized Rules (Amber Focus) */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-10 border border-white/10 hover:border-amber-500/30 transition-all duration-500 group flex flex-col overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             {/* Header */}
             <div className="relative z-10 mb-8">
               <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  </div>
               </div>
               
               <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
                 个性化规则
               </h3>
               <p className="text-lg md:text-xl font-bold text-amber-400 mb-6">
                 "不同区域，不同策略。"
               </p>

               <div className="pl-5 border-l-2 border-amber-500/50">
                  <p className="text-base text-zinc-400 leading-relaxed">
                    针对每类区域设定独立的安防策略。
                  </p>
               </div>
             </div>

             {/* Visual */}
             <div className="relative w-full h-[306px] bg-black rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden mb-8 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-shadow">
                <img src="https://edgeagent2025.github.io/aic_landing/level_response.jpg" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700" alt="Rule Logic" />
                
                {/* UI Overlay - Logic Flow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-zinc-900/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl flex flex-col gap-3 max-w-[200px]">
                        <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            <span>Zone: Yard</span>
                            <span className="text-green-500">ARMED</span>
                        </div>
                        <div className="h-px bg-zinc-700 w-full"></div>
                        <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            <span>Zone: Living Room</span>
                            <span className="text-zinc-500">DISARMED</span>
                        </div>
                    </div>
                </div>
             </div>

             {/* List */}
             <div className="mt-auto bg-zinc-950/50 rounded-2xl border border-white/5 p-6">
                <ul className="space-y-4">
                   <li className="flex items-start gap-3 text-base text-zinc-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2"></div>
                      <span><span className="text-white font-bold">分区布撤防：</span>回家只撤核心区，外围继续守；离家全域布防。</span>
                   </li>
                   <li className="flex items-start gap-3 text-base text-zinc-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2"></div>
                      <span><span className="text-white font-bold">分区响应：</span>同一件事在不同区域，触发不同响应（如后院仅提示，入户即报警）。</span>
                   </li>
                </ul>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ZoneProtection;
