
import React from 'react';

// ==========================================
// Child Protection Visual Assets
// ==========================================
const CHILD_PROTECTION_ASSETS = {
  ARRIVAL_BG: 'https://edgeagent2025.github.io/aic_landing/child_getting_home.png',
  HOME_GUARDIAN_BG: 'https://edgeagent2025.github.io/aic_landing/child_playing_in_yard.png',
  DANGER_ZONE_MAIN: 'https://edgeagent2025.github.io/aic_landing/child_danger_zone.png',
  MAP_BG: 'https://edgeagent2025.github.io/aic_landing/child_leaving_home.png',
};

const ChildProtection: React.FC = () => {
  return (
    <section id="child-protection" className="bg-black text-white py-32 md:py-48 border-t border-white/5 overflow-hidden relative">
      
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[200px] -z-0 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* --- 1. NEW HEADER DESIGN (Left Aligned, Big Typography) --- */}
        <div className="mb-24 md:mb-32 max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <span className="text-lg">👶</span>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-300">主动式孩子守护</span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.1]">
            主动式守护，<br />
            <span className="text-[#3b82f6]">守住孩子的关键时刻</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-3xl leading-relaxed">
            基于真实家庭调研，EdgeAgent 聚焦孩子风险最高的 <span className="text-white font-bold">4 个关键场景</span>，在真正需要时主动介入。
          </p>
        </div>

        {/* --- 2. 2x2 CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Card 1: Arrival Assistant */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group flex flex-col">
             
             {/* Icon & Title */}
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-500 border border-blue-500/20">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">到家提醒助手</h3>
             </div>

             {/* Quote & Desc */}
             <div className="mb-8">
                <p className="text-lg font-bold text-blue-500 mb-3">"孩子该到家了。"</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  无论是准时安全到家，还是异常晚归，系统即刻汇报，让你时刻心安。
                </p>
             </div>

             {/* Visual Area */}
             <div className="relative w-full aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-shadow">
                <img src={CHILD_PROTECTION_ASSETS.ARRIVAL_BG} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Arrival" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Notification UI */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1c1c1e]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3 animate-[fadeInUp_0.5s_ease-out]">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                        <div className="flex justify-between items-baseline w-full gap-2">
                           <span className="text-[10px] font-bold text-white">eufy Security</span>
                           <span className="text-[9px] text-zinc-500">16:35</span>
                        </div>
                        <div className="text-xs font-bold text-white">Tom 已安全到家</div>
                        <div className="text-[9px] text-zinc-400">比预计早了 5 分钟。</div>
                    </div>
                </div>
             </div>

             {/* Feature List */}
             <div className="mt-auto pt-6 border-t border-white/5">
                <ul className="space-y-2.5">
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>到家提醒</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>晚归超时预警</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-400">
                      <span className="text-white">+</span>
                      <span>强提醒通话 / 家人共享</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Card 2: At-Home Care Assistant */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-10 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col">
             
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-900/20 flex items-center justify-center text-indigo-500 border border-indigo-500/20">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">居家看护助手</h3>
             </div>

             <div className="mb-8">
                <p className="text-lg font-bold text-indigo-400 mb-3">"我正忙，帮我盯着点。"</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  当检测到孩子独自在家时，自动切换至“看护优先模式”，提升感知灵敏度。
                </p>
             </div>

             <div className="relative w-full aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-shadow">
                <img src={CHILD_PROTECTION_ASSETS.HOME_GUARDIAN_BG} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="At Home" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* UI Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-500/30 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-white">看护模式：开启</span>
                    <span className="text-[10px] text-zinc-400 border-l border-white/20 pl-3">灵敏度：高</span>
                </div>
             </div>

             <div className="mt-auto pt-6 border-t border-white/5">
                <ul className="space-y-2.5">
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      <span>独处状态监测</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      <span>陌生人靠近预警</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-400">
                      <span className="text-white">+</span>
                      <span>智能风险升级 (孩子独处 + 陌生人)</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Card 3: Danger Zone Guardian */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-10 border border-white/10 hover:border-red-500/30 transition-all duration-500 group flex flex-col">
             
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center text-red-500 border border-red-500/20">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">危险区域守卫</h3>
             </div>

             <div className="mb-8">
                <p className="text-lg font-bold text-red-500 mb-3">"别让他靠近泳池，拦住他！"</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  真正的保护始于危险发生前。自定义危险区域（如泳池/楼梯），用父母熟悉的声音即刻劝阻。
                </p>
             </div>

             <div className="relative w-full aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-shadow">
                <img src={CHILD_PROTECTION_ASSETS.DANGER_ZONE_MAIN} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Pool Danger" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Voice UI Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-red-600/90 backdrop-blur-md p-3 rounded-xl border border-red-400/30 flex items-center gap-3 animate-pulse">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                    </div>
                    <span className="text-xs font-bold text-white">"宝贝，那里危险！快回来。"</span>
                </div>
             </div>

             <div className="mt-auto pt-6 border-t border-white/5">
                <ul className="space-y-2.5">
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <span>自定义危险区域</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <span>禁区闯入告警</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-400">
                      <span className="text-white">+</span>
                      <span>父母原声劝阻</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Card 4: Departure Monitoring Assistant */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-10 border border-white/10 hover:border-zinc-500/30 transition-all duration-500 group flex flex-col">
             
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">离家监测助手</h3>
             </div>

             <div className="mb-8">
                <p className="text-lg font-bold text-zinc-300 mb-3">"我看不到孩子了，他们去哪了？"</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  当检测到非计划的离家行为时，系统立即发送强力警报，防止意外走失。
                </p>
             </div>

             <div className="relative w-full aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-shadow">
                <img src={CHILD_PROTECTION_ASSETS.MAP_BG} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Departure" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Visual Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-white/40 rounded-full flex items-center justify-center">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white bg-black/50 px-2 py-1 rounded">安全区</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-red-600/90 backdrop-blur-md p-3 rounded-xl border border-red-400/30 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    </div>
                    <div>
                       <div className="text-xs font-bold text-white">异常离家警报</div>
                       <div className="text-[9px] text-white/80">检测到孩子离开安全边界</div>
                    </div>
                </div>
             </div>

             <div className="mt-auto pt-6 border-t border-white/5">
                <ul className="space-y-2.5">
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                      <span>离家提醒</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                      <span>异常离家告警</span>
                   </li>
                   <li className="flex items-center gap-3 text-xs md:text-sm text-zinc-400">
                      <span className="text-white">+</span>
                      <span>超时未归循环呼叫</span>
                   </li>
                </ul>
             </div>
          </div>

        </div>

      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default ChildProtection;
