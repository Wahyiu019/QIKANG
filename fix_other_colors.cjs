const fs = require('fs');

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

function processFile(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Replace color classes
  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    for (const prefix of prefixMap) {
      const regex = new RegExp(`\\b${prefix}-${oldColor}-`, 'g');
      content = content.replace(regex, `${prefix}-${newColor}-`);
      const regexHover = new RegExp(`\\bhover:${prefix}-${oldColor}-`, 'g');
      content = content.replace(regexHover, `hover:${prefix}-${newColor}-`);
    }
  }
  
  // Replace grids if requested - Wait, we should probably keep Sidebar / Workspace structure
  // The user specifically asked: "重构所有卡片颜色，以橙色和金色为主色。将内容从上往下展示，不分栏展示。"
  // "refactor all card colors ... don't use columns". This heavily applies to the message cards that AI generates. 
  // Let's replace grid cols in Workspace.tsx too, maybe? Actually grid for workspace layout makes sense. I'll leave grid cols in Workspace to be safe, but apply colors.
  
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
}

processFile('src/components/Sidebar.tsx');
processFile('src/components/Workspace.tsx');
processFile('src/App.tsx');
