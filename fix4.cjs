const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// I will find ALL single quotes that don't match on the same line and just blindly replace their start and end with backticks if they are obvious.
// Even better: use regex to fix this specific string!

code = code.replace(
    /'为了给您提供更精准的【拜访建议话术】，包含了开场建议、沟通重点、建议提问、产品切入方式、预期效果等内容，请您补充以下信息：\n1\. \*\*拜访对象\*\* \(及职务\)\n2\. \*\*当前关系\*\* \(如初次拜访\/已有交情等\)\n3\. \*\*拜访目标\*\*[^']*'/g,
    "`为了给您提供更精准的【拜访建议话术】，包含了开场建议、沟通重点、建议提问、产品切入方式、预期效果等内容，请您补充以下信息：\n1. **拜访对象** (及职务)\n2. **当前关系** (如初次拜访/已有交情等)\n3. **拜访目标**\n*(可以直接在此回复，例如：杨元庆，首次拜访，方案邀约)*`"
);

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed line 1409');
