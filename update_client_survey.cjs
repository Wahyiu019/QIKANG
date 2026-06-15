const fs = require('fs');

const cwPath = 'src/components/ChatWindow.tsx';
let cwContent = fs.readFileSync(cwPath, 'utf8');

const promptStr = '生成某省烟草集团的客户画像。人员约8000+人，高层员工：800人，核心员工6000人，在职人员平均35岁占比68%，男性员工4500+人，内勤员工：7000人，预算在600~800w左右';

// 1. replace in QUICK_SKILLS
cwContent = cwContent.replace(
  /{ title: "客户信息调研", prompt: "#客户信息调研#" }/g,
  `{ title: "客户信息调研", prompt: "${promptStr}" }`
);

// 2. replace in EXPERTS
cwContent = cwContent.replace(
  /客户信息调研: "#客户信息调研#"/g,
  `客户信息调研: "${promptStr}"`
);

cwContent = cwContent.replace(
  /text.includes\("#客户信息调研#"\)/g,
  `text.includes("${promptStr.substring(0, 50)}") || text.includes("#客户信息调研#")`
);

fs.writeFileSync(cwPath, cwContent, 'utf8');
console.log('Updated ChatWindow texts');
