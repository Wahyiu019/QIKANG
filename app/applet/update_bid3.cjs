const fs = require('fs');
const file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const bidCardCode = `
export function BiddingDocumentAnalysisCard({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'scoring' | 'health'>('overview');

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-teal-700 to-emerald-800 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <FileText size={18} className="mr-2" />
          招标文件解读报告 - 企康项目
        </div>
      </div>

      <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 hide-scrollbar">
        <button onClick={() => setActiveTab('overview')} className={\`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap \${activeTab === 'overview' ? 'border-teal-600 text-teal-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}\`}>项目概括与资质</button>
        <button onClick={() => setActiveTab('requirements')} className={\`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap \${activeTab === 'requirements' ? 'border-teal-600 text-teal-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}\`}>报价与响应要求</button>
        <button onClick={() => setActiveTab('scoring')} className={\`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap \${activeTab === 'scoring' ? 'border-teal-600 text-teal-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}\`}>评分标准与废标</button>
        <button onClick={() => setActiveTab('health')} className={\`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap \${activeTab === 'health' ? 'border-teal-600 text-teal-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}\`}>体检需求要点</button>
      </div>

      <div className="p-5 min-h-[250px]">
        {activeTab === 'overview' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="bg-teal-50/80 border border-teal-100 p-4 rounded-lg shadow-sm">
               <h4 className="text-sm font-bold text-teal-900 border-b border-teal-200 pb-2 mb-3">1、项目概括</h4>
               <p className="text-xs text-gray-700 leading-relaxed">
                 <strong className="text-teal-800">项目名称：</strong>某大型科技公司2026年度员工健康管理与体检服务采购项目<br/>
                 <strong className="text-teal-800">招标编号：</strong>Tender-2026-HC012<br/>
                 <strong className="text-teal-800">项目预算：</strong>约人民币5,000万元<br/>
                 <strong className="text-teal-800">项目背景：</strong>为提升员工健康水平，提供涵盖全面体检、专家问诊、重疾绿通和心理辅导(EAP)的一体化健康管理解决方案。
               </p>
             </div>
             <div className="bg-blue-50/80 border border-blue-100 p-4 rounded-lg shadow-sm">
               <h4 className="text-sm font-bold text-blue-900 border-b border-blue-200 pb-2 mb-3">3、投标人资质要求</h4>
               <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                 <li>具有独立承担民事责任的能力及相关营业执照。</li>
                 <li>具备省级及以上卫生行政部门颁发的《医疗机构执业许可证》。</li>
                 <li>拥有覆盖全国至少30个重点城市的实体医疗或合作体检网络。</li>
                 <li>近三年内(2023年至今)具有至少3个合同金额在1000万元以上的同类项目成功案例。</li>
                 <li>不接受联合体投标，严禁转包和违法分包。</li>
               </ul>
             </div>
          </div>
        )}

        {activeTab === 'requirements' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-lg shadow-sm">
               <h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">2、报价要求</h4>
               <p className="text-xs text-gray-700 leading-relaxed mb-2">
                 实行<strong>固定综合单价</strong>报价，包含但不限于体检费用、系统对接费、报告解读费、售后服务费及相关税费等一切可能发生的费用。
               </p>
               <table className="w-full text-xs text-left border-collapse">
                 <thead>
                   <tr className="bg-amber-100 text-amber-900">
                     <th className="p-2 border border-amber-200 font-bold">人员梯队</th>
                     <th className="p-2 border border-amber-200 font-bold">基础套餐预算(元/人)</th>
                     <th className="p-2 border border-amber-200 font-bold">附加关怀预算(元/人)</th>
                   </tr>
                 </thead>
                 <tbody className="bg-white">
                   <tr>
                     <td className="p-2 border border-amber-200">普通员工 (约30,000人)</td>
                     <td className="p-2 border border-amber-200">≤ 1,000</td>
                     <td className="p-2 border border-amber-200">≤ 200</td>
                   </tr>
                   <tr>
                     <td className="p-2 border border-amber-200">中高层管理 (约2,000人)</td>
                     <td className="p-2 border border-amber-200">≤ 3,500</td>
                     <td className="p-2 border border-amber-200">≤ 1,500</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             
             <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm">
               <h4 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">4、响应文件要求</h4>
               <ul className="list-decimal pl-5 text-xs text-gray-700 space-y-1">
                 <li>提交法定代表人授权书、资质证明文件复印件(加盖公章)。</li>
                 <li>技术部分需详细说明网络覆盖范围、系统对接方案、现场查勘总结及驻场服务团队简历等。</li>
                 <li>商务部分需提供报价明细表，要求装订成册，<strong>正本1份，副本5份，U盘电子版1份</strong>。</li>
                 <li><strong>重点提醒：</strong> 标书各项材料不得有涂改，报价金额大小写必须一致。</li>
               </ul>
             </div>
          </div>
        )}

        {activeTab === 'scoring' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th className="px-4 py-2.5 font-bold text-indigo-900" colSpan={3}>5、评分标准 (综合评分法，满分100分)</th>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 text-gray-600 font-bold">维度</th>
                      <th className="px-4 py-2 text-gray-600 font-bold">满分</th>
                      <th className="px-4 py-2 text-gray-600 font-bold">评分细则</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-2 font-bold">商务报价</td>
                      <td className="px-4 py-2 font-bold text-indigo-700">30分</td>
                      <td className="px-4 py-2 text-gray-700">以满足要求且评标价最低的为基准价(30分)。偏离基准价按比例扣分。</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-bold">技术方案</td>
                      <td className="px-4 py-2 font-bold text-indigo-700">45分</td>
                      <td className="px-4 py-2 text-gray-700">系统对接能力(15分)、健康管理干预模型(15分)、体检网络广度与质量控制(15分)。</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-bold">项目经验</td>
                      <td className="px-4 py-2 font-bold text-indigo-700">15分</td>
                      <td className="px-4 py-2 text-gray-700">近三年万人级企业健康管理标杆案例，每个3分，最高15分。</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-bold">服务团队</td>
                      <td className="px-4 py-2 font-bold text-indigo-700">10分</td>
                      <td className="px-4 py-2 text-gray-700">项目经理经验、团队资质(含三甲医院主治以上医师、公卫专家比例)。</td>
                    </tr>
                  </tbody>
                </table>
             </div>

             <div className="bg-rose-50/80 border border-rose-200 p-4 rounded-lg shadow-sm">
               <h4 className="text-sm font-bold text-rose-900 border-b border-rose-200 pb-2 mb-3">6、废标条款 (重大警示风险点)</h4>
               <div className="flex gap-2">
                 <AlertCircle size={16} className="text-rose-600 mt-0.5 flex-shrink-0" />
                 <ul className="list-disc pl-4 text-xs text-rose-800 space-y-1">
                   <li>未按时交纳人民币50万元的投标保证金。</li>
                   <li>发现提供虚假资质证明、伪造过往业绩的。</li>
                   <li>核心要求不满足，如：“无法实现在线预约、退改和报告一站式在线解读闭环”。</li>
                   <li>串通投标或以他人名义投标的。</li>
                 </ul>
               </div>
             </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="bg-emerald-50/80 border border-emerald-100 p-4 rounded-lg shadow-sm h-full">
               <h4 className="text-sm font-bold text-emerald-900 border-b border-emerald-200 pb-2 mb-3">7、体检需求要点与增值服务</h4>
               
               <div className="space-y-3">
                 <div>
                   <span className="inline-block bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-[11px] font-bold mb-1">专项健康筛查</span>
                   <p className="text-xs text-gray-700 leading-relaxed border-l-2 border-emerald-400 pl-2">
                     必选项包含：心脑血管风险深度评估、消化道早癌筛查（无痛胃肠镜）、肺部低剂量螺旋CT、女性两癌筛查升级版等。
                   </p>
                 </div>
                 <div>
                   <span className="inline-block bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-[11px] font-bold mb-1">数据安全闭环</span>
                   <p className="text-xs text-gray-700 leading-relaxed border-l-2 border-emerald-400 pl-2">
                     要求中标人能够自建或对接企业内部系统，支持体检报告脱敏后在企业内网进行聚合查询，且符合《数据安全法》隐私合规。
                   </p>
                 </div>
                 <div>
                   <span className="inline-block bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-[11px] font-bold mb-1">后端管理干预</span>
                   <p className="text-xs text-gray-700 leading-relaxed border-l-2 border-emerald-400 pl-2">
                     体检后一个月内，需驻场开展不少于5场“三高、甲状腺结节、脊柱健康”等专项解读会；对重症预警员工提供复查指导及3次以内的名医问诊费用报销豁免及绿通挂号。
                   </p>
                 </div>
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;

content = content.replace(
  /export const MessageBubble: React\.FC<{/,
  bidCardCode + '\nexport const MessageBubble: React.FC<{'
);

const renderLogic = `
        {isBot && message.type === 'bidding_document_analysis_report' && (
          <BiddingDocumentAnalysisCard data={message.data} />
        )}
`;

if (!content.includes('<BiddingDocumentAnalysisCard')) {
  content = content.replace(
    /({isBot && message.type === 'compliance_analysis_report' && \([\s\S]*?<\/ComplianceAnalysisReportCard>\s*\)}\s*)/,
    `$1\n${renderLogic}\n`
  );
}

fs.writeFileSync(file, content);
