const fs = require('fs');
let file = 'src/types.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/'citic_competitor_analysis';/, "'citic_competitor_analysis' | 'lenovo_tech_bid_advantage';");
fs.writeFileSync(file, content);
console.log('Modified types.ts successfully.');
