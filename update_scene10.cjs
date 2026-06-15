const fs = require('fs');

const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

const compStart = mbContent.indexOf('export function BidInspectionCard(');
const returnStart = mbContent.indexOf('return (', compStart);
const nextCompStart = mbContent.indexOf('export function', compStart + 100);

if (compStart !== -1 && returnStart !== -1 && nextCompStart !== -1) {
   const before = mbContent.substring(0, returnStart);
   const after = mbContent.substring(nextCompStart - 1);
   const newReturn = `return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-red-600 to-red-400 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          合规风险检查报告
        </div>
        <span className="text-red-100 text-xs px-3 py-1 bg-red-800/30 rounded-full border border-red-400/30">
          核心项拦截：是
        </span>
      </div>

      <div className="p-6 space-y-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">多维度风险分类</h3>
        <p className="text-sm text-gray-500 mb-4">智能解析企业赔付盲点与运营风险预警，支持一键拦截。</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50/50 border border-red-200 rounded-lg p-5 shadow-sm">
            <h4 className="flex items-center text-red-800 font-bold mb-3 border-b border-red-200 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2 shadow-sm animate-pulse"></span>
              核保类风险 (高风险)
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-gray-900">健康体检限制：</strong>未提供往期大病历史数据明细，预测赔付率可能超出90%的保底统筹起付线红线。</li>
              <li><strong className="text-gray-900">年龄结构分布：</strong>退休职工占比偏高，高血压/糖尿病等慢病发病率超均值。</li>
            </ul>
          </div>
          <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-5 shadow-sm">
            <h4 className="flex items-center text-amber-800 font-bold mb-3 border-b border-amber-200 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2 shadow-sm"></span>
              理赔类风险 (中风险)
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-gray-900">结算争议点：</strong>跨省异地就诊补充协议未明确结报标准。</li>
              <li><strong className="text-gray-900">票据报销合规：</strong>部分基层卫生院未完成医保联网直赔，可能引发大量手工材料报错。</li>
            </ul>
          </div>
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-5 shadow-sm">
            <h4 className="flex items-center text-emerald-800 font-bold mb-3 border-b border-emerald-200 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2 shadow-sm"></span>
              运营类风险 (低风险)
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-gray-900">体检宣发：</strong>宣传物料要求3周内覆盖全国47个下属机构，存在一定交付并发压力。</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 border-t border-gray-100 pt-5 mt-2">
          <div className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-600 font-bold">建议：需业务团队补充核心人员名单明细并重新评估风险溢价。</div>
        </div>
      </div>
    </div>
  );
}
`;
   
   mbContent = before + newReturn + after;
   fs.writeFileSync(mbPath, mbContent, 'utf8');
   console.log('Successfully updated BidInspectionCard');
}
