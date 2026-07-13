const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

// 1. Change PackageOptionCard selectedId to null
code = code.replace(/const \[selectedId, setSelectedId\] = React\.useState<string \| null>\("pkg2"\);/g, 'const [selectedId, setSelectedId] = React.useState<string | null>(null);');

// 2. Change PPTCard to look more like a PPT presentation
const targetPPTCardStr = `function PPTCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {`;
const endPPTCardIndex = code.indexOf(`function PPTContentCard`, code.indexOf(targetPPTCardStr));

const newPPTCard = `function PPTCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <Presentation size={18} className="mr-2" />
          {data?.title || "明道云标品营销方案PPT"}
        </div>
        <div className="flex items-center space-x-2 text-white/90">
            <button className="flex items-center text-xs bg-black/10 hover:bg-black/20 px-3 py-1.5 rounded transition-colors"><Download size={14} className="mr-1"/> 导出为PPTX</button>
        </div>
      </div>
      <div className="p-5">
        <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-lg mb-6">
          <p className="text-sm text-orange-900 leading-relaxed font-medium">
            {data?.overview || "已根据需求生成完整的标品营销方案PPT内容。"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data?.slides?.map((slide: any, i: number) => (
            <div key={i} className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-sm aspect-video bg-gray-50 flex flex-col hover:shadow-md transition-shadow hover:border-orange-300">
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-gray-100 z-10">
                {i + 1}
              </div>
              
              <div className="h-12 bg-white border-b border-gray-100 flex items-center justify-center px-8 relative">
                <h3 className="font-bold text-gray-800 text-sm truncate text-center w-full">{slide.title}</h3>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-orange-400"></div>
              </div>
              
              <div className="flex-1 p-5 bg-gradient-to-b from-white to-gray-50/50 flex flex-col justify-center">
                <ul className="space-y-2.5 text-[12px] text-gray-600">
                  {slide.bullets?.map((b: string, j: number) => (
                    <li key={j} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1 mr-2.5 flex-shrink-0"></div>
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;

if(endPPTCardIndex !== -1) {
    code = code.substring(0, code.indexOf(targetPPTCardStr)) + newPPTCard + '\n\n' + code.substring(endPPTCardIndex);
}

fs.writeFileSync('src/components/MessageBubble.tsx', code);
