const fs = require('fs');
const path = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(path, 'utf8');

// I will just completely replace the 重点 (Insight) block
const oldInsight = `        {/* 三、核心沟通要点 */}
        <div>
          <h3 className="text-base font-bold text-[#2A4B7C] border-l-[3px] border-[#2A4B7C] pl-3 mb-4 flex items-center">
            三、核心沟通要点 (洞察 Insight)
          </h3>

          <div className="space-y-6">
            
            {/* 重点1 */}
            <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex items-center">
                重点1：【分管总关注】同行怎么做？ ——烟草行业标杆案例
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center"><span className="mr-1">💬</span> 话术示范</div>
                  <div className="bg-[#F8F9FB] p-3 text-sm text-gray-700 leading-relaxed border-l-2 border-blue-300">
                    X总，向您汇报一下同行的情况。我们服务的一家大型烟草企业，员工2.5万人、15家分公司遍布全省，年委托缴费超1亿元。平安为其打造了防筛管治一体化健康管理体系...方案获得客户高度认可，企业医务室作为新年礼物正式启用。<br/><br/>
                    另一家烟草企业（央企二级单位，7000人），合作超10年，原委托规模400万，通过优化方案新增体检服务后，年缴委托规模提升至1000万。<br/><br/>
                    这两家案例说明，烟草行业做企康补充医疗是大势所趋，同行已经在走，而且效果显著。
                  </div>
                </div>
                
                <div className="text-sm">
                  <div className="flex items-center text-green-700 font-bold mb-1"><span className="mr-1">📊</span> 数据/案例支撑</div>
                  <p className="text-gray-600 text-xs pl-5">
                    案例数据：- 案例A：2.5万人烟草企业，年委托缴费超1亿元，年消耗7500万，院外健康服务消耗1500万 - 案例B：7000人烟草企业，合作超10年... 合作模式：年金+保险+委托管理+健康服务全覆盖
                  </p>
                </div>
                
                <div className="text-sm">
                  <div className="flex items-center text-blue-700 font-bold mb-1"><span className="mr-1">🔄</span> 可能追问及应对</div>
                  <p className="text-gray-600 text-xs pl-5">
                    <strong className="text-gray-700">追问：你们服务的烟草企业具体是哪家？</strong> 应对：按合规要求我们不便透露具体名称，但可以理解为省级烟草公司和地市级烟草公司两个层级都有成熟案例...<br/>
                    <strong className="text-gray-700">追问：你们的方案跟其他保险公司有什么不一样？</strong> 应对：平安的优势在于综合金融+医疗健康生态...我们有自营的平安健康互联网医院、线下体检中心、三甲医院合作网络...
                  </p>
                </div>
              </div>
            </div>

            {/* 重点2 */}
            <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex items-center">
                重点2：【分管总关注】税优力度有多大？
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center"><span className="mr-1">💬</span> 话术示范</div>
                  <div className="bg-[#F8F9FB] p-3 text-sm text-gray-700 leading-relaxed border-l-2 border-blue-300">
                    X总，关于税优这块，我给您算一笔账：<br/>
                    根据《企业所得税法实施条例》第35条，企业为员工支付的补充医疗保险费，在不超过职工工资总额5%标准内的部分，准予税前扣除。<br/>
                    以一家5000人的烟草企业为例... 按25%企业所得税率算，可节税约937.5万/年。<br/>
                    所以无论从企业还是员工角度，税优力度都是实实在在的。
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-green-700 font-bold mb-1"><span className="mr-1">📊</span> 数据/案例支撑</div>
                  <p className="text-gray-600 text-xs pl-5">
                    税优测算：- 企业端：补充医疗费不超过工资总额5%可税前扣除 - 5000人企业：工资总额7.5亿*5%=3750万额度，节税约937.5万/年...
                  </p>
                </div>
              </div>
            </div>

            {/* 重点3 */}
            <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex items-center">
                重点3：【分管总关注】是否合规？
              </div>
              <div className="p-4 space-y-4">
                 <div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center"><span className="mr-1">💬</span> 话术示范</div>
                  <div className="bg-[#F8F9FB] p-3 text-sm text-gray-700 leading-relaxed border-l-2 border-blue-300">
                    X总，合规是我们方案设计的底线。<br/>
                    第一，政策依据清晰。补充医疗保险的税前扣除有《企业所得税法实施条例》第35条作为依据...<br/>
                    第二，资金管理合规。委托管理资金实行专户管理、专款专用...<br/>
                    第三，审计可追溯。我们提供完整的合规材料包...每笔支出清晰可追溯...<br/>
                    第四，平安作为头部金融机构，自身受到严格的金融监管...我们在烟草行业已有10年以上服务经验，从未出现合规问题。
                  </div>
                </div>
              </div>
            </div>

             {/* 重点 4 & 5 & 6 & 7 (Simplified to save space but maintaining structure) */}
             <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex flex-wrap gap-2 items-center">
                <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">HRD关注</span> 
                重点4：员工有什么实际好处？ | 重点5：对企业文化、ESG有什么帮助？
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-800">关于员工好处：</strong>"第一，看病更省钱。第二，看病更方便。第三，健康有人管。第四，家人也能受益... 简单说就是：看病少花钱、小病不出门、健康有人管、家人也受益。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-800">关于企业文化与ESG：</strong>"员工健康福利是最有温度的企业文化载体... ESG方面，员工健康管理直接对应社会（S）维度。我们可以协助编制ESG报告中的员工健康板块，提供数据支撑和案例素材。"
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex flex-wrap gap-2 items-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">经办人关注</span> 
                重点6：是否符合企业管理规范？ | 重点7：理赔怎么跑？
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-800">关于管理规范：</strong>"第一，方案设计有据可依。第二，采购流程合规。第三，落地执行有标准。第四，数据安全有保障。简单说：政策有依据、采购有配合、执行有标准、数据有保障。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-800">关于理赔流程：</strong>"我们采用的是线上为主、线下为辅的理赔模式【线上理赔】...【线下理赔】...【健康管理服务】...我们还会提供后台管理系统，方便您做数据汇报。"
                </p>
              </div>
            </div>

          </div>
        </div>`;


