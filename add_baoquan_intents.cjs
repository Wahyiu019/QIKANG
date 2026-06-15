const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'ChatWindow.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const injection = `
    if (text.includes('请帮我修改以下员工清单，包括增加和删除')) {
      const newUserMsg = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = { 
          id: Date.now().toString() + '_bot', 
          sender: 'bot', 
          type: 'text', 
          content: '请您上传员工清单附件。', 
          timestamp: new Date() 
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1000);
      return;
    }

    if (text.includes('[附件]') && text.includes('员工清单修改需求.xlsx')) {
      const newUserMsg = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = { 
          id: Date.now().toString() + '_bot', 
          sender: 'bot', 
          type: 'text', 
          content: '分析变更明细表：新增员工12人、删除员工8人、变更信息15人、需人工确认2人。', 
          timestamp: new Date() 
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1500);
      return;
    }

    if (text.includes('确认执行员工信息变更')) {
      const newUserMsg = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = { 
          id: Date.now().toString() + '_bot', 
          sender: 'bot', 
          type: 'text', 
          content: '正在为您执行员工信息变更...', 
          timestamp: new Date() 
        };
        setMessages(prev => [...prev, botMsg]);
        
        setTimeout(() => {
          const finalMsg = {
            id: Date.now().toString() + '_bot_final',
            sender: 'bot',
            type: 'text',
            content: '处理总结：共处理37条，已完成35条，待人工确认2条。已完成员工清单修改并归档，保全处理报告邮件已发送您，请及时查收。',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, finalMsg]);
        }, 2000);
      }, 1000);
      return;
    }

    if (text.includes('请帮我复核当前所有保全完成任务是否合规')) {
      const newUserMsg = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = { 
          id: Date.now().toString() + '_bot', 
          sender: 'bot', 
          type: 'text', 
          content: '已为您找到88条已完成保全任务，其中合规88条，不合规0条，复核明细如下：XXX。复核校验报告已邮件发送您，请及时查收。', 
          timestamp: new Date() 
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1500);
      return;
    }
`;

content = content.replaceAll(
  "    if (text.includes('我有哪些商机可以认领')) {", 
  injection + "\\n    if (text.includes('我有哪些商机可以认领')) {"
);

content = content.replaceAll(
  "{ title: '保全申请发起', prompt: '#保全申请发起#' }",
  "{ title: '保全申请发起', prompt: '请帮我修改以下员工清单，包括增加和删除。' }"
);
content = content.replaceAll(
  "{ title: '保全材料审核', prompt: '#保全材料审核#' }",
  "{ title: '保全材料审核', prompt: '确认执行员工信息变更。' }"
);
content = content.replaceAll(
  "{ title: '复核校验', prompt: '#复核校验#' }",
  "{ title: '复核校验', prompt: '请帮我复核当前所有保全完成任务是否合规。' }"
);

content = content.replaceAll(
  "'保全申请发起': '#保全申请发起#'",
  "'保全申请发起': '请帮我修改以下员工清单，包括增加和删除。'"
);
content = content.replaceAll(
  "'保全材料审核': '#保全材料审核#'",
  "'保全材料审核': '确认执行员工信息变更。'"
);
content = content.replaceAll(
  "'复核校验': '#复核校验#'",
  "'复核校验': '请帮我复核当前所有保全完成任务是否合规。'"
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully injected baoquan intents');
