const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const targetStr = `  const defaultPackages = [
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
  ];`;

const replacement = `  const defaultPackages = [
    {
      id: "pkg1",
      name: "基础健康保障版",
      products: [
        { name: "入职体检套餐（基础）", target: "基层员工", price: "150元", unit: "人/年" },
        { name: "公立医院门诊绿通", target: "全体员工", price: "300元", unit: "人/年" },
        { name: "在线图文问诊服务", target: "全体员工", price: "50元", unit: "人/年" }
      ],
      sellingPoint: "覆盖全员基础健康需求，低成本实现企业健康福利从无到有。"
    },
    {
      id: "pkg2",
      name: "全场景黑金尊享版",
      isRecommended: true,
      products: [
        { name: "高管年度深度体检", target: "高层员工", price: "3,000元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
        { name: "家属共享健康档案", target: "全体员工", price: "100元", unit: "户/年" }
      ],
      sellingPoint: "分层定制，精准满足不同层级员工健康痛点，性价比最高的主力推荐方案。"
    },
    {
      id: "pkg3",
      name: "高管特权定制版",
      products: [
        { name: "高端私立医院VIP体检", target: "高层员工", price: "8,000元", unit: "人/年" },
        { name: "海外重疾就医协助", target: "核心高管", price: "2,500元", unit: "人/年" },
        { name: "专属私人健康管家", target: "高层员工", price: "1,200元", unit: "人/年" }
      ],
      sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级健康管理服务。"
    }
  ];`;

code = code.replace(targetStr, replacement);

const targetFeaturesStr = `                {pkg.features && pkg.features.length > 0 && (
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
                )}`;

const replaceFeaturesStr = `                {pkg.sellingPoint && (
                  <div className="px-5 py-4 bg-orange-50/50 border-t border-gray-100 rounded-b-lg">
                    <div className="flex items-start">
                      <div className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mr-2 mt-0.5 whitespace-nowrap">一句话卖点</div>
                      <p className="text-[13px] text-gray-700 leading-snug font-medium">
                        {pkg.sellingPoint}
                      </p>
                    </div>
                  </div>
                )}`;

code = code.replace(targetFeaturesStr, replaceFeaturesStr);

fs.writeFileSync('src/components/MessageBubble.tsx', code);
console.log("Updated MessageBubble features -> sellingPoint");
