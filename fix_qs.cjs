const fs = require('fs');
const cwPath = 'src/components/ChatWindow.tsx';
let cwContent = fs.readFileSync(cwPath, 'utf8');

cwContent = cwContent.replace(
  /title: "产品方案生成"/g,
  'title: "三段式营销材料"'
);

// fix the literal \n strings that my previous script injected
cwContent = cwContent.replace(
  /\\n    \{ title: "明星方案匹配"/g,
  '\n    { title: "明星方案匹配"'
);
cwContent = cwContent.replace(
  /\\n    \{ title: "案例亮点提炼"/g,
  '\n    { title: "案例亮点提炼"'
);
cwContent = cwContent.replace(
  /\\n    \{ title: "竞品多维对标"/g,
  '\n    { title: "竞品多维对标"'
);

fs.writeFileSync(cwPath, cwContent, 'utf8');
console.log('Fixed Quick Skills using JS');
