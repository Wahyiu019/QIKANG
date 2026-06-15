const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Replace any import ... from '...' that ended with ` instead of '
code = code.replace(/from '([^'`\n]+)`/g, "from '$1'");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed imports again');
