
import React, { useEffect, useRef, useState } from 'react';

// ==========================================
// Visual Assets
// ==========================================
const ASSETS = {
  DSKEY: 'https://edgeagent2025.github.io/aic_landing/dskey6.mp4',
  BEHAVIOR: 'https://edgeagent2025.github.io/aic_landing/dangerous_behavior.mp4',
  DECISIONS: 'https://edgeagent2025.github.io/aic_landing/bionic_mind.mp4',
  ALARM: 'https://edgeagent2025.github.io/aic_landing/ai_911_square.png',
  PROPERTY_VIDEO: 'https://edgeagent2025.github.io/aic_landing/package_protection.mp4',
  PROPERTY_POSTER: 'https://edgeagent2025.github.io/aic_landing/package_protection.png',
  CHILD: 'https://edgeagent2025.github.io/aic_landing/child_getting_home.png',   
  ACT: 'https://edgeagent2025.github.io/aic_landing/ai-deter.png',
  LOCAL: 'https://edgeagent2025.github.io/aic_landing/core.jpg',
  HOUSE_ICON: 'https://edgeagent2025.github.io/aic_landing/3d-house.png', 
  ZONE: 'https://edgeagent2025.github.io/aic_landing/three_layer.PNG',
  VOICE: 'https://edgeagent2025.github.io/aic_landing/ai_first.png',
  REPORT: 'https://edgeagent2025.github.io/aic_landing/report.png' 
};

