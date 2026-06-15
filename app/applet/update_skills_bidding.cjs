const fs = require('fs');

let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Update skills array and prompts for "标书撰写专家"
const oldSkillsStr = `skills: ["智能标书生成"],
              prompts: {
                智能标书生成:
                  "根据我上传的分析云南省烟草公司2024-2027年补充医疗保险服务项目（二次）招标书初稿，检查标书内容和格式，总结标书可以改善的地方，生成述标的ppt、以及ppt逐字演讲稿。",
              },`;

const newSkillsStr = `skills: ["智能标书生成", "招标文件解读", "标书质量检查", "述标材料生成"],
              prompts: {
                智能标书生成:
                  "根据我上传的分析云南省烟草公司2024-2027年补充医疗保险服务项目（二次）招标书初稿，检查标书内容和格式，总结标书可以改善的地方，生成述标的ppt、以及ppt逐字演讲稿。",
                招标文件解读: "#招标文件解读#",
                标书质量检查: "#标书质量检查#",
                述标材料生成: "#述标材料生成#",
              },`;

code = code.replace(oldSkillsStr, newSkillsStr);

// Add to handleSkillClickLocal for stage change taking into account multiple occurrences
const oldCondition = `skill.title === "招标助手" ||
      skill.title === "智能标书生成" ||
      skill.title === "合规性检查" ||
      skill.title === "标书生成" ||
      skill.title === "材料审查"`;

const newCondition = `skill.title === "招标助手" ||
      skill.title === "智能标书生成" ||
      skill.title === "合规性检查" ||
      skill.title === "标书生成" ||
      skill.title === "材料审查" ||
      skill.title === "招标文件解读" ||
      skill.title === "标书质量检查" ||
      skill.title === "述标材料生成"`;

code = code.split(oldCondition).join(newCondition);

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Updated ChatWindow.tsx successfully');
