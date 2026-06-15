const fs = require('fs');

const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

const targetRegex = /<p className="text-sm font-bold text-gray-800">男性 4,840 人 <span className="text-xs text-gray-500 font-normal">\(占比50%\)<\/span><\/p>/;
const replaceStr = `<div className="text-sm font-bold text-gray-800">
                   <div>男性 4,840 人 <span className="text-xs text-gray-500 font-normal">(占比55%)</span></div>
                   <div className="mt-1">女性 4,000 人 <span className="text-xs text-gray-500 font-normal">(占比45%)</span></div>
                 </div>`;

if (targetRegex.test(mbContent)) {
  mbContent = mbContent.replace(targetRegex, replaceStr);
  fs.writeFileSync(mbPath, mbContent, 'utf8');
  console.log('Fixed gender distribution.');
} else {
  console.log('Target string not found.');
}
