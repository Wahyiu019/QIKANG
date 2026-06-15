const fs = require('fs');

let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(
    /value: '1\. 分层健康管理计划：为高管及核心研发团队提供“黑金”级别私家医生及海外就医绿通服务。\n2\. 驻场及线上问诊服务：为庞大的产线及常驻办公区员工提供便捷医疗服务。\n3\. EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。`/g,
    "value: `1. 分层健康管理计划：为高管及核心研发团队提供“黑金”级别私家医生及海外就医绿通服务。\n2. 驻场及线上问诊服务：为庞大的产线及常驻办公区员工提供便捷医疗服务。\n3. EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。\``" // wait, backtick at the end? it should be just backtick
);

// Better regex:
code = code.replace(/value: '1\. 分层健康管理计划([^`]+)`/g, "value: `1. 分层健康管理计划$1`");

// Let's also catch any other `'... \n ... \``
code = code.replace(/'([^'\n]*\n[^`]*)`/g, "`$1`");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed multiline string quotes');
