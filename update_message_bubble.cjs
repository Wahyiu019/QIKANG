const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/MessageBubble.tsx');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Replace lucide imports
fileContent = fileContent.replace(
  /import \{ (.*?) \} from 'lucide-react';/,
  "import { $1, History, HelpCircle, FileBarChart, Handshake, HeartPulse, LineChart } from 'lucide-react';"
);

// Add the HistoryCooperationReportCard component definition
const historyCardCode = `
export function HistoryCooperationReportCard({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'procurement' | 'timeline' | 'qikang'>('overview');

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <History size={18} className="mr-2" />
          【联想】历史合作与产品覆盖深度分析报告
        </div>
        <div className="text-white/80 text-sm">大数据分析平台</div>
      </div>

      <div className="flex border-b border-gray-100 bg-gray-50/50">
        <button onClick={() => setActiveTab('overview')} className={\`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 \${activeTab === 'overview' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}\`}>合作概况与空白分析</button>
        <button onClick={() => setActiveTab('procurement')} className={\`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 \${activeTab === 'procurement' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}\`}>采购数据分析</button>
        <button onClick={() => setActiveTab('timeline')} className={\`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 \${activeTab === 'timeline' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}\`}>历史业务线梳理</button>
        <button onClick={() => setActiveTab('qikang')} className={\`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 \${activeTab === 'qikang' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}\`}>企康体系与机会</button>
      </div>

      <div className="p-5">
        {activeTab === 'overview' && (
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <BarChart3 size={16} className="text-blue-500 mr-2" />
                总体合作数据摘要
              </h4>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-blue-50/40 rounded-xl p-3 border border-blue-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">合作年限</div>
                  <div className="text-xl font-bold text-blue-700">18<span className="text-xs ml-0.5">年</span></div>
                </div>
                <div className="bg-indigo-50/40 rounded-xl p-3 border border-indigo-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">近三年采购项目</div>
                  <div className="text-xl font-bold text-indigo-700">31<span className="text-xs ml-0.5">个</span></div>
                </div>
                <div className="bg-blue-50/40 rounded-xl p-3 border border-blue-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">覆盖采购品类</div>
                  <div className="text-xl font-bold text-blue-700">5<span className="text-xs ml-0.5">类</span></div>
                </div>
                <div className="bg-amber-50/40 rounded-xl p-3 border border-amber-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">企康渗透率</div>
                  <div className="text-xl font-bold text-amber-600">0<span className="text-xs ml-0.5">%</span></div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <Search size={16} className="text-blue-500 mr-2" />
                合作总结与企康空白判断
              </h4>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="mb-3 pb-3 border-b border-gray-200">
                  <p className="text-xs text-gray-700 leading-relaxed font-bold text-blue-800">
                    结论：长情战略硬客，大健康及企康管理面临绝对“零渗透”空白，待挖掘潜力巨大。
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={14} />
                    <span><strong>信任基石稳固：</strong> 双方具备长达18年的深厚互信，在硬件基础设施、核心系统支持上合作紧密。</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={14} />
                    <span><strong>合作呈严重“偏科”态势：</strong> 平安高度依赖联想的设备与硬件支持，但在反向输出上（如健康管理、企康产品）尚未破局。</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={14} />
                    <span><strong>核心痛点与机会：</strong> 联想作为科技巨头，高管及研发人员压力巨大，急需顶峰级的企业健康管理解决方案。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'procurement' && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 flex items-center mb-3">
              <FileBarChart size={16} className="text-blue-500 mr-2" />
              近三年平安采购数据明细分析
            </h4>
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase">采购品类</th>
                    <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase">采购频次/近三年</th>
                    <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase">核心场景</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-xs">
                  <tr className="hover:bg-blue-50/20">
                    <td className="px-4 py-2.5 font-bold text-gray-900 flex items-center"><span className="w-2 h-2 rounded-sm bg-blue-600 mr-2"></span>计算终端设备</td>
                    <td className="px-4 py-2.5 text-blue-700 font-bold">14 次</td>
                    <td className="px-4 py-2.5 text-gray-600">平安内勤外勤办公电脑、平板采购。</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20">
                    <td className="px-4 py-2.5 font-bold text-gray-900 flex items-center"><span className="w-2 h-2 rounded-sm bg-indigo-500 mr-2"></span>服务器</td>
                    <td className="px-4 py-2.5 text-gray-700 font-medium">8 次</td>
                    <td className="px-4 py-2.5 text-gray-600">平安数据中心底层基础底座构建。</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20">
                    <td className="px-4 py-2.5 font-bold text-gray-900 flex items-center"><span className="w-2 h-2 rounded-sm bg-cyan-500 mr-2"></span>存储设备</td>
                    <td className="px-4 py-2.5 text-gray-700 font-medium">4 次</td>
                    <td className="px-4 py-2.5 text-gray-600">备份存储阵列采购。</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20">
                    <td className="px-4 py-2.5 font-bold text-gray-900 flex items-center"><span className="w-2 h-2 rounded-sm bg-purple-400 mr-2"></span>策略规划</td>
                    <td className="px-4 py-2.5 text-gray-700 font-medium">3 次</td>
                    <td className="px-4 py-2.5 text-gray-600">IT与碳中和方案定投。</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20">
                    <td className="px-4 py-2.5 font-bold text-gray-900 flex items-center"><span className="w-2 h-2 rounded-sm bg-emerald-400 mr-2"></span>品牌合作</td>
                    <td className="px-4 py-2.5 text-gray-700 font-medium">2 次</td>
                    <td className="px-4 py-2.5 text-gray-600">大客户联合展厅搭建合作。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 flex items-center mb-4">
              <TrendingUp size={16} className="text-blue-500 mr-2" />
              历史业务线梳理 (2006至今)
            </h4>
            <div className="relative pl-6 border-l border-blue-200 space-y-5 ml-2">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-white border-[3px] border-amber-500 rounded-full z-10"></div>
                <div className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-amber-700">2006年7月</span>
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-2 rounded-full font-bold">史诗开局</span>
                  </div>
                  <h5 className="text-xs font-bold text-gray-900 mb-1">中国企年金史上的“0001号单”</h5>
                  <p className="text-[11px] text-gray-600">联想成为平安养老险企年金首单客户，杨元庆等高管曾亲自参与或知悉该事件。</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-white border-[3px] border-blue-400 rounded-full z-10"></div>
                <div className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-blue-700">2012-2016年</span>
                    <span className="text-[10px] bg-blue-50 text-blue-700 px-2 rounded-full border border-blue-100">基础设施扩充</span>
                  </div>
                  <h5 className="text-xs font-bold text-gray-900">核心网络与PC规模更替</h5>
                  <p className="text-[11px] text-gray-600">伴随金控架构确立，大量引入联想服务器群组及终端设备升级。</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-white border-[3px] border-red-500 rounded-full z-10"></div>
                <div className="bg-gradient-to-r from-red-50 to-white border border-red-200 p-3 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-red-600">2024年初至今</span>
                    <span className="text-[10px] bg-red-100 text-red-700 px-2 rounded-full font-bold animate-pulse">当前突破口</span>
                  </div>
                  <h5 className="text-xs font-bold text-gray-900">大规模AI算力与终端换新</h5>
                  <p className="text-[11px] text-gray-700">迎合大模型落地应用，平安正大规模考察液冷AI服务器与AIPC更换。</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'qikang' && (
          <div className="space-y-4">
             <h4 className="text-sm font-bold text-gray-900 flex items-center">
                <HeartPulse size={16} className="text-rose-500 mr-2" />
                平安企康产品体系及合作推介方案
             </h4>
             <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-3.5">
                <h5 className="text-xs font-bold text-rose-800 mb-1 flex items-center">企康定义与核心优势</h5>
                <p className="text-[11px] text-gray-600 mb-2">
                  依托平安全球医疗领先资源，为大型政企客户量身打造强有力的<strong>“体检+绿通+慢病干预+员工保障”</strong>综合方案。
                </p>
                <div className="flex gap-2 text-[10px]">
                   <span className="bg-white px-2 py-1 rounded text-rose-700 border border-rose-100">10万+名医绿通</span>
                   <span className="bg-white px-2 py-1 rounded text-rose-700 border border-rose-100">千人千面健管方案</span>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-3">
               <div className="border border-gray-100 rounded-xl p-3 bg-white shadow-sm">
                  <h5 className="text-xs font-bold text-gray-900 mb-2 border-b pb-1.5">核心企康产品目录</h5>
                  <ul className="space-y-1.5 text-[11px] text-gray-600">
                     <li><CheckCircle2 className="inline text-rose-500 mr-1 w-3 h-3"/>高管尊享健康定制套餐</li>
                     <li><CheckCircle2 className="inline text-rose-500 mr-1 w-3 h-3"/>百强名医特需部绿色通道</li>
                     <li><CheckCircle2 className="inline text-rose-500 mr-1 w-3 h-3"/>职场专属慢病与理疗站</li>
                     <li><CheckCircle2 className="inline text-rose-500 mr-1 w-3 h-3"/>心理援助专项资金</li>
                  </ul>
               </div>
               <div className="border border-gray-100 rounded-xl p-3 bg-gray-50 shadow-sm">
                  <h5 className="text-xs font-bold text-gray-900 mb-2 border-b pb-1.5">同类科技巨头标杆案例</h5>
                  <div className="space-y-2 text-[11px]">
                    <div>
                      <div className="font-bold text-blue-700">某大型通讯巨头(华为)</div>
                      <div className="text-gray-500">部署超4万核心员工VIP体检，降低心血管病假率12%。</div>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-700">某头部互联网厂(腾讯)</div>
                      <div className="text-gray-500">覆盖高管名医绿通，健康档案动态实时干预预防。</div>
                    </div>
                  </div>
               </div>
             </div>

             <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 shadow-sm">
                <h5 className="text-xs font-bold text-indigo-900 mb-2 flex items-center">
                  <MessageSquare size={14} className="mr-1" /> 诉求洞察及核心推荐话术
                </h5>
                <div className="bg-white p-2.5 rounded-lg border border-indigo-100 text-[11px]">
                  <p className="text-indigo-800 italic font-medium leading-relaxed">
                    “杨总/刘总，平安这些年大量采购联想顶级的AI算力设施，我们深知先进技术背后是核心团队极致的脑力燃烧，健康压力空前。
                    今天平安拿出最强企康干预体系在H、T厂已成功防患，作为回馈联想2006年给平安史诗级企年金0001号单的心意，平安同样想交还联想一份极致的0001号健康绿通特单，护盾所有联想中枢常青！”
                  </p>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;

fileContent = fileContent.replace(
  /export const MessageBubble =/,
  historyCardCode + '\nexport const MessageBubble ='
);

const replaceRender = `
        {isBot && message.type === 'history_cooperation_report' && (
          <HistoryCooperationReportCard data={message.data} />
        )}
`;
fileContent = fileContent.replace(
  /({isBot && message.type === 'decision_makers_report' && \([\s\S]*?<\/DecisionMakersReportCard>\s*\)}\s*)/,
  `$1\n${replaceRender}\n`
);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Successfully updated MessageBubble.tsx');
