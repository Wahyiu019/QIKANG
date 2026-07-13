const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const target1 = `          {
            id: Date.now().toString() + "_ask_ppt_modify_new",
            sender: "bot",
            type: "text",
            content: "PPT内容已生成完毕。是否需要修改？（输入“是”或“否”）",
            timestamp: new Date(),
          }`;

const target2 = `          {
            id: Date.now().toString() + "_ask_ppt_modify",
            sender: "bot",
            type: "text",
            content: "PPT内容已生成完毕。是否需要修改？（输入“是”或“否”）",
            timestamp: new Date(),
          }`;

code = code.replace(target1, "");
code = code.replace(target2, "");

// also remove commas before them if they exist in an array...
code = code.replace(/,\s*\]/g, ']');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log("Removed prompts");
