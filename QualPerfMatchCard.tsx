import React, { useEffect, useState } from 'react';
import { Target, CheckCircle2, ShieldAlert, Award, FileCheck, Circle, Loader2, Bot, Info, Briefcase, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function QualPerfMatchCard() {
  const [phase, setPhase] = useState('matching_qual'); 
  // 'matching_qual' -> 'matching_case' -> 'matching_coverage' -> 'done'

  useEffect(() => {
    const t0 = setTimeout(() => setPhase('matching_case'), 1500);
    const t1 = setTimeout(() => setPhase('matching_coverage'), 3000);
    const t2 = setTimeout(() => setPhase('done'), 4500);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-2 duration-500 font-sans mt-2">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm text-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-3 flex justify-between items-center text-white">
          <div className="flex items-center font-bold text-base">
            <Award className="mr-2 h-5 w-5 opacity-90" />
            资质业绩匹配分析中心
          </div>
          {phase !== 'done' && (
            <div className="text-xs font-medium animate-pulse opacity-90 bg-white/20 px-3 py-1 rounded-full flex items-center">
               <Loader2 className="w-3 h-3 mr-1 animate-spin" /> AI匹配分析中...
            </div>
          )}
          {phase === 'done' && (
             <div className="text-xs font-medium opacity-90 bg-white/20 px-3 py-1 rounded-full">
               分析完成
             </div>
          )}
        </div>

        <div className="p-5 relative">
          
          {phase !== 'done' && (
             <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                <div className="text-gray-500 font-medium">
                   {phase === 'matching_qual' && '正在匹配企业资质库...'}
                   {phase === 'matching_case' && '正在检索同类项目案例...'}
                   {phase === 'matching_coverage' && '正在校验服务能力覆盖情况...'}
                </div>
             </div>
          )}

          {phase === 'done' && (
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-6">
              <div className="flex flex-row justify-between items-start space-x-6">
                
                {/* Center Top: Ring Chart */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="text-sm font-bold text-gray-500 mb-2">综合匹配度</div>
                  <div className="relative w-32 h-32 flex items-center justify-center mb-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="40" stroke="#fef08a" strokeWidth="12" fill="none" />
                       <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="12" fill="none" strokeDasharray="251.2" strokeDashoffset="35.168" className="transition-all duration-1000" strokeLinecap="round" />
                    </svg>
                    <div className="absolute text-3xl font-black text-gray-800">86<span className="text-lg text-gray-500">%</span></div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs font-medium text-gray-600">
                     <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>已满足：86%</div>
                     <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-yellow-400 mr-1.5"></span>待补充：14%</div>
                  </div>
                  <div className="mt-3 text-xs text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg text-center max-w-sm">
                     AI结论：当前项目具备投标条件，核心能力已覆盖招标要求，部分证明材料需补充完善。
                  </div>
                </div>

                {/* Right Top: Fixed Risk Warning */}
                <div className="w-64 shrink-0 bg-red-50 border border-red-100 rounded-xl p-4">
                  <div className="font-bold text-red-800 text-sm mb-3 flex items-center">
                    <ShieldAlert className="w-4 h-4 mr-1.5" /> 投标风险预警
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start"><span className="text-red-500 mr-1.5 mt-0.5">🔴</span><span className="text-red-700 font-medium">额外责任承诺条款待确认</span></div>
                    <div className="flex items-start"><span className="text-red-500 mr-1.5 mt-0.5">🔴</span><span className="text-red-700 font-medium">服务响应时效口径待确认</span></div>
                  </div>
                </div>
              </div>

               {/* Middle: 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 
                 {/* Left: Covered */}
                 <div className="border border-gray-200 bg-white rounded-xl p-4">
                    <div className="font-bold text-green-700 mb-4 flex items-center border-b border-gray-100 pb-2">
                       <CheckCircle2 className="w-4 h-4 mr-2" /> 已覆盖能力
                    </div>
                    <div className="space-y-4 text-sm">
                       <div>
                         <div className="font-bold text-gray-800 mb-1">企业资质</div>
                         <ul className="list-disc list-inside text-gray-600 text-xs space-y-0.5">
                            <li>行业准入资质齐全</li>
                            <li>招标资格要求满足</li>
                         </ul>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 mb-1">服务网络</div>
                         <ul className="list-disc list-inside text-gray-600 text-xs space-y-0.5">
                            <li>全国服务网络覆盖</li>
                            <li>支持多机构统一服务</li>
                         </ul>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 mb-1">同类项目经验</div>
                         <ul className="list-disc list-inside text-gray-600 text-xs space-y-0.5">
                            <li>已具备央国企项目实施经验</li>
                            <li>已具备大型员工福利项目案例</li>
                         </ul>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 mb-1">产品能力</div>
                         <ul className="list-disc list-inside text-gray-600 text-xs space-y-0.5">
                            <li>补充医疗保障服务</li>
                            <li>健康管理服务体系</li>
                            <li>医疗资源协同能力</li>
                         </ul>
                       </div>
                    </div>
                 </div>

                 {/* Right: To Supply */}
                 <div className="border border-yellow-200 bg-yellow-50/30 rounded-xl p-4">
                    <div className="font-bold text-yellow-700 mb-4 flex items-center border-b border-yellow-100 pb-2">
                       <Info className="w-4 h-4 mr-2" /> 待完善内容
                    </div>
                    <div className="space-y-4 text-sm">
                       <div>
                         <div className="font-bold text-gray-800 mb-1">服务案例证明</div>
                         <ul className="list-disc list-inside text-gray-600 text-xs space-y-0.5">
                            <li>需补充同类型客户案例材料</li>
                            <li>需补充项目实施成果证明</li>
                         </ul>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 mb-1">分支机构服务承诺</div>
                         <ul className="list-disc list-inside text-gray-600 text-xs space-y-0.5">
                            <li>需补充分支机构服务说明</li>
                            <li>需明确本地化服务保障机制</li>
                         </ul>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 mb-1">投标支撑材料</div>
                         <ul className="list-disc list-inside text-gray-600 text-xs space-y-0.5">
                            <li>需生成对应证明文件</li>
                            <li>需完成材料归档校验</li>
                         </ul>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Bottom AI Suggestion Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                 <div className="font-bold text-gray-800 mb-4 flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-indigo-600" /> AI响应建议
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                       <div className="text-xs font-bold text-gray-500 mb-2">当前状态</div>
                       <div className="text-sm font-medium text-green-700 flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-1.5" /> 核心能力满足投标要求
                       </div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                       <div className="text-xs font-bold text-gray-500 mb-2">补强建议</div>
                       <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                          <li>优先补充同类项目成功案例</li>
                          <li>补充分支机构服务承诺文件</li>
                          <li>提前准备服务团队配置说明</li>
                       </ul>
                    </div>
                    <div className="bg-white border border-red-100 rounded-lg p-3 shadow-sm">
                       <div className="text-xs font-bold text-gray-500 mb-2">风险提示</div>
                       <ul className="list-none text-xs text-red-600 space-y-1">
                          <li className="flex items-start"><span className="mr-1">⚠️</span> 招标文件涉及额外责任要求</li>
                          <li className="flex items-start"><span className="mr-1">⚠️</span> 服务响应时效定义需确认</li>
                       </ul>
                    </div>
                 </div>

                 <div className="border-t border-gray-200 pt-4 flex flex-col items-center">
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
              </div>

            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}