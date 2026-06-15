const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const target = "className={'flex-1 flex flex-col bg-white relative min-h-0 min-w-0 ${activeChat === 'ai_assistant' ? '' : 'hidden'}'}>";
code = code.replace(target, "className={`flex-1 flex flex-col bg-white relative min-h-0 min-w-0 ${activeChat === 'ai_assistant' ? '' : 'hidden'}`}>");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
