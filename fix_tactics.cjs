const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'ChatWindow.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// I'll replace the block using regex.
const brokenTacticsPattern = /tactics: isCEO \s*\? '【客户维系建议】：\n1\. 产品触达.*?持续维护客户关系。' \s*: '【客户维系建议】：\n1\. 产品触达.*?持续维护客户关系。',/s;

const fixedTactics = `tactics: isCEO 
              ? '【客户维系建议】：\\n1. 产品触达：在日常沟通中，结合客户需求与场景，适度推荐公司的重点/金牌产品信息，提升客户认知与兴趣；\\n2. 体验运营：定期邀请客户参与健康管理相关的线下体验活动（如体检升级、健康讲座、沙龙等），增强互动与信任；\\n3. 节日关怀：在关键节假日主动进行关怀触达，通过定制化问候与关怀内容，持续维护客户关系。' 
              : '【客户维系建议】：\\n1. 产品触达：在日常沟通中，结合客户需求与场景，适度推荐公司的重点/金牌产品信息，提升客户认知与兴趣；\\n2. 体验运营：定期邀请客户参与健康管理相关的线下体验活动（如体检升级、健康讲座、沙龙等），增强互动与信任；\\n3. 节日关怀：在关键节假日主动进行关怀触达，通过定制化问候与关怀内容，持续维护客户关系。',`;

content = content.replace(brokenTacticsPattern, fixedTactics);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed broken tactics string');
