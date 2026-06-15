
const fs = require('fs');
const path = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /\} else if (s*text.includes("烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料")s*) {[sS]*?(?=    } else if (s*text.includes(s*"根据我上传的分析)/;

const newLogic = `} else if (
      text.includes("烟草企业，多机构，预算池已知，历史赔付不完整，帮我准备首次拜访材料")
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
        id: Date.now().toString() + "_bot",
        sender: "bot",
        type: "text",
        content: "在生成拜访材料前，需要先跟您确认以下信息：\n1、拜访对象及内部身份：您拜访的是哪个省级/地市级烟草公司？对方对接人是什么职务？（如HR负责人/分管副总/总经理）\n2、当前关系基础：是首次接触，还是已有其他业务合作（如年金、财产险等）？\n3、拜访目标：本次希望达成的核心目标是什么？（如：建立初步信任 /了解对方需求/ 方案邀约）\n4、多机构情况：该烟草企业下辖多少个地市/县级分支机构？覆盖哪些区域？\n5、预算池情况：预算池的大致规模或人均预算范围是多少？\n6、历史赔付信息：目前已知的赔付情况大致如何？（如：赔付率偏高/偏低/完全末知）\n请您逐项补充，我来为您定制精准的拜访材料。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);

      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const allTexts = [
        '客户特征识别：分析行业属性、组织架构、员工规模及已知预算情况，明确客户画像。',
        '历史信息研判：结合赔付数据完整度、现有福利体系等信息，评估客户当前保障体系成熟度。',
        '标杆客户对标：检索同类型央国企、省级多机构客户及长期合作案例，寻找可借鉴模式。',
        '需求场景挖掘：从保障管理、基金运营、健康服务、员工关怀等维度识别潜在需求。',
        '产品能力匹配：从补充医疗、委托基金管理、体检服务、慢病管理、就医协助等产品中筛选适配方案。',
        '方案组合设计：结合客户特点与预算情况，形成可落地的产品组合及服务模式。',
        '价值体系提炼：从政策合规、员工关怀、健康企业建设、ESG价值及企业文化建设等维度提炼方案价值。',
        '拜访策略生成：输出标杆案例、产品推荐、价值亮点及沟通重点，形成首次拜访材料。',
      ];
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "营销方案专家调用以下技能：三段式营销材料、标准产品推荐、明星方案匹配、案例亮点提炼、竞品多维对标",
        timestamp: new Date(),
        data: {
          title: "营销方案专家思考与执行中..",
          steps: allTexts.map((title, idx) => ({
            id: String(idx + 1),
            text: title,
            status: idx === 0 ? "loading" : "pending",
          })),
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      let stepIdx = 0;
      const interval = setInterval(() => {
        stepIdx++;
        if (stepIdx >= allTexts.length) {
          clearInterval(interval);
          setMessages((prev) =>
            prev.map((m) =>
              m.id === reasoningMsgId
                ? {
                    ...m,
                    data: {
                      ...m.data,
                      steps: m.data.steps.map((s) => ({
                        ...s,
                        status: "complete",
                      })),
                    },
                  }
                : m,
            ),
          );
          setInputValue("某省烟草公司，对接人是HRD，本次是首次接触，希望建立初步信任，该烟草企业覆盖6个市级，总预算大概是600~800万元，历史赔付率偏低");
          setIsTyping(false);
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === reasoningMsgId
                ? {
                    ...m,
                    data: {
                      ...m.data,
                      steps: m.data.steps.map((s, i) =>
                        i < stepIdx
                          ? { ...s, status: "complete" }
                          : i === stepIdx
                            ? { ...s, status: "loading" }
                            : s,
                      ),
                    },
                  }
                : m,
            ),
          );
        }
      }, 1000);
      return;
    } else if (
      text.includes("某省烟草公司") && text.includes("对接人是HRD")
    ) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      
      setIsTyping(true);
      setTimeout(() => {
        const reportMsg = {
          id: Date.now().toString() + "_report",
          sender: "bot",
          type: "lenovo_new_marketing_plan",
          content: "为您生成某省烟草集团首次拜访ppt。",
          timestamp: new Date(),
          data: { isFamilyDoctor: true },
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 500);
      return;
`;

if (regex.test(content)) {
  content = content.replace(regex, newLogic);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated chat window logic.');
} else {
  console.log('Regex failed to match.');
}
