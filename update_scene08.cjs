const fs = require('fs');

const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

// Replace standard bidding doc text with Tobacco text
mbContent = mbContent.replace(
  /某大型科技公司2026年度员工健康管理与体检服务采购项目/g,
  '某省烟草公司2024-2027年补充医疗保险服务项目（二次）'
);

mbContent = mbContent.replace(
  /Tender-2026-HC012/g,
  'YNYC-2024-001'
);

mbContent = mbContent.replace(
  /约人民币5,000万元/g,
  '约千万级别'
);

mbContent = mbContent.replace(
  /为提升员工健康水平，提供涵盖全面体检、专家问诊、重疾绿通和心理辅导\(EAP\)的一体化健康管理解决方案。/g,
  '为提升企业补充医疗保障水平，提供涵盖门急诊/住院报销及重疾援助的一体化健康管理解决方案。'
);

// We need to inject the Scene 09 table under requirements or overview
// Currently "activeTab === 'requirements'" shows table for 基础套餐预算
// Let's replace the whole requirements tab content

const reqStartStr = '{activeTab === "requirements" && (';
const scoringStartStr = '{activeTab === "scoring" && (';

let reqStart = mbContent.indexOf(reqStartStr);
let scoringStart = mbContent.indexOf(scoringStartStr, reqStart);

if (reqStart !== -1 && scoringStart !== -1) {
  const customReq = `{activeTab === "requirements" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">
                3、报销范围及起付标准
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                以<strong>《补充医疗保障管理办法》</strong>为准，保障人群覆盖在职、退休及特殊人群。
              </p>
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-amber-100 text-amber-900">
                    <th className="p-2 border border-amber-200 font-bold">字段抽取类别</th>
                    <th className="p-2 border border-amber-200 font-bold">详细规定</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">保障人群</td>
                    <td className="p-2 border border-amber-200">在职/退休/特殊人群</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">报销范围</td>
                    <td className="p-2 border border-amber-200">门诊/急诊/住院</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">统筹起付线</td>
                    <td className="p-2 border border-amber-200">补充医疗从4000起赔</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">企业承担部分</td>
                    <td className="p-2 border border-amber-200">赔付比例75%-90%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">特殊限制</td>
                    <td className="p-2 border border-amber-200 text-red-600">需定点医院或医保内药品</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
                4、响应文件要求
              </h4>
              <ul className="list-decimal pl-5 text-xs text-gray-700 space-y-1">
                <li>提交法定代表人授权书、资质证明文件复印件(加盖公章)。</li>
                <li>技术部分需说明理赔服务对接方案、理赔时效承诺及理赔纠纷处理预案等。</li>
                <li>商务部分需提供报价明细表，正本1份，副本5份，U盘电子版1份。</li>
              </ul>
            </div>
          </div>
        )}

        `;
        
        mbContent = mbContent.substring(0, reqStart) + customReq + mbContent.substring(scoringStart);
}

fs.writeFileSync(mbPath, mbContent, 'utf8');
console.log('Done mapping Bid Card');
