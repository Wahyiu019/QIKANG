const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /export function CompetitorAnalysisCard\(\{ data \}: \{ data\?: any \}\) \{[\s\S]*?(?=export function StrategyReportCard)/;

const newCard = `export function CompetitorAnalysisCard({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-900 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-xl tracking-wide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          全面纵深：首要竞品侦测与阻击分析报告
        </div>
        <div className="flex gap-2">
           <span className="text-amber-100 text-xs px-3 py-1 bg-amber-500/30 rounded-full border border-amber-400/30 backdrop-blur-sm">绝密</span>
           <span className="text-yellow-100 text-xs px-3 py-1 bg-yellow-500/30 rounded-full border border-yellow-400/30 backdrop-blur-sm">实时生成</span>
        </div>
      </div>
      
      <div className="p-7 space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-700 bg-gray-50/30">
        <section>
          <div className="flex items-center mb-3">
             <div className="w-2 h-6 bg-amber-600 rounded-sm mr-3"></div>
             <h3 className="text-lg font-bold text-amber-950">1. 执行摘要与分析背景</h3>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-sm text-gray-600 leading-7">
            <strong>分析意图：</strong>本次竞标对手为体检巨头“<strong>爱康国宾</strong>”与险企巨头“<strong>泰康保险集团</strong>”。本次侦测旨在彻底拆解两大巨头的优势包装，从战略基本盘到战术执行层剖析其真实短板与盲区。针对爱康的“重资产同质化”和泰康的“重获客轻履约”特点，精准投射火力网，并通过强力对比我方平安品牌背书的合规保障与重医疗履约能力，直接锁定胜局。
          </div>
        </section>

        <section>
          <div className="flex items-center mb-3">
             <div className="w-2 h-6 bg-amber-500 rounded-sm mr-3"></div>
             <h3 className="text-lg font-bold text-amber-950">2. 竞品底牌与战略定调解析</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50/50 border border-orange-100 p-5 rounded-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" /></svg></div>
               <h4 className="font-bold text-orange-900 mb-2 flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>爱康国宾：重直营门店，服务标准化但同质严重</h4>
               <p className="text-sm text-gray-600 leading-relaxed mb-3">
                 <strong>核心特征：</strong>以线下直营体检中心扩张为主，标化流水线作业。
               </p>
               <ul className="text-sm text-orange-800 space-y-1 ml-4 list-disc">
                 <li><strong>软肋1 (重筛查、轻干预)：</strong>前端体检设备全，但检后医生资源不足导致的深度解读缺失，客户痛感极强。</li>
                 <li><strong>软肋2 (品牌疲惫)：</strong>作为老牌体检机构，对B端客户而言缺乏新鲜感与高端差异化体验，容易陷于价格战。</li>
               </ul>
            </div>
            
            <div className="bg-yellow-50/50 border border-yellow-100 p-5 rounded-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.13 8.9-7 10.02-3.87-1.12-7-5.35-7-10.02v-4.7l7-3.12zM12 11h-2v2h2v2h2v-2h2v-2H12V9z" /></svg></div>
               <h4 className="font-bold text-yellow-900 mb-2 flex items-center"><span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>泰康保险集团：借医引流，重金融轻实际履约</h4>
               <p className="text-sm text-gray-600 leading-relaxed mb-3">
                 <strong>核心特征：</strong>以大健康生态作为保险销售的敲门砖与增值项，健康服务的终极目的是促成保单转化。
               </p>
               <ul className="text-sm text-yellow-800 space-y-1 ml-4 list-disc">
                 <li><strong>软肋1 (强推销属性)：</strong>企业员工极度反感健康管理附带的浓厚保险推销行为，合规红线与隐私暴露风险高。</li>
                 <li><strong>软肋2 (履约外包)：</strong>其体检与部分健康管理服务大量采购外包，难以控制底层服务质量与用户体验，一旦发生医疗纠纷溯源困难。</li>
               </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center mb-3">
             <div className="w-2 h-6 bg-amber-400 rounded-sm mr-3"></div>
             <h3 className="text-lg font-bold text-amber-950">3. 核心维度打击矩阵对比</h3>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-amber-50/80 px-4 py-3 border-b border-amber-100 flex items-center">
              <span className="font-bold text-amber-900 text-sm">竞争劣势狙击：我方如何实现降维打击</span>
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-white text-gray-400 uppercase text-xs tracking-wider border-b border-gray-100">
                <tr>
                  <th className="px-5 py-3 w-1/4">评测维度</th>
                  <th className="px-5 py-3 w-1/4 bg-orange-50/20">爱康国宾痛点</th>
                  <th className="px-5 py-3 w-1/4 bg-yellow-50/20">泰康集团痛点</th>
                  <th className="px-5 py-3 w-1/4 bg-yellow-50/50 text-amber-800 font-bold">我方优势 (企康方案)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-4 font-bold text-gray-800">服务闭环深度</td>
                  <td className="px-5 py-4 text-orange-600">重检前检中，检后数据孤岛，缺乏长效健康干预。</td>
                  <td className="px-5 py-4 text-yellow-600">底层医疗服务靠外部拼接，服务割裂，履约不稳定。</td>
                  <td className="px-5 py-4 text-amber-800 font-medium bg-yellow-50/20"><strong>全自营名医天团</strong>，构建“检-诊-疗-愈”无缝闭环与长效1对1管理。</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-4 font-bold text-gray-800">数据隐私与合规</td>
                  <td className="px-5 py-4 text-gray-500">商业体检模式下数据易被二次开发。</td>
                  <td className="px-5 py-4 text-yellow-600 font-bold">健康数据极易被导流至保险电销，员工反弹情绪极大。</td>
                  <td className="px-5 py-4 text-amber-800 font-medium bg-yellow-50/20"><strong>平安银行级合规金钟罩</strong>，信息绝缘圈，国密算法级脱敏。</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-4 font-bold text-gray-800">企业级定制能力</td>
                  <td className="px-5 py-4 text-gray-500">套餐固化，难以为大型企业实现精细化岗位健康拆解。</td>
                  <td className="px-5 py-4 text-gray-500">依赖标准金融险种附赠健康卡，缺乏职场场景深度适配。</td>
                  <td className="px-5 py-4 text-amber-800 font-medium bg-yellow-50/20">基于百亿大数据实现<strong>千企千面弹性定制</strong>，高度适配企业职场。</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="flex items-center mb-3 border-b border-gray-100 pb-2">
               <div className="w-2 h-5 bg-orange-500 rounded-sm mr-3"></div>
               <h3 className="text-base font-bold text-gray-900">4. 讲标阻击/话术推演</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-3 flex-1">
               <p><strong>防守泰康的保单夹带：</strong>重点提示采购方：“我们要的是真正的员工健康福利还是员工购买保险的线索库？金融机构背景不是原罪，关键在于业务隔离。我方系统提供三级阻断防火墙。”</p>
               <p><strong>反刺爱康的流水线化：</strong>向评委抛出问题：“流水线体检能不能管好异常指标？体检查出结节，谁来跟进？我们的自营全职医疗团队，不赚仪器机器的钱，直接为员工最终的健康结果兜底。”</p>
               <div className="mt-4 p-3 bg-red-50 text-orange-900 border border-orange-100 rounded-lg text-xs leading-relaxed font-bold">
                 核心攻击点锚定：撕开对手“服务不到底”（爱康）与“居心不良”（泰康）的伪装。
               </div>
            </div>
          </section>

          <section className="bg-amber-950 p-5 rounded-xl border border-amber-900 shadow-md text-amber-50 flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg></div>
             <div className="flex items-center mb-4 border-b border-amber-800 pb-2 relative z-10">
               <h3 className="text-base font-bold text-white">5. 我们的必胜武器库 (Highlight)</h3>
             </div>
             
             <ul className="space-y-4 text-sm relative z-10 flex-1">
                <li className="flex items-start">
                  <div className="bg-amber-800/80 text-amber-100 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5 shadow-sm border border-amber-700">1</div>
                  <span><strong>平安集团世界500强背书：</strong>双巨头的信赖之选，不推销，重隔离，天然契合大型国企/央企的合规与采购偏好。</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-800/80 text-amber-100 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5 shadow-sm border border-amber-700">2</div>
                  <span><strong>重医疗属性：</strong>自建真实医疗履约团队，全职医生与就医绿通，服务质量100%可控，降维打击第三方拼凑外包。</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-800/80 text-amber-100 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5 shadow-sm border border-amber-700">3</div>
                  <span><strong>企康专属科技底座：</strong>将健康数据转化为可视化企业健康报告看板，赋能HR，让管理层直观感受到投入产出比。</span>
                </li>
             </ul>
          </section>
        </div>

      </div>
    </div>
  );
}
`;

content = content.replace(regex, newCard + '\n\n');

fs.writeFileSync(file, content);
console.log('Modified CompetitorAnalysisCard updated successfully.');
