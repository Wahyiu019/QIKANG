const fs = require('fs');
let file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `    if (text === '#案例亮点提炼#') {`;

const newCode = `    if (text === '帮我做一个联想全景分析' || text === '#联想全景分析#') {
      const newUserMsg = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '客户洞察专家正在进行全景分析...', timestamp: new Date(),
        data: { steps: [{id:'1', text:'检索工商及核心信息...', status:'loading'}, {id:'2', text:'判断内部既往业务往来...', status:'pending'}, {id:'3', text:'挖掘潜在合作机会...', status:'pending'}] }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s,i)=>i===0?{...s,status:'complete'}:i===1?{...s,status:'loading'}:s) } } : m));
      }, 1500);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s,i)=>i===1?{...s,status:'complete'}:i===2?{...s,status:'loading'}:s) } } : m));
      }, 3000);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s,i)=>i===2?{...s,status:'complete'}:s) } } : m));
        const reportMsg = { id: Date.now().toString() + '_report', sender: 'bot', type: 'lenovo_panoramic_analysis', content: '联想调研报告html和拜访建议话术html已生成。', timestamp: new Date() };
        setMessages(prev => [...prev, reportMsg]);
        setIsTyping(false);
      }, 4500);
      return;
    }

    if (text === '#案例亮点提炼#') {`;

content = content.replace(targetStr, newCode);
fs.writeFileSync(file, content);
console.log('Modified ChatWindow.tsx successfully.');
