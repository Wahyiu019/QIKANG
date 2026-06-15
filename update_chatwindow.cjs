const fs = require('fs');

const cwPath = 'src/components/ChatWindow.tsx';
let cwContent = fs.readFileSync(cwPath, 'utf8');

// 1. Add CustomerPortraitCard to imports from MessageBubble
cwContent = cwContent.replace(
  /export {/g,
  'export {'
); // not needed if it's not exporting, we just import it:
cwContent = cwContent.replace(
  /CiticCompetitorAnalysisCard,/g,
  'CiticCompetitorAnalysisCard, CustomerPortraitCard,'
);
// wait, let's just do a generic import addition
if (!cwContent.includes('CustomerPortraitCard')) {
  cwContent = cwContent.replace(
    /import {\n  HistoryCooperationReportCard,/,
    'import {\\n  CustomerPortraitCard,\\n  HistoryCooperationReportCard,'
  );
}

// 2. Add in render messages loop
if (!cwContent.includes('message.type === "customer_portrait_card"')) {
  // find a good place to insert it, like StrategyReportCard
  cwContent = cwContent.replace(
    /{isBot && message\.type === "strategy_card" && \\(/g,
    \`{isBot && message.type === "customer_portrait_card" && (
          <CustomerPortraitCard />
        )}\\n        {isBot && message.type === "strategy_card" && (\`
  );
}

// 3. Update the logic for 生成某省烟草集团的客户画像
const oldLogicStart = cwContent.indexOf('text.includes("生成某省烟草集团的客户画像。人员约8000+人，高层员工：800人");');
// We need to replace the logic safely... Let's just create a completely explicit script for this.
