const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// I also want to make sure the PPT content actually says "明道云标品营销方案PPT" in its chat card title, not just the component default.
code = code.replace(/content: "营销方案PPT大纲"/g, 'content: "营销方案PPT"');
code = code.replace(/content: "新营销方案PPT大纲"/g, 'content: "新营销方案PPT"');
code = code.replace(/您可以直接预览各页大纲/g, '您可以直接预览各页内容');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
