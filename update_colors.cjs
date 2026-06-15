const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace standard primary tab and card background colors
content = content.replace(/border-blue-500/g, 'border-orange-500');
content = content.replace(/text-blue-600/g, 'text-orange-600');
content = content.replace(/bg-blue-50/g, 'bg-orange-50');
content = content.replace(/text-blue-900/g, 'text-orange-900');
content = content.replace(/border-blue-200/g, 'border-orange-200');
content = content.replace(/text-blue-500/g, 'text-orange-500');
content = content.replace(/text-blue-800/g, 'text-orange-800');
content = content.replace(/border-blue-100/g, 'border-orange-100');

content = content.replace(/text-indigo-900/g, 'text-amber-900');
content = content.replace(/bg-indigo-50/g, 'bg-amber-50');
content = content.replace(/border-indigo-200/g, 'border-amber-200');
content = content.replace(/text-indigo-700/g, 'text-amber-700');
content = content.replace(/text-indigo-500/g, 'text-amber-500');
content = content.replace(/border-indigo-500/g, 'border-amber-500');
content = content.replace(/text-indigo-600/g, 'text-amber-600');
content = content.replace(/border-indigo-100/g, 'border-amber-100');

content = content.replace(/border-emerald-/g, 'border-orange-');
content = content.replace(/text-emerald-/g, 'text-orange-');
content = content.replace(/bg-emerald-/g, 'bg-orange-');

content = content.replace(/text-teal-/g, 'text-amber-');
content = content.replace(/bg-teal-/g, 'bg-amber-');
content = content.replace(/border-teal-/g, 'border-amber-');

fs.writeFileSync(file, content);
