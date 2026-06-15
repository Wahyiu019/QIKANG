const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// I will find all instances where a single quote contains a real newline and replace the quotes with backticks.
// But some might be tricky. Let me just replace the real newlines back to `\\n` inside single quotes.

// Actually, simpler: replace all real newlines that happen inside single quotes with `\\n`.
let output = '';
let inSingleQuote = false;
for (let i = 0; i < code.length; i++) {
    const char = code[i];
    if (char === "'") {
        // If not escaped, toggle
        if (i === 0 || code[i - 1] !== "\\") {
            inSingleQuote = !inSingleQuote;
        }
    }
    
    // For single quotes: wait, maybe I should just use babel/parser? We don't have it.
    // Let me just replace the specific broken strings:
}

// Or just manually fix the specific broken strings I see from the compiler? The compiler only gave me the first one. Let me run a regex to fix strings.
code = code.replace(/'你好！我是你的专属企康助手。\n我可以帮你领商机、客户洞察、陪展等。今天想从哪个任务开始？'/g, "`你好！我是你的专属企康助手。\n我可以帮你领商机、客户洞察、陪展等。今天想从哪个任务开始？`");
code = code.replace(/'【客户维系建议】：\n1/g, "`【客户维系建议】：\n1");
code = code.replace(/持续维护客户关系。'/g, "持续维护客户关系。`");
code = code.replace(/'1. 分层健康管理计划/g, "`1. 分层健康管理计划");
code = code.replace(/提供职场心理健康支持与干预。'/g, "提供职场心理健康支持与干预。`");
code = code.replace(/'您这次拜访对象是谁？什么角色？待您确认后，我将根据角色需求，提供适配方案与材料。'/g, "`您这次拜访对象是谁？什么角色？待您确认后，我将根据角色需求，提供适配方案与材料。`");

// Wait, any other literal string that broke?
code = code.replace(/'(这是[^']*)'/g, (match) => {
    return match.replace(/\n/g, '\\n');
});

// Let's just blindly change all newlines inside single quotes back to \n.
let fixedCode = "";
inSingleQuote = false;

for (let i=0; i<code.length; i++) {
    if (code[i] === "'" && code[i-1] !== '\\') {
        inSingleQuote = !inSingleQuote;
    }
    if (inSingleQuote && code[i] === '\n') {
        fixedCode += '\\n';
    } else {
        fixedCode += code[i];
    }
}


fs.writeFileSync('src/components/ChatWindow.tsx', fixedCode);

console.log("Replaced newlines to \\n inside single quotes.");
