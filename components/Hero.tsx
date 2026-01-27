
import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleVideoEnded = () => {
    // 播放结束，停留 20s 后重新播放
    timeoutRef.current = window.setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 20000); // 20000ms = 20s
  };

  return (
    <section id="hero" className="relative h-screen min-h-[800px] bg-black overflow-hidden flex items-center px-6 md:px-24">
      
      {/* 1. Background Video Layer - Increased size (from 55% to 85% width) */}
      <div className={`absolute right-0 top-0 h-full w-full md:w-[85%] lg:w-[75%] z-0 transition-all duration-[3s] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline 
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover md:object-contain md:object-right"
        >
          <source src="https://github.com/greenlimelon-cmd/AIC-EdgeAgent-V3/blob/main/AIC%20Hero%20V2-2.mp4?raw=true" type="video/mp4" />
        </video>
  
        {/* Subtle Vignette to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>

      {/* 2. Main Content Wrapper - Pushed down by 50px and biased to the left */}
      <div className={`relative z-10 max-w-screen-xl w-full pt-12 mt-[50px] transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Product Brand Badge - Font size reduced */}
        <div className="mb-6 inline-block">
          <span className="text-zinc-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
            eufy EdgeAgent™
          </span>
        </div>

        {/* Massive Headline - Font size reduced by ~50% */}
        <h1 className="text-2xl md:text-4xl lg:text-[52px] font-black text-white tracking-tighter leading-[1.1] mb-8">
          The World's First<br />
          <span className="apple-gradient-text">Local Security Agent</span>
        </h1>

        {/* Descriptions - Font size reduced by ~50% */}
        <div className="space-y-3 mb-8">
          <p className="text-lg md:text-2xl font-bold text-white tracking-tight">
            更早预警、减少误报、真威胁才响应。
          </p>
          <p className="text-sm md:text-base font-medium text-zinc-400 tracking-tight max-w-md">
            不只是摄像头，是行为识别安防系统
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-10 mb-16">
          <button className="bg-white text-black px-10 py-3.5 rounded-full text-base font-bold hover:bg-zinc-200 transition-all transform active:scale-95 shadow-xl">
            立即购买
          </button>
        </div>
      </div>

      {/* Background Ambient Spotlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full max-w-2xl aspect-square bg-blue-600/5 blur-[200px] rounded-full pointer-events-none transition-opacity duration-1000"></div>

    </section>
  );
};

export default Hero;
