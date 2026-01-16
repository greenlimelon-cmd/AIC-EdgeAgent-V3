
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Will L.",
      role: "Beta Phase 1 - 首席测试官",
      days: "ACTIVE 185 DAYS",
      topic: "3D DIGITAL TWIN",
      status: "6 MONTHS ACTIVE",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "作为首批 Beta 测试者，EdgeAgent 陪伴了我 180 多天。它最让我惊讶的不是 3D 数字孪生，而是 BionicMind 的自学习能力。前两个月还会偶尔误报邻居的猫，三个月后系统仿佛“认识”了周围的一切，这种长效的准确度是云端 AI 给不了的。"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Beta Phase 1 - 居家安全达人",
      days: "ACTIVE 192 DAYS",
      topic: "CHILD SAFETY",
      status: "180+ DAYS PRO",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content: "半年的深度体验后，我发现“孩子守护模式”已经成了家里的“虚拟保姆”。尤其是在后院泳池区域，系统识别到孩子独自靠近时的语音预警非常果断，这半年里帮我化解了数次潜在风险，安全感已经进到了生活习惯里。"
    },
    {
      id: 3,
      name: "James Miller",
      role: "Beta Phase 2 - 智能家居极客",
      days: "ACTIVE 178 DAYS",
      topic: "EDGE PERFORMANCE",
      status: "VERIFIED BETA",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      content: "我最看重的是响应速度。用了半年，EdgeAgent 的本地算力从未让我失望，DSKey 的无感布撤防在我每天上下班时都表现得极度丝滑。对比我之前用的 Ring，这简直是两个时代的产物，本地 AI 才是真正的未来。"
    },
    {
      id: 4,
      name: "Linda Wang",
      role: "Beta Phase 2 - 资深安防专家",
      days: "ACTIVE 181 DAYS",
      topic: "AI INTERACTION",
      status: "6 MONTHS ACTIVE",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      content: "长达六个月的压力测试证明，eufy 的方案在处理陌生人徘徊和包裹防护上确实有一套。Anka 助手在搜索历史录像时非常智能，自然语言搜索省去了翻找列表的痛苦。这不仅是硬件升级，更是家庭管理逻辑的跨越。"
    }
  ];

  const betaTesters = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
  ];

  return (
    <section className="bg-[#fff] py-24 md:py-40 text-black overflow-hidden border-t border-black/5">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-blue-600"></div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">PU VOICE | 核心用户心声</span>
            </div>
            {/* 优化后的标题：根据用户要求明确分行 */}
            <h2 className="text-[9vw] md:text-[5.5vw] font-black tracking-tighter leading-[1.05] mb-4">
              <span className="block">看看已经连续使用了</span>
              <span className="block">
                <span className="text-blue-600">180+天</span>的 Beta 用户怎么说
              </span>
            </h2>
          </div>

          {/* Beta Status Widget */}
          <div className="bg-zinc-50 border border-black/5 rounded-[2rem] p-6 flex items-center gap-6 shadow-sm">
            <div className="flex -space-x-3">
              {betaTesters.map((img, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-zinc-200">
                  <img src={img} alt="tester" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">BETA PROGRAM STATUS</p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black">100+</span>
                <span className="text-xs font-bold text-blue-600">Verified Testers</span>
              </div>
              <p className="text-[9px] font-bold text-zinc-400">平均累计运行 180+ 天</p>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-[#fbfbfd] rounded-[3rem] p-10 md:p-12 flex flex-col justify-between group hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 border border-black/[0.03]">
              <div>
                <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{item.status}</span>
                  </div>
                </div>

                <div className="relative mb-12">
                   <svg className="absolute -top-6 -left-6 text-blue-600/10 w-16 h-16" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8H6v2a2 2 0 002 2h2v4H8a6 6 0 01-6-6v-8a2 2 0 012-2h4zm12 0v8h-4v2a2 2 0 002 2h2v4h-2a6 6 0 01-6-6v-8a2 2 0 012-2h4z"/></svg>
                   <p className="text-lg md:text-xl font-bold leading-relaxed text-zinc-800 tracking-tight italic">
                     {item.content}
                   </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-black/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 border border-black/5">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-base font-black">{item.name}</h5>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                      {item.role} <span className="mx-1 opacity-30">•</span> <span className="text-blue-600">{item.days}</span>
                    </p>
                  </div>
                </div>
                <div className="px-5 py-2 rounded-xl bg-white border border-black/5 shadow-sm group-hover:border-blue-500/20 group-hover:bg-blue-50/30 transition-all">
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{item.topic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-6">BETA PROGRAM PHASE 1 & 2 RESULTS ARE VERIFIED.</p>
          <div className="inline-flex flex-col items-center gap-4">
             <h4 className="text-xl md:text-2xl font-black italic">阅读 6 个月内测完整安全性报告</h4>
             <button className="text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all group">
                View PDF Report
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
