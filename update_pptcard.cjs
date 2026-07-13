const fs = require('fs');

let messageBubbleCode = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const targetPPTCardStr = `function PPTCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {`;
const endPPTCardIndex = messageBubbleCode.indexOf(`function PPTContentCard`, messageBubbleCode.indexOf(targetPPTCardStr));

const newPPTCard = `function PPTCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slides = data?.slides || [];

  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-[#D34125] px-4 py-2.5 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-sm">
          <Presentation size={18} className="mr-2" />
          {data?.title || "明道云标品营销方案PPT"} - PowerPoint
        </div>
        <div className="flex items-center space-x-2 text-white/90">
            <button className="flex items-center text-xs bg-black/10 hover:bg-black/20 px-3 py-1.5 rounded transition-colors"><Download size={14} className="mr-1"/> 导出为PPTX</button>
        </div>
      </div>
      
      {/* PPT Toolbar Mock */}
      <div className="bg-[#F3F2F1] border-b border-gray-300 px-4 py-2 flex items-center space-x-4 text-xs text-gray-700 font-medium">
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">文件</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer bg-white shadow-sm border border-gray-200">开始</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">插入</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">设计</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">切换</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">动画</span>
      </div>

      <div className="flex h-[450px] bg-gray-100">
        {/* Thumbnails Sidebar */}
        <div className="w-48 bg-white border-r border-gray-200 overflow-y-auto p-2 space-y-2">
          {slides.map((slide: any, i: number) => (
            <div 
              key={i} 
              onClick={() => setActiveSlide(i)}
              className={\`flex items-start p-1 rounded cursor-pointer \${activeSlide === i ? 'bg-orange-100/50' : 'hover:bg-gray-50'}\`}
            >
              <div className="w-4 text-right text-[10px] text-gray-500 font-medium pt-1 pr-1">{i + 1}</div>
              <div className={\`flex-1 aspect-video bg-white border shadow-sm rounded flex flex-col overflow-hidden \${activeSlide === i ? 'border-orange-500 ring-1 ring-orange-500' : 'border-gray-200'}\`}>
                <div className="h-4 bg-gray-50 border-b border-gray-100 flex items-center px-2">
                  <div className="text-[6px] font-bold text-gray-800 truncate w-full">{slide.title}</div>
                </div>
                <div className="flex-1 p-1">
                   <div className="space-y-0.5">
                     {slide.bullets?.map((_: any, j: number) => (
                       <div key={j} className="flex items-center">
                         <div className="w-0.5 h-0.5 rounded-full bg-gray-400 mr-0.5"></div>
                         <div className="h-0.5 bg-gray-200 w-full rounded"></div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Main Slide View */}
        <div className="flex-1 flex items-center justify-center p-6 bg-[#E1E1E1] overflow-hidden">
          {slides[activeSlide] && (
            <div className="w-full max-w-3xl aspect-video bg-white shadow-lg flex flex-col relative overflow-hidden transform scale-95 origin-center">
              {/* Slide Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full -z-0 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-100 rounded-tr-full -z-0 opacity-50"></div>
              
              <div className="relative z-10 px-12 py-10 border-b-2 border-orange-500">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{slides[activeSlide].title}</h2>
              </div>
              
              <div className="relative z-10 flex-1 px-14 py-10 flex flex-col justify-center">
                <ul className="space-y-6">
                  {slides[activeSlide].bullets?.map((b: string, j: number) => (
                    <li key={j} className="flex items-start group">
                      <div className="w-2.5 h-2.5 rounded-sm bg-orange-500 mt-2 mr-4 flex-shrink-0 shadow-sm"></div>
                      <span className="text-xl text-gray-700 leading-relaxed font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Footer */}
              <div className="absolute bottom-4 left-10 right-10 flex justify-between text-xs text-gray-400 font-medium z-10">
                <span>平安企康 x 明道云</span>
                <span>{activeSlide + 1}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="bg-[#F3F2F1] border-t border-gray-300 px-4 py-1.5 flex justify-between items-center text-[11px] text-gray-600">
        <div>幻灯片 {activeSlide + 1} / {slides.length}</div>
        <div className="flex items-center space-x-3">
            <span>备注</span>
            <span>批注</span>
            <div className="flex items-center space-x-1">
                <span className="w-3 h-3 border border-gray-400 block"></span>
                <span className="w-3 h-3 border border-gray-400 grid grid-cols-2 gap-0.5 p-0.5"><div className="bg-gray-400"></div><div className="bg-gray-400"></div><div className="bg-gray-400"></div><div className="bg-gray-400"></div></span>
                <span className="w-3 h-3 border border-gray-400 flex items-end justify-center"><div className="w-2 h-1.5 bg-gray-400"></div></span>
            </div>
            <div className="flex items-center space-x-2 ml-4">
                <span className="w-4 h-0.5 bg-gray-400"></span>
                <span className="text-xs">68%</span>
                <span className="w-4 h-0.5 flex items-center justify-center relative"><div className="absolute w-full h-px bg-gray-400"></div><div className="absolute w-1 h-2 bg-gray-600"></div></span>
            </div>
        </div>
      </div>
    </div>
  );
}`;

if(endPPTCardIndex !== -1) {
    messageBubbleCode = messageBubbleCode.substring(0, messageBubbleCode.indexOf(targetPPTCardStr)) + newPPTCard + '\n\n' + messageBubbleCode.substring(endPPTCardIndex);
    fs.writeFileSync('src/components/MessageBubble.tsx', messageBubbleCode);
    console.log("PPTCard has been rewritten to look like MS PowerPoint.");
} else {
    console.log("Could not find PPTCard in MessageBubble.tsx");
}

