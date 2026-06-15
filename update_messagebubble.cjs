const fs = require('fs');

const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

const newCard = `
export function CustomerPortraitCard() {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          某省烟草集团 - 客户画像概览
        </div>
        <span className="text-white text-xs px-3 py-1 bg-white/20 rounded-full border border-white/30">
          智能洞察
        </span>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 font-bold mb-1">企业性质</p>
            <p className="text-sm font-semibold text-gray-900">大型国企</p>
          </div>
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 font-bold mb-1">行业</p>
            <p className="text-sm font-semibold text-gray-900">烟草</p>
          </div>
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 font-bold mb-1">人员规模</p>
            <p className="text-sm font-semibold text-gray-900">8,840 人</p>
          </div>
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 font-bold mb-1">地域</p>
            <p className="text-sm font-semibold text-gray-900">某省某市</p>
          </div>
        </div>

        <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">人员结构切面</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <h5 className="font-bold text-gray-900 text-sm mb-3">按职级划分</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between items-center"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>高层员工</span> <span className="font-medium">800 人</span></li>
              <li className="flex justify-between items-center"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></span>核心员工</span> <span className="font-medium">6,000 人</span></li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <h5 className="font-bold text-gray-900 text-sm mb-3">按工种划分</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between items-center"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>内勤员工</span> <span className="font-medium">约 6,000 人 (占比68%)</span></li>
              <li className="flex justify-between items-center"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>外勤员工</span> <span className="font-medium">约 2,840 人 (占比32%)</span></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 shadow-sm md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div>
                 <p className="text-xs text-gray-500 mb-1">平均年龄</p>
                 <p className="text-sm font-bold text-gray-800">35岁 <span className="text-xs text-gray-500 font-normal">(占比68%)</span></p>
               </div>
               <div>
                 <p className="text-xs text-gray-500 mb-1">性别分布</p>
                 <p className="text-sm font-bold text-gray-800">男性 4,840 人 <span className="text-xs text-gray-500 font-normal">(占比50%)</span></p>
               </div>
               <div className="col-span-2">
                 <p className="text-xs text-gray-500 mb-1">预算区间</p>
                 <p className="text-sm font-bold text-red-600">600万 ~ 800万元 左右</p>
               </div>
            </div>
          </div>
        </div>

        <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-3">特有痛点与风险分析</h4>
        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
          <p className="text-sm text-gray-800 mb-2"><strong>既往健康痛点：</strong>职工长期处于高风险作业环境，健康管理需求迫切，亟需系统化、专业化服务支撑。</p>
          <p className="text-sm text-gray-800 mb-2"><strong>特有职业病与慢性病风险：</strong></p>
          <ul className="text-sm text-gray-700 list-disc pl-6 space-y-1">
            <li>尘肺病高发风险</li>
            <li>噪声性听力损伤</li>
            <li>慢性呼吸系统疾病</li>
            <li>心脑血管疾病高发</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
`;

mbContent += newCard;
fs.writeFileSync(mbPath, mbContent, 'utf8');
console.log('Added CustomerPortraitCard');
