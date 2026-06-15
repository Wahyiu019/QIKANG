const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/袋鼠健康/g, '爱康国宾');
content = content.replace(/德安健康/g, '泰康保险集团');

fs.writeFileSync(file, content);
console.log('Replaced globally');
