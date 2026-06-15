const fs = require('fs');

let file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /export function CiticCompetitorAnalysisCard\(\{ data \}: \{ data\?: any \}\) \{[\s\S]*?(?=export function CompetitorAnalysisCard)/;
const match = content.match(regex);
if (match) {
  let card = match[0];
  
  card = card.replace(
    /本次投标最大对手是[\s\S]*?结论提炼：<\/span>\s*本次投标最大对手是.*?。/i,
    '结论提炼：</span> 本次投标最大对手是 <strong>爱康国宾</strong> 和 <strong>泰康保险集团</strong>。我方制胜关键在于强调全职医疗团队的重履约属性与合规隔离，直击对手服务同质化与业务连带推销的软肋。'
  );

  card = card.replace(/<span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">袋鼠健康<\/span>/g, '<span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">爱康国宾</span>');
  card = card.replace(/<span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">德安健康<\/span>/g, '<span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">泰康保险集团</span>');
  card = card.replace(/<span className="px-2 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded text-xs">善诊<\/span>/g, '');
  
  card = card.replace(/<span className="text-xs font-bold text-orange-700">🔴 高威胁 \(3家\)<\/span>/g, '<span className="text-xs font-bold text-orange-700">🔴 高威胁 (2家)</span>');

  card = card.replace(/<span className="font-bold text-orange-900 border-b border-orange-200 pb-1 w-full block">袋鼠健康<\/span>/g, '<span className="font-bold text-orange-900 border-b border-orange-200 pb-1 w-full block">爱康国宾</span>');
  card = card.replace(/<span className="font-bold text-orange-900 border-b border-orange-200 pb-1 w-full block">德安健康<\/span>/g, '<span className="font-bold text-orange-900 border-b border-orange-200 pb-1 w-full block">泰康保险集团</span>');

  card = card.replace(
    /<li><strong>优势：<\/strong> 互联网体检SaaS起家，系统交互体验好，检前导流能力强。<\/li>\s*<li><strong>短板：<\/strong> 轻资产模式，没有自己的医疗实体，检后服务全靠外包，易出现体检异常无人管的“断头路”。<\/li>/,
    '<li><strong>优势：</strong> 线下体检中心覆盖网点密集，体检设备全面，标准化流水线操作。</li><li><strong>短板：</strong> 检后干预和深度解读欠缺，存在过度检查和推销办卡等负面体验，服务同质化严重。</li>'
  );

  card = card.replace(
    /<li><strong>优势：<\/strong> 区域性地推强，有部分三甲医生挂靠资源。<\/li>\s*<li><strong>短板：<\/strong> 资金链紧绷，全国服务网络有盲区，抗风险能力弱，不符合国企\/银行稳健要求。<\/li>/,
    '<li><strong>优势：</strong> 以大健康和长寿闭环为概念，具备雄厚的保险资金和产业链投资能力。</li><li><strong>短板：</strong> 核心目的是保险销售导流，企健服务往往被包装成赠品或搭售，员工隐私存在被二次利用的合规风险。</li>'
  );

  console.log("Card found and updated!");

  content = content.replace(regex, card);
  fs.writeFileSync(file, content);
} else {
  console.log("Not found Citic");
}