// ==========================================
// Data: Layered Security System
// ==========================================
const LAYERS = [
  {
    id: 'layer1',
    color: 'blue',
    // Part 1: Funnel Box Data
    boxTitle: '家庭第一层防护层 (30m - 12m)',
    boxDesc: 'DSKey™超远距离家人身份确认',
    sideData: [
        '家人误报减少99%，',
        '有效减少70%非法闯入'
    ],

    // Part 2: Bento Grid Data
    shortTitle: '外围防护',
    distance: '30m - 12m',
    evidence: [
        { value: 99, suffix: '%', label: '家人误报减少' },
        { value: 70, suffix: '%', label: '非法闯入减少' }
    ],
    
    // Main Content Data
    subHeadline: '家庭第一层防护层',
    headline: 'DSKey™ 超远距离家人身份确认', 
    
    // Styles
    funnelWidth: 'w-[60%]',
    boxStyle: "bg-gradient-to-r from-blue-900/40 to-blue-950/10 border border-blue-400/20 shadow-[0_4px_20px_rgba(59,130,246,0.1)] backdrop-blur-md",
    activeBoxStyle: "bg-gradient-to-r from-blue-800/60 to-blue-900/30 border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    textStyle: "text-blue-500", 
    descStyle: "text-blue-200/70",
    ringColor: "border-blue-500",
    glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    
    // Layer 1 Content
    cards: [
      {
        id: 'dskey',
        title: 'DSKey™ 数字安防钥匙',
        sub: '你的手机就是你的家庭钥匙',
        detail: '你的手机就是加密身份凭证。当你离家最远 100 英尺 时，系统即可自动识别，停止对家人的安防检测，减少 99% 家庭成员引发的误报。',
        video: ASSETS.DSKEY,
        colSpan: 'md:col-span-6',
        height: 'h-[300px]' 
      }
    ]
  },
  {
    id: 'layer2',
    color: 'amber',
    // Part 1: Funnel Box Data
    boxTitle: '家庭第二层防护层 (12m - 6m)',
    boxDesc: 'AI多模态识别 | AI专业研判 | 分级响应',
    sideData: [
        '90%识别出接近家园人员的身份和意图，',
        '进一步减少70%误报'
    ],

    // Part 2: Bento Grid Data
    shortTitle: '行为研判',
    distance: '12m - 6m',
    evidence: [
        { value: 90, suffix: '%', label: '身份意图识别' },
        { value: 70, suffix: '%', label: '误报进一步减少' }
    ],

    subHeadline: '家庭第二层防护层',
    headline: 'AI 多模态识别与专业研判',

    funnelWidth: 'w-[55%]',
    boxStyle: "bg-gradient-to-r from-amber-900/40 to-amber-950/10 border border-amber-400/20 shadow-[0_4px_20px_rgba(245,158,11,0.1)] backdrop-blur-md",
    activeBoxStyle: "bg-gradient-to-r from-amber-800/60 to-amber-900/30 border-amber-400/50 shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    textStyle: "text-amber-500", 
    descStyle: "text-amber-200/70",
    ringColor: "border-amber-500",
    glowColor: "shadow-[0_0_30px_rgba(245,158,11,0.4)]",

    // Layer 2 Content
    cards: [
      {
        id: 'behavior',
        title: '行为检测系统',
        sub: '不只检测 Motion，而是完整整理事件全貌',
        detail: '涵盖 10,000+ 种真实世界安防场景。大多数系统只能检测到“有东西在动”，EdgeAgent 能理解是谁、在哪里、在干什么。',
        video: ASSETS.BEHAVIOR,
        colSpan: 'md:col-span-4',
        height: 'h-[300px]'
      },
      {
        id: 'decision',
        title: 'AI 专业研判',
        sub: '基于专业安防机构标准',
        detail: '每一次提醒在送达你之前，都会经过 3,000+ 条专业机构发布的安防准则评估，真威胁才通知。',
        video: ASSETS.DECISIONS,
        colSpan: 'md:col-span-2',
        height: 'h-[300px]'
      },
      {
        id: 'response',
        title: '分级响应',
        sub: '只在真正重要时才行动',
        detail: '4层分级响应仅在风险被确认后触发，不关键事件不打扰，关键事件强提醒。',
        img: ASSETS.ACT,
        colSpan: 'md:col-span-3',
        height: 'h-[240px]'
      },
      {
        id: 'notification',
        title: '升级版AI智慧Notification',
        sub: '一眼看清真相',
        detail: '通知包含缩略图、身份、位置与行为，不再是简单的 Motion Detected。',
        img: ASSETS.REPORT,
        colSpan: 'md:col-span-3',
        height: 'h-[240px]'
      }
    ]
  },
  {
    id: 'layer3',
    color: 'red', 
    // Part 1: Funnel Box Data
    boxTitle: '家庭第三层防护层 (6m - 3m)',
    boxDesc: '结合人脸检测最终确认身份&危险辅助报警',
    sideData: [
        '接近家园人员的身份99%被识别，',
        '85%的可疑行为在这一层被彻底遏制'
    ],

    // Part 2: Bento Grid Data
    shortTitle: '风险遏制',
    distance: '6m - 3m',
    evidence: [
        { value: 99, suffix: '%', label: '身份最终确认' },
        { value: 85, suffix: '%', label: '可疑行为被遏制' }
    ],

    subHeadline: '家庭第三层防护层',
    headline: '结合人脸检测最终确认身份',

    funnelWidth: 'w-[50%]',
    boxStyle: "bg-gradient-to-r from-red-900/40 to-red-950/10 border border-red-400/20 shadow-[0_4px_20px_rgba(239,68,68,0.1)] backdrop-blur-md",
    activeBoxStyle: "bg-gradient-to-r from-red-800/60 to-red-900/30 border-red-400/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]",
    textStyle: "text-red-500", 
    descStyle: "text-red-200/70",
    ringColor: "border-red-500",
    glowColor: "shadow-[0_0_30px_rgba(239,68,68,0.4)]",

    // Layer 3 Content
    cards: [
      {
        id: 'alarm',
        title: 'AI 专业辅助报警',
        sub: '从慌乱到清晰决策',
        detail: 'AI 整理位置、事件经过并呈现已验证的证据 —— 最终由你决定是否以及何时对外求助。',
        img: ASSETS.ALARM,
        colSpan: 'md:col-span-6',
        height: 'h-[240px]'
      }
    ]
  },
  {
    id: 'layer4',
    color: 'purple', 
    // Part 1: Funnel Box Data
    boxTitle: '家庭核心防护层 (3m内)',
    boxDesc: '主动式孩子守护 | 全链路财产守护 | 自定义区域守护',
    sideData: [
        '不再受无效威胁困扰,',
        '专注于家园内守护'
    ],

    // Part 2: Bento Grid Data
    shortTitle: '核心守护', 
    distance: '3m 内',
    evidence: [
        { value: 0, suffix: '', label: '无效威胁困扰' },
        { value: 100, suffix: '%', label: '专注家园守护' }
    ],

    subHeadline: '家庭核心防护层',
    headline: '主动式孩子与财产守护',

    funnelWidth: 'w-[45%]',
    boxStyle: "bg-gradient-to-r from-purple-900/40 to-purple-950/10 border border-purple-400/20 shadow-[0_4px_20px_rgba(168,85,247,0.1)] backdrop-blur-md",
    activeBoxStyle: "bg-gradient-to-r from-purple-800/60 to-purple-900/30 border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    textStyle: "text-purple-500", 
    descStyle: "text-purple-200/70",
    ringColor: "border-purple-500",
    glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.4)]",

    // Layer 4 Content
    cards: [
      {
        id: 'child',
        title: '主动式孩子守护',
        sub: '风险出现前系统介入',
        detail: '掌控孩子的到离家和家中情况，并支持自定义危险区域，风险出现前系统介入遏制。',
        img: ASSETS.CHILD,
        colSpan: 'md:col-span-2',
        height: 'h-[300px]'
      },
      {
        id: 'property',
        title: '全链路财产守护',
        sub: '在事件发生前、中、后全程掌控',
        detail: '围绕车辆和包裹，持续监测接近、停留时间与行为变化。',
        video: ASSETS.PROPERTY_VIDEO,
        poster: ASSETS.PROPERTY_POSTER,
        colSpan: 'md:col-span-2',
        height: 'h-[300px]'
      },
      {
        id: 'zone',
        title: '自定义区域守护',
        sub: '你的家，规则你定',
        detail: '防护逻辑根据你的房屋结构和产权边界进行个性化定制。',
        img: ASSETS.ZONE,
        colSpan: 'md:col-span-2',
        height: 'h-[300px]'
      }
    ]
  }
];

