const fs = require('fs');

let cw = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const targetStr = `    if (text.includes("#项目管理#")) {
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
    }`;

const newHandler = `    if (text.includes("#项目管理#")) {
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
          type: "product_match_assessment",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000); // We show bot response after 1s, which will display the card, tracking its own 0-8s demo timeline
      return;
    }`;

if (cw.includes(targetStr)) {
  cw = cw.split(targetStr).join(newHandler);
  fs.writeFileSync('src/components/ChatWindow.tsx', cw, 'utf8');
} else {
  console.log("target string not found in ChatWindow.tsx");
}

let types = fs.readFileSync('src/types.ts', 'utf8');
if (!types.includes("'product_match_assessment'")) {
  types = types.replace("export type MessageType = '", "export type MessageType = 'product_match_assessment' | '");
  fs.writeFileSync('src/types.ts', types, 'utf8');
}
console.log("done");
