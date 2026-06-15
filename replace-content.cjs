const fs = require('fs');
let content = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const oldCommercial = `const commercialContent = \`
          <div class="font-sans text-gray-800">
            <h1 class="text-2xl font-bold text-center mb-6 text-gray-900 border-b-2 border-emerald-600 pb-2">贵州茅台集团健康管理服务项目 - 商务标书</h1>
            
            <div class="mb-8">
              <h2 class="text-lg font-bold text-emerald-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-emerald-600 mr-2 inline-block"></span>一、 投标函</h2>
              <p class="mb-2 leading-relaxed text-sm">致：<strong>中国贵州茅台酒厂（集团）有限责任公司</strong></p>
              <p class="mb-2 leading-relaxed text-sm indent-8">根据贵方关于“贵州茅台集团健康管理服务项目”的招标公告，我方（平安健康医疗科技有限公司）经认真研究招标文件后，决定参加该项目的投标。我方承诺：</p>
              <ul class="list-disc pl-10 mb-4 text-sm space-y-1 text-gray-700">
                <li>提供满足招标文件要求的全套健康管理服务。</li>
                <li>严格遵守企康规范及贵方的各项管理规定。</li>
                <li>投标报价真实、合理，不参与任何恶意竞争。</li>
              </ul>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-emerald-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-emerald-600 mr-2 inline-block"></span>二、 报价一览表</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200 text-sm">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="py-2 px-4 border-b text-left font-medium text-gray-600">服务项目</th>
                      <th class="py-2 px-4 border-b text-left font-medium text-gray-600">规格/描述</th>
                      <th class="py-2 px-4 border-b text-right font-medium text-gray-600">单价 (元/人/年)</th>
                      <th class="py-2 px-4 border-b text-right font-medium text-gray-600">总价估算 (万元)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr>
                      <td class="py-2 px-4">基础健康档案管理</td>
                      <td class="py-2 px-4">建立电子健康档案，年度更新</td>
                      <td class="py-2 px-4 text-right">120</td>
                      <td class="py-2 px-4 text-right">360</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4">在线问诊服务</td>
                      <td class="py-2 px-4">7x24小时全科医生在线咨询</td>
                      <td class="py-2 px-4 text-right">300</td>
                      <td class="py-2 px-4 text-right">900</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4">高管绿通服务</td>
                      <td class="py-2 px-4">三甲医院专家预约、陪诊</td>
                      <td class="py-2 px-4 text-right">1500</td>
                      <td class="py-2 px-4 text-right">450</td>
                    </tr>
                    <tr class="bg-gray-50 font-bold">
                      <td class="py-2 px-4" colspan="3">合计 (预估)</td>
                      <td class="py-2 px-4 text-right text-emerald-700">1710</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-emerald-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-emerald-600 mr-2 inline-block"></span>三、 资质证明文件</h2>
              <p class="text-sm text-gray-700 mb-2">我方已按照招标文件要求，提供以下资质证明文件（详见附件）：</p>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> 营业执照副本复印件</div>
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> 医疗机构执业许可证</div>
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> ISO9001质量管理体系认证</div>
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> 近三年财务审计报告</div>
              </div>
            </div>
          </div>
        \`;`;

