const fs = require('fs');

const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

const compStart = mbContent.indexOf('export function StandardProductPlanCard');
const returnStart = mbContent.indexOf('return (', compStart);
const nextCompStart = mbContent.indexOf('export function', compStart + 100);

if (compStart !== -1 && returnStart !== -1 && nextCompStart !== -1) {
   const before = mbContent.substring(0, returnStart);
   const after = mbContent.substring(nextCompStart - 1);
   const newReturn = `return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-orange-700 to-orange-500 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
          某省烟草集团专门营销方案
        </div>
        <span className="text-orange-100 text-xs px-3 py-1 bg-orange-800/30 rounded-full border border-orange-400/30">
          机密 / 客户专属方案
        </span>
      </div>
      {data?.isFamilyDoctor ? (
        <div className="p-6 bg-gray-50/20 w-full font-sans">
          <h3 className="text-xl font-bold mb-4 text-orange-950">三段式访问材料</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
              <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
                <h4 className="font-bold text-orange-900 text-sm">哪些大客户在做</h4>
              </div>
              <ul className="p-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>同类型央国企</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>省级多机构客户</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>长期合作标杆</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
              <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
                <h4 className="font-bold text-orange-900 text-sm">平安标准产品</h4>
              </div>
              <ul className="p-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>分层补充医疗</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>委托基金管理</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>体检/慢病/就医协助</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
              <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
                <h4 className="font-bold text-orange-900 text-sm">明星方案价值</h4>
              </div>
              <ul className="p-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>政策合规</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>员工关怀</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>ESG/健康企业</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>企业文化与荣誉</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-gray-50/20">
          <h3 className="text-xl font-bold mb-4">标准方案</h3>
        </div>
      )}
    </div>
  );
}
`;
   
   mbContent = before + newReturn + after;
   fs.writeFileSync(mbPath, mbContent, 'utf8');
   console.log('Successfully updated StandardProductPlanCard');
}
