const fs = require('fs');
let typesContent = fs.readFileSync('src/types.ts', 'utf8');
typesContent = typesContent.replace(/\| 'bidding_document_analysis_report';/g, "| 'bidding_document_analysis_report' | 'bid_generation_report' | 'bid_inspection_report' | 'material_review_report';");
fs.writeFileSync('src/types.ts', typesContent);

let chatWindowContent = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');
chatWindowContent = chatWindowContent.replace(
  /const \[awaitingTargetClient, setAwaitingTargetClient\] = useState\(false\);/,
  "const [awaitingTargetClient, setAwaitingTargetClient] = useState(false);\n  const [awaitingBidDocGeneration, setAwaitingBidDocGeneration] = useState(false);\n  const [awaitingBidDocInspection, setAwaitingBidDocInspection] = useState(false);\n  const [awaitingMaterialReview, setAwaitingMaterialReview] = useState(false);"
);

const newLogicCode = `
    if (text === '#标书生成#') {
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '调用“标书生成”技能', timestamp: new Date()
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingBidDocGeneration(true);
        setMessages(prev => [...prev, { id: Date.now().toString() + '_ask', sender: 'bot', type: 'text', content: '请点击下方“附件”按钮，上传标书目录，我将为您一键生成标书。', timestamp: new Date() }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingBidDocGeneration && text.startsWith('[附件]')) {
      setAwaitingBidDocGeneration(false);
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '正在生成标书内容...', timestamp: new Date(),
        data: { steps: [{id:'1', text:'提取标书目录与结构...', status:'loading'}, {id:'2', text:'匹配高质量标书素材...', status:'pending'}, {id:'3', text:'组装文档并排版...', status:'pending'}] }
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
         setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any)=>({...s,status:'complete'})) } } : m));
         setMessages(prev => [...prev, { id: Date.now().toString() + '_report', sender: 'bot', type: 'bid_generation_report', content: '为您生成《2026年度员工健康管理与体检服务项目投标书》', timestamp: new Date(), data: {} }]);
         setIsTyping(false);
      }, 4500);
      return;
    }

    if (text === '#标书质检#') {
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '调用“标书质检”技能', timestamp: new Date()
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingBidDocInspection(true);
        setMessages(prev => [...prev, { id: Date.now().toString() + '_ask', sender: 'bot', type: 'text', content: '请点击下方“附件”按钮，上传需要质检的标书文件。', timestamp: new Date() }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingBidDocInspection && text.startsWith('[附件]')) {
      setAwaitingBidDocInspection(false);
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '正在质检标书内容...', timestamp: new Date(),
        data: { steps: [{id:'1', text:'核查内容完整性...', status:'loading'}, {id:'2', text:'检查格式与排版...', status:'pending'}, {id:'3', text:'检索敏感风险项...', status:'pending'}] }
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
         setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any)=>({...s,status:'complete'})) } } : m));
         setMessages(prev => [...prev, { id: Date.now().toString() + '_report', sender: 'bot', type: 'bid_inspection_report', content: '企康项目投递标书质检结果', timestamp: new Date(), data: {} }]);
         setIsTyping(false);
      }, 4500);
      return;
    }

    if (text === '#材料审查#') {
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '调用“材料审查”技能', timestamp: new Date()
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingMaterialReview(true);
        setMessages(prev => [...prev, { id: Date.now().toString() + '_ask', sender: 'bot', type: 'text', content: '请点击下方“附件”按钮，上传待审查的材料文件。', timestamp: new Date() }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingMaterialReview && text.startsWith('[附件]')) {
      setAwaitingMaterialReview(false);
      const newUserMsg: Message = { id: Date.now().toString() + '_user', sender: 'user', type: 'text', content: text, timestamp: new Date() };
      setMessages(prev => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: 'bot', type: 'reasoning', content: '正在智能审查材料内容...', timestamp: new Date(),
        data: { steps: [{id:'1', text:'提取资质文件信息...', status:'loading'}, {id:'2', text:'验证合同与发票要件...', status:'pending'}, {id:'3', text:'评估整体合规性...', status:'pending'}] }
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
         setMessages(prev => prev.map(m => m.id === reasoningMsgId ? { ...m, data: { ...m.data, steps: m.data.steps.map((s:any)=>({...s,status:'complete'})) } } : m));
         setMessages(prev => [...prev, { id: Date.now().toString() + '_report', sender: 'bot', type: 'material_review_report', content: '企康项目材料智能审查结论', timestamp: new Date(), data: {} }]);
         setIsTyping(false);
      }, 4500);
      return;
    }
`;

chatWindowContent = chatWindowContent.replace(
  /if \(text\.includes\('帮我写一个标书'\) \|\| text\.includes\('标书生成'\)\) {[\s\S]*?return;\n    } else if \(text\.includes\('进行材料审核'\) \|\| text\.includes\('材料审核'\)\) {[\s\S]*?return;\n    }/,
  ""
);

chatWindowContent = chatWindowContent.replace(
  /if \(awaitingTargetClient\) {[\s\S]*?return;\n    }/,
  ""
);

chatWindowContent = chatWindowContent.replace(
  /if \(awaitingTenderDoc && text\.startsWith\('\[附件\]'\)\) {[\s\S]*?return;\n    }/,
  ""
);

chatWindowContent = chatWindowContent.replace(
  /if \(awaitingMaterialAudit && text\.startsWith\('\[附件\]'\)\) {[\s\S]*?return;\n    }/,
  ""
);

chatWindowContent = chatWindowContent.replace(
  /if \(awaitingMeetingTarget\) {/,
  newLogicCode + "\n    if (awaitingMeetingTarget) {"
);

fs.writeFileSync('src/components/ChatWindow.tsx', chatWindowContent);
