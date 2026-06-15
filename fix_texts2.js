import fs from 'fs';

const filePath = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replaceAll(
  `content: '为您生成北京农商行1000人定制健康体检套餐及销售材料：'`,
  `content: '为您生成北京农商行1000人定制健康体检套餐及销售材料html和企康产品分析报告html。'`
);

content = content.replaceAll(
  `content: '为您生成联想集团专属家庭医生补充营销方案：'`,
  `content: '为您生成联想集团专属家庭医生补充营销方案PPT和营销话术html。'`
);

content = content.replaceAll(
  `content: '正在为您生成《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）投标书（初稿）》'`,
  `content: '正在为您生成《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）投标书（初稿）》docx'`
);

content = content.replaceAll(
  `content: '正在为您生成《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）述标PPT》、《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）述标PPT逐字稿》'`,
  `content: '正在为您生成《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）述标PPT》、《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）述标PPT逐字稿》docx'`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Texts replaced!');
