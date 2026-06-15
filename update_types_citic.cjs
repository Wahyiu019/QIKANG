const fs = require('fs');
let file = 'src/types.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/'lenovo_panoramic_analysis';/, "'lenovo_panoramic_analysis' | 'citic_competitor_analysis';");
fs.writeFileSync(file, content);
console.log('Modified types.ts successfully.');
