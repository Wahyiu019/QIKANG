const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const newCard = `
export function CiticCompetitorAnalysisCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mt-4 font-sans text-gray-800">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-6 py-5 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" /></svg>
        </div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center text-white font-bold text-xl tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
            竞品分析 AI 执行报告
          </div>
          <div className="text-blue-100 text-xs font-mono bg-blue-950/50 px-3 py-1 rounded border border-blue-500/30">
            中信银行信用卡中心员工体检项目 (2025-ZJKZX-068)
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 bg-gray-50/50">
        
        {/* Core summary text directly from response prompt */}
        <div className="bg-blue-50/80 border border-blue-100 p-4 rounded-lg text-sm text-gray-700">
           <span className="font-bold text-blue-900 block mb-1">结论提炼：</span>
           本次投标最大对手是 <strong>袋鼠健康</strong> 和 <strong>德安健康</strong>，其次是 <strong>善诊</strong>。我方制胜关键在于强调全职医疗团队的重履约属性与平安品牌背书，主打医疗质量防线。
        </div>

        {/* 态势与规则 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 竞争态势 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 font-bold text-gray-800 text-sm flex items-center">
               <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> 竞争态势总览 (12家投标方)
            </div>
            <div className="p-4 space-y-4">
               <div>
                 <div className="flex justify-between items-end mb-1">
                   <span className="text-xs font-bold text-red-700">🔴 高威胁 (3家)</span>
                 </div>
                 <div className="flex gap-2 flex-wrap">
                   <span className="px-2 py-1 bg-red-50 text-red-700 border border-red-200 rounded text-xs">袋鼠健康</span>
                   <span className="px-2 py-1 bg-red-50 text-red-700 border border-red-200 rounded text-xs">德安健康</span>
                   <span className="px-2 py-1 bg-red-50 text-red-700 border border-red-200 rounded text-xs">善诊</span>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between items-end mb-1">
                   <span className="text-xs font-bold text-orange-600">🟠 中威胁 (4家)</span>
                 </div>
                 <div className="flex gap-2 flex-wrap">
                   <span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">元化医疗</span>
                   <span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">乐荐健康</span>
                   <span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">国康健康</span>
                   <span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">美年大健康</span>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between items-end mb-1">
                   <span className="text-xs font-bold text-green-700">🟢 低威胁 (5家)</span>
                 </div>
                 <div className="flex gap-2 flex-wrap">
                   <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">霓蝶健康</span>
                   <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">康康在线</span>
                   <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">禾连健康</span>
                   <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">中康体检</span>
                   <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">健康同城</span>
                 </div>
               </div>
            </div>
          </div>

          {/* AI 关键判断规则 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
             <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 font-bold text-gray-800 text-sm flex items-center">
               <span className="w-2 h-2 rounded-full bg-violet-500 mr-2"></span> 关键判断规则库
             </div>
             <table className="min-w-full text-xs text-left">
                <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2 font-medium">触发条件</th>
                    <th className="px-4 py-2 font-medium w-32">判定结果</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr><td className="px-4 py-2">上期中标本项目 / 行业龙头</td><td className="px-4 py-2 font-medium text-red-600">🔴 高威胁</td></tr>
                  <tr><td className="px-4 py-2">已中标同客户其他项目</td><td className="px-4 py-2 font-medium text-red-600">🔴 高威胁</td></tr>
                  <tr><td className="px-4 py-2">有银行客户案例 ≥ 3</td><td className="px-4 py-2 font-medium text-orange-500">🟠 中威胁</td></tr>
                  <tr><td className="px-4 py-2">有专精特新 / 高新资质</td><td className="px-4 py-2 font-medium text-yellow-600">🟡 需关注</td></tr>
                  <tr><td className="px-4 py-2">自有体检机构 / 重资产</td><td className="px-4 py-2 font-medium text-amber-600">⚠️ 需重点应对</td></tr>
                  <tr><td className="px-4 py-2">与我方无明显竞争点</td><td className="px-4 py-2 font-medium text-green-600">🟢 低威胁</td></tr>
                </tbody>
             </table>
          </div>
        </div>

        {/* 高威胁竞品画像 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-red-50/50 border-b border-red-100 px-4 py-3 font-bold text-red-900 text-sm flex items-center justify-between">
            <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-600 mr-2"></span> 重点高威胁竞品画像与打法分析</div>
          </div>
          <div className="p-4 space-y-4">
             
             {/* Competitor Detail Row */}
             <div className="border border-red-100 rounded-lg p-4 bg-white relative">
                <div className="absolute top-4 right-4 text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded border border-red-200">威胁等级：高</div>
                <h5 className="font-bold text-lg text-gray-900 mb-1">袋鼠健康</h5>
                <div className="text-xs text-gray-500 mb-4">成立时间：2015年 | 互联网医疗综合体</div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                   <div>
                     <span className="font-bold text-gray-700 block mb-1">核心优势：</span>
                     <ul className="list-disc pl-4 text-gray-600 space-y-1">
                       <li>具备互联网医院牌照</li>
                       <li>多点执业医生资源库丰富</li>
                       <li>SaaS体检预约平台系统成熟</li>
                     </ul>
                   </div>
                   <div>
                     <span className="font-bold text-gray-700 block mb-1">历史中标与重合点：</span>
                     <ul className="list-disc pl-4 text-gray-600 space-y-1">
                       <li>XX银行总行体检项目</li>
                       <li>XX大厂全国员工体检福利采购</li>
                       <li className="text-red-600 font-medium mt-1">竞争点：同样主打线上线下一体化</li>
                     </ul>
                   </div>
                </div>

                <div className="mt-4 bg-indigo-50/50 border border-indigo-100 p-3 rounded-md">
                   <div className="text-xs">
                     <span className="font-bold text-indigo-900">克制策略：主打『医疗质量防线』</span>
                     <p className="text-indigo-800 mt-1">向客户强调其作为轻资产第三方平台的资源不可控风险，突出我方<strong className="text-indigo-900 bg-indigo-100 px-1 rounded mx-1">千人全职医生天团</strong>的稳定性和专业履约能力。</p>
                   </div>
                </div>
             </div>

          </div>
        </div>

        {/* 定价参考 & 我方差异化 */}
        <div className="grid grid-cols-3 gap-6">
           <div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
             <h5 className="font-bold text-gray-800 text-sm mb-3 flex items-center border-b border-gray-100 pb-2">
               <span className="text-blue-600 mr-2">✦</span> 我方独家差异化壁垒
             </h5>
             <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5">1</div>
                  <span><strong>重医疗属性：</strong>全职医疗团队规模与自有诊所建设，重履约，服务质量可控（而多数竞品只是外包）。</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5">2</div>
                  <span><strong>金融级信赖：</strong>平安集团品牌背书，世界500强，天然契合中信银行的合规审核要求与采购偏好。</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5">3</div>
                  <span><strong>更深的履约网络：</strong>全国千家深度直连的三甲绿通网络，触角极深。</span>
                </li>
             </ul>
           </div>

           <div className="col-span-1 bg-white border border-emerald-200 rounded-lg shadow-sm p-4 bg-emerald-50/20">
             <h5 className="font-bold text-emerald-900 text-sm mb-3 flex items-center border-b border-emerald-100 pb-2">
               <span className="text-emerald-500 mr-2">¥</span> 投标定价建议推演
             </h5>
             <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">基础全员体检套餐</div>
                  <div className="text-lg font-bold text-emerald-700">〜 880<span className="text-sm font-normal">元/人</span></div>
                  <div className="text-[10px] text-gray-500 leading-tight mt-1">根据12家竞品历史中标中位数推算。建议小幅下探，或通过增加高频特色赠项(如不限次线上问诊)提高性价比得分。</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">核心高管/专项深度筛查</div>
                  <div className="text-lg font-bold text-emerald-700">1.5k-2.0k<span className="text-sm font-normal">元/人</span></div>
                  <div className="text-[10px] text-gray-500 leading-tight mt-1">利用早癌基因检测/心脑血管精密筛查等项目作为利润核心，拉开竞品差异打造溢价。</div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}

`;

content = content.replace(/export function CompetitorAnalysisCard/, newCard + '\nexport function CompetitorAnalysisCard');

const renderRegex = /\{isBot && message\.type === 'competitor_analysis_report' && \([\s\S]*?\)\}/;
const newRender = `{isBot && message.type === 'competitor_analysis_report' && (
          <CompetitorAnalysisCard data={message.data} />
        )}
        {isBot && message.type === 'citic_competitor_analysis' && (
          <CiticCompetitorAnalysisCard data={message.data} />
        )}`;

content = content.replace(renderRegex, newRender);

fs.writeFileSync(file, content);
console.log('Modified MessageBubble.tsx successfully.');
