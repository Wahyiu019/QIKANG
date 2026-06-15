const fs = require('fs');

const path = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(path, 'utf8');

const newComponentStart = `export function VisitPitchReportCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  const [activeRole, setActiveRole] = useState<'vp' | 'hrd' | 'handler'>('vp');
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-3 font-sans">`;

const oldComponentStart = `export function VisitPitchReportCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-3 font-sans">`;

const newMethodology = `
        {/* 角色切换 Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto overflow-y-hidden mb-6">
          <button
            onClick={() => setActiveRole('vp')}
            className={\`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative \${
              activeRole === 'vp'
                ? 'text-orange-600 bg-orange-50/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }\`}
          >
            企业分管总
            {activeRole === 'vp' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveRole('hrd')}
            className={\`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative \${
              activeRole === 'hrd'
                ? 'text-orange-600 bg-orange-50/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }\`}
          >
            人力资源部门 (HRD)
            {activeRole === 'hrd' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveRole('handler')}
            className={\`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative \${
              activeRole === 'handler'
                ? 'text-orange-600 bg-orange-50/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }\`}
          >
            业务经办人
            {activeRole === 'handler' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
            )}
          </button>
        </div>

        {/* 方法论速览 */}`;

if (content.includes(oldComponentStart)) {
  content = content.replace(oldComponentStart, newComponentStart);
  content = content.replace("{/* 方法论速览 */}", newMethodology);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Added activeRole state and tabs.');
} else {
  console.log('Could not find component start.');
}
