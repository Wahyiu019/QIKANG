const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const targetStr = `    } else if (text === "否" && messages.length > 0 && messages[messages.length - 1].content.includes("是否需要修改")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      setMessages((prev) => [...prev, { id: Date.now().toString() + "_ok", sender: "bot", type: "text", content: "好的，已为您保存当前PPT内容，您可以直接使用或导出。", timestamp: new Date() }]);
      return;
    } else if (text.startsWith("[确认基本信息]")) {`;

const newCode = `    } else if (text === "否" && messages.length > 0 && messages[messages.length - 1].content.includes("是否需要修改")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      setMessages((prev) => [...prev, { id: Date.now().toString() + "_ok", sender: "bot", type: "text", content: "好的，已为您保存当前PPT内容，您可以直接使用或导出。", timestamp: new Date() }]);
      return;
    } else if (text.startsWith("[生成方案]")) {
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在生成营销方案PPT内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "提取已选套餐内容...", status: "complete" },
            { id: "2", text: "调用行业标品PPT模板...", status: "loading" },
            { id: "3", text: "生成定制化PPT内容...", status: "pending" },
          ],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ppt",
            sender: "bot",
            type: "ppt_card",
            content: "营销方案PPT大纲",
            timestamp: new Date(),
            data: {
              title: "明道云标品营销方案PPT大纲",
              overview: "根据明道云所处软件/互联网行业特性及18W预算，结合您选择的推荐套餐，我们为您生成了以下健康保障营销方案PPT内容，您可以直接预览各页大纲：",
              slides: [
                {
                  title: "企康助力明道云打造健康组织",
                  bullets: ["互联网行业面临的亚健康挑战", "高管与核心骨干的身心健康诉求", "系统性健康管理方案的必要性"]
                },
                {
                  title: "明道云专属企康保障方案",
                  bullets: ["方案总览：18W预算下的最优解", "高管尊享绿通服务（解决就医痛点）", "全员健康档案建立（系统性管理起点）"]
                },
                {
                  title: "平安银行生态赋能",
                  bullets: ["平安健康+平安银行的品牌背书", "便捷的线上问诊与线下三甲网络", "专职健康管家服务保障落地"]
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2500);
      return;
    } else if (text === "[重新推荐]") {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask_more",
            sender: "bot",
            type: "text",
            content: "请问您对套餐有哪些进一步的需求或调整建议？",
            timestamp: new Date()
          }
        ]);
        setAwaitingStProductInfo(false); // maybe a different flag, wait, use setAwaitingStProductInfo or something?
        setIsTyping(false);
      }, 500);
      return;
    } else if (text.startsWith("[确认基本信息]")) {`;

let count = 0;
let startIndex = code.indexOf(targetStr);
while(startIndex !== -1) {
  code = code.substring(0, startIndex) + newCode + code.substring(startIndex + targetStr.length);
  count++;
  startIndex = code.indexOf(targetStr, startIndex + newCode.length);
}
console.log("Replaced extra logic chunks:", count);

fs.writeFileSync('src/components/ChatWindow.tsx', code);
