const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(
    /<div className={`flex-1 flex flex-col bg-white relative min-h-0 min-w-0 \$\{activeChat === `ai_assistant' \? '' : 'hidden'\}`}/g,
    "<div className={`flex-1 flex flex-col bg-white relative min-h-0 min-w-0 ${activeChat === 'ai_assistant' ? '' : 'hidden'}`}>\n"
);
// Also for other places with `ai_assistant'
code = code.replace(/`ai_assistant'/g, "'ai_assistant'");

// There's another JSX issue probably somewhere causing line 499 to fail?
// Let's run prettier and see if it passes.
fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed ai_assistant');
