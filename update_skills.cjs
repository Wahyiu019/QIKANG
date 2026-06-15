const fs = require('fs');

const cwPath = 'src/components/ChatWindow.tsx';
let cwContent = fs.readFileSync(cwPath, 'utf8');

cwContent = cwContent.replace(
  /skills: \["产品方案生成", "案例亮点提炼", "深度竞品分析"\],/g,
  'skills: ["三段式营销材料", "标准产品推荐", "明星方案匹配", "案例亮点提炼", "竞品多维对标"],'
);

cwContent = cwContent.replace(
  /"营销方案专家调用以下技能：产品方案生成、案例亮点提炼、深度竞品分析"/g,
  '"营销方案专家调用以下技能：三段式营销材料、标准产品推荐、明星方案匹配、案例亮点提炼、竞品多维对标"'
);

cwContent = cwContent.replace(
  /"营销方案专家调用以下技能：产品方案生成、案例亮点提炼"/g,
  '"营销方案专家调用以下技能：三段式营销材料、标准产品推荐、明星方案匹配、案例亮点提炼、竞品多维对标"'
);

cwContent = cwContent.replace(
  /prompts: \{\s+产品方案生成:[\s\S]*?深度竞品分析: "#深度竞品分析#",\s+\},/g,
  `prompts: {
                三段式营销材料:
                  "烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料。",
                标准产品推荐: "#标准产品推荐#",
                明星方案匹配: "#明星方案匹配#",
                案例亮点提炼: "#案例亮点提炼#",
                竞品多维对标: "#竞品多维对标#",
              },`
);

fs.writeFileSync(cwPath, cwContent, 'utf8');

const bePath = 'src/components/BusinessExpert.tsx';
let beContent = fs.readFileSync(bePath, 'utf8');
beContent = beContent.replace(
  /skills: \['产品方案生成', '案例亮点提炼', '深度竞品分析'\],/g,
  "skills: ['三段式营销材料', '标准产品推荐', '明星方案匹配', '案例亮点提炼', '竞品多维对标'],"
);
fs.writeFileSync(bePath, beContent, 'utf8');

console.log('Scripts updated!');
