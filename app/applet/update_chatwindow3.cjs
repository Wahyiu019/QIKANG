const fs = require('fs');
const cwPath = 'src/components/ChatWindow.tsx';
let cwContent = fs.readFileSync(cwPath, 'utf8');

const anchor2 = 'text.includes("烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料")';
let parts = cwContent.split(anchor2);
console.log("Parts len:", parts.length);
if(parts.length === 3) {
  let newBlockContent = `
    ) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const botMsg = {
        id: Date.now().toString(),
        sender: "bot",
        type: "text",
        content: "在生成拜访材料前，需要先跟您确认以下信息：\\n1、拜访对象及内部身份：您拜访的是哪个省级/地市级烟草公司？对方对接人是什么职务？（如HR负责人/分管副总/总经理）\\n2、当前关系基础：是首次接触，还是已有其他业务合作（如年金、财产险等）？\\n3、拜访目标：本次希望达成的核心目标是什么？（如：建立初步信任 /了解对方需求/ 方案邀约）\\n4、多机构情况：该烟草企业下辖多少个地市/县级分支机构？覆盖哪些区域？\\n5、预算池情况：预算池的大致规模或人均预算范围是多少？\\n6、历史赔付信息：目前已知的赔付情况大致如何？（如：赔付率偏高/偏低/完全末知）\\n请您逐项补充，我来为您定制精准的拜访材料。",
        timestamp: new Date(),
      };
      
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setInputValue("某省烟草公司，对方对接人是HRD，本次是首次接触，希望建立初步信任，该烟草企业覆盖6个市级，总预算大概是600~800万元，历史赔付率偏低");
        setIsTyping(false);
      }, 500);
      return;
    } else if (
      text.includes("某省烟草公司") && text.includes("对方对接人是HRD")
    `;

  let replacedContent = parts[0];
  for(let i=1; i<parts.length; i++) {
    let suffix = parts[i];
    let endAnchor = '      return;\\n    }';
    let endIdx = suffix.indexOf('      return;\\n    }');
    if(endIdx === -1) {
      endAnchor = '      return;\\n    } else if (';
      endIdx = suffix.indexOf('      return;\\n    } else if (');
    }
    if(endIdx === -1) {
      endAnchor = '      return;\\n';
      endIdx = suffix.indexOf('      return;\\n');
    }
    if(endIdx === -1) {
        endAnchor = 'return;\\n';
        endIdx = suffix.indexOf('return;\\n');
    }
    if(endIdx === -1) {
        endAnchor = 'return;\\\\n';
        endIdx = suffix.indexOf('return;\\n');
    }

    // fallback using simple split
    let endIdxFallback = suffix.indexOf('return;');
    
    console.log('endIdxFallback: ', endIdxFallback);
    
    let toReplace = suffix.substring(0, endIdxFallback + 7);
    
    let regex = /'先定基调\\。[\\s\\S]*?说到做到"的文化\\。',/;
    let regex2 = /'先定基调。[\\s\\S]*?说到做到"的文化。',/;
    let replacementText = \`'客户特征识别：分析行业属性、组织架构、员工规模及已知预算情况，明确客户画像。',
        '历史信息研判：结合赔付数据完整度、现有福利体系等信息，评估客户当前保障体系成熟度。',
        '标杆客户对标：检索同类型央国企、省级多机构客户及长期合作案例，寻找可借鉴模式。',
        '需求场景挖掘：从保障管理、基金运营、健康服务、员工关怀等维度识别潜在需求。',
        '产品能力匹配：从补充医疗、委托基金管理、体检服务、慢病管理、就医协助等产品中筛选适配方案。',
        '方案组合设计：结合客户特点与预算情况，形成可落地的产品组合及服务模式。',
        '价值体系提炼：从政策合规、员工关怀、健康企业建设、ESG价值及企业文化建设等维度提炼方案价值。',
        '拜访策略生成：输出标杆案例、产品推荐、价值亮点及沟通重点，形成首次拜访材料。',\`;

    let rep = newBlockContent + toReplace.replace(regex2, replacementText);
    replacedContent += anchor2 + rep + suffix.substring(endIdxFallback + 7);
  }
  fs.writeFileSync(cwPath, replacedContent, 'utf8');
  console.log('Success in patching!');
} else {
    console.log("Could not split by anchor2");
}
