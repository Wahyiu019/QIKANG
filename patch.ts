import fs from 'fs';

const file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `      }, 1500);
      return;
    } else if (text.startsWith("[已提交基本信息]")) {`;

const replacement = `      }, 1500);
      return;
    } else if (text.startsWith("[已选择套餐]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const botResMsg: Message = { id: Date.now().toString()+"_supp", sender: "bot", type: "supplementary_info_form_card", content: "补充信息卡片", timestamp: new Date(), data: {} };
      setMessages(prev => [...prev, botResMsg]);
      return;
    } else if (text.startsWith("[忽略补充信息]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const botResMsg: Message = { id: Date.now().toString()+"_ask_ppt", sender: "bot", type: "text", content: "是否直接为您生成标品营销方案大纲和PPT？", timestamp: new Date() };
      setMessages(prev => [...prev, botResMsg]);
      return;
    } else if (text.startsWith("[已提交补充信息]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId, sender: "bot", type: "reasoning", content: "正在结合补充信息为您推荐更精准的套餐...", timestamp: new Date()
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg_refined",
            sender: "bot",
            type: "package_option_card",
            content: "套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "p1_refined",
                  name: "高管尊享精准版",
                  price: "年度总预算估算：85万元",
                  features: [
                     "定向颈椎/腰椎等职业病康复特训",
                     "高管专属绿色就医通道保障",
                     "7×24小时在线全科医生问诊"
                  ]
                },
                {
                  id: "p2_refined",
                  name: "全场景黑金尊享加强版",
                  price: "年度总预算估算：150万元",
                  features: [
                    "包含高管专属版的所有服务",
                    "心理压力大定向EAP深度干预",
                    "MDT多学科顶尖专家会诊支持",
                    "定制化驻场企业医务室全程运营"
                  ]
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 1500);
      return;
    } else if (text.startsWith("[已提交基本信息]")) {`;

content = content.split(targetStr).join(replacement);
fs.writeFileSync(file, content);

console.log("Patched ChatWindow.tsx gracefully.");
