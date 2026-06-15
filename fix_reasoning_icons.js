import fs from 'fs';

const filePath = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const beforeIcons = `            {step.status === 'loading' ? (
              <Loader2 size={14} className="text-orange-500 animate-spin mt-0.5 mr-2 flex-shrink-0" />
            ) : (
              <CheckCircle2 size={14} className="text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
            )}`;

const afterIcons = `            {step.status === 'loading' ? (
              <Loader2 size={14} className="text-orange-500 animate-spin mt-0.5 mr-2 flex-shrink-0" />
            ) : step.status === 'pending' ? (
              <div className="w-3.5 h-3.5 rounded-full border border-gray-300 mt-0.5 mr-2 flex-shrink-0 bg-white" />
            ) : (
              <CheckCircle2 size={14} className="text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
            )}`;

content = content.replace(beforeIcons, afterIcons);

// Also set opacity for pending
content = content.replace(
  `            <span className={step.status === 'loading' ? 'text-gray-500' : 'text-gray-800'}>`,
  `            <span className={step.status === 'loading' ? 'text-gray-500' : step.status === 'pending' ? 'text-gray-300' : 'text-gray-800'}>`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed ReasoningProcess icons');
