import fs from 'fs';

function buildReasoningCode(titles, finalMessageType, finalDelay, finalContent = "") {
  let stepsCode = titles.map((t, i) => `{ id: "${i+1}", text: "${t}", status: ${i === 0 ? '"loading"' : '"pending"'} }`).join(',\n            ');
  
  let time = 500;
  let code = `
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用专家技能...",
        timestamp: new Date(),
        data: {
          steps: [
            ${stepsCode}
          ],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);
`;

  titles.forEach((t, i) => {
    if (i < titles.length - 1) {
      code += `
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < ${i+1}
                        ? { ...s, status: "complete" }
                        : idx === ${i+1}
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, ${time += 300});
`;
    } else {
      code += `
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx <= ${i} ? { ...s, status: "complete" } : s
                    ),
                  },
                }
              : m,
          ),
        );
      }, ${time += 300});
`;
    }
  });

  code += `
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "${finalMessageType}",
          content: "${finalContent}",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, botMsg]);
      }, ${time += 100});
`;

  return code;
}

const steps1 = [
  "我要先理解本次招标的核心采购目标",
  "我要识别哪些条款属于硬性门槛",
  "我要找出影响得分的关键评分项",
  "我要分析客户最关注的服务能力",
  "我要确认是否存在特殊责任要求",
  "我要识别可能导致废标的风险点",
  "我要梳理需要提前准备的材料",
  "我要形成可执行的投标策略"
];

const steps2 = [
  "我要确认招标要求对应哪些资质条件",
  "我要判断现有资质是否满足要求",
  "我要寻找最匹配的同类项目案例",
  "我要验证服务网络覆盖能力",
  "我要评估现有方案的覆盖程度",
  "我要识别仍需补充的证明材料",
  "我要找出可能影响中标的短板",
  "我要给出最优响应建议"
];

let cw = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const target2 = \`  */  } else if (text === "#资质业绩匹配#") {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "qual_perf_match_card",
          content: "",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;\`;

const rep2 = \`  */  } else if (text === "#资质业绩匹配#") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      \` + buildReasoningCode(steps2, 'qual_perf_match_card', 3000, '') + \`
      return;\`;

cw = cw.split(target2).join(rep2);


const target1 = \`    } else if (awaitingTenderDocInterpretation && text.startsWith("[附件]")) {
      setAwaitingTenderDocInterpretation(false);
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "bid_doc_interpretation_card",
          content: "",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;\`;

const rep1 = \`    } else if (awaitingTenderDocInterpretation && text.startsWith("[附件]")) {
      setAwaitingTenderDocInterpretation(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      \` + buildReasoningCode(steps1, 'bid_doc_interpretation_card', 3000, '') + \`
      return;\`;

cw = cw.split(target1).join(rep1);

fs.writeFileSync('src/components/ChatWindow.tsx', cw, 'utf8');
console.log('patched ChatWindow');
