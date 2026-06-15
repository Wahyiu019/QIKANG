const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/md:flex-row/g, '');
content = content.replace(/md:items-center/g, ''); // Since they are now col, center might not make sense for row
content = content.replace(/w-1\/2/g, 'w-full'); // Also just in case any fixed widths
content = content.replace(/md:w-1\/2/g, 'w-full');
content = content.replace(/lg:w-1\/2/g, 'w-full');
content = content.replace(/md:w-1\/3/g, 'w-full');
content = content.replace(/lg:w-1\/3/g, 'w-full');

// Also remove `w-64` inside competitive layout that I wrote earlier, as it might restrict width in single column
content = content.replace(/md:w-64/g, 'w-full');

fs.writeFileSync(file, content);
console.log('flex row fixed');
