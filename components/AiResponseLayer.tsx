
import React from 'react';

const AiResponseLayer: React.FC = () => {
  return (
    <section id="ai-response-layer" className="bg-transparent text-white py-32 md:py-48 overflow-hidden border-t border-white/5 relative">
      {/* Background Ambient Glow - Reduced Opacity */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[200px] -z-10 rounded-full"></div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        
        {/* --- 1. HEADER & VALUE PROPOSITION (UPDATED TO MATCH DSKEY STYLE) --- */}
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center reveal">
            {/* Enhanced Badge */}
            <div className="mb-8 relative group">
                <div className="absolute inset-0 bg-blue-600 blur-[20px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
                <span className="relative inline-flex items-center gap-2 py-2 px-6 rounded-full bg-blue-950/30 border border-blue-500/40 text-blue-400 text-sm md:text-base font-black tracking-[0.1em] uppercase shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    AI 分级响应系统
                </span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-16 leading-[1.1]">
              分级处理，该出手时就出手，<br/>
              <span className="text-zinc-500">该安静时不打扰</span>
            </h2>
            
            {/* Split Description Layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl mx-auto">
                {/* Left Side: Value Data */}
                <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
                    <p className="text-xl md:text-3xl font-bold text-white leading-tight mb-2">
                       <span className="text-blue-500">85%</span> 的可疑行为
                    </p>
                    <p className="text-base md:text-lg text-zinc-400 font-medium">
                       在这一层被提前遏制
                    </p>
                </div>
                
                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent self-stretch"></div>
                <div className="block md:hidden h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent self-center my-2"></div>
                
                {/* Right Side: Functional Explanation */}
                <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                    <p className="text-base text-zinc-400 leading-relaxed font-medium max-w-md mt-2">
                       把所有安全事件一视同仁，只会带来高频打扰。我们通过<span className="text-white font-bold">三层空间、四级响应机制</span>，不重要的事情不再刷屏，需要关注的事情充分通知，让警报只在真正需要时响起。
                    </p>
                </div>
            </div>
        </div>

        {/* --- 2. THREE HORIZONTAL CARDS (Updated Text) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal mb-32">
          
          {/* 1. SPATIAL LOGIC CARD */}
          <div className="flex flex-col bg-zinc-900/40 rounded-[3.5rem] border border-white/5 overflow-hidden group hover:border-blue-500/20 transition-all duration-700 h-full">
            <div className="aspect-[3/2] relative overflow-hidden">
              <img 
                src="https://edgeagent2025.github.io/aic_landing/three_layer.PNG" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Three Zones Protection" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <span className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4">Spatial Logic</span>
              <h4 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white">三圈区域<br/><span className="text-blue-500 text-lg md:text-xl font-bold">越靠近，敏感度越高</span></h4>
              
              <div className="space-y-4 mt-auto">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                    <span className="text-white font-bold text-sm">警戒区（远）</span>
                  </div>
                  <p className="text-zinc-400 text-xs ml-3.5">房屋外围，提前感知风险</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-white font-bold text-sm">边界区（中）</span>
                  </div>
                  <p className="text-zinc-400 text-xs ml-3.5">门口/院落等关键边界</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]"></div>
                    <span className="text-white font-bold text-sm">核心区（近）</span>
                  </div>
                  <p className="text-zinc-400 text-xs ml-3.5">室内或核心入口</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ESCALATION LOGIC CARD */}
          <div className="flex flex-col bg-zinc-900/40 rounded-[3.5rem] border border-white/5 overflow-hidden group hover:border-blue-500/20 transition-all duration-700 h-full">
            <div className="aspect-[3/2] relative overflow-hidden">
              <img 
                src="https://edgeagent2025.github.io/aic_landing/ai-deter.png" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Four Stages Escalation" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <span className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4">Escalation Logic</span>
              <h4 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white">四级升级<br/><span className="text-blue-500 text-lg md:text-xl font-bold">只在必要时升级行为</span></h4>
              
              <div className="space-y-4 mt-auto">
                {[
                  { label: "提示", desc: "只提醒陌生人，不吵家人", dot: "bg-zinc-500" },
                  { label: "警告", desc: "灯光/语音明确告知“已越界”", dot: "bg-blue-400" },
                  { label: "驱离", desc: "声光警笛 + 联动强力赶走", dot: "bg-blue-600" },
                  { label: "报警", desc: "AI 验证 → 用户协助 → 升级处置", dot: "bg-red-500" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`}></div>
                      <span className="text-white font-bold text-sm">{item.label}</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] ml-3.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. SYNERGY MODES CARD */}
          <div className="flex flex-col bg-zinc-900/40 rounded-[3.5rem] border border-white/5 overflow-hidden group hover:border-blue-500/20 transition-all duration-700 h-full">
            <div className="aspect-[3/2] relative overflow-hidden">
              <img 
                src="https://edgeagent2025.github.io/aic_landing/ai_first.png" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Synergy Modes" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              {/* Voice Wave Visual */}
              <div className="absolute bottom-10 left-10 flex gap-1 items-end h-8">
                {[0, 0.2, 0.4, 0.1, 0.3].map((delay, i) => (
                  <div key={i} className={`w-1 bg-blue-500 rounded-full animate-[voiceWave_1s_ease-in-out_infinite]`} style={{ animationDelay: `${delay}s` }}></div>
                ))}
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <span className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4">Collaboration Modes</span>
              <h4 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white">两种协同模式<br/><span className="text-blue-500 text-lg md:text-xl font-bold">AI托管还是人工自管，选择权在你</span></h4>
              
              <div className="space-y-6 mt-auto">
                <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-bold text-sm">AI 托管（AI First）</span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">自动</span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    低风险时间，自动解决，不打扰你。成功处理后只发结果：<br/>
                    <span className="text-blue-500 font-mono mt-1 block">“已驱离 / 已结束 / 未升级”</span>
                  </p>
                </div>

                <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-bold text-sm">人机联动（Human in the Loop）</span>
                    <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">协助</span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    面向人身风险，充分提醒用户，提供专业决策，最终执行权留给用户：<br/>
                    <span className="text-white font-mono mt-1 block">确认 → 升级 → 联动处置</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- 3. NEW SECTION: ENHANCED NOTIFICATIONS (UPDATED LAYOUT) --- */}
        <div className="reveal">
            <div className="mb-12 border-l-4 border-indigo-500 pl-6">
                 <h4 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">升级版AI智慧通知</h4>
                 <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                    通知不再是简单说“Motion Detected”，而是更智能、更人性化。
                 </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Left: Rich Context (Large) - Swapped & Expanded */}
                <div className="bg-zinc-900/40 rounded-[2.5rem] border border-white/5 p-8 md:p-12 relative overflow-hidden group h-full min-h-[520px] flex flex-col">
                    
                    <div className="relative z-10 mb-10">
                         <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">Rich Context</span>
                        </div>
                        <h5 className="text-3xl font-bold text-white mb-4">升级版AI提醒</h5>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                            通知不再是简单说“Motion Detected”，而是会以“缩略图+是谁/在哪里/在干什么”的形式描述，一眼Get全貌。
                        </p>
                    </div>
                    
                    {/* Notification Stream - Multiple items */}
                    <div className="relative z-10 flex flex-col gap-4 mt-auto">
                        
                        {/* Notification 1: Package */}
                        <div className="w-full bg-[#2c2c2e]/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:bg-[#3a3a3c]">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                                         <span className="text-[10px] font-bold text-white">E</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">EUFY SECURITY</span>
                                </div>
                                <span className="text-[10px] text-zinc-500">14:30</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-grow">
                                    <h6 className="text-sm font-bold text-white mb-1">Package Delivered</h6>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        FedEx driver left a package at the Front Door.
                                    </p>
                                </div>
                                <div className="w-16 h-12 bg-zinc-800 rounded-lg overflow-hidden shrink-0 border border-white/10">
                                    <img src="https://edgeagent2025.github.io/aic_landing/package_protection.png" className="w-full h-full object-cover" alt="Package" />
                                </div>
                            </div>
                        </div>

                        {/* Notification 2: Person (Primary) */}
                        <div className="w-full bg-[#2c2c2e] rounded-2xl p-4 shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02] scale-[1.02] z-10">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                                         <span className="text-[10px] font-bold text-white">E</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">EUFY SECURITY</span>
                                </div>
                                <span className="text-[10px] text-zinc-500">15:15</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-grow">
                                    <h6 className="text-sm font-bold text-white mb-1">Amanda at Pathway</h6>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        A person is holding a brown and white dog on the pathway.
                                    </p>
                                </div>
                                <div className="w-16 h-16 bg-zinc-800 rounded-lg overflow-hidden shrink-0 border border-white/10 relative">
                                    <img src="https://edgeagent2025.github.io/aic_landing/child_playing_in_yard.png" className="w-full h-full object-cover" alt="Event Thumbnail" />
                                    <div className="absolute top-2 left-2 w-4 h-8 border border-blue-400/80 rounded-sm"></div>
                                </div>
                            </div>
                        </div>

                         {/* Notification 3: Stranger */}
                        <div className="w-full bg-[#2c2c2e]/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/5 transform transition-all duration-500 hover:scale-[1.02] opacity-80 hover:opacity-100">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                                         <span className="text-[10px] font-bold text-white">E</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">EUFY SECURITY</span>
                                </div>
                                <span className="text-[10px] text-zinc-500">16:45</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-grow">
                                    <h6 className="text-sm font-bold text-white mb-1">Stranger Detected</h6>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        A stranger is lingering near the garage.
                                    </p>
                                </div>
                                <div className="w-16 h-12 bg-zinc-800 rounded-lg overflow-hidden shrink-0 border border-white/10">
                                    <img src="https://edgeagent2025.github.io/aic_landing/loitering.png" className="w-full h-full object-cover" alt="Stranger" />
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Background decorative blob */}
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                </div>

                {/* Right Column: 2 Stacked Cards (Swapped & Adjusted) */}
                <div className="flex flex-col gap-6">
                    
                    {/* Top: Critical Alert (Moved here & adapted) */}
                    <div className="bg-gradient-to-br from-red-950/30 to-black rounded-[2.5rem] border border-red-900/30 p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1)_0%,transparent_50%)]"></div>
                        
                        <div className="relative z-10 mb-6">
                            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-3 py-1 rounded-full mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                <span className="text-[10px] font-bold text-red-300 uppercase tracking-wide">Critical Alert</span>
                            </div>
                            <h5 className="text-xl font-bold text-white mb-2">危险强提醒</h5>
                            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                当确认Property发生威胁事件，会在通知强提醒并highlight，用户不会错过关键信息。
                            </p>
                        </div>

                        {/* Realistic Notification Mock - Compact Version */}
                        <div className="w-full bg-[#1c1c1e] rounded-2xl border border-white/10 shadow-2xl p-4 flex gap-3 items-center transform transition-transform group-hover:scale-[1.02] duration-500 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-[pulse_2s_infinite]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Security Alert</span>
                                    <span className="text-[9px] text-zinc-500">Now</span>
                                </div>
                                <h6 className="text-sm font-bold text-white leading-tight">Indoor intrusion!</h6>
                                <p className="text-[10px] text-zinc-400 truncate">Person with weapon identified.</p>
                            </div>
                            <div className="w-10 h-10 bg-zinc-800 rounded-lg overflow-hidden relative border border-white/5">
                                <img src="https://edgeagent2025.github.io/aic_landing/knife.png" className="w-full h-full object-cover opacity-80" alt="Evidence" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Event Filtering (Stays here) */}
                    <div className="bg-zinc-900/40 rounded-[2.5rem] border border-white/5 p-8 relative overflow-hidden group">
                        <div className="mb-6 relative z-10">
                             <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-3">
                                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wide">Smart Filter</span>
                            </div>
                            <h5 className="text-xl font-bold text-white mb-2">同类事件过滤</h5>
                            <p className="text-xs text-zinc-400 leading-relaxed max-w-lg">
                                画面异动频繁？我们懂你的困扰。系统合并短时间内的相似移动物体，推送一条摘要，拒绝刷屏。
                            </p>
                        </div>

                        {/* Smart Filter UI based on new reference */}
                        <div className="w-full bg-[#1c1c1e] rounded-3xl p-6 shadow-2xl border border-white/10 relative z-10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 min-h-[180px] flex flex-col justify-center">
                            
                            {/* Background: The "Spam" list */}
                            <div className="absolute inset-0 flex flex-col items-center pt-4 gap-3 opacity-30 pointer-events-none filter blur-[1px]">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-[90%] flex items-center gap-3 border-b border-white/10 pb-2">
                                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                        </div>
                                        <div className="text-[10px] text-zinc-500 font-medium">Person detected in yard</div>
                                    </div>
                                ))}
                            </div>

                            {/* Foreground: The Summary Alert */}
                            <div className="relative bg-[#2c2c2e] rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 mx-2 animate-[fadeInUp_0.5s_ease-out_0.2s]">
                                <div className="flex gap-4">
                                    {/* Left: Icon & Text */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-[#3b82f6] flex items-center justify-center">
                                                <span className="font-black text-white italic text-[10px]">eufy</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase">SECURITY</span>
                                        </div>
                                        <h6 className="text-sm font-bold text-white leading-tight mb-1">
                                            <span className="text-blue-400">3 people</span> identified <span className="text-white">in yard</span> with <span className="text-white">dogs</span>
                                        </h6>
                                        <p className="text-[10px] text-zinc-400 leading-relaxed">
                                            We grouped similar alerts to avoid bothering you.
                                        </p>
                                    </div>

                                    {/* Right: Stacked Thumbnails */}
                                    <div className="flex flex-col gap-1 shrink-0">
                                        <div className="w-10 h-8 rounded-md bg-zinc-800 overflow-hidden border border-white/10 relative">
                                             <img src="https://edgeagent2025.github.io/aic_landing/wubao2.png" className="w-full h-full object-cover" alt="thumb1" />
                                        </div>
                                        <div className="w-10 h-8 rounded-md bg-zinc-800 overflow-hidden border border-white/10 relative">
                                             <img src="https://edgeagent2025.github.io/aic_landing/wubao3.png" className="w-full h-full object-cover" alt="thumb2" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        {/* Background decorative blob */}
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes voiceWave {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default AiResponseLayer;
