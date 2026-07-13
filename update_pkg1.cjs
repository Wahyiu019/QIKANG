const fs = require('fs');
let content = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

content = content.replace(
  /id: "pkg1",\s*name: "基础健康保障版",\s*products: \[\s*\{\s*name: "[^"]+",\s*target: "[^"]+",.*?\},\s*\{\s*name: "[^"]+",\s*target: "[^"]+",.*?\},\s*\{\s*name: "[^"]+",\s*target: "[^"]+",.*?\}\s*\]/g,
  \`id: "pkg1",
      name: "基础健康保障版",
      products: [
        { name: "入职体检套餐（基础）", target: "基层员工", price: "150元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
        { name: "高管年度深度体检", target: "高层员工", price: "3,000元", unit: "人/年" }
      ]\`
);
fs.writeFileSync('src/components/MessageBubble.tsx', content);

let cw = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');
cw = cw.replace(
  /id: "pkg1",\s*name: "基础健康保障版",\s*products: \[\s*\{\s*name: "[^"]+",\s*target: "[^"]+",.*?\},\s*\{\s*name: "[^"]+",\s*target: "[^"]+",.*?\},\s*\{\s*name: "[^"]+",\s*target: "[^"]+",.*?\}\s*\]/g,
  \`id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20) + "元", unit: "人/年" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
                    { name: "高管年度深度体检", target: "高层员工", price: "3,000元", unit: "人/年" }
                  ]\`
);
fs.writeFileSync('src/components/ChatWindow.tsx', cw);
