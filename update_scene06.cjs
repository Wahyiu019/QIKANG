const fs = require('fs');

const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

const compStart = mbContent.indexOf('export function VisitPitchReportCard({');
const returnStart = mbContent.indexOf('return (', compStart);
const nextCompStart = mbContent.indexOf('export function ComplianceAnalysisReportCard', compStart);

if (compStart !== -1 && returnStart !== -1 && nextCompStart !== -1) {
   const before = mbContent.substring(0, compStart);
   const after = mbContent.substring(nextCompStart);
   const replacement = `export function VisitPitchReportCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  const [activeRole, setActiveRole] = useState<"vp" | "hrd" | "handler">("vp");

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <Lightbulb size={18} className="mr-2" />
          【某省烟草集团】分层汇报拜访话术
        </div>
        <div className="text-white/80 text-sm">专家级智能生成</div>
      </div>

      <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto overflow-y-hidden">
        <button
          onClick={() => setActiveRole("vp")}
          className={\`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative \${
            activeRole === "vp"
              ? "text-orange-600 bg-orange-50/50"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          }\`}
        >
          企业分管总
          {activeRole === "vp" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
          )}
        </button>
        <button
          onClick={() => setActiveRole("hrd")}
          className={\`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative \${
            activeRole === "hrd"
              ? "text-orange-600 bg-orange-50/50"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          }\`}
        >
          人力资源部门 (HRD)
          {activeRole === "hrd" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
          )}
        </button>
        <button
          onClick={() => setActiveRole("handler")}
          className={\`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative \${
            activeRole === "handler"
              ? "text-orange-600 bg-orange-50/50"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          }\`}
        >
          业务经办人
          {activeRole === "handler" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
          )}
        </button>
      </div>

      <div className="p-5 h-[320px] overflow-y-auto">
        {activeRole === "vp" && (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <h4 className="text-base font-bold text-gray-900 border-l-4 border-amber-500 pl-3">沟通关注核心：同业对标与战略价值</h4>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <p className="text-sm font-bold text-amber-900 mb-2">同行怎么做？</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                “张总您好，我们注意到同类型的大型烟草集团、央国企，近期都在引入平安的『标准产品组合』。”
              </p>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                <li><strong className="text-gray-800">降低成本试水：</strong>不进行大规模定制，先通过标品进行500人/8周封闭试点。</li>
                <li><strong className="text-gray-800">建立高管专属：</strong>提供高额度的体检、慢病、名医绿通支持。</li>
                <li><strong className="text-gray-800">快速见效闭环：</strong>三个月内即可呈现健康数据ROI转化，展现管理成果。</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mt-3">
              <p className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                 核心价值 <span className="ml-2 text-xs text-orange-600 font-normal px-2 py-0.5 bg-orange-50 rounded">赋能企业战略</span>
              </p>
              <p className="text-xs text-gray-600">
                “这种标品切入的方式，不仅预算可控，而且能迅速匹配咱们当前多机构、人员复杂的特点，稳妥推进员工关怀落地。”
              </p>
            </div>
          </div>
        )}

        {activeRole === "hrd" && (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <h4 className="text-base font-bold text-gray-900 border-l-4 border-amber-500 pl-3">沟通关注核心：预算落地与税优力度</h4>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <p className="text-sm font-bold text-orange-900 mb-2">商业健险税优政策支持</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                “王局您好，针对咱们千万元左右的预算池，通过平安的标准企康方案不仅能覆盖所有员工门诊/住院，还能够充分利用《企业所得税法实施条例》中补充医疗费用的税优额度（员工工资总额的5%免税），实现企业和员工的双赢。”
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mt-3">
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                <li><strong className="text-gray-800">标准分层打包：</strong>核心/基础/内勤清晰分类，预算精准投放。</li>
                <li><strong className="text-gray-800">不改变现有考核规则：</strong>快速对接到您的财务报销路径中。</li>
              </ul>
            </div>
          </div>
        )}

        {activeRole === "handler" && (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <h4 className="text-base font-bold text-gray-900 border-l-4 border-amber-500 pl-3">沟通关注核心：合规落地与执行成本</h4>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-bold text-yellow-900 mb-2">是否合规？后续如何操作？</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                “李处长，执行细节您完全不用担心。我们这套标品是经过多个央企验证的<strong className="text-gray-900">100%合规方案</strong>。”
              </p>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                <li><strong className="text-gray-800">合规报备：</strong>所有条款、免责声明等全部备齐。</li>
                <li><strong className="text-gray-800">低工作量：</strong>系统免对接支持，直连微信小程序，不用您这边导数据。</li>
                <li><strong className="text-gray-800">解决赔付漏洞：</strong>帮您把现在『待补』的管理规范和赔付明细理顺。</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex justify-end">
        <button onClick={onDownload} className="flex gap-1.5 items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded shadow-sm transition-colors">
          <Download size={14} />
          下载完整话术手册 (PDF)
        </button>
      </div>
    </div>
  );
}
`;
   mbContent = before + replacement + after;
   fs.writeFileSync(mbPath, mbContent, 'utf8');
   console.log('Successfully updated VisitPitchReportCard with roles');
} else {
  console.log('Failed to find markers.');
}
