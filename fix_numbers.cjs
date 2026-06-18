const fs = require('fs');

let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

code = code.replace(
  '<span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">7</span>\n            评分拆解与拿分点',
  '<span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">6</span>\n            评分拆解与拿分点'
);

code = code.replace(
  '<span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">8</span>\n            首日行动与废标风险',
  '<span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">7</span>\n            首日行动与废标风险'
);

fs.writeFileSync('src/components/MessageBubble.tsx', code, 'utf8');
console.log('patched numbers');
