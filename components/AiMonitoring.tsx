
import React, { useState, useEffect } from 'react';

const AiMonitoring: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-play timeline logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 6000); // Slightly longer for reading
    return () => clearInterval(interval);
  }, []);

  const timelineSteps = [
    {
      id: 0,
      time: "Step 01",
      badge: "Detection",
      title: "确认威胁，真警才报",
      desc: "eufy 通过多重识别和检测，确认是高危情况（如持刀入侵、暴力破坏）才将结果推送给用户，过滤 99% 无效干扰。",
      color: "blue"
    },
    {
      id: 1,
      time: "Step 02",
      badge: "SOP Generation",
      title: "自动生成危险应对指引 (SOP)",
      desc: "即便你在楼上看不到楼下，AI 已快速整理全屋硬件信息，生成符合 911 接报标准的关键证据链。引导你安全应对，而不是盲目硬刚。",
      color: "indigo"
    },
    {
      id: 2,
      time: "Step 03",
      badge: "Action",
      title: "引导报警或静默求助",
      desc: "若深陷危险，引导报 911 并辅助读取信息；若无法开口，一键静默转发证据给紧急联系人。eufy 不会主动报警，决策权在你。",
      color: "red"
    }
  ];

  return (
    <section id="ai-monitoring" className="bg-transparent text-white py-32 md:py-48 overflow-hidden border-t border-white/5 relative">
      
      {/* Background Ambient Effect - Reduced Opacity */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/5 blur-[150px] rounded-full -z-0 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* --- 1. HEADER & VALUE PROPOSITION (UPDATED) --- */}
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
            {/* Enhanced Badge */}
            <div className="mb-8 relative group">
                <div className="absolute inset-0 bg-red-600 blur-[20px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
                <span className="relative inline-flex items-center gap-2 py-2 px-6 rounded-full bg-red-950/30 border border-red-500/40 text-red-400 text-sm md:text-base font-black tracking-[0.1em] uppercase shadow-[0_0_30px_rgba(239,68,68,0.15)] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    AI 专业辅助报警
                </span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-16 leading-[1.1]">
              关键时刻，<br/>
              把慌乱变成专业应对
            </h2>
            
            {/* Split Description Layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl mx-auto">
                {/* Left Side: Value Data */}
                <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
                    <p className="text-lg md:text-xl font-bold text-white leading-tight mb-4">
                       <span className="text-red-500 text-2xl md:text-3xl">90%</span> 的用户不知道如何正确报警<br/>
                       平均浪费 <span className="text-red-500 text-2xl md:text-3xl">30s</span> 沟通时间
                    </p>
                    <p className="text-sm md:text-base text-zinc-400 font-medium">
                       面对危险，每一秒都至关重要
                    </p>
                </div>
                
                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent self-stretch"></div>
                <div className="block md:hidden h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent self-center my-2"></div>
                
                {/* Right Side: Functional Explanation */}
                <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                    <p className="text-base text-zinc-400 leading-relaxed font-medium max-w-md mt-2">
                       确认危险时，EdgeAgent 自动整理全屋语境信息，生成 911 接报标准证据链。是否报警由你决定，但所有前置准备，eufy 已为你完成。
                    </p>
                </div>
            </div>
        </div>

        {/* 2. Timeline Interaction Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            
            {/* Left: Interactive Timeline Steps */}
            <div className="lg:w-1/3 flex flex-col justify-center gap-2">
                {timelineSteps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                        <div 
                            key={step.id}
                            onClick={() => setActiveStep(idx)}
                            className={`relative pl-8 py-6 cursor-pointer transition-all duration-500 group border-l-2 ${
                                isActive ? 'border-red-500 opacity-100' : 'border-zinc-800 opacity-40 hover:opacity-70'
                            }`}
                        >
                            {/* Time Badge */}
                            <div className={`text-xs font-mono font-bold tracking-widest uppercase mb-2 ${
                                isActive ? 'text-red-400' : 'text-zinc-500'
                            }`}>
                                {step.time} <span className="mx-2">•</span> {step.badge}
                            </div>
                            
                            {/* Title */}
                            <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-colors ${
                                isActive ? 'text-white' : 'text-zinc-300'
                            }`}>
                                {step.title}
                            </h3>
                            
                            {/* Description */}
                            <div className={`grid transition-all duration-500 ease-in-out ${
                                isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}>
                                <div className="overflow-hidden">
                                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                    
                                    {/* Progress Bar for Active Step */}
                                    {isActive && (
                                        <div className="w-full h-1 bg-zinc-800 rounded-full mt-6 overflow-hidden">
                                            <div className="h-full bg-red-500 animate-[progress_6s_linear]"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Right: Dynamic UI Visualization (Clean Images) */}
            <div className="lg:w-2/3">
                <div className="relative aspect-[4/5] md:aspect-[16/10] bg-zinc-950 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
                    
                    {/* --- SCENE 1: DETECTION (ActiveStep 0) - Clean Image --- */}
                    <div className={`absolute inset-0 transition-opacity duration-700 ${activeStep === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        {/* Background: Clean Camera Feed */}
                        <img src="https://edgeagent2025.github.io/aic_landing/ai_911_square.png" className="w-full h-full object-cover" alt="Threat Detection Feed" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>

                    {/* --- SCENE 2: SYNTHESIS / SOP (ActiveStep 1) - Clean UI Image --- */}
                    <div className={`absolute inset-0 bg-zinc-900 transition-opacity duration-700 flex items-center justify-center ${activeStep === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                         <img src="https://edgeagent2025.github.io/aic_landing/sop.png" className="w-full h-full object-contain p-8" alt="SOP Interface" />
                    </div>

                    {/* --- SCENE 3: ACTION (ActiveStep 2) - Clean UI Image --- */}
                    <div className={`absolute inset-0 bg-zinc-900 transition-opacity duration-700 flex flex-col items-center justify-center ${activeStep === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                         <img src="https://edgeagent2025.github.io/aic_landing/sos.png" className="w-full h-full object-contain p-8" alt="SOS Action Interface" />
                    </div>

                </div>
            </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes typeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default AiMonitoring;
