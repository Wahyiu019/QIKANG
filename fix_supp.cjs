const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

if (!code.includes('function SupplementaryInfoFormCard')) {
  const dummy = `
function SupplementaryInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {
  return <div className="mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow-sm text-center text-gray-500">
    补充信息卡片已加载
  </div>;
}
`;
  const target = 'function PackageOptionCard';
  code = code.replace(target, dummy + '\n' + target);
  fs.writeFileSync('src/components/MessageBubble.tsx', code);
  console.log("SupplementaryInfoFormCard restored.");
}
