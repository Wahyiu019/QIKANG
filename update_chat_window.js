import fs from 'fs';

const filePath = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(
  `type: 'standard_product_plan_report', content: '为您生成联想集团专属家庭医生补充营销方案PPT和营销话术html。', timestamp: new Date(), data: { isFamilyDoctor: true }`,
  `type: 'lenovo_new_marketing_plan', content: '为您生成联想集团专属家庭医生补充营销方案PPT和营销话术html。', timestamp: new Date(), data: { isFamilyDoctor: true }`
);

content = content.replace(
  `type: 'standard_product_plan_report', content: '为您生成联想集团专属家庭医生补充营销方案PPT和营销话术html。', timestamp: new Date(), data: { isFamilyDoctor: true }`,
  `type: 'lenovo_new_marketing_plan', content: '为您生成联想集团专属家庭医生补充营销方案PPT和营销话术html。', timestamp: new Date(), data: { isFamilyDoctor: true }`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('ChatWindow.tsx updated to use lenovo_new_marketing_plan');
