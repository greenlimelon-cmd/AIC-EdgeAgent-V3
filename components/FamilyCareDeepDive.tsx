
// import React, { useState } from 'react';

// interface SubFeature {
//   title: string;
//   desc: string;
// }

// interface Category {
//   id: string;
//   label: string;
//   tagline: string;
//   subFeatures: SubFeature[];
//   image: string;
// }

// const categories: Category[] = [
//   {
//     id: 'child',
//     label: '孩子守护',
//     tagline: '护着孩子，关怀更入微。',
//     image: 'https://edgeagent2025.github.io/aic_landing/children_protection.png',
//     subFeatures: [
//       { title: '危险区域自定义', desc: '划分泳池、楼梯等高危区，进入即触发父母录制的语音劝阻。' },
//       { title: '行为意图识别', desc: '精准识别攀爬、试图推门等危险动作，第一时间推送告警。' },
//       { title: '出入门禁提醒', desc: '孩子放学回家或独自出门，系统自动识别并告知家长。' },
//     ]
//   },
//   {
//     id: 'vehicle',
//     label: '24/7 全时车辆守护',
//     tagline: '守着爱车，全天候无死角。',
//     image: 'https://edgeagent2025.github.io/aic_landing/car_protection.png',
//     subFeatures: [
//       { title: '家人车辆识别', desc: '自动录入家庭成员车辆，回库无感撤防，异常车辆即刻标记。' },
//       { title: '可疑行为驱离', desc: '识别车窗窥视、试图拉车门等动作，声光组合主动震慑。' },
//       { title: '到家离家记录', desc: '详尽记录车辆进出时间，配合 EarlySense™ 预测安全路径。' }
//     ]
//   },
//   {
//     id: 'package',
//     label: '包裹守护',
//     tagline: '盯紧包裹，状态不再模糊。',
//     image: 'https://edgeagent2025.github.io/aic_landing/package_protection.png',
//     subFeatures: [
//       { title: '投递/取走通知', desc: '包裹放下或被取走时，手机即刻收到带图片的结构化通知。' },
//       { title: '长时间滞留预警', desc: '包裹在门口停留超过预设时长，提醒用户及时取回。' },
//       { title: '包裹前行为监测', desc: '识别陌生人在包裹前的徘徊行为，AI 辅助判定意图。' }
//     ]
//   },
//   {
//     id: 'zone',
//     label: '三圈区域守卫',
//     tagline: '越近越强硬，懂分寸的守护。',
//     image: 'https://edgeagent2025.github.io/aic_landing/three_layer.PNG',
//     subFeatures: [
//       { title: '阶梯式防护布局', desc: '警戒区（远）/ 边界区（中）/ 核心区（近），三层响应分明。' },
//       { title: '身份感知过滤', desc: '自动区分家人、快递员与陌生人，同一种行为采取不同策略。' },
//       { title: '四级威胁升级', desc: '从温和提示、严厉警告到强力驱离，最后才是正式报警。' }
//     ]
//   }
// ];

// const FamilyCareDeepDive: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>(categories[0].id);

//   return (
//     <section id="family-care" className="bg-black text-white py-32 md:py-48 border-t border-white/5 overflow-hidden">
//       <div className="max-w-screen-2xl mx-auto px-6">
        
//         {/* Header Section */}
//         <div className="mb-24 reveal">
//           <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
//             <span className="apple-gradient-text">eufy Family Care™</span>
//           </h2>
//           <p className="text-2xl md:text-4xl font-bold tracking-tight">
//              <span className="text-white">全新全场景专属守护。</span>
//           </p>
//         </div>

//         {/* Main Interactive Grid - Changed items-start to items-center for vertical alignment */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left: Tab Navigation */}
//           <div className="lg:col-span-4 flex flex-col gap-4">
//             {categories.map((category) => {
//               const isActive = activeTab === category.id;
//               return (
//                 <div key={category.id} className="flex flex-col">
//                   <button
//                     onClick={() => setActiveTab(category.id)}
//                     className={`w-full text-left p-8 rounded-[2rem] transition-all duration-500 border flex flex-col gap-2 ${
//                       isActive 
//                       ? 'bg-zinc-900 border-white/10 shadow-xl' 
//                       : 'bg-zinc-950/20 border-white/5 hover:bg-zinc-900/40 hover:border-white/10'
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className={`text-xl font-black transition-colors duration-500 ${
//                         isActive ? 'text-white' : 'text-zinc-200'
//                       }`}>
//                         {category.label}
//                       </span>
//                       <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
//                         isActive 
//                         ? 'bg-blue-500 border-blue-500 rotate-45 text-white' 
//                         : 'border-zinc-700 text-zinc-600'
//                       }`}>
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
//                       </div>
//                     </div>

//                     <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//                       isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
//                     }`}>
//                       <div className="overflow-hidden">
//                         <p className="text-blue-500 font-bold mb-6 text-sm pt-4">{category.tagline}</p>
//                         <div className="space-y-6 pr-4 pb-2">
//                           {category.subFeatures.map((feature, idx) => (
//                             <div key={idx} className="space-y-1 animate-[fadeIn_0.5s_ease-out_forwards]">
//                               <h5 className="text-sm font-black text-white">{feature.title}</h5>
//                               <p className="text-xs text-zinc-300 leading-relaxed">{feature.desc}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right: Immersive Visual Stage - Added lg:mt-12 for extra vertical spacing as requested */}
//           <div className="lg:col-span-8 w-full lg:mt-12">
//             <div className="relative w-full aspect-video bg-zinc-950 rounded-[4rem] border border-white/5 overflow-hidden group shadow-2xl">
//               <div className="absolute inset-0 transition-opacity duration-1000">
//                 {categories.map((cat) => (
//                   <img 
//                     key={cat.id}
//                     src={cat.image} 
//                     alt={cat.label}
//                     className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
//                       activeTab === cat.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}} />
//     </section>
//   );
// };

// export default FamilyCareDeepDive;
