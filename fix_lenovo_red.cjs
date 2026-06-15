const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/bg-\[\#E2231A\]/g, 'bg-orange-600');
content = content.replace(/text-\[\#E2231A\]/g, 'text-orange-600');
content = content.replace(/from-\[\#E2231A\]/g, 'from-orange-600');

fs.writeFileSync(file, content);
console.log('Fixed Lenovo Red');
