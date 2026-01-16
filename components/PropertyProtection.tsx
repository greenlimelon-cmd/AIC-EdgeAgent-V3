
import React from 'react';

const PropertyProtection: React.FC = () => {
  return (
    <section id="property-protection" className="bg-black text-white py-32 md:py-48 border-t border-white/5 overflow-hidden relative">
      
      {/* Ambient Background - Swapped positions slightly for right-aligned text balance */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-900/10 blur-[200px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 blur-[200px] -z-0 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* --- 1. NEW HEADER DESIGN (Right Aligned) --- */}
        <div className="mb-24 md:mb-32 max-w-4xl ml-auto text-right flex flex-col items-end">
           {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <span className="text-lg">🚗</span>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">全链路财产守护</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[0.95]">
            为户外资产，<br />
            <span className="text-emerald-500">建立持续防护</span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
            围绕车辆和包裹，持续监测接近、停留时间与行为变化，<span className="text-white font-bold">在事件发生前、中、后全程掌控。</span>
          </p>
        </div>

        {/* --- 2. 2-COLUMN CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1: Vehicle (Red Alert Focus) */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group flex flex-col">
             
             {/* Icon & Title */}
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-500 border border-blue-500/20">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">车辆守护助手</h3>
             </div>

             {/* Quote & Desc */}
             <div className="mb-8">
                <p className="text-lg font-bold text-blue-500 mb-3">"守着爱车，全天候无死角。"</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  不只是看，更是实时意图判定。在破坏发生前进行干预。
                </p>
             </div>

             {/* Visual */}
             <div className="relative w-full aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-shadow">
                <img src="https://edgeagent2025.github.io/aic_landing/car_protection.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Vehicle Protection" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* UI Overlay - RED ALERT: Destruction */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1c1c1e]/90 backdrop-blur-md p-3 rounded-xl border border-red-500/30 flex items-center gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shrink-0 animate-pulse">
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    </div>
                     <div>
                        <div className="text-xs font-bold text-red-500 tracking-tight">车辆破坏告警</div>
                        <div className="text-[9px] text-zinc-400 font-medium">Driveway • Just Now</div>
                    </div>
                 </div>
             </div>

             {/* List */}
             <div className="mt-auto pt-6 border-t border-white/5">
                <ul className="space-y-2.5">
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>陌生人靠近提醒</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>车辆到家/离家记录</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-400">
                      <span className="text-white">+</span>
                      <span>破坏行为声光驱离</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Card 2: Package (Emerald Focus) */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-10 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 group flex flex-col">
             
             {/* Icon & Title */}
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-900/20 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">包裹守护助手</h3>
             </div>

             {/* Quote & Desc */}
             <div className="mb-8">
                <p className="text-lg font-bold text-emerald-500 mb-3">"盯着包裹，状态不再模糊。"</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  全链路追踪包裹安全状态，从投递到取走，全程掌控。
                </p>
             </div>

             {/* Visual */}
             <div className="relative w-full aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-shadow">
                <img src="https://edgeagent2025.github.io/aic_landing/package_protection.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Package Protection" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* UI Overlay - RED ALERT: Theft */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1c1c1e]/90 backdrop-blur-md p-3 rounded-xl border border-red-500/30 flex items-center gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shrink-0 animate-pulse">
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                    </div>
                     <div>
                        <div className="text-xs font-bold text-red-500 tracking-tight">包裹偷盗告警</div>
                        <div className="text-[9px] text-zinc-400 font-medium">Front Door • Just Now</div>
                    </div>
                 </div>
             </div>

             {/* List */}
             <div className="mt-auto pt-6 border-t border-white/5">
                <ul className="space-y-2.5">
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span>投递/滞留提醒</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span>可疑徘徊驱离</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-400">
                      <span className="text-white">+</span>
                      <span>偷盗行为实时告警</span>
                   </li>
                </ul>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyProtection;
