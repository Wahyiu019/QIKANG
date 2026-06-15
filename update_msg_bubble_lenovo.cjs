const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const newCard = `
export function LenovoTechBidAdvantageCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mt-4 font-sans text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-6 py-5 relative overflow-hidden flex items-center justify-between">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" /></svg>
        </div>
        <div className="relative z-10 flex items-center text-white">
          <div className="mr-4 p-2 bg-white/20 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-wide">联想企康技术标核心优势与响应架构</h3>
            <p className="text-xs text-blue-200 mt-1 opacity-90 tracking-wider">对标传统体检机构 ｜ 差异化控标输出</p>
          </div>
        </div>
        <div className="relative z-10 text-xs font-bold px-3 py-1 bg-white text-blue-900 rounded-full uppercase tracking-widest shadow-sm">
          投 标 专 家 输 出
        </div>
      </div>

      <div className="p-6 space-y-6 bg-gray-50/50">
        
        {/* Core summary text directly from response prompt */}
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-blue-900 font-medium">
            <span className="font-bold">核心打法思路：</span>
            降维打击。用IT巨头在架构、信创和数据安全上的绝对专业性，冲击传统医疗/体检机构在技术方案设计上的短板，把甲方的考核重心引导到系统架构与信创合规上来。
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
          {/* 第一章 */}
          <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200 px-4 py-3 font-bold text-gray-800 flex items-center">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 shrink-0">1</span>
              项目整体理解与需求分析
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-gray-500 italic mb-2 border-l-2 border-blue-300 pl-2">央国企看重供应商是否真正懂他们的政策背景和业务痛点，而非上来就堆砌技术。</p>
              <div className="space-y-2">
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">1.1</span> <div className="text-gray-700"><strong>建设计景与目标：</strong>结合国家政策（如数字化转型、健康中国）及集团战略目标。</div></div>
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">1.2</span> <div className="text-gray-700"><strong>现状痛点分析：</strong>现有系统的不足（如数据孤岛、缺乏统一管控）。</div></div>
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">1.3</span> <div className="text-gray-700"><strong>核心需求理解：</strong>业务需求、技术需求、安全与合规需求的拆解。</div></div>
              </div>
            </div>
          </div>

          {/* 第二章 */}
          <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ring-1 ring-blue-500/10">
            <div className="bg-blue-50/50 border-b border-blue-100 px-4 py-3 font-bold text-blue-900 flex items-center">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 shrink-0">2</span>
              总体技术方案 (核心得分区)
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-blue-600 italic mb-2 border-l-2 border-blue-400 pl-2">这是展示联想“软硬一体”等底层基建实力的最佳位置。</p>
              <div className="space-y-2">
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">2.1</span> <div className="text-gray-700"><strong>总体设计原则：</strong>高可靠、高安全、可扩展、全面信创兼容。</div></div>
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">2.2</span> <div className="text-gray-700"><strong>总体架构设计：</strong>业务架构(健康管理闭环)、技术架构(微服务/端边云网智)、数据架构(多源采集)、物理部署架构(私有化/专有云)。</div></div>
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">2.3</span> <div className="text-gray-700"><strong>核心关键技术：</strong>针对难点的专项技术解答(如高并发、硬件终端低延迟)。</div></div>
              </div>
            </div>
          </div>

          {/* 第三章 */}
          <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200 px-4 py-3 font-bold text-gray-800 flex items-center">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 shrink-0">3</span>
              详细功能方案设计 (点对点响应)
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-gray-500 italic mb-2 border-l-2 border-blue-300 pl-2">必须严格按照招标文件的功能清单逐一响应，不能遗漏。</p>
              <div className="space-y-2">
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">3.1</span> <div className="text-gray-700"><strong>终端/硬件侧功能设计：</strong>（如联想智能工牌、PC探针的数据采集逻辑）。</div></div>
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">3.2</span> <div className="text-gray-700"><strong>云端/平台侧功能模块：</strong>详细描述业务模块（如健康档案、体检排期、预警大屏）。</div></div>
                <div className="flex text-xs"><span className="text-blue-500 font-bold mr-2">3.3</span> <div className="text-gray-700"><strong>接口与集成方案：</strong>与现有OA、HR系统、单点登录(SSO)对接。</div></div>
              </div>
            </div>
          </div>

          {/* 第四章 */}
          <div className="bg-white border text-sm box-border border-red-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ring-1 ring-red-500/10">
            <div className="bg-red-50/50 border-b border-red-100 px-4 py-3 font-bold text-red-900 flex items-center">
              <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 shrink-0">4</span>
              非功能性与安全体系设计 (红线区)
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-red-600 italic mb-2 border-l-2 border-red-400 pl-2">央国企对非功能指标的考核极其严格，甚至拥有一票否决权。</p>
              <div className="space-y-2">
                <div className="flex text-xs"><span className="text-red-500 font-bold mr-2">4.1</span> <div className="text-gray-700"><strong>系统性能与容量规划：</strong>并发数、响应时间、高可用(HA)设计。</div></div>
                <div className="flex text-xs"><span className="text-red-500 font-bold mr-2">4.2</span> <div className="text-gray-700"><strong>信息安全防护体系：</strong>网络安全、数据加密、防篡改、等保三级/密评响应。</div></div>
                <div className="flex text-xs"><span className="text-red-500 font-bold mr-2">4.3</span> <div className="text-gray-700"><strong>数据隐私与合规：</strong>敏感数据脱敏、权责隔离。（企康合规专家核心输出点）</div></div>
              </div>
            </div>
          </div>

          {/* 第五章 */}
          <div className="bg-white border text-sm box-border border-indigo-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ring-1 ring-indigo-500/10 md:col-span-2">
            <div className="bg-indigo-50/50 border-b border-indigo-100 px-4 py-3 font-bold text-indigo-900 flex items-center">
               <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 shrink-0 flex-shrink-0">5</span>
               信创与国产化适配方案 (央国企必考题)
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <p className="text-xs text-indigo-600 italic mb-3 border-l-2 border-indigo-400 pl-2 leading-relaxed">这是目前央国企招标的“政治正确”部分，传统医疗机构极难独立完成。也是拉开与竞品差距的关键护城河。</p>
                  <div className="space-y-2">
                    <div className="flex text-xs"><span className="text-indigo-500 font-bold mr-2">5.1</span> <div className="text-gray-700"><strong>基础软硬件信创适配：</strong>全面兼容国产CPU(鲲鹏/海光)、国产操作系统(统信/麒麟、鸿蒙)、国产数据库。</div></div>
                    <div className="flex text-xs"><span className="text-indigo-500 font-bold mr-2">5.2</span> <div className="text-gray-700"><strong>联想信创生态优势：</strong>强调联想在国家级国产化替代中的整合能力与全链路标杆成功案例。</div></div>
                  </div>
               </div>
               <div className="bg-white border border-indigo-100 rounded p-3 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute opacity-5 inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 to-transparent"></div>
                  <div className="text-center z-10 w-full space-y-2 relative">
                    <div className="text-xs font-bold text-indigo-800 border-b border-indigo-100 pb-1 w-full uppercase tracking-widest text-center">降维打击路线图</div>
                    <div className="flex justify-between items-center text-[10px] text-gray-500 px-2 mt-2">
                       <div className="flex flex-col items-center bg-gray-50 p-1.5 rounded border border-gray-100 w-[80px]"><span className="font-bold text-gray-800">传统体检</span><span>无底层信创池</span></div>
                       <div className="text-indigo-400">VS</div>
                       <div className="flex flex-col items-center bg-indigo-50 p-1.5 rounded border border-indigo-200 w-[80px] ring-1 ring-indigo-500/20"><span className="font-bold text-indigo-700">联想企康</span><span>全栈信创闭环</span></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* 第六、七、八章 */}
          <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 font-bold text-gray-800 flex items-center">
              <span className="text-gray-500 mr-2">后置支撑章节：实施、交付、运维服务保障</span>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="space-y-2">
                <span className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-1 block mb-2"><span className="text-blue-500 mr-1">6</span> 实施与交付管理</span>
                <p className="text-[10px] text-gray-500 mb-1">证明有能力把 PPT 变成现实</p>
                <ul className="text-xs text-gray-700 space-y-1 pl-3 list-disc marker:text-gray-300">
                  <li>实施方法论 (PMP/敏捷)</li>
                  <li>项目排期与里程碑 (Gantt)</li>
                  <li>实施团队配置 (亮出高工认证)</li>
                  <li>质量控制与验收标准</li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-1 block mb-2"><span className="text-blue-500 mr-1">7</span> 培训、运维与售后</span>
                <p className="text-[10px] text-gray-500 mb-1">展现长线服务能力</p>
                <ul className="text-xs text-gray-700 space-y-1 pl-3 list-disc marker:text-gray-300">
                  <li>用户与管理员培训计划</li>
                  <li>SLA与故障响应(7x24,30min)</li>
                  <li className="font-bold text-emerald-700"><span className="text-emerald-500">★ 加分项:</span> 联想全国县乡级线下IT服务网点覆盖</li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-1 block mb-2"><span className="text-blue-500 mr-1">8</span> 应急预案与控制</span>
                <p className="text-[10px] text-gray-500 mb-1">兜底极限场景风险</p>
                <ul className="text-xs text-gray-700 space-y-1 pl-3 list-disc marker:text-gray-300">
                  <li>数据灾备与恢复预案</li>
                  <li>硬件/网络故障响应方案</li>
                  <li>实施过程风险识别规避</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

`;

content = content.replace(/export function CiticCompetitorAnalysisCard/, newCard + '\nexport function CiticCompetitorAnalysisCard');

const renderRegex = /\{isBot && message\.type === 'citic_competitor_analysis' && \([\s\S]*?\)\}/;
const newRender = `{isBot && message.type === 'citic_competitor_analysis' && (
          <CiticCompetitorAnalysisCard data={message.data} />
        )}
        {isBot && message.type === 'lenovo_tech_bid_advantage' && (
          <LenovoTechBidAdvantageCard data={message.data} />
        )}`;

content = content.replace(renderRegex, newRender);

fs.writeFileSync(file, content);
console.log('Modified MessageBubble.tsx successfully.');
