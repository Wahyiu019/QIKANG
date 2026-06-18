const fs = require('fs');

let code = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

// Remove AI智能体输出
code = code.replace(
  '        <div className="absolute top-0 right-0 py-1 px-4 bg-orange-500 text-white text-xs font-bold rounded-bl-xl shadow-sm">\n          AI智能体输出\n        </div>\n',
  ''
);

// Remove 企康标讯解读 Agent | 
code = code.replace(
  '企康标讯解读 Agent <span className="text-gray-300 mx-3 font-normal">|</span> <span className="text-[#d36437]">烟草企康投标分析</span>',
  '<span className="text-[#d36437]">烟草企康投标分析</span>'
);

// Remove 模拟项目：
code = code.replace(
  '模拟项目：云南省烟草公司',
  '云南省烟草公司'
);

// Remove 风格: 淡雅预警
code = code.replace(
  '          <div className="flex items-center text-[#c28427] px-3 py-1.5 bg-[#fdf3e6] border border-[#f6ddbb] rounded-full">\n            <ShieldAlert className="w-3.5 h-3.5 mr-1.5" /> 风格: 淡雅预警\n          </div>\n',
  ''
);

fs.writeFileSync('src/components/MessageBubble.tsx', code, 'utf8');
console.log('patched header');
