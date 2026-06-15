const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/ChatWindow.tsx');
let fileContent = fs.readFileSync(filePath, 'utf8');

const lines = fileContent.split('\n');

const startIndex = lines.findIndex(l => l.includes("} else if (text.includes('与联想历史合作') || text.includes('与联想合作历史') || text.includes('历史合作分析')) {"));
const endIndex = lines.findIndex(l => l.includes("} else if (text.includes('市场分析') || text.includes('策略建议') || text.includes('产品适配')") || l.includes("} else if (skill.title === '市场分析'"));

if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
  const replaceContent = `    } else if (text.includes('与联想历史合作') || text.includes('与联想合作历史') || text.includes('历史合作分析')) {
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
`;
  
  lines.splice(startIndex, endIndex - startIndex, replaceContent.slice(0, -1)); // replace exact lines
  console.log('Successfully replaced normal chat history block');
} else {
  console.log('Could not find start/end for normal. start:', startIndex, 'end:', endIndex);
}

// Now replace for group chat if there's any. Let's see if we can find it.
const startIndexGroup = lines.findIndex(l => l.includes("} else if (text.includes('联想历史合作') || text.includes('跟联想有过什么合作') || text.includes('历史合作') || text.includes('总结过往项目')) {"));
let endIndexGroup = -1;
if (startIndexGroup !== -1) {
    for (let i = startIndexGroup + 1; i < lines.length; i++) {
        if (lines[i].includes("} else if (")) {
            endIndexGroup = i;
            break;
        }
    }
}

if (startIndexGroup !== -1 && endIndexGroup !== -1) {
  const replaceContentGroup = `    } else if (text.includes('联想历史合作') || text.includes('跟联想有过什么合作') || text.includes('历史合作') || text.includes('总结过往项目') || text.includes('历史合作分析')) {
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
      return;`;

  lines.splice(startIndexGroup, endIndexGroup - startIndexGroup, replaceContentGroup);
  console.log('Successfully replaced group chat history block');
} else {
  console.log('Could not find start/end for group. start:', startIndexGroup, 'end:', endIndexGroup);
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
