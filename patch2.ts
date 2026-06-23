import fs from 'fs';

const file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `    } else if (text.startsWith("[已选择套餐]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const botResMsg: Message = { id: Date.now().toString()+"_supp", sender: "bot", type: "supplementary_info_form_card", content: "补充信息卡片", timestamp: new Date(), data: {} };
      setMessages(prev => [...prev, botResMsg]);
      return;`;

const replacement = `    } else if (text.startsWith("[已选择套餐]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const botResMsg: Message = { id: Date.now().toString()+"_supp", sender: "bot", type: "supplementary_info_form_card", content: "补充信息卡片", timestamp: new Date(), data: { highLevelCount: 200, coreCount: 1800, baseCount: 6000, retireeRatio: "5%", activeRatio: "95%", avgAge: 35, maxAgeGroup: "30~40", maleCount: 4500, femaleCount: 3500, indoorCount: 3000, outdoorCount: 5000 } };
      setMessages(prev => [...prev, botResMsg]);
      return;`;

content = content.split(targetStr).join(replacement);
fs.writeFileSync(file, content);

console.log("Patched ChatWindow.tsx gracefully.");
