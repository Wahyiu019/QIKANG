const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /export function LenovoPanoramicCard\(\{ data \}: \{ data\?: any \}\) \{[\s\S]*?(?=export function StandardProductPlanCard)/;
const match = content.match(regex);
if (match) {
  let cardContent = match[0];
  // replace red colors
  cardContent = cardContent.replace(/red-/g, 'orange-');
  cardContent = cardContent.replace(/text-red-/g, 'text-orange-');
  cardContent = cardContent.replace(/bg-red-/g, 'bg-orange-');
  cardContent = cardContent.replace(/border-red-/g, 'border-orange-');
  
  // ensure main colors are orange/gold
  cardContent = cardContent.replace(/from-red-/g, 'from-orange-');
  cardContent = cardContent.replace(/via-red-/g, 'via-orange-');
  cardContent = cardContent.replace(/to-red-/g, 'to-yellow-');
  
  content = content.replace(regex, cardContent);
  fs.writeFileSync(file, content);
  console.log('Modified LenovoPanoramicCard updated successfully.');
} else {
  console.log('LenovoPanoramicCard not found');
}
