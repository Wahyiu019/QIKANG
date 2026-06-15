const fs = require('fs');

let file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const colorMap = {
  blue: 'orange',
  indigo: 'amber',
  emerald: 'yellow',
  green: 'yellow',
  red: 'orange',
  purple: 'amber',
  violet: 'yellow',
  cyan: 'orange',
  teal: 'amber',
  sky: 'yellow',
  rose: 'orange',
  pink: 'amber',
  fuchsia: 'yellow'
};

const prefixMap = ['bg', 'text', 'border', 'from', 'to', 'via', 'ring', 'shadow'];

// Replace color classes
for (const [oldColor, newColor] of Object.entries(colorMap)) {
  for (const prefix of prefixMap) {
    const regex = new RegExp(`\\b${prefix}-${oldColor}-`, 'g');
    content = content.replace(regex, `${prefix}-${newColor}-`);
    const regexHover = new RegExp(`\\bhover:${prefix}-${oldColor}-`, 'g');
    content = content.replace(regexHover, `hover:${prefix}-${newColor}-`);
  }
}

// Replace grid columns
content = content.replace(/\bgrid-cols-\d+\b/g, 'grid-cols-1');
content = content.replace(/\bmd:grid-cols-\d+\b/g, 'md:grid-cols-1');
content = content.replace(/\blg:grid-cols-\d+\b/g, 'lg:grid-cols-1');
content = content.replace(/\bxl:grid-cols-\d+\b/g, 'xl:grid-cols-1');
content = content.replace(/\bcol-span-\d+\b/g, 'col-span-1 border-b pb-4 mb-4'); 
content = content.replace(/\bmd:col-span-\d+\b/g, ''); 

// Flex properties
content = content.replace(/md:flex-row/g, '');
content = content.replace(/md:items-center/g, '');

fs.writeFileSync(file, content);
console.log('ChatWindow colors fixed');
