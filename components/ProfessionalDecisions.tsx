
import React from 'react';

const ProfessionalDecisions: React.FC = () => {
  return (
    <section id="professional-decisions" className="bg-transparent text-white py-32 px-6 border-t border-white/5 relative overflow-hidden">
        {/* Background Gradients - Reduced opacity */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-screen-xl mx-auto relative z-10">
            
            {/* --- 1. HEADER & VALUE PROPOSITION (UPDATED TO MATCH DSKEY STYLE) --- */}
            <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
                {/* Enhanced Badge */}
                <div className="mb-8 relative group">
                    <div className="absolute inset-0 bg-blue-600 blur-[20px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
                    <span className="relative inline-flex items-center gap-2 py-2 px-6 rounded-full bg-blue-950/30 border border-blue-500/40 text-blue-400 text-sm md:text-base font-black tracking-[0.1em] uppercase shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        AI 专业安防研判
                    </span>
                </div>
                
                {/* Main Title */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-16 leading-[1.1]">
                  综合上下文充分思考，<br/>
                  基于专业安防机构标准进行判断
                </h2>
                
                {/* Split Description Layout */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl mx-auto">
                    {/* Left Side: Value Data */}
                    <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
                        <p className="text-lg md:text-xl font-bold text-white leading-tight mb-4">
                           每一次提醒在送达你之前，都会经过 <span className="text-blue-500 text-2xl md:text-3xl">3,122</span> 条真实世界安防规则的评估
                        </p>
                        <p className="text-sm md:text-base text-zinc-400 font-medium">
                           (以你当地情况为准，涵盖美国、澳洲、英国、加拿大等主流国家)
                        </p>
                    </div>
                    
                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent self-stretch"></div>
                    <div className="block md:hidden h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent self-center my-2"></div>
                    
                    {/* Right Side: Functional Explanation */}
                    <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                        <p className="text-base text-zinc-400 leading-relaxed font-medium max-w-md mt-2">
                           AI 会结合上下文充分确认和判断事件的性质再做出专业判断，<span className="text-white font-bold">仅确认的可疑行为和威胁才通知，无关紧要的事件不打扰。</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* --- STEP 1: RESTORE TRUTH (Updated Copy & Added Cases) --- */}
            <div className="mb-48">
                {/* Step 1 Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end gap-6 md:gap-12 animate-[fadeIn_1s_ease-out_0.3s]">
                    <div>
                        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest mb-4">
                            Step 1
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">上下文综合判断</h3>
                    </div>
                    <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-3xl pb-1">
                        AI 不局限于单帧画面，而是调取行为上下文深度分析：<br className="hidden md:block"/>
                        <span className="text-white font-bold">识别人员身份、判断行为意图、甄别风险等级，有效减少 70% 误报。</span>
                    </p>
                </div>

                {/* Step 1 Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch animate-[fadeIn_1s_ease-out_0.5s]">
                    
                    {/* Left: Video Feed Visual (Cleaned up) */}
                    <div className="lg:col-span-7">
                        <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-zinc-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl group">
                             {/* Background Image - Clean */}
                             <img 
                                src="https://github.com/greenlimelon-cmd/AIC-EdgeAgent-V3/blob/main/Media/AI%20judgment.png?raw=true" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-105" 
                                alt="Surveillance Feed" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        </div>
                    </div>

                    {/* Right: Core Logic Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-4 h-full">
                        
                        {/* Logic 01: Multi-factor */}
                        <div className="relative flex-1 bg-zinc-900/40 rounded-[2.5rem] p-8 border border-white/5 overflow-hidden group hover:bg-zinc-900/60 hover:border-blue-500/30 transition-all duration-500">
                            <div className="flex items-center gap-2 mb-3">
                                 <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-[10px] font-bold border border-blue-500/20">01</div>
                                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Multimodal</span>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">不基于单个画面鲁莽下结论</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4">单帧画面具有欺骗性，EdgeAgent会结合身份、动作、所处位置做上下文综合推断。</p>
                            
                            <div className="flex items-center gap-2 opacity-70 mb-5">
                                <span className="text-xs bg-black/40 border border-white/10 px-2 py-1 rounded text-zinc-300">身份</span>
                                <span className="text-zinc-600">+</span>
                                <span className="text-xs bg-black/40 border border-white/10 px-2 py-1 rounded text-zinc-300">动作</span>
                                <span className="text-zinc-600">+</span>
                                <span className="text-xs bg-black/40 border border-white/10 px-2 py-1 rounded text-zinc-300">位置</span>
                            </div>

                            {/* CASE STUDY UI */}
                            <div className="bg-black/40 rounded-xl p-4 border border-white/5 flex gap-3 items-start">
                                <div className="mt-1 w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2v20M2 12h20"/></svg>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block mb-1">场景案例</span>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        <span className="text-zinc-500">单帧看</span>一个人踏入前院形似可疑，但多帧分析显示只是短暂停留。<br/>
                                        <span className="text-white font-bold">EdgeAgent确认无持续行为后</span>，选择不打扰用户。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Logic 02: Context Aware + CASE STUDY */}
                        <div className="relative flex-1 bg-zinc-900/40 rounded-[2.5rem] p-8 border border-white/5 overflow-hidden group hover:bg-zinc-900/60 hover:border-indigo-500/30 transition-all duration-500">
                             <div className="flex items-center gap-2 mb-3">
                                 <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-[10px] font-bold border border-indigo-500/20">02</div>
                                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Context</span>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">知道现在该不该紧张</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                                EdgeAgent会根据时间、模式等因素，决定是否该紧张。
                            </p>
                            
                            {/* CASE STUDY UI */}
                            <div className="bg-black/40 rounded-xl p-4 border border-white/5 flex gap-3 items-start">
                                <div className="mt-1 w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2v20M2 12h20"/></svg>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">场景案例</span>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        <span className="text-zinc-500">白天</span>路人小心走过门口，可能是不小心；<br/>
                                        <span className="text-white font-bold">晚上</span>有人走过门口，则是需要关注的可疑事件。
                                    </p>
                                </div>
                            </div>
                        </div>

                         {/* Logic 03: Spatio-temporal + CASE STUDY */}
                        <div className="relative flex-1 bg-zinc-900/40 rounded-[2.5rem] p-8 border border-white/5 overflow-hidden group hover:bg-zinc-900/60 hover:border-emerald-500/30 transition-all duration-500">
                            <div className="flex items-center gap-2 mb-3">
                                 <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-[10px] font-bold border border-emerald-500/20">03</div>
                                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Trajectory</span>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">分清行为性质</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                                结合停留时长与轨迹分析，精准判断对象的行动轨迹和意图，过滤掉路人干扰。
                            </p>

                            {/* CASE STUDY UI */}
                            <div className="bg-black/40 rounded-xl p-4 border border-white/5 flex gap-3 items-start">
                                <div className="mt-1 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2v20M2 12h20"/></svg>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">场景案例</span>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        <span className="text-zinc-500">5秒内</span>快速走过是无意经过的路人，不骚扰；<br/>
                                        <span className="text-white font-bold">持续5分钟</span>反复徘徊，则是重点关注对象。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- STEP 2: PROFESSIONAL ADJUDICATION (Updated Copy) --- */}
            <div>
                {/* Step 2 Header - Moved OUTSIDE the grid to match Step 1 */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end gap-6 md:gap-12 animate-[fadeIn_1s_ease-out_0.6s]">
                    <div>
                        <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-black uppercase tracking-widest mb-4">
                            Step 2
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">专业研判AI</h3>
                    </div>
                    <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-3xl pb-1">
                        像安防专家一样思考，只为每一次准确判断。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch animate-[fadeIn_1s_ease-out_0.9s]">
                     {/* Visual Placeholder for Step 2 (Left Side) */}
                     {/* Added 'h-full' and 'object-cover' to ensure it stretches to match the right column height */}
                     <div className="order-1 lg:order-1 lg:col-span-7 relative bg-zinc-950 rounded-[3rem] border border-white/10 overflow-hidden group shadow-2xl h-full min-h-[300px]">
                         <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900 to-black"></div>
                         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
                         
                         {/* Logic Flow Visual (Image Only) */}
                         <div className="absolute inset-0 flex items-center justify-center p-8">
                            <img 
                                src="https://github.com/greenlimelon-cmd/AIC-EdgeAgent-V3/blob/main/Media/AI%20Judgement2.jpg?raw=true" 
                                alt="Professional Adjudication Logic Flow" 
                                className="w-full h-full object-contain"
                            />
                         </div>
                    </div>

                    {/* Right Side: Content Boxes (Now only contains the boxes, so Left stretches to this height) */}
                    <div className="order-2 lg:order-2 lg:col-span-5 flex flex-col justify-center gap-6 h-full">
                        {/* Card 1: 10 Billion Combinations */}
                        <div className="bg-[#1c1c1e] rounded-[1.5rem] p-6 md:p-8 border border-white/5 relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                             <div className="flex items-start justify-between mb-6">
                                 <div>
                                     <span className="text-4xl md:text-5xl font-black text-white tracking-tighter block mb-2">百亿级</span>
                                     <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">组合判断逻辑</h4>
                                 </div>
                                 <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/><path d="M3 3v18h18"/></svg>
                                 </div>
                             </div>
                             
                             {/* Case Study Box */}
                             <div className="bg-black/40 rounded-xl p-5 border border-white/5 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-3">
                                     <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                     <span className="text-xs font-bold text-zinc-200">案例：能否分清“做饭”与“行凶”？</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-2 rounded bg-zinc-800/30 border border-white/5">
                                         <div className="flex flex-col">
                                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Scenario A</span>
                                            <span className="text-xs text-zinc-300 font-medium">家人 + 厨房 + 持刀</span>
                                         </div>
                                         <div className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold rounded border border-green-500/30">
                                            安全：做饭
                                         </div>
                                    </div>
                                    <div className="flex items-center justify-between p-2 rounded bg-red-900/10 border border-red-500/10">
                                         <div className="flex flex-col">
                                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Scenario B</span>
                                            <span className="text-xs text-zinc-300 font-medium">陌生人 + 后院 + 持刀</span>
                                         </div>
                                         <div className="px-2 py-1 bg-red-500/20 text-red-400 text-[10px] font-bold rounded border border-red-500/30">
                                            危险：入侵
                                         </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-zinc-500 mt-3 leading-relaxed">
                                    *系统不仅识别物体，更结合时间、地点、人物身份进行百亿级逻辑交叉验证。
                                </p>
                             </div>
                        </div>

                        {/* Card 2: 3,122 Rules */}
                        <div className="bg-[#1c1c1e] rounded-[1.5rem] p-6 md:p-8 border border-white/5 relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                             <div className="flex items-start justify-between mb-6">
                                 <div>
                                     <span className="text-4xl md:text-5xl font-black text-white tracking-tighter block mb-2">3,122 条</span>
                                     <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">专业安防知识规则</h4>
                                 </div>
                                 <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                                 </div>
                             </div>
                             
                             {/* Case Study Box */}
                             <div className="bg-black/40 rounded-xl p-5 border border-white/5 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-3">
                                     <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                     <span className="text-xs font-bold text-zinc-200">案例：符合报警中心的严苛标准</span>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3 mb-3">
                                     <div className="p-3 rounded bg-zinc-800/30 border border-white/5 flex flex-col justify-between h-24">
                                         <span className="text-[10px] text-zinc-500">普通标准</span>
                                         <div className="text-xs text-zinc-400 leading-tight my-1">
                                            仅检测到画面变化或人形
                                         </div>
                                         <div className="text-[10px] font-bold text-zinc-500 border-t border-white/5 pt-1 mt-1">
                                            结果：频繁误报
                                         </div>
                                     </div>
                                     <div className="p-3 rounded bg-red-900/10 border border-red-500/10 flex flex-col justify-between h-24">
                                         <span className="text-[10px] text-red-400/80">EdgeAgent 标准</span>
                                         <div className="text-xs text-white leading-tight my-1 font-bold">
                                            人+意图确认+持续存在
                                         </div>
                                         <div className="text-[10px] font-bold text-red-400 border-t border-red-500/20 pt-1 mt-1">
                                            结果：真威胁才报
                                         </div>
                                     </div>
                                </div>
                                
                                <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed">
                                    *依据美国、欧洲、澳洲等主流报警中心(CMS)的处理标准制定，避免因误报产生的罚款。
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes loading {
          0% { width: 0%; opacity: 1; }
          100% { width: 100%; opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default ProfessionalDecisions;
