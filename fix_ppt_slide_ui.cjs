const fs = require('fs');

let messageBubbleCode = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const targetStr = `              <div className="relative z-10 flex-1 px-14 py-10 flex flex-col justify-center">
                <ul className="space-y-6">
                  {slides[activeSlide].bullets?.map((b: string, j: number) => (
                    <li key={j} className="flex items-start group">
                      <div className="w-2.5 h-2.5 rounded-sm bg-orange-500 mt-2 mr-4 flex-shrink-0 shadow-sm"></div>
                      <span className="text-xl text-gray-700 leading-relaxed font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>`;

const replaceStr = `              <div className="relative z-10 flex-1 px-14 py-10 flex flex-col justify-center">
                {slides[activeSlide].title?.includes("打造健康组织") ? (
                   <div className="grid grid-cols-3 gap-6 w-full h-full pt-4">
                     <div className="bg-white/80 border border-orange-100 p-5 rounded-xl shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                           <TrendingUp size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2 relative z-10">行业亚健康挑战</h4>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                          {slides[activeSlide].bullets?.[0] || "互联网高强度工作环境下，颈椎病、失眠等亚健康问题频发，严重影响团队整体战斗力。"}
                        </p>
                     </div>
                     <div className="bg-white/80 border border-orange-100 p-5 rounded-xl shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                           <HeartPulse size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2 relative z-10">身心健康核心诉求</h4>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                          {slides[activeSlide].bullets?.[1] || "高管与骨干不仅需要基础医疗保障，更期望获得定制化、私密性强的高端健康管理服务。"}
                        </p>
                     </div>
                     <div className="bg-white/80 border border-orange-100 p-5 rounded-xl shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                           <ShieldCheck size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2 relative z-10">系统性方案必要性</h4>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                          {slides[activeSlide].bullets?.[2] || "亟需构建涵盖“预防-问诊-治疗-康复”的全周期健康管理闭环，提升员工安全感与归属感。"}
                        </p>
                     </div>
                     
                     <div className="col-span-3 mt-4 bg-orange-500 text-white rounded-lg p-4 flex items-center justify-between shadow-sm">
                       <div>
                         <h4 className="font-bold text-lg mb-1">企康综合解决方案</h4>
                         <p className="text-orange-100 text-sm">提供智能化、分层定制的数字化健康管理服务，构建企业级健康福利平台。</p>
                       </div>
                       <div className="flex space-x-4">
                         <div className="text-center px-4 border-r border-orange-400">
                           <div className="text-2xl font-bold">100+</div>
                           <div className="text-xs text-orange-200 mt-1">覆盖城市</div>
                         </div>
                         <div className="text-center px-4 border-r border-orange-400">
                           <div className="text-2xl font-bold">3000+</div>
                           <div className="text-xs text-orange-200 mt-1">合作医院</div>
                         </div>
                         <div className="text-center px-4">
                           <div className="text-2xl font-bold">7x24</div>
                           <div className="text-xs text-orange-200 mt-1">全天候响应</div>
                         </div>
                       </div>
                     </div>
                   </div>
                ) : (
                  <ul className="space-y-6">
                    {slides[activeSlide].bullets?.map((b: string, j: number) => (
                      <li key={j} className="flex items-start group">
                        <div className="w-2.5 h-2.5 rounded-sm bg-orange-500 mt-2 mr-4 flex-shrink-0 shadow-sm"></div>
                        <span className="text-xl text-gray-700 leading-relaxed font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>`;

if(messageBubbleCode.includes(targetStr)) {
    messageBubbleCode = messageBubbleCode.replace(targetStr, replaceStr);
    fs.writeFileSync('src/components/MessageBubble.tsx', messageBubbleCode);
    console.log("PPT slide updated.");
} else {
    console.log("Could not find PPT slide target.");
}
