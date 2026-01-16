
import React, { useState, useEffect } from 'react';

// ==========================================
// Types & Data
// ==========================================

type HardwareId = 'hb3' | 'kit';
type PlanId = 'monthly' | '1yr' | '2yr' | '3yr' | 'lifetime';

interface PricingTier {
  salePrice: number;    // The final bundle price the user pays
  msrp: number;         // The total value (Hardware MSRP + Software MSRP)
}

// 硬件配置定义
interface HardwareConfig {
  id: HardwareId;
  name: string;
  badge: string;
  desc: string;
  img: string;
  specs: string[];
  hwMsrp: number;   // 硬件原价
}

const HARDWARE_OPTIONS: HardwareConfig[] = [
  {
    id: 'hb3',
    name: 'HB3 用户升级套装',
    badge: '老用户专属',
    desc: '保留现有 HomeBase 3，仅升级 AI Core 与传感器组件，将现有系统基础上升级EdgeAgent',
    img: "https://edgeagent2025.github.io/aic_landing/old_package2.jpg",
    specs: ['AI Core', 'Security Shield S1', '门磁/红外传感器 x3'],
    hwMsrp: 1099
  },
  {
    id: 'kit',
    name: '全屋智能旗舰套装',
    badge: '新用户首选',
    desc: '包含 HomeBase 4 及最新一代 AI 摄像头，一步到位构建完整的家庭主动防御体系。',
    img: "https://edgeagent2025.github.io/aic_landing/new_package2.jpg",
    specs: ['AI Core', 'HomeBase 4', '最新 AI 摄像头 x2', '智能门铃', '传感器套件'],
    hwMsrp: 1699
  }
];

// 计划元数据
interface PlanMeta {
  id: PlanId;
  name: string;
  subTitle: string;
  isBestValue?: boolean;
  softwareMsrp: number; // 纯软件原价 (Based on Sheet)
  durationLabel: string;
  membershipDuration: string; // For the free gift
}

const ALL_PLANS: PlanMeta[] = [
  { 
    id: 'monthly', 
    name: '月付订阅', 
    subTitle: '灵活方案', 
    softwareMsrp: 29.99,
    durationLabel: '/月',
    membershipDuration: '1 个月'
  },
  { 
    id: '1yr', 
    name: '1 年订阅', 
    subTitle: '入门首选', 
    softwareMsrp: 360,
    durationLabel: '/年',
    membershipDuration: '1 年'
  },
  { 
    id: '2yr', 
    name: '2 年订阅', 
    subTitle: '进阶防护', 
    softwareMsrp: 720,
    durationLabel: '/2年',
    membershipDuration: '2 年'
  },
  { 
    id: '3yr', 
    name: '3 年订阅', 
    subTitle: '最佳性价比', 
    isBestValue: true,
    softwareMsrp: 1080,
    durationLabel: '/3年',
    membershipDuration: '3 年'
  },
  { 
    id: 'lifetime', 
    name: '终身买断', 
    subTitle: '一次付费 终身享用', 
    isBestValue: true,
    softwareMsrp: 1799,
    durationLabel: ' 一次性',
    membershipDuration: '终身'
  },
];

// 价格矩阵 (Hardware ID -> Plan ID -> Price)
// salePrice here is the BUNDLE PRICE (Hardware + Software Combined Sale Price)
const PRICING_MATRIX: Record<HardwareId, Partial<Record<PlanId, PricingTier>>> = {
  hb3: {
    'monthly': { salePrice: 1128.99, msrp: 1128.99 }, // 1099 + 29.99
    '1yr': { salePrice: 999, msrp: 1459 },      // 1099 + 360 = 1459
    '2yr': { salePrice: 1199, msrp: 1819 },     // 1099 + 720 = 1819
    '3yr': { salePrice: 1299, msrp: 2179 },     // 1099 + 1080 = 2179
    'lifetime': { salePrice: 1999, msrp: 2898 }, // 1099 + 1799 = 2898
  },
  kit: {
    'monthly': { salePrice: 1728.99, msrp: 1728.99 }, // 1699 + 29.99
    '1yr': { salePrice: 1499, msrp: 2059 },     // 1699 + 360 = 2059
    '2yr': { salePrice: 1699, msrp: 2419 },     // 1699 + 720 = 2419
    '3yr': { salePrice: 1799, msrp: 2779 },     // 1699 + 1080 = 2779
    // Kit typically no lifetime in this sheet logic, but preventing crashes if selected
  }
};