const newCommercial = `const commercialContent = \`
          <div class="font-sans text-gray-800">
            <h1 class="text-2xl font-bold text-center mb-6 text-gray-900 border-b-2 border-emerald-600 pb-2">贵州茅台集团健康管理服务项目 - 商务标书</h1>
            
            <div class="mb-8">
              <h2 class="text-lg font-bold text-emerald-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-emerald-600 mr-2 inline-block"></span>一、 投标函</h2>
              <p class="mb-2 leading-relaxed text-sm">致：<strong>中国贵州茅台酒厂（集团）有限责任公司</strong></p>
              <p class="mb-2 leading-relaxed text-sm indent-8">根据贵方关于“贵州茅台集团健康管理服务项目”的招标公告，我方（平安健康医疗科技有限公司）经认真研究招标文件后，决定参加该项目的投标。我方承诺：</p>
              <ul class="list-disc pl-10 mb-4 text-sm space-y-1 text-gray-700">
                <li>提供满足招标文件要求的全套健康管理服务。</li>
                <li>严格遵守企康规范及贵方的各项管理规定。</li>
                <li>投标报价真实、合理，不参与任何恶意竞争。</li>
                <li>承诺在合同期内不随意更改核心服务团队成员。</li>
              </ul>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-emerald-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-emerald-600 mr-2 inline-block"></span>二、 报价一览表</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200 text-sm">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="py-2 px-4 border-b text-left font-medium text-gray-600">服务项目</th>
                      <th class="py-2 px-4 border-b text-left font-medium text-gray-600">规格/描述</th>
                      <th class="py-2 px-4 border-b text-right font-medium text-gray-600">单价 (元/人/年)</th>
                      <th class="py-2 px-4 border-b text-right font-medium text-gray-600">总价估算 (万元)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr>
                      <td class="py-2 px-4">基础健康档案管理</td>
                      <td class="py-2 px-4">建立电子健康档案，年度更新</td>
                      <td class="py-2 px-4 text-right">120</td>
                      <td class="py-2 px-4 text-right">360</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4">在线问诊服务</td>
                      <td class="py-2 px-4">7x24小时全科医生在线咨询</td>
                      <td class="py-2 px-4 text-right">300</td>
                      <td class="py-2 px-4 text-right">900</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4">高管绿通服务</td>
                      <td class="py-2 px-4">三甲医院专家预约、陪诊</td>
                      <td class="py-2 px-4 text-right">1500</td>
                      <td class="py-2 px-4 text-right">450</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4">心理EAP服务</td>
                      <td class="py-2 px-4">心理测评、危机干预、心理咨询</td>
                      <td class="py-2 px-4 text-right">200</td>
                      <td class="py-2 px-4 text-right">600</td>
                    </tr>
                    <tr class="bg-gray-50 font-bold">
                      <td class="py-2 px-4" colspan="3">合计 (预估)</td>
                      <td class="py-2 px-4 text-right text-emerald-700">2310</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-emerald-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-emerald-600 mr-2 inline-block"></span>三、 商务偏离表</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200 text-sm">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="py-2 px-4 border-b text-left font-medium text-gray-600">招标文件条款</th>
                      <th class="py-2 px-4 border-b text-left font-medium text-gray-600">我方响应内容</th>
                      <th class="py-2 px-4 border-b text-center font-medium text-gray-600">偏离情况</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr>
                      <td class="py-2 px-4">付款方式：按季度后付</td>
                      <td class="py-2 px-4">接受按季度后付，提供增值税专用发票</td>
                      <td class="py-2 px-4 text-center text-emerald-600 font-bold">无偏离</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4">服务期限：3年</td>
                      <td class="py-2 px-4">承诺提供3年连续服务，并保证价格不上浮</td>
                      <td class="py-2 px-4 text-center text-emerald-600 font-bold">无偏离</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-emerald-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-emerald-600 mr-2 inline-block"></span>四、 类似项目业绩</h2>
              <ul class="list-disc pl-10 text-sm space-y-2 text-gray-700">
                <li><strong>某大型国有银行总行：</strong> 覆盖10万+员工的全面健康管理及EAP服务，连续服务5年。</li>
                <li><strong>某头部互联网大厂：</strong> 驻场医疗与急救体系建设，线上线下结合的健康干预方案。</li>
                <li><strong>某知名能源集团：</strong> 针对高危作业人群的职业健康监测与专属重疾绿通服务。</li>
              </ul>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-emerald-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-emerald-600 mr-2 inline-block"></span>五、 资质证明文件</h2>
              <p class="text-sm text-gray-700 mb-2">我方已按照招标文件要求，提供以下资质证明文件（详见附件）：</p>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> 营业执照副本复印件</div>
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> 医疗机构执业许可证</div>
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> ISO9001质量管理体系认证</div>
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> ISO27001信息安全管理体系认证</div>
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> 近三年财务审计报告</div>
                <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-emerald-500 mr-2">✓</span> 依法缴纳税收和社会保障资金证明</div>
              </div>
            </div>
          </div>
        \`;`;

