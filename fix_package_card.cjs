const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const startIdx = code.indexOf('function PackageOptionCard');
const endIdx = code.indexOf('function PPTCard', startIdx);
if (startIdx === -1 || endIdx === -1) {
  console.log("Could not find PackageOptionCard");
  process.exit(1);
}

const newPackageCardStr = `function PackageOptionCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [expandedFeatures, setExpandedFeatures] = React.useState<Record<string, boolean>>({});

  const toggleFeatures = (pkgId: string, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const key = \`\${pkgId}-\${idx}\`;
    setExpandedFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const featureDetailsMap: Record<string, string> = {
    "高管年度深度体检": "平安家医图文问诊*不限次\\n门诊预约协助服务*1次\\n专人1V1陪诊服务*1次\\n名医视频问诊*1次\\n健康护航大礼包*1次\\n购药优惠券*12次\\n福安好物专区*不限次",
    "核心骨干绿色就医": "门诊预约协助 (T+4): 31省321市\\n普通陪诊: 29省234市\\n全国住院安排协助: 31省322市",
    "入职体检套餐（基础）": "专科医生图文问诊5次\\n幽门螺旋杆菌检测1份\\n肺结节居家检测服务1份",
    "高端私立医院VIP体检": "家庭医生图文问诊-副高及以上(年度会员)\\n家庭医生音视频咨询30分钟\\n专科医生实时音视频咨询2次\\n名医三方音视频咨询1年无限次\\n名医门诊预约协助3次\\n名医住院安排协助1次\\n健康定制好礼1次\\n健康送到家, 每季度一次\\n专属小秘书7*12线上服务",
    "三甲医院专家特需门诊": "名医门诊/住院安排: 30省90+市\\n家庭医生音视频咨询(主治级)*30分钟\\n门诊预约协助(T+7)*2次\\n检查安排协助(六城)*1次\\n住院专属护工服务(普通护工)*3次\\n全国住院安排协助*1次\\n基础照护上门服务*3次\\n普通陪诊人员上门接送(双程)*1次",
    "家属共享健康档案及问诊": "门诊预约协助 (T+7)*2次\\n普通陪诊*1次\\n家庭医生图文问诊-主治及以下 (年度会员)\\n企业健康室 (升级版)\\n全额抵扣券-小药箱\\n心理健康测评 不限次\\n心理图文咨询 2次\\n心理电话咨询 1次",
    "海外重疾就医协助及随诊": "家庭医生图文问诊-主治及以下(年度会员)\\n企业健康室 (基础版)\\n门诊预约协助(T+4)*3次\\n普通陪诊*3次\\n智享洁牙服务*1次\\n药品券(满100减50)*6张\\n就医服务等待期30天",
    "专属私人健康管家（7x24）": "门诊预约协助(T+4): 31省321市\\n普通陪诊: 29省234市\\n智享洁牙: 31省300+市\\n心理健康测评 不限次\\n心理图文咨询 2次\\n心理电话咨询 1次\\n保健医生+心理图文咨询*20次\\n心理电话咨询(外部)*3次",
    "家族基因筛查及抗衰方案": "AED急救技能培训*8小时\\nAED专题讲座*2小时\\n平安家医图文问诊*不限次\\n门诊预约协助服务*1次\\n住院协助服务*1次\\n名医视频问诊*3次\\n专人1V1陪诊服务*3次"
  };

  const defaultPackages = [
    {
      id: "pkg1",
      name: "基础健康保障版",
      products: [
        { name: "高管年度深度体检", target: "高层员工", price: "3,000元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
        { name: "入职体检套餐（基础）", target: "基层员工", price: "150元", unit: "人/年" }
      ],
      sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
    },
    {
      id: "pkg2",
      name: "全场景黑金尊享版",
      isRecommended: true,
      products: [
        { name: "高端私立医院VIP体检", target: "高层员工", price: "6,000元", unit: "人/年" },
        { name: "三甲医院专家特需门诊", target: "核心员工", price: "2,000元", unit: "人/年" },
        { name: "家属共享健康档案及问诊", target: "基层员工", price: "200元", unit: "户/年" }
      ],
      sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
    },
    {
      id: "pkg3",
      name: "高管特权定制版",
      products: [
        { name: "海外重疾就医协助及随诊", target: "高层员工", price: "25,000元", unit: "人/年" },
        { name: "专属私人健康管家（7x24）", target: "核心员工", price: "12,000元", unit: "人/年" },
        { name: "家族基因筛查及抗衰方案", target: "基层员工", price: "8,800元", unit: "人/次" }
      ],
      sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
    }
  ];

  let packages = data?.packages && data.packages.length > 0 ? data.packages : defaultPackages;
  
  // Inject features detail
  packages = packages.map((pkg: any) => ({
    ...pkg,
    products: pkg.products?.map((prod: any) => ({
      ...prod,
      featuresDetail: prod.featuresDetail || featureDetailsMap[prod.name]
    }))
  }));

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
                  <div className="absolute top-0 left-0 -mt-3 ml-4 z-10">
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
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-1/4">产品名称</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-1/6">适用人群</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-1/6">单价</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-1/6">计价方式</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-1/6">权益</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {pkg.products.map((prod: any, idx: number) => {
                          const key = \`\${pkg.id}-\${idx}\`;
                          const isExpanded = expandedFeatures[key];
                          return (
                            <React.Fragment key={idx}>
                              <tr className="hover:bg-gray-50/30">
                                <td className="px-5 py-3 text-gray-700 font-medium">{prod.name}</td>
                                <td className="px-5 py-3 text-gray-600 text-[13px] whitespace-nowrap">{prod.target}</td>
                                <td className="px-5 py-3 text-gray-800 font-mono text-[13px] whitespace-nowrap">{prod.price}</td>
                                <td className="px-5 py-3 text-gray-500 text-[13px] whitespace-nowrap">{prod.unit}</td>
                                <td className="px-5 py-3">
                                  {prod.featuresDetail && (
                                    <button 
                                      onClick={(e) => toggleFeatures(pkg.id, idx, e)}
                                      className="text-orange-500 hover:text-orange-600 flex items-center text-[13px]"
                                    >
                                      {isExpanded ? "收起" : "展开"}
                                      {isExpanded ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                                    </button>
                                  )}
                                </td>
                              </tr>
                              {isExpanded && prod.featuresDetail && (
                                <tr className="bg-orange-50/30">
                                  <td colSpan={5} className="px-5 py-3">
                                    <div className="text-gray-600 text-[12px] leading-relaxed whitespace-pre-wrap pl-3 border-l-2 border-orange-300 ml-2 py-1">
                                      {prod.featuresDetail}
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {pkg.sellingPoint && (
                  <div className="px-5 py-4 bg-orange-50/50 border-t border-gray-100 rounded-b-lg">
                    <div className="flex items-start">
                      <div className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mr-2 mt-0.5 whitespace-nowrap">一句话卖点</div>
                      <p className="text-[13px] text-gray-700 leading-snug font-medium">
                        {pkg.sellingPoint}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {!submitted && (
          <div className="flex space-x-4 mt-6">
            <button
              disabled={!selectedId}
              onClick={handleGenerate}
              className={\`flex-1 py-3 px-4 rounded-xl font-bold flex items-center justify-center transition-all duration-200 shadow-sm \${selectedId ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-md' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}\`}
            >
              <Presentation className="w-5 h-5 mr-2" />
              生成PPT标品方案
            </button>
            <button
              onClick={handleRecommendAgain}
              className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 flex items-center shadow-sm"
            >
              不满意，换一换
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
`;

code = code.substring(0, startIdx) + newPackageCardStr + code.substring(endIdx);
fs.writeFileSync('src/components/MessageBubble.tsx', code);
console.log("PackageOptionCard updated successfully.");
