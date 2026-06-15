const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const newCards = `
export function StandardProductPlanCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
          标品方案智能生成报告
        </div>
      </div>
      <div className="p-5 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="bg-orange-50/80 border border-orange-100 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-3">一、核心产品设计思路</h4>
          <p className="text-xs text-gray-700 leading-relaxed mb-3">
            针对企业对于健康管理的深度需求，融合了线上问诊、就医绿通、健康监测及驻场服务等模块。采用标准化+弹性的模块组合：
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-2 border border-orange-100 rounded">
              <span className="font-bold text-orange-800 block mb-1">保障范围广度</span>
              涵盖了员工年度体检、职业病预防、心理健康EAP、慢性病干预管理。
            </div>
            <div className="bg-white p-2 border border-orange-100 rounded">
              <span className="font-bold text-orange-800 block mb-1">费率测算及优化</span>
              基于人员梯次提供分级定价，基准降本空间预测达18%-22%。
            </div>
          </div>
        </div>
        <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">二、数据支持与服务可视化</h4>
          <div className="h-32 bg-white rounded border border-amber-200 flex items-center justify-center text-amber-600 font-bold mb-3 shadow-inner overflow-hidden relative">
            {/* Mock chart background */}
            <div className="absolute bottom-0 left-4 w-8 bg-orange-300 rounded-t h-1/2"></div>
            <div className="absolute bottom-0 left-16 w-8 bg-amber-400 rounded-t h-3/4"></div>
            <div className="absolute bottom-0 left-28 w-8 bg-orange-500 rounded-t h-full"></div>
            <span className="z-10 bg-white/80 px-2 py-1 rounded">预计服务效能提升走势图</span>
          </div>
          <ul className="text-xs text-amber-800 space-y-1 pl-4 list-disc">
            <li>提供PC端+小程序双端数据看板</li>
            <li>健康数据全流程自动脱敏合规化处理</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CaseHighlightCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          历史案例亮点提取
        </div>
      </div>
      <div className="p-5 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-gray-800">标杆案例：某头部互联网公司企康项目</span>
            <span className="text-[10px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-bold">万人级规模</span>
          </div>
          <p className="text-xs text-gray-600 mb-4 line-clamp-2">
            该客户存在体检供应商对接混乱、缺乏检后管理追踪的问题。我们通过统一平台介入，实现了健康干预的全流程管理。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="border-l-2 border-orange-500 pl-3">
              <h5 className="font-bold text-gray-800">亮点一：数字化聚合</h5>
              <p className="text-gray-500 mt-1">打破体检中心数据孤岛，实现报告一键整合与趋势分析。</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-3">
              <h5 className="font-bold text-gray-800">亮点二：超高员工满意度</h5>
              <p className="text-gray-500 mt-1">检后在线名医问诊使用率达65%，好评率98%。</p>
            </div>
            <div className="border-l-2 border-orange-400 pl-3 md:col-span-2">
              <h5 className="font-bold text-gray-800">验证价值点</h5>
              <p className="text-gray-500 mt-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="mr-1 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                帮助该企业次年商业医疗保险理赔率下降了 8%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompetitorAnalysisCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
          深度竞品分析报告
        </div>
      </div>
      <div className="p-5 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-50/50 border border-red-100 p-3 rounded-lg">
            <h4 className="text-sm font-bold text-red-800 mb-2 flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              竞品：XX健康科技
            </h4>
            <div className="text-xs text-gray-700 space-y-2">
              <p><strong>服务模式：</strong>以SaaS系统售卖为主，缺乏自有医疗团队履约能力。</p>
              <p><strong>销售打法：</strong>主打"零首付"部署，靠数据二次开发变现，低价切入。</p>
            </div>
          </div>
          <div className="bg-green-50/50 border border-green-100 p-3 rounded-lg">
            <h4 className="text-sm font-bold text-green-800 mb-2 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              我方：优势呈现
            </h4>
            <div className="text-xs text-gray-700 space-y-2">
              <p><strong>核心壁垒：</strong>自有百人全职全科医生团队，真实提供深度的<strong>6+1服务体系</strong>。</p>
              <p><strong>打击策略：</strong>强调“重履约、抗风险、严合规”，直击竞品数据滥用和外包医疗服务的痛点。</p>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50/80 border border-orange-100 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-3">详参：6+1 服务方案差异化对比</h4>
          <table className="min-w-full text-xs text-left">
            <thead className="bg-orange-100/50 text-orange-800">
              <tr>
                <th className="px-3 py-2 font-bold">维度</th>
                <th className="px-3 py-2 font-bold">我方方案</th>
                <th className="px-3 py-2 font-bold">竞品短板</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-100/50 text-gray-700">
              <tr>
                <td className="px-3 py-2 font-bold">体检全生命周期</td>
                <td className="px-3 py-2 text-green-700">自营医生1对1深度解读报告</td>
                <td className="px-3 py-2 line-through text-gray-400">AI自动敷衍生成解读</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold">就医绿通资源</td>
                <td className="px-3 py-2 text-green-700">百强三甲直连挂号、专人陪诊</td>
                <td className="px-3 py-2 text-red-600">外包黄牛渠道，合规风险高</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold">慢病健康干预</td>
                <td className="px-3 py-2 text-green-700">定制化运动与营养周抛处方</td>
                <td className="px-3 py-2 text-gray-500">仅推送软文科普，无实质效果</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
`;

content = content.replace(/export function MaterialReviewCard/, newCards + '\nexport function MaterialReviewCard');

// Also inject the usage of these components into MessageBubble rendering
const messageRenderUpdates = `        {isBot && message.type === 'standard_product_plan_report' && (
          <StandardProductPlanCard data={message.data} />
        )}
        {isBot && message.type === 'case_highlight_report' && (
          <CaseHighlightCard data={message.data} />
        )}
        {isBot && message.type === 'competitor_analysis_report' && (
          <CompetitorAnalysisCard data={message.data} />
        )}

        {isBot && message.type === 'material_review_report' && (`;

content = content.replace(/{isBot && message.type === 'material_review_report' && \(/, messageRenderUpdates);

fs.writeFileSync(file, content);
console.log('MessageBubble updated successfully.');
