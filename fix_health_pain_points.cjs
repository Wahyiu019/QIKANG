const fs = require('fs');

let messageBubbleCode = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

// Remove healthPainPoints from state
messageBubbleCode = messageBubbleCode.replace(
  /healthPainPoints: "员工亚健康问题严重，高管缺乏就医绿通，整体缺乏系统性健康管理方案",\n\s*/,
  ''
);

// Remove the healthPainPoints text area block
const textAreaBlock = `        <div className="bg-white rounded-lg border border-orange-100/50 p-3 shadow-sm hover:border-orange-200 transition-colors">
          <div className="text-gray-500 font-medium text-xs mb-1.5 flex items-center"><HeartPulse size={12} className="mr-1"/> 健康痛点</div>
          <textarea className="w-full border-none bg-gray-50 rounded p-2 focus:ring-1 focus:ring-orange-200 text-gray-800 text-xs resize-none font-medium leading-relaxed" disabled={submitted} value={formData.healthPainPoints} rows={2} onChange={(e) => setFormData({...formData, healthPainPoints: e.target.value})} />
        </div>`;

messageBubbleCode = messageBubbleCode.replace(textAreaBlock, '');

fs.writeFileSync('src/components/MessageBubble.tsx', messageBubbleCode);
console.log("MessageBubble pain points removed.");

let chatWindowCode = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

chatWindowCode = chatWindowCode.replace(/分析所属行业及健康痛点\.\.\./g, '分析所属行业...');

fs.writeFileSync('src/components/ChatWindow.tsx', chatWindowCode);
console.log("ChatWindow pain points text removed.");