// Global Features (Bottom Section)
const GLOBAL_FEATURES = [
  {
    id: 'simple',
    title: '系统更智能、使用更方便',
    sub: 'eufy现在更好用了',
    detail: '新增支持3D家园、语音交互、日报/周报、周遭区域风险分析',
    img: ASSETS.REPORT, 
    colSpan: 'md:col-span-1',
    theme: 'zinc'
  },
  {
    id: 'local',
    title: '本地AI、本地存储',
    sub: '隐私有保障，本地AI响应更快',
    detail: '100%本地AI运算，断网仍可用；数据保留在本地，隐私不妥协。',
    img: ASSETS.LOCAL,
    colSpan: 'md:col-span-1',
    theme: 'blue'
  }
];

// --- Simple Number Counter Component for Animations ---
const NumberCounter: React.FC<{ value: number, duration?: number }> = ({ value, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
};

const ProductBento: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  
  // State for Grid Section Active Layer
  const [activeGridLayer, setActiveGridLayer] = useState<string | null>(null);
  const gridLayerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      // Use requestAnimationFrame for smoother scroll handling
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        // --- 1. Funnel Progress Calculation ---
        if (scrollContainerRef.current) {
          const rect = scrollContainerRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalDist = rect.height - viewportHeight;
          
          let p = -rect.top / totalDist;
          p = Math.min(Math.max(p, 0), 1);
          
          setProgress(p);
        }

        // --- 2. Grid Active State Calculation (Distance-based Spy) ---
        // Find which section is closest to the center of the viewport
        const viewportCenter = window.innerHeight / 2;
        let minDistance = Infinity;
        let bestCandidate: string | null = null;
        
        // Include 'global' in the check list
        const allCandidates = [...LAYERS.map(l => l.id), 'global'];

        allCandidates.forEach(id => {
            const el = gridLayerRefs.current[id];
            if (el) {
                const rect = el.getBoundingClientRect();
                const elementCenter = rect.top + (rect.height / 2);
                const distance = Math.abs(viewportCenter - elementCenter);
                
                // Check if element is somewhat on screen (active region)
                // We prioritize the one closest to center
                if (distance < minDistance) {
                    minDistance = distance;
                    bestCandidate = id;
                }
            }
        });

        if (bestCandidate) {
            setActiveGridLayer(bestCandidate);
        }

        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // --- Animation Sequence Logic ---
  // Total Scroll Height: 500vh
  const INDUSTRY_FADE_START = 0.25;
  const INDUSTRY_FADE_END = 0.30;
  
  const industryOpacity = progress < INDUSTRY_FADE_START 
      ? 1 
      : Math.max(0, 1 - (progress - INDUSTRY_FADE_START) / (INDUSTRY_FADE_END - INDUSTRY_FADE_START));

  const eufyVisible = progress > INDUSTRY_FADE_START;
  const eufyOpacity = Math.min(1, Math.max(0, (progress - INDUSTRY_FADE_START) / 0.1));

  // Sequence within Eufy Phase:
  const circleProgress = Math.min(1, Math.max(0, (progress - 0.30) / 0.2));
  const boxProgress = Math.min(1, Math.max(0, (progress - 0.50) / 0.2));
  
  // NEW: Evidence Data Progress appears AFTER boxes
  const evidenceProgress = Math.min(1, Math.max(0, (progress - 0.70) / 0.2));
  
  // Interaction Gate: Only enable hover interactions when everything is fully revealed
  const isInteractionEnabled = evidenceProgress >= 0.99;

  useEffect(() => {
    if (!isInteractionEnabled) {
        setHoveredLayer(null);
    }
  }, [isInteractionEnabled]);
  
  // Intruder Animation
  const intruderStartDist = 450; 
  const intruderBlockedDist = 80; 
  let currentDist = intruderStartDist - (circleProgress * (intruderStartDist)); 
  const isBlocked = currentDist <= intruderBlockedDist;
  const actualDist = Math.max(currentDist, intruderBlockedDist);
  const angleRad = -135 * (Math.PI / 180);
  const intruderX = Math.cos(angleRad) * actualDist;
  const intruderY = Math.sin(angleRad) * actualDist;

  // Max Radii for layers (pixels)
  const R_L1 = 360; 
  const R_L2 = 240; 
  const R_L3 = 140; 
  const R_L4 = 80;  

  const isLayerDimmed = (layerId: string) => hoveredLayer !== null && hoveredLayer !== layerId;

  const scrollToLayer = (id: string) => {
    const el = gridLayerRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="product-bento" className="bg-black text-white border-t border-white/5 relative">
      
      {/* Scroll Container (Part 1 - Funnel) */}
      <div ref={scrollContainerRef} className="h-[500vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
            
            <div className="w-full h-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-12 relative">
                
                {/* --- LEFT COLUMN: VISUALS (Radar/Circles) --- */}
                <div className="w-full md:w-[55%] h-[50vh] md:h-full flex items-center justify-center relative">
                    
                    {/* Common Center: House Icon */}
                    <div className="absolute z-30 w-16 h-16 md:w-20 md:h-20 bg-[#0a0a0a] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-40">
                        <img src={ASSETS.HOUSE_ICON} className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-90 grayscale" alt="Home" />
                        <span className="absolute -bottom-6 text-[10px] text-zinc-600 font-medium uppercase tracking-widest whitespace-nowrap">Core Zone</span>
                    </div>

                    {/* STATE 1: INDUSTRY VISUAL */}
                    <div 
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        style={{ opacity: industryOpacity }}
                    >
                        {/* Brighter Radar Lines with Label */}
                        <div className="w-[300px] h-[300px] rounded-full border border-dashed border-white/30 flex items-center justify-center relative">
                            <div className="w-[120px] h-[120px] rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                               <span className="text-zinc-300 text-xs font-bold tracking-widest uppercase">Passive Zone</span>
                            </div>
                            
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4 flex items-center">
                                <div className="h-px w-8 bg-zinc-500/50"></div>
                                <span className="text-zinc-300 text-xs font-mono ml-2 whitespace-nowrap">6-9m</span>
                            </div>
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-24 -translate-y-24 opacity-80 flex flex-col items-center">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-300"><path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8h-2v-6h-2v6H8v-6H6v6z"/></svg>
                             <span className="text-[10px] text-zinc-200 mt-1 uppercase tracking-widest font-medium">Unknown</span>
                        </div>
                    </div>

                    {/* STATE 2: EUFY VISUAL */}
                    <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ opacity: eufyOpacity }}
                    >
                         {/* Circles Rendering (Same as before) */}
                         <div 
                            className="absolute rounded-full backdrop-blur-[1px] transition-all duration-300 ease-out z-0"
                            style={{ 
                                width: `${220 + (circleProgress * (R_L1 * 2 - 220))}px`, 
                                height: `${220 + (circleProgress * (R_L1 * 2 - 220))}px`,
                                opacity: isLayerDimmed('layer1') ? circleProgress * 0.2 : circleProgress,
                                borderColor: 'rgba(59, 130, 246, 0.5)',
                                borderWidth: '1px',
                                background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(59,130,246,0.2) 100%)'
                            }}
                        >
                            <div className="absolute top-1/2 right-0 w-full h-px border-t border-dashed border-blue-500/40 pointer-events-none"></div>
                            <span className="absolute top-1/2 right-4 translate-x-full -translate-y-1/2 text-[10px] font-bold pl-2 text-blue-500 pointer-events-none">30m</span>
                        </div>

                         <div 
                            className="absolute rounded-full backdrop-blur-[1px] transition-all duration-300 ease-out z-10"
                            style={{ 
                                width: `${160 + (circleProgress * (R_L2 * 2 - 160))}px`, 
                                height: `${160 + (circleProgress * (R_L2 * 2 - 160))}px`,
                                opacity: isLayerDimmed('layer2') ? circleProgress * 0.2 : circleProgress,
                                borderColor: 'rgba(245, 158, 11, 0.5)',
                                borderWidth: '1px',
                                background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, rgba(245,158,11,0.2) 100%)'
                            }}
                        >
                            <span className="absolute top-1/2 right-4 translate-x-full -translate-y-1/2 text-[10px] font-bold pl-2 text-amber-500 pointer-events-none">12m</span>
                        </div>

                         <div 
                            className="absolute rounded-full backdrop-blur-[1px] transition-all duration-300 ease-out z-20"
                            style={{ 
                                width: `${120 + (circleProgress * (R_L3 * 2 - 120))}px`, 
                                height: `${120 + (circleProgress * (R_L3 * 2 - 120))}px`,
                                opacity: isLayerDimmed('layer3') ? circleProgress * 0.2 : circleProgress,
                                borderColor: 'rgba(239, 68, 68, 0.6)',
                                borderWidth: '1px',
                                background: 'radial-gradient(circle, rgba(239,68,68,0.05) 0%, rgba(239,68,68,0.25) 100%)'
                            }}
                        >
                            <span className="absolute top-1/2 right-4 translate-x-full -translate-y-1/2 text-[10px] font-bold pl-2 text-red-500 pointer-events-none">6m</span>
                        </div>

                         <div 
                            className="absolute rounded-full backdrop-blur-[2px] transition-all duration-300 ease-out z-30"
                            style={{ 
                                width: `${90 + (circleProgress * (R_L4 * 2 - 90))}px`, 
                                height: `${90 + (circleProgress * (R_L4 * 2 - 90))}px`,
                                opacity: isLayerDimmed('layer4') ? circleProgress * 0.2 : circleProgress,
                                borderColor: 'rgba(168, 85, 247, 0.6)',
                                borderWidth: '1px',
                                background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.3) 100%)'
                            }}
                        >
                             <span className="absolute top-1/2 right-4 translate-x-full -translate-y-1/2 text-[10px] font-bold pl-2 text-purple-500 pointer-events-none">3m</span>
                        </div>

                        {/* Intruder Animation */}
                        {circleProgress > 0.1 && (
                            <div 
                                className="absolute top-1/2 left-1/2 z-50 flex items-center justify-center transition-all duration-75 ease-linear pointer-events-none"
                                style={{ 
                                    transform: `translate(${intruderX}px, ${intruderY}px) translate(-50%, -50%)`,
                                    opacity: Math.min(1, circleProgress * 2)
                                }}
                            >
                                <div className={`flex flex-col items-center gap-1 transition-all duration-300 ${isBlocked ? 'text-red-400' : 'text-zinc-400'}`}>
                                    {isBlocked ? (
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shadow-[0_0_20px_#ef4444] border border-red-500/50 backdrop-blur-md">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </div>
                                            <span className="text-[9px] font-bold uppercase tracking-widest mt-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-red-300 border border-red-500/30 whitespace-nowrap">Blocked at 6m</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center transform -rotate-45"> 
                                             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-100 drop-shadow-xl"><path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8h-2v-6h-2v6H8v-6H6v6z"/></svg>
                                             <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-300 bg-black/40 backdrop-blur px-1.5 py-0.5 rounded mt-1 border border-white/5">Suspicious</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
                <div className="w-full md:w-[45%] h-[40vh] md:h-full flex flex-col justify-center relative pl-0 md:pl-8">
                    {/* Industry Text */}
                    <div 
                        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center transition-all duration-500"
                        style={{ 
                            opacity: industryOpacity, 
                            transform: `translateY(${industryOpacity < 0.5 ? '-50%' : '-50%'}) scale(${industryOpacity < 0.5 ? 0.95 : 1})`,
                            pointerEvents: industryOpacity > 0 ? 'auto' : 'none' 
                        }}
                    >
                         <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm w-fit mb-8">
                            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">The Old Way</span>
                         </div>
                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight tracking-tight">
                            一般安防系统
                         </h2>
                         <div className="space-y-8">
                             <div className="border-l border-zinc-700 pl-6 py-1">
                                <h4 className="text-xl font-medium text-zinc-200 mb-2">距离短 · 反应慢</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">仅能在核心区 (6-9m范围类) 才开始工作，事件发生后才推送通知，往往为时已晚。</p>
                             </div>
                             <div className="border-l border-zinc-700 pl-6 py-1">
                                <h4 className="text-xl font-medium text-zinc-200 mb-2">误报多 · 体验差</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">无法区分家人与入侵者，频繁打扰用户，导致警报疲劳。</p>
                             </div>
                         </div>
                    </div>

                    {/* Eufy Funnel Text */}
                    <div 
                        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 transition-all duration-500"
                        style={{ 
                            opacity: eufyOpacity, 
                            transform: `translateY(${eufyOpacity < 0.5 ? '-45%' : '-50%'}) scale(${eufyOpacity < 0.5 ? 0.95 : 1})`,
                            pointerEvents: eufyOpacity > 0 ? 'auto' : 'none'
                        }}
                    >
                         <div className="mb-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                                eufy <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">早期预警系统</span>
                            </h2>
                            <div className="flex flex-col gap-1.5 text-sm md:text-base text-zinc-400 font-medium">
                                <p>安防边界延展至 <span className="text-white font-bold">100 ft</span>，构建 4 层防护链路</p>
                                <p>风险在外围即被识别并逐层收敛，误报在进入核心区域前被持续过滤</p>
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 font-bold pt-1">距家 6 米前拦截 85% 可疑行为，将安防从事后响应推进到提前介入。</p>
                            </div>
                         </div>
                         
                         {/* Funnel Rows */}
                         <div className="flex flex-col gap-3">
                             {LAYERS.map((layer, index) => {
                                 const isBoxVisible = boxProgress > (index * 0.25);
                                 const isEvidenceVisible = evidenceProgress > (index * 0.25);
                                 const isHovered = hoveredLayer === layer.id;
                                 const isDimmed = isLayerDimmed(layer.id);
                                 
                                 return (
                                     <div 
                                        key={layer.id} 
                                        className="flex flex-row items-center w-full min-h-[90px]"
                                        onMouseEnter={() => isInteractionEnabled && setHoveredLayer(layer.id)}
                                        onMouseLeave={() => setHoveredLayer(null)}
                                     >
                                         {/* Annotation Box */}
                                         <div 
                                            className={`flex-shrink-0 flex flex-col justify-center px-6 py-4 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isInteractionEnabled ? 'cursor-pointer' : 'cursor-default'}
                                                ${isHovered ? layer.activeBoxStyle : layer.boxStyle}
                                                ${layer.funnelWidth}
                                                ${isDimmed ? 'opacity-30 blur-[1px]' : 'opacity-100'}
                                                ${isHovered ? 'scale-[1.03] z-10' : 'scale-100'}
                                            `}
                                            style={{
                                                opacity: isBoxVisible ? (isDimmed ? 0.3 : 1) : 0,
                                                transform: isBoxVisible 
                                                    ? (isHovered ? 'scale(1.03) translateX(0)' : 'scale(1) translateX(0)') 
                                                    : 'translateX(-20px)',
                                            }}
                                         >
                                             <span className={`text-sm md:text-base font-semibold ${layer.textStyle} block mb-1 leading-tight tracking-wide`}>
                                                 {layer.boxTitle}
                                             </span>
                                             <p className="text-[12px] md:text-xs text-zinc-300 font-medium leading-tight">
                                                 {layer.boxDesc}
                                             </p>
                                         </div>

                                         {/* Side Evidence Text (Gray) - Fades in AFTER box */}
                                         <div 
                                            className="flex-grow pl-6 transition-all duration-700"
                                            style={{
                                                opacity: isEvidenceVisible ? (isDimmed ? 0.1 : 1) : 0,
                                                transform: isEvidenceVisible ? 'translateX(0)' : 'translateX(10px)',
                                            }}
                                         >
                                             <div className="text-[11px] md:text-xs font-medium text-zinc-500 leading-relaxed">
                                                 {Array.isArray(layer.sideData) ? layer.sideData.map((line, i) => (
                                                     <p key={i} className="mb-0.5">{line}</p>
                                                 )) : layer.sideData}
                                             </div>
                                         </div>
                                     </div>
                                 );
                             })}
                         </div>
                    </div>
                </div>
            </div>
            
            <div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 flex flex-col items-center gap-2 pointer-events-none"
                style={{ opacity: industryOpacity > 0.5 ? 0.7 : 0 }}
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">Scroll to Reveal</span>
                <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"></div>
            </div>
        </div>
      </div>

      {/* ==============================================
          PART 2: LAYERED BENTO GRID with SIDEBAR NAV
         ============================================== */}
      <div className="relative -mt-[5vh] pt-24 rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/10 min-h-screen bg-[#0a0a0a]">
            
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row relative">
                
                {/* --- LEFT SIDEBAR: STICKY NAVIGATION (HUD STYLE) --- */}
                <div className="hidden md:flex w-[400px] h-screen sticky top-0 flex-col items-center justify-center p-8 z-10">
                     
                     {/* The Ring Visualization Container */}
                     <div className="relative w-[340px] h-[340px] flex items-center justify-center mb-12">
                         
                         {/* Core (House) */}
                         <div className="absolute z-20 w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
                             <img src={ASSETS.HOUSE_ICON} className="w-6 h-6 opacity-80 grayscale" alt="" />
                         </div>

                         {/* Rings */}
                         {LAYERS.map((layer, index) => {
                             const isActive = activeGridLayer === layer.id || activeGridLayer === 'global';
                             // Radius calculation
                             const size = 340 - (index * 70); 
                             
                             return (
                                 <div 
                                    key={layer.id}
                                    onClick={() => scrollToLayer(layer.id)}
                                    className={`absolute rounded-full border transition-all duration-500 ease-out flex items-center justify-center cursor-pointer group hover:border-zinc-600
                                        ${isActive 
                                          ? `${layer.ringColor} border-2 opacity-100 ${layer.glowColor} bg-white/5` 
                                          : 'border-zinc-800 opacity-100'}
                                    `}
                                    style={{ 
                                        width: `${size}px`, 
                                        height: `${size}px`,
                                        zIndex: 10 + index // Smallest on top
                                    }}
                                 >
                                     {/* Distance Label on the ring */}
                                     {activeGridLayer === layer.id && (
                                         <div className={`absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-black px-2 py-1 rounded border ${layer.ringColor}`}>
                                             <span className={`text-[10px] font-bold ${layer.textStyle}`}>{layer.distance}</span>
                                         </div>
                                     )}
                                 </div>
                             );
                         })}
                     </div>

                     {/* Active Layer HUD Info - REFACTORED FOR DATA EVIDENCE WITH ANIMATION */}
                     <div className="text-center h-[160px] w-full max-w-[280px] transition-all duration-500">
                         {activeGridLayer === 'global' ? (
                             <div className="animate-[fadeIn_0.5s_ease-out] flex flex-col items-center w-full justify-center h-full text-center">
                                 <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                                     <span className="text-[10px] font-bold uppercase tracking-widest text-white">贯穿所有层级的基石</span>
                                 </div>
                                 <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white mb-2">
                                     系统更快、更智能<br/>隐私0妥协
                                 </h3>
                             </div>
                         ) : activeGridLayer ? (
                             (() => {
                                 const activeL = LAYERS.find(l => l.id === activeGridLayer);
                                 return activeL ? (
                                     <div className="animate-[fadeIn_0.5s_ease-out] flex flex-col items-center w-full">
                                         
                                         {/* Header: Zone Name */}
                                         <div className="mb-4 flex flex-col items-center">
                                             <div className={`inline-block px-3 py-1 mb-2 rounded-full border bg-black ${activeL.ringColor}`}>
                                                 <span className={`text-[10px] font-black uppercase tracking-widest ${activeL.textStyle}`}>
                                                     {activeL.distance}
                                                 </span>
                                             </div>
                                             <h3 className={`text-2xl font-bold leading-tight ${activeL.textStyle}`}>
                                                 {activeL.shortTitle}
                                             </h3>
                                         </div>

                                         {/* Data Evidence Panel */}
                                         <div className="w-full bg-zinc-900/50 rounded-2xl p-4 border border-white/5 flex flex-col gap-3">
                                             {activeL.evidence && activeL.evidence.map((ev, i) => (
                                                 <div key={i} className="flex justify-between items-center w-full">
                                                     <span className="text-[10px] text-zinc-400 font-medium tracking-wide uppercase">{ev.label}</span>
                                                     <span className={`text-xl font-bold font-mono ${activeL.textStyle}`}>
                                                         {/* Animated Number */}
                                                         <NumberCounter value={ev.value} />
                                                         {ev.suffix}
                                                     </span>
                                                 </div>
                                             ))}
                                         </div>
                                         
                                     </div>
                                 ) : null;
                             })()
                         ) : (
                             <div className="opacity-40 flex flex-col items-center justify-center h-full">
                                 <p className="text-sm text-zinc-500 font-medium tracking-widest uppercase">Scroll to explore layers</p>
                             </div>
                         )}
                     </div>

                </div>

                {/* --- RIGHT COLUMN: BENTO CONTENT --- */}
                <div className="w-full md:flex-1 px-4 md:px-12 pb-32 pt-12 md:pt-32">
                    
                    {/* 1. RENDER THE LAYERS */}
                    {LAYERS.map((layer) => {
                        const isActive = activeGridLayer === layer.id;
                        return (
                            <div 
                                key={layer.id} 
                                className={`mb-32 last:mb-12 relative transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-40 blur-[1px]'}`} 
                                data-layer-id={layer.id}
                                ref={el => { gridLayerRefs.current[layer.id] = el; }}
                            >
                                {/* Layer Header - RESTORED SUBHEADLINE */}
                                <div className="mb-10 pl-6 border-l-4" style={{borderColor: layer.ringColor.split(' ')[0].replace('border-', 'var(--tw-border-opacity)')}}>
                                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 ${layer.textStyle}`}>{layer.subHeadline}</h4>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-2">{layer.headline}</h3>
                                </div>

                                {/* Cards Grid - Reduced gap */}
                                <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                                    {layer.cards.map((card, idx) => (
                                        <BentoCard 
                                            key={idx}
                                            line1={card.title}
                                            line2={card.sub}
                                            detail={card.detail}
                                            img={card.img}
                                            videoUrl={card.video}
                                            poster={card.poster}
                                            className={`${card.colSpan} ${card.height} border-zinc-900`}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* 2. RENDER GLOBAL FEATURES */}
                    <div 
                        className={`mt-20 pt-16 border-t border-white/5 transition-all duration-700 ${activeGridLayer === 'global' ? 'opacity-100' : 'opacity-80'}`}
                        data-layer-id="global"
                        ref={el => { gridLayerRefs.current['global'] = el; }}
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">全局核心能力</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {GLOBAL_FEATURES.map((feat, idx) => (
                                <BentoCard 
                                    key={idx}
                                    line1={feat.title}
                                    line2={feat.sub}
                                    detail={feat.detail}
                                    img={feat.img}
                                    className={`${feat.colSpan} h-[200px] border-zinc-900`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
      </div>
    </section>
  );
};

// --- Sub Component: Bento Card ---

interface BentoCardProps {
    line1: string;
    line2?: string;
    detail?: string;
    img?: string;
    videoUrl?: string;
    poster?: string;
    className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ line1, line2, detail, img, videoUrl, poster, className = '' }) => {
    return (
        <div className={`group relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col justify-end p-6 ${className}`}>
            
            {/* Media Background - VIVID, NO DARK MASK */}
            <div className="absolute inset-0 z-0 bg-[#000]">
                {videoUrl ? (
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        poster={poster}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                ) : img ? (
                    <img src={img} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="" />
                ) : null}
                
                {/* Subtle Gradient Only at Bottom for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Text Content - Always Visible & Vivid */}
            <div className="relative z-10 flex flex-col items-start text-left">
                <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                  {line1}
                </h4>
                {line2 && (
                  <p className="text-xs md:text-sm font-bold text-blue-400 leading-tight mb-2 tracking-wide uppercase drop-shadow-sm">
                    {line2}
                  </p>
                )}
                {detail && (
                  <p className="text-xs md:text-sm text-zinc-200 leading-relaxed font-medium opacity-100 max-w-lg drop-shadow-md">
                    {detail}
                  </p>
                )}
            </div>
            
            {/* Arrow Icon */}
            <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
        </div>
    );
}

export default ProductBento;
