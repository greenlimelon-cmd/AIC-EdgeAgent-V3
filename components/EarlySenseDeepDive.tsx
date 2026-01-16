import React, { useState } from 'react';

interface Behavior {
  id: string;
  name: string;
  desc: string;
  analysisSample: {
    title: string;
    logic: string[];
    visualType: 'skeleton' | 'path' | 'proximity';
  };
}

const behaviors: Behavior[] = [
  { 
    id: 'knife', 
    name: "持刀", 
    desc: "识别金属器械形态",
    analysisSample: {
      title: "器械威胁分析",
      logic: ["高对比度物体形态提取", "手部关联性判定", "攻击态势感知"],
      visualType: 'skeleton'
    }
  },
  { 
    id: 'loiter', 
    name: "徘徊", 
    desc: "分析非线性行径",
    analysisSample: {
      title: "异常停留判定",
      logic: ["时空特征熵值计算", "往返路径交叉分析", "逗留时长权重累积"],
      visualType: 'path'
    }
  },
  { 
    id: 'tail', 
    name: "尾随", 
    desc: "判定跟进距离",
    analysisSample: {
      title: "动态关系建模",
      logic: ["双重目标运动矢量同步", "距离梯度突变监测", "跟随持续时间判定"],
      visualType: 'proximity'
    }
  },
  { 
    id: 'climb', 
    name: "翻越", 
    desc: "捕捉垂直位移",
    analysisSample: {
      title: "重力加速度偏移",
      logic: ["垂直象限位移锁定", "非正常通道入站识别", "攀爬动作特征提取"],
      visualType: 'skeleton'
    }
  },
  { 
    id: 'peek', 
    name: "窥视", 
    desc: "窗口/门缝停留",
    analysisSample: {
      title: "视角焦点追踪",
      logic: ["面部/视线方向判定", "边界停留角度分析", "探视动作频率记录"],
      visualType: 'path'
    }
  },
  { 
    id: 'peek2', 
    name: "频繁探头", 
    desc: "环境扫描动作",
    analysisSample: {
      title: "环境交互分析",
      logic: ["边缘感知权重升级", "头部瞬时偏转频率", "掩体关联性判断"],
      visualType: 'skeleton'
    }
  },
  { 
    id: 'linger', 
    name: "长时间停留", 
    desc: "滞留风险权重",
    analysisSample: {
      title: "风险值静态积累",
      logic: ["背景减除运动检测", "骨架静止状态分析", "超时阈值自动触发"],
      visualType: 'proximity'
    }
  },
];

