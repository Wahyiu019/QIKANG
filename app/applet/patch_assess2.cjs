const fs = require('fs');

let content = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const assessmentComp = `
export function ProductMatchAssessmentCard() {
  const [phase, setPhase] = React.useState('initial'); // 'initial' (0-1s) -> 'summary' (1-3s) -> 'loading_chart' (3-5s) -> 'done' (5-8s) -> 'highlight' (8s+)

  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase('summary'), 1000);
    const t3 = setTimeout(() => setPhase('loading_chart'), 3000);
    const t5 = setTimeout(() => setPhase('done'), 5000);
    const t8 = setTimeout(() => setPhase('highlight'), 8000);
    return () => { clearTimeout(t1); clearTimeout(t3); clearTimeout(t5); clearTimeout(t8); };
  }, []);

  return (
    <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-2 duration-500 font-sans mt-2">
      {phase !== 'initial' && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-visible shadow-sm text-gray-800 relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-3 rounded-t-xl flex justify-between items-center text-white relative">
            <div className="flex items-center font-bold text-base">
              <Target className="mr-2 h-5 w-5 opacity-90" />
              产品匹配评估中心
            </div>
            {phase === 'summary' && (
              <div className="text-xs font-medium animate-pulse opacity-90 bg-white/20 px-3 py-1 rounded-full">
                正在汇总专家会诊结果...
              </div>
            )}
            {(phase === 'loading_chart' || phase === 'done' || phase === 'highlight') && (
              <div className="text-xs font-medium opacity-90">
                已完成多维度专项评估
              </div>
            )}
          </div>

          <div className="p-5 relative">
            {phase === 'summary' && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
                <div className="text-gray-500 font-medium">AI 正在汇总专家库解析映射...</div>
              </div>
            )}

            {(phase === 'loading_chart' || phase === 'done' || phase === 'highlight') && (
              <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
                
                {/* Left col - Chart */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-orange-50/50 rounded-xl border border-orange-100">
                  <div className="text-gray-700 font-bold mb-6">产品覆盖率评估</div>
                  
                  <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                    {/* SVG Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#ffedd5" strokeWidth="12" fill="none" />
                      <motion.circle 
                        cx="50" cy="50" r="40" 
                        stroke="#f97316" 
                        strokeWidth="12" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: phase === 'loading_chart' ? 55.26 : 55.26 }} 
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-orange-600">78%</span>
                      <span className="text-[10px] text-gray-500 mt-1">标准产品覆盖率</span>
                    </div>
                  </div>

                  {/* Stats under circle */}
                  <motion.div initial={{opacity:0}} animate={{opacity:(phase === 'done' || phase === 'highlight') ? 1 : 0}} className="w-full space-y-2 text-sm">
                    <div className="bg-white px-3 py-2 rounded shadow-sm border border-green-100 flex justify-between items-center">
                      <div className="flex items-center"><span className="text-green-500 mr-2">🟢</span> <span className="text-gray-700">可直接匹配</span></div>
                      <span className="font-bold text-green-700">7项</span>
                    </div>
                    <div className="bg-white px-3 py-2 rounded shadow-sm border border-yellow-100 flex justify-between items-center">
                      <div className="flex items-center"><span className="text-yellow-500 mr-2">🟡</span> <span className="text-gray-700">需专项确认</span></div>
                      <span className="font-bold text-yellow-700">5项</span>
                    </div>
                  </motion.div>
                </div>

                {/* Right col - Details & Conclusion */}
                <div className="lg:col-span-8 flex flex-col">
                  {/* AI待确认事项清单 */}
                  <div className="mb-4">
                     <div className="text-gray-800 font-bold mb-3 flex items-center">
                        <ListChecks className="w-4 h-4 mr-2 text-gray-500" /> AI待确认事项清单
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="border border-blue-100 bg-blue-50/30 rounded-lg p-3">
                           <div className="font-bold text-blue-900 text-sm mb-2 flex justify-between items-center">
                             <span>👨‍⚕️ 核保确认</span>
                             <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">2项</span>
                           </div>
                           <ul className="space-y-1.5 text-xs text-blue-800">
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">目录外自费费用责任边界</span></li>
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">特殊困难职工保障责任定义</span></li>
                           </ul>
                        </div>
                        <div className="border border-green-100 bg-green-50/30 rounded-lg p-3">
                           <div className="font-bold text-green-900 text-sm mb-2 flex justify-between items-center">
                             <span>👩‍⚕️ 理赔确认</span>
                             <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">2项</span>
                           </div>
                           <ul className="space-y-1.5 text-xs text-green-800">
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">公共基金池超支处理机制</span></li>
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">药店购药责任历史赔付情况</span></li>
                           </ul>
                        </div>
                        <div className="border border-purple-100 bg-purple-50/30 rounded-lg p-3">
                           <div className="font-bold text-purple-900 text-sm mb-2 flex justify-between items-center">
                             <span>👨‍💼 运营确认</span>
                             <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">1项</span>
                           </div>
                           <ul className="space-y-1.5 text-xs text-purple-800">
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">多机构统一运营与额度配置规则</span></li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* AI评估结论 */}
                  <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:(phase === 'done' || phase === 'highlight') ? 1 : 0, scale:1}} className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex-1">
                     <div className="font-bold text-gray-800 mb-3">AI评估结论</div>
                     <div className="space-y-2.5 text-sm">
                        <div className="flex items-start"><span className="mr-2">🟢</span> <span className="text-gray-700">当前制度与平安标准产品体系高度匹配</span></div>
                        <div className="flex items-start"><span className="mr-2">📊</span> <span className="text-gray-700">标准产品覆盖率：<strong>78%</strong></span></div>
                        <div className="flex items-start"><span className="mr-2">⚠️</span> <span className="text-gray-700">剩余22%主要集中于责任边界及运营规则确认</span></div>
                        <div className="flex items-start"><span className="mr-2">🚀</span> <span className="text-blue-700 font-medium">建议优先采用标准产品方案进行设计，特殊责任通过专家会诊进一步确认</span></div>
                     </div>
                  </motion.div>

                </div>
              </motion.div>
            )}

            {/* Float Highlight */}
            <AnimatePresence>
            {phase === 'highlight' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 15 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-orange-50 border-2 border-orange-500 rounded-full py-2.5 px-6 shadow-xl whitespace-nowrap z-20"
              >
                <div className="text-orange-700 font-bold text-sm flex items-center">
                   <span className="mr-1.5 text-base">🔥</span> 发现快速落地机会：78%责任无需定制开发，可直接采用标准产品方案。
                </div>
              </motion.div>
            )}
            </AnimatePresence>

            {/* AI状态提示 */}
            {(phase === 'done' || phase === 'highlight') && (
               <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mt-5 text-xs text-gray-500 bg-gray-50/80 p-3 rounded-lg border border-gray-100 flex items-start">
                 <Bot className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                 <div>AI已完成产品匹配评估，78%的保障责任可直接映射至标准产品体系，建议优先采用标品方案快速推进，边界责任进入专项确认流程。</div>
               </motion.div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
`;

if (!content.includes('export function ProductMatchAssessmentCard')) {
  content = content + '\n\n' + assessmentComp;
  
  const renderTarget = '        {isBot && message.type === "expert_consultation_report" && (\n          <div className="mt-2 w-full">\n            <ExpertConsultationCard onGeneratePlan={() => onAction(\'发起项目方案生成\')} />\n          </div>\n        )}';
  const renderRes = renderTarget + '\n        {isBot && message.type === "product_match_assessment" && (\n          <div className="mt-2 w-full">\n            <ProductMatchAssessmentCard />\n          </div>\n        )}';
  
  content = content.replace(renderTarget, renderRes);
  
  fs.writeFileSync('src/components/MessageBubble.tsx', content, 'utf8');
  console.log('patched bubble');
} else {
  console.log('already exists');
}
