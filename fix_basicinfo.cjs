const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

code = code.replace(/onSend\(`\[确认\] 已确认客户基本信息`\);/g, 'onSend(`[确认基本信息]`);');

fs.writeFileSync('src/components/MessageBubble.tsx', code);
console.log("BasicInfoFormCard updated");
