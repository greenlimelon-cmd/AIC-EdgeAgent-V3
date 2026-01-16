
import React from 'react';

const ProactiveHeadline: React.FC = () => {
  return (
    <section className="bg-black pt-24 md:pt-40 pb-12 px-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center reveal">
        {/* Massive Headline - Highlighting 'Proactive' instead of 'Security' */}
        <h2 className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-none mb-8 text-white">
          <span className="text-blue-500">Proactive</span> <br className="md:hidden" />
          Security <br className="md:hidden" />
          System
        </h2>
        
        {/* Subtitle with Apple-style gradient */}
        <div className="mt-6 md:mt-8">
          <p className="apple-gradient-text text-2xl md:text-5xl font-bold tracking-tight">
            少误报，更早预警。
          </p>
        </div>
        
        {/* Section Label: Highlights - Integrated here for better flow */}
        <div className="mt-24 md:mt-32 text-left">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white px-1">先刷重点</h2>
        </div>
      </div>
    </section>
  );
};

export default ProactiveHeadline;
