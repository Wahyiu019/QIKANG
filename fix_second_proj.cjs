const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const projectManagementLogic = `
    if (text.includes("#项目管理#")) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "为您拉取项目管理多角色分析大屏，包含管理者、业务员、产品经理、健康专员、理赔支持五大视角的实时运营交付执行进展：",
          timestamp: new Date(),
        };
        const projMsg = {
          id: Date.now().toString() + "_proj",
          sender: "bot",
          type: "project_management_overview",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg, projMsg]);
        if (onStageChange) onStageChange("项目管理");
      }, 1000);
      return;
    }
`;

// It didn't replace the second occurance because I used replace() instead of /.../g or manual tracking.
// We can just append it to the second #任务追踪# block since we know it's there.
const splitStr = 'if (text.includes("#任务追踪#")) {';
const parts = code.split(splitStr);

if (parts.length === 3) {
  // It means there are exactly two #任务追踪#
  // We already modified the first one in the previous script! Wait, the previous script did replace the first one. Let's see how many parts we have.
  // Actually, the previous script replaced one. So there might be 2 occurrences now.
}
code = parts[0] + splitStr + parts[1] + projectManagementLogic + '\n    ' + splitStr + parts[2];
// Wait, if it already had one replaced, then the first one exists.
// Let's just do a string replacement for the missing one.

fs.writeFileSync('second.cjs', `
const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

let count = 0;
code = code.split('\\n').map(line => {
  if (line.includes('if (text.includes("#任务追踪#")) {')) {
    count++;
    if (count === 2) {
      return \`    if (text.includes("#项目管理#")) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "为您拉取项目管理多角色分析大屏，包含管理者、业务员、产品经理、健康专员、理赔支持五大视角的实时运营交付执行进展：",
          timestamp: new Date(),
        };
        const projMsg = {
          id: Date.now().toString() + "_proj",
          sender: "bot",
          type: "project_management_overview",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg, projMsg]);
        if (onStageChange) onStageChange("项目管理");
      }, 1000);
      return;
    }
\` + line;
    }
  }
  return line;
}).join('\\n');
fs.writeFileSync('src/components/ChatWindow.tsx', code);
`);

