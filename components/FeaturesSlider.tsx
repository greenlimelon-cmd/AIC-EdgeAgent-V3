import React, { useState, useRef, useEffect } from 'react';

interface Feature {
  id: number;
  label: string;
  title: string;
  tagline: string;
  content: string;
  videoUrl: string;
  accentColor: string;
}

const features: Feature[] = [
  {
    id: 0,
    label: 'eufy Bionic Mind™',
    title: '五大身份识别',
    tagline: '识人准确度代际跨越',
    content: '首创 5 种身份识别，配合时空连续性引擎。越用越懂你，误报更少，也更可信。',
    videoUrl: 'https://edgeagent2025.github.io/aic_landing/bionic_mind.mp4',
    accentColor: 'blue',
  },
  {
    id: 1,
    label: 'eufy DSKey™',
    title: '空间安防钥匙',
    tagline: '30 米超视距识别',
    content: '回家零误报，离家自布防。看清你之前就先认出你。',
    videoUrl: 'https://edgeagent2025.github.io/aic_landing/dskey3.mp4',
    accentColor: 'cyan',
  },
  {
    id: 2,
    label: 'eufy EarlySense™',
    title: '危险行为理解',
    tagline: '一眼看穿，读懂意图',
    content: '10 种高危动作分析。更能读懂意图，对危险的嗅觉历来最敏锐。',
    videoUrl: 'https://edgeagent2025.github.io/aic_landing/dangerous_behavior.mp4',
    accentColor: 'red',
  },
  {
    id: 3,
    label: 'eufy AI Monitoring™',
    title: 'AI 专业报警服务',
    tagline: '关键时刻，真警才响',
    content: '关键时刻，过滤 99.9% 误报，确保只有真正的威胁才会触发救援。',
    videoUrl: 'https://edgeagent2025.github.io/aic_landing/ai_monitoring2.mp4',
    accentColor: 'zinc',
  }
];

const FeaturesSlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const newIdx = Math.round(scrollLeft / width);
    if (newIdx !== activeIdx) setActiveIdx(newIdx);
  };

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
    setActiveIdx(idx);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = window.setInterval(() => {
        const nextIdx = (activeIdx + 1) % features.length;
        scrollTo(nextIdx);
      }, 4000);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, activeIdx]);

  return (
    <section id="highlights" className="pb-24 bg-black overflow-hidden stagger-parent">
      
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-[5vw] md:px-[10vw] gap-10 pb-8 reveal"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((f, i) => (
          <div 
            key={f.id} 
            className="flex-shrink-0 w-[85vw] md:w-[75vw] snap-center"
          >
            <div className={`relative h-[65vh] md:h-[75vh] rounded-[3.5rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group transition-transform duration-500`}>
              
              {/* Video Layer - Removed darkening masks for maximum clarity */}
              <div className="absolute inset-0 z-0">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                >
                  <source src={f.videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Text Layer - With soft drop shadows for legibility instead of a full screen gradient mask */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-14 pointer-events-none">
                
                {/* Top Left: Header */}
                <div className="flex flex-col items-start text-left max-w-2xl pointer-events-auto">
                    <div className={`inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-5 ${
                         f.accentColor === 'blue' ? 'text-blue-400' : 
                         f.accentColor === 'cyan' ? 'text-cyan-400' : 
                         f.accentColor === 'red' ? 'text-red-400' : 'text-zinc-300'
                    }`}>
                        <span className="text-[10px] md:text-xs font-black tracking-widest uppercase">
                            {f.label}
                        </span>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-3 leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                      {f.title}
                    </h3>

                    <h4 className="text-xl md:text-2xl text-zinc-100 font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                      {f.tagline}
                    </h4>
                </div>

                {/* Bottom Left: Description */}
                <div className="max-w-lg text-left pointer-events-auto">
                    <p className="text-sm md:text-lg text-zinc-100 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] line-clamp-3">
                      {f.content}
                    </p>
                </div>
              </div>

              {/* Top Right: Status Badge */}
              <div className="absolute top-8 right-8 z-20 pointer-events-auto">
                 <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-2xl">
                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                         f.accentColor === 'blue' ? 'bg-blue-500' : 
                         f.accentColor === 'cyan' ? 'bg-cyan-400' : 
                         f.accentColor === 'red' ? 'bg-red-500' : 'bg-zinc-300'
                    }`}></div>
                    <span className="text-[10px] tracking-widest font-bold uppercase text-white/90">AI Core Active</span>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-6 reveal">
        <div className="flex bg-[#1a1a1a]/80 backdrop-blur-3xl px-8 py-5 rounded-[2.5rem] gap-4 items-center shadow-2xl border border-white/5">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                scrollTo(i);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-500 ${
                activeIdx === i 
                ? 'w-10 h-2 bg-[#d2d2d7] rounded-full' 
                : 'w-2 h-2 bg-[#424245] hover:bg-[#6e6e73] rounded-full'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="w-14 h-14 rounded-full bg-[#1a1a1a]/80 backdrop-blur-3xl border border-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95 shadow-xl group"
        >
          {isAutoPlaying ? (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" className="text-white">
              <rect width="4" height="16" rx="1" />
              <rect x="10" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" className="text-white ml-1">
              <path d="M1 1.5L13 8L1 14.5V1.5Z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default FeaturesSlider;