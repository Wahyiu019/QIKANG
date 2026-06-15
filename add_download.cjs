const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

// Insert useRef back correctly
const refHookTarget = `const isBot = message.sender === 'bot';`;
const refHookReplace = `const isBot = message.sender === 'bot';
  const bubbleRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!bubbleRef.current) return;
    const clone = bubbleRef.current.cloneNode(true);
    
    // Remote elements we don't want downloaded
    const actions = clone.querySelectorAll('.download-exclude');
    actions.forEach(a => a.remove());

    const htmlContent = clone.innerHTML;
    const htmlWrapper = \`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>\${message.data?.title || '企康助手报告'}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; background-color: #f9fafb; display: flex; justify-content: center; }
    .download-exclude { display: none !important; }
  </style>
</head>
<body>
  <div style="width: 100%; max-w: 1000px;">
    \${htmlContent}
  </div>
</body>
</html>\`;
    const blob = new Blob([htmlWrapper], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = \`企康助手报告_\${new Date().getTime()}.html\`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };`;

content = content.replace(refHookTarget, refHookReplace);

// Attach ref
const flexColTarget = `className={\`flex flex-col \${isLeft ? 'items-start' : 'items-end'} max-w-[85%] w-full\`}>`;
const flexColReplace = `className={\`flex flex-col \${isLeft ? 'items-start' : 'items-end'} max-w-[85%] w-full\`} ref={bubbleRef}>`;

content = content.replace(flexColTarget, flexColReplace);

// Add button
const buttonTarget = `{isBot && message.type === 'lenovo_tech_bid_advantage' && (
          <LenovoTechBidAdvantageCard data={message.data} />
        )}
      </div>`;

const buttonReplace = `{isBot && message.type === 'lenovo_tech_bid_advantage' && (
          <LenovoTechBidAdvantageCard data={message.data} />
        )}
        {isBot && message.type === 'strategy_card' && (
          <StrategyReportCard data={message.data} />
        )}
        
        {isBot && [
          'report_card', 'survey_report', 'lenovo_panoramic_analysis', 'decision_makers_report',
          'history_cooperation_report', 'visit_pitch_report', 'compliance_analysis_report',
          'bidding_document_analysis_report', 'bid_generation_report', 'bid_inspection_report',
          'standard_product_plan_report', 'case_highlight_report', 'competitor_analysis_report',
          'citic_competitor_analysis', 'lenovo_tech_bid_advantage', 'strategy_card'
        ].includes(message.type) && (
          <div className="mt-3 flex justify-end download-exclude w-full max-w-5xl">
            <button 
              onClick={handleDownload}
              className="flex flex-row items-center justify-center text-sm text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              下载保存至本地
            </button>
          </div>
        )}
      </div>`;

content = content.replace(buttonTarget, buttonReplace);

fs.writeFileSync(file, content);
console.log('done modifying');