const ProductSelection: React.FC = () => {
  const [selectedHwId, setSelectedHwId] = useState<HardwareId>('kit');
  const [selectedPlanId, setSelectedPlanId] = useState<PlanId>('3yr');

  const activeHw = HARDWARE_OPTIONS.find(h => h.id === selectedHwId)!;
  
  // 获取当前硬件支持的所有计划
  const availablePlanIds = Object.keys(PRICING_MATRIX[selectedHwId]) as PlanId[];
  
  // 确保切换硬件时，如果当前计划不支持（例如 lifetime），则重置为默认
  useEffect(() => {
    if (!availablePlanIds.includes(selectedPlanId)) {
      setSelectedPlanId('3yr');
    }
  }, [selectedHwId, availablePlanIds, selectedPlanId]);

  const activePlanMeta = ALL_PLANS.find(p => p.id === selectedPlanId)!;
  const pricing = PRICING_MATRIX[selectedHwId][selectedPlanId]!;

  // ------------------------------------------
  // 计算逻辑核心
  // ------------------------------------------
  // Summary Values
  const totalMsrp = activeHw.hwMsrp + activePlanMeta.softwareMsrp;
  const finalPay = pricing.salePrice;
  const totalSavings = totalMsrp - finalPay;
  
  // Strict check for monthly (no savings)
  const displaySavings = totalSavings > 1 ? totalSavings : 0;
  const savingsPercent = displaySavings > 0 ? Math.round((displaySavings / totalMsrp) * 100) : 0;

  // Calculate Hardware & Software Sale Prices (Distributed Savings)
  let hwSalePrice = activeHw.hwMsrp;
  let swSalePrice = activePlanMeta.softwareMsrp;

  if (displaySavings > 0) {
      const hwRatio = activeHw.hwMsrp / totalMsrp;
      const hwSavings = displaySavings * hwRatio;
      hwSalePrice = Math.round(activeHw.hwMsrp - hwSavings);
      swSalePrice = finalPay - hwSalePrice; // Ensure total is exact
  }

  // Calculate Membership Value ($15/mo base)
  const getMembershipValue = (planId: PlanId): number => {
    switch (planId) {
      case 'monthly': return 15;
      case '1yr': return 180;
      case '2yr': return 360;
      case '3yr': return 540;
      case 'lifetime': return 900; // Value at 5 years
      default: return 0;
    }
  };
  const membershipValue = getMembershipValue(selectedPlanId);

  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32 border-t border-white/5 relative selection:bg-blue-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* --- Main Header --- */}
        <div className="mb-16">
           <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
             选购 eufy Edge Agent。
           </h2>
           <div className="flex flex-col sm:flex-row sm:items-center gap-3">
               <p className="text-xl text-[#86868b] font-medium">
                 选择最适合您家庭的守护方案。
               </p>
               <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ff3b30]/10 text-[#ff3b30] text-xs font-bold tracking-wide w-fit">
                  限时附赠 eufy 官网付费会员
               </span>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* ================= LEFT COLUMN: SELECTIONS ================= */}
            <div className="flex-1 w-full">
                
                {/* --- Step 1: Hardware Selection --- */}
                <div className="mb-16">
                   <div className="flex items-center gap-3 mb-6">
                      <span className="w-6 h-6 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-xs font-bold">1</span>
                      <h3 className="text-xl font-semibold text-[#1d1d1f]">选择硬件组合</h3>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {HARDWARE_OPTIONS.map((hw) => {
                        const isSelected = selectedHwId === hw.id;
                        
                        // Dynamic Pricing Calculation for Card
                        // Check if current plan is compatible with this hardware
                        const isCompatible = PRICING_MATRIX[hw.id][selectedPlanId] !== undefined;
                        // Fallback plan if incompatible (e.g. lifetime)
                        const planToUse = isCompatible ? selectedPlanId : '3yr';
                        const planMeta = ALL_PLANS.find(p => p.id === planToUse)!;
                        const tier = PRICING_MATRIX[hw.id][planToUse]!;
                        
                        const hwTotalMsrp = hw.hwMsrp + planMeta.softwareMsrp;
                        const hwTotalSavings = hwTotalMsrp - tier.salePrice;
                        const isMonthly = planToUse === 'monthly';
                        
                        let displayPrice = hw.hwMsrp;
                        let savingsBadge = null;
                        let crossedPrice = null;

                        if (!isMonthly && hwTotalSavings > 1) {
                            const weight = hw.hwMsrp / hwTotalMsrp;
                            const allocatedSavings = hwTotalSavings * weight;
                            displayPrice = Math.round(hw.hwMsrp - allocatedSavings);
                            
                            crossedPrice = (
                                <span className="text-sm text-[#86868b] line-through decoration-1 decoration-[#86868b]">
                                    ${hw.hwMsrp.toLocaleString()}
                                </span>
                            );
                            savingsBadge = (
                                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                                    立省 ${Math.round(allocatedSavings).toLocaleString()}
                                </span>
                            );
                        }

                        return (
                          <div 
                            key={hw.id}
                            onClick={() => setSelectedHwId(hw.id)}
                            className={`relative rounded-3xl p-8 cursor-pointer transition-all duration-300 bg-white flex flex-col justify-between group border-2 ${
                              isSelected 
                              ? 'border-[#0071e3] shadow-xl z-10' 
                              : 'border-transparent hover:border-[#d2d2d7] hover:shadow-md'
                            }`}
                          >
                             {/* Header */}
                             <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider mb-2 px-2 py-0.5 rounded-md ${
                                         isSelected ? 'bg-[#0071e3]/10 text-[#0071e3]' : 'bg-[#f5f5f7] text-[#86868b]'
                                    }`}>
                                         {hw.badge}
                                    </span>
                                    <h4 className={`text-lg font-bold leading-tight ${isSelected ? 'text-[#1d1d1f]' : 'text-[#424245]'}`}>
                                        {hw.name}
                                    </h4>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                     isSelected ? 'border-[#0071e3] bg-[#0071e3]' : 'border-[#d2d2d7]'
                                }`}>
                                    {isSelected && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                                </div>
                             </div>

                             {/* Image */}
                             <div className="w-full h-40 flex items-center justify-center mb-6">
                                <img src={hw.img} alt={hw.name} className="h-full object-contain" />
                             </div>

                             {/* Pricing Display (Dynamic) */}
                             <div className="mb-6 pb-6 border-b border-[#f5f5f7]">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-[#1d1d1f]">${displayPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-1 min-h-[24px]">
                                    {crossedPrice}
                                    {savingsBadge}
                                </div>
                             </div>

                             {/* Specs: Updated to 2-column Grid */}
                             <div className="mt-auto">
                                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                                   {hw.specs.map((spec, i) => (
                                      <li key={i} className="text-xs text-[#1d1d1f] font-medium flex items-start gap-1.5">
                                         <div className="w-1 h-1 bg-[#86868b] rounded-full mt-1.5 shrink-0"></div>
                                         <span className="leading-tight">{spec}</span>
                                      </li>
                                   ))}
                                </ul>
                                <p className="text-xs text-[#86868b] leading-relaxed pt-3 border-t border-[#f5f5f7]">
                                    {hw.desc}
                                </p>
                             </div>
                          </div>
                        );
                      })}
                   </div>
                </div>

                {/* --- Step 2: Subscription Selection --- */}
                <div className="mb-12">
                   <div className="flex items-center gap-3 mb-6">
                      <span className="w-6 h-6 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-xs font-bold">2</span>
                      <h3 className="text-xl font-semibold text-[#1d1d1f]">选择订阅计划</h3>
                   </div>
                   <p className="text-sm text-[#86868b] mb-6 ml-9">选择适合您的服务时长 (搭配硬件购买享高额折扣)。</p>

                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {ALL_PLANS.filter(p => availablePlanIds.includes(p.id)).map((plan) => {
                         const isSelected = selectedPlanId === plan.id;
                         const isBest = plan.isBestValue;
                         
                         // Calculate Dynamic Price for this Plan Card
                         const bundlePricing = PRICING_MATRIX[selectedHwId][plan.id];
                         const planTotalMsrp = activeHw.hwMsrp + plan.softwareMsrp;
                         
                         let displayPrice = plan.softwareMsrp;
                         let savingsBadge = null;
                         let crossedPrice = null;

                         if (plan.id !== 'monthly' && bundlePricing) {
                             const totalPlanSavings = planTotalMsrp - bundlePricing.salePrice;
                             if (totalPlanSavings > 1) {
                                 const weight = plan.softwareMsrp / planTotalMsrp;
                                 const allocatedSavings = totalPlanSavings * weight;
                                 displayPrice = Math.round(plan.softwareMsrp - allocatedSavings);
                                 
                                 crossedPrice = (
                                     <span className="text-xs text-[#86868b] line-through decoration-1 decoration-[#86868b]">
                                         ${plan.softwareMsrp.toLocaleString()}
                                     </span>
                                 );
                                 savingsBadge = (
                                     <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                                         立省 ${Math.round(allocatedSavings).toLocaleString()}
                                     </span>
                                 );
                             }
                         }

                         return (
                            <div
                               key={plan.id}
                               onClick={() => setSelectedPlanId(plan.id)}
                               className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 bg-white border-2 flex flex-col justify-between h-full min-h-[140px] ${
                                  isSelected 
                                  ? 'border-[#0071e3] shadow-lg z-10' 
                                  : 'border-transparent hover:border-[#d2d2d7]'
                               }`}
                            >
                               {isBest && (
                                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0071e3] text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap z-20 shadow-md">
                                     {plan.id === 'lifetime' ? '终身版' : '超值推荐'}
                                  </div>
                               )}

                               <div className="flex justify-between items-start mb-2">
                                  <div>
                                     <h5 className="text-lg font-bold text-[#1d1d1f]">{plan.name}</h5>
                                     <span className={`text-[10px] font-bold uppercase tracking-wider ${isBest ? 'text-[#0071e3]' : 'text-[#86868b]'}`}>
                                        {plan.subTitle}
                                     </span>
                                  </div>
                                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                      isSelected ? 'border-[#0071e3] bg-[#0071e3]' : 'border-[#d2d2d7]'
                                  }`}>
                                      {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                                  </div>
                               </div>

                               <div>
                                  <div className="flex items-baseline gap-1 mb-1">
                                      <span className="text-2xl font-bold text-[#1d1d1f]">
                                        ${displayPrice.toLocaleString()}
                                      </span>
                                      <span className="text-sm font-medium text-[#1d1d1f]">{plan.durationLabel}</span>
                                  </div>
                                  
                                  <div className="flex items-center gap-2 mt-1 min-h-[20px]">
                                      {crossedPrice}
                                      {savingsBadge}
                                  </div>
                               </div>
                            </div>
                         );
                      })}
                   </div>
                </div>

            </div>

            {/* ================= RIGHT COLUMN: STICKY SUMMARY ================= */}
            <div className="lg:w-[400px] flex-shrink-0">
                <div className="sticky top-24 bg-white rounded-[2rem] p-8 shadow-2xl border border-black/5">
                   
                   <div className="flex items-center gap-3 mb-6">
                      <span className="w-6 h-6 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-xs font-bold">3</span>
                      <h3 className="text-xl font-semibold text-[#1d1d1f]">确认订单</h3>
                   </div>

                   <div className="flex flex-col items-center mb-8 pb-8 border-b border-[#f5f5f7]">
                       <div className="w-32 h-32 mb-4 relative">
                           <img src={activeHw.img} alt={activeHw.name} className="w-full h-full object-contain" />
                           {/* Removed blue shield icon as requested */}
                       </div>
                       <h4 className="text-lg font-bold text-[#1d1d1f] text-center leading-tight mb-2">
                           {activeHw.name}
                       </h4>
                       <span className="inline-block bg-[#0071e3]/10 text-[#0071e3] text-xs font-bold px-2 py-1 rounded">
                           {activePlanMeta.name}
                       </span>
                   </div>

                   <div className="space-y-4 mb-8">
                       <div className="flex justify-between text-sm items-center">
                           <span className="text-[#86868b] font-medium">智能硬件</span>
                           <div className="text-right">
                               {displaySavings > 0 ? (
                                   <>
                                      <span className="text-xs text-[#86868b] line-through mr-2 decoration-1 decoration-zinc-400">
                                          ${activeHw.hwMsrp.toLocaleString()}
                                      </span>
                                      <span className="font-semibold text-[#1d1d1f]">${hwSalePrice.toLocaleString()}</span>
                                   </>
                               ) : (
                                   <span className="font-semibold text-[#1d1d1f]">${activeHw.hwMsrp.toLocaleString()}</span>
                               )}
                           </div>
                       </div>
                       
                       <div className="flex justify-between text-sm items-center">
                           <span className="text-[#86868b] font-medium">订阅服务 ({activePlanMeta.name})</span>
                           <div className="text-right">
                               {displaySavings > 0 ? (
                                   <>
                                      <span className="text-xs text-[#86868b] line-through mr-2 decoration-1 decoration-zinc-400">
                                          ${activePlanMeta.softwareMsrp.toLocaleString()}
                                      </span>
                                      <span className="font-semibold text-[#1d1d1f]">${swSalePrice.toLocaleString()}</span>
                                   </>
                               ) : (
                                   <span className="font-semibold text-[#1d1d1f]">${activePlanMeta.softwareMsrp.toLocaleString()}</span>
                               )}
                           </div>
                       </div>

                       {/* Free Membership Line Item - Detailed & Updated */}
                       <div className="flex flex-col gap-2 py-2 border-t border-dashed border-[#f5f5f7]">
                           <div className="flex justify-between items-start">
                               <span className="text-[#86868b] font-medium mt-1">eufy 官网付费会员</span>
                               <div className="text-right flex flex-col items-end">
                                   <span className="text-xs text-[#86868b] line-through decoration-zinc-400 mb-0.5">
                                       ${membershipValue.toLocaleString()}
                                   </span>
                                   <span className="font-bold text-[#1d1d1f] block text-base leading-none">FREE</span>
                                   <span className="text-[10px] text-[#86868b] block mt-0.5">({activePlanMeta.membershipDuration})</span>
                               </div>
                           </div>
                           <div className="text-[11px] text-[#86868b] leading-relaxed bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 flex flex-col gap-1">
                               <div className="flex items-center gap-1.5">
                                   <div className="w-1 h-1 bg-[#86868b] rounded-full"></div>
                                   <span>隔日达物流</span>
                               </div>
                               <div className="flex items-center gap-1.5">
                                   <div className="w-1 h-1 bg-[#86868b] rounded-full"></div>
                                   <span>官网全产品 95 折</span>
                               </div>
                               <div className="flex items-center gap-1.5">
                                   <div className="w-1 h-1 bg-[#86868b] rounded-full"></div>
                                   <span>赠送全部 eufy 设备半年质保</span>
                               </div>
                           </div>
                       </div>
                       
                       {/* Separator for Savings/Total */}
                       <div className="h-px bg-[#f5f5f7] my-2"></div>

                       {displaySavings > 0 && (
                           <>
                               <div className="flex justify-between text-sm items-center text-emerald-600 bg-emerald-50 px-3 py-2 -mx-2 rounded-lg">
                                   <span className="font-bold">限时立省</span>
                                   <span className="font-bold">-${displaySavings.toLocaleString()} ({savingsPercent}%)</span>
                               </div>
                               <div className="h-px bg-[#f5f5f7] my-2"></div>
                           </>
                       )}
                       
                       <div className="flex justify-between items-end">
                           <span className="text-base font-bold text-[#1d1d1f]">今日实付</span>
                           <span className="text-4xl font-black text-[#1d1d1f] tracking-tight">
                               ${finalPay.toLocaleString()}
                           </span>
                       </div>
                       {selectedPlanId === 'monthly' && (
                           <div className="text-right text-xs text-[#86868b] mt-1 font-medium">
                               次月起 $29.99/月
                           </div>
                       )}
                   </div>

                   <button className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full text-lg font-bold transition-transform active:scale-[0.98] shadow-lg shadow-blue-500/30 mb-6">
                       立即购买
                   </button>
                   
                   {/* Enhanced After-sales Benefits */}
                   <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-100 flex flex-col gap-3">
                        <div className="flex items-start gap-3">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                            <p className="text-xs text-[#86868b] font-medium leading-tight">30天无理由退款保证</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 text-blue-600">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2v20M2 12h20"/></svg>
                            </div>
                            <p className="text-xs text-[#86868b] font-medium leading-tight">即使中断订阅，永久保留 AI Core 带来的算力提升</p>
                        </div>
                   </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSelection;
