const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/text: `【\$\{skillName\}】已为您生成联想集团全面背景报告。',/g, "text: `【${skillName}】已为您生成联想集团全面背景报告。`,");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed skillName string ending quote');
