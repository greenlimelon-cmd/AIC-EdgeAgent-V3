
import React, { useState, useEffect } from 'react';

const LocalPrivacyDeepDive: React.FC = () => {
  const [tops, setTops] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTops(prev => (prev === 60 ? 120 : 60));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="local-privacy" className="bg-black text-white py-48 md:py-64 border-t border-white/5 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* 1. Header based on Image */}
        <div className="text-center mb-32 animate-[fadeIn_1.2s_ease-out]">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">
            Local AI Agent
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-zinc-500 italic mb-12 tracking-tight">
            Faster. Private. Smarter.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
             <p className="text-xl md:text-3xl text-white font-medium leading-relaxed">
               你的家庭数据，只属于你的家。
             </p>
             <p className="text-lg md:text-2xl text-zinc-400 font-normal leading-relaxed">
               <span className="text-blue-500 font-bold">100% 本地运行</span>，意味着零隐私风险与毫秒级响应。
             </p>
          </div>
        </div>

        {/* 2. Hardware "Closer Look" */}
        <div className="relative flex flex-col items-center">
          
          <div className="relative w-full max-w-7xl aspect-video rounded-[4rem] bg-zinc-950 border border-white/5 overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.1)] group mb-32">
             <div className="absolute inset-0 flex items-center justify-center transition-all duration-[10s] group-hover:scale-105">
               <img 
                 src="https://edgeagent2025.github.io/aic_landing/core.jpg" 
                 alt="Edge Computing Core" 
                 className="w-full h-full object-cover opacity-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
             </div>

             <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                   <div className="bg-blue-600/20 border border-blue-500/30 backdrop-blur-xl px-6 py-2 rounded-full">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">eufy AI Core</span>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Data Status</p>
                      <div className="flex items-center gap-3 justify-end">
                         <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e] animate-pulse"></div>
                         <span className="text-xs font-bold text-white tracking-widest">LOCAL ENCRYPTED</span>
                      </div>
                   </div>
                </div>

                <div className="flex items-end justify-between">
                   <div className="max-w-md hidden md:block">
                      <h4 className="text-3xl font-black mb-3 text-white drop-shadow-md">算力基座</h4>
                      <p className="text-zinc-300 text-sm leading-relaxed font-medium drop-shadow-md">
                        告别云端延迟。无论是 10,000+ 种行为特征库的匹配，还是多路视频流的实时分析，都在这颗芯片内瞬间完成。
                      </p>
                   </div>
                   <div className="flex flex-col items-end">
                      <div className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none transition-all duration-700 ease-in-out drop-shadow-2xl">
                        {tops}<span className="text-blue-500">T</span>
                      </div>
                      <p className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.4em] mt-3">TOPS AI Performance</p>
                   </div>
                </div>
             </div>
          </div>

          {/* 3. Specs Grid - Aligned with "Faster. Private. Smarter." */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full max-w-6xl px-4">
             <div className="reveal">
                <div className="h-0.5 bg-blue-500 w-12 mb-8"></div>
                <h5 className="text-[12px] font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                   <span className="text-blue-500">01.</span> FASTER
                </h5>
                <h3 className="text-3xl font-black mb-5 text-white">毫秒级响应</h3>
                <p className="text-zinc-400 text-base font-light leading-relaxed">
                  没有上传云端的等待，没有网络波动的延迟。从发现危险到发出警报，快至 0.2 秒。在安防里，速度就是安全。
                </p>
             </div>

             <div className="reveal">
                <div className="h-0.5 bg-blue-500 w-12 mb-8"></div>
                <h5 className="text-[12px] font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                   <span className="text-blue-500">02.</span> PRIVATE
                </h5>
                <h3 className="text-3xl font-black mb-5 text-white">隐私不出门</h3>
                <p className="text-zinc-400 text-base font-light leading-relaxed">
                  你的视频、你家人的面孔数据、你的生活习惯，全部加密存储在本地。不上传云端，就没有云端泄露的风险。
                </p>
             </div>

             <div className="reveal">
                <div className="h-0.5 bg-blue-500 w-12 mb-8"></div>
                <h5 className="text-[12px] font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                   <span className="text-blue-500">03.</span> SMARTER
                </h5>
                <h3 className="text-3xl font-black mb-5 text-white">可进化的算力</h3>
                <p className="text-zinc-400 text-base font-light leading-relaxed">
                  支持算力堆叠技术。通过增加计算模块，最高可扩展至 120 TOPS，让家庭安防系统拥有企业级的分析能力。
                </p>
             </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default LocalPrivacyDeepDive;
