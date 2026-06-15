const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/bg-red-50/g, 'bg-orange-50');

fs.writeFileSync(file, content);
console.log('Fixed red-50');