const oldTechnical = `const technicalContent = \`
          <div class="font-sans text-gray-800">
            <h1 class="text-2xl font-bold text-center mb-6 text-gray-900 border-b-2 border-orange-600 pb-2">贵州茅台集团健康管理服务项目 - 技术标书</h1>
            
            <div class="mb-8">
              <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>一、 项目理解与需求分析</h2>
              <div class="bg-orange-50 p-4 rounded-lg border border-orange-100 text-sm text-gray-700 leading-relaxed">
                <p class="mb-2">贵州茅台集团作为中国白酒行业的领军企业，员工数量庞大，工作场景复杂。当前面临的主要健康管理痛点包括：</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>生产一线员工职业健康风险较高。</li>
                  <li>高管及核心骨干工作压力大，缺乏系统性健康干预。</li>
                  <li>现有体检数据未有效盘活，缺乏持续的健康追踪。</li>
                </ul>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>二、 整体解决方案设计</h2>
              <p class="text-sm text-gray-700 mb-4">基于企康规范，我们为茅台集团量身定制了“1+3+N”数字化健康管理体系：</p>
              
              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 class="font-bold text-gray-900 mb-2 flex items-center"><span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-2">核心</span> 1个数字化健康中台</h3>
                  <p class="text-sm text-gray-600">打通茅台内部HR系统与平安医疗资源，实现员工健康数据统一归集、分析与预警。</p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 class="font-bold text-gray-900 mb-2 flex items-center"><span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-2">支柱</span> 3大核心服务场景</h3>
                  <ul class="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li><strong>日常保健：</strong> 7x24小时在线问诊、慢病管理、心理EAP。</li>
                    <li><strong>重疾就医：</strong> 全国百强三甲医院绿通、MDT多学科会诊。</li>
                    <li><strong>职业健康：</strong> 驻场医生巡诊、职业病防护培训。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>三、 项目实施与运营保障</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-gray-50 p-3 rounded border border-gray-200">
                  <div class="font-bold text-gray-800 mb-1 text-sm">阶段一：系统对接 (1-2周)</div>
                  <div class="text-xs text-gray-600">完成API接口调试，数据安全加密传输测试。</div>
                </div>
                <div class="bg-gray-50 p-3 rounded border border-gray-200">
                  <div class="font-bold text-gray-800 mb-1 text-sm">阶段二：服务上线 (3-4周)</div>
                  <div class="text-xs text-gray-600">企微端应用上架，开展全员宣发与操作培训。</div>
                </div>
                <div class="bg-gray-50 p-3 rounded border border-gray-200">
                  <div class="font-bold text-gray-800 mb-1 text-sm">阶段三：持续运营 (长期)</div>
                  <div class="text-xs text-gray-600">按季度输出健康白皮书，动态调整干预策略。</div>
                </div>
              </div>
            </div>
          </div>
        \`;`;

