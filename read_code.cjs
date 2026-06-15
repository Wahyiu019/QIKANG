const fs = require('fs');
const lines = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8').split('\n');
console.log(lines.slice(2000, 2150).join('\n'));
