import fs from 'fs';
import path from 'path';

function walkDir(dir: string, callback: (filepath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const replaceMap: Record<string, string> = {
  '贵州茅台集团健康管理服务项目': '联想健康管理服务项目',
  '中国贵州茅台酒厂（集团）有限责任公司': '联想控股股份有限公司',
  '贵州茅台集团': '联想（北京）有限公司',
  '茅台财务总监': '联想财务总监',
  '茅台集团2025年度社会责任报告': '联想集团2025年度社会责任报告',
  '茅台黑金推荐方案筹备组': '联想健康管理推荐方案筹备组',
  '茅台项目': '联想项目',
  '茅台': '联想'
};

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanges = false;
    
    for (const [key, value] of Object.entries(replaceMap)) {
      if (content.includes(key)) {
        content = content.replace(new RegExp(key, 'g'), value);
        hasChanges = true;
      }
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Replaced in ${filePath}`);
    }
  }
});
