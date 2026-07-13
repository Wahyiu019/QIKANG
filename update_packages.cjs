const fs = require('fs');

let chatWindowCode = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');
let messageBubbleCode = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

// For MessageBubble.tsx, rewrite the defaultPackages array
const msgBubbleTarget = `  const defaultPackages = [
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

const newDefaultPackages = `  const defaultPackages = [
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
        { name: "高端私立医院VIP体检", target: "高管及核心层", price: "6,000元", unit: "人/年" },
        { name: "三甲医院专家特需门诊", target: "中层管理人员", price: "2,000元", unit: "人/年" },
        { name: "家属共享健康档案及问诊", target: "全体员工及家属", price: "200元", unit: "户/年" }
      ],
      sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
    },
    {
      id: "pkg3",
      name: "高管特权定制版",
      products: [
        { name: "海外重疾就医协助及随诊", target: "核心高管", price: "25,000元", unit: "人/年" },
        { name: "专属私人健康管家（7x24）", target: "高层决策人员", price: "12,000元", unit: "人/年" },
        { name: "家族基因筛查及抗衰方案", target: "高层及直系亲属", price: "8,800元", unit: "人/次" }
      ],
      sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
    }
  ];`;

if (messageBubbleCode.includes(msgBubbleTarget)) {
    messageBubbleCode = messageBubbleCode.replace(msgBubbleTarget, newDefaultPackages);
    fs.writeFileSync('src/components/MessageBubble.tsx', messageBubbleCode);
    console.log("MessageBubble packages updated.");
} else {
    console.log("Could not find exact msgBubbleTarget in MessageBubble.tsx");
}

// In ChatWindow.tsx, replace the dynamic packages generation
// First, find and replace the regex pattern
const regexPkgNew = /packages:\s*\[[\s\S]*?\]\s*\}(?=\s*\}\s*\]\);\s*setIsTyping\(false\);)/g;

let cwCount = 0;
chatWindowCode = chatWindowCode.replace(regexPkgNew, (match) => {
    cwCount++;
    return `packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高管及核心层", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年" },
                    { name: "三甲医院专家特需门诊", target: "中层管理人员", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "全体员工及家属", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "核心高管", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "高层决策人员", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "高层及直系亲属", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }`;
});

// Remove any lingering "（版本" from static packages if they exist
chatWindowCode = chatWindowCode.replace(/（版本" \+ \(pkgRetryCount \+ 1\) \+ "）/g, '');

fs.writeFileSync('src/components/ChatWindow.tsx', chatWindowCode);
console.log("Updated ChatWindow packages logic, count:", cwCount);
