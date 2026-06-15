const fs = require('fs');

const riskCard = `
export function DocRiskOpportunityCard() {
  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-5 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-base">
          <Target className="mr-2 h-5 w-5 opacity-80" />
          AI 风险与机会识别卡
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* 高风险 */}
        <div className="border border-red-100 rounded-lg overflow-hidden">
          <div className="bg-red-50 px-4 py-2 flex items-center font-bold text-red-800 text-sm border-b border-red-100">
            <span className="mr-2">🔴</span> 重点确认事项（高优先级）
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white text-gray-500 text-xs border-b border-red-50">
                <tr>
                  <th className="px-4 py-2 font-medium w-1/3">管理办法原文</th>
                  <th className="px-4 py-2 font-medium w-1/2">AI识别结果</th>
                  <th className="px-4 py-2 font-medium w-1/6">标签</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-50">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">职工个人年度最高补偿限额按管理办法执行</td>
                  <td className="px-4 py-2 text-gray-900">年度给付限额描述不完整，需确认实际赔付上限及超限处理规则</td>
                  <td className="px-4 py-2 text-red-600 font-bold text-xs">【需核保确认】</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">符合规定的医保目录外自费费用纳入补偿范围</td>
                  <td className="px-4 py-2 text-gray-900">目录外费用责任边界较宽，可能影响基金赔付成本测算</td>
                  <td className="px-4 py-2 text-red-600 font-bold text-xs">【需核保确认】</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">基金由公共账户统一支付和管理</td>
                  <td className="px-4 py-2 text-gray-900">需明确基金超支责任主体及风险分担机制</td>
                  <td className="px-4 py-2 text-red-600 font-bold text-xs">【需理赔确认】</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 中风险 */}
        <div className="border border-yellow-100 rounded-lg overflow-hidden">
          <div className="bg-yellow-50 px-4 py-2 flex items-center font-bold text-yellow-800 text-sm border-b border-yellow-100">
            <span className="mr-2">🟡</span> 运营关注事项（中优先级）
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white text-gray-500 text-xs border-b border-yellow-50">
                <tr>
                  <th className="px-4 py-2 font-medium w-1/3">管理办法原文</th>
                  <th className="px-4 py-2 font-medium w-2/3">AI识别结果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yellow-50">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">医保定点药店购药费用纳入保障范围</td>
                  <td className="px-4 py-2 text-gray-900">需进一步分析药店购药频次及费用占比情况</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">退休人员纳入保障对象范围</td>
                  <td className="px-4 py-2 text-gray-900">需评估退休人员年龄结构及赔付风险特征</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">异地就医费用按规定申请补偿</td>
                  <td className="px-4 py-2 text-gray-900">需关注异地服务响应及时性及理赔便利性</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 低风险 */}
        <div className="border border-green-100 rounded-lg overflow-hidden">
          <div className="bg-green-50 px-4 py-2 flex items-center font-bold text-green-800 text-sm border-b border-green-100">
            <span className="mr-2">🟢</span> 匹配度较高事项（低风险）
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white text-gray-500 text-xs border-b border-green-50">
                <tr>
                  <th className="px-4 py-2 font-medium w-1/3">管理办法原文</th>
                  <th className="px-4 py-2 font-medium w-2/3">AI识别结果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-50">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">门诊及急诊医疗费用纳入保障范围</td>
                  <td className="px-4 py-2 text-gray-900">可直接匹配企康标准门诊保障责任</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">住院医疗费用纳入保障范围</td>
                  <td className="px-4 py-2 text-gray-900">可直接匹配企康标准住院保障责任</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">基本医疗保险后个人负担费用补偿</td>
                  <td className="px-4 py-2 text-gray-900">与现有补充医疗产品责任体系高度一致</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 综合判断 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
           <div className="font-bold text-gray-800 text-sm mb-3 border-b border-gray-200 pb-2">AI 综合判断</div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
             <div>
               <div className="text-xs text-gray-500 mb-1">制度成熟度</div>
               <div className="text-sm font-bold text-yellow-500">★★★★☆</div>
             </div>
             <div>
               <div className="text-xs text-gray-500 mb-1">责任匹配度</div>
               <div className="text-sm font-bold text-gray-800">85%</div>
             </div>
             <div>
               <div className="text-xs text-gray-500 mb-1">风险等级</div>
               <div className="text-sm font-bold text-green-600">中低风险</div>
             </div>
             <div>
               <div className="text-xs text-gray-500 mb-1">合作可行性</div>
               <div className="text-sm font-bold text-blue-600">高</div>
             </div>
           </div>
           <div>
             <div className="text-xs text-gray-500 mb-1">主要关注点</div>
             <div className="text-sm font-bold text-gray-800 flex flex-wrap gap-2">
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200">年度赔付限额</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200">目录外费用责任边界</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200">基金池超支机制</span>
             </div>
           </div>
        </div>

        <div className="flex justify-center border-t border-gray-100 pt-4">
          <button
            className="flex items-center text-sm text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg shadow-sm font-bold transition-colors"
          >
            <span className="mr-2">🩺</span>
            发起专家会诊
          </button>
        </div>

      </div>
    </div>
  );
}
`

let content = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

if(!content.includes('DocRiskOpportunityCard')) {
  content += '\n' + riskCard;
  fs.writeFileSync('src/components/MessageBubble.tsx', content, 'utf8');
}
