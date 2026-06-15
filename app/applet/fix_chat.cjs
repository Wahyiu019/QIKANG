const fs = require('fs');
const path = 'src/components/ChatWindow.tsx';
let content = fs.readFileSync(path, 'utf8');

const startTag = '    if (text === "#案例亮点提炼#") {';
const endTag = '} else if (\n      text.includes(\n        "根据我上传的分析云南省烟草公司';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
    console.error("Tags not found", { startFound: startIndex !== -1, endFound: endIndex !== -1 });
    process.exit(1);
}

const correctBlock = `    if (text === "#案例亮点提炼#") {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“案例亮点提炼”技能",
        timestamp: new Date(),
        data: {
          steps: [
            {
              id: "1",
              text: "从知识库中快速检索历史案例...",
              status: "loading",
            },
            { id: "2", text: "提炼历史案例卖点和亮点...", status: "pending" },
          ],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 0
                        ? { ...s, status: "complete" }
                        : i === 1
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1500);
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 1 ? { ...s, status: "complete" } : s,
                    ),
                  },
                }
              : m,
          ),
        );
        const reportMsg = {
          id: Date.now().toString() + "_report",
          sender: "bot",
          type: "case_highlight_report",
          content: "已经为您完成历史案例的亮点与卖点提炼：",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 3000);
      return;
    } else if (
      text.includes(
        "请帮我针对一个1000人的企业，在北京，是个农商行，参考行业情况和我们有的产品情况，帮我设计一个套餐",
      )
    ) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const allTexts = [
        "我需要理解用户提及的几个约束：1000人、北京、农商行、参考行业和产品情况设计套餐、好医生主推产品要想办法放进去。",
        '我把需求拆成5个子任务：查好医生主推产品、分析农商行行业特征、匹配平安产品线、设计套餐、形成销售材料。设计思路必须是"以主推产品为中心搭套餐"，主推产品是骨架，其他服务是增量。',
        "多源并行采集， 我将同时启动多个数据源查询。",
        '从行业特征反推需求。 我不拍脑袋设计服务项，而是从"农商行+北京+1000人"这几个约束条件出发，逐条推导出每个行业特征对应的健康管理刚性需求，再反向匹配服务。',
        "分层放主推产品。 我把主推产品按必要性分三层——全员刚需的放所有版本、特定人群刚需的放中高版本、增值的只放旗舰版，这样主推产品自然成为差异化核心，不生硬。",
        "用合规额度反推价格。 我先算工资总额列支的合规天花板，再参考同行业案例的人均水平，倒推出三档价格区间，确保推荐方案在合规安全线内且有说服力。",
        "按受众分层设计话术。 我不写一套通用话术，而是每个角色给一个切中核心关切的版本——高管关注趋势、HR关注省事、财务关注合规、决策人关注安全感。",
        "按规范交付：生成方式、上传流程、链接格式全部按已有规范执行，不自创。",
      ];
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content:
          "营销方案专家调用以下技能：三段式营销材料、标准产品推荐、明星方案匹配、案例亮点提炼、竞品多维对标",
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
                      steps: m.data.steps.map((s: any) => ({
                        ...s,
                        status: "complete",
                      })),
                    },
                  }
                : m,
            ),
          );
          const reportMsg = {
            id: Date.now().toString() + "_report",
            sender: "bot",
            type: "standard_product_plan_report",
            content:
              "为您生成北京农商行1000人定制健康体检套餐及销售材料html和企康产品分析报告html。",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, reportMsg]);
          setIsTyping(false);
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === reasoningMsgId
                ? {
                    ...m,
                    data: {
                      ...m.data,
                      steps: m.data.steps.map((s: any, i: number) =>
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
    } else if (text === "某省烟草企康对标传统体检机构，技术标的优势怎么写？") {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“销售话术撰写”技能",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "解析投标场景与竞品画像", status: "loading" },
            { id: "2", text: "扫描对手的“技术盲区”与痛点", status: "pending" },
            { id: "3", text: "匹配某省烟草企康的核心技术壁垒", status: "pending" },
            { id: "4", text: "推演技术标“控标”策略", status: "pending" },
            { id: "5", text: "生成标书标准化输出框架", status: "pending" },
          ],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      let currentStep = 0;
      const totalSteps = 5;
      const interval = setInterval(() => {
        setMessages((prev) =>
          prev.map((m) => {
            if (m.id === reasoningMsgId) {
              const newSteps = [...m.data.steps];
              if (currentStep < totalSteps) {
                newSteps[currentStep] = {
                  ...newSteps[currentStep],
                  status: "complete",
                };
                if (currentStep + 1 < totalSteps) {
                  newSteps[currentStep + 1] = {
                    ...newSteps[currentStep + 1],
                    status: "loading",
                  };
                }
              }
              return { ...m, data: { ...m.data, steps: newSteps } };
            }
            return m;
          }),
        );

        currentStep++;
        if (currentStep >= totalSteps) {
          clearInterval(interval);
          const reportMsg = {
            id: Date.now().toString() + "_report",
            sender: "bot",
            type: "lenovo_tech_bid_advantage",
            content: "为您生成某省烟草企康技术标优势方案：",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, reportMsg]);
          setIsTyping(false);
        }
      }, 500);
      return;
    } else if (text === "#深度竞品分析#") {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“深度竞品分析”技能",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "分析 6+1 服务方案...", status: "loading" },
            { id: "2", text: "提炼差异化优势...", status: "pending" },
            { id: "3", text: "分析销售打法...", status: "pending" },
          ],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 0
                        ? { ...s, status: "complete" }
                        : i === 1
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 500);
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 1
                        ? { ...s, status: "complete" }
                        : i === 2
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1000);
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 2 ? { ...s, status: "complete" } : s,
                    ),
                  },
                }
              : m,
          ),
        );
        const reportMsg = {
          id: Date.now().toString() + "_report",
          sender: "bot",
          type: "competitor_analysis_report",
          content: "深度竞品分析报告已生成：",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 1500);
      return;
    } else if (
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
        content: "在生成拜访材料前，需要先跟您确认以下信息：\\n1、拜访对象及内部身份：您拜访的是哪个省级/地市级烟草公司？对方对接人是什么职务？（如HR负责人/分管副总/总经理）\\n2、当前关系基础：是首次接触，还是已有其他业务合作（如年金、财产险等）？\\n3、拜访目标：本次希望达成的核心目标是什么？（如：建立初步信任 /了解对方需求/ 方案邀约）\\n4、多机构情况：该烟草企业下辖多少个地市/县级分支机构？覆盖哪些区域？\\n5、预算池情况：预算池的大致规模或人均预算范围是多少？\\n6、历史赔付信息：目前已知的赔付情况大致如何？（如：赔付率偏高/偏低/完全末知）\\n请您逐项补充，我来为您定制精准的拜访材料。",
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
                      steps: m.data.steps.map((s: any) => ({
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
                      steps: m.data.steps.map((s: any, i: number) =>
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
      }, 500);
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

content = content.substring(0, startIndex) + correctBlock + "\n" + content.substring(endIndex);
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully applied mega fix!');
