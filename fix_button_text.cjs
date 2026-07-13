const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

code = code.replace(/<Check size=\{16\} className="mr-1.5" \/> 确认生成方案/g, '<Check size={16} className="mr-1.5" /> 确认');

fs.writeFileSync('src/components/MessageBubble.tsx', code);
console.log("Button text updated");
