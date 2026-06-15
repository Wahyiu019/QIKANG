const fs = require('fs');
let mb = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const textToInsert = `
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="mt-5 p-4 bg-purple-50 border border-purple-100 rounded-xl text-purple-800 text-sm flex items-start shadow-sm font-medium">
                <Bot className="w-5 h-5 mr-2 text-purple-600 shrink-0" />
                <span>最终显示：AI已完成186项招标要求与企业能力库的自动匹配，整体匹配度<strong>86%</strong>，建议补充服务案例证明后进入投标</span>
              </motion.div>
`;

const replaceStr = `                 <div className="border-t border-gray-200 pt-4 flex flex-col items-center">
                    <div className="text-xs font-bold text-gray-500 mb-3">推荐动作</div>
                    <div className="flex space-x-4">
                       <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg text-white font-medium text-sm flex items-center shadow-sm">
                          <ShieldAlert className="w-4 h-4 mr-2" /> 发起核保复核
                       </button>
                       <button className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 transition-colors rounded-lg text-gray-700 font-medium text-sm flex items-center shadow-sm">
                          <Target className="w-4 h-4 mr-2" /> 发起运营复核
                       </button>
                    </div>
                 </div>
              </div>` + textToInsert;

const oldStr = `                 <div className="border-t border-gray-200 pt-4 flex flex-col items-center">
                    <div className="text-xs font-bold text-gray-500 mb-3">推荐动作</div>
                    <div className="flex space-x-4">
                       <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg text-white font-medium text-sm flex items-center shadow-sm">
                          <ShieldAlert className="w-4 h-4 mr-2" /> 发起核保复核
                       </button>
                       <button className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 transition-colors rounded-lg text-gray-700 font-medium text-sm flex items-center shadow-sm">
                          <Target className="w-4 h-4 mr-2" /> 发起运营复核
                       </button>
                    </div>
                 </div>
              </div>`;

if (mb.includes(oldStr)) {
  mb = mb.replace(oldStr, replaceStr);
  fs.writeFileSync('src/components/MessageBubble.tsx', mb, 'utf8');
  console.log('patched bubble successfully');
} else {
  console.log('could not find old string');
}
