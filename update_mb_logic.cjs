const fs = require('fs');

const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

if (!mbContent.includes('message.type === "customer_portrait_card"')) {
    const targetStr = '{isBot && message.type === "survey_report" && (';
    const replaceStr = `{isBot && message.type === "customer_portrait_card" && (
          <CustomerPortraitCard />
        )}
        {isBot && message.type === "survey_report" && (` ;
    
    mbContent = mbContent.replace(targetStr, replaceStr);
    fs.writeFileSync(mbPath, mbContent, 'utf8');
    console.log('Injected CustomerPortraitCard into MessageBubble switch');
}
