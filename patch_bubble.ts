import fs from 'fs';

const file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /function SupplementaryInfoFormCard\(\{ onSend \}: \{ onSend\?: \(text: string\) => void \}\) \{([\s\S]*?)    <\/div>\n  \)\n\}/g;

const replacement = `function SupplementaryInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {
  const [formData, setFormData] = React.useState({
    painPoints: [] as string[],
    orgStructure: \`高层员工\${data?.highLevelCount ?? 'XX'}人，核心员工\${data?.coreCount ?? 'XX'}人，基层员工\${data?.baseCount ?? 'XX'}人\`,
    personnelStructure: \`离退休人员占比\${data?.retireeRatio ?? 'XX'}；在职人员占比\${data?.activeRatio ?? 'XX'}，平均年龄\${data?.avgAge ?? 'XX'}岁，占最高比例年龄段\${data?.maxAgeGroup ?? 'XX'}岁\`,
    genderStructure: \`男性\${data?.maleCount ?? 'XX'}人，女性\${data?.femaleCount ?? 'XX'}人\`,
    jobStructure: \`内勤\${data?.indoorCount ?? 'XX'}人，外勤\${data?.outdoorCount ?? 'XX'}人\`,
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

  const togglePainPoint = (val: string) => {
    if (submitted) return;
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(val) ? prev.painPoints.filter(p => p !== val) : [...prev.painPoints, val]
    }));
  };

  const painPointOptions = ["常见心血管疾病", "颈椎/腰椎等职业病", "心理压力大/焦虑", "癌症发病率偏高"];

  return (
    <div className="mt-2 w-full max-w-3xl bg-white border border-orange-200 rounded-xl p-6 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-orange-100">
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
            <div className="flex flex-wrap gap-3">
              {painPointOptions.map(option => (
                <label key={option} className={\`flex items-center px-3 py-2 border rounded-md transition-colors \${submitted ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-orange-50'} \${formData.painPoints.includes(option) ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-300 text-gray-700'}\`}>
                  <input type="checkbox" className="hidden" checked={formData.painPoints.includes(option)} onChange={() => togglePainPoint(option)} disabled={submitted} />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
         </div>

         {/* 组织结构 */}
         <div>
            <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">组织结构</h4>
            <textarea className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-orange-500 min-h-[60px]" disabled={submitted}
                      value={formData.orgStructure} onChange={e=>setFormData({...formData, orgStructure:e.target.value})}></textarea>
         </div>

         {/* 人员结构 */}
         <div>
            <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">人员结构</h4>
            <textarea className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-orange-500 min-h-[60px]" disabled={submitted}
                      value={formData.personnelStructure} onChange={e=>setFormData({...formData, personnelStructure:e.target.value})}></textarea>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 性别结构 */}
            <div>
               <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">性别结构</h4>
               <textarea className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-orange-500 min-h-[60px]" disabled={submitted}
                         value={formData.genderStructure} onChange={e=>setFormData({...formData, genderStructure:e.target.value})}></textarea>
            </div>

            {/* 工种结构 */}
            <div>
               <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-2">工种结构</h4>
               <textarea className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-orange-500 min-h-[60px]" disabled={submitted}
                         value={formData.jobStructure} onChange={e=>setFormData({...formData, jobStructure:e.target.value})}></textarea>
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
         <button className={\`px-6 py-2 rounded-md font-bold text-sm tracking-wide transition-colors \${submitted ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}\`} onClick={handleSubmit} disabled={submitted}>{\`\${submitted ? "已提交信息" : "提交"}\`}</button>
      </div>

    </div>
  )
}`;

const newContent = content.replace(regex, replacement);
if (newContent !== content) {
  fs.writeFileSync(file, newContent);
  console.log("Patched MessageBubble.tsx gracefully.");
} else {
  console.log("Regex didn't match!");
}
