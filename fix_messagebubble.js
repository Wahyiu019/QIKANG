import fs from 'fs';

const filePath = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Modify ReasoningProcess props to receive timestamp
content = content.replace(
  `function ReasoningProcess({ steps, title }: { steps: { text: string, status: 'loading' | 'done' }[], title?: string }) {`,
  `function ReasoningProcess({ steps, title, timestamp }: { steps: { text: string, status: 'loading' | 'done' | 'complete' | 'pending' }[], title?: string, timestamp?: any }) {`
);

// Call TypewriterText for step text
// We only apply typewriter if status is loading. If done, we might not type if we assume they are already typed. 
// But we can just use TypewriterText for all. TypewriterText keeps currentText state.
// Actually, TypewriterText keeps currentText until it's finished.
// We should replace {step.text} with <TypewriterText text={step.text} timestamp={timestamp} render={(c)=><span>{c}</span>} />

const beforeStepText = 
`            <span className={step.status === 'loading' ? 'text-gray-500' : 'text-gray-800'}>
              {step.text}
            </span>`;

const afterStepText = 
`            <span className={step.status === 'loading' ? 'text-gray-500' : 'text-gray-800'}>
              <TypewriterText text={step.text} timestamp={timestamp} render={(c: string)=><>{c}</>} />
            </span>`;

content = content.replace(beforeStepText, afterStepText);

// Make sure we pass timestamp from MessageBubble
const beforeReasoningProcess = `<ReasoningProcess steps={message.data.steps} title={message.data.title} />`;
const afterReasoningProcess = `<ReasoningProcess steps={message.data.steps} title={message.data.title} timestamp={message.timestamp} />`;

content = content.replace(beforeReasoningProcess, afterReasoningProcess);


fs.writeFileSync(filePath, content, 'utf-8');
console.log('MessageBubble.tsx updated for ReasoningProcess Typewriter');
