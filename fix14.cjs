const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/pitch: '【痛点切入】([^']*?)'/g, "pitch: `【痛点切入】$1`");

// Are there any other `pitch: '` spanning newlines? Let's fix them all!
code = code.replace(/pitch: '([^']*?)'/g, "pitch: `$1`");

// Any other strings that span multiple lines using `'`?
code = code.replace(/: '([^']*?\n[^']*?)'/g, ": `$1`");

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed pitches and other multiline single quotes');
