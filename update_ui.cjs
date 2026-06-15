const fs = require('fs');
let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

// Header gradients
content = content.replace(/from-blue-600 to-indigo-600/g, 'from-orange-600 to-amber-600');
content = content.replace(/from-emerald-600 to-teal-600/g, 'from-amber-600 to-orange-500');
content = content.replace(/from-blue-700 to-indigo-800/g, 'from-orange-600 to-amber-600');
content = content.replace(/from-teal-700 to-emerald-800/g, 'from-amber-600 to-orange-600');
content = content.replace(/from-slate-700 to-gray-800/g, 'from-orange-600 to-amber-600');
content = content.replace(/from-gray-700 to-stone-800/g, 'from-amber-600 to-orange-600');

// BiddingDocumentAnalysisCard numbers modification
content = content.replace(/<h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">2、报价要求<\/h4>/g, '###REPLACE_2###');
content = content.replace(/<h4 className="text-sm font-bold text-blue-900 border-b border-blue-200 pb-2 mb-3">3、投标人资质要求<\/h4>/g, '###REPLACE_3###');
content = content.replace(/###REPLACE_2###/g, '<h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">3、报价要求</h4>');
content = content.replace(/###REPLACE_3###/g, '<h4 className="text-sm font-bold text-blue-900 border-b border-blue-200 pb-2 mb-3">2、投标人资质要求</h4>');

// Let's refine the contents for BidGenerationCard & BidInspectionCard.
const bidGenerationCardNew = `
export function BidGenerationCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <FileText size={18} className="mr-2" />
          企康项目投标书生成结果
        </div>
        <button className="flex items-center gap-1.5 text-xs text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded transition-colors font-bold">
          <Download size={14} />
          下载 Docx 文档
        </button>
      </div>

      <div className="p-5 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="bg-orange-50/80 border border-orange-100 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-3">一、商务报价文件</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-700">
            <div>
              <span className="font-bold flex items-center text-orange-800"><CheckCircle size={12} className="text-orange-500 mr-1.5" />1.1 投标函</span>
              <p className="mt-1 text-gray-500 pl-4">公司全称声明、服务响应承诺、履约保证条款及效力说明。</p>
            </div>
            <div>
              <span className="font-bold flex items-center text-orange-800"><CheckCircle size={12} className="text-orange-500 mr-1.5" />1.2 投标总价汇总表</span>
              <p className="mt-1 text-gray-500 pl-4">含各下属企业层级体检预算、项目总报价合计（大写及小写）。</p>
            </div>
            <div>
              <span className="font-bold flex items-center text-orange-800"><CheckCircle size={12} className="text-orange-500 mr-1.5" />1.3 分项报价明细表</span>
              <p className="mt-1 text-gray-500 pl-4">高管套餐、普通套餐、增项检查明细单价拆解及各项耗材说明。</p>
            </div>
            <div>
              <span className="font-bold flex items-center text-orange-800"><CheckCircle size={12} className="text-orange-500 mr-1.5" />1.4 费用构成说明</span>
              <p className="mt-1 text-gray-500 pl-4">报价内包含的平台对接费、驻场服务费、冷链运输及耗材成本剖析。</p>
            </div>
            <div className="col-span-2">
              <span className="font-bold flex items-center text-orange-800"><CheckCircle size={12} className="text-orange-500 mr-1.5" />1.5 增值服务承诺</span>
              <p className="mt-1 text-gray-500 pl-4">承诺免收家属体检平台服务费，提供每月一次专家在线讲座等增值项目。</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">二、商务响应文件</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-700">
            <div>
              <span className="font-bold flex items-center text-amber-800"><CheckCircle size={12} className="text-amber-500 mr-1.5" />2.1 资格证明文件</span>
              <p className="mt-1 text-gray-500 pl-4">最新年检营业执照、ISO9001认证、医疗执业许可证彩色原件扫描。</p>
            </div>
            <div>
              <span className="font-bold flex items-center text-amber-800"><CheckCircle size={12} className="text-amber-500 mr-1.5" />2.2 商务条款响应表</span>
              <p className="mt-1 text-gray-500 pl-4">付款方式（预付+后付账期）、税务发票类型、履约保证金无偏离响应。</p>
            </div>
            <div>
              <span className="font-bold flex items-center text-amber-800"><CheckCircle size={12} className="text-amber-500 mr-1.5" />2.3 投标人情况介绍</span>
              <p className="mt-1 text-gray-500 pl-4">平安健康互联网股份有限公司基本盘、股权结构及在数字化企业健康领域的优势。</p>
            </div>
            <div>
              <span className="font-bold flex items-center text-amber-800"><CheckCircle size={12} className="text-amber-500 mr-1.5" />2.4 其他商务资料</span>
              <p className="mt-1 text-gray-500 pl-4">近三年无重大违规记录声明、资金流水证明及相关无行贿犯罪记录声明。</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-3">三、技术响应文件</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-700">
            <div>
               <p><strong className="text-orange-800">3.1 技术规格响应表：</strong>企业康养中台系统架构白皮书、SaaS平台数据安全隔离技术方案。</p>
            </div>
            <div>
               <p><strong className="text-orange-800">3.2 企业实力与业绩证明：</strong>近三年20家万级员工以上科技制造企业合作标杆案例（含联想同行业项目）。</p>
            </div>
            <div>
               <p><strong className="text-orange-800">3.3 体检中心资源配置：</strong>全国一二线城市三甲/知名民营体检机构覆盖清单及排期能力。</p>
            </div>
            <div>
               <p><strong className="text-orange-800">3.4 信息系统建设：</strong>员工端小程序预约、企微/钉钉单点登录免密接入路径和API联调指南。</p>
            </div>
            <div>
               <p><strong className="text-orange-800">3.5 服务流程方案：</strong>自预约、到检核销、智能报告解读到检后慢病随访的全链路SOP标准操作程序。</p>
            </div>
            <div>
               <p><strong className="text-orange-800">3.6 交通方案：</strong>为重点厂区定制的大巴接送及上门移动体检车排期预案。</p>
            </div>
            <div className="col-span-2 text-gray-600 bg-white/50 p-2 rounded border border-orange-50">
               <strong className="text-orange-800">3.7 综合服务方案及 3.8 承诺书：</strong>驻点医务室运营、企康闭环管理服务全景图及7x24小时客户服务SLA保障承诺书。
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">四、附件证明清单</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-700">
            <li className="flex items-center"><Paperclip size={14} className="text-orange-500 mr-2 flex-shrink-0" /> 附件1: 各类资质证书复印件（加盖鲜章版）</li>
            <li className="flex items-center"><Paperclip size={14} className="text-orange-500 mr-2 flex-shrink-0" /> 附件2: 合同业绩原件复印表（重点展示BAT大厂合同关键页）</li>
            <li className="flex items-center"><Paperclip size={14} className="text-orange-500 mr-2 flex-shrink-0" /> 附件3: 系统核心设备清单及等保三级证明</li>
            <li className="flex items-center"><Paperclip size={14} className="text-orange-500 mr-2 flex-shrink-0" /> 附件4: 50名百强名医团队执业医师资格证汇编</li>
            <li className="flex items-center"><Paperclip size={14} className="text-orange-500 mr-2 flex-shrink-0" /> 附件5: 项目经理履历及PMP项目管理证书</li>
            <li className="flex items-center"><Paperclip size={14} className="text-orange-500 mr-2 flex-shrink-0" /> 附件6: 脱敏的企业健康白皮书范文</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
`;

const bidInspectionCardNew = `
export function BidInspectionCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <ShieldAlert size={18} className="mr-2" />
          标书质检结果 - 企康项目
        </div>
      </div>

      <div className="p-5 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="grid grid-cols-3 gap-3 mb-2">
          <div className="bg-rose-50 border border-rose-100 p-3 rounded-lg flex flex-col items-center justify-center">
             <div className="text-rose-600 font-bold text-xl">1</div>
             <div className="text-xs text-rose-800 font-medium">严重风险</div>
          </div>
          <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg flex flex-col items-center justify-center">
             <div className="text-amber-600 font-bold text-xl">2</div>
             <div className="text-xs text-amber-800 font-medium">中等问题</div>
          </div>
          <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg flex flex-col items-center justify-center">
             <div className="text-orange-600 font-bold text-xl">4</div>
             <div className="text-xs text-orange-800 font-medium">轻微问题</div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-4 py-2 bg-orange-50 border-b border-orange-100 font-bold text-sm text-orange-900 flex items-center">
            <ListChecks size={16} className="mr-2 text-orange-600" />
            质检维度一览及详细说明
          </div>
          <div className="p-4 space-y-4">
             <div className="flex items-start">
               <AlertCircle size={16} className="text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
               <div>
                 <span className="text-sm font-bold text-gray-900 block mb-1">1、内容完整性检查</span>
                 <p className="text-xs text-gray-700 leading-relaxed bg-rose-50/50 p-2 rounded">
                   <strong className="text-rose-700">严重废标风险点：</strong>第3节“企业实力与业绩证明”中，要求提供的《近三年亿元级别大健康管理项目中标通知书》缺失关键的签章页（仅有正文页，缺乏法律效力）。<br/>
                   <strong className="text-gray-600 mt-1 inline-block">系统建议：</strong>请立即联系合同档案库补充该红头公章文件并合并录入到附件2中。
                 </p>
               </div>
             </div>
             
             <div className="flex items-start border-t border-gray-100 pt-4">
               <AlertTriangle size={16} className="text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
               <div>
                 <span className="text-sm font-bold text-gray-900 block mb-1">2、格式质量检查</span>
                 <p className="text-xs text-gray-700 leading-relaxed bg-amber-50/50 p-2 rounded">
                   <strong className="text-amber-700">排版倒扣分项：</strong>标书正文第45-48页的“健康管理干预模型数据”插图画质模糊且图例文字小于标准要求的宋体五号字。商务报价单（表1-3）金额在第12行人民币大写中漏写“整”字。<br/>
                 </p>
               </div>
             </div>

             <div className="flex items-start border-t border-gray-100 pt-4">
               <Info size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
               <div>
                 <span className="text-sm font-bold text-gray-900 block mb-1">3、附件内容检查</span>
                 <p className="text-xs text-gray-700 leading-relaxed bg-orange-50/30 p-2 rounded">
                   <strong className="text-orange-700">证明证件合规度：</strong>项目经理PMP证书复印件边缘存在黑色扫描遮影，营业执照副本的二维条形码识别度不高，但不影响整体判读，属于轻微瑕疵。<br/>
                 </p>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-lg shadow-sm mt-4">
          <h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3 flex items-center">
             <Lightbulb size={16} className="mr-2 text-amber-600" /> 5、标书整体完善建议与行动项
          </h4>
          <ul className="list-decimal pl-5 text-xs text-amber-900 space-y-1.5 font-medium">
            <li><span className="text-rose-600 font-bold">[紧急行动]</span> 补齐缺失的《大型国企体检服务中标通知书》的骑缝章及盖章页扫描。</li>
            <li><span className="text-amber-700 font-bold">[校对]</span> 商务审卷人使用财务辅助软件全面校验一次报价清单中的大小写对应关系，确保大写带有“整”字及位数正确无误差。</li>
            <li>统一全文档的表头字体与段内间距尺寸，重新出图替换第45-48页的低像素流程图，确保系统架构拓扑图放大后清晰可见。</li>
            <li>要求投标专员前往证照室重新使用高清彩色扫描仪获取所有相关营业执照、等保三级证明的高清版本（设定600dpi以上）。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
`;

content = content.replace(/export function BidGenerationCard[\s\S]*?export function BidInspectionCard/, bidGenerationCardNew + '\\n\\nexport function BidInspectionCard');
content = content.replace(/export function BidInspectionCard[\s\S]*?export function MaterialReviewCard/, bidInspectionCardNew + '\\n\\nexport function MaterialReviewCard');

// Change card color palette for MaterialReviewCard to orange/amber (it was gray/rose before)
content = content.replace(/from-gray-700 to-stone-800/g, 'from-orange-600 to-amber-600');
content = content.replace(/<div className="px-2.5 py-1 bg-rose-500 text-white/g, '<div className="px-2.5 py-1 bg-red-500 text-white');

// Unify left nav bot button:
const sidebarFile = 'src/components/Sidebar.tsx';
let sidebarContent = fs.readFileSync(sidebarFile, 'utf8');

// I will move the bot button inside the top div group.
sidebarContent = sidebarContent.replace(
  /<div className="flex flex-col items-center space-y-4 w-full">\s*<button[\s\S]*?\(.*'universal'\)[\s\S]*?<\/button>/,
  '<div className="flex flex-col items-center space-y-4 w-full">'
); // remove it from the bottom

// Insert after collab
sidebarContent = sidebarContent.replace(
  /(<NavItem icon={<Hash size={20} \/>} label="协作中心" .* \/>)/,
  '$1\n          <button onClick={() => onTabChange("universal")} className={`w-full flex flex-col items-center justify-center py-2.5 relative group transition-colors ${activeTab === "universal" ? "text-orange-500 bg-orange-50" : "text-orange-500 hover:text-orange-600 hover:bg-orange-50"}`}>\n            <Bot size={20} className="mb-0.5" />\n            <span className="text-[10px] mt-0.5 scale-90 font-bold whitespace-nowrap">万能服务</span>\n            <span className="absolute top-1 right-2 bg-red-500 text-white text-[9px] font-bold px-1 rounded-full min-w-[14px] text-center border border-white">3</span>\n          </button>'
);

fs.writeFileSync(sidebarFile, sidebarContent);
fs.writeFileSync(file, content);
