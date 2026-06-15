const fs = require('fs');

let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Use regex to replace the skills block safely
code = code.replace(/skills:\s*\[\s*"智能标书生成"\s*\],\s*prompts:\s*\{\s*智能标书生成:\s*"[^"]+",\s*\}/g, (match) => {
    // We recreate it using the matched prompt text to be safe
    let promptTextMatch = match.match(/"([^"]+)"/g);
    let promptValue = promptTextMatch[promptTextMatch.length - 1]; // last one should be the prompt text
    
    return `skills: ["智能标书生成", "招标文件解读", "标书质量检查", "述标材料生成"],
              prompts: {
                智能标书生成: ${promptValue},
                招标文件解读: "#招标文件解读#",
                标书质量检查: "#标书质量检查#",
                述标材料生成: "#述标材料生成#",
              }`;
});

let conditionRegex = /skill\.title === "招标助手" \|\|\s*skill\.title === "智能标书生成" \|\|\s*skill\.title === "合规性检查" \|\|\s*skill\.title === "标书生成" \|\|\s*skill\.title === "材料审查"/g;

let newCondition = \`skill.title === "招标助手" ||
      skill.title === "智能标书生成" ||
      skill.title === "合规性检查" ||
      skill.title === "标书生成" ||
      skill.title === "材料审查" ||
      skill.title === "招标文件解读" ||
      skill.title === "标书质量检查" ||
      skill.title === "述标材料生成"\`;

code = code.replace(conditionRegex, newCondition);

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Updated ChatWindow.tsx successfully');
