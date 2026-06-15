const fs = require('fs');

const cwPath = 'src/components/ChatWindow.tsx';
let cwContent = fs.readFileSync(cwPath, 'utf8');

const promptStr = '生成某省烟草集团的客户画像。人员约8000+人，高层员工：800人，核心员工6000人，在职人员平均35岁占比68%，男性员工4500+人，内勤员工：7000人，预算在600~800w左右';

let logicStart = cwContent.indexOf('text.includes("' + promptStr.substring(0, 50) + '")');
if(logicStart === -1) { logicStart = cwContent.indexOf('text.includes("#客户信息调研#")'); }

if (logicStart !== -1) {
    let blockStart = cwContent.lastIndexOf('    } else if (', logicStart);
    if(blockStart === -1) blockStart = cwContent.lastIndexOf('    if (', logicStart);
    
    let nextBlock = cwContent.indexOf('} else if (', logicStart);
    if(nextBlock === -1) nextBlock = cwContent.indexOf('return;', logicStart) + 7;
    
    if (blockStart !== -1 && nextBlock !== -1) {
        const newBlock = `    } else if (
      text.includes("生成某省烟草集团的客户画像") ||
      text.includes("#客户信息调研#") ||
      text.includes("基本情况调研")
    ) {
      if (onStageChange) onStageChange("看档案");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“客户信息调研技能”",
        timestamp: new Date(),
        data: {
          steps: [{ text: "提取多维结构化数据...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "提取多维结构化数据...", status: "done" },
                      { text: "分析企业性质...", status: "loading" }
                    ],
                  },
                }
              : m,
          ),
        );
      }, 500);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "提取多维结构化数据...", status: "done" },
                      { text: "分析企业性质...", status: "done" },
                      { text: "分析行业...", status: "done" },
                      { text: "分析组织结构...", status: "done" },
                      { text: "分析人员规模...", status: "done" },
                      { text: "分析性别结构...", status: "done" },
                      { text: "分析工种结构...", status: "done" },
                      { text: "分析人均预算...", status: "done" },
                      { text: "分析地域特点...", status: "done" },
                      { text: "生成客户画像报告...", status: "loading" }
                    ],
                  },
                }
              : m,
          ),
        );
      }, 1500);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "提取多维结构化数据...", status: "done" },
                      { text: "分析企业性质...", status: "done" },
                      { text: "分析行业...", status: "done" },
                      { text: "分析组织结构...", status: "done" },
                      { text: "分析人员规模...", status: "done" },
                      { text: "分析性别结构...", status: "done" },
                      { text: "分析工种结构...", status: "done" },
                      { text: "分析人均预算...", status: "done" },
                      { text: "分析地域特点...", status: "done" },
                      { text: "生成客户画像报告...", status: "done" }
                    ],
                  },
                }
              : m,
          ),
        );
        const reportMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "customer_portrait_card",
          content: "为您生成某省烟草集团概览画像",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reportMsg]);
      }, 2500);
      return;
`;
        
        cwContent = cwContent.substring(0, blockStart) + newBlock + cwContent.substring(nextBlock);
        fs.writeFileSync(cwPath, cwContent, 'utf8');
        console.log('Replaced logic block');
    }
}
