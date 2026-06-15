const fs = require('fs');
let file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `    } else if (text === '#深度竞品分析#') {`;

const newCode = `    } else if (text === '给联想企康写方案，分析竞品情况') {
      const newUserMsg = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '营销方案专家正在分析...', timestamp: new Date(),
        data: { steps: [
          {id:'1', text:'采用多维度对比模型', status:'loading'},
          {id:'2', text:'提取平安优势', status:'pending'},
          {id:'3', text:'提取竞品优势', status:'pending'},
          {id:'4', text:'发现关键冲突点', status:'pending'},
          {id:'5', text:'打法推演', status:'pending'},
          {id:'6', text:'策略匹配', status:'pending'},
          {id:'7', text:'构化输出竞品分析结果', status:'pending'}
        ] }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      
      let currentStep = 0;
      const totalSteps = 7;
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
          const reportMsg = { id: Date.now().toString() + '_report', sender: 'bot', type: 'citic_competitor_analysis', content: '开篇：根据项目背景，收集12家投标方信息，从威胁等级、历史中标、资质壁垒三个维度筛选出高威胁竞品...', timestamp: new Date() };
          setMessages(prev => [...prev, reportMsg]);
          setIsTyping(false);
        }
      }, 800);
      return;
    } else if (text === '#深度竞品分析#') {`;

content = content.replace(targetStr, newCode);
fs.writeFileSync(file, content);
console.log('Modified ChatWindow.tsx successfully.');
