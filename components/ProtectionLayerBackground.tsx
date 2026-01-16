
import React from 'react';

interface Props {
  activeLayer: 0 | 1 | 2 | 3;
}

const ProtectionLayerBackground: React.FC<Props> = ({ activeLayer }) => {
  // Config for the rings
  // Layer 1: Blue (DSKey)
  // Layer 2: Amber (Perception/Decision/Response)
  // Layer 3: Red (AI Monitoring)
  
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[0] overflow-hidden">
        {/* 
            Container positioned at top-left corner.
            Using mix-blend-screen to ensure rings glow against the black background 
            without obscuring text too much if they overlap, 
            though they are z-0 so text (z-10) will be on top.
        */}
        <div className={`absolute transition-all duration-1000 ease-out will-change-transform
            ${activeLayer === 0 ? 'opacity-0 scale-90 translate-x-[-100px]' : 'opacity-100 scale-100 translate-x-0'}
            top-[-20vh] left-[-20vh] w-[80vh] h-[80vh] md:top-[-30vh] md:left-[-15vh] md:w-[100vh] md:h-[100vh] flex items-center justify-center`}
        >
            
            {/* --- Ring 1: Blue (DSKey) --- */}
            <div className={`absolute rounded-full border border-dashed transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${activeLayer === 1 
                  ? 'w-[100%] h-[100%] border-blue-500/40 opacity-100 scale-100 shadow-[0_0_100px_rgba(59,130,246,0.15)]' 
                  : 'w-[110%] h-[110%] border-blue-500/0 opacity-0 scale-110'}
            `}>
                {activeLayer === 1 && (
                    <>
                        <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-[spin_60s_linear_infinite]"></div>
                        {/* Radar Scan Effect */}
                        <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent to-blue-500/50 origin-left animate-[spin_4s_linear_infinite]"></div>
                    </>
                )}
            </div>

            {/* --- Ring 2: Amber (Intelligence/Logic) --- */}
            <div className={`absolute rounded-full border border-dashed transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${activeLayer === 2 
                  ? 'w-[75%] h-[75%] border-amber-500/40 opacity-100 scale-100 shadow-[0_0_100px_rgba(245,158,11,0.15)]' 
                  : activeLayer > 2 ? 'w-[100%] h-[100%] border-amber-500/0 opacity-0 scale-110' : 'w-[65%] h-[65%] border-amber-500/0 opacity-0 scale-90'}
            `}>
                 {activeLayer === 2 && (
                    <div className="absolute inset-0 rounded-full border border-amber-500/10 animate-[spin_40s_linear_infinite_reverse]"></div>
                 )}
            </div>

            {/* --- Ring 3: Red (Alarm/Monitoring) --- */}
            <div className={`absolute rounded-full border border-dashed transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${activeLayer === 3 
                  ? 'w-[50%] h-[50%] border-red-500/50 opacity-100 scale-100 shadow-[0_0_120px_rgba(239,68,68,0.2)] bg-red-900/5' 
                  : 'w-[40%] h-[40%] border-red-500/0 opacity-0 scale-90'}
            `}>
                 {activeLayer === 3 && (
                    <div className="absolute inset-0 rounded-full border border-red-500/20 animate-pulse"></div>
                 )}
            </div>

            {/* Central Core (Always faintly visible if activeLayer > 0) */}
            <div className={`absolute w-[10%] h-[10%] bg-zinc-900 rounded-full border border-white/5 transition-all duration-1000 ${activeLayer > 0 ? 'opacity-100' : 'opacity-0'}`}></div>

        </div>
    </div>
  );
};

export default ProtectionLayerBackground;
