const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Un-squash all the `\n` literals that are corrupting the AST
code = code.replace(/\\n/g, '\n');

// Wait, the previous string for "tactics" had actual multi-line strings using single quotes!
// Single quotes don't support multi-line strings in JS!
// We must convert the following specifically:

const badIsCEO = `'【客户维系建议】：
1. 产品触达：在日常沟通中，结合客户需求与场景，适度推荐公司的重点/金牌产品信息，提升客户认知与兴趣；
2. 体验运营：定期邀请客户参与健康管理相关的线下体验活动（如体检升级、健康讲座、沙龙等），增强互动与信任；
3. 节日关怀：在关键节假日主动进行关怀触达，通过定制化问候与关怀内容，持续维护客户关系。'`;

// When we replace `\n` with newline, this becomes an actual newline inside a single quote!
// This will cause a syntax error: "Unterminated string constant".
// Let's use backticks for those!

code = code.replace(/'【客户维系建议】：\n1/g, "`【客户维系建议】：\n1");
code = code.replace(/持续维护客户关系。'/g, "持续维护客户关系。`");

code = code.replace(/'1. 分层健康管理计划：为高管/g, "`1. 分层健康管理计划：为高管");
code = code.replace(/EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。'/g, "EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。`");


fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed file.');
