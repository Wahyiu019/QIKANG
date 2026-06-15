const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/ChatWindow.tsx');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Find the quick skills and replace '总结过往项目...' with '#历史合作分析#'
fileContent = fileContent.replace(
  /{ title: '历史合作分析', prompt: '总结过往项目合作及历史数据' }/g,
  "{ title: '历史合作分析', prompt: '#历史合作分析#' }"
);

// We need to replace the logic handling history cooperation
// I will create a regex that captures everything from "else if (text.includes('与联想历史合作')" up to the setTimeout creation of the report.

const replaceTarget = /\} else if \(text\.includes\('与联想历史合作'\) \|\| text\.includes\('与联想合作历史'\) \|\| text\.includes\('历史合作分析'\)\) \{[\s\S]*?\} : m\)\);\s*const reportMsg: Message = \{[\s\S]*?timestamp: new Date\(\)\s*\};\s*setMessages\(prev => \[\.\.\.prev, reportMsg\]\);\s*setIsTyping\(false\);\s*\}, 4500\);\s*return;\s*\}/;

const historyLogicReplace = `} else if (text.includes('与联想历史合作') || text.includes('与联想合作历史') || text.includes('历史合作分析')) {
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
    }`;

fileContent = fileContent.replace(replaceTarget, historyLogicReplace);

// Let's also verify that GroupChatWindow doesn't have an old version of history_cooperation_report. Let's find it.
const groupSearch = /\{ title: '历史合作分析', prompt: '总结过往项目合作及历史数据' \}/g;
fileContent = fileContent.replace(groupSearch, "{ title: '历史合作分析', prompt: '#历史合作分析#' }");

const groupHistoryLogic = /\} else if \(text\.includes\('联想历史合作'\) \|\| text\.includes\('跟联想有过什么合作'\) \|\| text\.includes\('历史合作'\) \|\| text\.includes\('总结过往项目'\)\) \{[\s\S]*?\} : m\)\);\s*const reportMsg: Message \= \{[\s\S]*?timestamp: new Date\(\)\s*\};\s*setMessages\(prev => \[\.\.\.prev, reportMsg\]\);\s*setIsTyping\(false\);\s*\}, 4500\);\s*return;\s*\}/;

const groupHistoryOverride = `} else if (text.includes('联想历史合作') || text.includes('跟联想有过什么合作') || text.includes('历史合作') || text.includes('总结过往项目') || text.includes('历史合作分析')) {
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
    }`;

fileContent = fileContent.replace(groupHistoryLogic, groupHistoryOverride);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Successfully updated ChatWindow.tsx history cooperation report logic.');
