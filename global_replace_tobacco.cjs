const fs = require('fs');

function replaceInFiles() {
  const files = [
    'src/App.tsx',
    'src/components/MessageBubble.tsx',
    'src/components/ChatWindow.tsx',
    'src/components/ChatList.tsx',
    'src/components/BusinessExpert.tsx',
  ];

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/联想（北京）有限公司/g, '某省烟草集团');
    content = content.replace(/联想集团/g, '某省烟草集团');
    content = content.replace(/联想/g, '某省烟草'); // Note: could be dangerous if part of other words, but typically safe in this prototype.
    content = content.replace(/杨元庆/g, '张总'); // Replace Lenovo CEO with generic name
    content = content.replace(/刘总/g, '李总');
    content = content.replace(/Lenovo Group Limited/g, 'Tobacco Group');
    content = content.replace(/Lenovo Group/g, 'Tobacco Group');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  });
}

replaceInFiles();
