const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/value: '1\. 分层健康管理计划：为高管及核心研发团队提供“黑金”级别私家医生及海外就医绿通服务。\n2\. 驻场及线上问诊服务：为庞大的产线及常驻办公区员工提供便捷医疗服务。\n3\. EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。``/g,
"value: `1. 分层健康管理计划：为高管及核心研发团队提供“黑金”级别私家医生及海外就医绿通服务。\n2. 驻场及线上问诊服务：为庞大的产线及常驻办公区员工提供便捷医疗服务。\n3. EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。\``" // wait I am creating two backticks here again if I'm not careful. no, I need just one backtick.
);

// Better logic: replace ANY double backtick ending with `}` or `,` with a single backtick
code = code.replace(/`` \}/g, "` }");

// Let's specifically target the string:
code = code.replace(/value: '1\. 分层健康([\s\S]*?)`` \}/g, "value: `1. 分层健康$1` }");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed double backticks and unterminated string');
