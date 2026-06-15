const fs = require('fs');

const hwPath = 'src/components/ChatWindow.tsx';
let hwContent = fs.readFileSync(hwPath, 'utf8');

hwContent = hwContent.replace(
  /帮我整理一个提供给某省烟草集团，针对家庭医生的补充营销方案/g,
  '烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料'
);

hwContent = hwContent.replace(
  /prompt: "帮我整理一个提供给某省烟草集团，针对家庭医生的补充营销方案。"/g,
  'prompt: "烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料。"'
);

hwContent = hwContent.replace(
  /帮我整理一个提供给某省烟草集团，针对家庭医生的补充营销方案。/g,
  '烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料。'
);

fs.writeFileSync(hwPath, hwContent, 'utf8');

const mbPath = 'src/components/MessageBubble.tsx';
let mbContent = fs.readFileSync(mbPath, 'utf8');

const oldBlockStart = mbContent.indexOf('{/* 顶部头图（图文展示） */}');
const newDisplay = `{/* Scene 04: 三栏式营销材料页面 */}
      <div className="p-6 bg-gray-50/20">
        <h3 className="text-xl font-bold mb-4 text-orange-950">三段式拜访材料</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
            <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
              <h4 className="font-bold text-orange-900 text-sm">哪些大客户在做</h4>
            </div>
            <ul className="p-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>同类型央国企</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>省级多机构客户</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>长期合作标杆</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
            <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
              <h4 className="font-bold text-orange-900 text-sm">平安标准产品</h4>
            </div>
            <ul className="p-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>分层补充医疗</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>委托基金管理</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>体检/慢病/就医协助</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
            <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
              <h4 className="font-bold text-orange-900 text-sm">明星方案价值</h4>
            </div>
            <ul className="p-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>政策合规</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>员工关怀</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>ESG/健康企业</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>企业文化与荣誉</li>
            </ul>
          </div>
        </div>
      </div>
{/* END OF CUSTOM SCENE 04 */}
`;

if (oldBlockStart !== -1) {
    // find the end of the data?.isFamilyDoctor ? ... : ... block. Wait!
    // The safest way is to find the condition `data?.isFamilyDoctor ?` in the JSX if any, and replace only its internal part. 
    // Wait, let's just do a string replacement of a specific chunk.
}

console.log('Update script ready to execute targeted replace.');

