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

const newContent = `export function BidDocInterpretationCard() {
  return (
    <div className="w-full max-w-5xl bg-[#f8faf7] border border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-4 font-['Microsoft_YaHei',_'sans-serif'] text-[#263238] animate-in fade-in slide-in-from-bottom-2 p-6 md:p-12 relative">
      <div className="absolute top-0 right-0 bg-[#f26a21] text-white px-[18px] py-[8px] rounded-bl-3xl font-bold text-[18px]">
        AI智能体输出
      </div>
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-end mb-8 pt-4">
        <div className="flex-1">
          <h1 className="text-4xl md:text-[44px] font-extrabold text-[#004a3f] leading-tight mb-4 m-0 border-none">
            企康标讯解读 Agent｜烟草企康投标分析
          </h1>
          <div className="text-[#34454a] text-lg md:text-[20px] leading-relaxed font-medium mt-[14px]">
            模拟项目：云南省烟草公司曲靖市公司2025-2027年企业健康委托管理及补充医疗保险服务项目
          </div>
        </div>
        <div className="w-full md:w-[300px] bg-gradient-to-b from-white to-[#fff8f3] border border-[#f3c6aa] rounded-2xl p-[18px] shadow-[0_14px_34px_rgba(0,74,63,0.08)] shrink-0">
          <div className="text-[#f26a21] font-extrabold text-[16px] mb-[8px]">销售第一性原理</div>
          <div className="text-[#004a3f] font-extrabold text-[28px] mb-[8px]">先定节点</div>
          <div className="text-[#34454a] text-[16px] font-medium leading-[1.55]">24小时内确认时间、主体、预算、评分、废标项</div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-[14px] mb-[34px] mt-[26px]">
        <div className="px-[17px] py-[9px] rounded-full border border-[#dce7e1] bg-white text-[#004a3f] font-bold text-[17px]">
          主投：平安产险云南分公司
        </div>
        <div className="px-[17px] py-[9px] rounded-full border border-[#f3c6aa] bg-[#fff8f3] text-[#b64a12] font-bold text-[17px]">
          履约：曲靖中心支公司
        </div>
        <div className="px-[17px] py-[9px] rounded-full border border-[#f3c6aa] bg-[#fff8f3] text-[#b64a12] font-bold text-[17px]">
          风格：平安淡橙
        </div>
        <div className="px-[17px] py-[9px] rounded-full border border-[#dce7e1] bg-white text-[#004a3f] font-bold text-[17px]">
          输出：销售投标作战版
        </div>
      </div>

      {/* Summary Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] mb-[26px]">
        <div className="border border-[#f3c6aa] bg-white rounded-[16px] p-[18px] pb-[16px]">
          <strong className="block text-[#004a3f] text-[17px] font-extrabold mb-[6px]">项目形态</strong>
          <span className="text-[#667085] text-[16px] leading-[1.45] font-medium block">健康委托管理 + 补充医疗 + 门诊购药 + 就医协助</span>
        </div>
        <div className="border border-[#f3c6aa] bg-white rounded-[16px] p-[18px] pb-[16px]">
          <strong className="block text-[#004a3f] text-[17px] font-extrabold mb-[6px]">主体打法</strong>
          <span className="text-[#667085] text-[16px] leading-[1.45] font-medium block">云南分公司主投，曲靖中心支公司属地履约</span>
        </div>
        <div className="border border-[#f3c6aa] bg-white rounded-[16px] p-[18px] pb-[16px]">
          <strong className="block text-[#004a3f] text-[17px] font-extrabold mb-[6px]">关键风险</strong>
          <span className="text-[#667085] text-[16px] leading-[1.45] font-medium block">主体资质、联合体限制、健康数据合规、保证金</span>
        </div>
        <div className="border border-[#f3c6aa] bg-white rounded-[16px] p-[18px] pb-[16px]">
          <strong className="block text-[#004a3f] text-[17px] font-extrabold mb-[6px]">竞争重点</strong>
          <span className="text-[#667085] text-[16px] leading-[1.45] font-medium block">健康委托经验、直付服务、退休人员服务、管理费率</span>
        </div>
      </div>

      {/* Section 1 */}
      <div className="bg-white border border-[#f3c6aa] rounded-[18px] p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex flex-wrap items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">1</div>
          <h2 className="text-[#004a3f] text-[28px] font-extrabold m-0 tracking-tight leading-[1.25]">投标关键节点</h2>
          <div className="md:ml-auto text-[#b64a12] bg-[#fff2e8] border border-[#f3c6aa] rounded-full px-[14px] py-[7px] font-bold text-[15px] whitespace-nowrap">第一动作：当天转群</div>
        </div>
        <div className="relative pt-3 pb-1 px-1.5 hidden md:block">
          <div className="absolute left-[68px] right-[68px] top-[71px] h-[4px] bg-[#f26a21] rounded-full"></div>
          <div className="grid grid-cols-7 gap-0 relative">
            {[
              { name: '公告发布', date: '2025.04.18' },
              { name: '文件获取', date: '04.18-04.25\\n17:00' },
              { name: '答疑截止', date: '04.28\\n17:00' },
              { name: '澄清发布', date: '04.30' },
              { name: '保证金截止', date: '05.08\\n16:00' },
              { name: '投标/开标', date: '05.09\\n09:30' },
              { name: '服务启动', date: '06.01' },
            ].map((step, idx) => (
              <div key={idx} className="text-center relative min-h-[132px]">
                <div className="text-[#34454a] font-extrabold text-[17px] mb-[24px]">{step.name}</div>
                <div className="w-[24px] h-[24px] mx-auto mb-[16px] border-[4px] border-[#f26a21] bg-white rounded-full relative z-10"></div>
                <div className="text-[#42535a] text-[17px] font-medium whitespace-pre-line leading-[1.35]">{step.date}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile timeline */}
        <div className="md:hidden space-y-[16px]">
          {[
            { name: '公告发布', date: '2025.04.18' },
            { name: '文件获取', date: '04.18-04.25 17:00' },
            { name: '答疑截止', date: '04.28 17:00' },
            { name: '澄清发布', date: '04.30' },
            { name: '保证金截止', date: '05.08 16:00' },
            { name: '投标/开标', date: '05.09 09:30' },
            { name: '服务启动', date: '06.01' },
          ].map((step, idx) => (
            <div key={idx} className="grid grid-cols-[110px_32px_1fr] items-center text-left">
               <div className="text-[#34454a] font-extrabold text-[17px]">{step.name}</div>
               <div className="w-[24px] h-[24px] border-[4px] border-[#f26a21] bg-white rounded-full"></div>
               <div className="text-[#42535a] text-[17px] font-medium">{step.date}</div>
            </div>
          ))}
        </div>
        <div className="mt-[6px] mx-auto w-full max-w-[690px] text-center border border-[#f3c6aa] rounded-full bg-[#fff2e8] text-[#f26a21] py-[10px] px-[18px] font-extrabold text-[20px]">
          销售第一动作：当天拉群、转发节点、确认能否投。
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white border border-[#dce7e1] rounded-[18px] p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">2</div>
          <h2 className="text-[#004a3f] text-[28px] font-extrabold m-0 tracking-tight leading-[1.25]">项目关键信息</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          <div className="border border-[#f3c6aa] bg-[#eaf6f1] rounded-[14px] p-[18px] min-h-[145px]">
            <div className="text-[#004a3f] font-extrabold text-[20px] mb-[10px]">项目类型</div>
            <p className="text-[#3d4d52] font-medium text-[18px] leading-[1.55] m-0">健康委托管理 + 补充医疗 + 门诊购药 + 就医协助。</p>
          </div>
          <div className="border border-[#f3c6aa] bg-[#eaf6f1] rounded-[14px] p-[18px] min-h-[145px]">
            <div className="text-[#004a3f] font-extrabold text-[20px] mb-[10px]">服务对象</div>
            <p className="text-[#3d4d52] font-medium text-[18px] leading-[1.55] m-0">在岗员工、内部退养、退休人员；家属是否纳入待确认。</p>
          </div>
          <div className="border border-[#f3c6aa] bg-[#eaf6f1] rounded-[14px] p-[18px] min-h-[145px]">
            <div className="text-[#004a3f] font-extrabold text-[20px] mb-[10px]">服务期限</div>
            <p className="text-[#3d4d52] font-medium text-[18px] leading-[1.55] m-0">三年，合同一年一签，年度评价合格后续签。</p>
          </div>
          <div className="border border-[#f3c6aa] bg-[#fff8f3] rounded-[14px] p-[18px] min-h-[145px]">
            <div className="text-[#f26a21] font-extrabold text-[20px] mb-[10px]">预算口径</div>
            <p className="text-[#3d4d52] font-medium text-[18px] leading-[1.55] m-0">总预算XXX万元；人均限价XXX元/年；管理费率XXX%。</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white border border-[#f3c6aa] rounded-[18px] p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex flex-wrap items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">3</div>
          <h2 className="text-[#004a3f] text-[28px] font-extrabold m-0 tracking-tight leading-[1.25]">主投主体与分工</h2>
          <div className="md:ml-auto text-[#b64a12] bg-[#fff2e8] border border-[#f3c6aa] rounded-full px-[14px] py-[7px] font-bold text-[15px] whitespace-nowrap">颗粒度到分支机构</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[45%_1fr] gap-[28px] items-start">
          <div className="w-full shrink-0">
            <div className="border-[2px] border-[#f26a21] bg-[#fff8f3] rounded-[14px] p-[18px] px-[22px] mb-[18px]">
              <div className="text-[#f26a21] font-extrabold text-[17px] mb-[6px]">主投主体</div>
              <div className="text-[#263238] font-extrabold text-[21px] leading-[1.35]">中国平安财产保险股份有限公司云南分公司</div>
            </div>
            <div className="border-[2px] border-[#9bd8c4] bg-[#eaf6f1] rounded-[14px] p-[18px] px-[22px]">
              <div className="text-[#004a3f] font-extrabold text-[17px] mb-[6px]">属地履约</div>
              <div className="text-[#263238] font-extrabold text-[21px] leading-[1.35]">中国平安财产保险股份有限公司曲靖中心支公司</div>
            </div>
          </div>
          <div className="w-full pl-[5px]">
            <ul className="m-0 p-0 text-[#3d4d52] font-medium text-[18px] leading-[1.5]">
              <li className="relative pl-[18px] mb-[10px]"><div className="absolute left-0 top-[0.66em] w-[7px] h-[7px] rounded-full bg-[#f26a21]"></div>云南分公司负责省级授权、合同签署、开票出单、核保协调、集团健康资源统筹。</li>
              <li className="relative pl-[18px] mb-[10px]"><div className="absolute left-0 top-[0.66em] w-[7px] h-[7px] rounded-full bg-[#f26a21]"></div>曲靖中心支公司负责员工宣导、材料收集、理赔协助、线下服务、日常客户沟通。</li>
              <li className="relative pl-[18px] mb-[10px]"><div className="absolute left-0 top-[0.66em] w-[7px] h-[7px] rounded-full bg-[#f26a21]"></div>若招标要求健康险/养老险主体，切换平安健康险或平安养老险主投。</li>
              <li className="relative pl-[18px]"><div className="absolute left-0 top-[0.66em] w-[7px] h-[7px] rounded-full bg-[#f26a21]"></div>不接受联合体时，协同资源写为集团服务支持，避免违规分包。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-white border border-[#f3c6aa] rounded-[18px] p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex flex-wrap items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">4</div>
          <h2 className="text-[#004a3f] text-[28px] font-extrabold m-0 tracking-tight leading-[1.25]">竞对门槛识别</h2>
          <div className="md:ml-auto text-[#b64a12] bg-[#fff2e8] border border-[#f3c6aa] rounded-full px-[14px] py-[7px] font-bold text-[15px] whitespace-nowrap">重点前置，不再埋在后面</div>
        </div>
        <div className="overflow-hidden rounded-[10px] border-[2px] border-[#f26a21] bg-[#fff]">
          <table className="w-full text-left border-collapse min-w-[700px] text-[17px] table-fixed">
            <thead className="bg-[#f26a21] text-white">
              <tr>
                <th className="py-[13px] px-[16px] font-extrabold text-[18px] w-[22%]">门槛</th>
                <th className="py-[13px] px-[16px] font-extrabold text-[18px] w-[34%]">竞对优势</th>
                <th className="py-[13px] px-[16px] font-extrabold text-[18px]">平安打法</th>
              </tr>
            </thead>
            <tbody className="text-[17px]">
              <tr className="bg-white border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] text-[#34454a] font-bold border-r border-[#dce7e1] align-top">
                  健康委托经验 
                  <span className="inline-block xl:ml-[8px] px-[10px] py-[3px] bg-[#fff2e8] border border-[#f3c6aa] text-[#b64a12] rounded-full text-[14px] font-extrabold whitespace-nowrap">平安需补强</span>
                </td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium border-r border-[#dce7e1] leading-[1.5] align-top">泰康、国寿养老、太平养老、人保健康常用补医/委托管理案例抢分。</td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium leading-[1.5] align-top">调取平安体系央国企补医、健康委托、员工福利项目案例，优先放烟草或制造业相近案例。</td>
              </tr>
              <tr className="bg-[#fffaf6] border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] text-[#34454a] font-bold border-r border-[#dce7e1] align-top">
                  线上直付服务 
                  <span className="inline-block xl:ml-[8px] px-[10px] py-[3px] bg-[#fff2e8] border border-[#f3c6aa] text-[#b64a12] rounded-full text-[14px] font-extrabold whitespace-nowrap">评分敏感</span>
                </td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium border-r border-[#dce7e1] leading-[1.5] align-top">互联网医疗、TPA平台、原服务商更容易证明直付链路。</td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium leading-[1.5] align-top">突出平安线上医院、药房网络、服务专员、线上理赔入口，写清直付范围和操作路径。</td>
              </tr>
              <tr className="bg-white border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] text-[#34454a] font-bold border-r border-[#dce7e1] align-top">
                  退休人员服务 
                  <span className="inline-block xl:ml-[8px] px-[10px] py-[3px] bg-[#fff2e8] border border-[#f3c6aa] text-[#b64a12] rounded-full text-[14px] font-extrabold whitespace-nowrap">烟草高频</span>
                </td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium border-r border-[#dce7e1] leading-[1.5] align-top">本地医疗机构和原供应商熟悉退休员工线下服务习惯。</td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium leading-[1.5] align-top">写慢病随访、用药提醒、异地就医、线下材料协助和服务热线。</td>
              </tr>
              <tr className="bg-[#fffaf6]">
                <td className="py-[13px] px-[16px] text-[#34454a] font-bold border-r border-[#dce7e1] align-top">
                  价格与管理费率 
                  <span className="inline-block xl:ml-[8px] px-[10px] py-[3px] bg-[#fff2e8] border border-[#f3c6aa] text-[#b64a12] rounded-full text-[14px] font-extrabold whitespace-nowrap">不宜硬卷</span>
                </td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium border-r border-[#dce7e1] leading-[1.5] align-top">激进低价供应商可能用低管理费率抢价格分。</td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium leading-[1.5] align-top">不卷低价，强调审计安全、赔付稳定、服务质量、年度复盘和可持续履约。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-white border border-[#f3c6aa] rounded-[18px] p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">5</div>
          <h2 className="text-[#004a3f] text-[28px] font-extrabold m-0 tracking-tight leading-[1.25]">服务内容要求</h2>
        </div>
        <div className="overflow-hidden rounded-[10px] border border-[#dce7e1] bg-white">
          <table className="w-full text-left border-collapse min-w-[700px] text-[17px] table-fixed">
            <tbody className="text-[17px]">
              <tr className="border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-white border-r border-[#dce7e1] w-[18%] align-top">健康委托管理</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-white border-r border-[#dce7e1] w-[32%] leading-[1.5] align-top">资金管理、赔付流程、月报、审计配合。</td>
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-white border-r border-[#dce7e1] w-[18%] align-top">补充医疗</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-white w-[32%] leading-[1.5] align-top">住院、门诊、重疾、既往症、退休人员服务。</td>
              </tr>
              <tr className="border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-[#fbfffd] border-r border-[#dce7e1] align-top">门诊购药</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-[#fbfffd] border-r border-[#dce7e1] leading-[1.5] align-top">药店网络、线上问诊、处方流转、慢病药配送。</td>
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-[#fbfffd] border-r border-[#dce7e1] align-top">直付服务</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-[#fbfffd] leading-[1.5] align-top">线上医院、线上直付、线下直付。</td>
              </tr>
              <tr>
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-white border-r border-[#dce7e1] align-top">健康管理</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-white border-r border-[#dce7e1] leading-[1.5] align-top">体检解读、慢病随访、心理咨询、健康讲座。</td>
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-white border-r border-[#dce7e1] align-top">就医协助</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-white leading-[1.5] align-top">专家门诊、住院协助、重疾绿通、异地就医。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 6 */}
      <div className="bg-white border border-[#dce7e1] rounded-[18px] p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">6</div>
          <h2 className="text-[#004a3f] text-[28px] font-extrabold m-0 tracking-tight leading-[1.25]">资格与经营要求</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[14px]">
          {[
            '经营保险业务许可证，业务范围含健康保险或短期健康保障。',
            '项目所在地设有分支机构或服务机构。',
            '未列入烟草行业不良供应商名单。',
            '信用中国、裁判文书、行贿记录提前自查。',
            '同负责人或控股管理关系单位不得同时投标。'
          ].map((req, idx) => (
             <div key={idx} className="border border-[#f3c6aa] bg-[#fcfefd] rounded-[14px] p-[18px] flex flex-col min-h-[165px]">
                <div className="w-[34px] h-[34px] mx-auto mb-[14px] flex items-center justify-center border-[2px] border-[#f26a21] text-[#f26a21] font-extrabold rounded-full shrink-0">
                  {idx + 1}
                </div>
                <p className="text-[#3d4d52] text-[16px] font-medium leading-[1.48] text-center m-0 block">{req}</p>
             </div>
          ))}
        </div>
      </div>

      {/* Section 7 */}
      <div className="bg-white border border-[#f3c6aa] rounded-[18px] p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">7</div>
          <h2 className="text-[#004a3f] text-[28px] font-extrabold m-0 tracking-tight leading-[1.25]">评分拆解与拿分点</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[14px]">
          {[
            { title: '价格', score: '20-30分', points: '控制人均价、管理费率、含税口径，避免报价表前后不一致。', bar: '82%', highlight: true },
            { title: '服务方案', score: '20-25分', points: '突出直付、慢病、退休人员、就医协助。', bar: '72%' },
            { title: '理赔时效', score: '10-15分', points: '小额快赔T+1，复杂案件T+5审核，重大案件绿色通道。', bar: '68%' },
            { title: '类似业绩', score: '8-15分', points: '烟草、央国企、制造业、补医/企康案例优先。', bar: '70%' },
            { title: '团队承诺', score: '5-10分', points: '省分统筹 + 曲靖属地项目组，明确人员与响应时限。', bar: '64%' },
          ].map((item, idx) => (
            <div key={idx} className={\`border border-[#f3c6aa] rounded-[14px] p-[18px] min-h-[190px] \${item.highlight ? 'bg-[#fff8f3]' : 'bg-[#fcfefd]'}\`}>
              <div className={\`font-extrabold text-[20px] mb-[4px] \${item.highlight ? 'text-[#f26a21]' : 'text-[#004a3f]'}\`}>{item.title}</div>
              <div className="text-[#263238] font-bold text-[18px] mb-[18px] block">{item.score}</div>
              <div className="h-[13px] w-full bg-[#d6ddd9] rounded-full overflow-hidden mb-[18px]">
                <div className="h-full bg-[#f26a21] rounded-full" style={{ width: item.bar }}></div>
              </div>
              <p className="text-[#3d4d52] font-medium text-[16px] leading-[1.45] m-0 block">{item.points}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 8 */}
      <div className="bg-white border border-[#dce7e1] rounded-[18px] p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">8</div>
          <h2 className="text-[#004a3f] text-[28px] font-extrabold m-0 tracking-tight leading-[1.25]">首日行动与废标风险</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="border border-[#9bd8c4] bg-[#eaf6f1] rounded-[14px] p-[22px] min-h-[300px]">
            <h3 className="text-[#004a3f] text-[22px] font-extrabold mb-[14px] mt-0">首日行动（务必完成）</h3>
            <ol className="list-decimal pl-[26px] m-0 text-[#34454a] font-medium text-[17px] leading-[1.68] marker:text-[#004a3f] marker:font-bold">
              <li className="pl-1 mb-0">下载文件并完成报名CA准备。</li>
              <li className="pl-1 mb-0">建立投标群，明确分工与节点。</li>
              <li className="pl-1 mb-0">锁定时间表，标记关键截止时间。</li>
              <li className="pl-1 mb-0">确认主体资质与业务范围。</li>
              <li className="pl-1 mb-0">拉齐服务人数、预算、管理费率参数。</li>
              <li className="pl-1 mb-0">梳理答疑清单，提前提交重要问题。</li>
              <li className="pl-1 mb-0">启动报价测算与责任方案设计。</li>
              <li className="pl-1">调取类似业绩、资质、授权材料。</li>
            </ol>
          </div>
          <div className="border border-[#f3c6aa] bg-[#fff8f3] rounded-[14px] p-[22px] min-h-[300px]">
            <h3 className="text-[#f26a21] text-[22px] font-extrabold mb-[14px] mt-0">废标风险（重点防控）</h3>
            <ol className="list-decimal pl-[26px] m-0 text-[#34454a] font-medium text-[17px] leading-[1.68] marker:text-[#f26a21] marker:font-bold">
              <li className="pl-1 mb-0">主体不符或业务范围不满足。</li>
              <li className="pl-1 mb-0">保证金金额、账户、主体、到账时间错误。</li>
              <li className="pl-1 mb-0">报价超限：人均价或管理费率超预算。</li>
              <li className="pl-1 mb-0">责任负偏离：核心责任漏项。</li>
              <li className="pl-1 mb-0">联合体表述违规或协同资源写法不当。</li>
              <li className="pl-1 mb-0">业绩不相似：财险/车险替代企康业绩。</li>
              <li className="pl-1 mb-0">授权缺失：总公司授权、负责人授权。</li>
              <li className="pl-1 mb-0">健康数据合规缺失：授权、脱敏、保密未说明。</li>
              <li className="pl-1">上传逾期：电子标未在截止前完成上传。</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[34px] md:mx-[28px] bg-[#f26a21] rounded-[18px] text-white py-[22px] px-[28px] text-center text-[20px] md:text-[23px] font-extrabold shadow-sm tracking-wide">
        AI结论：先保节点和主体，再谈方案。24小时内钉死时间、资质、预算、评分、废标项。
      </div>
    </div>
  );
}
`;

code = code.replace(res.content, newContent);
fs.writeFileSync('src/components/MessageBubble.tsx', code, 'utf8');
console.log('patched card');
