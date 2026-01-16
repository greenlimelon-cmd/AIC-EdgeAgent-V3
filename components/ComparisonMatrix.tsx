import React from 'react';

const ComparisonMatrix: React.FC = () => {
  const categories = [
    {
      name: "早期预警系统",
      items: [
        { 
          name: "危险身份识别（多模态）", 
          eufy: "支持入侵者、陌生人、黑名单的识别", 
          ring: false, arlo: false, aosu: false, wyze: false, blink: false 
        },
        { 
          name: "DSkey数字安防钥匙", 
          eufy: "通过蓝牙钥匙和双雷达结合 AI，准确识别家人回家", 
          ring: false, arlo: false, aosu: false, wyze: false, blink: false 
        },
        { 
          name: "危险行为检测与驱离", 
          eufy: "10 种危险行为识别", 
          ring: false, arlo: false, aosu: false, wyze: false, blink: false 
        },
        { 
          name: "三层区域守护 (Zone)", 
          eufy: "支持核心区域、警戒区、边界防护区三层区域", 
          ring: false, 
          arlo: "高亮/设置指定监控区域，仅接收重要提醒，屏蔽高频干扰。", 
          aosu: "高亮/设置指定监控区域，仅接收重要提醒，屏蔽高频干扰。", 
          wyze: false, blink: false 
        },
      ]
    },
    {
      name: "专业报警服务",
      items: [
        { 
          name: "AI 专业报警监控：入侵者 AI 辅助报警", 
          eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false 
        },
        { 
          name: "胁迫报警", 
          eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false 
        },
        { 
          name: "SOS 紧急求助", 
          eufy: "App 内一键请求 警察/消防/医疗。", 
          ring: "App 内一键请求 警察/消防/医疗。", 
          arlo: "App 内一键请求 警察/消防/医疗。", 
          aosu: false, 
          wyze: "App 内一键请求 警察/消防/医疗。", 
          blink: false 
        },
        { 
          name: "专业报警监控", 
          eufy: "人工 24/7 监控，确认威胁后代为报警 (Police)。", 
          ring: "人工 24/7 监控，确认威胁后代为报警 (Police)。", 
          arlo: "人工 24/7 监控，确认威胁后代为报警 (Police)。", 
          aosu: false, 
          wyze: "人工 24/7 监控，确认威胁后代为报警 (Police)。", 
          blink: false 
        },
        { 
          name: "视频核实", 
          eufy: "允许紧急联系人查看摄像头画面以减少误报、加快响应。", 
          ring: false, 
          arlo: "允许监控中心查看摄像头画面以减少误报、加快响应。", 
          aosu: false, wyze: false, blink: false 
        },
      ]
    },
    {
      name: "家庭关爱",
      items: [
        { name: "孩子守卫：到家、离家提醒、孩子危险区域预警与驱离", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "孩子独处看护", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "家人到家、离家提醒", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "车辆&包裹异动检测 & 陌生人靠近预警", eufy: "财产可疑徘徊和靠近识别", ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "包裹守护（送到、滞留、领取通知）", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "包裹盗拿驱离", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
      ]
    },
    {
      name: "智能管家",
      items: [
        { name: "语音助手", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { 
          name: "3D 家园可视化安防", 
          eufy: "调用卫星测绘数据，生成家庭环境 3D 数字孪生模型，实现可视化立体安防。", 
          ring: false, arlo: false, aosu: false, wyze: false, blink: false 
        },
        { name: "系统健康度提醒", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "安全风险建议", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "本地智能大脑（eufy Bionic Mind）长期记忆", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "家庭周边风险识别", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "安全风险评估与规划", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "智能安装建议", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
        { name: "每日/月安全日报", eufy: true, ring: false, arlo: false, aosu: false, wyze: false, blink: false },
      ]
    }
  ];

  const CheckIcon = ({ color = "text-emerald-500", size = "w-6 h-6" }: { color?: string, size?: string }) => (
    <div className="flex justify-center">
      <svg className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );

  const CrossIcon = () => (
    <div className="flex flex-col items-center">
      <svg className="w-6 h-6 text-zinc-400 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );

  const CrownIcon = () => (
    <svg className="w-8 h-8 text-[#D4AF37] mb-2" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
    </svg>
  );

  const renderCell = (val: string | boolean, isHighlighted = false) => {
    if (typeof val === 'string') {
      return (
        <div className="flex flex-col items-center gap-3">
          <CheckIcon color={isHighlighted ? 'text-[#D4AF37]' : 'text-emerald-500'} />
          <span className={`text-[13px] font-bold leading-tight ${isHighlighted ? 'text-[#D4AF37]' : 'text-zinc-300'} text-center max-w-[220px]`}>
            {val}
          </span>
        </div>
      );
    }
    if (val === true) return <CheckIcon color={isHighlighted ? 'text-[#D4AF37]' : 'text-emerald-500'} size="w-7 h-7" />;
    return <CrossIcon />;
  };

  return (
    <section id="comparison" className="bg-black py-24 md:py-48 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24 md:mb-40">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 text-white">
            安防实力的<br/>
            <span className="apple-gradient-text">全面进化</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            从基础探测到主动预测，eufy Edge Agent 重新定义了家庭安防的标准。
          </p>
        </div>

        {/* Table Container */}
        <div className="relative overflow-x-auto scrollbar-hide pb-12">
          <table className="w-full min-w-[1100px] text-left border-separate border-spacing-0">
            <thead>
              <tr className="text-zinc-500 text-[16px] font-black uppercase tracking-[0.2em]">
                <th className="py-8 px-6 border-b border-zinc-800 align-middle">功能名称</th>
                <th className="py-8 px-6 border-b-4 border-[#D4AF37] text-center bg-gradient-to-b from-[#1a1a1a] to-[#000] relative overflow-hidden group/header align-middle min-w-[320px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent -translate-x-full group-hover/header:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <CrownIcon />
                    <span className="text-[#D4AF37] text-[22px] font-black drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] mb-2 text-center">eufy Edge Agent</span>
                    <p className="text-[12px] font-bold text-[#D4AF37]/60 normal-case tracking-normal max-w-[240px] leading-tight text-center">
                      插入AIC+开通EdgeAgent订阅服务后可获得旗舰体验
                    </p>
                  </div>
                </th>
                <th className="py-8 px-6 border-b border-zinc-800 text-center align-middle">Ring</th>
                <th className="py-8 px-6 border-b border-zinc-800 text-center align-middle">Arlo</th>
                <th className="py-8 px-6 border-b border-zinc-800 text-center align-middle">Aosu</th>
                <th className="py-8 px-6 border-b border-zinc-800 text-center align-middle">Wyze</th>
                <th className="py-8 px-6 border-b border-zinc-800 text-center align-middle">Blink</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, catIdx) => (
                <React.Fragment key={catIdx}>
                  <tr>
                    <td colSpan={7} className="py-12 px-6 text-[18px] font-black text-white tracking-widest uppercase border-b border-zinc-800/50 bg-zinc-900/30">
                      {cat.name}
                    </td>
                  </tr>
                  {cat.items.map((item, itemIdx) => (
                    <tr key={itemIdx} className="group hover:bg-zinc-900/50 transition-colors">
                      <td className="py-8 px-6 border-b border-zinc-900">
                        <span className="text-[18px] font-bold text-zinc-100">{item.name}</span>
                      </td>
                      <td className="py-10 px-6 text-center border-b border-[#D4AF37]/10 bg-gradient-to-b from-[#0f0f0f] to-[#000] relative border-x border-[#D4AF37]/5">
                        <div className="absolute inset-0 opacity-10 bg-[#D4AF37] pointer-events-none group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative z-10">
                          {renderCell(item.eufy, true)}
                        </div>
                      </td>
                      <td className="py-10 px-6 text-center border-b border-zinc-900">
                        {renderCell(item.ring)}
                      </td>
                      <td className="py-10 px-6 text-center border-b border-zinc-900">
                        {renderCell(item.arlo)}
                      </td>
                      <td className="py-10 px-6 text-center border-b border-zinc-900">
                        {renderCell(item.aosu)}
                      </td>
                      <td className="py-10 px-6 text-center border-b border-zinc-900">
                        {renderCell(item.wyze)}
                      </td>
                      <td className="py-10 px-6 text-center border-b border-zinc-900">
                        {renderCell(item.blink)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-32 flex flex-col items-center">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#F9D976] text-black px-12 py-5 rounded-full text-lg font-black hover:brightness-110 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            立即升级旗舰体验
          </button>
          <p className="mt-6 text-zinc-500 text-sm font-medium tracking-wide">所有数据处理均在本地 AIC 核心完成，保护您的隐私。</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;