const EarlySenseDeepDive: React.FC = () => {
  const [activeAction, setActiveAction] = useState<Behavior>(behaviors[0]);

  const riskTimeline = [
    { 
      label: "靠近", 
      step: "01", 
      status: "Initial", 
      desc: "环境监测，目标标记", 
      log: "Local Evidence ID: 0x92F1",
      narrative: "从进入感知范围起，系统在本地建立独立索引，标记该目标的初始风险权重。" 
    },
    { 
      label: "试探", 
      step: "02", 
      status: "Analyzing", 
      desc: "模式匹配，评分初始化", 
      log: "Score Delta: +15%",
      narrative: "系统校核目标的往返路径与逗留时间。非线性的“试探性”动作将加速风险评分攀升。" 
    },
    { 
      label: "趋近", 
      step: "03", 
      status: "Warning", 
      desc: "意图判定，风险攀升", 
      log: "Intent Prob: 84%",
      narrative: "当动作形成闭环逻辑（如反复探头），系统判定其具备入侵图谋，预警等级自动上提。" 
    },
    { 
      label: "边界动作", 
      step: "04", 
      status: "Evidence", 
      desc: "策略触发，全链路留存", 
      log: "Report Finalized",
      narrative: "识别关键边界意图。系统自动回溯全过程，生成包含所有逻辑断点的司法级证据链。" 
    },
  ];

  return (
    <section id="earlysense-detail" className="min-h-screen bg-black text-white py-40 px-6 flex flex-col items-center relative overflow-hidden border-t border-white/5">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] -z-10"></div>

      <div className="max-w-screen-xl w-full mx-auto">
        
        <div className="text-center mb-24">
          <span className="text-blue-500 text-sm font-black tracking-[0.4em] uppercase mb-6 block animate-[fadeIn_1s_ease-out]">
            eufy EarlySense™
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[1.1]">
            危险行为理解
          </h2>
          <div className="inline-block px-10 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12">
            <p className="text-zinc-100 text-base md:text-xl font-bold tracking-tight">
              全球首创危险行为理解
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-64">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {behaviors.map((action) => (
              <button 
                key={action.id} 
                onClick={() => setActiveAction(action)}
                className={`text-left group backdrop-blur-sm border p-6 rounded-[2.5rem] transition-all duration-500 ${
                  activeAction.id === action.id 
                  ? 'bg-blue-500/10 border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                  : 'bg-zinc-900/30 border-white/5 hover:bg-zinc-800/50 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    activeAction.id === action.id ? 'bg-blue-500/20' : 'bg-zinc-800 group-hover:bg-zinc-700'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      activeAction.id === action.id ? 'bg-blue-500 animate-pulse' : 'bg-zinc-400 group-hover:bg-zinc-300'
                    }`}></div>
                  </div>
                  {activeAction.id === action.id && (
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">Live Sample</span>
                  )}
                </div>
                <h4 className={`text-lg font-bold mb-1 transition-colors ${
                  activeAction.id === action.id ? 'text-blue-400' : 'text-zinc-100 group-hover:text-white'
                }`}>{action.name}</h4>
                <p className="text-xs text-zinc-300 font-medium leading-tight">{action.desc}</p>
              </button>
            ))}
            <div className="bg-zinc-950/50 border border-zinc-900 border-dashed p-6 rounded-[2.5rem] flex flex-col justify-center items-center text-center opacity-80">
              <span className="text-zinc-400 text-xs font-black tracking-widest uppercase mb-2">Expanding Engine</span>
              <p className="text-sm font-bold text-zinc-200 leading-tight">等 10+ 种<br/>高危动作持续升级</p>
            </div>
          </div>

          <div className="lg:col-span-7 sticky top-32">
            <div className="bg-zinc-950 rounded-[4rem] border border-white/10 overflow-hidden relative group aspect-[4/3] md:aspect-video flex flex-col shadow-2xl">
              <div className="absolute inset-0 z-10 pointer-events-none p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="bg-blue-500 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest text-white">Detection</div>
                    <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[10px] font-bold text-zinc-100">
                      Sample ID: {activeAction.id.toUpperCase()}_0294
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Inference Conf.</div>
                    <div className="text-2xl font-black text-blue-500">98.2%</div>
                  </div>
                </div>
                <div className="flex-grow flex items-center justify-center relative">
                   {activeAction.analysisSample.visualType === 'skeleton' && (
                     <div className="w-48 h-64 border border-blue-500/20 rounded-full relative animate-[pulse_2s_infinite]">
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-32 bg-blue-500/40"></div>
                        <div className="absolute top-24 left-[20%] w-[60%] h-px bg-blue-500/60"></div>
                     </div>
                   )}
                   {activeAction.analysisSample.visualType === 'path' && (
                     <svg className="w-full h-full opacity-40">
                        <path d="M 50 150 Q 150 50 250 150 T 450 150" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />
                        <circle cx="450" cy="150" r="4" fill="#3b82f6" />
                     </svg>
                   )}
                   {activeAction.analysisSample.visualType === 'proximity' && (
                     <div className="flex items-center gap-12">
                        <div className="w-16 h-16 rounded-full border border-white/20"></div>
                        <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-transparent relative">
                           <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-blue-500 bg-blue-500/20"></div>
                     </div>
                   )}
                </div>
                <div className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
                   <h5 className="text-xl font-bold mb-4 flex items-center gap-3">
                     <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                     {activeAction.analysisSample.title}
                   </h5>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {activeAction.analysisSample.logic.map((l, idx) => (
                        <div key={idx}>
                          <span className="text-[10px] font-black text-zinc-400 uppercase mb-2 block tracking-widest">Logic Step {idx+1}</span>
                          <p className="text-xs font-medium text-zinc-100 leading-tight">{l}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-100" alt="Sample Environment" />
            </div>
          </div>
        </div>

        {/* --- PAGE 8: UNIFIED RISK TIMELINE --- */}
        <div className="relative mt-80">
          
          <div className="max-w-4xl mx-auto text-center mb-32">
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
              过程清晰，一切皆有据可查。
            </h3>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto">
              每一秒轨迹都是一份存证。EarlySense™ 并不只是等待结果，而是在过程中不断沉淀证据，确保每一次决策都经得起回溯。
            </p>
          </div>

          <div className="bg-zinc-950/60 rounded-[5rem] border border-white/5 p-8 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            
            <div className="w-full aspect-[21/9] bg-black/40 rounded-[3rem] border border-white/5 mb-32 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
               
               <div className="absolute top-10 right-10 flex gap-10 opacity-60">
                  <div className="text-right">
                    <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400 block">Encryption Status</span>
                    <span className="text-xs font-bold">AES-256 Local</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400 block">Evidence Integrity</span>
                    <span className="text-xs font-bold">Verified</span>
                  </div>
               </div>

               <div className="text-center z-10 px-8">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-blue-500/20 group-hover:scale-110 transition-transform duration-700">
                     <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7"/><path d="M16 5V3"/><path d="M8 5V3"/><path d="M3 9h18"/><circle cx="18" cy="18" r="3"/><path d="m20.2 20.2 1.3 1.3"/></svg>
                  </div>
                  <h4 className="text-2xl md:text-5xl font-bold text-zinc-400 tracking-tight italic mb-6">[ 风险逻辑链条回溯示意图 ]</h4>
                  <div className="flex items-center justify-center gap-4 text-zinc-500">
                    <div className="h-px w-12 bg-zinc-800"></div>
                    <span className="text-xs font-black tracking-widest uppercase">Secure-Trace™ Traceability Engine Active</span>
                    <div className="h-px w-12 bg-zinc-800"></div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
              <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-px bg-gradient-to-r from-zinc-900 via-white/10 to-zinc-900 -z-0"></div>

              {riskTimeline.map((step, i) => (
                <div key={i} className="flex flex-col items-start relative z-10 group/item">
                  <div className={`w-20 h-20 mb-10 flex items-center justify-center relative transition-all duration-700 group-hover/item:scale-110 ${
                    step.status === 'Evidence' ? 'text-white' : 'text-zinc-300'
                  }`}>
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-current opacity-10 group-hover/item:opacity-20">
                      <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" />
                    </svg>
                    <span className="text-2xl font-black font-mono tracking-tighter z-10">{step.step}</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className={`text-2xl font-black mb-1 ${step.status === 'Evidence' ? 'text-white' : 'text-zinc-100'}`}>
                        {step.label}
                      </h4>
                      <div className="flex items-center gap-2">
                         <div className={`w-1 h-1 rounded-full ${step.status === 'Evidence' ? 'bg-blue-500' : 'bg-zinc-500'}`}></div>
                         <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{step.desc}</span>
                      </div>
                    </div>
                    
                    <p className="text-base text-zinc-200 font-light leading-relaxed group-hover/item:text-white transition-colors">
                      {step.narrative}
                    </p>

                    <div className="pt-4 border-t border-white/5 opacity-60 group-hover/item:opacity-100 transition-opacity">
                       <span className="text-[11px] font-mono font-bold ${step.status === 'Evidence' ? 'text-blue-400' : 'text-zinc-300'}">
                         {step.log}
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-32 p-12 rounded-[3.5rem] bg-zinc-900/30 border border-white/5 flex flex-col md:flex-row items-center gap-10 md:gap-16">
               <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
               </div>
               <div className="flex-grow text-center md:text-left">
                  <h5 className="text-2xl font-black mb-3">司法级证据存证支持</h5>
                  <p className="text-zinc-200 text-lg font-light leading-relaxed max-w-2xl italic">
                    “EarlySense™ 不只是捕捉动作，它在构建真相。每一个关键逻辑断点都被加密存证，为安防提供最高级别的证据保障。”
                  </p>
               </div>
               <div className="flex flex-col items-center px-10 border-l border-white/5 hidden lg:flex">
                  <div className="text-4xl font-black text-white mb-2">0%</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap">证据链缺失率</div>
               </div>
            </div>

          </div>

          <div className="mt-16 text-center opacity-60 select-none">
             <span className="text-[10px] font-black tracking-[0.8em] uppercase text-zinc-500">Edge Agent Powered by eufy Secure-Trace™ v4.0</span>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}} />
    </section>
  );
};

export default EarlySenseDeepDive;