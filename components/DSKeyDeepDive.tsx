
import React from 'react';

const DSKeyDeepDive: React.FC = () => {
  return (
    <section id="dskey-detail" className="bg-transparent text-white py-24 md:py-32 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10">
        
        {/* --- 1. HEADER & VALUE PROPOSITION (CENTERED) --- */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center">
            {/* Enhanced Badge */}
            <div className="mb-8 relative group">
                <div className="absolute inset-0 bg-blue-600 blur-[20px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
                <span className="relative inline-flex items-center gap-2 py-2 px-6 rounded-full bg-blue-950/30 border border-blue-500/40 text-blue-400 text-sm md:text-base font-black tracking-[0.25em] uppercase shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    DSKey™
                </span>
            </div>
            
            {/* Main Title - No Wrap on Desktop */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-white mb-16 leading-[1.1] whitespace-nowrap">
              你的手机是你的数字钥匙。
            </h2>
            
            {/* Split Description Layout (Reverted) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl mx-auto">
                {/* Left Side */}
                <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
                    <p className="text-xl md:text-3xl font-bold text-white leading-tight mb-4">
                       减少 <span className="text-blue-500">99%</span> 家人误报，<br className="hidden lg:block"/>
                       有效减少 <span className="text-blue-500">70%</span> 非法闯入。
                    </p>
                    <p className="text-base md:text-lg text-zinc-400 font-medium">
                       让 eufyCam 可以专注于检测真正重要的事件。
                    </p>
                </div>
                
                {/* Vertical Divider for Desktop / Horizontal for Mobile */}
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent self-stretch"></div>
                <div className="block md:hidden h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent self-center my-2"></div>
                
                {/* Right Side - REMOVED TITLE HERE as requested */}
                <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                    <p className="text-base text-zinc-400 leading-relaxed font-medium max-w-md mt-2">
                       <span className="text-white font-bold">DSKey™</span> 是一个专属于你和家人的加密数字身份令牌，持有授权 DSKey 的家庭成员，eufy Smart Sign 在离家最远 100 ft 即可识别，并声光驱赶闯入的可疑人员。
                    </p>
                </div>
            </div>
        </div>

        {/* --- 2. GOD'S EYE VIEW (RANGE) --- */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 mb-24 group shadow-2xl">
            {/* Background Video - Range Demo */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s]"
            >
              <source src="https://edgeagent2025.github.io/aic_landing/dskey6.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

            {/* Range Indicators */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full max-w-3xl flex items-center justify-center">
                    {/* 100ft Ring Animation */}
                    <div className="absolute w-[80%] aspect-square rounded-full border border-blue-500/30 animate-[ping_3s_linear_infinite] opacity-50"></div>
                    <div className="absolute w-[80%] aspect-square rounded-full border border-dashed border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.2)]"></div>
                    
                    {/* Label */}
                    <div className="absolute top-[20%] bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 flex flex-col items-center">
                        <span className="text-2xl font-black text-white italic">100 ft</span>
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">超视距监测范围</span>
                    </div>
                </div>
            </div>

            {/* Bottom Text Overlay */}
            <div className="absolute bottom-8 left-8 md:left-12 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2">扩展防护边界，系统更早开始响应</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                    扩展最远100ft（可自定义）的防护边界，比传统相机最远识别距离远 2.5 倍，并且在雨雪雾天气也正常检测家人回家，不受视野限制。
                </p>
            </div>
        </div>

        {/* --- 3. WORKFLOW CLOSE-UP (The "How it works" Grid) --- */}
        <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-10 text-center md:text-left">DSKey如何实现家人回家零打扰</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Step 1: Approach */}
                <div className="bg-zinc-900/30 rounded-[2rem] p-6 border border-white/5 flex flex-col h-full group hover:border-blue-500/30 transition-colors">
                    <div className="relative w-full aspect-[4/3] bg-black rounded-2xl overflow-hidden mb-6 border border-white/5">
                        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
                            <source src="https://edgeagent2025.github.io/aic_landing/dskey3.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                            STEP 1
                        </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">携带DSKey回家</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        当你持有手机靠近家门最远100ft（可自定义）范围时，系统开始识别家人身份。
                    </p>
                </div>

                {/* Step 2: Signal/Reaction (UPDATED to Image Fill) */}
                <div className="bg-zinc-900/30 rounded-[2rem] p-6 border border-white/5 flex flex-col h-full group hover:border-green-500/30 transition-colors">
                    <div className="relative w-full aspect-[4/3] bg-zinc-950 rounded-2xl overflow-hidden mb-6 border border-white/5">
                        <img 
                            src="https://github.com/greenlimelon-cmd/AIC-EdgeAgent-V3/blob/main/Media/Auto%20armed.gif?raw=true" 
                            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                            alt="Smart Sign Verified"
                        />
                        <div className="absolute top-4 left-4 bg-zinc-700 text-white text-[10px] font-bold px-2 py-1 rounded">
                            STEP 2
                        </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">无感自动布撤防</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        Eufy Smart Sign识别授权身份，自动撤防。不需要你操作，也无需担心忘记撤防而引发误报（可自定义仅检测或者布撤防）。
                    </p>
                </div>

                {/* Step 3: Phone Notification */}
                <div className="bg-zinc-900/30 rounded-[2rem] p-6 border border-white/5 flex flex-col h-full group hover:border-blue-500/30 transition-colors">
                    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-zinc-800 to-black rounded-2xl overflow-hidden mb-6 border border-white/5 flex items-center justify-center">
                        {/* iOS Notification Mockup */}
                        <div className="w-[85%] bg-zinc-200/90 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-[slideUp_0.8s_ease-out_forwards]">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                    </div>
                                    <span className="text-[10px] font-bold text-black uppercase tracking-wide">EUFY SECURITY</span>
                                </div>
                                <span className="text-[10px] text-zinc-500">NOW</span>
                            </div>
                            <h5 className="text-sm font-bold text-black mb-1">欢迎回家，Will</h5>
                            <p className="text-xs text-zinc-600 leading-tight">系统已识别你为家人，不再对你进行检测和打扰。</p>
                        </div>
                        <div className="absolute top-4 left-4 bg-zinc-700 text-white text-[10px] font-bold px-2 py-1 rounded">
                            STEP 3
                        </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">零打扰和误报体验</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        手机收到确认通知。99% 过滤因为家人回家带来的误报，让安防真正做到“懂你”。
                    </p>
                </div>

            </div>
        </div>

        {/* --- 4. HARDWARE CARD (SMART SIGN) - COMPRESSED HEIGHT --- */}
        <div className="mt-24">
            <div className="w-full bg-[#111] rounded-[3rem] border border-white/10 overflow-hidden flex flex-col md:flex-row group relative">
                
                {/* Left Content: Text & Features (45% Width) - Reduced Padding */}
                <div className="md:w-[45%] p-8 md:p-10 flex flex-col justify-center z-10 bg-gradient-to-r from-zinc-900 via-zinc-900 to-transparent">
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-widest uppercase">
                            Smart Sign
                        </span>
                    </div>
                    
                    {/* Reduced Title Size */}
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-[1.1]">
                        不只是灯牌，<br/>
                        还是 <span className="text-amber-500">24/7</span><br/>
                        强震慑力的安防设备
                    </h3>
                    
                    {/* Reduced Description Margin */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
                        eufy Smart Sign可根据户型自由安插，额外给家庭增加100ft的安防范围。并且内置雷达、灯光和喇叭，当检测到非法闯入，可声光驱离嫌疑人。
                    </p>

                    {/* Compact Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-800/80 border border-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-500">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v10"/><path d="M12 12l4 4"/><path d="M12 12L8 16"/><circle cx="12" cy="12" r="10"/></svg>
                            </div>
                            <span className="text-xs font-bold text-zinc-300">内置雷达</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-800/80 border border-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-500">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 0 1 4 4v2"/><path d="M8 8v2a4 4 0 0 0 8 0V8"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
                            </div>
                            <span className="text-xs font-bold text-zinc-300">高分贝喇叭</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-800/80 border border-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-500">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
                            </div>
                            <span className="text-xs font-bold text-zinc-300">警示灯光</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-800/80 border border-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-500">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <span className="text-xs font-bold text-zinc-300">声光驱离</span>
                        </div>
                    </div>
                </div>

                {/* Right Content: Scene Image (55% Width) - Reduced Min Height */}
                <div className="md:w-[55%] relative min-h-[300px] md:min-h-auto overflow-hidden">
                     {/* Active Status Badge */}
                     <div className="absolute top-6 right-6 bg-red-600/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-20 flex items-center gap-2 shadow-lg border border-red-500/50">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        Intruder Deterrence
                     </div>
                     
                     {/* Scene Image: Using ai-deter.png for scene representation */}
                     <img 
                        src="https://github.com/greenlimelon-cmd/AIC-EdgeAgent-V3/blob/main/Media/smart%20sign.png?raw=true" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        alt="Smart Sign Deterring Stranger"
                     />
                     
                     {/* Gradient Overlay for Text Readability */}
                     <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent"></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
            </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default DSKeyDeepDive;
