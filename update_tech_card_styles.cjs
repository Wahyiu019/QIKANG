const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /export function LenovoTechBidAdvantageCard[\s\S]*?;\s*\n\s*\}/;

const newCard = `export function LenovoTechBidAdvantageCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-5xl bg-amber-50/30 border border-orange-200 rounded-2xl overflow-hidden shadow-xl mt-4 font-sans text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-6 py-6 relative overflow-hidden flex items-center justify-between shadow-sm">
        <div className="absolute top-0 right-0 p-4 opacity-15 mix-blend-overlay">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" /></svg>
        </div>
        <div className="relative z-10 flex items-center text-white">
          <div className="mr-5 p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          </div>
          <div>
            <h3 className="text-2xl font-black tracking-wide drop-shadow-md">联想企康技术标核心优势与响应架构</h3>
            <p className="text-sm text-yellow-100 mt-1.5 opacity-95 tracking-widest font-medium">对标传统体检机构 ｜ 差异化控标级输出方案</p>
          </div>
        </div>
        <div className="relative z-10 text-xs font-bold px-4 py-1.5 bg-white text-orange-700 rounded-full uppercase tracking-widest shadow-md">
          投 标 专 家 · 核 心 密 卷
        </div>
      </div>

      <div className="p-8 space-y-8 bg-gradient-to-b from-orange-50/50 to-white">
        
        {/* Core summary text directly from response prompt */}
        <div className="bg-white border-l-4 border-orange-500 p-5 rounded-r-xl shadow-md flex items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 transform translate-x-10 -translate-y-10"></div>
          <svg className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <div className="relative z-10">
             <p className="text-sm text-gray-800 font-medium leading-relaxed">
              <span className="font-bold text-orange-700 text-base block mb-1">🎯 核心控标打法思路：降维打击</span>
              用IT巨头在 <strong className="text-orange-600 bg-orange-100 px-1 rounded mx-0.5">顶层架构</strong>、<strong className="text-orange-600 bg-orange-100 px-1 rounded mx-0.5">全国产化信创</strong> 和 <strong className="text-orange-600 bg-orange-100 px-1 rounded mx-0.5">金融级数据安全</strong> 上的绝对专业壁垒，强力冲击传统医疗/体检机构在技术方案设计与IT系统实施上的天然短板，成功把甲方的考核重心与评分标准引导到系统架构与信创合规上来。
            </p>
          </div>
        </div>

        {/* Content grid - Flat layout instead of grid cols */}
        <div className="space-y-6">
            
          {/* 第一章 */}
          <div className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
            <div className="bg-gradient-to-r from-amber-100 to-orange-50 px-5 py-3 font-bold text-orange-900 flex items-center border-b border-amber-200">
              <span className="bg-gradient-to-br from-orange-500 to-amber-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm mr-3 shrink-0 shadow-sm">1</span>
              项目整体理解与需求分析
            </div>
            <div className="p-5">
              <p className="text-xs text-orange-700/80 font-medium italic mb-4 border-l-2 border-orange-300 pl-3 bg-orange-50 py-1.5 rounded-r">💡 央国企看重供应商是否真正懂他们的政策背景和业务痛点，而非上来就堆砌技术。</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100"><span className="text-orange-600 font-black block mb-1">1.1 建设计景与目标</span> <div className="text-gray-600 text-xs">深度结合国家政策（如数字化转型、健康中国）及集团长远战略目标构建方案。</div></div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100"><span className="text-orange-600 font-black block mb-1">1.2 现状痛点分析</span> <div className="text-gray-600 text-xs">直击现有系统的不足（如数据孤岛、缺乏统一管控、员工体验断层）。</div></div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100"><span className="text-orange-600 font-black block mb-1">1.3 核心需求理解</span> <div className="text-gray-600 text-xs">对业务需求、技术规范、安全与合规红线进行手术刀式精准拆解响应。</div></div>
              </div>
            </div>
          </div>

          {/* 第二章 */}
          <div className="bg-white border-2 border-orange-300 rounded-xl overflow-hidden shadow-md relative group">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm">👑 核心得分区</div>
            <div className="bg-gradient-to-r from-orange-100 to-orange-50 px-5 py-4 font-bold text-orange-900 flex items-center border-b border-orange-200">
              <span className="bg-gradient-to-br from-orange-600 to-amber-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm mr-3 shrink-0 shadow-sm">2</span>
              总体技术方案 (核心得分区)
            </div>
            <div className="p-5">
              <p className="text-xs text-orange-700/80 font-medium italic mb-4 border-l-2 border-orange-400 pl-3 bg-orange-50 py-1.5 rounded-r">💡 这是展示联想“软硬一体”等底层基建实力的最佳位置，构建技术壁垒。</p>
              <div className="space-y-3">
                <div className="flex bg-white border border-orange-100 p-3 rounded-lg"><div className="w-16 shrink-0 text-orange-600 font-bold text-sm tracking-wide">2.1</div> <div className="text-gray-700 text-sm"><strong className="text-gray-900">总体设计原则：</strong>坚持高可靠、高网络安全、弹性可扩展、全面信创兼容原则。</div></div>
                <div className="flex bg-white border border-orange-100 p-3 rounded-lg"><div className="w-16 shrink-0 text-orange-600 font-bold text-sm tracking-wide">2.2</div> <div className="text-gray-700 text-sm"><strong className="text-gray-900">总体架构设计：</strong>四大架构全景展现——业务架构(健康管理闭环)、技术架构(微服务/端边云网智体系)、数据架构(多源异构采集)、物理部署架构(私有化/专有云隔离)。</div></div>
                <div className="flex bg-white border border-orange-100 p-3 rounded-lg"><div className="w-16 shrink-0 text-orange-600 font-bold text-sm tracking-wide">2.3</div> <div className="text-gray-700 text-sm"><strong className="text-gray-900">核心关键技术攻坚：</strong>针对项目极端难点的专项技术解答(如百万级高并发抢号、海量IoT硬件终端低延迟并发接入)。</div></div>
              </div>
            </div>
          </div>

          {/* 第三章 & 第四章并排 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
            {/* 第三章 */}
            <div className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-amber-100 to-orange-50 px-4 py-3 font-bold text-orange-900 flex items-center border-b border-amber-200">
                <span className="bg-gradient-to-br from-orange-500 to-amber-600 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs mr-2 shrink-0">3</span>
                详细功能方案设计
              </div>
              <div className="p-5 space-y-4">
                <p className="text-[11px] text-orange-700/80 italic border-l-2 border-orange-300 pl-2 bg-orange-50 py-1 rounded">须严格按招标文件功能清单点对点逐一无死角响应。</p>
                <ul className="space-y-3">
                  <li className="text-sm"><span className="text-orange-600 font-bold mr-1">3.1 终端/硬件侧：</span><span className="text-gray-600">联想智能穿戴、体检一体机边缘接入。</span></li>
                  <li className="text-sm"><span className="text-orange-600 font-bold mr-1">3.2 云端/管理平台：</span><span className="text-gray-600">健康档案管理引擎、极速体检排期、高管预警大屏。</span></li>
                  <li className="text-sm"><span className="text-orange-600 font-bold mr-1">3.3 开放接口集成：</span><span className="text-gray-600">提供标准化API与OA、E-HR、SSO单点登录平滑对接。</span></li>
                </ul>
              </div>
            </div>

            {/* 第四章 */}
            <div className="bg-white border-2 border-red-200 rounded-xl overflow-hidden shadow-sm relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-sm">⛔ 一票否决红线</div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 px-4 py-3 font-bold text-red-800 flex items-center border-b border-red-100">
                <span className="bg-gradient-to-br from-red-500 to-orange-500 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs mr-2 shrink-0">4</span>
                非功能性与极高安全体系
              </div>
              <div className="p-5 space-y-4">
                <p className="text-[11px] text-red-700/80 italic border-l-2 border-red-400 pl-2 bg-red-50 py-1 rounded">央国企对非功能指标考核极其严格，安全防护重中之重。</p>
                <ul className="space-y-3">
                  <li className="text-sm"><span className="text-red-500 font-bold mr-1">4.1 性能与容量：</span><span className="text-gray-600">5万级高并发、秒级响应、99.99%高可用(HA)集群架构。</span></li>
                  <li className="text-sm"><span className="text-red-500 font-bold mr-1">4.2 信息安全网：</span><span className="text-gray-600">防篡改风控、金融级等保三级/国密法密评合规响应方案。</span></li>
                  <li className="text-sm"><span className="text-red-500 font-bold mr-1">4.3 隐私合规引擎：</span><span className="text-gray-600">敏感体检数据物理级脱敏、最小权责动态隔离管控机制。</span></li>
                </ul>
              </div>
            </div>
              
          </div>

          {/* 第五章: 大版块展示信创能力 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl overflow-hidden shadow-lg relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5 mix-blend-multiply"></div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-4 font-bold text-white flex items-center justify-between border-b border-amber-600 shadow-md relative z-10">
               <div className="flex items-center">
                 <span className="bg-white text-orange-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3 shrink-0 shadow-inner font-black">5</span>
                 <span className="text-lg">信创与国产化适配方案</span>
               </div>
               <span className="bg-white/20 px-3 py-1 text-xs rounded-full border border-white/30 backdrop-blur-md">央国企必考题 · 绝对护城河</span>
            </div>
            <div className="p-6 relative z-10">
                <div className="bg-white/60 backdrop-blur-sm border border-orange-200 p-4 rounded-xl mb-6 shadow-sm">
                   <p className="text-sm text-orange-900 font-bold leading-relaxed mb-2">⭐ 这是目前央国企招标的“政治正确”部分，传统医疗机构极难独立完成。也是联想企康拉开与竞品差距的最关键护城河。</p>
                   <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
                         <div className="text-orange-600 font-black mb-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>基础软硬件全栈信创适配</div>
                         <p className="text-xs text-gray-600 leading-relaxed">全面深度兼容国产CPU(鲲鹏/海光/飞腾)、国产操作系统(统信UOS/银河麒麟/鸿蒙OS)、国产数据库(达梦/人大金仓/TiDB)及中间件。</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
                         <div className="text-orange-600 font-black mb-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>联想信创生态集成优势</div>
                         <p className="text-xs text-gray-600 leading-relaxed">着重强调联想作为中国IT龙头在国家级整机、服务器国产化替代中的原生整合能力，直接抛出千万级/亿级信创替换全链路标杆成功案例。</p>
                      </div>
                   </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-200">
                    <div className="text-center font-bold text-orange-800 border-b border-orange-100 pb-2 mb-4 w-full uppercase tracking-widest text-sm">竞争态势对垒：维次降级打击路线图</div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
                       <div className="flex flex-col items-center bg-gray-50 px-6 py-4 rounded-xl border border-gray-200 w-full md:w-64 text-center">
                         <span className="font-black text-gray-800 text-lg mb-1">传统体检 / 医疗SAAS</span>
                         <span className="text-red-500 font-medium bg-red-50 px-3 py-1 rounded-full text-xs mt-2">无底层信创池 / 依赖公有云组合</span>
                       </div>
                       <div className="text-amber-500 font-black text-xl bg-orange-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-inner">VS</div>
                       <div className="flex flex-col items-center bg-gradient-to-b from-orange-100 to-amber-50 px-6 py-4 rounded-xl border-2 border-orange-400 w-full md:w-64 text-center shadow-md transform scale-105">
                         <span className="font-black text-orange-700 text-lg mb-1">联想企康 (软硬一体)</span>
                         <span className="text-orange-600 font-medium bg-white px-3 py-1 rounded-full text-xs mt-2 shadow-sm">全栈信创闭环 / 原厂服务器调优</span>
                       </div>
                    </div>
                </div>
            </div>
          </div>

          {/* 第六、七、八章 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4">
            <div className="bg-gray-100 px-5 py-3 font-bold text-gray-800 flex items-center border-b border-gray-200">
              <span className="text-gray-500 mr-2 tracking-wide uppercase text-xs">后置支撑章节：实施、交付、运维服务长效保障</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="space-y-3 relative">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-100 hidden md:block"></div>
                <div className="flex items-center mb-3">
                   <div className="w-6 h-6 rounded bg-amber-100 text-amber-700 font-bold flex items-center justify-center mr-2 text-xs">6</div>
                   <span className="text-sm font-bold text-gray-900">实施与交付管理</span>
                </div>
                <p className="text-[11px] text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block mb-2">证明有能力把PPT变成现实</p>
                <div className="text-xs text-gray-700 space-y-2">
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>成熟实施方法论 (PMP/敏捷)</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>精准项目排期与里程碑追踪 (Gantt图表)</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>顶配交付团队资质 (亮出原厂高工、架构师认证)</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>严苛的里程碑质量控制与标准体系验收</span></div>
                </div>
              </div>

              <div className="space-y-3 relative">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-100 hidden md:block"></div>
                <div className="flex items-center mb-3">
                   <div className="w-6 h-6 rounded bg-amber-100 text-amber-700 font-bold flex items-center justify-center mr-2 text-xs">7</div>
                   <span className="text-sm font-bold text-gray-900">培训、运维与售后</span>
                </div>
                <p className="text-[11px] text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block mb-2">展现全生命周期长线服务</p>
                <div className="text-xs text-gray-700 space-y-2">
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>分层级用户与系统管理员赋能培训</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>极速SLA与故障响应 (7x24专线, 30min内排障响应)</span></div>
                  <div className="mt-3 bg-orange-50 border border-orange-200 p-2 rounded-lg relative overflow-hidden">
                     <span className="absolute -right-2 -top-2 text-3xl opacity-20">🌍</span>
                     <span className="font-bold text-orange-800 block mb-1">⭐ 绝对加分项</span>
                     <span className="text-orange-700/90 font-medium">联想星罗密布的全国县乡级线下强实体IT服务网点极速覆盖能力。</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center mb-3">
                   <div className="w-6 h-6 rounded bg-amber-100 text-amber-700 font-bold flex items-center justify-center mr-2 text-xs">8</div>
                   <span className="text-sm font-bold text-gray-900">应急预案与控制</span>
                </div>
                <p className="text-[11px] text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block mb-2">极限界兜底预案风险对冲</p>
                <div className="text-xs text-gray-700 space-y-2">
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>同城双活/异地机房数据灾备与系统秒级切换恢复预案</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>硬件瘫痪/网关故障紧急逃生备用链路方案</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-1.5 leading-none mt-0.5">•</span><span>项目实施过程中的高危风险模型识别与提前规避策略</span></div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
`;

content = content.replace(targetRegex, newCard + '\n}');

fs.writeFileSync(file, content);
console.log('Update Complete');
