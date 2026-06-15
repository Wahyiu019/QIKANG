const fs = require('fs');

const progressCard = `
export function DocParsingProgressCard() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      if (p >= 100) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(p);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-3 font-sans p-4">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600">📄</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-sm">文档解析状态</h3>
          <p className="text-xs text-gray-500">
            {progress < 100 ? "正在解析全文内容..." : "解析已完成"}
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out" 
          style={{ width: \\\`\\\${progress}%\\\` }}
        ></div>
      </div>
      <div className="text-right text-xs font-medium text-blue-600">
        {progress}%
      </div>
    </div>
  );
}
`;

const resultCard = `
export function DocParsingResultCard() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm mt-3 font-sans overflow-hidden">
       <div className="p-4 space-y-4">
         {/* Status */}
         <div>
           <div className="text-sm font-bold text-gray-800 mb-1">状态</div>
           <div className="flex items-center text-sm text-green-700 bg-green-50 px-3 py-2 rounded-md border border-green-100">
             <span className="mr-2">✅</span> 已完成制度解析
           </div>
         </div>
         {/* System Judgment */}
         <div>
           <div className="text-sm font-bold text-gray-800 mb-1">系统研判</div>
           <div className="flex items-center text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-md border border-blue-100">
             <div className="w-4 h-4 mr-2 text-blue-500 flex items-center justify-center animate-spin">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
             </div>
             正在进行责任定义映射与保障缺口识别
           </div>
         </div>
         {/* Opportunity */}
         <div>
           <div className="text-sm font-bold text-gray-800 mb-1">机会洞察</div>
           <div className="flex items-center text-sm text-orange-700 bg-orange-50 px-3 py-2 rounded-md border border-orange-100">
             <span className="mr-2">🔥</span> 发现高价值业务机会
           </div>
         </div>
       </div>
    </div>
  );
}
`;

let content = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');
content += '\n' + progressCard + '\n' + resultCard + '\n';
fs.writeFileSync('src/components/MessageBubble.tsx', content, 'utf8');
