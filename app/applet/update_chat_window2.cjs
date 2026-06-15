const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Replace file check
code = code.replace(/text.includes\("\[附件\]"\) && text.includes\("员工清单修改需求.xlsx"\)/g, 'text.includes("[附件]") && awaitingEmployeeListUpload');

// In file input, remove the .xlsx extension check and override filename
code = code.replace(/} else if \(\s*awaitingEmployeeListUpload &&\s*fileName\.endsWith\("\.xlsx"\)\s*\) \{\s*setAwaitingEmployeeListUpload\(false\);\s*handleSend\(`\[附件\] 员工清单修改需求\.xlsx`\); \/\/ Override filename to match the hardcoded case/g, '} else if (awaitingEmployeeListUpload) { setAwaitingEmployeeListUpload(false); handleSend(`[附件] ${fileName}`);');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Replaced successfully');
