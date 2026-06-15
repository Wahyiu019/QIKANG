const fs = require('fs');

let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// The file has syntax errors due to malformed string literals. Let's fix them all.

// 1. tactics block
// Let's just find "tactics: isCEO" and replace everything until "todos: isCEO".
let parts = code.split('tactics: isCEO');
if (parts.length > 1) {
    let secondPart = parts[1];
    let todosIdx = secondPart.indexOf('todos: isCEO');
    if (todosIdx !== -1) {
        let fixedBlock = ` ? \`【客户维系建议】：\n1. 产品触达：在日常沟通中，结合客户需求与场景，适度推荐公司的重点/金牌产品信息，提升客户认知与兴趣；\n2. 体验运营：定期邀请客户参与健康管理相关的线下体验活动（如体检升级、健康讲座、沙龙等），增强互动与信任；\n3. 节日关怀：在关键节假日主动进行关怀触达，通过定制化问候与关怀内容，持续维护客户关系。\` : \`【客户维系建议】：\n1. 产品触达：在日常沟通中，结合客户需求与场景，适度推荐公司的重点/金牌产品信息，提升客户认知与兴趣；\n2. 体验运营：定期邀请客户参与健康管理相关的线下体验活动（如体检升级、健康讲座、沙龙等），增强互动与信任；\n3. 节日关怀：在关键节假日主动进行关怀触达，通过定制化问候与关怀内容，持续维护客户关系。\`, \n            `;
        code = parts[0] + 'tactics: isCEO' + fixedBlock + secondPart.substring(todosIdx);
    }
}

// 2. label: '商机洞察（重点）'
code = code.replace(/{ label: '商机洞察（重点）', value: ['`][^}]*}[,]*/g, "{ label: '商机洞察（重点）', value: `1. 分层健康管理计划：为高管及核心研发团队提供“黑金”级别私家医生及海外就医绿通服务。\n2. 驻场及线上问诊服务：为庞大的产线及常驻办公区员工提供便捷医疗服务。\n3. EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。` },");

// Find any literal block starting with "{ label: '商机洞察" and fix it manually.
let bp = code.split("{ label: '商机洞察（重点）', value:");
if (bp.length > 1) {
    let secondPart = bp[1];
    let endIdx = secondPart.indexOf('},');
    if (endIdx !== -1) {
        code = bp[0] + "{ label: '商机洞察（重点）', value: `1. 分层健康管理计划：为高管及核心研发团队提供“黑金”级别私家医生及海外就医绿通服务。\n2. 驻场及线上问诊服务：为庞大的产线及常驻办公区员工提供便捷医疗服务。\n3. EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。` }," + secondPart.substring(endIdx + 2);
    }
}

// 3. Fix the "你好！我是你的专属企康助手" string.
let helloParts = code.split("'你好！我是你的专属企康助手。");
if (helloParts.length > 1) {
    let endIdx = helloParts[1].indexOf("',");
    if (endIdx !== -1) {
        code = helloParts[0] + "`你好！我是你的专属企康助手。\n我可以帮你领商机、客户洞察、陪展等。今天想从哪个任务开始？`," + helloParts[1].substring(endIdx + 2);
    }
}

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed syntax errors.');
