const fs = require('fs');

let content = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const expertComp = `
export function ExpertConsultationCard({ onGeneratePlan }: { onGeneratePlan?: () => void }) {
  const [phase, setPhase] = React.useState('thinking'); // 'thinking' | 'done'

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('done');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-3 flex justify-between items-center text-white">
        <div className="flex items-center font-bold text-base">
          <Users className="mr-2 h-5 w-5 opacity-80" />
          专家会诊中心
        </div>
        <div className="text-xs opacity-80">已自动召集核保、理赔、运营专家开展联合评估</div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* 核保专家 */}
          <div className="border border-blue-100 rounded-lg overflow-hidden bg-blue-50/30 flex flex-col h-full">
            <div className="bg-blue-100/50 px-4 py-3 flex items-center border-b border-blue-100">
              <span className="text-2xl mr-2">👨‍⚕️</span>
              <div>
                <div className="font-bold text-blue-900 text-sm">核保专家</div>
                <div className="text-xs text-blue-600 mt-0.5">
                  {phase === 'thinking' ? (
                    <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity, duration:1.5}}>正在将管理办法条款映射为保险责任...</motion.span>
                  ) : (
                    <span className="text-green-600 font-bold">✅ 会诊完成</span>
                  )}
                </div>
              </div>
            </div>
            
            {phase === 'done' && (
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="p-4 space-y-4 text-xs">
                {/* 系统初判 */}
                <div>
                  <div className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-green-500 mr-1 text-sm">✅</span> 系统初判：已完成管理办法责任解析</div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>识别保障对象：在职、退休及特殊人群</li>
                    <li>识别保障责任：门诊、住院、药店、大病救助</li>
                    <li>识别基金模式：公共基金池管理</li>
                  </ul>
                </div>
                {/* 需人工确认 */}
                <div className="bg-orange-50 border border-orange-100 rounded p-2.5">
                  <div className="font-bold text-orange-800 mb-1 flex items-center"><span className="mr-1">⚠️</span> 责任边界存在待确认事项</div>
                  <ul className="list-disc pl-5 space-y-1 text-orange-700">
                    <li>目录外自费费用纳入范围是否有限制</li>
                    <li>年度最高给付额度是否存在分层规则</li>
                    <li>特殊困难职工是否适用独立赔付标准</li>
                  </ul>
                </div>
                {/* 输出意见 */}
                <div className="bg-blue-50 border border-blue-100 rounded p-2.5 flex-1">
                  <div className="font-bold text-blue-800 mb-1 flex items-center"><span className="mr-1">💡</span> 建议采用“标准责任+定制扩展责任”模式</div>
                  <ul className="list-disc pl-5 space-y-1 text-blue-700">
                    <li>标准门诊及住院责任直接匹配</li>
                    <li>目录外责任需专项测算</li>
                    <li>建议引入年度赔付上限控制机制</li>
                  </ul>
                </div>
              </motion.div>
            )}
            {phase === 'thinking' && (
              <div className="p-4 flex-1 flex flex-col justify-center items-center opacity-50 space-y-4">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            )}
          </div>

          {/* 理赔专家 */}
          <div className="border border-green-100 rounded-lg overflow-hidden bg-green-50/30 flex flex-col h-full">
            <div className="bg-green-100/50 px-4 py-3 flex items-center border-b border-green-100">
              <span className="text-2xl mr-2">👨‍⚕️</span>
              <div>
                <div className="font-bold text-green-900 text-sm">理赔专家</div>
                <div className="text-xs text-green-600 mt-0.5">
                  {phase === 'thinking' ? (
                     <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity, duration:1.5, delay:0.2}}>正在测算赔付压力...</motion.span>
                  ) : (
                    <span className="text-green-600 font-bold">✅ 会诊完成</span>
                  )}
                </div>
              </div>
            </div>
            
            {phase === 'done' && (
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="p-4 space-y-4 text-xs">
                {/* 系统初判 */}
                <div>
                  <div className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-green-500 mr-1 text-sm">✅</span> 系统初判：已完成赔付规则与基金压力测算</div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>医保后补偿模式清晰</li>
                    <li>公共账户统一支付</li>
                    <li>理赔流程具备标准化基础</li>
                  </ul>
                </div>
                {/* 需人工确认 */}
                <div className="bg-orange-50 border border-orange-100 rounded p-2.5">
                  <div className="font-bold text-orange-800 mb-1 flex items-center"><span className="mr-1">⚠️</span> 存在赔付风险评估事项</div>
                  <ul className="list-disc pl-5 space-y-1 text-orange-700">
                    <li>药店购药责任历史赔付情况</li>
                    <li>退休人员赔付占比情况</li>
                    <li>公共基金池超支责任归属</li>
                  </ul>
                </div>
                {/* 输出意见 */}
                <div className="bg-green-50 border border-green-100 rounded p-2.5 flex-1">
                  <div className="font-bold text-green-800 mb-1 flex items-center"><span className="mr-1">💡</span> 建议开展历史赔付数据补充分析</div>
                  <ul className="list-disc pl-5 space-y-1 text-green-700">
                    <li>建立基金年度消耗预测模型</li>
                    <li>增加药店责任专项监测</li>
                    <li>输出年度基金运营分析报告</li>
                  </ul>
                </div>
              </motion.div>
            )}
             {phase === 'thinking' && (
              <div className="p-4 flex-1 flex flex-col justify-center items-center opacity-50 space-y-4">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
              </div>
            )}
          </div>

          {/* 运营专家 */}
          <div className="border border-purple-100 rounded-lg overflow-hidden bg-purple-50/30 flex flex-col h-full">
            <div className="bg-purple-100/50 px-4 py-3 flex items-center border-b border-purple-100">
              <span className="text-2xl mr-2">👨‍💼</span>
              <div>
                <div className="font-bold text-purple-900 text-sm">运营专家</div>
                <div className="text-xs text-purple-600 mt-0.5">
                   {phase === 'thinking' ? (
                     <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity, duration:1.5, delay:0.4}}>正在评估多机构落地方案...</motion.span>
                   ) : (
                     <span className="text-green-600 font-bold">✅ 会诊完成</span>
                   )}
                </div>
              </div>
            </div>
            
            {phase === 'done' && (
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="p-4 space-y-4 text-xs">
                {/* 系统初判 */}
                <div>
                  <div className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-green-500 mr-1 text-sm">✅</span> 系统初判：已完成运营模式评估</div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                     <li>支持公共基金池运营</li>
                     <li>支持多机构统一管理</li>
                     <li>支持员工分层服务配置</li>
                  </ul>
                </div>
                {/* 需人工确认 */}
                 <div className="bg-orange-50 border border-orange-100 rounded p-2.5">
                  <div className="font-bold text-orange-800 mb-1 flex items-center"><span className="mr-1">⚠️</span> 存在运营实施细节待确认</div>
                  <ul className="list-disc pl-5 space-y-1 text-orange-700">
                     <li>各机构额度分配规则</li>
                     <li>人员异动与保全流程</li>
                     <li>异地机构服务覆盖要求</li>
                  </ul>
                </div>
                {/* 输出意见 */}
                 <div className="bg-purple-50 border border-purple-100 rounded p-2.5 flex-1">
                  <div className="font-bold text-purple-800 mb-1 flex items-center"><span className="mr-1">💡</span> 建议采用“统一平台+分级运营”模式</div>
                  <ul className="list-disc pl-5 space-y-1 text-purple-700">
                    <li>总部统一管理基金账户</li>
                    <li>分支机构统一服务标准</li>
                    <li>建立多机构运营看板与预警机制</li>
                  </ul>
                </div>
              </motion.div>
            )}
             {phase === 'thinking' && (
              <div className="p-4 flex-1 flex flex-col justify-center items-center opacity-50 space-y-4">
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            )}
          </div>
        </div>

        {/* AI会诊结论 */}
        {phase === 'done' && (
          <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay: 0.4}} className="border-t border-gray-100 pt-5">
            <div className="font-bold text-gray-800 text-sm mb-4">AI会诊结论</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="bg-gray-50 rounded p-3 text-center border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">项目匹配度</div>
                <div className="text-sm font-bold text-gray-800"><span className="text-green-500">🟢</span> 高匹配（85%）</div>
              </div>
              <div className="bg-gray-50 rounded p-3 text-center border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">风险等级</div>
                <div className="text-sm font-bold text-gray-800"><span className="text-yellow-500">🟡</span> 中低风险</div>
              </div>
              <div className="col-span-2 bg-gray-50 rounded p-3 text-center border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">重点关注事项</div>
                <div className="text-xs font-bold text-gray-800 flex justify-center space-x-3 mt-1">
                   <span>年度给付限额规则</span>
                   <span>目录外费用责任边界</span>
                   <span>公共基金池超支机制</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-center justify-between mt-4">
               <div className="text-blue-900 text-sm font-bold">
                 🤖 AI已完成核保、理赔、运营三方联合评估，确认项目具备方案设计条件，建议进入产品匹配与方案生成阶段。
               </div>
               {onGeneratePlan && (
                 <button 
                   onClick={onGeneratePlan}
                   className="flex items-center text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm font-bold transition-colors ml-4 whitespace-nowrap"
                 >
                   <span className="mr-1">🚀</span> 发起方案生成
                 </button>
               )}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
`;

// Also update DocRiskOpportunityCard to accept an onConsultation prop
const targetReplaceStr = `export function DocRiskOpportunityCard() {
  return (`;

const newReplaceStr = `export function DocRiskOpportunityCard({ onConsultation }: { onConsultation?: () => void }) {
  return (`;

const targetButtonStr = `<button
            className="flex items-center text-sm text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg shadow-sm font-bold transition-colors"
          >
            <span className="mr-2">🩺</span>
            发起专家会诊
          </button>`;

const newButtonStr = `<button
            onClick={onConsultation}
            className="flex items-center text-sm text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg shadow-sm font-bold transition-colors"
          >
            <span className="mr-2">🩺</span>
            发起专家会诊
          </button>`;

if (content.includes(targetReplaceStr)) {
  content = content.replace(targetReplaceStr, newReplaceStr);
  content = content.replace(targetButtonStr, newButtonStr);
  content = content + '\n\n' + expertComp;
  fs.writeFileSync('src/components/MessageBubble.tsx', content, 'utf8');
} else {
  console.log('Failed to find DocRiskOpportunityCard start', content.indexOf('export function DocRiskOpportunityCard() {'));
}
