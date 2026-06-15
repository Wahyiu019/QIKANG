const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

const closing = `
                ]
              }
            })
          };
          setMessages(prev => [...prev, reportMsg]);
        }
      }, 4500);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full relative">
      <div>Missing Content</div>
    </div>
  );
}

export default ChatWindow;
`;

code += closing;
fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Appended closing brackets');
