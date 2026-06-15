const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /export function LenovoPanoramicCard\(\{ data \}: \{ data\?: any \}\) \{[\s\S]*?(?=export function StandardProductPlanCard)/;
const match = content.match(regex);
if (match) {
  const cardContent = match[0];
  const gridRegex = /grid-cols-\d+|grid cols-|grid /g;
  console.log(cardContent.match(gridRegex));
}
