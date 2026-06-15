const fs = require('fs');
const cwPath = 'src/components/ChatWindow.tsx';
let cwContent = fs.readFileSync(cwPath, 'utf8');

cwContent = cwContent.replace(
  /{\s*title: "产品方案生成",\s*prompt: "烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料。"\s*},/,
  '{ title: "三段式营销材料", prompt: "烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料。" },'
);

cwContent = cwContent.replace(
  /{\s*title: "案例亮点提炼", prompt: "#案例亮点提炼#"\s*},\s*{ title: "深度竞品分析", prompt: "#深度竞品分析#"\s*},/,
  '{ title: "标准产品推荐", prompt: "#标准产品推荐#" },\\n    { title: "明星方案匹配", prompt: "#明星方案匹配#" },\\n    { title: "案例亮点提炼", prompt: "#案例亮点提炼#" },\\n    { title: "竞品多维对标", prompt: "#竞品多维对标#" },'
);

fs.writeFileSync(cwPath, cwContent, 'utf8');
console.log('Fixed QUICK_SKILLS');
