const fs = require('fs');
const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

const compStart = mbContent.indexOf('export function BidGenerationCard({');
const returnStart = mbContent.indexOf('return (', compStart);
const nextCompStart = mbContent.indexOf('export function BidInspectionCard', compStart);

if (compStart !== -1 && returnStart !== -1 && nextCompStart !== -1) {
   const before = mbContent.substring(0, returnStart);
   const after = mbContent.substring(nextCompStart);
   const newReturn = `return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
          某省烟草公司补充医疗投标书（初稿）
        </div>
        <span className="text-white text-xs px-3 py-1 bg-white/20 rounded-full border border-white/30">
          已智能组装 100%
        </span>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 border-l-4 border-orange-500 pl-3">第一版方案输出</h3>
          <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full border border-orange-200">内部机密</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 shadow-sm transform transition-transform hover:scale-[1.02]">
            <h4 className="text-orange-900 font-bold mb-3 flex items-center border-b border-orange-200 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              覆盖评估卡
            </h4>
            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-gray-900 leading-none">78<span className="text-xl">%</span></span>
              <span className="ml-2 text-sm text-gray-500 font-medium mb-1">标准产品可覆盖 (演示)</span>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2 mb-3 mt-2 overflow-hidden">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <p className="text-xs text-gray-600">
              剩余22%为特殊非保项，需法务及精算团队介入二次测算审批。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 shadow-sm transform transition-transform hover:scale-[1.02]">
            <h4 className="text-amber-900 font-bold mb-3 flex items-center border-b border-amber-200 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              建议标准报价
            </h4>
            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-red-600 leading-none">1,620</span>
              <span className="ml-2 text-sm text-gray-600 font-medium mb-1">元/人/年</span>
            </div>
            <p className="text-xs text-amber-700 bg-amber-100/50 px-2 py-1.5 rounded inline-block mt-1 font-medium">
              * 基于历史理赔数据与同业利润率(15%)预测得出
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm mt-4">
          <h4 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">六大核心章节已就绪</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-700">
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 一、投标函及授权文件</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 二、商务资质证明文件</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 三、技术响应文件 (含理赔系统)</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 四、报价明细表</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 五、服务与运营保障体系</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mr-2 flex-shrink-0"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> 六、附加承诺与增值方案 (待定)</li>
          </ul>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button onClick={onDownload} className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            一键下载统装标书 (.docx)
          </button>
        </div>
      )}
    </div>
  );
}
`;
   mbContent = before + newReturn + after;
   fs.writeFileSync(mbPath, mbContent, 'utf8');
   console.log('Successfully updated BidGenerationCard for Scenes 12/13');
} else {
  console.log('Failed to find BidGenerationCard');
}
