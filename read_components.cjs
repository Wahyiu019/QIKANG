const fs = require('fs');
const file = 'src/components/MessageBubble.tsx';
const lines = fs.readFileSync(file, 'utf8').split('\n');

function printRange(start, end) {
  console.log(`=== LINES ${start} to ${end} ===`);
  console.log(lines.slice(start - 1, end).join('\n'));
}

printRange(1255, 1295); // LenovoPanoramicCard start
printRange(1652, 1692); // LenovoTechBidAdvantageCard start
printRange(1868, 1910); // CiticCompetitorAnalysisCard start
printRange(2053, 2095); // CompetitorAnalysisCard start
