
import React, { useState } from 'react';

const AiResponseLayer: React.FC = () => {
  const [activeRiskLevel, setActiveRiskLevel] = useState<0 | 1 | 2 | 3>(0);

  const riskLevels = [
    {
      id: 0,
      label: "低风险",
      subLabel: "Low Risk",
      color: "bg-zinc-500",
      textColor: "text-zinc-400",
      zone: "外圈 (30m - 12m)",
      behavior: "路人经过 / 正常通行",
      systemAction: "静默处理",
      userExp: "零打扰",
      desc: "公共区域的正常活动。系统虽然看见了，但判断无威胁，因此保持安静，不消耗你的注意力。",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/></svg>
      ), // Mute
      dotPosition: "top-[15%] right-[15%]"
    },
    {
      id: 1,
      label: "可疑",
      subLabel: "Suspicious",
      color: "bg-amber-500",
      textColor: "text-amber-400",
      zone: "中圈 (12m - 6m)",
      behavior: "短暂停留 / 观察环境",
      systemAction: "后台关注",
      userExp: "无通知",
      desc: "进入庭院边界，但尚未越界。系统开始连续追踪并在本地录像，暂不打扰用户，除非行为升级。",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M22 12h-2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>
      ), // Recording/Eye
      dotPosition: "top-[30%] right-[30%]"
    },
    {
      id: 2,
      label: "确认风险",
      subLabel: "Confirmed",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      zone: "核心区 (近距离)",
      behavior: "试探门窗 / 反复徘徊",
      systemAction: "声光警告 + 通知",
      userExp: "强提醒",
      desc: "触及核心安全边界。Smart Sign 亮灯并播放语音警告“你已进入私人区域”，同时手机收到富媒体通知。",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      ), // Warning
      dotPosition: "top-[42%] right-[42%]"
    },
    {
      id: 3,
      label: "高危",
      subLabel: "High Risk",
      color: "bg-red-600",
      textColor: "text-red-500",
      zone: "接触点 (入侵)",
      behavior: "暴力破坏 / 持械闯入",
      systemAction: "最高级警报",
      userExp: "人工介入",
      desc: "确定的入侵行为。警报声大作，系统锁定证据链，并弹窗引导用户一键报警或由专业团队介入。",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
      ), // Siren
      dotPosition: "top-[48%] right-[48%]"
    }
  ];

  const currentLevel = riskLevels[activeRiskLevel];

  return (
    <section id="ai-response-layer" className="bg-transparent text-white py-32 md:py-48 overflow-hidden border-t border-white/5 relative">
      {/* Background Ambient Glow - Reduced Opacity */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[200px] -z-10 rounded-full"></div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        
        {/* --- 1. HEADER & VALUE PROPOSITION --- */}
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

        {/* --- 2. INTERACTIVE RISK ESCALATION SIMULATOR (NEW) --- */}
        <div className="mb-32 reveal">
            <div className="bg-zinc-900/30 rounded-[3.5rem] border border-white/5 overflow-hidden flex flex-col shadow-2xl">
                
                {/* Controls Header */}
                <div className="flex flex-col md:flex-row border-b border-white/5">
                    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center min-w-[280px]">
                        <h4 className="text-xl font-bold text-white mb-2">响应等级演示</h4>
                        <p className="text-xs text-zinc-400">点击切换风险等级，查看系统对策。</p>
                    </div>
                    <div className="flex-1 flex overflow-x-auto md:overflow-visible">
                        {riskLevels.map((level) => (
                            <button 
                                key={level.id}
                                onClick={() => setActiveRiskLevel(level.id as any)}
                                className={`flex-1 min-w-[120px] p-6 flex flex-col items-center justify-center gap-2 transition-all duration-300 relative group
                                    ${activeRiskLevel === level.id ? 'bg-white/5' : 'hover:bg-white/5'}
                                `}
                            >
                                <div className={`w-3 h-3 rounded-full ${level.color} shadow-[0_0_10px_currentColor] transition-transform duration-300 ${activeRiskLevel === level.id ? 'scale-125' : 'scale-100 opacity-50'}`}></div>
                                <span className={`text-sm font-bold uppercase tracking-wider ${activeRiskLevel === level.id ? 'text-white' : 'text-zinc-500'}`}>{level.label}</span>
                                {activeRiskLevel === level.id && (
                                    <div className={`absolute bottom-0 left-0 w-full h-1 ${level.color}`}></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Body */}
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    
                    {/* LEFT: Visual Map (Three Zones) */}
                    <div className="relative bg-black flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 p-8">
                        {/* Background Map Image */}
                        <div className="relative w-full max-w-md aspect-square">
                            <img 
                                src="https://edgeagent2025.github.io/aic_landing/three_layer.PNG" 
                                alt="Three Zones Map" 
                                className="w-full h-full object-contain opacity-60"
                            />
                            
                            {/* Animated Intruder Dot */}
                            <div 
                                className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-xl z-20 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${currentLevel.color} ${currentLevel.dotPosition}`}
                            >
                                <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-current"></div>
                            </div>

                            {/* Zone Labels (Static Context) */}
                            <div className="absolute top-[10%] left-[10%] text-[10px] text-zinc-500 font-bold uppercase tracking-widest">外圈 (30m)</div>
                            <div className="absolute top-[25%] left-[25%] text-[10px] text-zinc-500 font-bold uppercase tracking-widest">中圈 (12m)</div>
                            <div className="absolute top-[40%] left-[40%] text-[10px] text-zinc-500 font-bold uppercase tracking-widest">核心 (3m)</div>
                        </div>
                    </div>

                    {/* RIGHT: System Logic Panel */}
                    <div className="p-8 md:p-12 flex flex-col justify-center relative bg-gradient-to-br from-zinc-900/50 to-transparent">
                        
                        <div className="mb-10 animate-[fadeIn_0.5s_ease-out]">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 ${currentLevel.color.replace('bg-', 'border-').replace('600', '500').replace('500', '500')}/30 bg-opacity-10`}>
                                <span className={`text-[10px] font-black uppercase tracking-widest ${currentLevel.textColor}`}>{currentLevel.subLabel}</span>
                            </div>
                            
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-2 transition-all duration-300">
                                {currentLevel.behavior}
                            </h3>
                            <div className="flex items-center gap-2 text-zinc-400 font-medium text-sm">
                                <span>📍 位置: <span className="text-white">{currentLevel.zone}</span></span>
                            </div>
                        </div>

                        <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
                            {/* System Response Card */}
                            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 flex items-start gap-5">
                                <div className={`w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0 text-white ${currentLevel.id >= 2 ? 'animate-pulse' : ''}`}>
                                    {currentLevel.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">System Response</div>
                                    <h4 className={`text-xl font-bold mb-2 ${currentLevel.textColor}`}>{currentLevel.systemAction}</h4>
                                    <p className="text-sm text-zinc-300 leading-relaxed">
                                        {currentLevel.desc}
                                    </p>
                                </div>
                            </div>

                            {/* User Experience Line */}
                            <div className="flex items-center gap-4 px-2">
                                <div className="w-1 h-12 bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
                                <div>
                                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">User Experience</div>
                                    <div className="text-lg font-medium text-white">{currentLevel.userExp}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* --- 3. ENHANCED NOTIFICATIONS (UPDATED LAYOUT) - UNCHANGED --- */}
        <div className="reveal">
            <div className="mb-12 border-l-4 border-indigo-500 pl-6">
                 <h4 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">升级版AI智慧通知</h4>
                 <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                    通知不再是简单说“Motion Detected”，而是更智能、更人性化。
                 </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Left: Rich Context (Large) */}
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
                    
                    {/* Notification Stream */}
                    <div className="relative z-10 flex flex-col gap-4 mt-auto">
                        {/* Notification 1 */}
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

                        {/* Notification 2 */}
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

                         {/* Notification 3 */}
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

                {/* Right Column: 2 Stacked Cards */}
                <div className="flex flex-col gap-6">
                    
                    {/* Top: Critical Alert */}
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

                        {/* Realistic Notification Mock */}
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

                    {/* Bottom: Event Filtering */}
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

                        {/* Smart Filter UI */}
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
