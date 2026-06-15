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

code = code.replace(/if \(text\.includes\("#任务追踪#"\)\) \{/, projectManagementLogic + '\n    if (text.includes("#任务追踪#")) {');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
