const fs = require('fs');
let content = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const interpCard = `
export function DocInterpretationCard() {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setStep(currentStep);
      if (currentStep >= 7) {
        clearInterval(interval);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-base">
          <FileText className="mr-2 h-5 w-5 opacity-80" />
          某烟草企业补充医疗保障管理办法 - AI 解析
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Original Text */}
        <div className="p-5 border-r border-gray-200 bg-[#FAF9F6]">
          <div className="font-bold text-center text-sm text-gray-900 mb-4 border-b border-gray-300 pb-2">
            《某烟草企业补充医疗保障管理办法》原文
          </div>
          <div className="text-xs text-gray-700 leading-relaxed font-serif space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="font-bold text-gray-900">第四章 保障对象</div>
            <div>
              第四条 本办法适用于公司
              <span className={\`transition-all duration-300 \${step >= 1 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}\`}>
                正式在职员工及退休人员
              </span>
              。对于因工伤致残、重大疾病长期治疗等
              <span className={\`transition-all duration-300 \${step >= 1 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}\`}>
                特殊困难职工
              </span>
              ，经公司补充医疗保障管理委员会审核后，可纳入专项医疗救助保障范围。
            </div>
            
            <div className="font-bold text-gray-900 mt-4">第五章 保障责任</div>
            <div>第五条 补充医疗保障基金主要用于补偿参保人员在基本医疗保险报销后的个人负担医疗费用。</div>
            <div>保障范围包括：</div>
            <div className="pl-2">
              （一）<span className={\`transition-all duration-300 \${step >= 3 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}\`}>门诊及急诊医疗费用；</span><br/>
              （二）<span className={\`transition-all duration-300 \${step >= 3 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}\`}>定点医疗机构住院医疗费用；</span><br/>
              （三）<span className={\`transition-all duration-300 \${step >= 3 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}\`}>医保定点药店购药费用；</span><br/>
              （四）<span className={\`transition-all duration-300 \${step >= 3 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}\`}>符合条件的重大疾病医疗救助费用。</span>
            </div>
            
            <div className="font-bold text-gray-900 mt-4">第六章 支付标准</div>
            <div>第六条 对参保人员发生的符合规定的医疗费用，在基本医疗保险报销后，由补充医疗保障基金按规定进行补偿。</div>
            
            <div className="font-bold text-gray-900 mt-4">第七章 给付限额</div>
            <div>第七条 补充医疗保障基金实行年度总额控制。职工个人年度最高补偿限额为人民币10万元。重大疾病医疗救助年度最高补偿限额为人民币30万元。</div>

            <div className="font-bold text-gray-900 mt-4">第八章 基金管理</div>
            <div>第八条 补充医疗保障基金实行统筹管理。</div>
            <div>
              基金由企业福利费统一划拨形成
              <span className={\`transition-all duration-300 \${step >= 5 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}\`}>公共基金池</span>
              ，按照实际发生医疗费用进行
              <span className={\`transition-all duration-300 \${step >= 5 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}\`}>统一支付和扣减。</span>
            </div>
            <div>基金年度结余转入下一年度继续使用。</div>
          </div>
        </div>

        {/* Right: AI Parsed Results */}
        <div className="p-5 bg-[#F4F7FC]">
          <div className="font-bold text-center text-sm text-blue-900 mb-4 flex items-center justify-center">
            <span className="bg-blue-600 text-white p-1 rounded mr-2"><CheckCircle size={14} /></span> 
            AI 结构化解析结果
          </div>
          
          <div className="w-full space-y-2">
            <div className="grid grid-cols-12 gap-2 bg-blue-100/50 p-2 rounded text-xs font-bold text-blue-900 border border-blue-200">
              <div className="col-span-4 text-center">字段名称</div>
              <div className="col-span-8">解析结果</div>
            </div>

            <div className="space-y-1.5 h-[340px] overflow-y-auto custom-scrollbar">
              {step >= 2 && (
                <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="grid grid-cols-12 gap-2 bg-white p-2.5 rounded text-xs border border-blue-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></div>
                  <div className="col-span-4 text-gray-500 font-bold flex items-center justify-center">保障人群</div>
                  <div className="col-span-8 text-blue-800 font-bold flex items-center">在职员工、退休人员、特殊困难职工</div>
                </motion.div>
              )}
              
              {step >= 4 && (
                <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="grid grid-cols-12 gap-2 bg-white p-2.5 rounded text-xs border border-blue-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                  <div className="col-span-4 text-gray-500 font-bold flex items-center justify-center">报销范围</div>
                  <div className="col-span-8 text-blue-800 font-bold flex items-center leading-relaxed">门急诊医疗、住院医疗、药店购药、大病救助</div>
                </motion.div>
              )}

              {step >= 6 && (
                <>
                  <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="grid grid-cols-12 gap-2 bg-white p-2.5 rounded text-xs border border-blue-100 shadow-sm relative overflow-hidden group">
                    <div className="col-span-4 text-gray-500 font-bold flex items-center justify-center">账户规则</div>
                    <div className="col-span-8 text-blue-800 font-bold flex items-center">公共账户（基金池模式）</div>
                  </motion.div>
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-blue-50 shadow-sm">
                    <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">支付口径</div>
                    <div className="col-span-8 text-gray-800 flex items-center">医保后个人自付、符合规定的目录外自费</div>
                  </motion.div>
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-blue-50 shadow-sm">
                    <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">年度限额</div>
                    <div className="col-span-8 text-gray-800 flex items-center">个人年度最高补偿10万元</div>
                  </motion.div>
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-blue-50 shadow-sm">
                    <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">大病限额</div>
                    <div className="col-span-8 text-gray-800 flex items-center">大病救助年度最高补偿30万元</div>
                  </motion.div>
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.4}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-blue-50 shadow-sm">
                    <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">基金模式</div>
                    <div className="col-span-8 text-gray-800 flex items-center">企业统筹基金</div>
                  </motion.div>
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.5}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-blue-50 shadow-sm">
                    <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">支付方式</div>
                    <div className="col-span-8 text-gray-800 flex items-center">基金池统一支付</div>
                  </motion.div>
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.6}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-blue-50 shadow-sm">
                    <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">结余规则</div>
                    <div className="col-span-8 text-gray-800 flex items-center">结转至下一年度使用</div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      {step >= 7 && (
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="bg-gray-50 p-4 border-t border-gray-200">
           <div className="font-bold text-gray-800 text-sm mb-3">【系统识别结果】</div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
             <div className="bg-white p-2.5 rounded shadow-sm border border-gray-100 flex items-center">
               <span className="text-green-500 mr-2 text-lg">🟢</span>
               <div>
                 <div className="text-[10px] text-gray-400">保障模式</div>
                 <div className="text-xs font-bold text-gray-800 mt-0.5">企业统筹型补充医疗基金</div>
               </div>
             </div>
             <div className="bg-white p-2.5 rounded shadow-sm border border-gray-100 flex items-center">
               <span className="text-green-500 mr-2 text-lg">🟢</span>
               <div>
                 <div className="text-[10px] text-gray-400">管理模式</div>
                 <div className="text-xs font-bold text-gray-800 mt-0.5">公共基金池统一管理</div>
               </div>
             </div>
             <div className="bg-white p-2.5 rounded shadow-sm border border-gray-100 flex items-center">
               <span className="text-green-500 mr-2 text-lg">🟢</span>
               <div>
                 <div className="text-[10px] text-gray-400">赔付规则</div>
                 <div className="text-xs font-bold text-gray-800 mt-0.5">医保报销后补充赔付</div>
               </div>
             </div>
             <div className="bg-white p-2.5 rounded shadow-sm border border-gray-100 flex items-center">
               <span className="text-green-500 mr-2 text-lg">🟢</span>
               <div>
                 <div className="text-[10px] text-gray-400">覆盖范围</div>
                 <div className="text-xs font-bold text-gray-800 mt-0.5">在职+退休+特殊人群</div>
               </div>
             </div>
           </div>
           <div className="bg-orange-50 border border-orange-100 rounded p-3 flex items-start">
             <span className="text-orange-500 mr-2 font-bold mt-0.5">🔥</span>
             <div>
               <div className="text-xs font-bold text-orange-800 mb-1">识别到潜在业务合作机会</div>
               <div className="text-sm font-bold text-gray-800 flex flex-wrap gap-2">
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-orange-50 text-orange-700">补充医疗基金管理</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-orange-50 text-orange-700">基金运营服务</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-orange-50 text-orange-700">健康管理服务</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-orange-50 text-orange-700">家庭医生服务</span>
               </div>
             </div>
           </div>
        </motion.div>
      )}
    </div>
  );
}
`;

if(!content.includes('DocInterpretationCard')) {
  content += '\n' + interpCard;
  fs.writeFileSync('src/components/MessageBubble.tsx', content, 'utf8');
}
