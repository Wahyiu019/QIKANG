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
const res = extractComponent(code, 'LenovoNewMarketingPlanCard');
let newContent = res.content;

// 1. the title '哪些大客户在做' background
// Current title is <div className="bg-amber-500 text-white px-4 py-3 font-bold flex items-center text-sm">
// Let's replace whatever it is inside the column
// Wait, currently it is bg-[#1e3a5f] or similar, let's just make sure.
newContent = newContent.replaceAll('bg-[#1e3a5f]', 'bg-amber-500');
newContent = newContent.replaceAll('text-[#1e3a5f]', 'text-amber-600');

// 2. Remove the old Table Section at the bottom:
const tableRegex = /\{\/\* Table Section \*\/\}[\s\S]*?className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center download-exclude">/;

newContent = newContent.replace(tableRegex, 'className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center download-exclude">');

// 3. Create the new block for '行业特征'
const newFeatureBlock = `
            <div>
              <div className="flex items-center font-bold text-amber-600 mb-2 border-b border-gray-100 pb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                烟草企业健康保障行业特征
              </div>
              <div className="overflow-x-auto rounded-lg border border-[#e2e8f0]">
                <table className="w-full text-xs text-left border-collapse leading-tight">
                  <thead className="bg-[#fce4a6]/50 text-[#b88c3a] font-bold">
                    <tr>
                      <th className="px-3 py-2 border-b border-[#e2e8f0]">行业特征</th>
                      <th className="px-3 py-2 border-b border-[#e2e8f0]">对应的企康需求</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="px-3 py-2 border-b border-r border-[#e2e8f0]">员工规模大(千~万人)</td>
                      <td className="px-3 py-2 border-b border-[#e2e8f0]">需覆盖全国、统一标准的健康体系</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b border-r border-[#e2e8f0] bg-gray-50/50">平均年龄偏高</td>
                      <td className="px-3 py-2 border-b border-[#e2e8f0] bg-gray-50/50">慢病管理、中老年专属服务</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b border-r border-[#e2e8f0]">退休员工比例高</td>
                      <td className="px-3 py-2 border-b border-[#e2e8f0]">退休人员健康管理延续、医务室需求</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b border-r border-[#e2e8f0] bg-gray-50/50">一线员工轮班制</td>
                      <td className="px-3 py-2 border-b border-[#e2e8f0] bg-gray-50/50">7×24小时在线问诊、远程医疗</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b border-r border-[#e2e8f0]">国企福利体系完善</td>
                      <td className="px-3 py-2 border-b border-[#e2e8f0]">补充医疗、健康委托等综合福利</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b border-r border-[#e2e8f0] bg-gray-50/50">网络化接受度偏低</td>
                      <td className="px-3 py-2 border-b border-[#e2e8f0] bg-gray-50/50">需要线下+线上融合指导</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-r border-[#e2e8f0]">职业病风险</td>
                      <td className="px-3 py-2 border-[#e2e8f0]">尘肺/呼吸道职业病防范、定期体检</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>`;

// Insert it right under `<div className="p-4 space-y-6 text-sm">` in column 1
newContent = newContent.replace(
  '<div className="p-4 space-y-6 text-sm">',
  '<div className="p-4 space-y-6 text-sm">\n' + newFeatureBlock
);

code = code.replace(res.content, newContent);
fs.writeFileSync('src/components/MessageBubble.tsx', code, 'utf8');
console.log('done');
