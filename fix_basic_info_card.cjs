const fs = require('fs');

let messageBubbleCode = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const targetBasicInfoCardStr = `function BasicInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {`;
const startBasicInfoIdx = messageBubbleCode.indexOf(targetBasicInfoCardStr);
const endBasicInfoIdx = messageBubbleCode.indexOf(`function PackageOptionCard`, startBasicInfoIdx);

const newBasicInfoCard = `function BasicInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {
  const [formData, setFormData] = React.useState({
    channel: "银行",
    customerName: data?.customerName || "明道云",
    industry: "软件/互联网",
    healthPainPoints: "员工亚健康问题严重，高管缺乏就医绿通，整体缺乏系统性健康管理方案",
    budget: data?.budget || "18W",
  });
  
  React.useEffect(() => {
    if (data?.customerName) {
      setFormData(prev => ({ ...prev, customerName: data.customerName, budget: data.budget || prev.budget }));
    }
  }, [data]);

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (onSend) {
      onSend(\`[确认基本信息]\`);
    }
  };

  return (
    <div className="mt-2 w-full max-w-2xl bg-white border border-orange-200 rounded-xl shadow-lg overflow-hidden relative">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-rose-400/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-gradient-to-tr from-amber-400/20 to-orange-300/20 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-3 flex items-center justify-between shadow-sm relative z-10">
        <div className="flex items-center space-x-2 text-white">
          <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
            <Building2 size={16} className="text-white" />
          </div>
          <h3 className="font-bold text-sm tracking-wide">企业信息搜索结果</h3>
        </div>
        <div className="px-2 py-0.5 bg-white/20 rounded text-xs text-white/90 backdrop-blur-sm flex items-center">
          <Sparkles size={12} className="mr-1" />
          AI 自动匹配
        </div>
      </div>
      
      <div className="p-4 space-y-3 bg-gradient-to-b from-white/90 to-orange-50/50 backdrop-blur-sm relative z-10">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg border border-orange-100/50 p-2.5 shadow-sm flex items-center hover:border-orange-200 transition-colors">
            <div className="w-16 text-gray-500 font-medium text-xs flex items-center"><MapPin size={12} className="mr-1"/> 所属渠道</div>
            <input type="text" className="flex-1 border-none bg-transparent focus:ring-0 text-gray-900 text-xs p-0 font-semibold" disabled={submitted} value={formData.channel} onChange={(e) => setFormData({...formData, channel: e.target.value})} />
          </div>
          
          <div className="bg-white rounded-lg border border-orange-100/50 p-2.5 shadow-sm flex items-center hover:border-orange-200 transition-colors">
             <div className="w-16 text-gray-500 font-medium text-xs flex items-center"><Briefcase size={12} className="mr-1"/> 行业</div>
             <input type="text" className="flex-1 border-none bg-transparent focus:ring-0 text-gray-900 text-xs p-0 font-semibold" disabled={submitted} value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg border border-orange-100/50 p-2.5 shadow-sm flex items-center hover:border-orange-200 transition-colors">
            <div className="w-16 text-gray-500 font-medium text-xs flex items-center"><Users size={12} className="mr-1"/> 客户名称</div>
            <input type="text" className="flex-1 border-none bg-transparent focus:ring-0 text-gray-900 text-xs p-0 font-semibold" disabled={submitted} value={formData.customerName} onChange={(e) => setFormData({...formData, customerName: e.target.value})} />
          </div>
          
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-2.5 shadow-sm flex items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-500 rounded-bl-full opacity-20"></div>
             <div className="w-16 text-orange-600 font-bold text-xs flex items-center"><DollarSign size={12} className="mr-0.5"/> 预算</div>
             <input type="text" className="flex-1 border-none bg-transparent focus:ring-0 text-orange-700 text-xs p-0 font-bold" disabled={submitted} value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-orange-100/50 p-3 shadow-sm hover:border-orange-200 transition-colors">
          <div className="text-gray-500 font-medium text-xs mb-1.5 flex items-center"><HeartPulse size={12} className="mr-1"/> 健康痛点</div>
          <textarea className="w-full border-none bg-gray-50 rounded p-2 focus:ring-1 focus:ring-orange-200 text-gray-800 text-xs resize-none font-medium leading-relaxed" disabled={submitted} value={formData.healthPainPoints} rows={2} onChange={(e) => setFormData({...formData, healthPainPoints: e.target.value})} />
        </div>

        {!submitted && (
          <div className="pt-2 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm rounded-lg font-bold shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:-translate-y-0.5 flex items-center"
            >
              <Check size={16} className="mr-1.5" /> 确认生成方案
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
`;

if(startBasicInfoIdx !== -1 && endBasicInfoIdx !== -1) {
    messageBubbleCode = messageBubbleCode.substring(0, startBasicInfoIdx) + newBasicInfoCard + '\n' + messageBubbleCode.substring(endBasicInfoIdx);
    fs.writeFileSync('src/components/MessageBubble.tsx', messageBubbleCode);
    console.log("BasicInfoFormCard updated.");
} else {
    console.log("Could not find BasicInfoFormCard in MessageBubble.tsx");
}
