const fs = require('fs');

let messageBubbleCode = fs.readFileSync('src/components/MessageBubble.tsx', 'utf8');

// Replace target values for pkg2 and pkg3 in defaultPackages
messageBubbleCode = messageBubbleCode.replace(
  /{ name: "高端私立医院VIP体检", target: "高管及核心层", price: "6,000元", unit: "人\/年" }/g,
  '{ name: "高端私立医院VIP体检", target: "高层员工", price: "6,000元", unit: "人/年" }'
);
messageBubbleCode = messageBubbleCode.replace(
  /{ name: "三甲医院专家特需门诊", target: "中层管理人员", price: "2,000元", unit: "人\/年" }/g,
  '{ name: "三甲医院专家特需门诊", target: "核心员工", price: "2,000元", unit: "人/年" }'
);
messageBubbleCode = messageBubbleCode.replace(
  /{ name: "家属共享健康档案及问诊", target: "全体员工及家属", price: "200元", unit: "户\/年" }/g,
  '{ name: "家属共享健康档案及问诊", target: "基层员工", price: "200元", unit: "户/年" }'
);

messageBubbleCode = messageBubbleCode.replace(
  /{ name: "海外重疾就医协助及随诊", target: "核心高管", price: "25,000元", unit: "人\/年" }/g,
  '{ name: "海外重疾就医协助及随诊", target: "高层员工", price: "25,000元", unit: "人/年" }'
);
messageBubbleCode = messageBubbleCode.replace(
  /{ name: "专属私人健康管家（7x24）", target: "高层决策人员", price: "12,000元", unit: "人\/年" }/g,
  '{ name: "专属私人健康管家（7x24）", target: "核心员工", price: "12,000元", unit: "人/年" }'
);
messageBubbleCode = messageBubbleCode.replace(
  /{ name: "家族基因筛查及抗衰方案", target: "高层及直系亲属", price: "8,800元", unit: "人\/次" }/g,
  '{ name: "家族基因筛查及抗衰方案", target: "基层员工", price: "8,800元", unit: "人/次" }'
);

fs.writeFileSync('src/components/MessageBubble.tsx', messageBubbleCode);
console.log("MessageBubble pkg targets updated");

let chatWindowCode = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

chatWindowCode = chatWindowCode.replace(
  /target: "高管及核心层"/g, 'target: "高层员工"'
);
chatWindowCode = chatWindowCode.replace(
  /target: "中层管理人员"/g, 'target: "核心员工"'
);
chatWindowCode = chatWindowCode.replace(
  /target: "全体员工及家属"/g, 'target: "基层员工"'
);

chatWindowCode = chatWindowCode.replace(
  /target: "核心高管"/g, 'target: "高层员工"'
);
chatWindowCode = chatWindowCode.replace(
  /target: "高层决策人员"/g, 'target: "核心员工"'
);
chatWindowCode = chatWindowCode.replace(
  /target: "高层及直系亲属"/g, 'target: "基层员工"'
);

fs.writeFileSync('src/components/ChatWindow.tsx', chatWindowCode);
console.log("ChatWindow pkg targets updated");
