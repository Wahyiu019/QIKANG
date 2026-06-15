const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// The regex `/[^'\n]*\n[^`]*`/ replaced `from 'react';` to `from \`react`;`
// Let's replace it back!
code = code.replace(/import React, \{ useState, useRef, useEffect \} from `react`;\n/, "import React, { useState, useRef, useEffect } from 'react';\n");

// And maybe other imports?
code = code.replace(/from `([^`\n]+)`;\n/g, "from '$1';\n");

// What about `<div className={\`flex-1 ... \`}>` ? It's probably fine.

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed imports');
