const fs = require('fs');

function extractComponent(code, name) {
  const lines = code.split('\n');
  const start = lines.findIndex(l => l.includes('function ' + name));
  if (start === -1) return null;
  let depth = 0;
  let end = -1;
  for (let i = start; i < lines.length; i++) {
    if (lines[i].includes('{')) depth += (lines[i].match(/\{/g) || []).length;
    if (lines[i].includes('}')) depth -= (lines[i].match(/\}/g) || []).length;
    if (depth === 0 && i > start) {
      end = i;
      break;
    }
  }
  return { start, end, content: lines.slice(start, end + 1).join('\n') };
}

let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');
const res = extractComponent(code, 'BidDocInterpretationCard');

let newContent = `export function BidDocInterpretationCard() {
  return (
    <div className="w-full max-w-5xl bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm mt-4 font-['Microsoft_YaHei',_'sans-serif'] text-gray-800 animate-in fade-in slide-in-from-bottom-2">
      {/* Header */}
      <div className="text-center py-6 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 py-1 px-4 bg-orange-500 text-white text-xs font-bold rounded-bl-xl shadow-sm">
          AI智能体输出
        </div>
        <h2 className="text-3xl font-bold text-[#008f7a] mb-2 font-['Arial',_'sans-serif'] tracking-tight flex items-center justify-center border-none">
          企康标讯解读 Agent <span className="text-gray-300 mx-3 font-normal">|</span> <span className="text-[#d36437]">烟草企康投标分析</span>
        </h2>
        <div className="text-gray-500 text-sm mt-2">
          模拟项目：云南省烟草公司曲靖市公司2025-2027年企业健康委托管理及补充医疗保险服务项目
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs font-semibold">
          <div className="flex items-center text-[#008f7a] px-3 py-1.5 bg-[#e5f4f2] border border-[#b2dfd7] rounded-full">
            <Building2 className="w-3.5 h-3.5 mr-1.5" /> 主投: 平安产险云南分公司
          </div>
          <div className="flex items-center text-[#d36437] px-3 py-1.5 bg-[#faebe4] border border-[#f0c3ae] rounded-full">
            <MapPin className="w-3.5 h-3.5 mr-1.5" /> 履约: 曲靖中心支公司
          </div>
          <div className="flex items-center text-[#c28427] px-3 py-1.5 bg-[#fdf3e6] border border-[#f6ddbb] rounded-full">
            <ShieldAlert className="w-3.5 h-3.5 mr-1.5" /> 风格: 淡雅预警
          </div>
          <div className="flex items-center text-[#c54b38] px-3 py-1.5 bg-[#fde9e6] border border-[#f9c0b7] rounded-full">
            <Target className="w-3.5 h-3.5 mr-1.5" /> 目标: 24小时定节点
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Section 1 */}
        <div className="bg-white border-l-4 border-orange-500 pl-4 py-1">
          <h3 className="text-lg font-bold text-gray-800 flex items-center m-0 p-0 border-none">
            <span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">1</span>
            投标关键节点
          </h3>
        </div>
        <div className="px-4">
          <div className="relative">
            <div className="absolute top-8 left-6 right-6 h-0.5 bg-orange-200"></div>
            <div className="flex justify-between relative z-10 w-full">
              {[
                { label: '公告发布', icon: '📢', date: '2025.04.18' },
                { label: '文件获取', icon: '📝', date: '04.18-04.25\\n17:00' },
                { label: '答疑截止', icon: '❓', date: '04.28\\n17:00' },
                { label: '澄清发布', icon: '📢', date: '04.30' },
                { label: '保证金截止', icon: '💰', date: '05.08\\n16:00' },
                { label: '投标截止/开标', icon: '🔨', date: '05.09\\n09:30' },
                { label: '服务启动', icon: '🚀', date: '06.01' },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <div className="text-[11px] font-bold text-gray-800 mb-2">{step.label}</div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-orange-400 flex items-center justify-center text-xl shadow-sm mb-2 relative">
                    {step.icon}
                  </div>
                  <div className="text-[10px] text-gray-600 text-center whitespace-pre-line leading-tight">
                    {step.date}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg py-2 px-4 flex justify-center items-center text-sm font-bold text-orange-800">
            <span className="mr-2 text-base">💡</span> <span className="text-orange-600 mr-2">销售第一动作:</span> 当天拉群、转发节点、确认能否投。
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white border-l-4 border-orange-500 pl-4 py-1">
          <h3 className="text-lg font-bold text-gray-800 flex items-center m-0 p-0 border-none">
            <span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">2</span>
            项目关键信息
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
          {[
            { title: '项目类型', icon: '📦', bg: 'bg-[#e5f4f2]', border: 'border-[#b2dfd7]', titleColor: 'text-[#008f7a]', content: '健康委托管理\\n+ 补充医疗\\n+ 门诊购药\\n+ 就医协助' },
            { title: '服务对象', icon: '👥', bg: 'bg-[#faebe4]', border: 'border-[#f0c3ae]', titleColor: 'text-[#d36437]', content: '在岗员工、\\n内部退养、\\n退休人员；\\n家属待确认' },
            { title: '服务期限', icon: '📅', bg: 'bg-[#f4f7e6]', border: 'border-[#d0dfbb]', titleColor: 'text-[#6e8b3d]', content: '三年，合同\\n一年一签，\\n年度评价合格\\n后续签' },
            { title: '预算口径', icon: '💰', bg: 'bg-[#fdf3e6]', border: 'border-[#f6ddbb]', titleColor: 'text-[#c28427]', content: '总预算XXX万元；\\n人均限价XXX元/年；\\n管理费率XXX%' },
          ].map((info, idx) => (
            <div key={idx} className={\`rounded-xl border \${info.border} \${info.bg} flex flex-col items-center text-center p-4\`}>
              <div className={\`flex items-center font-bold mb-2 \${info.titleColor}\`}>
                <span className="text-xl mr-2">{info.icon}</span> {info.title}
              </div>
              <div className="text-gray-700 text-[11px] font-medium whitespace-pre-line leading-relaxed">
                {info.content}
              </div>
            </div>
          ))}
        </div>

        {/* Section 3 */}
        <div className="bg-white border-l-4 border-orange-500 pl-4 py-1">
          <h3 className="text-lg font-bold text-gray-800 flex items-center m-0 p-0 border-none">
            <span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">3</span>
            主投主体与分工
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6 px-4">
          <div className="flex-[0.8] space-y-3">
            <div className="border border-orange-200 rounded-lg bg-orange-50/50 p-3 flex flex-col">
              <div className="flex items-center text-orange-800 font-bold text-sm mb-1">
                <Building2 className="w-4 h-4 mr-1.5 text-orange-600" /> 主投主体:
              </div>
              <div className="font-bold text-gray-900 text-[13px] ml-5">中国平安财产保险股份有限公司云南分公司</div>
            </div>
            <div className="border border-[#b2dfd7] rounded-lg bg-[#e5f4f2]/50 p-3 flex flex-col">
              <div className="flex items-center text-[#008f7a] font-bold text-sm mb-1">
                <MapPin className="w-4 h-4 mr-1.5 text-[#008f7a]" /> 属地履约:
              </div>
              <div className="font-bold text-gray-900 text-[13px] ml-5">中国平安财产保险股份有限公司曲靖中心支公司</div>
            </div>
          </div>
          <div className="flex-1 border-l-2 border-gray-100 pl-6 space-y-3 pt-2 text-xs text-gray-700 font-medium">
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 shrink-0"></div>
              <div><strong className="text-orange-700">云南分公司:</strong> 省级授权、合同签署、开票出单、核保协调、集团健康资源统筹</div>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 shrink-0"></div>
              <div><strong className="text-orange-700">曲靖中心支:</strong> 员工宣导、材料收集、理赔协助、线下服务、日常客户沟通</div>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 shrink-0"></div>
              <div><strong className="text-gray-900">若招标要求健康险/养老险主体:</strong> 切换平安健康险或平安养老险主投</div>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 shrink-0"></div>
              <div><strong className="text-gray-900">不接受联合体时:</strong> 协同资源只能写为集团服务支持，避免违规分包</div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white border-l-4 border-orange-500 pl-4 py-1">
          <h3 className="text-lg font-bold text-gray-800 flex items-center m-0 p-0 border-none">
            <span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">4</span>
            资格闪告要求
          </h3>
        </div>
        <div className="px-4 grid grid-cols-1 md:grid-cols-5 gap-3">
          {[
            '经营保险业务\\n许可证、业务范围\\n含健康保险或\\n短期健康保障',
            '项目所在地\\n设有分支机构或\\n服务机构',
            '未列入烟草行业\\n不良供应商名单',
            '信用中国、\\n裁判文书、\\n行贿记录\\n提前自查',
            '关联关系: 同负责人\\n或控股管理关系\\n单位不得同时\\n投标'
          ].map((req, idx) => (
            <div key={idx} className="border border-orange-100 bg-[#fff5ef] rounded-lg p-3 flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full border border-orange-300 bg-white flex items-center justify-center mb-2">
                <Check className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-[10px] text-gray-800 font-medium whitespace-pre-line leading-relaxed">
                {req}
              </div>
            </div>
          ))}
        </div>

        {/* Section 5 */}
        <div className="bg-white border-l-4 border-orange-500 pl-4 py-1">
          <h3 className="text-lg font-bold text-gray-800 flex items-center m-0 p-0 border-none">
            <span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">5</span>
            服务内容要求
          </h3>
        </div>
        <div className="px-4">
          <div className="w-full flex border-b border-orange-200 bg-orange-400 text-white font-bold text-xs text-center rounded-t-lg overflow-hidden">
            <div className="w-1/4 py-2 border-r border-orange-300">服务模块</div>
            <div className="w-1/4 py-2 border-r border-orange-300">核心要求</div>
            <div className="w-1/4 py-2 border-r border-orange-300">服务模块</div>
            <div className="w-1/4 py-2">核心要求</div>
          </div>
          <div className="flex shadow-sm border border-t-0 border-gray-200 rounded-b-lg overflow-hidden">
            <div className="w-1/2 flex flex-col border-r border-gray-200">
              {[
                { title: '健康委托管理', icon: '💼', req: '资金管理、赔付流程、月报、审计配合' },
                { title: '补充医疗', icon: '🏥', req: '住院、门诊、重疾、既往症、退休人员服务' },
                { title: '门诊购药', icon: '💊', req: '药店网络、线上问诊、处方流转、慢病药配送' },
              ].map((row, idx) => (
                <div key={idx} className="flex flex-1 border-b last:border-b-0 border-gray-200 text-xs items-center">
                  <div className="w-1/2 py-2 px-3 font-bold text-orange-800 flex items-center h-full border-r border-gray-200 bg-orange-50/50">
                    <span className="text-base mr-2">{row.icon}</span> {row.title}
                  </div>
                  <div className="w-1/2 py-2 px-3 text-gray-700 font-medium h-full flex items-center">{row.req}</div>
                </div>
              ))}
            </div>
            <div className="w-1/2 flex flex-col">
              {[
                { title: '直付服务', icon: '📱', req: '线上医院、线上直付、线下直付' },
                { title: '健康管理', icon: '❤️', req: '体检解读、慢病随访、心理咨询、健康讲座' },
                { title: '就医协助', icon: '🩺', req: '专家门诊、住院协助、重疾绿通、异地就医' },
              ].map((row, idx) => (
                <div key={idx} className="flex flex-1 border-b last:border-b-0 border-gray-200 text-xs items-center">
                  <div className="w-1/2 py-2 px-3 font-bold text-[#008f7a] flex items-center h-full border-r border-gray-200 bg-[#e5f4f2]/50">
                    <span className="text-base mr-2">{row.icon}</span> {row.title}
                  </div>
                  <div className="w-1/2 py-2 px-3 text-gray-700 font-medium h-full flex items-center">{row.req}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="bg-white border-l-4 border-orange-500 pl-4 py-1 mt-6">
          <h3 className="text-lg font-bold text-gray-800 flex items-center m-0 p-0 border-none">
            <span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">7</span>
            评分拆解与拿分点
          </h3>
        </div>
        <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: '价格', score: '20-30分', icon: '💰', points: '控制人均价、\\n管理费率、\\n含税口径', bar: 'w-24', color: 'bg-orange-400' },
            { title: '服务方案', score: '20-25分', icon: '❤️', points: '直付、慢病、\\n退休人员、\\n就医协助', bar: 'w-20', color: 'bg-[#d36437]' },
            { title: '理赔时效', score: '10-15分', icon: '⏱️', points: '小额快赔T+1,\\n复杂案件\\nT+5审核', bar: 'w-12', color: 'bg-orange-400' },
            { title: '类似业绩', score: '8-15分', icon: '💼', points: '省分统筹 +\\n曲靖属地项目组', bar: 'w-10', color: 'bg-orange-400' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col text-center items-center p-3">
              <div className="text-3xl mb-1 text-orange-500">{item.icon}</div>
              <div className="font-bold text-gray-800 mb-0.5">{item.title}</div>
              <div className="text-sm font-bold text-orange-700 mb-2">{item.score}</div>
              <div className="w-full bg-gray-200 h-2 rounded-full mb-3 overflow-hidden flex justify-center">
                 <div className={\`\${item.color} h-full \${item.bar}\`}></div>
              </div>
              <div className="text-[11px] text-gray-600 font-medium whitespace-pre-line leading-relaxed">{item.points}</div>
            </div>
          ))}
        </div>

        {/* Section 8 */}
        <div className="bg-white border-l-4 border-orange-500 pl-4 py-1 mt-6">
          <h3 className="text-lg font-bold text-gray-800 flex items-center m-0 p-0 border-none">
            <span className="bg-orange-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2 text-sm">8</span>
            首日行动与废标风险
          </h3>
        </div>
        <div className="px-4 flex flex-col md:flex-row gap-6 pb-2">
          <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-green-50 px-4 py-3 border-b border-gray-200 flex items-center font-bold text-green-800 text-sm">
              <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" /> 首日行动 (务必完成)
            </div>
            <div className="p-4 space-y-3">
              {[
                '下载招标文件，完成报名与CA准备',
                '建立投标群，明确分工与节点',
                '锁定时间表，标记关键截止时间',
                '确认投标主体资质与业务范围',
                '拉齐服务人数、预算、管理费率等关键参数',
                '梳理答疑清单，提前提交重要问题',
                '启动报价测算与责任方案设计',
                '调取类似业绩、资质、授权等档案',
              ].map((text, i) => (
                <div key={i} className="flex items-start text-xs text-gray-700 font-medium">
                  <div className="min-w-[18px] h-[18px] rounded-full border border-green-500 text-green-600 flex items-center justify-center text-[10px] font-bold mr-2">
                    {i+1}
                  </div>
                  <div className="leading-tight mt-0.5">{text}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#fdf2ef] px-4 py-3 border-b border-gray-200 flex items-center font-bold text-[#c54b38] text-sm">
              <AlertTriangle className="w-5 h-5 mr-2 text-[#e25032]" /> 废标风险 (重点防控)
            </div>
            <div className="p-4 space-y-3">
              {[
                { title: '主体不符:', desc: '不满足招标主体或资质要求' },
                { title: '保证金错误:', desc: '金额、账户、主体、到账时间错误' },
                { title: '报价超限:', desc: '超预算、超人均限价或管理费率' },
                { title: '责任负偏离:', desc: '核心责任漏项' },
                { title: '联合体表述违规:', desc: '不接受联合体仍写成联合投标' },
                { title: '业绩不符:', desc: '财产险/车险业绩不能作为企康业绩' },
                { title: '授权缺失:', desc: '总公司授权、负责人授权' },
                { title: '健康数据合规:', desc: '授权、脱敏、保密措辞未说明' },
                { title: '上传逾期:', desc: '电子标未在截止时间前完成上传' },
              ].map((item, i) => (
                <div key={i} className="flex items-start text-[11px] text-gray-700">
                  <div className="min-w-[16px] h-[16px] rounded-full bg-[#e25032] text-white flex items-center justify-center text-[9px] font-bold mr-2 mt-0.5">
                    {i+1}
                  </div>
                  <div className="leading-tight mt-0.5">
                    <strong className="text-[#c54b38] bg-[#fdf2ef] px-1 rounded mr-1">{item.title}</strong>
                    <span className="font-medium">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 pb-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg p-3 text-white text-center text-[13px] font-bold shadow-sm flex items-center justify-center">
            <span className="text-lg mr-2">🌟</span> AI结论：先保节点和主体，再谈方案。24小时内钉死时间、资质、预算、评分、废标项。
          </div>
        </div>
      </div>
    </div>
  );
}`;

code = code.replace(res.content, newContent);
fs.writeFileSync('src/components/MessageBubble.tsx', code, 'utf8');
console.log('patched');
