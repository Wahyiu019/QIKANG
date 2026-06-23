const fs = require('fs');

// PART 1: MESSAGE BUBBLE
let mbPath = 'src/components/MessageBubble.tsx';
let mbCode = fs.readFileSync(mbPath, 'utf8');

// 1. Rewrite BasicInfoFormCard and PackageOptionCard to NOT hide content on submit
let newBasicInfoFormCardStr = `function BasicInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {
  const [formData, setFormData] = React.useState({
    industry: "制造行业",
    employeeCount: "未知（请补充）",
    region: "云南省",
  });
  
  React.useEffect(() => {
    if (data?.customerName === "云天化") {
      setFormData({ industry: "化工行业", employeeCount: "13000+ 人", region: "云南省昆明市" });
    }
  }, [data]);

  const [submitted, setSubmitted] = React.useState(false);

  const isComplete = formData.industry && formData.employeeCount && !formData.employeeCount.includes("未知") && formData.region;

  const handleSubmit = () => {
    setSubmitted(true);
    if (onSend) {
      onSend(\`[用户确认] 客户基础信息确认无误\`);
    }
  };

  return (
    <div className="mt-2 w-full max-w-2xl bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
          <Bot className="w-4 h-4 text-orange-600" />
        </div>
        <h3 className="font-bold text-lg text-gray-900 border-l-4 border-orange-500 pl-2">客户基本信息匹配结果</h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm text-gray-500 mb-2">{submitted ? "此信息已确认，如需修改请重新提交" : "已为您匹配以下信息，请确认或修改："}</p>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">行业</label>
          <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-900" disabled={submitted} value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">人员规模</label>
          <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-900" disabled={submitted} placeholder="如：约 8000 人" value={formData.employeeCount} onChange={(e) => setFormData({...formData, employeeCount: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">地域</label>
          <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-900" disabled={submitted} value={formData.region} onChange={(e) => setFormData({...formData, region: e.target.value})} />
        </div>
        <div className="pt-2 text-right">
          <button
            onClick={handleSubmit}
            disabled={!isComplete || submitted}
            className={\`px-6 py-2 rounded-md shadow uppercase tracking-wide text-sm font-bold transition-colors \${submitted ? 'bg-gray-400 text-white cursor-not-allowed' : isComplete ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}\`}>
            {submitted ? "已确认无误" : isComplete ? "信息确认无误" : "补充信息并提交"}
          </button>
        </div>
      </div>
    </div>
  );
}`;

let newPackageOptionCardStr = `function PackageOptionCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [submitted, setSubmitted] = React.useState(false);

  const toggleSelect = (id: string) => {
    if(submitted) return;
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleConfirm = () => {
    setSubmitted(true);
    if(onSend) {
       onSend(\`[已选择套餐] 已确认勾选 \${selectedIds.length} 个标品套餐\`);
    }
  }

  return (
    <div className="mt-2 w-full max-w-3xl bg-white border border-gray-200 rounded-xl p-5 shadow-sm font-sans mx-auto">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        <Layers className="w-5 h-5 text-orange-500" />
        <h3 className="font-bold text-xl text-gray-900">推荐标品套餐选项</h3>
      </div>
      <>
        <p className="text-sm text-gray-600 mb-4">{submitted ? "您已选择以下标品套餐组：" : "为您匹配了以下标准产品组合，您可以任意勾选需要的方案作为营销素材："}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {data?.packages?.map((pkg: any) => {
            const isSelected = selectedIds.includes(pkg.id);
            return (
              <div 
                key={pkg.id} 
                onClick={() => toggleSelect(pkg.id)}
                className={\`relative border rounded-lg p-4 transition-all duration-200 \${submitted ? (isSelected ? 'border-orange-300 bg-orange-50 opacity-80' : 'border-gray-200 bg-gray-50 opacity-50') : 'cursor-pointer'} \${isSelected && !submitted ? 'border-orange-500 bg-orange-50 ring-1 ring-orange-500 shadow-md transform -translate-y-1' : ''} \${!isSelected && !submitted ? 'border-gray-200 bg-gray-50 hover:border-orange-300 hover:shadow-sm' : ''}\`}
              >
                <div className="absolute top-3 right-3">
                  <div className={\`w-5 h-5 rounded flex items-center justify-center \${isSelected ? (submitted ? 'bg-orange-400' : 'bg-orange-500') : 'bg-white border border-gray-300'}\`}>
                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                </div>
                <h4 className={\`font-bold text-base mb-2 pr-6 \${isSelected ? 'text-orange-900' : 'text-gray-800'}\`}>{pkg.name}</h4>
                <div className="text-xs text-orange-600 font-bold mb-3 px-2 py-1 bg-orange-100/50 rounded inline-block">{pkg.price}</div>
                <ul className="text-xs text-gray-600 space-y-1.5 list-none">
                  {pkg.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-start">
                      <span className={\`mr-1.5 \${isSelected ? 'text-orange-500' : 'text-gray-400'}\`}>•</span> <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="flex justify-end pb-2 pt-2 border-t border-gray-50">
          <button
            onClick={handleConfirm}
            disabled={selectedIds.length === 0 || submitted}
            className={\`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-colors shadow-sm \${submitted ? 'bg-gray-400 text-white cursor-not-allowed' : selectedIds.length > 0 ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}\`}
          >
            {submitted ? \`已确认选择 (\${selectedIds.length})\` : \`确认选择 (\${selectedIds.length})\`}
          </button>
        </div>
      </>
    </div>
  )
}`;

