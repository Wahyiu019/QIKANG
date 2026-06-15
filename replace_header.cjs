const fs = require('fs');
let file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetHeader = `          <div className="flex items-center">
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">企康助手</h2>
              <div className="flex items-center mt-1 space-x-2 text-xs">
                <span className="flex items-center text-gray-500">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                  在线 · 全流程企康助手
                </span>
              </div>
            </div>
          </div>`;

const newHeader = `          <div className="flex items-center">
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight line-clamp-1 max-w-lg">
                {messages.filter(m => m.sender === 'user').pop()?.content || '企康助手'}
              </h2>
              <div className="flex items-center mt-1 space-x-2 text-xs">
                <span className="flex items-center text-gray-500">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                  在线 · {currentExpert ? currentExpert.name : '全流程企康助手'}
                </span>
              </div>
            </div>
          </div>`;

content = content.replace(targetHeader, newHeader);
fs.writeFileSync(file, content);
console.log('replaced header');
