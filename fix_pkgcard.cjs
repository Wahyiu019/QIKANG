const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const targetStr = `function PackageOptionCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {`;
const endIndex = code.indexOf(`function SupplementaryInfoFormCard`, code.indexOf(targetStr));
const newPkgCardCode = `function PackageOptionCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {
  const [selectedId, setSelectedId] = React.useState<string | null>("pkg2"); // Default to recommended
  const [submitted, setSubmitted] = React.useState(false);

  const defaultPackages = [
    {
      id: "pkg1",
      name: "基础健康保障版",
      products: [
        { name: "高管年度深度体检", target: "高层员工", price: "3,000元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
        { name: "基层健康档案系统", target: "基层员工", price: "100元", unit: "人/年" }
      ],
      features: [
        "覆盖全院的基础健康档案建立",
        "7*24小时在线全科医生问诊",
        "三甲医院重疾绿色通道协助服务",
        "基础心理健康测评与干预"
      ]
    },
    {
      id: "pkg2",
      name: "全场景黑金尊享版",
      isRecommended: true,
      products: [
        { name: "高管年度深度体检", target: "高层员工", price: "3000元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "核心员工", price: "1000元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "基层员工", price: "100元", unit: "人/年" }
      ],
      features: [
        "覆盖全院的基础健康档案建立",
        "7*24小时在线全科医生问诊",
        "三甲医院重疾绿色通道协助服务",
        "基础心理健康测评与干预"
      ]
    },
    {
      id: "pkg3",
      name: "高管特权定制版",
      products: [
        { name: "高管年度深度体检", target: "高层员工", price: "5,000元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "核心员工", price: "1,500元", unit: "人/年" },
        { name: "基层健康档案系统", target: "基层员工", price: "200元", unit: "人/年" }
      ],
      features: [
        "覆盖全院的基础健康档案建立",
        "7*24小时在线全科医生问诊",
        "三甲医院重疾绿色通道协助服务",
        "基础心理健康测评与干预"
      ]
    }
  ];

  const packages = data?.packages && data.packages.length > 0 ? data.packages : defaultPackages;

  const handleGenerate = () => {
    setSubmitted(true);
    if(onSend) onSend("[生成方案] 已选择套餐，请生成PPT");
  };

  const handleRecommendAgain = () => {
    setSubmitted(true);
    if(onSend) onSend("[重新推荐]");
  };

  return (
    <div className="mt-2 w-full max-w-4xl bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 mb-2 p-6 pb-0">
        <Layers className="w-6 h-6 text-orange-500" />
        <h3 className="font-bold text-xl text-gray-900">推荐标品套餐选项</h3>
      </div>
      
      <div className="p-6 pt-2">
        <div className="h-px bg-gray-100 w-full mb-4 mt-2"></div>
        <p className="text-[13px] text-gray-500 mb-4">{submitted ? "您已完成套餐选择：" : "为您匹配了以下标准产品组合，请选择其中之一："}</p>
        <div className="grid grid-cols-1 gap-4 mb-6">
          {packages.map((pkg: any) => {
            const isSelected = selectedId === pkg.id;
            return (
              <div 
                key={pkg.id} 
                onClick={() => { if(!submitted) setSelectedId(pkg.id) }}
                className={\`relative border rounded-lg transition-all duration-200 cursor-pointer flex flex-col \${isSelected ? 'border-orange-500 shadow-sm' : 'border-gray-200 hover:border-orange-300'}\`}
              >
                {pkg.isRecommended && (
                  <div className="absolute top-0 left-0 -mt-3 ml-4">
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded shadow-sm flex items-center">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      推荐
                    </div>
                  </div>
                )}
                
                <div className={\`flex justify-between items-center p-4 \${pkg.isRecommended ? 'bg-orange-50/50' : 'bg-gray-50/50'} border-b border-gray-100 rounded-t-lg\`}>
                  <h4 className={\`font-bold text-[17px] \${pkg.isRecommended ? 'text-orange-800' : 'text-gray-800'}\`}>{pkg.name}</h4>
                  <div className={\`w-5 h-5 rounded flex items-center justify-center border transition-colors \${isSelected ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-gray-300'}\`}>
                    {isSelected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                  </div>
                </div>

                {pkg.products && pkg.products.length > 0 && (
                  <div className="bg-white">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50/50 text-orange-600/80 text-[13px]">
                        <tr>
                          <th className="px-5 py-3 font-bold border-b border-gray-100">产品名称</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-28">适用人群</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-28">单价</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-28">计价方式</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {pkg.products.map((prod: any, idx: number) => (
                          <tr key={idx} className="hover:bg-gray-50/30">
                            <td className="px-5 py-3 text-gray-700 font-medium">{prod.name}</td>
                            <td className="px-5 py-3 text-gray-600 text-[13px]">{prod.target}</td>
                            <td className="px-5 py-3 text-gray-800 font-mono text-[13px]">{prod.price}</td>
                            <td className="px-5 py-3 text-gray-500 text-[13px]">{prod.unit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {pkg.features && pkg.features.length > 0 && (
                  <div className="px-5 py-4 bg-gray-50/30 border-t border-gray-100 rounded-b-lg">
                    <h5 className="text-[13px] font-bold text-gray-800 mb-3 tracking-wide flex items-center">
                      核心产品权益：
                    </h5>
                    <ul className="text-[13px] text-gray-600 space-y-2 list-none grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                      {pkg.features.map((f: string, j: number) => (
                        <li key={j} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGenerate}
            disabled={!selectedId || submitted}
            className={\`flex-1 max-w-[200px] py-3 rounded text-sm transition-colors flex items-center justify-center gap-2 \${submitted ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : selectedId ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-orange-300 text-white cursor-not-allowed'}\`}
          >
            确认选择
          </button>
          <button
            onClick={handleRecommendAgain}
            disabled={submitted}
            className={\`flex-1 max-w-[200px] py-3 rounded text-sm transition-colors flex items-center justify-center gap-2 \${submitted ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}\`}
          >
            重新推荐
          </button>
        </div>
      </div>
    </div>
  )
}
`;

code = code.substring(0, code.indexOf(targetStr)) + newPkgCardCode + code.substring(endIndex);

fs.writeFileSync('src/components/MessageBubble.tsx', code);
console.log("PackageOptionCard rewritten");
