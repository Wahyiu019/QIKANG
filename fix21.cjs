const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/text: `正确命中【\$\{skillName\}】技能...'/g, "text: `正确命中【${skillName}】技能...`");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed correctly hitting skillName string');
