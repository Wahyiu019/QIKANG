const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const startIdx = code.indexOf('function BasicInfoFormCard');
const endIdx = code.indexOf('function PackageOptionCard', startIdx);
if (startIdx === -1 || endIdx === -1) {
  console.log("Could not find BasicInfoFormCard");
  process.exit(1);
}

const newCardStr = `function BasicInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {
  const [formData, setFormData] = React.useState({
    channel: "银行",
    customerName: data?.customerName || "明道云",
    industry: "软件/互联网",
    budget: data?.budget || "18W",
    scale: "300人"
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
    <div className="mt-2 w-full max-w-2xl bg-[#FFF6ED] border border-orange-100 rounded-xl shadow-sm p-5 relative">
      <div className="flex items-center space-x-2 mb-6">
        <div className="text-orange-500 drop-shadow-sm flex items-center justify-center">
          <Building2 size={24} className="fill-orange-400 text-orange-500" strokeWidth={1.5} />
        </div>
        <h3 className="font-bold text-[15px] text-gray-800 tracking-wide">企业信息搜索结果</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
        <div className="flex items-center">
          <div className="w-20 text-gray-700 font-bold text-[13px] text-right shrink-0">销售渠道：</div>
          <input 
            type="text" 
            className="flex-1 border-none bg-white rounded-full shadow-sm focus:ring-1 focus:ring-orange-300 text-gray-600 text-[13px] py-1.5 px-3 ml-2 font-medium" 
            disabled={submitted} 
            value={formData.channel} 
            onChange={(e) => setFormData({...formData, channel: e.target.value})} 
          />
        </div>
        <div className="flex items-center">
          <div className="w-20 text-gray-700 font-bold text-[13px] text-right shrink-0">客户名称：</div>
          <input 
            type="text" 
            className="flex-1 border-none bg-white rounded-full shadow-sm focus:ring-1 focus:ring-orange-300 text-gray-600 text-[13px] py-1.5 px-3 ml-2 font-medium truncate" 
            disabled={submitted} 
            value={formData.customerName} 
            onChange={(e) => setFormData({...formData, customerName: e.target.value})} 
          />
        </div>
        <div className="flex items-center">
          <div className="w-20 text-gray-700 font-bold text-[13px] text-right shrink-0">行业：</div>
          <input 
            type="text" 
            className="flex-1 border-none bg-white rounded-full shadow-sm focus:ring-1 focus:ring-orange-300 text-gray-600 text-[13px] py-1.5 px-3 ml-2 font-medium" 
            disabled={submitted} 
            value={formData.industry} 
            onChange={(e) => setFormData({...formData, industry: e.target.value})} 
          />
        </div>
        <div className="flex items-center">
          <div className="w-20 text-gray-700 font-bold text-[13px] text-right shrink-0">预算：</div>
          <input 
            type="text" 
            className="flex-1 border-none bg-white rounded-full shadow-sm focus:ring-1 focus:ring-orange-300 text-gray-600 text-[13px] py-1.5 px-3 ml-2 font-medium" 
            disabled={submitted} 
            value={formData.budget} 
            onChange={(e) => setFormData({...formData, budget: e.target.value})} 
          />
        </div>
        <div className="flex items-center">
          <div className="w-20 text-gray-700 font-bold text-[13px] text-right shrink-0">规模：</div>
          <input 
            type="text" 
            className="flex-1 border-none bg-white rounded-full shadow-sm focus:ring-1 focus:ring-orange-300 text-gray-600 text-[13px] py-1.5 px-3 ml-2 font-medium" 
            disabled={submitted} 
            value={formData.scale} 
            onChange={(e) => setFormData({...formData, scale: e.target.value})} 
          />
        </div>
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="w-full py-2.5 bg-[#E68A3D] text-white text-[14px] rounded-lg font-bold shadow-sm hover:bg-[#D97D33] transition-colors"
        >
          确认
        </button>
      )}
    </div>
  );
}
`;

code = code.substring(0, startIdx) + newCardStr + code.substring(endIdx);
fs.writeFileSync('src/components/MessageBubble.tsx', code);
console.log("BasicInfoFormCard updated successfully.");
