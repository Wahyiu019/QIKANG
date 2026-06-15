const fs = require('fs');

let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Fix template literals that got converted to single quotes
code = code.replace(/className=\{'([^']+)\$\{([^}]+)\}([^']+)'\}/g, (match, prefix, varName, suffix) => {
    return `className={\`${prefix}\${${varName}}${suffix}\`}`;
});

code = code.replace(/className=\{'([^']+)\$\{([^}]+)\}'\}/g, (match, prefix, varName) => {
    return `className={\`${prefix}\${${varName}}\`}`;
});

code = code.replace(/'flex-1 flex flex-col bg-white relative min-h-0 min-w-0 \$\{activeChat === 'ai_assistant' \? '' : 'hidden'\}'/g, 
"`flex-1 flex flex-col bg-white relative min-h-0 min-w-0 ${activeChat === 'ai_assistant' ? '' : 'hidden'}`");

// There are a bunch of other ones probably:
// Let's replace any `{'... ${...} ...'}` with ``{`... ${...} ...`}``
code = code.replace(/=\{'(.*?)\$\{(.*?)\}(.*?)'\}/g, (match, g1, g2, g3) => {
    // If there's an unescaped single quote inside it might be tricky but let's assume it's fine.
    return `={\`${g1}\${${g2}}${g3}\`}`;
});

// `[附件] ${fileName}` got converted?
code = code.replace(/'\[附件\] \$\{fileName\}'/g, "`[附件] ${fileName}`");
code = code.replace(/'正确命中【\$\{skillName\}】技能...'/g, "`正确命中【${skillName}】技能...`");
code = code.replace(/'【\$\{skillName\}】已为您生成联想集团全面背景报告。'/g, "`【${skillName}】已为您生成联想集团全面背景报告。`");
code = code.replace(/'我已经识别到您的需求，正在为您调用\*\*\$\{skillName\}\*\*技能'/g, "`我已经识别到您的需求，正在为您调用**${skillName}**技能`");
code = code.replace(/'\$\{expert.name\}专家正在为您服务，请问有什么可以帮您？'/g, "`${expert.name}专家正在为您服务，请问有什么可以帮您？`");
code = code.replace(/'\$\{expert.name\}'/g, "`${expert.name}`");


fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed interpolated strings');
