import fs from 'fs';

const file = 'src/components/MessageBubble.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /const \[submitted, setSubmitted\] = React\.useState\(false\);\n\n  const handleIgnore = \(\) => \{/g;

const replacement1 = `const [submitted, setSubmitted] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleIgnore = () => {`;

content = content.replace(targetRegex, replacement1);

const targetRegex2 = /            <div className="flex flex-wrap gap-3">\n              \{painPointOptions\.map\(option => \(\n                <label key=\{option\} className=\{`flex items-center px-3 py-2 border rounded-md transition-colors \$\{submitted \? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-orange-50'\} \$\{formData\.painPoints\.includes\(option\) \? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-300 text-gray-700'\}`\}>\n                  <input type="checkbox" className="hidden" checked=\{formData\.painPoints\.includes\(option\)\} onChange=\{\(\) => togglePainPoint\(option\)\} disabled=\{submitted\} \/>\n                  <span className="text-sm">\{option\}<\/span>\n                <\/label>\n              \)\)\}\n            <\/div>/g;

const replacement2 = `            <div className="relative" ref={dropdownRef}>
              <div 
                className={\`w-full border rounded-md py-2 px-3 text-sm flex items-center justify-between transition-colors \${submitted ? 'bg-gray-50 border-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white border-gray-300 text-gray-900 cursor-pointer hover:border-orange-400 focus-within:ring-1 focus-within:ring-orange-500 focus-within:border-orange-500'}\`}
                onClick={() => !submitted && setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex flex-wrap gap-1">
                  {formData.painPoints.length === 0 ? (
                    <span className="text-gray-400">请选择（可多选），如未明确可暂不选</span>
                  ) : (
                    formData.painPoints.map(p => (
                      <span key={p} className="inline-flex items-center bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">
                        {p}
                        {!submitted && (
                          <span 
                            className="ml-1 cursor-pointer hover:bg-orange-200 rounded-full p-0.5 flex items-center justify-center"
                            onClick={(e) => { e.stopPropagation(); togglePainPoint(p); }}
                          >
                            <X className="w-3 h-3" />
                          </span>
                        )}
                      </span>
                    ))
                  )}
                </div>
                <ChevronDown className={\`w-4 h-4 text-gray-400 transition-transform \${isDropdownOpen ? 'rotate-180' : ''}\`} />
              </div>
              
              <AnimatePresence>
                {isDropdownOpen && !submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden"
                  >
                    <div className="max-h-60 overflow-y-auto py-1">
                      {painPointOptions.map(option => (
                        <label 
                          key={option} 
                          className={\`flex items-center px-4 py-2.5 cursor-pointer transition-colors hover:bg-orange-50 \${formData.painPoints.includes(option) ? 'bg-orange-50/50' : ''}\`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input 
                            type="checkbox" 
                            className="rounded text-orange-500 focus:ring-orange-500 w-4 h-4 border-gray-300 mr-3" 
                            checked={formData.painPoints.includes(option)} 
                            onChange={() => togglePainPoint(option)} 
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>`;

content = content.replace(targetRegex2, replacement2);
fs.writeFileSync(file, content);
console.log("Patched!");
