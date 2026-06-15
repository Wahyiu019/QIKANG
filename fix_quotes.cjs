const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'ChatWindow.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find all single-quoted strings that contain literal newlines.
// Note: this is tricky. We can use a replacer function on all single quoted blocks.
let fixedContent = "";
let inSingleQuote = false;
let escapeNext = false;
let currentLine = 1;

for (let i = 0; i < content.length; i++) {
  const char = content[i];
  
  if (char === '\\' && !escapeNext) {
    escapeNext = true;
    fixedContent += char;
    continue;
  }
  
  if (char === "'" && !escapeNext) {
    inSingleQuote = !inSingleQuote;
    fixedContent += char;
  } else if (char === '\n') {
    if (inSingleQuote) {
      fixedContent += '\\n';
    } else {
      fixedContent += char;
    }
  } else {
    fixedContent += char;
  }
  
  escapeNext = false;
}

fs.writeFileSync(filePath, fixedContent, 'utf8');
console.log('Fixed multiline single-quoted strings.');
