const fs = require('fs');
let file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `    } else if (text === '#深度竞品分析#') {`;

const newCode = `    } else if (text === '联想企康对标传统体检机构，技术标的优势怎么写？') {
      const newUserMsg = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '投标专家正在思考...', timestamp: new Date(),
        data: { steps: [
          {id:'1', text:'解析投标场景与竞品画像', status:'loading'},
          {id:'2', text:'扫描对手的“技术盲区”与痛点', status:'pending'},
          {id:'3', text:'匹配联想企康的核心技术壁垒', status:'pending'},
          {id:'4', text:'推演技术标“控标”策略', status:'pending'},
          {id:'5', text:'生成标书标准化输出框架', status:'pending'}
        ] }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      
      let currentStep = 0;
      const totalSteps = 5;
      const interval = setInterval(() => {
        setMessages(prev => prev.map(m => {
          if (m.id === reasoningMsgId) {
            const newSteps = [...m.data.steps];
            if (currentStep < totalSteps) {
              newSteps[currentStep] = { ...newSteps[currentStep], status: 'complete' };
              if (currentStep + 1 < totalSteps) {
                newSteps[currentStep + 1] = { ...newSteps[currentStep + 1], status: 'loading' };
              }
            }
            return { ...m, data: { ...m.data, steps: newSteps } };
          }
          return m;
        }));
        
        currentStep++;
        if (currentStep >= totalSteps) {
          clearInterval(interval);
          const reportMsg = { id: Date.now().toString() + '_report', sender: 'bot', type: 'lenovo_tech_bid_advantage', content: '为您生成联想企康技术标优势方案：', timestamp: new Date() };
          setMessages(prev => [...prev, reportMsg]);
          setIsTyping(false);
        }
      }, 1000);
      return;
    } else if (text === '#深度竞品分析#') {`;

content = content.replace(targetStr, newCode);
fs.writeFileSync(file, content);
console.log('Modified ChatWindow.tsx successfully.');
