
import React from 'react';

const PerceptionEngineDeepDive: React.FC = () => {
  return (
    <section id="perception-engine" className="bg-transparent text-white py-32 px-6 border-t border-white/5 relative overflow-hidden">
        {/* Background effects - Reduced opacity for blend */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-screen-xl mx-auto relative z-10">
            
            {/* --- 1. HEADER & VALUE PROPOSITION (UPDATED TO MATCH DSKEY STYLE) --- */}
            <div className="mb-20 md:mb-28 flex flex-col items-center text-center">
                {/* Enhanced Badge */}
                <div className="mb-8 relative group">
                    <div className="absolute inset-0 bg-blue-600 blur-[20px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
                    <span className="relative inline-flex items-center gap-2 py-2 px-6 rounded-full bg-blue-950/30 border border-blue-500/40 text-blue-400 text-sm md:text-base font-black tracking-[0.1em] uppercase shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        多模态行为/身份/意图识别
                    </span>
                </div>
                
                {/* Main Title */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-white mb-16 leading-[1.1]">
                  支持识别&理解<br />10,000+ 种行为模式
                </h2>
                
                {/* Split Description Layout */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl mx-auto">
                    {/* Left Side: Value Data */}
                    <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
                        <p className="text-xl md:text-3xl font-bold text-white leading-tight mb-4">
                           提升 <span className="text-blue-500">70%</span> 的检测准确率
                        </p>
                        <p className="text-base md:text-lg text-zinc-400 font-medium">
                           (对比仅依靠Motion)
                        </p>
                    </div>
                    
                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent self-stretch"></div>
                    <div className="block md:hidden h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent self-center my-2"></div>
                    
                    {/* Right Side: Functional Explanation */}
                    <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                        <p className="text-base text-zinc-400 leading-relaxed font-medium max-w-md mt-2">
                           99% 的摄像头只会说“检测到Motion”，现在 <span className="text-white font-bold">EdgeAgent</span> 能读懂你家的完整情境：<br/>
                           <span className="text-blue-400">是谁、在哪里、要干什么。</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Layout: Left Cards (Small) | Right Diagram (Large) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-32 items-stretch">
                
                {/* Left Side: Context + 3 Cards (Span 4) */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                    
                    {/* Header - Updated Text */}
                    <div className="mb-10 border-l-4 border-blue-500 pl-6">
                         <h4 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">为什么更准：<br />充分理解是谁、在哪里、要干什么</h4>
                         <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                            EdgeAgent LLM不会因为一个简单的Motion而做出鲁莽判定，而是先充分识别全语境证据：
                         </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Card 1: Identity */}
                        <div className="bg-[#1c1c1e] rounded-[1.5rem] p-6 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                             <div className="flex items-center justify-between mb-2">
                                 <span className="text-3xl font-black text-white tracking-tighter">5</span>
                                 <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                 </div>
                             </div>
                             <h4 className="text-base font-bold text-white mb-2">类高频身份</h4>
                             <p className="text-xs text-zinc-400 font-medium leading-relaxed">家人 / 熟人 / 快递员 / 陌生人 / 入侵者</p>
                        </div>

                        {/* Card 2: Scenes */}
                        <div className="bg-[#1c1c1e] rounded-[1.5rem] p-6 border border-white/5 relative overflow-hidden group hover:border-green-500/30 transition-all duration-300">
                             <div className="flex items-center justify-between mb-2">
                                 <span className="text-3xl font-black text-white tracking-tighter">12</span>
                                 <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                                 </div>
                             </div>
                             <h4 className="text-base font-bold text-white mb-2">个高频家庭场景</h4>
                             <p className="text-xs text-zinc-400 font-medium leading-relaxed">日常出入、取件、停留、徘徊、反复靠近、门口交互、深夜异常出现等</p>
                        </div>

                        {/* Card 3: Behaviors */}
                        <div className="bg-[#1c1c1e] rounded-[1.5rem] p-6 border border-white/5 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                             <div className="flex items-center justify-between mb-2">
                                 <span className="text-3xl font-black text-white tracking-tighter">64</span>
                                 <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                 </div>
                             </div>
                             <h4 className="text-base font-bold text-white mb-2">类典型安防行为</h4>
                             <p className="text-xs text-zinc-400 font-medium leading-relaxed">路过 / 停留 / 反复靠近 / 越界 / 尾随 ...</p>
                        </div>
                    </div>

                    {/* Moved Summary Text */}
                    <div className="mt-6 pt-6 border-t border-white/5">
                        <p className="text-sm font-medium text-zinc-500 leading-relaxed">
                            这些条件可以组合出 <span className="text-white font-bold">10,000+</span> 安防场景，足以覆盖99%的家庭需求。
                        </p>
                    </div>

                </div>

                {/* Right Side: Large Functional Diagram (Span 8) - VISUAL KEPT SAME, Just Context Update */}
                <div className="lg:col-span-8 h-full min-h-[500px] lg:min-h-[600px] flex items-stretch">
                    <div className="relative w-full bg-zinc-900/30 border border-white/5 rounded-[3rem] p-8 lg:p-12 overflow-hidden flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]"></div>
                        
                        {/* Connecting Lines Background */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <svg className="w-full h-full">
                                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 6" />
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                                        <stop offset="50%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Functional Flow Diagram */}
                        <div className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-10">
                            
                            {/* TOP: INPUT STREAM */}
                            <div className="flex flex-col items-center animate-[fadeIn_1s_ease-out]">
                                <div className="bg-black/80 backdrop-blur border border-zinc-700 px-4 py-1.5 rounded-full mb-6 shadow-xl">
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Raw Video Stream</span>
                                </div>
                                <div className="flex gap-4">
                                     <div className="w-32 h-20 bg-zinc-800 rounded-lg border border-white/5 flex items-center justify-center opacity-50 scale-90">Frame -1</div>
                                     <div className="w-40 h-24 bg-zinc-900 rounded-xl border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)] relative">
                                         <span className="text-white font-bold">Current Frame</span>
                                         <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                     </div>
                                     <div className="w-32 h-20 bg-zinc-800 rounded-lg border border-white/5 flex items-center justify-center opacity-50 scale-90">Frame +1</div>
                                </div>
                            </div>

                            {/* CENTER: ENGINE (The Big Stage) */}
                            <div className="w-full bg-gradient-to-b from-blue-900/10 to-indigo-900/10 rounded-[2.5rem] border border-blue-500/20 p-8 lg:p-12 relative overflow-hidden backdrop-blur-sm animate-[scaleIn_0.8s_ease-out_0.2s] flex flex-col items-center">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                                
                                <div className="text-center mb-8">
                                    <span className="text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase">Context Understanding Engine</span>
                                </div>

                                <div className="grid grid-cols-3 gap-8 w-full items-center relative z-10">
                                    {/* Node 1 */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-black border border-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                            <span className="text-2xl">🆔</span>
                                        </div>
                                        <span className="text-xs font-bold text-zinc-300">WHO</span>
                                    </div>

                                    {/* Node 2 */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-black border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.5)] z-10">
                                            <span className="text-3xl">🏃</span>
                                        </div>
                                        <span className="text-xs font-bold text-white">WHAT</span>
                                    </div>

                                    {/* Node 3 */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-black border border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                                            <span className="text-2xl">🏡</span>
                                        </div>
                                        <span className="text-xs font-bold text-zinc-300">WHERE</span>
                                    </div>
                                </div>
                                
                                {/* Connecting Lines in Diagram */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex:0}}>
                                    <path d="M 20% 50% L 50% 50% L 80% 50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                                </svg>
                            </div>

                            {/* BOTTOM: DECISION */}
                            <div className="flex flex-col items-center animate-[fadeIn_1s_ease-out_0.4s] w-full">
                                <div className="flex items-center justify-between w-full max-w-md px-6 py-4 bg-zinc-900 border border-green-500/30 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.1)]">
                                    <div>
                                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Final Output</div>
                                        <h4 className="text-lg font-bold text-white">Risk: Confirmed</h4>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Confidence</div>
                                        <div className="text-lg font-mono text-green-500 font-bold">99.8%</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            
            {/* Part 2: Memory (Bionic Mind) - UPDATED CONTENT & CASES */}
            <div>
                <div className="mb-12 border-l-4 border-indigo-500 pl-6">
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-3">为什么更准：<br />持续记忆和学习，记住你的家庭习惯</h4>
                    <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed max-w-3xl">
                        单凭一个行为不足以得出结论。eufy Bionic Mind™借助持续记忆功能，综合人员身份、行为和模式判定是否存在异常。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {/* Short Term */}
                    <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900/40 group flex flex-col">
                        <div className="relative w-full h-[400px] overflow-hidden">
                             <img src="https://edgeagent2025.github.io/aic_landing/short-term.jpg" alt="Short Term Memory" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="mb-2">
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Short-term Context</span>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-black text-white mb-2">短期记忆</h5>
                            <p className="text-lg text-zinc-200 font-bold mb-4">实时轨迹串联</p>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-[40px]">
                                系统不再孤立地看每一帧画面，而是把此前一天发生的画面关联在一起判断，精准判断。
                            </p>
                            
                            {/* NEW CASE STUDY: JIM */}
                            <div className="mt-auto bg-black/40 rounded-2xl p-5 border border-white/5 backdrop-blur-sm group-hover:border-blue-500/20 transition-colors">
                                <div className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 text-blue-500">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <div>
                                        <h6 className="text-white font-bold text-sm mb-2">案例：解决瞬时误报</h6>
                                        <p className="text-[11px] md:text-xs text-zinc-400 leading-relaxed font-normal">
                                            院子里正在玩耍的Jim正在跑动，导致相机拍不清楚他的面部？但EdgeAgent通过调取前后几秒的连续帧，提取清晰特征，最终判定是儿子Jim，又少了一次家人误报。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Long Term */}
                    <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900/40 group flex flex-col">
                        <div className="relative w-full h-[400px] overflow-hidden">
                             <img src="https://edgeagent2025.github.io/aic_landing/long_term.PNG" alt="Long Term Memory" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                        </div>
                         <div className="p-8 flex flex-col flex-grow">
                            <div className="mb-2">
                                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Long-term Evolution</span>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-black text-white mb-2">长期记忆</h5>
                            <p className="text-lg text-zinc-200 font-bold mb-4">行为习惯建模</p>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-[40px]">
                                系统像是一个长期管家一样，持续记忆并学习“谁常在几点遛狗”、“谁总是走后门”。随着时间推移，即使相机没有拍到脸，系统也可以调取Pattern、习惯等长期记忆信息把对象识别准。
                            </p>
                            
                            {/* NEW CASE STUDY: JOHN & DOG */}
                            <div className="mt-auto bg-black/40 rounded-2xl p-5 border border-white/5 backdrop-blur-sm group-hover:border-indigo-500/20 transition-colors">
                                <div className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5 text-indigo-500">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    </div>
                                    <div>
                                        <h6 className="text-white font-bold text-sm mb-2">案例：攻克伪装与遮挡</h6>
                                        <p className="text-[11px] md:text-xs text-zinc-400 leading-relaxed font-normal">
                                            今天下午3点eufyCam只拍到一个遛狗人的背影，但EdgeAgent通过调取长期记忆，发现John每天下午3点都会出门遛狗，行为轨迹完全一致，因此识别出了John，避免误报。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default PerceptionEngineDeepDive;
