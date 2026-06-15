import React, { useState } from 'react';
import {
  Briefcase,
  User,
  Package,
  HeartPlus,
  ShieldAlert,
  AlertCircle,
  CheckCircle,
  Clock,
  ChevronRight,
  TrendingUp,
  MessageSquare,
  Calendar,
  Users
} from 'lucide-react';

const tabs = [
  { id: 'manager', label: '管理者', icon: Briefcase },
  { id: 'sales', label: '业务员', icon: User },
  { id: 'product', label: '产品经理', icon: Package },
  { id: 'health', label: '健康专员', icon: HeartPlus },
  { id: 'claims', label: '理赔支持', icon: ShieldAlert },
];

export function ProjectManagementCard() {
  const [activeTab, setActiveTab] = useState('manager');

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 border-b border-gray-100 bg-gray-50/30 gap-4">
        <h2 className="text-lg font-bold text-gray-800">项目跟进总览</h2>
        <div className="flex flex-wrap space-x-1 bg-gray-100/50 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'text-gray-900 bg-white shadow-sm ring-1 ring-gray-200/50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5 mr-1.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 bg-gray-50/30 min-h-[500px]">
        {activeTab === 'manager' && <ManagerView />}
        {activeTab === 'sales' && <SalesView />}
        {activeTab === 'product' && <ProductManagerView />}
        {activeTab === 'health' && <HealthSpecialistView />}
        {activeTab === 'claims' && <ClaimsSupportView />}
      </div>
    </div>
  );
}