let newSuppInfoFormCardStr = `
function SupplementaryInfoFormCard({ onSend }: { onSend?: (text: string) => void }) {
  const [formData, setFormData] = React.useState({
    painPoints: "",
    highLevelCount: "",
    coreCount: "",
    baseCount: "",
    retireeRatio: "",
    activeRatio: "",
    avgAge: "",
    maxAgeGroup: "",
    maleCount: "",
    femaleCount: "",
    indoorCount: "",
    outdoorCount: "",
    notes: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleIgnore = () => {
    setSubmitted(true);
    if(onSend) onSend("[忽略补充信息] 直接生成标品营销方案大纲和PPT");
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if(onSend) onSend("[已提交补充信息] 根据补充信息重新推荐标品套餐");
  }

  return (
    <div className="mt-2 w-full max-w-3xl bg-white border border-gray-200 rounded-xl p-6 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
          <FileText className="w-4 h-4 text-orange-600" />
        </div>
        <div>
           <h3 className="font-bold text-lg text-gray-900">补充信息卡片</h3>
           <p className="text-xs text-gray-500">为了给您推荐更精准、更符合客户需求的套餐选项，可选择补充以下信息</p>
        </div>
      </div>

      <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
         {/* 既往健康痛点 */}
         <div>
            <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">既往健康痛点</h4>
            <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-orange-500 focus:border-orange-500"
                    value={formData.painPoints} onChange={e=>setFormData({...formData, painPoints: e.target.value})} disabled={submitted}>
               <option value="">请选择（如未明确可暂不选）</option>
               <option value="常见心血管疾病">常见心血管疾病</option>
               <option value="颈椎/腰椎等职业病">颈椎/腰椎等职业病</option>
               <option value="心理压力大/焦虑">心理压力大/焦虑</option>
               <option value="癌症发病率偏高">癌症发病率偏高</option>
            </select>
         </div>

         {/* 组织结构 */}
         <div>
            <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">组织结构</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
               <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">高层员工人数</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-orange-500" disabled={submitted}
                         value={formData.highLevelCount} onChange={e=>setFormData({...formData, highLevelCount:e.target.value})} />
               </div>
               <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">核心员工人数</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-orange-500" disabled={submitted}
                         value={formData.coreCount} onChange={e=>setFormData({...formData, coreCount:e.target.value})} />
               </div>
               <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">基层员工人数</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-orange-500" disabled={submitted}
                         value={formData.baseCount} onChange={e=>setFormData({...formData, baseCount:e.target.value})} />
               </div>
            </div>
         </div>

         {/* 人员结构 */}
         <div>
            <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">人员结构</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
               <div>
                  <label className="block text-[11px] font-medium text-gray-600 mb-1">离退休人员占比</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-2 text-sm focus:ring-orange-500" disabled={submitted}
                         value={formData.retireeRatio} onChange={e=>setFormData({...formData, retireeRatio:e.target.value})} />
               </div>
               <div>
                  <label className="block text-[11px] font-medium text-gray-600 mb-1">在职人员占比</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-2 text-sm focus:ring-orange-500" disabled={submitted}
                         value={formData.activeRatio} onChange={e=>setFormData({...formData, activeRatio:e.target.value})} />
               </div>
               <div>
                  <label className="block text-[11px] font-medium text-gray-600 mb-1">在职人员平均年龄</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-2 text-sm focus:ring-orange-500" disabled={submitted}
                         value={formData.avgAge} onChange={e=>setFormData({...formData, avgAge:e.target.value})} />
               </div>
               <div>
                  <label className="block text-[11px] font-medium text-gray-600 mb-1">占最高比例年龄段</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-2 text-sm focus:ring-orange-500" disabled={submitted}
                         value={formData.maxAgeGroup} onChange={e=>setFormData({...formData, maxAgeGroup:e.target.value})} />
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 性别结构 */}
            <div>
               <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">性别结构</h4>
               <div className="grid grid-cols-2 gap-3">
                  <div>
                     <label className="block text-xs font-medium text-gray-600 mb-1">男性人数</label>
                     <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-orange-500" disabled={submitted}
                            value={formData.maleCount} onChange={e=>setFormData({...formData, maleCount:e.target.value})} />
                  </div>
                  <div>
                     <label className="block text-xs font-medium text-gray-600 mb-1">女性人数</label>
                     <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-orange-500" disabled={submitted}
                            value={formData.femaleCount} onChange={e=>setFormData({...formData, femaleCount:e.target.value})} />
                  </div>
               </div>
            </div>

            {/* 工种结构 */}
            <div>
               <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">工种结构</h4>
               <div className="grid grid-cols-2 gap-3">
                  <div>
                     <label className="block text-xs font-medium text-gray-600 mb-1">内勤人数</label>
                     <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-orange-500" disabled={submitted}
                            value={formData.indoorCount} onChange={e=>setFormData({...formData, indoorCount:e.target.value})} />
                  </div>
                  <div>
                     <label className="block text-xs font-medium text-gray-600 mb-1">外勤人数</label>
                     <input type="text" className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-orange-500" disabled={submitted}
                            value={formData.outdoorCount} onChange={e=>setFormData({...formData, outdoorCount:e.target.value})} />
                  </div>
               </div>
            </div>
         </div>

         {/* 补充说明 */}
         <div>
            <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">补充说明</h4>
            <textarea className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-orange-500 min-h-[80px]" disabled={submitted}
                      value={formData.notes} onChange={e=>setFormData({...formData, notes:e.target.value})} placeholder="其他需要补充的信息..."></textarea>
         </div>
      </div>

      <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100 mt-5">
         <button className={\`px-5 py-2 rounded-md font-medium text-sm transition-colors \${submitted ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}\`} onClick={handleIgnore} disabled={submitted}>忽略</button>
         <button className={\`px-6 py-2 rounded-md font-bold text-sm tracking-wide transition-colors \${submitted ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}\`} onClick={handleSubmit} disabled={submitted}>{submitted ? "已提交信息" : "提交"}</button>
      </div>

    </div>
  )
}
`;

