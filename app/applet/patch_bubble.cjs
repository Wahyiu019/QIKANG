const fs = require('fs');

let mb = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');
const targetComp = fs.readFileSync('QuoteAuth.tsx', 'utf8');

if (!mb.includes('export function QuoteAuthCenterCard')) {
  mb += '\n\n' + targetComp;

  const renderTarget = '        {isBot && message.type === "product_match_assessment" && (\n          <div className="mt-2 w-full">\n            <ProductMatchAssessmentCard />\n          </div>\n        )}';
  const renderRes = renderTarget + '\n        {isBot && message.type === "quote_auth_center" && (\n          <div className="mt-2 w-full">\n            <QuoteAuthCenterCard />\n          </div>\n        )}';

  if (mb.includes(renderTarget)) {
    mb = mb.replace(renderTarget, renderRes);
    fs.writeFileSync('src/components/MessageBubble.tsx', mb, 'utf8');
    console.log('patched bubble');
  } else {
    console.log('renderTarget not found');
  }
} else {
  console.log('already exists');
}
