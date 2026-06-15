import React, { useEffect, useState } from 'react';
import { Target, FileText, CheckCircle2, Circle, Loader2, Bot, Info, ShieldAlert, BarChart3, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BidDocInterpretationCard() {
  const [phase, setPhase] = useState('extracting'); // 'extracting' | 'validating'
  const [extractionProgress, setExtractionProgress] = useState(25);

  useEffect(() => {
    const t0 = setTimeout(() => setExtractionProgress(75), 1000);
    const t1 = setTimeout(() => setExtractionProgress(100), 2000);
    const t2 = setTimeout(() => {
      setPhase('validating');
    }, 3000);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-2 duration-500 font-sans mt-2">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm text-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 px-5 py-3 flex justify-between items-center text-white">
          <div className="flex items-center font-bold text-base">
            <FileText className="mr-2 h-5 w-5 opacity-90" />
            招标文件解读
          </div>
          {phase === 'extracting' ? (
            <div className="text-xs font-medium animate-pulse opacity-90 bg-white/20 px-3 py-1 rounded-full flex items-center">
              <Loader2 className="h-3 w-3 mr-1 animate-spin" /> 智能解读中...
            </div>
          ) : (
            <div className="text-xs font-medium opacity-90 px-3 py-1 rounded-full bg-white/20">
              分析完成
            </div>
          )}
        </div>

        <div className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
          {/* Left: Document Thumbnail */}
          <div className="lg:col-span-1 border border-gray-200 rounded-xl p-4 bg-gray-50 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-6 bg-white border border-gray-100 rounded-lg shadow-sm mb-4">
              <div className="text-4xl mb-2">📄</div>
              <div className="text-xs text-gray-500 font-medium">132页 PDF</div>
            </div>
            <div className="text-sm font-bold text-gray-800 leading-tight mb-4 text-center">
              某烟草公司补充医疗保障服务采购项目招标文件
            </div>
            <div className="space-y-2 mt-auto">
              <div className="text-xs text-gray-500 flex justify-between">
                <span>文件状态</span>
                <span className="text-green-600 font-medium flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> 上传成功</span>
              </div>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>解析状态</span>
                <span className="text-blue-600 font-medium flex items-center">📑 已识别132页</span>
              </div>
            </div>
          </div>

          {/* Middle: Core Process Steps */}
          <div className="lg:col-span-1 border border-gray-200 rounded-xl p-4 bg-white relative">
            <div className="font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">AI解读进度</div>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="mt-0.5 mr-3 text-purple-600">
                  {phase === 'extracting' ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                </div>
                <div>
                  <div className={`font-bold text-sm ${phase === 'extracting' ? 'text-purple-700' : 'text-gray-800'}`}>招标要求提取</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className={`mt-0.5 mr-3 ${phase === 'validating' ? 'text-purple-600' : 'text-gray-300'}`}>
                   {phase === 'validating' ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                </div>
                <div>
                  <div className={`font-bold text-sm ${phase === 'validating' ? 'text-purple-700' : 'text-gray-500'}`}>方案一致性校验</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="mt-0.5 mr-3 text-gray-300">
                  <Circle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-500">能力匹配分析</div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start">
                <div className="mt-0.5 mr-3 text-gray-300">
                  <Circle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-500">材料清单生成</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: AI Status / Detail Card */}
          <div className="lg:col-span-2 border border-gray-200 rounded-xl p-5 bg-gradient-to-b from-purple-50/30 to-white flex flex-col relative overflow-hidden">
             <div className="font-bold text-gray-800 mb-4 flex items-center">
               <Bot className="w-4 h-4 mr-2 text-purple-600" />
               当前任务
             </div>

             <AnimatePresence mode="wait">
               {phase === 'extracting' && (
                 <motion.div
                   key="extracting"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="flex-1 flex flex-col"
                 >
                   <div className="font-bold text-purple-900 mb-3 flex items-center">
                     <FileText className="w-4 h-4 mr-2" /> 招标要求提取
                   </div>
                   
                   <div className="flex-1 mb-4">
                     <div className="text-xs text-gray-500 mb-2">已识别内容</div>
                     <div className="grid grid-cols-2 gap-2">
                       <div className="bg-white border border-purple-100 p-2 rounded text-xs font-medium text-purple-800 flex items-center shadow-sm">
                         <CheckCircle2 className="w-3 h-3 mr-1 text-purple-500" /> 采购项目名称
                       </div>
                       <div className="bg-white border border-purple-100 p-2 rounded text-xs font-medium text-purple-800 flex items-center shadow-sm">
                         <CheckCircle2 className="w-3 h-3 mr-1 text-purple-500" /> 服务范围
                       </div>
                       <div className="bg-white border border-purple-100 p-2 rounded text-xs font-medium text-purple-800 flex items-center shadow-sm">
                         <CheckCircle2 className="w-3 h-3 mr-1 text-purple-500" /> 资格条件
                       </div>
                       <div className="bg-white border border-purple-100 p-2 rounded text-xs font-medium text-purple-800 flex items-center shadow-sm">
                         <CheckCircle2 className="w-3 h-3 mr-1 text-purple-500" /> 评分标准
                       </div>
                       <div className="bg-white border border-purple-100 p-2 rounded text-xs font-medium text-purple-800 flex items-center shadow-sm">
                         <CheckCircle2 className="w-3 h-3 mr-1 text-purple-500" /> 商务要求
                       </div>
                     </div>
                   </div>

                   <div className="mb-4">
                     <div className="flex justify-between text-xs mb-1">
                       <span className="font-medium text-gray-600">解析进度</span>
                       <span className="font-bold text-purple-700">{extractionProgress}%</span>
                     </div>
                     <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                       <div className="bg-purple-600 h-1.5 rounded-full transition-all duration-300" style={{ width: \`\${extractionProgress}%\` }}></div>
                     </div>
                   </div>

                   <div className="bg-purple-100/50 rounded-lg p-3 text-xs text-purple-800 border border-purple-100">
                     <strong>AI提示：</strong>
                     {extractionProgress < 100 
                       ? " AI正在解读招标文件，提取采购需求、评分规则、资格条件及商务条款，并自动构建投标分析框架。"
                       : " 已完成招标要求提取，正在进入方案一致性校验阶段。"}
                   </div>
                 </motion.div>
               )}

               {phase === 'validating' && (
                 <motion.div
                   key="validating"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="flex-1 flex flex-col"
                 >
                   <div className="font-bold text-indigo-900 mb-3 flex items-center">
                     <Target className="w-4 h-4 mr-2" /> 方案一致性校验
                   </div>

                   <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm mb-4">
                     <div className="flex justify-between items-end border-b border-gray-100 pb-3 mb-3">
                       <div>
                         <div className="text-xs text-gray-500">方案匹配度</div>
                         <div className="text-3xl font-black text-green-600 mt-1">92<span className="text-lg text-green-500 ml-0.5">%</span></div>
                       </div>
                       <div className="text-right">
                         <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block font-medium mb-1">高度匹配</div>
                       </div>
                     </div>

                     <div className="space-y-2">
                       <div className="flex justify-between items-center text-sm">
                         <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> <span className="text-gray-600">已覆盖要求</span></div>
                         <div className="font-bold text-gray-800">18项</div>
                       </div>
                       <div className="flex justify-between items-center text-sm">
                         <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span> <span className="text-gray-600">部分覆盖</span></div>
                         <div className="font-bold text-gray-800">4项</div>
                       </div>
                       <div className="flex justify-between items-center text-sm">
                         <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> <span className="text-gray-600">未覆盖</span></div>
                         <div className="font-bold text-gray-800">1项</div>
                       </div>
                     </div>
                   </div>

                   <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg text-xs mt-auto">
                     <strong>AI建议：</strong>
                     未覆盖项主要是“专属客户服务驻点人员分配方案”，建议补充人员驻场排班表以达到100%匹配。
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