// Replace `BasicInfoFormCard`
mbCode = mbCode.replace(/function BasicInfoFormCard[\s\S]*?(?=function PackageOptionCard)/, newBasicInfoFormCardStr + '\n\n');
mbCode = mbCode.replace(/function PackageOptionCard[\s\S]*?(?=export function QuoteAuth)/, newPackageOptionCardStr + '\n\n' + newSuppInfoFormCardStr + '\n\n');

if(!mbCode.includes('message.type === "supplementary_info_form_card"')) {
   let insertRenderStr = `        {isBot && message.type === "supplementary_info_form_card" && (
          <SupplementaryInfoFormCard onSend={onAction} />
        )}
`;
   mbCode = mbCode.replace('{isBot && message.type === "package_option_card" && (', insertRenderStr + '{isBot && message.type === "package_option_card" && (');
}

fs.writeFileSync(mbPath, mbCode, 'utf8');

// PART 2: CHAT WINDOW
let cwPath = 'src/components/ChatWindow.tsx';
let cwCode = fs.readFileSync(cwPath, 'utf8');

let cwLogicToAdd = `    } else if (text.startsWith("[已选择套餐]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      
      const reasoningMsg: Message = { id: Date.now().toString(), sender: "bot", type: "reasoning", content: "分析客户需求，准备补充信息卡片...", timestamp: new Date() };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev, 
          {
            id: Date.now().toString() + "_sup_form",
            sender: "bot",
            type: "supplementary_info_form_card",
            content: "为了给您推荐更精准、更符合客户需求的套餐选项，请补充以下信息（可选）：",
            timestamp: new Date()
          }
        ]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (text.startsWith("[忽略补充信息]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, {
            id: Date.now().toString() + "_bot",
            sender: "bot",
            type: "text",
            content: "好的，是否直接为您生成标品营销方案大纲和PPT？",
            timestamp: new Date()
        }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (text.startsWith("[已提交补充信息]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);

      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = { id: reasoningMsgId, sender: "bot", type: "reasoning", content: "结合补充信息，正在为您精准匹配套餐选项...", timestamp: new Date() };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev, 
          {
            id: Date.now().toString() + "_pkg2",
            sender: "bot",
            type: "package_option_card",
            content: "结合您的补充信息，向您推荐以下更精准的套餐选项：",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "p1_precise",
                  name: "基础健康保障版（适配当前需求）",
                  price: "年度总预算估算：55万元",
                  features: [
                    "覆盖全员的基础健康档案建立",
                    "7×24小时在线全科医生问诊",
                    "针对性常见职业病（颈椎/腰椎）理疗专项"
                  ]
                },
                {
                  id: "p2_precise",
                  name: "标准全面升级版（强烈推荐）",
                  price: "年度总预算估算：85万元",
                  features: [
                    "包含基础版的所有服务",
                    "核心人员年度深度体检套餐及解读",
                    "定制化驻场理疗服务（针对外勤及内勤办公痛点）",
                    "高管绿色就医通道及多学科会诊保障"
                  ]
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2000);
      return;
    `;

let insertionPointStr = `} else if (text.startsWith("[用户确认]")) {`;
cwCode = cwCode.replace(insertionPointStr, cwLogicToAdd + '\n    ' + insertionPointStr);

fs.writeFileSync(cwPath, cwCode, 'utf8');

