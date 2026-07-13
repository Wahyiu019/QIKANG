const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Add state
code = code.replace(/const \[awaitingNewPkg, setAwaitingNewPkg\] = useState\(false\);/g, `const [awaitingNewPkg, setAwaitingNewPkg] = useState(false);
  const [pkgRetryCount, setPkgRetryCount] = useState(1);`);

// For the first `else if (awaitingNewPkg && text)` block, let's find it.
// There are two identical chunks (lines 2000+ and 4000+ maybe due to duplication earlier).
let count = 0;
code = code.replace(/setAwaitingNewPkg\(false\);/g, (match) => {
  count++;
  return `setAwaitingNewPkg(false); setPkgRetryCount(prev => prev + 1);`;
});
console.log("Replaced setAwaitingNewPkg:", count);

// Replace the data inside _pkg_new
const regexPkgNew = /packages:\s*\[[\s\S]*?\]\s*\}(?=\s*\}\s*\]\);\s*setIsTyping\(false\);)/g;

code = code.replace(regexPkgNew, `packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版（版本" + (pkgRetryCount + 1) + "）",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: "3," + (pkgRetryCount*100) + "0元", unit: "人/年" },
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
                  name: "全场景黑金尊享版（版本" + (pkgRetryCount + 1) + "）",
                  isRecommended: true,
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: "3," + (pkgRetryCount*100) + "0元", unit: "人/年" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
                    { name: "基层健康档案系统", target: "基层员工", price: "100元", unit: "人/年" }
                  ],
                  features: [
                    "覆盖全院的基础健康档案建立",
                    "7*24小时在线全科医生问诊",
                    "三甲医院重疾绿色通道协助服务",
                    "定制化企业健康月报数据支持"
                  ]
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版（版本" + (pkgRetryCount + 1) + "）",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: "5," + (pkgRetryCount*100) + "0元", unit: "人/年" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: "1,500元", unit: "人/年" },
                    { name: "基层健康档案系统", target: "基层员工", price: "200元", unit: "人/年" }
                  ],
                  features: [
                    "三甲医院重疾绿色通道协助服务",
                    "基础心理健康测评与干预",
                    "专属健康管家全程跟进",
                    "高端私立医院VIP体检套餐"
                  ]
                }
              ]
            }`);

fs.writeFileSync('src/components/ChatWindow.tsx', code);
