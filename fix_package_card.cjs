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
        { name: "高管年度深度体检", target: "高层员工", price: "3000元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "核心员工", price: "1000元", unit: "人/年" },
        { name: "入职体检套餐（基础）", target: "基层员工", price: "100元", unit: "人/年" }
      ],
      sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案"
    },
    {
      id: "pkg2",
      name: "全场景黑金尊享版",
      isRecommended: true,
      products: [
        { name: "高端私立医院VIP体检", target: "高层员工", price: "6000元", unit: "人/年" },
        { name: "三甲医院专家特需门诊", target: "核心员工", price: "2000元", unit: "人/年" },
        { name: "家属共享健康档案及问诊", target: "基层员工", price: "200元", unit: "户/年" }
      ],
      sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案"
    },
    {
      id: "pkg3",
      name: "高管特权定制版",
      products: [
        { name: "海外重疾就医协助及随诊", target: "高层员工", price: "25000元", unit: "人/年" },
        { name: "专属私人健康管家（7x24）", target: "核心员工", price: "12000元", unit: "人/年" },
        { name: "家族基因筛查及抗衰方案", target: "基层员工", price: "8800元", unit: "人/次" }
      ],
      sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案"
    }
  ];

  let packages = data?.packages && data.packages.length > 0 ? data.packages : defaultPackages;
  
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

  const getIcon = (id: string, recommended: boolean) => {
    if (recommended) return <Crown className="w-5 h-5 text-orange-500 mr-2" strokeWidth={2} />;
    if (id === "pkg1") return <ShieldCheck className="w-5 h-5 text-orange-400 mr-2" strokeWidth={2} />;
    if (id === "pkg3") return <FileEdit className="w-5 h-5 text-orange-400 mr-2" strokeWidth={2} />;
    return <Layers className="w-5 h-5 text-orange-400 mr-2" strokeWidth={2} />;
  };

  return (
    <div className="mt-2 w-full max-w-4xl bg-[#FAFAFA] p-4 rounded-xl">
      <div className="flex flex-col gap-4">
        {packages.map((pkg: any) => {
          const isSelected = selectedId === pkg.id;
          return (
            <div 
              key={pkg.id} 
              onClick={() => { if(!submitted) setSelectedId(pkg.id) }}
              className={\`relative bg-white rounded-lg border-2 \${isSelected ? 'border-orange-400 shadow-sm' : 'border-transparent hover:border-orange-200'} transition-all duration-200 cursor-pointer overflow-hidden\`}
            >
              {pkg.isRecommended && (
                <div className="absolute top-0 left-0">
                  <div className="bg-[#E68A3D] text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10 flex items-center shadow-sm">
                    推荐
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center px-6 pt-5 pb-3">
                <div className="flex items-center">
                  {getIcon(pkg.id, pkg.isRecommended)}
                  <h4 className="font-bold text-[16px] text-gray-800">{pkg.name}</h4>
                </div>
                <div className={\`w-4 h-4 rounded-sm border \${isSelected ? 'bg-orange-500 border-orange-500' : 'border-gray-300'} flex items-center justify-center transition-colors\`}>
                  {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
                </div>
              </div>

              <div className="px-6 pb-2">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="text-gray-500 border-b border-gray-100">
                      <th className="py-2 font-medium w-[25%] text-left">产品名称</th>
                      <th className="py-2 font-medium w-[20%] text-center">适用人群</th>
                      <th className="py-2 font-medium w-[15%] text-center">单价</th>
                      <th className="py-2 font-medium w-[15%] text-center">计价方式</th>
                      <th className="py-2 font-medium w-[25%] text-center">权益</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pkg.products.map((prod: any, idx: number) => {
                      const key = \`\${pkg.id}-\${idx}\`;
                      const isExpanded = expandedFeatures[key];
                      return (
                        <React.Fragment key={idx}>
                          <tr className="text-gray-700 hover:bg-gray-50/50">
                            <td className="py-3 text-left">{prod.name}</td>
                            <td className="py-3 text-center text-gray-600">{prod.target}</td>
                            <td className="py-3 text-center">{prod.price}</td>
                            <td className="py-3 text-center text-gray-500">{prod.unit}</td>
                            <td className="py-3 text-center">
                              {prod.featuresDetail && (
                                <button 
                                  onClick={(e) => toggleFeatures(pkg.id, idx, e)}
                                  className="text-orange-400 hover:text-orange-500 flex items-center justify-center w-full transition-colors"
                                >
                                  {isExpanded ? "收起" : "展开"}
                                  {isExpanded ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                                </button>
                              )}
                            </td>
                          </tr>
                          {isExpanded && prod.featuresDetail && (
                            <tr className="bg-orange-50/30">
                              <td colSpan={5} className="py-3 px-4">
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

              {pkg.sellingPoint && (
                <div className="px-6 pb-5 pt-1">
                  <div className="bg-[#FFF6ED] rounded px-3 py-2 flex items-start">
                    <span className="bg-[#E68A3D] text-white text-[11px] px-2.5 py-0.5 rounded-full mr-2 whitespace-nowrap shadow-sm">一句话卖点</span>
                    <span className="text-[#8c6b5d] text-[12px] leading-tight flex items-center pt-0.5">
                      <span className="mr-1.5 opacity-60 font-bold">•</span> {pkg.sellingPoint}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {!submitted && (
        <div className="flex items-center mt-5 px-2">
          <button
            onClick={handleRecommendAgain}
            className="text-gray-500 text-[14px] font-medium whitespace-nowrap hover:text-gray-700 underline underline-offset-4 decoration-gray-300 transition-colors"
          >
            不满意，换一换
          </button>
          <button
            disabled={!selectedId}
            onClick={handleGenerate}
            className={\`flex-1 ml-6 py-3.5 rounded-lg font-bold text-[15px] transition-all duration-200 shadow-sm \${selectedId ? 'bg-[#E68A3D] text-white hover:bg-[#D97D33] hover:shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}\`}
          >
            生成标品方案PPT
          </button>
        </div>
      )}
    </div>
  );
}
`;

code = code.substring(0, startIdx) + newPackageCardStr + code.substring(endIdx);
fs.writeFileSync('src/components/MessageBubble.tsx', code);
console.log("PackageOptionCard updated successfully.");
