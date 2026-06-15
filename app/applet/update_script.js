const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// Replacements for Strings
code = code.replace(/保全申请发起/g, '报销审核发起');
code = code.replace(/保全材料审核/g, '报销材料审核');

// In Expert List & Prompts
code = code.replace(/请帮我修改以下员工清单，包括增加和删除。/g, '请帮我审核以下报销材料。');
code = code.replace(/请帮我修改以下员工清单，包括增加和删除/g, '请帮我审核以下报销材料');
code = code.replace(/确认执行员工信息变更。/g, '确认执行报销审核。');
code = code.replace(/确认执行员工信息变更/g, '确认执行报销审核');
code = code.replace(/请帮我复核当前所有保全完成任务是否合规。/g, '请帮我复核所有报销申请，确认是否存在异常。');
code = code.replace(/请帮我复核当前所有保全完成任务是否合规/g, '请帮我复核所有报销申请，确认是否存在异常');

// Replace bot msg: "请您上传员工清单附件。"
code = code.replace(/请您上传员工清单附件。/g, '请您上传需要审核的材料。');

// Replace bot msg: "分析变更明细表：新增员工12人、删除员工8人、变更信息15人、需人工确认2人。"
code = code.replace(/分析变更明细表：新增员工12人、删除员工8人、变更信息15人、需人工确认2人。/g, '已完成对您上传报销材料的分析，共包含报销发票1张、报销明细表1份。');

// Replace bot msgs for 确认执行员工信息变更
code = code.replace(/正在为您执行所有申请变更。/g, '正在为您执行报销材料审核。');
code = code.replace(/为您完成以下信息变更办理：\\n- 新增人员：12人\\n- 删除人员：8人\\n- 信息变更：15人\\n- 转人工审核：2人\\n\\n处理总结：保全申请已完成并生效，清单已发送至您的邮箱，请查收/g, '您的报销材料已审核通过，审核结果已发送至您的邮箱，请及时查收。');

// Replace bot msgs for "复核"
code = code.replace(/已为您完成68次历史保全完成申请的复核，其中正常68次，异常0次。复核结果已发送至您的邮箱，请及时查收。/g, '已为您完成68次历史报销审核申请的复核，其中正常68次，异常0次。复核结果已发送至您的邮箱，请及时查收。');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Replaced successfully');
