import * as fs from 'fs';

const filePath = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the bidMsg content
content = content.replace(
    /content: '【招标助手Skill】已完成材料自动化生成。梁镇宁（合规部）已收到您的材料，正在审核中\.\.\.',/g,
    "content: '【招标助手Skill】已完成材料自动化生成。',"
);

// Replace the setTimeout block
const targetBlock = `        setMessages(prev => [...prev, bidMsg]);

        // Simulate approval and seal application
        setTimeout(() => {
          const approvalMsg: Message = {
            id: (Date.now() + 2).toString(),
            sender: 'bot',
            type: 'text',
            content: '✅ 梁镇宁（合规部）审核通过！\\n\\nAI伙伴已为您自动发起用印申请，并显示：**用印申请已发起，请关注流程进度。**',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, approvalMsg]);
          if (onBidCompleted) onBidCompleted();
        }, 5000);`;

const replacementBlock = `        setMessages(prev => [...prev, bidMsg]);
        if (onBidCompleted) onBidCompleted();`;

content = content.replace(new RegExp(targetBlock.replace(/[.*+?^$\{()|[\\]\\\\]/g, '\\$&'), 'g'), replacementBlock);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replacement complete.');