function ManagerView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="grid grid-cols-5 gap-4">
        {[
          { label: '进行中项目', value: '8',  },
          { label: '超期项目', value: '3', color: 'text-red-500' },
          { label: '风险项目', value: '3', color: 'text-orange-500' },
          { label: '待开卡实施项目', value: '4' },
          { label: '待协作任务', value: '17' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
            <div className="text-gray-500 text-xs mb-1">{stat.label}</div>
            <div className={`text-2xl font-bold ${stat.color || 'text-gray-800'}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
            <h3 className="font-medium text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
              项目推进管线
            </h3>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              <PipelineColumn
                title="客户拜访"
                count={1}
                items={[
                  {
                    name: '贵州茅台集团健康企...',
                    owner: '王建国',
                    status: '第1轮深度拜访-待推进',
                    alert: '需您协助！客户对于系统对接有疑虑，请确认方案。',
                  },
                ]}
              />
              <PipelineColumn title="招投标" count={0} items={[]} />
              <PipelineColumn
                title="运营交付"
                count={2}
                items={[
                  {
                    name: '长三角交通投资集团...',
                    owner: '史晓晓',
                    status: '已签署《合同履约》确认书',
                    alert: '目前第1轮履约交付执行中...提示存在违约扣款风险...',
                  },
                  {
                    name: '嘉远商业管理项目',
                    owner: '吴强',
                    status: '服务执行中',
                    alert: '当前处于第二轮服务跟进中...提示存在投诉风险...',
                  },
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
              <h3 className="font-medium text-gray-800 mb-4 flex items-center">
                <User className="w-4 h-4 mr-2 text-green-500" />
                协作任务负载
              </h3>
              <div className="space-y-4">
                <LoadItem name="李志强" value={85} />
                <LoadItem name="王静" value={45} />
                <LoadItem name="周雅" value={60} />
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
              <h3 className="font-medium text-gray-800 mb-4 flex items-center">
                <ShieldAlert className="w-4 h-4 mr-2 text-red-500" />
                风险项目提醒
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>长三角交投履约延误风险，待跟进</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>嘉远商业项目员工投诉需介入处理</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 flex flex-col">
          <h3 className="font-medium text-gray-800 mb-4 flex items-center">
            <MessageSquare className="w-4 h-4 mr-2 text-purple-500" />
            AI 管理提醒
          </h3>
          <div className="flex-1 bg-purple-50/50 rounded p-4 text-sm space-y-4 text-gray-700 border border-purple-100/50">
            <p>
              💡 贵州茅台集团企业健康管理项目目前处于关键推进阶段，预计对接难度较高，建议调配技术资源介入。
            </p>
            <p>
              ⚠️ 长三角交通投资项目履约节点临近，健康专员与理赔支持沟通存在断点，建议管理者协调对齐。
            </p>
            <p>
              📈 本月整体交付准时率预测为 92%，嘉远项目影响了整体评分。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineColumn({ title, count, items }: { title: string; count: number; items: any[] }) {
  return (
    <div className="min-w-[240px] flex flex-col bg-gray-50 rounded-md p-3 border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <span className="font-medium text-sm text-gray-700">{title}</span>
        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{count}</span>
      </div>
      <div className="space-y-2 flex-1">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-3 rounded shadow-sm border border-gray-100 text-xs">
            <div className="font-medium text-gray-800 mb-1 line-clamp-1">{item.name}</div>
            <div className="text-gray-500 mb-2">负责人：{item.owner}</div>
            <div className="text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block mb-2">
              {item.status}
            </div>
            {item.alert && (
              <div className="text-red-500 flex items-start gap-1 mt-1 bg-red-50 p-1.5 rounded">
                <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{item.alert}</span>
              </div>
            )}
          </div>
        ))}
        {items.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-400 text-xs py-4 border-2 border-dashed border-gray-200 rounded">
            暂无项目
          </div>
        )}
      </div>
    </div>
  );
}

function LoadItem({ name, value }: { name: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-500">{value}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${value > 80 ? 'bg-red-500' : value > 50 ? 'bg-orange-500' : 'bg-green-500'}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function SalesView() {
  const [handoffViewed, setHandoffViewed] = useState(false);
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 grid lg:grid-cols-3 gap-6">
       <div className="lg:col-span-2 space-y-6">
         {/* Top Card for Status */}
         <div className="bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col">
            <div className="border-b border-gray-100 p-4">
               <h3 className="font-medium text-gray-800">跟进中项目详情</h3>
            </div>
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">长三角交通投资集团员工健康项目</h2>
                    <p className="text-sm text-gray-500 mt-1">项目阶段：运营交付</p>
                  </div>
                  <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm flex items-center font-medium border border-green-100">
                    <CheckCircle className="w-4 h-4 mr-1.5" /> 已成交
                  </div>
               </div>
               
               <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 mb-6 flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                 </div>
                 <div>
                   <div className="text-sm font-medium text-gray-800 mb-1">企小康 (AI项目助手)</div>
                   <div className="text-sm text-gray-600">
                     已知悉情况，将为您匹配该项目健康专员。后续健康专员将拉通理赔支持，并准备统一线上的权益说明及转交单。
                   </div>
                 </div>
               </div>

               <div className="relative pl-6 border-l-2 border-gray-100 space-y-6 pb-4">
                  <div className="relative">
                     <div className="absolute -left-[31px] bg-green-500 rounded-full p-1 border-4 border-white">
                       <CheckCircle className="w-3 h-3 text-white" />
                     </div>
                     <div className="text-sm font-medium text-gray-800">合同盖章与归档</div>
                     <div className="text-xs text-gray-500 mt-1">已由法务部完成审核盖章</div>
                  </div>
                  <div className="relative">
                     <div className="absolute -left-[31px] bg-green-500 rounded-full p-1 border-4 border-white">
                       <CheckCircle className="w-3 h-3 text-white" />
                     </div>
                     <div className="text-sm font-medium text-gray-800">出单申请入口激活</div>
                     <div className="text-xs text-gray-500 mt-1">保单已于2026-05-30生效</div>
                  </div>
                  <div className="relative">
                     <div className="absolute -left-[31px] bg-blue-500 rounded-full p-1 border-4 border-white">
                       <Clock className="w-3 h-3 text-white" />
                     </div>
                     <div className="text-sm font-medium text-gray-800">内部交接会启动</div>
                     <div className="text-xs text-gray-500 mt-1">需与健康专员王静交接服务细节</div>
                     {handoffViewed ? (
                       <div className="mt-2 text-xs text-green-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> 已查看清单并确认</div>
                     ) : (
                       <button onClick={() => setHandoffViewed(true)} className="mt-2 text-xs bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5 rounded flex items-center hover:bg-blue-100 transition-colors">
                          查看交接清单向导
                       </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
         
         {/* My Todo Card */}
         <div className="bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col">
           <div className="border-b border-gray-100 p-4">
              <h3 className="font-medium text-gray-800">我的待办</h3>
           </div>
           <div className="p-0">
             <div className="border-b border-gray-50 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
               <div className="text-sm font-medium text-gray-800 mb-1">整理长三角交投重点诉求</div>
               <div className="text-xs text-gray-500">截止时间：今日 18:00</div>
             </div>
             <div className="border-b border-gray-50 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
               <div className="text-sm font-medium text-gray-800 mb-1">贵州茅台第二轮方案确认</div>
               <div className="text-xs text-gray-500">截止时间：明日 12:00</div>
             </div>
           </div>
         </div>
       </div>

       {/* Timeline right panel */}
       <div className="lg:col-span-1">
         <ProjectTimeline />
       </div>
    </div>
  );
}

function ProductManagerView() {
  const [handled, setHandled] = useState(false);
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-tight">李志强的产品操作台</h2>
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
             <div className="flex justify-between items-start mb-4">
               <div>
                  <h3 className="font-medium text-gray-800 text-lg">长三角交通投资集团员工健康项目</h3>
                  <div className="text-sm text-gray-500 mt-1 flex gap-4">
                    <span>产品经理: 李志强</span>
                    <span>销售: 史晓晓</span>
                  </div>
               </div>
               <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full border border-blue-100">
                 履约实施中
               </span>
             </div>
             
             <div className="space-y-3 mt-6">
               <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50 flex justify-between items-center group hover:bg-white transition-colors hover:border-blue-100 hover:shadow-sm">
                 <div>
                   <div className="text-sm font-medium text-gray-800">确认产品计划书</div>
                   <div className="text-xs text-gray-500 mt-1">包含健管套餐包、企业体检包配置</div>
                 </div>
                 <div className="flex items-center text-green-600 text-sm">
                   <CheckCircle className="w-4 h-4 mr-1.5" /> 已完成
                 </div>
               </div>
               <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50 flex justify-between items-center group hover:bg-white transition-colors hover:border-blue-100 hover:shadow-sm">
                 <div>
                   <div className="text-sm font-medium text-gray-800">确认产品定价与服务范围</div>
                   <div className="text-xs text-gray-500 mt-1">核算最终利润率及成本支出管控模型</div>
                 </div>
                 <div className="flex items-center text-green-600 text-sm">
                   <CheckCircle className="w-4 h-4 mr-1.5" /> 已完成
                 </div>
               </div>
             </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm opacity-60">
             <div className="flex justify-between items-start mb-4">
               <div>
                  <h3 className="font-medium text-gray-800 text-lg">嘉远商业管理项目</h3>
               </div>
               <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                 暂停跟进
               </span>
             </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm h-fit">
           <div className="border-b border-gray-100 p-4">
              <h3 className="font-medium text-gray-800 flex items-center">
                 <Clock className="w-4 h-4 mr-2 text-orange-500" />
                 执行推进待办 (1)
              </h3>
           </div>
           <div className="p-4">
              <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-lg">
                 <div className="flex gap-2 mb-2">
                   <span className="bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded">高优</span>
                 </div>
                 <div className="text-sm font-medium text-gray-800 mb-2">确认产品计价模型调整申请</div>
                 <div className="text-xs text-gray-600 mb-3">长三角交通投资集团需要根据最新参保人数调整基数。</div>
                 <div className="flex gap-2">
                    {handled ? (
                     <div className="flex-1 bg-gray-100 text-gray-500 text-xs py-2 rounded text-center cursor-not-allowed flex items-center justify-center"><CheckCircle className="w-3 h-3 mr-1" /> 已处理</div>
                   ) : (
                     <button onClick={() => setHandled(true)} className="flex-1 bg-orange-500 text-white text-xs py-2 rounded flex items-center justify-center hover:bg-orange-600 transition-colors">
                        去处理
                     </button>
                   )}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function HealthSpecialistView() {
  const [manualUploaded, setManualUploaded] = useState(false);
  const [task1Checked, setTask1Checked] = useState(false);
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
           <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-tight">健康专员 王静</h2>
           
           <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
             <h3 className="font-medium text-gray-800 text-base mb-1">长三角交通投资集团员工健康项目</h3>
             <div className="text-xs text-gray-500 mb-4">待处理工单列表</div>

             <div className="space-y-4 border-l-2 border-gray-100 ml-2 pl-4 pb-2">
                <div className="relative">
                   <div className="absolute -left-[23px] bg-blue-500 rounded-full p-1 border-4 border-white">
                     <Clock className="w-3 h-3 text-white" />
                   </div>
                   <div className="text-sm font-medium text-gray-800">补充员工权益说明书并上传权益说明材料</div>
                   <div className="text-xs text-gray-500 mt-1 mb-2">请确认内部手册并整理成向客户公开展示的内容版本。</div>
                   {manualUploaded ? (
                     <div className="mt-2 text-xs text-green-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> 已上传《补充员工权益说明书》</div>
                   ) : (
                     <button onClick={() => setManualUploaded(true)} className="mt-2 text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded flex items-center hover:bg-gray-50 transition-colors">
                        上传说明书
                     </button>
                   )}
                </div>
                
                <div className="relative">
                   <div className="absolute -left-[23px] bg-gray-200 rounded-full w-4 h-4 border-4 border-white"></div>
                   <div className="text-sm font-medium text-gray-500">确认理赔服务流程与服务承诺</div>
                   <div className="text-xs text-gray-400 mt-1">需等待说明材料上传完毕后激活。</div>
                </div>
             </div>
           </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-100 shadow-sm h-fit">
           <div className="border-b border-gray-100 p-4">
              <h3 className="font-medium text-gray-800 flex items-center">
                 <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                 今日待办
              </h3>
           </div>
           <div className="p-0">
              <div className="p-4 border-b border-gray-50 flex items-start gap-3 hover:bg-gray-50 cursor-pointer">
                 <input type="checkbox" checked={task1Checked} onChange={() => setTask1Checked(!task1Checked)} className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                 <div>
                    <div className="text-sm font-medium text-gray-800">拉通理赔支持建立企微群</div>
                    <div className="text-xs text-gray-500 mt-1">长三角交投项目组</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function ClaimsSupportView() {
  const [rulesConfigured, setRulesConfigured] = useState(false);
  const [faqUploaded, setFaqUploaded] = useState(false);
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
       <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
           <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-tight">理赔支持 周雅</h2>
           
           <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
             <h3 className="font-medium text-gray-800 text-base mb-1">长三角交通投资集团员工健康项目</h3>
             <div className="text-xs text-gray-500 mb-4">待理赔设定任务</div>

             <div className="space-y-4 border-l-2 border-gray-100 ml-2 pl-4 pb-2">
                <div className="relative">
                   <div className="absolute -left-[23px] bg-purple-500 rounded-full p-1 border-4 border-white">
                     <Clock className="w-3 h-3 text-white" />
                   </div>
                   <div className="text-sm font-medium text-gray-800">确认理赔端服务流程与服务要求</div>
                   <div className="text-xs text-gray-500 mt-1 mb-2">明确免赔额设定、指定医院名录过滤规则。</div>
                   {rulesConfigured ? (
                     <div className="mt-2 text-xs text-green-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> 理赔规则已配置完成</div>
                   ) : (
                     <button onClick={() => setRulesConfigured(true)} className="mt-2 text-xs bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1.5 rounded flex items-center hover:bg-purple-100 transition-colors">
                        配置理赔规则
                     </button>
                   )}
                </div>
                
                <div className="relative">
                   <div className="absolute -left-[23px] bg-purple-500 rounded-full p-1 border-4 border-white">
                     <Clock className="w-3 h-3 text-white" />
                   </div>
                   <div className="text-sm font-medium text-gray-800">整理自助理赔常见问题 FAQ</div>
                   <div className="text-xs text-gray-500 mt-1 mb-2">输出用于企业内部宣发的QA内容文档。</div>
                   {faqUploaded ? (
                     <div className="mt-2 text-xs text-green-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> FAQ文档已上传并发布</div>
                   ) : (
                     <button onClick={() => setFaqUploaded(true)} className="mt-2 text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded flex items-center hover:bg-gray-50 transition-colors">
                        上传FAQ文档
                     </button>
                   )}
                </div>
             </div>
           </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-100 shadow-sm h-fit">
           <div className="border-b border-gray-100 p-4">
              <h3 className="font-medium text-gray-800 flex items-center">
                 <CheckCircle className="w-4 h-4 mr-2 text-purple-500" />
                 审核效能统计
              </h3>
           </div>
           <div className="p-4 space-y-4">
              <div className="flex justify-between items-center text-sm">
                 <span className="text-gray-600">本周处理单量</span>
                 <span className="font-medium text-gray-800">124单</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                 <span className="text-gray-600">平均审核时效</span>
                 <span className="font-medium text-gray-800">1.2天</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                 <span className="text-gray-600">一次性通过率</span>
                 <span className="font-medium text-green-600">96.5%</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                 <div className="text-xs text-gray-500 text-center">效能处于优良水平，继续保持🏅</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}


function ProjectTimeline() {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center p-4 border-b border-gray-50">
        <h3 className="font-bold text-gray-800 text-lg">项目时光轴</h3>
        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-medium">运营交付进行中</span>
      </div>
      
      <div className="p-5 flex-1 overflow-y-auto max-h-[600px]">
        <div className="relative pl-6 space-y-6">
          <div className="absolute top-2 bottom-2 left-[11px] w-[2px] bg-blue-500 rounded"></div>
          
          {/* 项目创建 */}
          <div className="relative">
            <div className="absolute -left-[35px] w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center border-2 border-white z-10 shadow-sm">
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm pb-5">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-gray-800">项目创建</h4>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-medium">已完成</span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full mb-3">
                <div className="h-full bg-blue-600 rounded-full w-full"></div>
              </div>
              <p className="text-xs text-gray-500 mb-2">业务员 张俊杰 · 今天</p>
              <div className="text-sm bg-gray-50/80 px-3 py-2 rounded text-gray-700">已创建项目工作区</div>
            </div>
          </div>

          {/* 首访准备 */}
          <div className="relative">
            <div className="absolute -left-[35px] w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center border-2 border-white z-10 shadow-sm">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-gray-800">首访准备</h4>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-medium">已完成</span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full mb-3">
                <div className="h-full bg-blue-600 rounded-full w-full"></div>
              </div>
              <p className="text-xs text-gray-500 mb-3">企小康 / 产品经理 李志强 · 今天</p>
              <div className="bg-blue-50/30 rounded-lg p-1">
                {[
                  { label: "客户画像", status: "已完成" },
                  { label: "市场调研", status: "已完成" },
                  { label: "首访话术", status: "已完成" }
                ].map((item, idx) => (
                   <div key={idx} className="flex justify-between items-center px-2 py-1.5 hover:bg-blue-50/50 rounded transition-colors">
                     <span className="flex items-center text-xs text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {item.label}
                     </span>
                     <span className="text-[10px] text-green-600 font-medium">{item.status}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>

          {/* 客户拜访 */}
          <div className="relative">
            <div className="absolute -left-[35px] w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center border-2 border-white z-10 shadow-sm">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-gray-800">客户拜访</h4>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-medium">已完成</span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full mb-3">
                <div className="h-full bg-blue-600 rounded-full w-full"></div>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">业务员 张俊杰 · 进行中 · 已完成 1 轮 · 当前第 1 轮</p>
              
              <div className="bg-blue-50/50 rounded-lg p-2 border border-blue-100 shadow-sm">
                 <div className="flex justify-between items-center px-1 mb-2">
                   <h5 className="text-xs font-bold text-blue-800">第 1 轮拜访</h5>
                   <span className="text-[10px] text-blue-700 flex items-center">已完成 <ChevronRight className="w-3 h-3 ml-1" /></span>
                 </div>
                 <div className="space-y-1">
                   {[
                    { label: "拜访客户", status: "已完成" },
                    { label: "拜访纪要", status: "已完成" },
                    { label: "派发跟进任务", status: "已完成" },
                    { label: "生成产品计划书", status: "已完成" }
                   ].map((item, idx) => (
                     <div key={idx} className="flex justify-between items-center px-2 py-1.5 bg-white/60 rounded">
                       <span className="flex items-center text-xs text-gray-700">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {item.label}
                       </span>
                       <span className="text-[10px] text-green-600 font-medium">{item.status}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>

          {/* 招投标 */}
          <div className="relative">
            <div className="absolute -left-[35px] w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center border-2 border-white z-10 shadow-sm">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm pb-2">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-gray-800">招投标</h4>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-medium">已完成</span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full mb-3">
                <div className="h-full bg-blue-600 rounded-full w-full"></div>
              </div>
              <p className="text-xs text-gray-500 mb-3">理赔支持 周雅 · 已完成 5 / 5</p>
              
              <div className="space-y-1">
                 {[
                  { label: "评分方案", status: "已完成" },
                  { label: "解读招标文件", status: "已完成" },
                  { label: "生成标书", status: "已完成" },
                  { label: "生成述标PPT", status: "已完成" },
                  { label: "AI 陪练", status: "已完成" }
                 ].map((item, idx) => (
                   <div key={idx} className="flex justify-between items-center px-2 py-1.5 hover:bg-gray-50 rounded transition-colors">
                     <span className="flex items-center text-xs text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {item.label}
                     </span>
                     <span className="text-[10px] text-green-600 font-medium">{item.status}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
