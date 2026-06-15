const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /export function CiticCompetitorAnalysisCard\(\{ data \}: \{ data\?: any \}\) \{[\s\S]*?(?=export function CompetitorAnalysisCard)/;
const match = content.match(regex);
if (match) {
  let card = match[0];
  
  card = card.replace(
    /本次投标最大对手是 <strong>袋鼠健康<\/strong> 和 <strong>德安健康<\/strong>，其次是 <strong>善诊<\/strong>。我方制胜关键在于强调全职医疗团队的重履约属性与平安品牌背书，主打医疗质量防线。/g,
    '本次投标最大对手是 <strong>爱康国宾</strong> 和 <strong>泰康保险集团</strong>。我方制胜关键在于强调全职医疗团队的重履约属性与合规隔离，直击对手服务同质化与业务连带推销的软肋。'
  );

  content = content.replace(regex, card);
  fs.writeFileSync(file, content);
  console.log("Card found and updated!");
} else {
  console.log("Not found Citic");
}
