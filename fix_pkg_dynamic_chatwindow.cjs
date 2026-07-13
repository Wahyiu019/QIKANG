const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// The replacement logic: find all occurrences of packages generation inside _pkg_new
// There are multiple instances where packages are defined inline for "_pkg_new" or "_pkg_refined"

const regexPkgNew = /packages:\s*\[[\s\S]*?\]\s*\}(?=\s*\}\s*\]\);\s*setIsTyping\(false\);)/g;

let count = 0;
code = code.replace(regexPkgNew, (match) => {
    count++;
    return `packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20) + "元", unit: "人/年" },
                    { name: "公立医院门诊绿通", target: "全体员工", price: (300 + pkgRetryCount * 30) + "元", unit: "人/年" },
                    { name: "在线图文问诊服务", target: "全体员工", price: "50元", unit: "人/年" }
                  ],
                  sellingPoint: "覆盖全员基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: "3," + (pkgRetryCount*100) + "0元", unit: "人/年" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: "1," + (pkgRetryCount*100) + "0元", unit: "人/年" },
                    { name: "家属共享健康档案", target: "全体员工", price: "100元", unit: "户/年" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (8000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年" },
                    { name: "海外重疾就医协助", target: "核心高管", price: (2500 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家", target: "高层员工", price: "1,200元", unit: "人/年" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级健康管理服务。"
                }
              ]
            }`;
});

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log("Updated ChatWindow packages logic, count:", count);
