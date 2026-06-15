import fs from 'fs';

const filePath = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// I will just use regex to replace the mapping
content = content.replace(
  /{steps\?\.map\(\(step, idx\) => \([\s\S]*?<\/motion\.div>\n        \)\)}/,
  `{steps?.filter(s => s.status !== 'pending').map((step, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={step.text} 
            className="flex items-start text-sm"
          >
            {step.status === 'loading' ? (
              <Loader2 size={14} className="text-orange-500 animate-spin mt-0.5 mr-2 flex-shrink-0" />
            ) : (
              <CheckCircle2 size={14} className="text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
            )}
            <span className={step.status === 'loading' ? 'text-gray-500' : 'text-gray-800'}>
              <TypewriterText text={step.text} timestamp={timestamp} render={(c: string)=><>{c}</>} />
            </span>
          </motion.div>
        ))}`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed ReasoningProcess to filter pending and stream');
