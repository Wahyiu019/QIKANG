const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/e\.key === `Enter' /g, "e.key === 'Enter' ");
// Let's do a broader fix: any backtick that is immediately followed by a normal word and then a single quote?
code = code.replace(/`([^`\n]+?)'/g, "'$1'");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed Enter string');
