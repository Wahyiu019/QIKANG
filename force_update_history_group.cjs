const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/ChatWindow.tsx');
let fileContent = fs.readFileSync(filePath, 'utf8');

const lines = fileContent.split('\n');

const groupChatIndex = lines.findIndex(l => l.includes('function GroupChatWindow('));
let targetGroupStart = -1;
for (let i = groupChatIndex; i < lines.length; i++) {
  if (lines[i].includes("} else if (text.includes('市场分析') || text.includes('产品匹配')")) {
    targetGroupStart = i;
    break;
  }
}

if (targetGroupStart !== -1) {
  const replaceContentGroup = `    } else if (text.includes('联想历史合作') || text.includes('跟联想有过什么合作') || text.includes('历史合作') || text.includes('总结过往项目') || text.includes('历史合作分析')) {
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
    } else if (text.includes('市场分析') || text.includes('产品匹配') || text.includes('机会评估') || text.includes('策略')) {`;

  lines[targetGroupStart] = replaceContentGroup;
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log('Successfully injected GroupChat history logic');
} else {
  console.log('Failed to find GroupChat target point');
}
