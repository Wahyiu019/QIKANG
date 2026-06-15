const fs = require('fs');
let text = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const target1 = `        {isBot && message.type === "doc_risk_opportunity_report" && (
          <div className="mt-2 w-full">
            <DocRiskOpportunityCard />
          </div>
        )}`;

const replacer1 = `        {isBot && message.type === "doc_risk_opportunity_report" && (
          <div className="mt-2 w-full">
            <DocRiskOpportunityCard onConsultation={() => onAction('专家会诊评估申请')} />
          </div>
        )}
        {isBot && message.type === "expert_consultation_report" && (
          <div className="mt-2 w-full">
            <ExpertConsultationCard onGeneratePlan={() => onAction('发起项目方案生成')} />
          </div>
        )}`;

if (text.includes(target1)) {
  text = text.replace(target1, replacer1);
  fs.writeFileSync('src/components/MessageBubble.tsx', text, 'utf8');
  console.log('patched click handler');
} else {
  console.log('not found');
}
