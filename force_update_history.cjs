const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/ChatWindow.tsx');
let fileContent = fs.readFileSync(filePath, 'utf8');

const targetStartText = "} else if (text.includes('与联想历史合作') || text.includes('与联想合作历史') || text.includes('历史合作分析')) {";
const targetEndText = "      return;\n    } else if (text.includes('产品') || text.includes('企康') || text.includes('主推')) {";

let startIndex = fileContent.indexOf(targetStartText);
let endIndex = fileContent.indexOf(targetEndText);

if (startIndex !== -1 && endIndex !== -1) {
  const replaceContent = `} else if (text.includes('与联想历史合作') || text.includes('与联想合作历史') || text.includes('历史合作分析')) {
      if (onStageChange) onStageChange('定制策略');
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: 'bot',
        type: 'reasoning',
        content: '调用“历史合作分析”技能',
        timestamp: new Date(),
        data: {
          steps: [
            { text: '调用“历史合作分析”技能...', status: 'loading' }
          ]
        }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: {
            steps: [
              { text: '调用“历史合作分析”技能...', status: 'done' },
              { text: '生成历史合作与产品覆盖深度分析报告', status: 'loading' }
            ]
          }
        } : m));
      }, 1500);

      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: {
            steps: [
              { text: '调用“历史合作分析”技能...', status: 'done' },
              { text: '生成历史合作与产品覆盖深度分析报告', status: 'done' }
            ]
          }
        } : m));

        const reportMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          type: 'history_cooperation_report',
          content: '【联想】历史合作与产品覆盖深度分析报告',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, reportMsg]);
        setIsTyping(false);
      }, 3500);
      return;
    } else if (text.includes('产品') || text.includes('企康') || text.includes('主推')) {`;
    
  fileContent = fileContent.substring(0, startIndex) + replaceContent + fileContent.substring(endIndex + targetEndText.length);
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log('Successfully applied index replace for single chat.');
} else {
  console.log('Could not find start or end index for single chat.');
}

const targetStartTextGroup = "} else if (text.includes('联想历史合作') || text.includes('跟联想有过什么合作') || text.includes('历史合作') || text.includes('总结过往项目')) {";
const targetEndTextGroup = "      return;\n    } else if (text.includes('产品') || text.includes('企康') || text.includes('主推') || text.includes('匹配')) {";

let startIndexGroup = fileContent.indexOf(targetStartTextGroup);
let endIndexGroup = fileContent.indexOf(targetEndTextGroup);

if (startIndexGroup !== -1 && endIndexGroup !== -1) {
  const replaceContentGroup = `} else if (text.includes('联想历史合作') || text.includes('跟联想有过什么合作') || text.includes('历史合作') || text.includes('总结过往项目') || text.includes('历史合作分析')) {
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: 'bot',
        type: 'reasoning',
        content: '调用“历史合作分析”技能',
        timestamp: new Date(),
        data: {
          steps: [
            { text: '调用“历史合作分析”技能...', status: 'loading' }
          ]
        }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: {
            steps: [
              { text: '调用“历史合作分析”技能...', status: 'done' },
              { text: '生成历史合作与产品覆盖深度分析报告', status: 'loading' }
            ]
          }
        } : m));
      }, 1500);

      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: {
            steps: [
              { text: '调用“历史合作分析”技能...', status: 'done' },
              { text: '生成历史合作与产品覆盖深度分析报告', status: 'done' }
            ]
          }
        } : m));

        const reportMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          type: 'history_cooperation_report',
          content: '【联想】历史合作与产品覆盖深度分析报告',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, reportMsg]);
        setIsTyping(false);
      }, 3500);
      return;
    } else if (text.includes('产品') || text.includes('企康') || text.includes('主推') || text.includes('匹配')) {`;
    
  fileContent = fileContent.substring(0, startIndexGroup) + replaceContentGroup + fileContent.substring(endIndexGroup + targetEndTextGroup.length);
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log('Successfully applied index replace for group chat.');
} else {
  console.log('Could not find start or end index for group chat.');
  if (startIndexGroup === -1) console.log('Group start missing');
  if (endIndexGroup === -1) console.log('Group end missing');
}
