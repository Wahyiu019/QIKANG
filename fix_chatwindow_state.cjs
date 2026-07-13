const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/const \[awaitingStProductInfo, setAwaitingStProductInfo\] = useState\(false\);/g, `const [awaitingStProductInfo, setAwaitingStProductInfo] = useState(false);
  const [awaitingNewPkg, setAwaitingNewPkg] = useState(false);`);

const askMoreStr = `    } else if (text === "[重新推荐]") {
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
      return;`;

const newAskMoreStr = `    } else if (text === "[重新推荐]") {
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
        setAwaitingNewPkg(true);
        setIsTyping(false);
      }, 500);
      return;`;

code = code.replace(askMoreStr, newAskMoreStr);
code = code.replace(askMoreStr, newAskMoreStr);

const appendLogic = `    } else if (awaitingNewPkg && text) {
      setAwaitingNewPkg(false);
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在根据新需求调整套餐...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "分析新的套餐需求...", status: "complete" },
            { id: "2", text: "重新匹配标品套餐...", status: "loading" },
            { id: "3", text: "生成新套餐卡片...", status: "pending" },
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
            id: Date.now().toString() + "_pkg_new",
            sender: "bot",
            type: "package_option_card",
            content: "推荐标品套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版（优化版）",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: "3,000元", unit: "人/年" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
                    { name: "基层健康档案系统", target: "基层员工", price: "100元", unit: "人/年" }
                  ],
                  features: [
                    "覆盖全院的基础健康档案建立",
                    "7*24小时在线全科医生问诊",
                    "三甲医院重疾绿色通道协助服务",
                    "基础心理健康测评与干预"
                  ]
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版（优化版）",
                  isRecommended: true,
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: "3,000元", unit: "人/年" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
                    { name: "基层健康档案系统", target: "基层员工", price: "100元", unit: "人/年" }
                  ],
                  features: [
                    "覆盖全院的基础健康档案建立",
                    "7*24小时在线全科医生问诊",
                    "三甲医院重疾绿色通道协助服务",
                    "基础心理健康测评与干预"
                  ]
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版（优化版）",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: "5,000元", unit: "人/年" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: "1,500元", unit: "人/年" },
                    { name: "基层健康档案系统", target: "基层员工", price: "200元", unit: "人/年" }
                  ],
                  features: [
                    "覆盖全院的基础健康档案建立",
                    "7*24小时在线全科医生问诊",
                    "三甲医院重疾绿色通道协助服务",
                    "基础心理健康测评与干预"
                  ]
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2000);
      return;
    } else if (awaitingStProductInfo && text.startsWith("[附件]")) {`;

code = code.replace(/    } else if \(awaitingStProductInfo && text\.startsWith\("\[附件\]"\)\) {/g, appendLogic);

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log("State updated");
