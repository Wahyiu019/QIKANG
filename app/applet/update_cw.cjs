const fs = require('fs');
let text = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const targetStr = `  const handleSend = (text: string, displayTitle?: string) => {
    if (!text.trim()) return;`;

const replacement = `  const handleSend = (text: string, displayTitle?: string) => {
    if (!text.trim()) return;

    if (text === '专家会诊评估申请') {
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
          type: "expert_consultation_report",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1500);
      return;
    }
    
    if (text === '发起项目方案生成') {
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
          type: "project_plan_generation",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1500);
      return;
    }`;

if (text.includes(targetStr)) {
  text = text.replace(targetStr, replacement);
  fs.writeFileSync('src/components/ChatWindow.tsx', text, 'utf8');
  console.log('patched ChatWindow');
} else {
  console.log('not found');
}