const newTechnical = `const technicalContent = \`
          <div class="font-sans text-gray-800">
            <h1 class="text-2xl font-bold text-center mb-6 text-gray-900 border-b-2 border-orange-600 pb-2">贵州茅台集团健康管理服务项目 - 技术标书</h1>
            
            <div class="mb-8">
              <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>一、 项目理解与需求分析</h2>
              <div class="bg-orange-50 p-4 rounded-lg border border-orange-100 text-sm text-gray-700 leading-relaxed">
                <p class="mb-2">贵州茅台集团作为中国白酒行业的领军企业，员工数量庞大，工作场景复杂。当前面临的主要健康管理痛点包括：</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>生产一线员工职业健康风险较高，需针对性预防。</li>
                  <li>高管及核心骨干工作压力大，缺乏系统性健康干预与专属医疗资源。</li>
                  <li>现有体检数据未有效盘活，缺乏持续的健康追踪与数据分析。</li>
                  <li>异地员工及家属获取优质医疗资源存在地域壁垒。</li>
                </ul>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>二、 整体解决方案设计</h2>
              <p class="text-sm text-gray-700 mb-4">基于企康规范，我们为茅台集团量身定制了“1+3+N”数字化健康管理体系：</p>
              
              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 class="font-bold text-gray-900 mb-2 flex items-center"><span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-2">核心</span> 1个数字化健康中台</h3>
                  <p class="text-sm text-gray-600">打通茅台内部HR系统与平安医疗资源，实现员工健康数据统一归集、分析与预警。支持千人千面的健康画像生成。</p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 class="font-bold text-gray-900 mb-2 flex items-center"><span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-2">支柱</span> 3大核心服务场景</h3>
                  <ul class="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li><strong>日常保健：</strong> 7x24小时在线问诊、慢病管理、心理EAP、营养膳食指导。</li>
                    <li><strong>重疾就医：</strong> 全国百强三甲医院绿通、MDT多学科会诊、住院垫付与陪护。</li>
                    <li><strong>职业健康：</strong> 驻场医生巡诊、职业病防护培训、急救技能演练(CPR/AED)。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>三、 核心技术优势</h2>
              <ul class="list-disc pl-10 text-sm space-y-2 text-gray-700">
                <li><strong>AI辅助诊疗系统：</strong> 拥有自主研发的AskBob医疗大模型，辅助医生提升问诊效率与准确率。</li>
                <li><strong>海量医疗资源网络：</strong> 合作医院超3000家（含百强医院），合作药店超22万家。</li>
                <li><strong>全职医生团队：</strong> 拥有超2000人的自建全职医疗团队，确保服务质量的标准化与稳定性。</li>
              </ul>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>四、 数据安全与隐私保护方案</h2>
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p class="mb-2">我们高度重视茅台集团的数据资产安全，采取以下措施：</p>
                <ul class="list-decimal pl-6 space-y-1">
                  <li><strong>物理隔离：</strong> 核心健康数据支持私有云或混合云部署，确保数据不出域。</li>
                  <li><strong>传输加密：</strong> 采用国密算法（SM2/SM3/SM4）及TLS 1.3协议进行全链路加密。</li>
                  <li><strong>权限管控：</strong> 严格落实RBAC（基于角色的访问控制），实行最小权限原则，所有数据访问均留存审计日志。</li>
                  <li><strong>脱敏处理：</strong> 敏感个人信息（如姓名、身份证号）在展示和分析环节进行动态脱敏。</li>
                </ul>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>五、 项目实施与运营保障</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-gray-50 p-3 rounded border border-gray-200">
                  <div class="font-bold text-gray-800 mb-1 text-sm">阶段一：系统对接 (1-2周)</div>
                  <div class="text-xs text-gray-600">完成API接口调试，数据安全加密传输测试。建立专属服务群。</div>
                </div>
                <div class="bg-gray-50 p-3 rounded border border-gray-200">
                  <div class="font-bold text-gray-800 mb-1 text-sm">阶段二：服务上线 (3-4周)</div>
                  <div class="text-xs text-gray-600">企微端应用上架，开展全员宣发与操作培训。驻场团队入驻。</div>
                </div>
                <div class="bg-gray-50 p-3 rounded border border-gray-200">
                  <div class="font-bold text-gray-800 mb-1 text-sm">阶段三：持续运营 (长期)</div>
                  <div class="text-xs text-gray-600">按季度输出健康白皮书，动态调整干预策略。7x24小时客服响应。</div>
                </div>
              </div>
            </div>
          </div>
        \`;`;

content = content.split(oldCommercial).join(newCommercial);
content = content.split(oldTechnical).join(newTechnical);

fs.writeFileSync('src/components/ChatWindow.tsx', content);
