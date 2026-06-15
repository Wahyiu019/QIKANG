const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/} else if \(\s*awaitingEmployeeListUpload &&[\s\S]*? \/\/ Override filename to match the hardcoded case/g, '} else if (awaitingEmployeeListUpload) { setAwaitingEmployeeListUpload(false); handleSend(`[附件] ${fileName}`);');

code = code.replace(/text\.includes\("\[附件\]"\) && text\.includes\("员工清单修改需求\.xlsx"\)/g, 'text.includes("[附件]") && awaitingEmployeeListUpload');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Replaced');
