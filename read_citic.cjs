const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /export function CiticCompetitorAnalysisCard\(\{ data \}: \{ data\?: any \}\) \{[\s\S]*?(?=export function LenovoTechBidAdvantageCard)/;
const match = content.match(regex);
if (match) {
  console.log(match[0].slice(0, 1000));
} else {
  console.log("Not found Citic");
}
