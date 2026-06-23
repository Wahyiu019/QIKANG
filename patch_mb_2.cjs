const fs = require('fs');

// PART 2: MESSAGE BUBBLE
let mbPath = 'src/components/MessageBubble.tsx';
let mbCode = fs.readFileSync(mbPath, 'utf8');

// replace old basicInfoCardForm definition (it is at the bottom)
const regexBasicInfoCard = /function BasicInfoFormCard[\s\S]*?\}\n$/;

const newBasicInfoCard = `function BasicInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {
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
      
      {!submitted ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-2">已为您匹配以下信息，请确认或修改：</p>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">行业</label>
            <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-900" value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">人员规模</label>
            <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-900" placeholder="如：约 8000 人" value={formData.employeeCount} onChange={(e) => setFormData({...formData, employeeCount: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">地域</label>
            <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-900" value={formData.region} onChange={(e) => setFormData({...formData, region: e.target.value})} />
          </div>
          <div className="pt-2 text-right">
            <button
              onClick={handleSubmit}
              disabled={!isComplete}
              className={\`px-6 py-2 rounded-md shadow uppercase tracking-wide text-sm font-bold transition-colors \${isComplete ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}\`}>
              {isComplete ? "信息确认无误" : "补充信息并提交"}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="mx-auto flex items-center justify-center h-10 w-10 rounded-full bg-green-100 mb-3">
            <Check className="h-5 w-5 text-green-600" />
          </div>
          <p className="text-sm text-gray-600">已确认客户信息，套餐选项生成中...</p>
        </div>
      )}
    </div>
  );
}

function PackageOptionCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [submitted, setSubmitted] = React.useState(false);

  const toggleSelect = (id: string) => {
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
      {!submitted ? (
        <>
          <p className="text-sm text-gray-600 mb-4">为您匹配了以下标准产品组合，您可以任意勾选需要的方案作为营销素材：</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {data?.packages?.map((pkg: any) => {
              const isSelected = selectedIds.includes(pkg.id);
              return (
                <div 
                  key={pkg.id} 
                  onClick={() => toggleSelect(pkg.id)}
                  className={\`relative cursor-pointer border rounded-lg p-4 transition-all duration-200 \${isSelected ? 'border-orange-500 bg-orange-50 ring-1 ring-orange-500 shadow-md transform -translate-y-1' : 'border-gray-200 bg-gray-50 hover:border-orange-300 hover:shadow-sm'}\`}
                >
                  <div className="absolute top-3 right-3">
                    <div className={\`w-5 h-5 rounded flex items-center justify-center \${isSelected ? 'bg-orange-500' : 'bg-white border border-gray-300'}\`}>
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
              disabled={selectedIds.length === 0}
              className={\`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-colors shadow-sm \${selectedIds.length > 0 ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}\`}
            >
              确认选择 ({selectedIds.length})
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-50 mb-3">
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">已完成选择</h3>
          <p className="text-sm text-gray-500">正在为您生成最终的标品营销方案...</p>
        </div>
      )}
    </div>
  )
}
`;

mbCode = mbCode.replace(regexBasicInfoCard, newBasicInfoCard);


const regexPackageRenderer = /\{isBot && message\.type === "package_option_card" && \([\s\S]*?推荐此套餐方案[\s\S]*?<\/button>\n\s*<\/div>\n\s*\)\)}\n\s*<\/div>\n\s*<\/div>\n\s*\)\}/g;

const newPackageRenderer = `{isBot && message.type === "package_option_card" && (
          <PackageOptionCard data={message.data} onSend={onAction} />
        )}`;

mbCode = mbCode.replace(regexPackageRenderer, newPackageRenderer);

// And we must add `data={message.data}` to BasicInfoFormCard rendering
const regexBasicRenderer = /<BasicInfoFormCard onSend=\{onAction\} \/>/g;
mbCode = mbCode.replace(regexBasicRenderer, `<BasicInfoFormCard onSend={onAction} data={message.data} />`);

fs.writeFileSync(mbPath, mbCode, 'utf8');

