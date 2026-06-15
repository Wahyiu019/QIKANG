const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const newCard = `
export function LenovoPanoramicCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          {/* generic search/chart icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
          联想全景分析画像
        </div>
      </div>
      <div className="p-5 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
        
        {/* 企业概况 */}
        <div className="bg-orange-50/80 border border-orange-100 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-3">一、企业概况</h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-2 border border-orange-100 rounded">
              <span className="font-bold text-orange-800 block mb-1">基本信息</span>
              员工规模：75,000+<br/>
              所属行业：IT互联网 / 智能终端设备<br/>
              企业类型：民营制造/跨国企业
            </div>
            <div className="bg-white p-2 border border-orange-100 rounded">
              <span className="font-bold text-orange-800 block mb-1">健康管理核心痛点</span>
              1. 研发人员工作压力大，存在猝死及心理健康隐患；<br/>
              2. 生产线员工易发职业病，亟需工伤预防体系；<br/>
              3. 高管缺乏专属的健康管理绿色通道。
            </div>
          </div>
        </div>

        {/* 既往业务 */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-gray-800 border-b border-gray-200 pb-2 mb-3">二、内部业务往来与存量挖掘</h4>
          <ul className="text-xs text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-0.5">•</span>
              <div>
                <strong>既往合作基础（产险/寿险/养老险）：</strong>
                <p className="text-gray-500 mt-0.5">平安产险已承保联想部分园区财产险；平安寿险有部分高管的团体意外险合作；合作金额超百万，建立了初步信任。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-0.5">•</span>
              <div>
                <strong>健康业务空白（企康切入）：</strong>
                <p className="text-gray-500 mt-0.5">当前在年度体检、员工EAP心理疏导、重疾绿通增值服务上尚无深入合作，是企康业务的"破冰点"。</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* 合作机会挖掘 */}
        <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">三、潜在合作机会与策略建议</h4>
          <div className="space-y-3">
             <div className="bg-white p-3 border border-amber-100 rounded text-xs">
                <span className="font-bold text-amber-800 flex items-center mb-1">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>
                  机会一：高管白金健康服务计划 (单点突破)
                </span>
                <p className="text-gray-600">联想注重高管关怀，可推销包含百强三甲医院直连挂号、MDT多学科会诊的高端医疗服务作为敲门砖。</p>
             </div>
             <div className="bg-white p-3 border border-amber-100 rounded text-xs">
                <span className="font-bold text-amber-800 flex items-center mb-1">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>
                  机会二：研发体系EAP定制项目 (全面覆盖)
                </span>
                <p className="text-gray-600">针对北京、深圳等研发中心的压力问题，输出"在线心理问诊 + 驻场医师"的定制心理辅导专案。</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

`;

content = content.replace(/export function StandardProductPlanCard/, newCard + 'export function StandardProductPlanCard');

fs.writeFileSync(file, content);
console.log('Done!');
