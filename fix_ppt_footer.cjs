const fs = require('fs');
let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

const oldFooter = `{/* Footer */}
              <div className="absolute bottom-4 left-10 right-10 flex justify-between text-xs text-gray-400 font-medium z-10">
                <span>平安企康 x 明道云</span>
                <span>{activeSlide + 1}</span>
              </div>`;

const newFooter = `{/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 px-10 pb-4 flex justify-between items-end z-10">
                <div className="text-xs text-gray-400 font-medium pb-1">
                  <span>{activeSlide + 1}</span>
                </div>
                {/* 企康助力明道云打造健康组织 */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200/60 rounded-xl px-4 py-2.5 flex items-center shadow-sm backdrop-blur-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 shadow-md border border-orange-400/50">
                    <HeartPulse size={18} className="text-white drop-shadow-sm" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[10px] text-orange-600 font-bold tracking-widest uppercase mb-0.5 opacity-80">PingAn Health</div>
                    <div className="text-[13px] text-gray-800 font-extrabold tracking-wide">企康助力明道云打造健康组织</div>
                  </div>
                </div>
              </div>`;

code = code.replace(oldFooter, newFooter);

fs.writeFileSync('src/components/MessageBubble.tsx', code);
console.log("PPT Footer updated successfully.");
