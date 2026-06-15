const fs = require('fs');
let file = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `  const handleExpertClick = (expert: {name: string, img: string}) => {
    setCurrentExpert({ name: expert.name, img: expert.img });
    let content = '';
    if (expert.name === '客户洞察专家') {
      content = "请输入目标企业特征、员工规模或特定的健康管理诉求。例如：'分析互联网大厂在员工心理健康（EAP）项目上的核心痛点'，或'生成一份500人规模制造企业的年度体检需求画像'...";
    } else if (expert.name === '营销方案专家') {
      content = "请描述您的产品特性、营销目标及预期预算。例如：'针对大湾区企业客户，策划一场预算20万的线上获客方案'，或'生成一份新产品上市的 GTM 策略框架'...";
    } else if (expert.name === '投标专家') {
      content = "请简述招标项目背景、核心诉求，或提及关键文档。例如：'提炼智能风控系统采购项目的核心控标点'，或'协助撰写技术标书中的商务偏离表'...";
    } else if (expert.name === '企康业务合规专家') {
      content = "请输入需要评估的企康业务场景或具体的合规疑问。例如：'评估员工健康体检数据采集环节的隐私合规风险'，或'审查此份健康管理服务合同中的权责条款'...";
    }
    const newMessage = {
      id: Date.now().toString(),
      sender: 'bot',
      type: 'text',
      content,
      timestamp: new Date()
    };
    setMessages((prev: any) => [...prev, newMessage]);
  };`;

const replacement = `  const handleExpertClick = (expert: {name: string, img: string}) => {
    setCurrentExpert({ name: expert.name, img: expert.img });
    let content = '';
    
    if (expert.name === '客户洞察专家') {
      content = "请输入目标企业特征、员工规模或特定的健康管理诉求。例如：'分析互联网大厂在员工心理健康（EAP）项目上的核心痛点'，或'生成一份500人规模制造企业的年度体检需求画像'...";
      setInputValue('帮我做一个联想全景分析');
    } else if (expert.name === '营销方案专家') {
      content = "请描述您的产品特性、营销目标及预期预算。例如：'针对大湾区企业客户，策划一场预算20万的线上获客方案'，或'生成一份新产品上市的 GTM 策略框架'...";
      setInputValue('给联想企康写方案，分析竞品情况');
    } else if (expert.name === '投标专家') {
      content = "请简述招标项目背景、核心诉求，或提及关键文档。例如：'提炼智能风控系统采购项目的核心控标点'，或'协助撰写技术标书中的商务偏离表'...";
      setInputValue('联想企康对标传统体检机构，技术标的优势怎么写？');
    } else if (expert.name === '企康业务合规专家') {
      content = "请输入需要评估的企康业务场景或具体的合规疑问。例如：'评估员工健康体检数据采集环节的隐私合规风险'，或'审查此份健康管理服务合同中的权责条款'...";
    }
    const newMessage: any = {
      id: Date.now().toString(),
      sender: 'bot',
      type: 'text',
      content,
      timestamp: new Date()
    };
    setMessages((prev: any) => [...prev, newMessage]);
  };`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
console.log('replaced');