const newInsight = `        {/* 三、核心沟通要点 */}
        <div>
          <h3 className="text-base font-bold text-[#2A4B7C] border-l-[3px] border-[#2A4B7C] pl-3 mb-4 flex items-center">
            三、核心沟通要点 (洞察 Insight)
          </h3>

          <div className="space-y-6">
            
            {activeRole === 'vp' && (
              <>
                {/* 重点1 */}
                <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                  <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex items-center">
                    重点1：【分管总关注】同行怎么做？ ——烟草行业标杆案例
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1 flex items-center"><span className="mr-1">💬</span> 话术示范</div>
                      <div className="bg-[#F8F9FB] p-3 text-sm text-gray-700 leading-relaxed border-l-2 border-blue-300">
                        X总，向您汇报一下同行的情况。我们服务的一家大型烟草企业，员工2.5万人、15家分公司遍布全省，年委托缴费超1亿元。平安为其打造了防筛管治一体化健康管理体系...方案获得客户高度认可，企业医务室作为新年礼物正式启用。<br/><br/>
                        另一家烟草企业（央企二级单位，7000人），合作超10年，原委托规模400万，通过优化方案新增体检服务后，年缴委托规模提升至1000万。<br/><br/>
                        这两家案例说明，烟草行业做企康补充医疗是大势所趋，同行已经在走，而且效果显著。
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="flex items-center text-green-700 font-bold mb-1"><span className="mr-1">📊</span> 数据/案例支撑</div>
                      <p className="text-gray-600 text-xs pl-5">
                        案例数据：- 案例A：2.5万人烟草企业，年委托缴费超1亿元，年消耗7500万，院外健康服务消耗1500万 - 案例B：7000人烟草企业，合作超10年... 合作模式：年金+保险+委托管理+健康服务全覆盖
                      </p>
                    </div>
                    
                    <div className="text-sm">
                      <div className="flex items-center text-blue-700 font-bold mb-1"><span className="mr-1">🔄</span> 可能追问及应对</div>
                      <p className="text-gray-600 text-xs pl-5">
                        <strong className="text-gray-700">追问：你们服务的烟草企业具体是哪家？</strong> 应对：按合规要求我们不便透露具体名称，但可以理解为省级烟草公司和地市级烟草公司两个层级都有成熟案例...<br/>
                        <strong className="text-gray-700">追问：你们的方案跟其他保险公司有什么不一样？</strong> 应对：平安的优势在于综合金融+医疗健康生态...我们有自营的平安健康互联网医院、线下体检中心、三甲医院合作网络...
                      </p>
                    </div>
                  </div>
                </div>

                {/* 重点2 */}
                <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                  <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex items-center">
                    重点2：【分管总关注】税优力度有多大？
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1 flex items-center"><span className="mr-1">💬</span> 话术示范</div>
                      <div className="bg-[#F8F9FB] p-3 text-sm text-gray-700 leading-relaxed border-l-2 border-blue-300">
                        X总，关于税优这块，我给您算一笔账：<br/>
                        根据《企业所得税法实施条例》第35条，企业为员工支付的补充医疗保险费，在不超过职工工资总额5%标准内的部分，准予税前扣除。<br/>
                        以一家5000人的烟草企业为例... 按25%企业所得税率算，可节税约937.5万/年。<br/>
                        所以无论从企业还是员工角度，税优力度都是实实在在的。
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center text-green-700 font-bold mb-1"><span className="mr-1">📊</span> 数据/案例支撑</div>
                      <p className="text-gray-600 text-xs pl-5">
                        税优测算：- 企业端：补充医疗费不超过工资总额5%可税前扣除 - 5000人企业：工资总额7.5亿*5%=3750万额度，节税约937.5万/年...
                      </p>
                    </div>
                  </div>
                </div>

                {/* 重点3 */}
                <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                  <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex items-center">
                    重点3：【分管总关注】是否合规？
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1 flex items-center"><span className="mr-1">💬</span> 话术示范</div>
                      <div className="bg-[#F8F9FB] p-3 text-sm text-gray-700 leading-relaxed border-l-2 border-blue-300">
                        X总，合规是我们方案设计的底线。<br/>
                        第一，政策依据清晰。补充医疗保险的税前扣除有《企业所得税法实施条例》第35条作为依据...<br/>
                        第二，资金管理合规。委托管理资金实行专户管理、专款专用...<br/>
                        第三，审计可追溯。我们提供完整的合规材料包...每笔支出清晰可追溯...<br/>
                        第四，平安作为头部金融机构，自身受到严格的金融监管...我们在烟草行业已有10年以上服务经验，从未出现合规问题。
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeRole === 'hrd' && (
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex flex-wrap gap-2 items-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">HRD关注</span> 
                  重点4：员工有什么实际好处？ | 重点5：对企业文化、ESG有什么帮助？
                </div>
                <div className="p-4 space-y-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-800">关于员工好处：</strong>"第一，看病更省钱。第二，看病更方便。第三，健康有人管。第四，家人也能受益... 简单说就是：看病少花钱、小病不出门、健康有人管、家人也受益。"
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-800">关于企业文化与ESG：</strong>"员工健康福利是最有温度的企业文化载体... ESG方面，员工健康管理直接对应社会（S）维度。我们可以协助编制ESG报告中的员工健康板块，提供数据支撑和案例素材。"
                  </p>
                </div>
              </div>
            )}

            {activeRole === 'handler' && (
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex flex-wrap gap-2 items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">经办人关注</span> 
                  重点6：是否符合企业管理规范？ | 重点7：理赔怎么跑？
                </div>
                <div className="p-4 space-y-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-800">关于管理规范：</strong>"第一，方案设计有据可依。第二，采购流程合规。第三，落地执行有标准。第四，数据安全有保障。简单说：政策有依据、采购有配合、执行有标准、数据有保障。"
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-800">关于理赔流程：</strong>"我们采用的是线上为主、线下为辅的理赔模式【线上理赔】...【线下理赔】...【健康管理服务】...我们还会提供后台管理系统，方便您做数据汇报。"
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>`;

if (content.includes(oldInsight)) {
  content = content.replace(oldInsight, newInsight);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Updated insight content');
} else {
  console.log('could not find old insight block');
}
