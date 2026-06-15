const fs = require('fs');
const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

const compStart = mbContent.indexOf('export function CaseHighlightCard');
const returnStart = mbContent.indexOf('return (', compStart);
const nextCompStart = mbContent.indexOf('export function', compStart + 100);

if (compStart !== -1 && returnStart !== -1 && nextCompStart !== -1) {
   const before = mbContent.substring(0, returnStart);
   const after = mbContent.substring(nextCompStart - 1);
   const newReturn = `return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-amber-700 to-yellow-600 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          历史成功案例 · 亮点与卖点提炼
        </div>
        <span className="text-amber-100 text-xs px-3 py-1 bg-amber-900/30 rounded-full border border-amber-400/30">
          智能抽取匹配成功率 98%
        </span>
      </div>

      {/* Scene 05 - 高亮卡片内容 */}
      <div className="p-6 bg-amber-50/50">
        <h3 className="text-xl font-bold text-amber-950 mb-4 pb-2 border-b border-amber-200">标品先行，低成本打开客户</h3>
        <p className="text-sm text-gray-700 mb-6 font-medium">推荐策略关键动作：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm flex items-start">
            <div className="bg-amber-100 text-amber-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs">1</div>
            <div>
              <p className="font-bold text-gray-900 mb-1">标准产品先行</p>
              <p className="text-xs text-gray-500">通过成熟体检与健康计划切入，降低决策门槛</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm flex items-start">
            <div className="bg-amber-100 text-amber-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs">2</div>
            <div>
              <p className="font-bold text-gray-900 mb-1">明星案例背书</p>
              <p className="text-xs text-gray-500">展示同级别央国企标杆案例，建立信任基石</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm flex items-start">
            <div className="bg-amber-100 text-amber-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs">3</div>
            <div>
              <p className="font-bold text-gray-900 mb-1">输出待确认问题</p>
              <p className="text-xs text-gray-500">形成清晰需求清单，引导后续深度调研</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm flex items-start">
            <div className="bg-amber-100 text-amber-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs">4</div>
            <div>
              <p className="font-bold text-gray-900 mb-1">暂不进入重非标</p>
              <p className="text-xs text-gray-500">避免初期陷入复杂定制流程，保持敏捷推进</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
   
   mbContent = before + newReturn + after;
   fs.writeFileSync(mbPath, mbContent, 'utf8');
   console.log('Successfully updated CaseHighlightCard');
}
