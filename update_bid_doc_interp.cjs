const fs = require('fs');
const file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const triggerCode = `
    if (text === '#招标文件解读#') {
      const newUserMsg: Message = {
        id: Date.now().toString() + '_user',
        sender: 'user', type: 'text', content: text, timestamp: new Date()
      };
      setMessages(prev => [...prev, newUserMsg]);
      
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: 'bot',
        type: 'reasoning',
        content: '调用“招标文件解读”技能',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, reasoningMsg]);
      
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingTenderDocInterpretation(true);
        const askMsg: Message = {
          id: Date.now().toString() + '_ask',
          sender: 'bot',
          type: 'text',
          content: '请点击下方“附件”按钮，上传需要解读的招标书文件（支持 PDF、Word 等格式）。',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, askMsg]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingTenderDocInterpretation && text.startsWith('[附件]')) {
      setAwaitingTenderDocInterpretation(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + '_user',
        sender: 'user', type: 'text', content: text, timestamp: new Date()
      };
      setMessages(prev => [...prev, newUserMsg]);

      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: 'bot',
        type: 'reasoning',
        content: '正在解析招标文件内容...',
        timestamp: new Date(),
        data: {
          steps: [
            { id: '1', text: '正在提取项目概括与核心要求...', status: 'loading' },
            { id: '2', text: '分析资质门槛与评分标准...', status: 'pending' },
            { id: '3', text: '梳理体检需求要点及废标风险...', status: 'pending' }
          ]
        }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: { ...m.data, steps: m.data.steps.map((s: any, i: number) => i === 0 ? { ...s, status: 'complete' } : i === 1 ? { ...s, status: 'loading' } : s) }
        } : m));
      }, 1500);

      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: { ...m.data, steps: m.data.steps.map((s: any, i: number) => i === 1 ? { ...s, status: 'complete' } : i === 2 ? { ...s, status: 'loading' } : s) }
        } : m));
      }, 3000);

      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: { ...m.data, steps: m.data.steps.map((s: any) => ({ ...s, status: 'complete' })) }
        } : m));

        const reportMsg: Message = {
          id: Date.now().toString() + '_report',
          sender: 'bot',
          type: 'bidding_document_analysis_report',
          content: '招标文件解析完成，以下是深度解读报告：',
          timestamp: new Date(),
          data: {}
        };
        setMessages(prev => [...prev, reportMsg]);
        setIsTyping(false);
      }, 4500);
      return;
    } else `;

content = content.replace(/if \(text === '#合规分析#' \|\| text.includes\('企康与保险差异'\) \|\| text.includes\('合规分析'\)\) {/g, triggerCode + "\n    if (text === '#合规分析#' || text.includes('企康与保险差异') || text.includes('合规分析')) {");

fs.writeFileSync(file, content);
