const fs = require('fs');

const path = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /export function LenovoNewMarketingPlanCard\(\{[\s\S]*?\}\) \{\n  return \([\s\S]*?\}\n\nexport function CustomerPortraitCard\(\) \{/m;

const replacement = `export function LenovoNewMarketingPlanCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-6xl bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-[#1e3a5f] px-6 py-5 flex justify-between items-start text-white">
        <div>
          <div className="flex items-center text-xl font-bold tracking-wider mb-1">
            <svg
              className="w-6 h-6 mr-2 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            平安企康 · 企业健康保障服务
          </div>
          <div className="text-blue-200 text-sm pl-8">
            某省烟草专卖局（公司） | 首次拜访材料
          </div>
        </div>
        <div className="text-right text-sm text-blue-200">
          <div>平安产险·企康服务团队</div>
          <div>2026年6月</div>
        </div>
      </div>

      <div className="p-4 flex flex-col lg:flex-row gap-4 relative">
        {/* watermark-like background if needed */}
        {/* Column 1 */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col">
          <div className="bg-[#1e3a5f] text-white px-4 py-3 rounded-t-lg font-bold flex items-center">
            <span className="mr-2">🏆</span> 哪些大客户在做
          </div>
          <div className="p-4 space-y-6 text-sm">
            <div>
              <div className="flex items-center font-bold text-blue-800 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                同类型央国企
              </div>
              <div className="pl-4 space-y-4">
                <div>
                  <div className="font-bold text-gray-800 mb-1">央企千万级委托单 <span className="font-normal text-gray-500">— 平安产险江门中支产养联合，中标央企客户千万级企康业务，运用"三张地图"战略精准破局</span></div>
                  <div className="inline-flex items-center bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded border border-green-200 font-medium">✅ 已中标</div>
                </div>
                <div>
                  <div className="font-bold text-gray-800 mb-1">五矿盐湖有限公司 <span className="font-normal text-gray-500">— 平安产险青海分公司</span></div>
                  <div className="text-gray-500 mb-1">拜访对接，企康项目涵盖健康体检、健康评估、健康干预、医疗服务一站式方案</div>
                  <div className="inline-flex items-center bg-yellow-50 text-yellow-700 text-xs px-2 py-0.5 rounded border border-yellow-200 font-medium">⭐ 推进中</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center font-bold text-blue-800 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                省级多机构客户
              </div>
              <div className="pl-4 space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <div className="font-bold text-gray-800 mb-1">海南省烟草商业系统 <span className="font-normal text-gray-500">— 2025-2027年补充医疗保险项目，平安产险中标</span></div>
                  <div className="flex gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">管理费率 1.00%</span>
                    <span className="text-green-600 font-bold text-xs">2300元/人/年</span>
                  </div>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <div className="font-bold text-gray-800 mb-1">贵州省烟草公司 <span className="font-normal text-gray-500">— 2025-2028年补充医疗保险采购，平安产险中标（得分85.36，远超竞品69.53）</span></div>
                  <div className="flex gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">管理费率 2%</span>
                  </div>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <div className="font-bold text-gray-800 mb-1">重庆市烟草公司 <span className="font-normal text-gray-500">— 2026-2027年职工补充医疗保障，平安产险中标</span></div>
                  <div className="flex gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">管理费率 1.70%</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-800 mb-1">遵义市烟草公司 <span className="font-normal text-gray-500">— 2025年补充医疗保险，平安养老险中标</span></div>
                  <div className="flex gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">管理费率 2.77%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center font-bold text-blue-800 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                长期合作标杆
              </div>
              <div className="pl-4">
                <div className="font-bold text-gray-800 mb-1">金华烟草 · 全国标杆 <span className="font-normal text-gray-500">— 平安产险总部戴新媛总带队，联合浙江分公司及多地中支机构赴金华烟草开展企康服务专项交流。双方围绕企业健康险服务提质升级、深化长期合作深度沟通。金华烟草被定位为<strong className="text-gray-900">可复制、可推广</strong>的企康服务标杆样本，推动全国企康业务精细化、标准化升级。</span></div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-0.5 rounded border border-purple-100">总部级标杆</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded border border-green-100">产养协同</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-2 py-0.5 rounded border border-orange-100">长期合作</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col">
          <div className="bg-[#48a974] text-white px-4 py-3 rounded-t-lg font-bold flex items-center">
            <span className="mr-2">📦</span> 平安标准产品
          </div>
          <div className="p-4 space-y-6 text-sm">
            <div>
              <div className="flex items-center font-bold text-green-700 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                分层补充医疗
              </div>
              <div className="pl-4 text-gray-600 space-y-1">
                <p>提供<strong className="text-gray-900">多层次、可定制</strong>的补充医疗保障方案：</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>基础层：门急诊/住院费用补充报销</li>
                  <li>增强层：重大疾病定额给付</li>
                  <li>高端层：特需医疗/海外就医</li>
                </ul>
                <p className="font-bold text-blue-600 mt-2">支持按岗位/职级/工龄分层设计</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded border border-green-100">灵活定制</span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded border border-blue-100">全员覆盖</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center font-bold text-green-700 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                委托基金管理
              </div>
              <div className="pl-4 text-gray-600 space-y-1">
                <p className="font-bold text-gray-800">15年+运营经验 · 管理基金超千亿</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>专户管理、专款专用，接受审计监督</li>
                  <li>按企业制定的报销规则精准支付</li>
                  <li>覆盖门急诊、住院、体检、高额医疗补助、急难津贴等</li>
                  <li>年度结余可滚存使用，<strong className="text-gray-900">预算池灵活高效</strong></li>
                </ul>
                <p className="bg-blue-50 text-blue-800 p-2 rounded text-xs mt-2">行业管理费率参考：1%~3.75%</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded border border-green-100">资金安全</span>
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-0.5 rounded border border-purple-100">数据沉淀</span>
                  <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-0.5 rounded border border-yellow-100">灵活滚存</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center font-bold text-green-700 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                体检 / 慢病 / 就医协助
              </div>
              <div className="pl-4 text-gray-600 space-y-2">
                <p className="text-gray-800">"四到"服务体系 —— 到线·到院·到企·到家</p>
                <div className="space-y-1">
                  <div>🏥 <strong className="text-gray-800">体检管理：</strong>定制套餐 + 报告解读 + 异常追踪</div>
                  <div>💊 <strong className="text-gray-800">慢病管理：</strong>专属保健医生 + 用药指导 + 健康干预</div>
                  <div>🚑 <strong className="text-gray-800">就医协助：</strong>全国百强三甲绿色通道 + 挂号转诊</div>
                  <div>🏢 <strong className="text-gray-800">到企服务：</strong>驻场医务室 + 健康讲座 + 急救培训</div>
                  <div>📱 <strong className="text-gray-800">到线服务：</strong>7×24小时在线问诊 + 健康档案</div>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">5万+医生</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded">5100+医院</span>
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-0.5 rounded">24万+药店</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col">
          <div className="bg-[#dc703f] text-white px-4 py-3 rounded-t-lg font-bold flex items-center">
            <span className="mr-2">💎</span> 明星方案价值
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 border border-gray-100 p-3 rounded text-center flex flex-col items-center">
                <div className="text-2xl mb-1">📋</div>
                <div className="font-bold text-gray-800 text-sm mb-1">政策合规</div>
                <div className="text-xs text-gray-500">严格遵循国资委、银保监监管要求。合规目录全覆盖，审计零风险</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-3 rounded text-center flex flex-col items-center">
                <div className="text-2xl mb-1">❤️</div>
                <div className="font-bold text-gray-800 text-sm mb-1">员工关怀</div>
                <div className="text-xs text-gray-500">全周期健康管理闭环。<br/>体检→慢病→就医→康复</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-3 rounded text-center flex flex-col items-center">
                <div className="text-2xl mb-1">🌿</div>
                <div className="font-bold text-gray-800 text-sm mb-1">ESG / 健康企业</div>
                <div className="text-xs text-gray-500">助力"健康中国2030"战略。<br/>提升企业ESG评级与社会形象</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-3 rounded text-center flex flex-col items-center">
                <div className="text-2xl mb-1">🏅</div>
                <div className="font-bold text-gray-800 text-sm mb-1">企业文化与荣誉</div>
                <div className="text-xs text-gray-500">平安集团世界500强。<br/>企康服务4500+企业客户</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mt-4">
              <div className="font-bold text-orange-800 mb-2 flex items-center">
                <span className="mr-2">🎯</span> 为什么选择平安企康
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong className="text-orange-700">综合金融+医疗健康</strong>双轮驱动，区别于单一保险公司的碎片化服务。</p>
                <p>平安集团战略级业务，<strong className="text-gray-900">4500+</strong>企业客户信赖选择，B端业务同比增长<strong className="text-gray-900">40.6%</strong>。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {onDownload && (
        <div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center rounded-b-xl download-exclude">
          <div className="flex flex-col">
            <span className="font-bold relative text-gray-800 text-sm">平安产险 · 企康服务团队</span>
            <span className="text-xs text-gray-500">覆盖全省各地市，县级区域属地化服务</span>
          </div>
          <button
            onClick={onDownload}
            className="flex items-center text-sm text-white bg-[#d16127] hover:bg-[#b54b17] px-5 py-2.5 rounded shadow-sm transition-colors font-bold cursor-pointer"
          >
            期待与您携手 共建健康职场
          </button>
        </div>
      )}
    </div>
  );
}

export function CustomerPortraitCard() {`;

if (regex.test(content)) {
  const newContent = content.replace(regex, replacement);
  fs.writeFileSync(path, newContent, 'utf8');
  console.log("Successfully replaced LenovoNewMarketingPlanCard");
} else {
  console.log("Regex did not match");
}
