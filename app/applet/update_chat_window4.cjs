const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

code = code.replace(/"正在为您执行员工信息变更\.\.\."/g, '"正在为您执行报销材料审核。"');
code = code.replace(/"处理总结：共处理37条，已完成35条，待人工确认2条。已完成员工清单修改并归档，保全处理报告邮件已发送您，请及时查收。"/g, '"您的报销材料已审核通过，审核结果已发送至您的邮箱，请及时查收。"');
code = code.replace(/"已为您找到88条已完成保全任务，其中合规88条，不合规0条。复核校验报告已邮件发送您，请及时查收。"/g, '"已为您完成68次历史报销审核申请的复核，其中正常68次，异常0次。复核结果已发送至您的邮箱，请及时查收。"');
code = code.replace(/"您好！我是运营管理专家。我将为您提供保全申请、材料审核及复核校验等一站式运营服务。"/g, '"您好！我是运营管理专家。我将为您提供报销审核、材料审核及复核校验等一站式运营服务。"');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Replaced');
