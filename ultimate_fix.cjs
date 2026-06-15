const fs = require('fs');

let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// I will just decode all \\n to real newlines.
// To handle single/double quotes, whenever a real newline appears inside them, I will mutate the quote to a backtick.

let out = "";
let inString = false;
let quoteChar = '';

for (let i = 0; i < code.length; i++) {
    // If we see \\n, convert it to \n immediately
    if (code[i] === '\\' && code[i+1] === 'n') {
        out += '\n';
        i++;
        continue;
    }

    let char = code[i];

    if (!inString) {
        if (char === "'" || char === '"' || char === '`') {
            inString = true;
            quoteChar = char;
            out += char;
        } else {
            out += char;
        }
    } else {
        if (char === '\\') {
            // escaped char
            out += char;
            out += code[i+1] || '';
            i++;
        } else if (char === quoteChar) {
            inString = false;
            quoteChar = '';
            out += char;
        } else if (char === '\n') {
            if (quoteChar === "'" || quoteChar === '"') {
                // We have a newline inside a single or double quote string!
                // Change the string to a backtick!
                
                // Backtrack and replace the opening quote
                let j = out.length - 1;
                while (j >= 0) {
                    if (out[j] === quoteChar) {
                        // Is it the start of our current string? 
                        // Yes, because we haven't seen the closing one yet.
                        out = out.substring(0, j) + '`' + out.substring(j + 1);
                        break;
                    }
                    j--;
                }
                quoteChar = '`';
                out += char;
            } else {
                out += char;
            }
        } else {
            out += char;
        }
    }
}

fs.writeFileSync('src/components/ChatWindow.tsx', out);
console.log('Successfully un-squashed the file.');
