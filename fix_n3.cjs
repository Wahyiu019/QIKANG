const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'ChatWindow.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The issue is literal newlines inside single-quoted strings.
// A simple way is to find a literal newline character where we expect a single quoted string to continue.
// Since this might be hard, let's fix known strings.

content = content.replace(/content: '请先告诉我本次拜访的.*?\n.*?'/gs, "content: '请先告诉我本次拜访的：\\n1. 拜访对象 (如：杨元庆 / 联想高管团队)\\n2. 拜访目的 (如：首次敲门 / 方案邀约 / 续约评估)\\n\\n*(可以直接在此回复，例如：杨元庆，首次拜访，方案邀约)*'");

content = content.replace(/content: '你好！我是你的专属企康助手。.*?'/gs, "content: '你好！我是你的专属企康助手。\\n我可以帮你领商机、客户洞察、陪展等。今天想从哪个任务开始？'");

content = content.replace(/value: '1. 数据孤岛.*?'/gs, "value: '1. 数据孤岛：员工体检数据分散，缺乏统一的健康档案管理平台。\\n2. 缺乏干预：重体检轻干预，缺乏针对慢性病和亚健康的持续跟踪与改善方案。\\n3. 体验断层：异地员工及家属就医绿通、专家问诊等优质医疗资源获取困难。\\n4. 效能瓶颈：HR部门在健康福利管理上耗费大量精力，缺乏数据支撑的ROI评估。'");

content = content.replace(/pitch: '【痛点切入】“咱们联想各园区的研发.*?'/gs, "pitch: '【痛点切入】“咱们联想各园区的研发和产线员工规模庞大，日常面临的小毛小病或突发不适，往往因为工作繁忙顾不上就医，导致亚健康和慢病积压。”\\n【方案价值】“平安企康可提供定制化的『企业医务室管理』，辅以『名医上门』和『治疗/护理上门』服务。让员工在园区内就能获得基础诊疗和开药服务。不仅如此，我们还可以安排三甲医院专家定期到企坐诊，真正做到小病不出园区，大幅提升员工满意度和出勤效率。”\\n【差异化优势】“依托北大国际医疗中心等超3000人专家网络，结合平安的驻场运营体系，我们的企业医务室不是药柜，而是有医生、有设备、能慢病管理的微型医院。”'");

content = content.replace(/pitch: '【痛点切入】“针对咱们的高管和核.*?'/gs, "pitch: '【痛点切入】“针对咱们的高管和核心研发骨干，高强度的工作伴随着复杂的健康隐患，普通的统包体检往往查出问题却缺少后续干预，遇上疑难杂症更是求医无门。”\\n【方案价值】“我们可以升级为『1+X定制体检』：1个标准套餐加上X个自选项目，满足个性化需求。最关键的是『检后闭环』：对于重大异常，我们将启动『专业二诊意见』及『MDT多科会诊』。组织心外科、肿瘤内科等多学科专家共同会诊，确保拿出的方案最权威、最精准。”\\n【差异化优势】“我们不是卖体检，我们是提供一救到底的医疗保障。从体检到复诊，再到MDT确诊，全流程由北大医疗体系支撑。”'");


fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Strings 3');
