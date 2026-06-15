const fs = require('fs');
const content = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

// We know the function names are:
// 1. LenovoPanoramicCard
// 2. StandardProductPlanCard is the next component after LenovoPanoramicCard
// 3. LenovoTechBidAdvantageCard
// 4. CiticCompetitorAnalysisCard
// 5. CompetitorAnalysisCard
// 6. StrategyReportCard

function extract(startFunc, nextFunc, outName) {
  const startIdx = content.indexOf(`export function ${startFunc}`);
  const endIdx = content.indexOf(`export function ${nextFunc}`);
  if (startIdx !== -1 && endIdx !== -1) {
    const code = content.slice(startIdx, endIdx);
    fs.writeFileSync(outName, code);
    console.log(`Extracted ${startFunc} to ${outName} (${code.split('\n').length} lines)`);
  } else {
    console.log(`Failed to extract ${startFunc} (start: ${startIdx !== -1}, end: ${endIdx !== -1})`);
  }
}

extract('LenovoPanoramicCard', 'StandardProductPlanCard', 'lenovo_pan.txt');
extract('LenovoTechBidAdvantageCard', 'CiticCompetitorAnalysisCard', 'lenovo_tech.txt');
extract('CiticCompetitorAnalysisCard', 'CompetitorAnalysisCard', 'citic.txt');
extract('CompetitorAnalysisCard', 'StrategyReportCard', 'competitor.txt');
