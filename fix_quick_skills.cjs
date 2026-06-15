const fs = require('fs');
const cwPath = 'src/components/ChatWindow.tsx';
let cwContent = fs.readFileSync(cwPath, 'utf8');

cwContent = cwContent.replace(
  /title: "产品方案生成"/g,
  'title: "三段式营销材料"'
);

cwContent = cwContent.replace(
  /\\n/g,
  '\n'
);

fs.writeFileSync(cwPath, cwContent, 'utf8');
console.log('Fixed Quick Skills using JS');
