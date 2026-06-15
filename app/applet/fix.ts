import * as fs from 'fs';

let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Replace prompts block
code = code.replace(/prompts:\s*\{\s*智能标书生成:\s*"[^"]+",\s*招标文件解读:\s*"#招标文件解读#",\s*标书质量检查:\s*"#标书质量检查#",\s*述标材料生成:\s*"[^"]+",\s*\}/g,
              `prompts: {
                智能标书生成: "根据云南省烟草公司2024-2027年补充医疗保险服务项目（二次）的招标书，帮我生成完整的投标书，要求内容完整、规范，符合正式投标使用。",
                招标文件解读: "#招标文件解读#",
                标书质量检查: "#标书质量检查#",
                述标材料生成: "根据我上传的分析云南省烟草公司2024-2027年补充医疗保险服务项目（二次）招标书初稿，检查标书内容和格式，总结标书可以改善的地方，生成述标的ppt、以及ppt逐字演讲稿。",
              }`);

// Remove hardcoded logic
const targetHook = `                          if (skill === "智能标书生成") {
                            targetTitle = "智能标书生成";
                            targetPrompt =
                              "根据我上传的分析云南省烟草公司2024-2027年补充医疗保险服务项目（二次）招标书初稿，检查标书内容和格式，总结标书可以改善的地方，生成述标的ppt、以及ppt逐字演讲稿。";
                          }`;
code = code.replace(targetHook, '');

// Update logic
code = code.split('\n').map((line, index, arr) => {
    if (line.includes('content: "标书撰写专家调用以下技能：智能标书生成",')) {
        let isPPT = false;
        for (let i = index; i >= Math.max(0, index - 30); i--) {
            if (arr[i] && arr[i].includes('PPT定位分析。')) {
                isPPT = true;
                break;
            }
        }
        if (isPPT) {
            return line.replace('智能标书生成', '述标材料生成');
        }
    }
    return line;
}).join('\n');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Update finished.');
