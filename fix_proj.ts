import * as fs from 'fs';
let code = fs.readFileSync('src/components/ProjectManagementCard.tsx', 'utf8');

const oldHeaderRegex = /<div className="flex border-b border-gray-100 bg-gray-50\/50">[\s\S]*?<\/div>\s*<div className="p-6 bg-gray-50\/30">/;
const newHeader = `<div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 border-b border-gray-100 bg-gray-50/30 gap-4">
        <h2 className="text-lg font-bold text-gray-800">项目跟进总览</h2>
        <div className="flex flex-wrap space-x-1 bg-gray-100/50 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`flex items-center px-3 py-1.5 text-xs font-medium rounded-md transition-colors \${
                activeTab === tab.id
                  ? 'text-gray-900 bg-white shadow-sm ring-1 ring-gray-200/50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
              }\`}
            >
              <tab.icon className="w-3.5 h-3.5 mr-1.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 bg-gray-50/30 min-h-[500px]">`;
code = code.replace(oldHeaderRegex, newHeader);

// 2. Add interactvity to SalesView
const oldSalesBtn = `<button className="mt-2 text-xs bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5 rounded flex items-center hover:bg-blue-100 transition-colors">
                      查看交接清单向导
                   </button>`;
const newSalesBtnLogic = `const [handoffViewed, setHandoffViewed] = useState(false);`;
code = code.replace('function SalesView() {', 'function SalesView() {\n  ' + newSalesBtnLogic);
code = code.replace(oldSalesBtn, `{handoffViewed ? (
                     <div className="mt-2 text-xs text-green-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> 已查看清单并确认</div>
                   ) : (
                     <button onClick={() => setHandoffViewed(true)} className="mt-2 text-xs bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5 rounded flex items-center hover:bg-blue-100 transition-colors">
                        查看交接清单向导
                     </button>
                   )}`);

// 3. Add interactvity to ProductManagerView
const oldProdBtn = `<button className="flex-1 bg-orange-500 text-white text-xs py-2 rounded hover:bg-orange-600 transition-colors">
                      去处理
                    </button>`;
const newProdLogic = `const [handled, setHandled] = useState(false);`;
code = code.replace('function ProductManagerView() {', 'function ProductManagerView() {\n  ' + newProdLogic);
code = code.replace(oldProdBtn, `{handled ? (
                     <div className="flex-1 bg-gray-100 text-gray-500 text-xs py-2 rounded text-center cursor-not-allowed flex items-center justify-center"><CheckCircle className="w-3 h-3 mr-1" /> 已处理</div>
                   ) : (
                     <button onClick={() => setHandled(true)} className="flex-1 bg-orange-500 text-white text-xs py-2 rounded flex items-center justify-center hover:bg-orange-600 transition-colors">
                        去处理
                     </button>
                   )}`);

// 4. Add interactvity to HealthSpecialistView
const newHealthLogic = `const [manualUploaded, setManualUploaded] = useState(false);
  const [task1Checked, setTask1Checked] = useState(false);`;
code = code.replace('function HealthSpecialistView() {', 'function HealthSpecialistView() {\n  ' + newHealthLogic);

const oldHealthBtn = `<button className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors">
                     上传说明书
                   </button>`;
code = code.replace(oldHealthBtn, `{manualUploaded ? (
                     <div className="mt-2 text-xs text-green-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> 已上传《补充员工权益说明书》</div>
                   ) : (
                     <button onClick={() => setManualUploaded(true)} className="mt-2 text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded flex items-center hover:bg-gray-50 transition-colors">
                        上传说明书
                     </button>
                   )}`);
code = code.replace('<input type="checkbox" className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />',
  '<input type="checkbox" checked={task1Checked} onChange={() => setTask1Checked(!task1Checked)} className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />');

// 5. Add interactvity to ClaimsSupportView
const newClaimsLogic = `const [rulesConfigured, setRulesConfigured] = useState(false);
  const [faqUploaded, setFaqUploaded] = useState(false);`;
code = code.replace('function ClaimsSupportView() {', 'function ClaimsSupportView() {\n  ' + newClaimsLogic);

const oldRulesBtn = `<button className="text-xs bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1.5 rounded hover:bg-purple-100 transition-colors">
                     配置理赔规则
                   </button>`;
code = code.replace(oldRulesBtn, `{rulesConfigured ? (
                     <div className="mt-2 text-xs text-green-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> 理赔规则已配置完成</div>
                   ) : (
                     <button onClick={() => setRulesConfigured(true)} className="mt-2 text-xs bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1.5 rounded flex items-center hover:bg-purple-100 transition-colors">
                        配置理赔规则
                     </button>
                   )}`);

const oldFaqBtn = `<button className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors">
                     上传FAQ文档
                   </button>`;
code = code.replace(oldFaqBtn, `{faqUploaded ? (
                     <div className="mt-2 text-xs text-green-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> FAQ文档已上传并发布</div>
                   ) : (
                     <button onClick={() => setFaqUploaded(true)} className="mt-2 text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded flex items-center hover:bg-gray-50 transition-colors">
                        上传FAQ文档
                     </button>
                   )}`);                   

fs.writeFileSync('src/components/ProjectManagementCard.tsx', code);
