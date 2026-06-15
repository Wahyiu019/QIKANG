const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Map #标书质量检查# to #标书质检# response
code = code.replace(/text === "#标书质检#"/g, 'text === "#标书质检#" || text === "#标书质量检查#"');

// Add a handler for #述标材料生成# right after the #招标文件解读# block
const handlerString = `} else if (text === "#述标材料生成#") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“述标材料生成”技能",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);

      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "为您生成述标材料...",
          timestamp: new Date(),
          data: {
             type: "tactic_recommendation",
             phases: [
                 {
                    title: "PPT宣讲材料结构化生成",
                    steps: ["开场背景与分析", "痛点匹配方案", "案例证明", "报价说明"]
                 }
             ]
          }
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1500);
      return;
    } else if (text === "#招标文件解读#") {`;

code = code.replace(/} else if \(text === "#招标文件解读#"\) \{/g, handlerString);
// Wait, grep showed that text ==="#招标文件解读#" is just an `if (text === "#招标文件解读#") {` or `} else if (text === "#招标文件解读#") {`
fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Done');
