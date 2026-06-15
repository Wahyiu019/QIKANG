const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /export function LenovoPanoramicCard\(\{\s*data\s*\}\:\s*\{\s*data\?\:\s*any\s*\}\)\s*\{[\s\S]*?(?=export function StandardProductPlanCard)/;

const newCard = `export function LenovoPanoramicCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-100 rounded-xl shadow-lg mt-4 font-sans text-gray-800 overflow-hidden">
      {/* Header */}
      <div className="bg-[#E2231A] px-6 py-4 flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 flex items-center text-white">
          <div className="mr-4 p-2 bg-white/20 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-wide">联想集团全景客户画像 (Lenovo Group)</h3>
            <p className="text-xs text-red-100 mt-1 opacity-90 tracking-wider">最后更新时间: 2026-05-26 | 数据密级: 内部核心机密</p>
          </div>
        </div>
        <div className="relative z-10 text-xs font-bold px-3 py-1 bg-white text-[#E2231A] rounded-full uppercase tracking-widest shadow-sm">
          战略级 KA
        </div>
      </div>

      <div className="p-6 space-y-6 bg-gray-50/50">
        
        {/* Top Metric Row */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-1 font-medium">行业图谱</p>
            <p className="text-sm font-bold text-gray-900">IT与智能硬件制造</p>
            <p className="text-xs text-gray-400 mt-1">智能设备市场份额全球Top1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-1 font-medium">员工规模</p>
            <p className="text-sm font-bold text-gray-900">75,000+ 人</p>
            <p className="text-xs text-green-600 mt-1 flex items-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg><span className="ml-1">遍布全球180+市场</span></p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-1 font-medium">营业收入 (FY2025)</p>
            <p className="text-sm font-bold text-gray-900">约 ¥4000亿 RMB</p>
            <p className="text-xs text-blue-600 mt-1">稳健增长</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-1 font-medium">平安合作渗透率</p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-gray-900">18.5%</p>
              <div className="h-1.5 w-16 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-500" style={{width: "18.5%"}}></div>
              </div>
            </div>
            <p className="text-xs text-red-500 mt-1 font-medium">具有巨大提升空间</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column: 平安合作存量与企康需求洞察 */}
          <div className="col-span-2 space-y-6">
            
            {/* 存量业务 */}
            <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 font-bold text-gray-800 flex justify-between items-center">
                <span><span className="text-[#E2231A] mr-2">█</span>平安内部合作存量全景图</span>
                <span className="text-xs text-gray-500 font-normal">多线条数据打通</span>
              </div>
              <div className="p-4 grid grid-cols-2 gap-4">
                <div className="border border-blue-100 bg-blue-50/30 rounded-md p-3">
                  <h5 className="font-bold text-blue-800 text-xs mb-2 flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    财产险/车险 (深度合作)
                  </h5>
                  <ul className="text-xs text-gray-600 space-y-1.5 mb-2">
                    <li>• 承保北京等核心园区财企险项目</li>
                    <li>• 部分企业用车、高管用车承保</li>
                  </ul>
                  <div className="text-[10px] bg-white px-2 py-1 text-blue-600 rounded border border-blue-100 inline-block">客户粘性：强 | 信任度：高</div>
                </div>
                
                <div className="border border-orange-100 bg-orange-50/30 rounded-md p-3">
                  <h5 className="font-bold text-orange-800 text-xs mb-2 flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    团险与健康管理 (破冰阶段)
                  </h5>
                  <ul className="text-xs text-gray-600 space-y-1.5 mb-2">
                    <li>• 仅少部分高管含团意险定做</li>
                    <li>• 全员健康管理(企康)处于空白</li>
                  </ul>
                  <div className="text-[10px] bg-white px-2 py-1 text-orange-600 rounded border border-orange-100 inline-block">企康渗透机会点！</div>
                </div>
              </div>
            </div>

            {/* 人群健康画像 */}
            <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 font-bold text-gray-800">
                <span className="text-[#E2231A] mr-2">█</span>联想分层员工画像与健康痛点洞察
              </div>
              <div className="divide-y divide-gray-100">
                <div className="p-4 grid grid-cols-12 gap-4 hover:bg-gray-50 transition-colors">
                  <div className="col-span-3 text-xs flex flex-col justify-center">
                    <span className="font-bold text-gray-800">研发及IT人员</span>
                    <span className="text-gray-400 mt-0.5">北京/深圳/上海</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[10px] w-max mt-1">占比 ~40%</span>
                  </div>
                  <div className="col-span-9">
                    <div className="text-xs text-gray-700 bg-red-50/50 p-2 rounded-md border border-red-50 relative">
                      <span className="font-bold text-red-800 block mb-1">健康危象定性分析：</span>
                      高强度脑力劳动导致严重的职场焦虑、睡眠障碍。大量员工面临颈椎/腰椎等长期职业劳损。
                      <div className="mt-2 flex gap-2">
                         <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-[10px]">心脏早搏隐患</span>
                         <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px]">抑郁/重度焦虑倾向</span>
                         <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px]">亚健康爆表</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-12 gap-4 hover:bg-gray-50 transition-colors">
                  <div className="col-span-3 text-xs flex flex-col justify-center">
                    <span className="font-bold text-gray-800">厂线生产/智能制造</span>
                    <span className="text-gray-400 mt-0.5">合肥(联宝)/武汉</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[10px] w-max mt-1">占比 ~45%</span>
                  </div>
                  <div className="col-span-9">
                    <div className="text-xs text-gray-700 bg-orange-50/50 p-2 rounded-md border border-orange-50">
                      <span className="font-bold text-orange-800 block mb-1">工伤防护薄弱点：</span>
                      智能装配线重复劳损、倒班导致生物钟紊乱、特定厂区的职业健康筛查履约情况复杂。亟缺整体工伤预防方案和急救保障体系。
                    </div>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-12 gap-4 hover:bg-gray-50 transition-colors">
                  <div className="col-span-3 text-xs flex flex-col justify-center">
                    <span className="font-bold text-gray-800">高管与核心管理层</span>
                    <span className="text-gray-400 mt-0.5">全球分布</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-[10px] w-max mt-1">极少数但最核心</span>
                  </div>
                  <div className="col-span-9">
                     <div className="text-xs text-gray-700 bg-yellow-50/50 p-2 rounded-md border border-yellow-100">
                      <span className="font-bold text-yellow-800 block mb-1">健康管理失位：</span>
                      日常出差极为频繁、高端应酬多导致三高频发。目前对高管及家属仍缺乏"一站式、尊享、绿通化"的VIP医疗特权服务体系。
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 竞品与切入策略 */}
          <div className="col-span-1 space-y-6">
            
            {/* 竞品情报 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-gray-600 text-white text-[10px] px-2 py-0.5 rounded-bl-lg">竞对扫描</div>
               <h4 className="font-bold text-gray-800 text-sm mb-3 flex items-center">
                 <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                 当前健康管理现状
               </h4>
               <div className="space-y-3">
                 <div className="text-xs bg-gray-50 p-2.5 rounded border border-gray-100">
                   <span className="font-bold text-gray-700 block mb-1">年度体检合作方</span>
                   <p className="text-gray-500">员工多选爱康/美年等传统体检机构或属地公立医院。</p>
                   <p className="text-red-500 mt-1 font-medium">👉 痛点: 数据割裂，体检后无人追踪干预</p>
                 </div>
                 <div className="text-xs bg-gray-50 p-2.5 rounded border border-gray-100">
                   <span className="font-bold text-gray-700 block mb-1">心理EAP供应商</span>
                   <p className="text-gray-500">外部零散的心理咨询机构，服务质量参差不齐。</p>
                   <p className="text-red-500 mt-1 font-medium">👉 痛点: 与实体医疗不打通，治标不治本</p>
                 </div>
               </div>
            </div>

            {/* AI 推荐切入路径 */}
            <div className="bg-gradient-to-br from-[#E2231A] to-red-800 border fill-white rounded-lg p-4 shadow-sm text-white">
               <h4 className="font-bold text-white text-sm mb-3 flex items-center border-b border-red-500/50 pb-2">
                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                 AI 推荐企康破局策略
               </h4>
               
               <div className="space-y-3 relative">
                 <div className="absolute left-[7px] top-4 bottom-4 w-px bg-red-400 max-h-full"></div>
                 
                 <div className="text-xs relative pl-6">
                   <div className="absolute left-[3px] top-1 w-2.5 h-2.5 bg-yellow-400 rounded-full ring-2 ring-red-800"></div>
                   <span className="font-bold text-yellow-300 block mb-0.5">破冰切入点 (短期)</span>
                   <p className="text-red-100 leading-snug">利用现有产险客情关系拜访HRD/工会，以赠送**"百人体验版线上问诊绿通卡"**及**"高管三甲绿通通道"**为诱饵敲开大门。</p>
                 </div>
                 
                 <div className="text-xs relative pl-6">
                   <div className="absolute left-[3px] top-1 w-2.5 h-2.5 bg-red-300 rounded-full ring-2 ring-red-800"></div>
                   <span className="font-bold text-red-200 block mb-0.5">方案渗透 (中期)</span>
                   <p className="text-red-100 leading-snug">针对IT研发中心，主推**"身心健康关怀驿站"**及企业EAP打包方案。解决员工职场焦虑痛点。</p>
                 </div>
                 
                 <div className="text-xs relative pl-6">
                    <div className="absolute left-[3px] top-1 w-2.5 h-2.5 bg-green-400 rounded-full ring-2 ring-red-800"></div>
                   <span className="font-bold text-green-300 block mb-0.5">全面绑定 (长期)</span>
                   <p className="text-red-100 leading-snug">将全国数十个厂区体检与公立绿通数据全面接入企康平台数字化看板。</p>
                 </div>
               </div>
               
               <button className="w-full mt-4 bg-white text-[#E2231A] text-xs font-bold py-2 rounded shadow-sm hover:bg-gray-100 transition-colors">
                 生成《联想企康专项拓展报告》
               </button>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}
`;

content = content.replace(targetRegex, newCard);

fs.writeFileSync(file, content);
console.log('Update Complete');
