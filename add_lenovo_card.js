import fs from 'fs';

const filePath = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Insert the mapping
const mappingStr = `
        {isBot && message.type === 'lenovo_new_marketing_plan' && message.data && (
          <LenovoNewMarketingPlanCard data={message.data} onDownload={handleDownload} />
        )}
`;

content = content.replace(
  `{isBot && message.type === 'standard_product_plan_report' && (`,
  mappingStr + `\n        {isBot && message.type === 'standard_product_plan_report' && (`
);

// Define the component at the end of the file
const componentStr = `

export function LenovoNewMarketingPlanCard({ data, onDownload }: { data?: any; onDownload?: () => void }) {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-600 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
          联想专属家庭医生补充营销方案
        </div>
        <span className="text-white text-xs px-3 py-1 bg-white/20 rounded-full border border-white/30 truncate ml-2">全新定制方案</span>
      </div>
      
      <div className="w-full h-40 bg-gray-100 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=80" alt="联想补充方案概念图" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent flex items-center p-6">
          <div className="text-white max-w-lg">
            <h3 className="text-2xl font-bold mb-2">联想集团家庭医生补充方案</h3>
            <p className="text-sm text-blue-100">基于现状补充缺口，以平安好医生最高级别“安主任”为核心，解决非工作时段与家庭维度的健康管理痛点。</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-3">
          <h4 className="text-base font-bold text-blue-900 flex items-center border-b border-blue-100 pb-2">
            <div className="w-1.5 h-4 bg-blue-600 rounded mr-2"></div>
            策略定位与"安主任"核心价值
          </h4>
          <p className="text-sm leading-relaxed text-gray-700">
            本方案的核心定位明确为<strong>"补充"</strong>而非"替代"，专攻目前联想健康体系的三大盲区：非工作时段问诊、员工家属全维度覆盖、以及名医深度资源。通过全面植入平安好医生顶配的<strong>“安主任”</strong>服务体系，形成强大的服务抓手。同时建议实施"500人8周试点"路径，用真实数据与体验闭环来推动全集团范围的采购合作，契合联想"说到做到"的数据管理文化。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl relative overflow-hidden">
            <div className="flex items-center mb-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <Users size={16} className="text-indigo-600" />
              </div>
              <span className="font-bold text-indigo-900">分层触达与对象拆解</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-3 relative z-10">
              <li className="flex flex-col">
                <span className="font-bold text-gray-900 mb-1">高管层 - 战略视角</span>
                <span className="text-gray-600">讲解战略补位价值，填补高端健康管理空白。</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-900 mb-1">HR部门 - 精力释放</span>
                <span className="text-gray-600">外包琐碎的员工健康问题跟进，释放管理精力。</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-900 mb-1">财务与IT</span>
                <span className="text-gray-600">把控合规采购成本，确保系统接口对接顺畅安全。</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl relative overflow-hidden">
            <div className="flex items-center mb-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Target size={16} className="text-blue-600" />
              </div>
              <span className="font-bold text-blue-900">核心卖点阶梯化</span>
            </div>
            <div className="space-y-3 text-sm relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">第一层级 / 年金背书</span>
                <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded text-xs">信任基础</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">第二层级 / 名医闭环</span>
                <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded text-xs">深度价值</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">第三层级 / 家庭覆盖</span>
                <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded text-xs">获得感强</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">第四层级 / 下班后问诊</span>
                <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded text-xs">直观痛点</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">第五层级 / 体检后跟踪</span>
                <span className="font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded text-xs animate-pulse">最易共鸣</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-between items-center download-exclude w-full">
          <div className="flex space-x-2">
            <span className="text-[10px] bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1 rounded font-medium">联想集团</span>
            <span className="text-[10px] bg-indigo-100 text-indigo-700 border border-indigo-200 px-2 py-1 rounded font-medium">安主任家庭医生</span>
          </div>
          <button 
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-blue-600 bg-white hover:bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            下载完整方案(PPT/HTML)
          </button>
        </div>
      )}
    </div>
  );
}

`;

content = content + componentStr;

fs.writeFileSync(filePath, content, 'utf-8');
console.log('LenovoNewMarketingPlanCard component created');
