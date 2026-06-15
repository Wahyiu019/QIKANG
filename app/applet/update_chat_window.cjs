const fs = require('fs');

let file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

// Inject the states first:
content = content.replace(/const \[awaitingBidDocGeneration, setAwaitingBidDocGeneration\] = useState\(false\);/g, 
  "const [awaitingBidDocGeneration, setAwaitingBidDocGeneration] = useState(false);\\n  const [awaitingStProductInfo, setAwaitingStProductInfo] = useState(false);");

// Inject the handlers
const handlers = `    } else if (text === '#案例亮点提炼#') {
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '调用“案例亮点提炼”技能', timestamp: new Date(),
        data: { steps: [{id:'1', text:'从知识库中快速检索历史案例...', status:'loading'}, {id:'2', text:'提炼历史案例卖点和亮点...', status:'pending'}] }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any,i:number)=>i===0?{...s,status:'complete'}:i===1?{...s,status:'loading'}:s) } } : m));
      }, 1500);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any,i:number)=>i===1?{...s,status:'complete'}:s) } } : m));
        const reportMsg: Message = { id: Date.now().toString() + '_report', sender: 'bot', type: 'case_highlight_report', content: '已经为您完成历史案例的亮点与卖点提炼：', timestamp: new Date() };
        setMessages(prev => [...prev, reportMsg]);
        setIsTyping(false);
      }, 3000);
      return;
    } else if (text === '#深度竞品分析#') {
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '调用“深度竞品分析”技能', timestamp: new Date(),
        data: { steps: [{id:'1', text:'分析 6+1 服务方案...', status:'loading'}, {id:'2', text:'提炼差异化优势...', status:'pending'}, {id:'3', text:'分析销售打法...', status:'pending'}] }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any,i:number)=>i===0?{...s,status:'complete'}:i===1?{...s,status:'loading'}:s) } } : m));
      }, 1500);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any,i:number)=>i===1?{...s,status:'complete'}:i===2?{...s,status:'loading'}:s) } } : m));
      }, 3000);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any,i:number)=>i===2?{...s,status:'complete'}:s) } } : m));
        const reportMsg: Message = { id: Date.now().toString() + '_report', sender: 'bot', type: 'competitor_analysis_report', content: '深度竞品分析报告已生成：', timestamp: new Date() };
        setMessages(prev => [...prev, reportMsg]);
        setIsTyping(false);
      }, 4500);
      return;
    } else if (text === '#标品方案生成#') {
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = { id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '调用“标品方案生成”技能', timestamp: new Date() };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingStProductInfo(true);
        setMessages(prev => [...prev, { id: Date.now().toString() + '_ask', sender: 'bot', type: 'text', content: '请提供客户画像（行业、规模、核心痛点）以及目标标品名称，我将为您生成专属标品方案。', timestamp: new Date() }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingStProductInfo) {
      setAwaitingStProductInfo(false);
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '正在生成标品方案...', timestamp: new Date(),
        data: { steps: [{id:'1', text:'检索标准产品的特征、保障范围、费率等基准信息...', status:'loading'}, {id:'2', text:'提取标准化的营销方案大纲模板...', status:'pending'}] }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any,i:number)=>i===0?{...s,status:'complete'}:i===1?{...s,status:'loading'}:s) } } : m));
      }, 1500);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any,i:number)=>i===1?{...s,status:'complete'}:s) } } : m));
        const reportMsg: Message = { id: Date.now().toString() + '_report', sender: 'bot', type: 'standard_product_plan_report', content: '专属标品方案已为您生成：', timestamp: new Date() };
        setMessages(prev => [...prev, reportMsg]);
        setIsTyping(false);
      }, 3000);
      return;
`;

// Insert the new handlers right before handling #标书生成# to ensure they get evaluated.
content = content.replace(/} else if \(text === '#标书生成#'\) {/g, handlers + '} else if (text === \'#标书生成#\') {');

fs.writeFileSync(file, content);
console.log('ChatWindow updated successfully.');
