const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/'([^'`\n]+)`/g, "'$1'");
code = code.replace(/`([^'`\n]+)'/g, "`$1`");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed mixed quotes');
