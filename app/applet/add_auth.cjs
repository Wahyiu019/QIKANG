const fs = require('fs');

let cw = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

cw = cw.split('{ title: "任务追踪", prompt: "#任务追踪#" },').join('{ title: "任务追踪", prompt: "#任务追踪#" },\n    { title: "智能报价授权中心", prompt: "#智能报价授权中心#" },');

cw = cw.replace(/skills: \["商机认领", "客户拜访记录", "任务追踪", "项目管理"\]/g, 'skills: ["商机认领", "客户拜访记录", "任务追踪", "项目管理", "智能报价授权中心"]');

cw = cw.replace(/项目管理: "#项目管理#",/g, '项目管理: "#项目管理#",\n                智能报价授权中心: "#智能报价授权中心#",');

const intHandler = `
    if (text.includes("#智能报价授权中心#")) {
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
          type: "quote_auth_center",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;
    }
`;

const loc = 'if (text.includes("#任务追踪#")) {';
cw = cw.split(loc).join(intHandler + '\n    ' + loc);

fs.writeFileSync('src/components/ChatWindow.tsx', cw, 'utf8');
console.log('updated ChatWindow.tsx');

let types = fs.readFileSync('src/types.ts', 'utf8');
if (!types.includes('quote_auth_center')) {
  types = types.replace("export type MessageType = '", "export type MessageType = 'quote_auth_center' | '");
  fs.writeFileSync('src/types.ts', types, 'utf8');
}
