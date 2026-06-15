const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(
    /<div className=\{`flex-1 flex flex-col bg-white relative min-h-0 min-w-0 \$\{activeChat === 'ai_assistant' \? '' : 'hidden'\}`\}>\n>/g,
    "<div className={`flex-1 flex flex-col bg-white relative min-h-0 min-w-0 ${activeChat === 'ai_assistant' ? '' : 'hidden'}`}>"
);

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed the double angle bracket');
