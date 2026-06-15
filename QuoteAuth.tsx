
import React from 'react';
import { Target, Loader2, Bot, Info, ShieldAlert, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function QuoteAuthCenterCard() {
  const [phase, setPhase] = React.useState('matching'); // matching -> checking -> evaluating -> done

  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase('checking'), 1500);
    const t2 = setTimeout(() => setPhase('evaluating'), 3000);
    const t3 = setTimeout(() => setPhase('done'), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-2 duration-500 font-sans mt-2">
      <div className="bg-white border border-gray-200 rounded-xl overflow-visible shadow-sm text-gray-800 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-3 rounded-t-xl flex justify-between items-center text-white relative">
          <div className="flex items-center font-bold text-base">
            <BarChart3 className="mr-2 h-5 w-5 opacity-90" />
            智能报价授权中心
          </div>
          {phase !== 'done' && (
            <div className="text-xs font-medium animate-pulse opacity-90 bg-white/20 px-3 py-1 rounded-full">
              智能分析中...
            </div>
          )}
          {phase === 'done' && (
            <div className="text-xs font-medium opacity-90">
              分析完成
            </div>
          )}
        </div>

        <div className="p-5 relative">
          {phase !== 'done' && (
             <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                <div className="text-gray-500 font-medium">
                   {phase === 'matching' && '正在匹配定价规则...'}
                   {phase === 'checking' && '正在校验授权边界...'}
                   {phase === 'evaluating' && '正在评估利润空间...'}
                </div>
             </div>
          )}

          {phase === 'done' && (
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-6">
              
              {/* Top Dashboard & Right Rules Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                 {/* Left Dashboard */}
                 <div className="lg:col-span-2 border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white rounded-xl p-5">
                    <div className="text-center mb-6">
                       <div className="text-gray-500 text-sm font-medium mb-1">标准报价</div>
                       <div className="text-4xl font-black text-blue-800">¥1,620<span className="text-sm text-gray-500 font-normal ml-1">/人/年</span></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                       <div className="bg-white border border-blue-100 rounded-lg p-3 text-center shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">建议区间</div>
                          <div className="font-bold text-gray-800">¥1,480 - ¥1,560</div>
                       </div>
                       <div className="bg-white border border-blue-100 rounded-lg p-3 text-center shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">授权底线</div>
                          <div className="font-bold text-gray-800">¥1,420</div>
                       </div>
                       <div className="bg-white border border-blue-100 rounded-lg p-3 text-center shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">风险等级</div>
                          <div className="font-bold text-yellow-600 flex items-center justify-center"><span className="mr-1">🟡</span>黄色</div>
                       </div>
                    </div>
                 </div>

                 {/* Right Rules */}
                 <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
                    <div className="font-bold text-gray-800 mb-3 flex items-center">
                       <ShieldAlert className="w-4 h-4 mr-2 text-indigo-500" /> 审批规则 (演示)
                    </div>
                    <div className="space-y-3 text-sm">
                       <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-500">当前报价</span>
                          <span className="font-bold">¥1,620/人/年</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-500">状态</span>
                          <span className="text-green-600 font-medium">🟢 无需审批</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-500">授权底线</span>
                          <span className="font-bold">¥1,420/人/年</span>
                       </div>
                       <div className="text-xs text-gray-500 bg-white p-2 rounded border border-gray-100">
                          <strong>规则：</strong>低于底线自动触发专项审批<br/>
                          <strong>风险控制：</strong>项目存在基金责任及运营规则待确认事项
                       </div>
                    </div>
                 </div>
              </div>

              {/* Middle Range Chart */}
              <div className="border border-gray-200 rounded-xl p-5">
                 <div className="font-bold text-gray-800 mb-6">报价授权区间分析</div>
                 
                 {/* Visual Bar */}
                 <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mb-8 mt-4 mx-4">
                    {/* Markers */}
                    <div className="absolute -top-1 -left-2 w-4 h-4 rounded-full bg-white border-2 border-red-500 shadow"></div>
                    <div className="absolute -top-1 left-[30%] w-4 h-4 rounded-full bg-white border-2 border-yellow-500 shadow"></div>
                    <div className="absolute -top-1 left-[70%] w-4 h-4 rounded-full bg-white border-2 border-green-500 shadow"></div>
                    <div className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow"></div>
                    
                    {/* Labels */}
                    <div className="absolute top-4 -left-6 text-xs font-bold text-red-600">Trigger<br/>&lt; 1420</div>
                    <div className="absolute top-4 left-[30%] -translate-x-1/2 text-xs font-bold text-yellow-600">1480</div>
                    <div className="absolute top-4 left-[70%] -translate-x-1/2 text-xs font-bold text-green-600">1560</div>
                    <div className="absolute top-4 -right-4 text-xs font-bold text-blue-700">1620+</div>

                    {/* Zone Names */}
                    <div className="absolute -top-6 left-[15%] -translate-x-1/2 text-[10px] text-gray-500">审批区</div>
                    <div className="absolute -top-6 left-[50%] -translate-x-1/2 text-[10px] text-gray-500">授权区</div>
                    <div className="absolute -top-6 left-[85%] -translate-x-1/2 text-[10px] text-gray-500">低风险区</div>
                 </div>

                 {/* Details Columns */}
                 <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-red-50/50 border border-red-100 rounded-lg p-3">
                       <div className="font-bold text-red-700 text-sm mb-1">🔴 红色区</div>
                       <div className="font-bold text-red-900 mb-2">低于 ¥1,420</div>
                       <div className="text-xs text-red-600 leading-tight">风险过高，触及红线，需强制触发集团专项审批流程。</div>
                    </div>
                    <div className="bg-yellow-50/50 border border-yellow-100 rounded-lg p-3">
                       <div className="font-bold text-yellow-700 text-sm mb-1">🟡 黄色区</div>
                       <div className="font-bold text-yellow-900 mb-2">¥1,420 - ¥1,480</div>
                       <div className="text-xs text-yellow-700 leading-tight">符合授权规则边界，可用于对抗激烈竞争，但需谨慎。</div>
                    </div>
                    <div className="bg-green-50/50 border border-green-100 rounded-lg p-3">
                       <div className="font-bold text-green-700 text-sm mb-1">🟢 绿色区</div>
                       <div className="font-bold text-green-900 mb-2">¥1,480 - ¥1,560</div>
                       <div className="text-xs text-green-700 leading-tight">推荐成交区间，兼顾市场竞争力与内部利润要求。</div>
                    </div>
                 </div>
              </div>

              {/* Bottom Recommendation */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
                 <div className="font-bold text-indigo-900 mb-3">AI 定价建议</div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                       <div className="text-xs text-indigo-500 mb-1">核心优化策略</div>
                       <div className="text-sm font-medium text-indigo-800 mb-2">优先调整服务配置提升竞争力：</div>
                       <ul className="space-y-1 text-sm text-indigo-700 pl-4 list-disc">
                          <li>适度优化低使用率服务</li>
                          <li>调整高成本增值服务配置</li>
                          <li>保持核心医疗责任不变</li>
                       </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                       <div className="bg-white rounded-lg p-3 border border-indigo-200 shadow-sm">
                          <div className="flex items-center text-orange-600 font-bold text-sm mb-1">
                             <Info className="w-4 h-4 mr-1" /> 风险提示
                          </div>
                          <div className="text-xs text-gray-600">
                             不建议通过直接降价获取项目，优先采用服务结构优化方式提升报价竞争力。
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* AI Conclusion */}
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                 <div className="font-bold text-gray-800 mb-3 flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-blue-600" /> AI 报价结论
                 </div>
                 <div className="space-y-2 text-sm">
                    <div className="flex items-center"><span className="mr-2">🟢</span> <span className="text-gray-600">标准报价：</span><span className="font-bold text-gray-800">¥1,620/人/年</span></div>
                    <div className="flex items-center"><span className="mr-2">🟡</span> <span className="text-gray-600">建议成交区间：</span><span className="font-bold text-gray-800">¥1,480 - ¥1,560/人/年</span></div>
                    <div className="flex items-center"><span className="mr-2">🔴</span> <span className="text-red-600 font-medium">低于 ¥1,420 需专项审批</span></div>
                    <div className="flex items-start mt-2 pt-2 border-t border-gray-200"><span className="mr-2 mt-0.5">💡</span> <span className="text-blue-700 font-medium">建议优先优化服务组合，不建议直接降价竞争</span></div>
                 </div>
              </motion.div>

            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
