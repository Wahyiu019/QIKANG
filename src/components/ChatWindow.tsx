import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Paperclip,
  Mic,
  Image as ImageIcon,
  Smile,
  MoreHorizontal,
  Bot,
  Search,
  Users,
  Phone,
  Video,
  LayoutTemplate,
  PlusCircle,
  FileText,
  Presentation,
  FileCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Zap,
  Sparkles,
} from "lucide-react";
import { Message, MessageType } from "../types";
import { MessageBubble } from "./MessageBubble";
import { motion, AnimatePresence } from "motion/react";

const INITIAL_MESSAGE: Message = {
  id: "1",
  sender: "bot",
  type: "text",
  content: `你好！我是你的专属企康助手。
我可以帮你领商机、客户洞察、陪展等。今天想从哪个任务开始？`,
  timestamp: new Date(),
};

const SCENARIOS = [
  { label: "🔍 领商机", prompt: "我可以领取的商机" },
  { label: "💡 定策略", prompt: "为云南烟草制定产品匹配与机会评估方案" },
  { label: "🤝 做准备", prompt: "请给我一份云南烟草的全面的背景报告" },
  { label: "🎙️ 去拜访", prompt: "开会" },
  { label: "📑 招投标", prompt: "投标" },
  { label: "🛡️ 合规检查", prompt: "请帮我完成标书合规性检查" },
  { label: "📡 盯动态", prompt: "动态" },
  { label: "❓ 答疑", prompt: "客户提问：黑金计划的理赔时效是多久？" }];

const commercialContent = `
  <div class="font-sans text-gray-800">
    <h1 class="text-2xl font-bold text-center mb-6 text-gray-900 border-b-2 border-amber-600 pb-2">云南烟草健康管理服务项目 - 商务标书</h1>
    
    <div class="mb-8">
      <h2 class="text-lg font-bold text-amber-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-amber-600 mr-2 inline-block"></span>一、 投标函</h2>
      <p class="mb-2 leading-relaxed text-sm">致：<strong>云南烟草控股股份有限公司</strong></p>
      <p class="mb-2 leading-relaxed text-sm indent-8">根据贵方关于“云南烟草健康管理服务项目”的招标公告，我方（平安健康医疗科技有限公司）经认真研究招标文件后，决定参加该项目的投标。我方承诺：</p>
      <ul class="list-disc pl-10 mb-4 text-sm space-y-1 text-gray-700">
        <li>提供满足招标文件要求的全套健康管理服务。</li>
        <li>严格遵守企康规范及贵方的各项管理规定。</li>
        <li>投标报价真实、合理，不参与任何恶意竞争。</li>
        <li>承诺在合同期内不随意更改核心服务团队成员。</li>
      </ul>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-amber-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-amber-600 mr-2 inline-block"></span>二、 报价一览表</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="py-2 px-4 border-b text-left font-medium text-gray-600">服务项目</th>
              <th class="py-2 px-4 border-b text-left font-medium text-gray-600">规格/描述</th>
              <th class="py-2 px-4 border-b text-right font-medium text-gray-600">单价 (元/人/年)</th>
              <th class="py-2 px-4 border-b text-right font-medium text-gray-600">总价估算 (万元)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="py-2 px-4">基础健康档案管理</td>
              <td class="py-2 px-4">建立电子健康档案，年度更新</td>
              <td class="py-2 px-4 text-right">120</td>
              <td class="py-2 px-4 text-right">360</td>
            </tr>
            <tr>
              <td class="py-2 px-4">在线问诊服务</td>
              <td class="py-2 px-4">7x24小时全科医生在线咨询</td>
              <td class="py-2 px-4 text-right">300</td>
              <td class="py-2 px-4 text-right">900</td>
            </tr>
            <tr>
              <td class="py-2 px-4">高管绿通服务</td>
              <td class="py-2 px-4">三甲医院专家预约、陪诊</td>
              <td class="py-2 px-4 text-right">1500</td>
              <td class="py-2 px-4 text-right">450</td>
            </tr>
            <tr>
              <td class="py-2 px-4">心理EAP服务</td>
              <td class="py-2 px-4">心理测评、危机干预、心理咨询</td>
              <td class="py-2 px-4 text-right">200</td>
              <td class="py-2 px-4 text-right">600</td>
            </tr>
            <tr class="bg-gray-50 font-bold">
              <td class="py-2 px-4" colspan="3">合计 (预估)</td>
              <td class="py-2 px-4 text-right text-amber-700">2310</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-amber-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-amber-600 mr-2 inline-block"></span>三、 商务偏离表</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="py-2 px-4 border-b text-left font-medium text-gray-600">招标文件条款</th>
              <th class="py-2 px-4 border-b text-left font-medium text-gray-600">我方响应内容</th>
              <th class="py-2 px-4 border-b text-center font-medium text-gray-600">偏离情况</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="py-2 px-4">付款方式：按季度后付</td>
              <td class="py-2 px-4">接受按季度后付，提供增值税专用发票</td>
              <td class="py-2 px-4 text-center text-amber-600 font-bold">无偏离</td>
            </tr>
            <tr>
              <td class="py-2 px-4">服务期限：3年</td>
              <td class="py-2 px-4">承诺提供3年连续服务，并保证价格不上浮</td>
              <td class="py-2 px-4 text-center text-amber-600 font-bold">无偏离</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-amber-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-amber-600 mr-2 inline-block"></span>四、 类似项目业绩</h2>
      <ul class="list-disc pl-10 text-sm space-y-2 text-gray-700">
        <li><strong>某大型国有银行总行：</strong> 覆盖10万+员工的全面健康管理及EAP服务，连续服务5年。</li>
        <li><strong>某头部互联网大厂：</strong> 驻场医疗与急救体系建设，线上线下结合的健康干预方案。</li>
        <li><strong>某知名能源集团：</strong> 针对高危作业人群的职业健康监测与专属重疾绿通服务。</li>
      </ul>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-amber-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-amber-600 mr-2 inline-block"></span>五、 资质证明文件</h2>
      <p class="text-sm text-gray-700 mb-2">我方已按照招标文件要求，提供以下资质证明文件（详见附件）：</p>
      <div class="grid grid-cols-1 gap-4 text-sm">
        <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-amber-500 mr-2">✓</span> 营业执照副本复印件</div>
        <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-amber-500 mr-2">✓</span> 医疗机构执业许可证</div>
        <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-amber-500 mr-2">✓</span> ISO9001质量管理体系认证</div>
        <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-amber-500 mr-2">✓</span> ISO27001信息安全管理体系认证</div>
        <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-amber-500 mr-2">✓</span> 近三年财务审计报告</div>
        <div class="flex items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-amber-500 mr-2">✓</span> 依法缴纳税收和社会保障资金证明</div>
      </div>
    </div>
  </div>
`;

const technicalContent = `
  <div class="font-sans text-gray-800">
    <h1 class="text-2xl font-bold text-center mb-6 text-gray-900 border-b-2 border-orange-600 pb-2">云南烟草健康管理服务项目 - 技术标书</h1>
    
    <div class="mb-8">
      <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>一、 项目理解与需求分析</h2>
      <div class="bg-orange-50 p-4 rounded-lg border border-orange-100 text-sm text-gray-700 leading-relaxed">
        <p class="mb-2">云南烟草集团作为中国白酒行业的领军企业，员工数量庞大，工作场景复杂。当前面临的主要健康管理痛点包括：</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>生产一线员工职业健康风险较高，需针对性预防。</li>
          <li>高管及核心骨干工作压力大，缺乏系统性健康干预与专属医疗资源。</li>
          <li>现有体检数据未有效盘活，缺乏持续的健康追踪与数据分析。</li>
        </ul>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>二、 核心解决方案 (黑金计划)</h2>
      
      <div class="space-y-4">
        <div class="border border-gray-200 rounded-lg p-4">
          <h3 class="font-bold text-gray-900 mb-2">1. 专属医疗网络与绿通服务</h3>
          <p class="text-sm text-gray-600 mb-2">整合全国百强三甲医院资源，为云南烟草高管及核心骨干提供：</p>
          <ul class="list-disc pl-6 text-sm text-gray-600">
            <li>专家门诊预约（承诺3个工作日内）</li>
            <li>住院及手术安排（承诺5个工作日内）</li>
            <li>全程专人陪诊，代办手续</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-4">
          <h3 class="font-bold text-gray-900 mb-2">2. 数字化健康档案与动态干预</h3>
          <p class="text-sm text-gray-600 mb-2">依托平安健康APP及企微小程序，建立员工专属健康档案：</p>
          <ul class="list-disc pl-6 text-sm text-gray-600">
            <li>历年体检报告结构化解析与趋势分析</li>
            <li>AI智能健康风险评估（心脑血管、代谢性疾病等）</li>
            <li>个性化饮食、运动处方及定期随访跟进</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>三、 服务团队配置</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="py-2 px-4 border-b text-left font-medium text-gray-600">岗位</th>
              <th class="py-2 px-4 border-b text-left font-medium text-gray-600">资质要求</th>
              <th class="py-2 px-4 border-b text-left font-medium text-gray-600">职责描述</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="py-2 px-4 font-medium">项目总监 (1人)</td>
              <td class="py-2 px-4">10年以上大型企康项目管理经验</td>
              <td class="py-2 px-4">统筹项目整体运营，把控服务质量</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">全科医生 (3人)</td>
              <td class="py-2 px-4">三甲医院5年以上临床经验，主治医师及以上</td>
              <td class="py-2 px-4">提供在线问诊、报告解读、健康咨询</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">健康管理师 (5人)</td>
              <td class="py-2 px-4">国家高级健康管理师认证</td>
              <td class="py-2 px-4">制定干预方案，日常随访与督导</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">心理咨询师 (2人)</td>
              <td class="py-2 px-4">国家二级心理咨询师</td>
              <td class="py-2 px-4">提供EAP服务，心理危机干预</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>四、 数据安全与隐私保护</h2>
      <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-700">
        <p class="mb-2 font-medium">我方承诺严格遵守《数据安全法》及《个人信息保护法》：</p>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>物理隔离：</strong> 核心健康数据支持私有云或混合云部署，确保数据不出域。</li>
          <li><strong>传输加密：</strong> 采用国密算法（SM2/SM3/SM4）及TLS 1.3协议进行全链路加密。</li>
          <li><strong>权限管控：</strong> 严格落实RBAC（基于角色的访问控制），实行最小权限原则，所有数据访问均留存审计日志。</li>
          <li><strong>脱敏处理：</strong> 敏感个人信息（如姓名、身份证号）在展示和分析环节进行动态脱敏。</li>
        </ul>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-orange-700 mb-3 flex items-center"><span class="w-1.5 h-4 bg-orange-600 mr-2 inline-block"></span>五、 项目实施与运营保障</h2>
      <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div class="bg-gray-50 p-3 rounded border border-gray-200">
          <div class="font-bold text-gray-800 mb-1 text-sm">阶段一：系统对接 (1-2周)</div>
          <div class="text-xs text-gray-600">完成API接口调试，数据安全加密传输测试。建立专属服务群。</div>
        </div>
        <div class="bg-gray-50 p-3 rounded border border-gray-200">
          <div class="font-bold text-gray-800 mb-1 text-sm">阶段二：服务上线 (3-4周)</div>
          <div class="text-xs text-gray-600">企微端应用上架，开展全员宣发与操作培训。驻场团队入驻。</div>
        </div>
        <div class="bg-gray-50 p-3 rounded border border-gray-200">
          <div class="font-bold text-gray-800 mb-1 text-sm">阶段三：持续运营 (长期)</div>
          <div class="text-xs text-gray-600">按季度输出健康白皮书，动态调整干预策略。7x24小时客服响应。</div>
        </div>
      </div>
    </div>
  </div>
`;

export function ChatWindow({
  activeChat = "ai_assistant",
  activeStage = "领商机",
  onChatChange,
  onLeadClaimed,
  onPrepCompleted,
  onMeetingCompleted,
  onBidCompleted,
  onMonitorCompleted,
  onStageChange,
  onRightPanelVisibilityChange,
  showMeetingChats,
  showMonitorChat,
  globalMessages,
  setGlobalMessages,
  addMessageToChat,
  updateMessageInChat,
  selectedExpertName,
}: {
  activeChat?: string;
  activeStage?: string;
  onChatChange?: (chat: string) => void;
  onLeadClaimed?: () => void;
  onPrepCompleted?: () => void;
  onMeetingCompleted?: () => void;
  onBidCompleted?: () => void;
  onMonitorCompleted?: () => void;
  onStageChange?: (stage: string) => void;
  onRightPanelVisibilityChange?: (visible: boolean) => void;
  showMeetingChats?: boolean;
  showMonitorChat?: boolean;
  globalMessages?: Record<string, Message[]>;
  setGlobalMessages?: any;
  addMessageToChat?: any;
  updateMessageInChat?: any;
  selectedExpertName?: string | null;
}) {
  return (
    <>
      <div
        className={`flex-1 flex flex-col bg-white relative min-h-0 min-w-0 ${activeChat === "ai_assistant" ? "" : "hidden"}`}
      >
        <AiChatWindow
          activeStage={activeStage}
          onChatChange={onChatChange}
          onLeadClaimed={onLeadClaimed}
          onPrepCompleted={onPrepCompleted}
          onMeetingCompleted={onMeetingCompleted}
          onBidCompleted={onBidCompleted}
          onMonitorCompleted={onMonitorCompleted}
          onStageChange={onStageChange}
          onRightPanelVisibilityChange={onRightPanelVisibilityChange}
          globalMessages={globalMessages}
          setGlobalMessages={setGlobalMessages}
          addMessageToChat={addMessageToChat}
          updateMessageInChat={updateMessageInChat}
          selectedExpertName={selectedExpertName}
        />
      </div>
      {activeChat !== "ai_assistant" && (
        <GroupChatWindow
          activeChat={activeChat}
          activeStage={activeStage}
          showMeetingChats={showMeetingChats}
          showMonitorChat={showMonitorChat}
          onPrepCompleted={onPrepCompleted}
          onMeetingCompleted={onMeetingCompleted}
          onBidCompleted={onBidCompleted}
          onMonitorCompleted={onMonitorCompleted}
          onStageChange={onStageChange}
          onChatChange={onChatChange}
          globalMessages={globalMessages}
          setGlobalMessages={setGlobalMessages}
          addMessageToChat={addMessageToChat}
          updateMessageInChat={updateMessageInChat}
        />
      )}
    </>
  );
}

function AiChatWindow({
  activeStage,
  onChatChange,
  onLeadClaimed,
  onPrepCompleted,
  onMeetingCompleted,
  onBidCompleted,
  onMonitorCompleted,
  onStageChange,
  onRightPanelVisibilityChange,
  globalMessages,
  setGlobalMessages,
  addMessageToChat,
  updateMessageInChat,
  selectedExpertName,
}: {
  activeStage: string;
  onChatChange?: (chat: string) => void;
  onLeadClaimed?: () => void;
  onPrepCompleted?: () => void;
  onMeetingCompleted?: () => void;
  onBidCompleted?: () => void;
  onMonitorCompleted?: () => void;
  onStageChange?: (stage: string) => void;
  onRightPanelVisibilityChange?: (visible: boolean) => void;
  globalMessages?: Record<string, Message[]>;
  setGlobalMessages?: any;
  addMessageToChat?: any;
  updateMessageInChat?: any;
  selectedExpertName?: string | null;
}) {
  const [isLeadClaimed, setIsLeadClaimed] = useState(false);
  const [groupChats, setGroupChats] = useState<string[]>([]);
  const [currentExpert, setCurrentExpert] = useState<{
    name: string;
    img: string;
  } | null>(null);
  const [expandedExpert, setExpandedExpert] = useState<string | null>(
    "客户洞察专家",
  );

  useEffect(() => {
    if (selectedExpertName) {
      const found = [
        {
          name: "客户洞察专家",
          img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Insight&backgroundColor=0ea5e9&eyes=happy&mouth=smile&accessories=prescription02&clothing=blazerAndShirt",
          desc: "深度研究靶向商机",
        },
        {
          name: "营销方案专家",
          img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marketing&backgroundColor=f97316&eyes=happy&mouth=smile&accessories=sunglasses&clothing=blazerAndSweater",
          desc: "定制专业产品组合",
        },
        {
          name: "标书撰写专家",
          img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Bidding&backgroundColor=8b5cf6&eyes=happy&mouth=smile&clothing=collarAndSweater",
          desc: "把控招投标全流程并合规质检",
        },
        {
          name: "企康业务合规专家",
          img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Compliance&backgroundColor=10b981&eyes=happy&mouth=smile&accessories=round&clothing=blazerAndShirt",
          desc: "严控自研/合规红线与法律风险",
        },
        {
          name: "业绩追踪助手",
          img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tracker&backgroundColor=f43f5e&eyes=happy&mouth=twinkle&clothing=hoodie",
          desc: "实时全景透视个人及团队业绩跟进进度",
        },
        {
          name: "运营管理专家",
          img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Operation&backgroundColor=64748b&eyes=happy&mouth=smile&accessories=prescription01&clothing=shirtVNeck",
          desc: "提供全流程、精细化的业务审核服务",
        }].find((e) => e.name === selectedExpertName);
      if (found) {
        setCurrentExpert(found);
        setExpandedExpert(found.name);
      }
    }
  }, [selectedExpertName]);
  const messages = globalMessages?.["ai_assistant"] || [INITIAL_MESSAGE];
  const setMessages = (
    newMessages: Message[] | ((prev: Message[]) => Message[]),
  ) => {
    if (setGlobalMessages) {
      if (typeof newMessages === "function") {
        setGlobalMessages((prev: any) => ({
          ...prev,
          ai_assistant: newMessages(prev["ai_assistant"] || []),
        }));
      } else {
        setGlobalMessages((prev: any) => ({
          ...prev,
          ai_assistant: newMessages,
        }));
      }
    }
  };
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingText, setRecordingText] = useState("");
  const [awaitingMeetingTarget, setAwaitingMeetingTarget] = useState(false);
  const [awaitingComplianceUpload, setAwaitingComplianceUpload] =
    useState(false);
  const [awaitingEmployeeListUpload, setAwaitingEmployeeListUpload] =
    useState(false);
  const [awaitingTenderDocInterpretation, setAwaitingTenderDocInterpretation] =
    useState(false);
  const [awaitingTargetClient, setAwaitingTargetClient] = useState(false);
  const [awaitingBidDocGeneration, setAwaitingBidDocGeneration] =
    useState(false);
  const [awaitingBidDocInspection, setAwaitingBidDocInspection] =
    useState(false);
  const [awaitingMaterialReview, setAwaitingMaterialReview] = useState(false);
  const [awaitingTenderDoc, setAwaitingTenderDoc] = useState(false);
  const [awaitingTenderDraft, setAwaitingTenderDraft] = useState(false);
  const [awaitingMaterialAudit, setAwaitingMaterialAudit] = useState(false);
  const [awaitingSurveyClient, setAwaitingSurveyClient] = useState(false);
  const [awaitingStProductInfo, setAwaitingStProductInfo] = useState(false);
  const [awaitingNewPkg, setAwaitingNewPkg] = useState(false);
  const [pkgRetryCount, setPkgRetryCount] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);
  const [showSkillMenu, setShowSkillMenu] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const QUICK_SKILLS = [
    { title: "客户信息调研", prompt: "生成云南烟草集团的客户画像。人员约8000+人，高层员工：800人，核心员工6000人，在职人员平均35岁占比68%，男性员工4500+人，内勤员工：7000人，预算在600~800w左右" },
    { title: "合规分析", prompt: "#合规分析#" },
    { title: "关键决策人分析", prompt: "#关键决策人分析#" },
    { title: "历史合作分析", prompt: "#历史合作分析#" },
    { title: "拜访建议话术", prompt: "帮我把分管总、HRD和经办人可能关心的问题准备好" },
    { title: "招标文件解读", prompt: "帮我解读这份招标文件，看看重点关注什么" },
    { title: "招投标问答", prompt: "关于招投标内容我想提几个问题" },
    { title: "生成目录模板", prompt: "根据项目信息生成标书目录模板" },
    { title: "历史标书复用", prompt: "匹配并复用以往的标书素材" },
    { title: "资质业绩匹配", prompt: "帮我评估现有资质和项目经验的匹配度" },
    
    { title: "材料审查", prompt: "#材料审查#" },
    {
      title: "拜访材料生成",
      prompt: "我要去拜访云南烟草，帮我准备拜访材料",
    },
    { title: "标准产品推荐", prompt: `我是平安银行的企康销售经理，要给明道云写一个标品营销方案，预算大概是18W` },
    { title: "明星方案匹配", prompt: "#明星方案匹配#" },
    { title: "案例亮点提炼", prompt: "#案例亮点提炼#" },
    { title: "竞品多维对标", prompt: "#竞品多维对标#" },
    { title: "商机认领", prompt: "我有哪些商机可以认领" },
    {
      title: "客户拜访记录",
      prompt:
        "我正在拜访云南中烟工业有限责任公司的朱洪武书记，帮我记录拜访过程，然后同步更新任务进度。",
    },
    { title: "任务追踪", prompt: "#任务追踪#" },
    { title: "智能报价授权", prompt: "帮我生成报价建议并评估授权风险" },
    { title: "项目管理", prompt: "#项目管理#" },
    {
      title: "报销审核发起",
      prompt: "请帮我审核以下报销材料。",
    },
    { title: "报销材料审核", prompt: "确认执行报销审核。" },
    { title: "复核校验", prompt: "请帮我复核所有报销申请，确认是否存在异常。" }];

  const handleExpertClick = (expert: { name: string; img: string }) => {
    setCurrentExpert({ name: expert.name, img: expert.img });
    let content = "";

    if (expert.name === "客户洞察专家") {
      content =
        "您好！我是客户洞察专家。我已就位，接下来将协助您进行目标客户全景信息调研、关键决策人背景分析以及过往合作历史深度挖掘。";
      setInputValue(
        "作为集团高管，企康办安排我下周陪养老险北分去见云南烟草张总，帮我生成一个5分钟的开场话术备用。",
      );
    } else if (expert.name === "营销方案专家") {
      content =
        "您好！我是营销方案专家。我将协助您进行定制化的企业健康管理产品组合设计、经典体检案例亮点提炼以及竞品多维对标。我们可以先从策划方案、提炼亮点或者竞品分析开始。";
      setInputValue(
        "请帮我针对一个1000人的企业，在北京，是个农商行，参考行业情况和我们有的产品情况，帮我设计一个套餐，形成一个销售材料。注意分析一下最近好医生主推的是哪个产品服务包，这个主推的内容要想办法帮我放进去。",
      );
    } else if (expert.name === "标书撰写专家") {
      content =
        "您好！我是标书撰写专家。不论是招标文件深度解读、技术标/商务标书自动化起草，还是标书内容的合规与完整性质检，我都会全程为您把控，协助高效达成。";
      setInputValue(
        "根据云南省烟草公司2024-2027年补充医疗保险服务项目（二次）的招标书，帮我生成完整的投标书，要求内容完整、规范，符合正式投标使用。",
      );
    } else if (expert.name === "企康业务合规专家") {
      content =
        "您好！我是企康业务合规专家。在自研健康管理、体检服务流程以及各种服务合同签署中，我会严格帮您遵循医疗法律红线与合规自研红线，严控任何业务和数据的合规与隐私风险。";
    } else if (expert.name === "业绩追踪助手") {
      content =
        "您好！我是业绩追踪助手。我将协助您认领商机、记录拜访，并实时追踪任务进度。";
    } else if (expert.name === "运营管理专家") {
      content =
        "您好！我是运营管理专家。我将为您提供报销审核、材料审核及复核校验等一站式运营服务。";
    }
    const newMessage: any = {
      id: Date.now().toString(),
      sender: "bot",
      type: "text",
      content,
      timestamp: new Date(),
      disableTyping: true,
    };
    setMessages((prev: any) => [...prev, newMessage]);
  };

  const handleSkillClickLocal = (skill: { title: string; prompt: string }) => {
    setShowSkillMenu(false);

    if (
      skill.title === "招标助手" ||
      skill.title === "智能标书生成" ||
      skill.title === "合规性检查" ||
      skill.title === "标书生成" ||
      skill.title === "材料审查" ||
      skill.title === "招标文件解读" ||
      skill.title === "标书质量检查" ||
      skill.title === "述标材料生成"
    ) {
      if (onStageChange) onStageChange("招投标");
    } else if (skill.title === "领商机") {
      if (onStageChange) onStageChange("领商机");
    } else if (
      skill.title === "情报侦察兵" ||
      skill.title === "客户信息调研" ||
      skill.title === "关键决策人分析"
    ) {
      if (onStageChange) onStageChange("看档案");
    } else if (skill.title === "市场分析" || skill.title === "历史合作分析") {
      if (onStageChange) onStageChange("定制策略");
    } else if (
      skill.title === "筹备讨论助理" ||
      skill.title === "营销包装师" ||
      skill.title === "拜访建议话术"
    ) {
      if (onStageChange) onStageChange("做准备");
    } else if (skill.title === "平安纪要大师") {
      if (onStageChange) onStageChange("去拜访");
    } else if (skill.title === "客户服务Skill" || skill.title === "合规分析") {
      if (onStageChange) onStageChange("跟客户");
    }

    if (skill.title === "报销审核发起") {
      setAwaitingEmployeeListUpload(true);
    }

    setInputValue(skill.prompt);
  };

  const handleComplianceAnalysis = (fileName: string) => {
    setAwaitingComplianceUpload(false);

    // Add user message for file upload
    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      type: "text",
      content: `[附件] ${fileName}`,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newUserMsg]);
    setIsTyping(false);

    // Show reasoning process
    const reasoningMsgId = Date.now().toString();
    const reasoningMsg: Message = {
      id: reasoningMsgId,
      sender: "bot",
      type: "reasoning",
      content: "正在为您执行【合规性检查】...",
      timestamp: new Date(),
      data: {
        steps: [{ text: "执行标书审核...", status: "loading" }],
      },
    };
    setMessages((prev) => [...prev, reasoningMsg]);

    // Simulate analysis steps
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === reasoningMsgId
            ? {
                ...m,
                data: {
                  steps: [
                    { text: "执行标书审核...", status: "done" },
                    { text: "审核通过结果通知...", status: "loading" }],
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
                  steps: [
                    { text: "执行标书审核...", status: "done" },
                    { text: "审核通过结果通知...", status: "done" },
                    { text: "自动发起用印审批流程...", status: "loading" }],
                },
              }
            : m,
        ),
      );
    }, 2000);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === reasoningMsgId
            ? {
                ...m,
                data: {
                  steps: [
                    { text: "执行标书审核...", status: "done" },
                    { text: "审核通过结果通知...", status: "done" },
                    { text: "自动发起用印审批流程...", status: "done" }],
                },
              }
            : m,
        ),
      );

      const complianceMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        type: "compliance_card",
        content:
          "【合规性检查】已完成。标书合规性检查通过，已为您自动发起用印流程。",
        timestamp: new Date(),
        data: {
          title: "标书合规性检查及用印申请",
          result: "✅ 合规性检查通过",
          details: [
            "资质文件：齐全且在有效期内",
            "报价范围：符合公司指导价标准",
            "法务条款：无异常风险条款"],
          sealProcess: [
            { step: "发起申请", status: "done", time: "10:00" },
            { step: "部门主管审批", status: "done", time: "10:15" },
            { step: "法务合规审批", status: "done", time: "10:30" },
            { step: "印章管理员盖章", status: "done", time: "11:00" }],
        },
      };
      setMessages((prev) => [...prev, complianceMsg]);
    }, 3000);
  };

  const startRecording = () => {
    setIsRecording(true);
    setRecordingText("");

    // Simulate real-time transcription
    const fullText = "我可以领取的商机";
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setRecordingText(currentText);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsRecording(false);
          setInputValue("我可以领取的商机");
        }, 800);
      }
    }, 150);
  };

  useEffect(() => {
    const handleSkillClick = (e: any) => {
      const { prompt } = e.detail;
      setInputValue(prompt);
    };
    window.addEventListener("skill-click", handleSkillClick);
    return () => window.removeEventListener("skill-click", handleSkillClick);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string, displayTitle?: string) => {
    if (!text.trim()) return;

    if (text === '专家会诊评估申请') {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "expert_consultation_report",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 3000);
      return;
    }
    
    if (text === '发起项目方案生成') {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "project_plan_generation",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1500);
      return;
    }

    if (text.includes("某烟草企业补充医疗保障管理办法")) {
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
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "已检测到您上传了《某烟草企业补充医疗保障管理办法》，我将自动解析全文内容，重点分析保障范围、报销规则、基金管理机制、理赔流程及合规要求，并结合行业标杆实践识别潜在优化方向与合作机会。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        
        setTimeout(() => {
          const progressMsg = {
            id: Date.now().toString() + "_bot_progress",
            sender: "bot",
            type: "doc_parsing_progress",
            content: "",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, progressMsg]);
          
          setTimeout(() => {
            const resultMsg = {
              id: Date.now().toString() + "_bot_result",
              sender: "bot",
              type: "doc_parsing_result",
              content: "",
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, resultMsg]);

            setTimeout(() => {
              const msg2 = {
                id: Date.now().toString() + "_bot_msg2",
                sender: "bot",
                type: "text",
                content: "企康助手正在为您深度解读管理办法",
                timestamp: new Date(),
              }
              setMessages((prev) => [...prev, msg2]);
              
              setTimeout(() => {
                 const detailMsg = {
                   id: Date.now().toString() + "_bot_interp",
                   sender: "bot",
                   type: "doc_interpretation_report",
                   content: "",
                   timestamp: new Date(),
                 };
                 setMessages((prev) => [...prev, detailMsg]);

                 setTimeout(() => {
                   const riskMsg = {
                     id: Date.now().toString() + "_bot_risk",
                     sender: "bot",
                     type: "doc_risk_opportunity_report",
                     content: "",
                     timestamp: new Date(),
                   };
                   setMessages((prev) => [...prev, riskMsg]);
                 }, 24500);
              }, 1500);
            }, 1000);

          }, 3500);
        }, 1000);
      }, 1000);
      return;
    }

    if (text.includes("请帮我审核以下报销材料")) {
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
        setIsTyping(false);
        setAwaitingEmployeeListUpload(true);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "请您上传需要审核的材料。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;
    }

    if (text.includes("[附件]") && awaitingEmployeeListUpload) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "已完成对您上传报销材料的分析，共包含报销发票1张、报销明细表1份。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1500);
      return;
    }

    if (text.includes("确认执行报销审核")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "正在为您执行报销材料审核。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);

        setTimeout(() => {
          const finalMsg = {
            id: Date.now().toString() + "_bot_final",
            sender: "bot",
            type: "text",
            content:
              "您的报销材料已审核通过，审核结果已发送至您的邮箱，请及时查收。",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, finalMsg]);
        }, 2000);
      }, 1000);
      return;
    }

    if (text.includes("请帮我复核所有报销申请，确认是否存在异常")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "已为您完成68次历史报销审核申请的复核，其中正常68次，异常0次。复核结果已发送至您的邮箱，请及时查收。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1500);
      return;
    }

    if (text.includes("我有哪些商机可以认领")) {
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
        setIsTyping(false);
        const reportMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "业绩追踪助手留意到您已经完成云南省烟草公司曲靖市公司2024-2027年补充医疗保险服务项目（二次）的投标。当前同行业的云南中烟工业有限责任公司已完成企业年金落地，企康业务仍具备较大的拓展空间。请您确认是否认领该企康商机，以便后续持续跟进与推进。",
          timestamp: new Date(),
        };
        const oppMsg = {
          id: Date.now().toString() + "_opp",
          sender: "bot",
          type: "business_opportunity",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reportMsg, oppMsg]);
      }, 1500);
      return;
    }

    if (
      text.includes("确认认领云南中烟工业有限责任公司企康商机") ||
      text.includes("认领商机")
    ) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: "确认认领",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const msg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "您已认领云南中烟工业有限责任公司的企康商机，在未来的5个工作日内，请完成一次客户拜访。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, msg]);
      }, 1000);
      return;
    }

    if (text.includes("我正在拜访云南中烟工业有限责任公司的朱洪武书记")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "正在调用客户拜访记录技能，将为您开启平安纪要大师，全程记录会议语音并自动内容转写。",
          timestamp: new Date(),
        };
        const meetingMsg = {
          id: Date.now().toString() + "_meeting",
          sender: "bot",
          type: "meeting_recording_yn",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg, meetingMsg]);
      }, 1000);
      return;
    }

    if (
      text.includes("会议已结束，请输出会议纪要") ||
      text.includes("会议已结束，请输出拜访会议纪要")
    ) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: "结束会议并输出纪要",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const minMsg = {
          id: Date.now().toString() + "_min",
          sender: "bot",
          type: "meeting_minutes_yn",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, minMsg]);
      }, 1500);
      return;
    }

    
    if (text.includes("#项目管理#")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "product_match_assessment",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;
    }

    
    if (text.includes("帮我生成报价建议并评估授权风险")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "quote_auth_center",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;
    }

    if (text.includes("#任务追踪#")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "您已完成拜访云南中烟工业有限责任公司任务，还有出具高管专属服务白皮书、制作差异化方案等任务请及时开展。",
          timestamp: new Date(),
        };
        const taskMsg = {
          id: Date.now().toString() + "_task",
          sender: "bot",
          type: "task_tracking_yn",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg, taskMsg]);
      }, 1000);
      return;
    }

    if (
      text.includes(
        "作为集团高管，企康办安排我下周陪养老险北分去见云南烟草张总",
      ) ||
      text === "帮我做一个云南烟草全景分析" ||
      text === "#云南烟草全景分析#"
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
        "我先调研云南烟草集团基本情况，需要理解这家公司的全貌",
        "首先要拿到云南烟草的基本面数据",
        "查工商信息：注册资本/法人/经营范围/股权穿透，然后是股权结构分析",
        "接下来我需要了解公司的战略方向",
        "联网搜索云南烟草最新战略规划，重点关注年度报告和公开战略发布",
        "搜索高管公开言论，验证我从战略中推断的关注点是否正确，还需要了解业务规划的落地情况",
        "搜索业务规划，看战略是否有对应的业务动作支撑",
        '整合所有信息 ，按"基本面-股权-战略-高管-业务"的逻辑组织',
        "现在调研一下云南烟草高管的关系链，包括决策人基本信息、工作履历和跟平安相关的信息",
        "必须搜现任+前两任核心高管",
        "查平安与云南烟草高管的合作交集",
        "搜索公开言论/决策风格信息源，标注决策风格",
        "搜索内部材料、新闻稿",
        "分析张总标签：技术派/全球化/务实/关注效率",
        "现在分析云南烟草集团与平安的历史合作情况，总结合作关系，挖掘潜在合作机会",
        '先宽泛搜索"云南烟草+平安"不加年份限制',
        '同时搜招标网"云南烟草+平安养老+年金"、"云南烟草+平安产险+中标"，找到线索后时间锚定深挖',
        "同时调研平安云南烟草技术合作信息",
        "多方信息源交叉验证，先搜再断言",
        "基于已有合作推导潜在合作机会（如已有采购，可延伸年金/企康）",
        "开始分析云南烟草作为信息技术行业的企康需求特点和机会",
        "搜索云南烟草当前痛点：员工健康管理分散/体检标准不统一/缺乏数字化平台",
        '企康切入角度：用"数字化健康管理"而非"保险"语言切入（张总技术背景，对数字化方案更敏感）',
        "提供话术三段：破冰（云南烟草AI战略+员工健康数字化）、痛点共鸣（7.2万人分散管理难）、方案切入（平安云南烟草数字化方案合作）",
        "检查：我是否有遗漏项",
        "根据5分钟的时间长度要求组织内容"];
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content:
          "客户洞察专家调用以下技能：客户信息调研、关键决策人分析、历史合作分析、拜访建议话术",
        timestamp: new Date(),
        data: {
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
            type: "lenovo_panoramic_analysis",
            content: "云南烟草调研报告html和拜访建议话术html已生成。",
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
      }, 500); // reduced from 500ms to 300ms for a better pace, since there are 26 steps. Total is 7.8 seconds instead of 13.
      return;
    }

    if (text === "#案例亮点提炼#") {
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
            { id: "2", text: "提炼历史案例卖点和亮点...", status: "pending" }],
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
        "按规范交付：生成方式、上传流程、链接格式全部按已有规范执行，不自创。"];
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content:
          "营销方案专家调用以下技能：拜访材料生成、标准产品推荐、明星方案匹配、案例亮点提炼、竞品多维对标",
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
    } else if (text === "云南烟草企康对标传统体检机构，技术标的优势怎么写？") {
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
            { id: "3", text: "匹配云南烟草企康的核心技术壁垒", status: "pending" },
            { id: "4", text: "推演技术标“控标”策略", status: "pending" },
            { id: "5", text: "生成标书标准化输出框架", status: "pending" }],
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
            content: "为您生成云南烟草企康技术标优势方案：",
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
            { id: "3", text: "分析销售打法...", status: "pending" }],
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
      text.includes("我要去拜访云南烟草，帮我准备拜访材料")
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
        content: "好的，根据标品营销方案生成流程，我需要先收集客户信息。请提供以下客户基本信息：\n\n---\n\n**必填项：**\n\n① **客户名称** (全称)：\n② **行业** (金融/能源/通讯/烟草/科技/邮政/制造/交通运输等)：\n③ **人员规模** (在职员工总数)：\n④ **地域** (省/市)：\n⑤ **预算** (年，如\"3000万\")：\n\n**选填项 (让方案更精准)：**\n\n- 组织结构：高层___人 / 核心员工___人 / 基层员工___人\n- 人员结构：离退休比例___ / 在职人员比例___，平均年龄___，年龄高峰区间___\n- 性别结构：男___人 / 女___人\n- 工种结构：内勤___人 / 外勤___人\n- 既往健康痛点：\n- 补充说明：",
        timestamp: new Date(),
      };
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        setTimeout(() => {
          setInputValue("对接人是HRD，本次是首次接触，希望建立初步信任，该烟草企业覆盖6个市级，总预算大概是600~800万元，历史赔付率偏低");
        }, 3000);
      }, 500);
      return;
    } else if (
      text.includes("对接人是HRD")
    ) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const allTexts = [
        '客户特征识别：分析行业属性、组织架构、员工规模及已知预算情况，明确客户画像。',
        '历史信息研判：结合赔付数据完整度、现有福利体系等信息，评估客户当前保障体系成熟度。',
        '标杆客户对标：检索同类型央国企、省级多机构客户及长期合作案例，寻找可借鉴模式。',
        '需求场景挖掘：从保障管理、基金运营、健康服务、员工关怀等维度识别潜在需求。',
        '产品能力匹配：从补充医疗、委托基金管理、体检服务、慢病管理、就医协助等产品中筛选适配方案。',
        '方案组合设计：结合客户特点与预算情况，形成可落地的产品组合及服务模式。',
        '价值体系提炼：从政策合规、员工关怀、健康企业建设、ESG价值及企业文化建设等维度提炼方案价值。',
        '拜访策略生成：输出标杆案例、产品推荐、价值亮点及沟通重点，形成首次拜访材料。'];
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "营销方案专家调用以下技能：拜访材料生成、标准产品推荐、明星方案匹配、案例亮点提炼、竞品多维对标",
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
          const reportMsg = {
            id: Date.now().toString() + "_report",
            sender: "bot",
            type: "lenovo_new_marketing_plan",
            content: "为您生成云南烟草集团首次拜访ppt。",
            timestamp: new Date(),
            data: { isFamilyDoctor: true },
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
      }, 500);
      return;
    
} else if (
      text.includes(
        "根据我上传的分析云南省烟草公司2024-2027年补充医疗保险服务项目（二次）招标书初稿，检查标书内容和格式，总结标书可以改善的地方，生成述标的ppt、以及ppt逐字演讲稿。",
      )
    ) {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setAwaitingTenderDraft(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask",
            sender: "bot",
            type: "text",
            content: "请您点击输入框上部的附件上传按钮，上传投标书初稿。",
            timestamp: new Date(),
          }]);
        setIsTyping(false);
      }, 1200);
      return;
    } else if (
      text.includes(
        "根据云南省烟草公司2024-2027年补充医疗保险服务项目（二次）的招标书，帮我生成完整的投标书",
      )
    ) {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setAwaitingTenderDoc(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask",
            sender: "bot",
            type: "text",
            content: "请您点击输入框上部的附件上传按钮，上传招标书。",
            timestamp: new Date(),
          }]);
        setIsTyping(false);
      }, 1200);
      return;
    } else if (
      (awaitingTenderDoc || awaitingBidDocGeneration) &&
      text.startsWith("[附件]")
    ) {
      const wasAwaitingTender = awaitingTenderDoc;
      setAwaitingBidDocGeneration(false);
      setAwaitingTenderDoc(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();

      let reasoningMsg: Message;
      let allTexts: string[] = [];

      if (wasAwaitingTender) {
        allTexts = [
          "投标是高风险场景，我应该理解格式不规范直接废标",
          "获取并理解标书规范",
          "解读招标文件核心条款（服务范围、人员配置、报价）",
          "逐条对照平安资质，识别废标风险点",
          "我要确认输入是否完整：项目性质、截止时间、竞争对手、特殊要求",
          "根据评分标准分配篇幅（高分模块多写）",
          "通过知识库查询补充医疗条款和理赔流程",
          "按投标函、资质、技术方案、商务、报价、服务承诺的结构生成 标书，且必须含完整目录",
          "逐条自检：格式是否合规？必填项是否覆盖？有无废标条款触碰",
          "开始输出标书初稿"];
        reasoningMsg = {
          id: reasoningMsgId,
          sender: "bot",
          type: "reasoning",
          content: "标书撰写专家调用以下技能：智能标书生成",
          timestamp: new Date(),
          data: {
            title: "标书撰写专家思考与执行中...",
            steps: allTexts.map((title, idx) => ({
              id: String(idx + 1),
              text: title,
              status: idx === 0 ? "loading" : "pending",
            })),
          },
        };
      } else {
        allTexts = [
          "提取标书目录与结构...",
          "匹配高质量标书素材...",
          "组装文档并排版..."];
        reasoningMsg = {
          id: reasoningMsgId,
          sender: "bot",
          type: "reasoning",
          content: "正在生成标书内容...",
          timestamp: new Date(),
          data: {
            steps: allTexts.map((title, idx) => ({
              id: String(idx + 1),
              text: title,
              status: idx === 0 ? "loading" : "pending",
            })),
          },
        };
      }

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
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString() + "_report",
              sender: "bot",
              type: "bid_generation_report",
              content:
                "正在为您生成《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）投标书（初稿）》docx",
              timestamp: new Date(),
              data: {},
            }]);
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
      }, 1200);
      return;
    }

    if (text === "#标书质检#" || text === "#标书质量检查#") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“标书质检”技能",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingBidDocInspection(true);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask",
            sender: "bot",
            type: "text",
            content: "请点击下方“附件”按钮，上传需要质检的标书文件。",
            timestamp: new Date(),
          }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingTenderDraft && text.startsWith("[附件]")) {
      setAwaitingTenderDraft(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      const allTexts = [
        '定分析框架。 我要进行标书检查，不是通读一遍提意见，而是先建立"内容-结构-格式"三维检查框架，每一维再按严重程度分级（致命/严重/中等/轻微），确保评审专家拿到的是可排优先级的行动清单，不是一堆零散吐槽。',
        "对标招标要求找缺失。 我要分析标书不是自说自话，要站在评审专家视角看。",
        'PPT定位分析。理解述标PPT不是标书的缩写版，而是"10分钟内让评审记住你"的武器。所以结构按"理解你→服务你→凭什么是我→我怎么做"四段式，每段只讲评审最关心的点，不堆砌。',
        "演讲稿节奏设计。10分钟的述标，我要分配时间——服务方案给4分钟（占40%），因为这是评分权重最大的部分；核心优势2分钟（差异化得分点）；理解和承诺各1-2分钟（框架和收尾）。每段话只传递一个核心记忆点。",
        '演讲稿话术策略。 每个优势点我都要"说人话"：不说"属地化服务网络覆盖"，说"不是飞过来的服务，是住在这里的服务"；不说"全国通赔体系"，说"人在哪里，保障就在哪里"。'];
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "标书撰写专家调用以下技能：述标材料生成",
        timestamp: new Date(),
        data: {
          title: "标书撰写专家思考与执行中...",
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
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString() + "_report",
              sender: "bot",
              type: "bid_inspection_report",
              content:
                "正在为您生成《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）述标PPT》、《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）述标PPT逐字稿》docx",
              timestamp: new Date(),
              data: {},
            }]);
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
      }, 1200);
      return;
    } else if (awaitingBidDocInspection && text.startsWith("[附件]")) {
      setAwaitingBidDocInspection(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在质检标书内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "核查内容完整性...", status: "loading" },
            { id: "2", text: "检查格式与排版...", status: "pending" },
            { id: "3", text: "检索敏感风险项...", status: "pending" }],
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
      }, 3000);
      setTimeout(() => {
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
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_report",
            sender: "bot",
            type: "bid_inspection_report",
            content: "企康项目投递标书质检结果",
            timestamp: new Date(),
            data: {},
          }]);
        setIsTyping(false);
      }, 4500);
      return;
    }

    if (text.includes("写一个标品营销方案") || text.includes("我要给")) {
      const matchName = text.match(/要给【?(.*?)】?写/);
      const matchBudget = text.match(/预算大概是【?([^】]+?)】?$/);
      let customerNameStr = "未知客户";
      if (matchName && matchName[1] && !matchName[1].includes("XXX")) customerNameStr = matchName[1];
      else if (text.includes("云天化")) customerNameStr = "云天化";
      
      let budgetStr = "未知预算";
      if (matchBudget && matchBudget[1] && !matchBudget[1].includes("XXX")) budgetStr = matchBudget[1];

      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在搜索客户基本信息...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "调用内部CRM获取客户画像...", status: "complete" },
            { id: "2", text: "分析所属行业", status: "loading" },
            { id: "3", text: "生成企业信息结果...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_basic_form",
            sender: "bot",
            type: "basic_info_card_form",
            content: "基本信息表单",
            timestamp: new Date(),
            data: {
              customerName: customerNameStr,
              budget: budgetStr
            }
          }]);
        setIsTyping(false);
      }, 2000);
      return;
    } else if (text.startsWith("[用户确认]")) {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在生成标品套餐选项...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg",
            sender: "bot",
            type: "package_option_card",
            content: "套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\n门诊预约协助服务*1次\n专人1V1陪诊服务*1次\n名医视频问诊*1次\n健康护航大礼包*1次\n购药优惠券*12次\n福安好物专区*不限次" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\n普通陪诊: 29省234市\n全国住院安排协助: 31省322市" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\n幽门螺旋杆菌检测1份\n肺结节居家检测服务1份" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\n家庭医生音视频咨询30分钟\n专科医生实时音视频咨询2次\n名医三方音视频咨询1年无限次\n名医门诊预约协助3次\n名医住院安排协助1次\n健康定制好礼1次\n健康送到家, 每季度一次\n专属小秘书7*12线上服务" },
                    { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\n普通陪诊*1次\n家庭医生图文问诊-主治及以下 (年度会员)\n企业健康室 (升级版)\n全额抵扣券-小药箱\n心理健康测评 不限次\n心理图文咨询 2次\n心理电话咨询 1次" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\nAED专题讲座*2小时\n平安家医图文问诊*不限次\n门诊预约协助服务*1次\n住院协助服务*1次\n名医视频问诊*3次\n专人1V1陪诊服务*3次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 1500);
      return;
    } else if (text.startsWith("[已选择套餐]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const botResMsg: Message = { id: Date.now().toString()+"_supp", sender: "bot", type: "supplementary_info_form_card", content: "补充信息卡片", timestamp: new Date(), data: { highLevelCount: 200, coreCount: 1800, baseCount: 6000, retireeRatio: "5%", activeRatio: "95%", avgAge: 35, maxAgeGroup: "30~40", maleCount: 4500, femaleCount: 3500, indoorCount: 3000, outdoorCount: 5000 } };
      setMessages(prev => [...prev, botResMsg]);
      return;
    } else if (text.startsWith("[忽略补充信息]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const botResMsg: Message = { id: Date.now().toString()+"_ask_ppt", sender: "bot", type: "text", content: "是否直接为您生成标品营销方案大纲和PPT？", timestamp: new Date() };
      setMessages(prev => [...prev, botResMsg]);
      return;
    } else if (text.startsWith("[已提交补充信息]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在结合补充信息为您推荐更精准的套餐...",
        timestamp: new Date(),
        data: {
          title: "执行过程",
          steps: [
            { text: "思考过程", status: "loading" },
            { text: "使用 Skill：标准产品推荐", status: "pending" },
            { text: "生成套餐选项", status: "pending" }
          ]
        }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: {
            ...m.data,
            steps: [
              { text: "思考过程", status: "done", details: "正在分析补充信息内容并提取关键要素" },
              { text: "使用 Skill：标准产品推荐", status: "loading" },
              { text: "生成套餐选项", status: "pending" }
            ]
          }
        } : m));
      }, 800);

      setTimeout(() => {
        setMessages((prev) => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: {
            ...m.data,
            steps: [
              { text: "思考过程", status: "done", details: "正在分析补充信息内容并提取关键要素" },
              { text: "使用 Skill：标准产品推荐", status: "done" },
              { text: "生成套餐选项", status: "done" }
            ]
          }
        } : m));
      }, 1600);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg_refined",
            sender: "bot",
            type: "package_option_card",
            content: "套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\n门诊预约协助服务*1次\n专人1V1陪诊服务*1次\n名医视频问诊*1次\n健康护航大礼包*1次\n购药优惠券*12次\n福安好物专区*不限次" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\n普通陪诊: 29省234市\n全国住院安排协助: 31省322市" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\n幽门螺旋杆菌检测1份\n肺结节居家检测服务1份" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\n家庭医生音视频咨询30分钟\n专科医生实时音视频咨询2次\n名医三方音视频咨询1年无限次\n名医门诊预约协助3次\n名医住院安排协助1次\n健康定制好礼1次\n健康送到家, 每季度一次\n专属小秘书7*12线上服务" },
                    { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\n普通陪诊*1次\n家庭医生图文问诊-主治及以下 (年度会员)\n企业健康室 (升级版)\n全额抵扣券-小药箱\n心理健康测评 不限次\n心理图文咨询 2次\n心理电话咨询 1次" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\nAED专题讲座*2小时\n平安家医图文问诊*不限次\n门诊预约协助服务*1次\n住院协助服务*1次\n名医视频问诊*3次\n专人1V1陪诊服务*3次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2400);
      return;
    } else if (text === "是" && messages.length > 0 && messages[messages.length - 1].content.includes("是否需要修改")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在重新生成营销方案PPT内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "重新分析修改需求...", status: "complete" },
            { id: "2", text: "调整PPT...", status: "loading" },
            { id: "3", text: "生成新PPT内容...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => prev.map((m) => m.id === reasoningMsgId ? {
          ...m,
          data: { ...m.data, steps: m.data.steps.map((s: any, i: number) => i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s) },
        } : m));
      }, 1500);

      setTimeout(() => {
        setMessages((prev) => prev.map((m) => m.id === reasoningMsgId ? {
          ...m,
          data: { ...m.data, steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })) },
        } : m));
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ppt_new",
            sender: "bot",
            type: "ppt_card",
            content: "新营销方案PPT",
            timestamp: new Date(),
            data: {
              title: "明道云标品营销方案PPT（优化版）",
              overview: "已根据您的要求，对营销方案PPT内容进行了优化和调整：",
              slides: [
                {
                  title: "企康助力明道云打造健康组织（优化版）",
                  bullets: ["深度剖析：互联网行业高强度工作下的健康隐患", "精准洞察：高管与核心骨干的身心健康诉求", "解决之道：系统性健康管理方案的必要性与紧迫性"]
                },
                {
                  title: "明道云专属企康保障方案（进阶版）",
                  bullets: ["方案总览：18W预算下的高性价比组合", "高管尊享绿通服务（全面解决就医痛点）", "全员健康档案建立（构建数字化管理平台）"]
                },
                {
                  title: "平安银行生态赋能（合作共赢）",
                  bullets: ["双强联手：平安健康+平安银行的品牌背书", "便捷就医：丰富的线上问诊与线下三甲网络资源", "管家服务：专职健康管家保障方案完美落地"]
                }
              ]
            }
          }]);
        setIsTyping(false);
      }, 3000);
      return;
    } else if (text === "否" && messages.length > 0 && messages[messages.length - 1].content.includes("是否需要修改")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      setMessages((prev) => [...prev, { id: Date.now().toString() + "_ok", sender: "bot", type: "text", content: "好的，已为您保存当前PPT内容，您可以直接使用或导出。", timestamp: new Date() }]);
      return;
    } else if (text.startsWith("[生成方案]")) {
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在生成营销方案PPT内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "提取已选套餐内容...", status: "complete" },
            { id: "2", text: "调用行业标品PPT模板...", status: "loading" },
            { id: "3", text: "生成定制化PPT内容...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ppt",
            sender: "bot",
            type: "ppt_card",
            content: "营销方案PPT",
            timestamp: new Date(),
            data: {
              title: "明道云标品营销方案PPT",
              overview: "根据明道云所处软件/互联网行业特性及18W预算，结合您选择的推荐套餐，我们为您生成了以下健康保障营销方案PPT内容，您可以直接预览各页内容：",
              slides: [
                {
                  title: "企康助力明道云打造健康组织",
                  bullets: ["互联网行业面临的亚健康挑战", "高管与核心骨干的身心健康诉求", "系统性健康管理方案的必要性"]
                },
                {
                  title: "明道云专属企康保障方案",
                  bullets: ["方案总览：18W预算下的最优解", "高管尊享绿通服务（解决就医痛点）", "全员健康档案建立（系统性管理起点）"]
                },
                {
                  title: "平安银行生态赋能",
                  bullets: ["平安健康+平安银行的品牌背书", "便捷的线上问诊与线下三甲网络", "专职健康管家服务保障落地"]
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2500);
      return;
    } else if (text === "[重新推荐]") {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask_more",
            sender: "bot",
            type: "text",
            content: "请问您对套餐有哪些进一步的需求或调整建议？",
            timestamp: new Date()
          }
        ]);
        setAwaitingNewPkg(true);
        setIsTyping(false);
      }, 500);
      return;
    } else if (text.startsWith("[确认基本信息]")) {
      // DO NOT add user message to hide it
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在匹配推荐套餐...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "分析基本信息与痛点...", status: "complete" },
            { id: "2", text: "匹配标品套餐选项...", status: "loading" },
            { id: "3", text: "生成套餐卡片...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg",
            sender: "bot",
            type: "package_option_card",
            content: "推荐标品套餐选项",
            timestamp: new Date(),
            data: {}
          }
        ]);
        setIsTyping(false);
      }, 2000);
      return;
    } else if (awaitingNewPkg && text) {
      setAwaitingNewPkg(false); setPkgRetryCount(prev => prev + 1);
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在根据新需求调整套餐...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "分析新的套餐需求...", status: "complete" },
            { id: "2", text: "重新匹配标品套餐...", status: "loading" },
            { id: "3", text: "生成新套餐卡片...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg_new",
            sender: "bot",
            type: "package_option_card",
            content: "推荐标品套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\n门诊预约协助服务*1次\n专人1V1陪诊服务*1次\n名医视频问诊*1次\n健康护航大礼包*1次\n购药优惠券*12次\n福安好物专区*不限次" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\n普通陪诊: 29省234市\n全国住院安排协助: 31省322市" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\n幽门螺旋杆菌检测1份\n肺结节居家检测服务1份" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\n家庭医生音视频咨询30分钟\n专科医生实时音视频咨询2次\n名医三方音视频咨询1年无限次\n名医门诊预约协助3次\n名医住院安排协助1次\n健康定制好礼1次\n健康送到家, 每季度一次\n专属小秘书7*12线上服务" },
                    { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\n普通陪诊*1次\n家庭医生图文问诊-主治及以下 (年度会员)\n企业健康室 (升级版)\n全额抵扣券-小药箱\n心理健康测评 不限次\n心理图文咨询 2次\n心理电话咨询 1次" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\nAED专题讲座*2小时\n平安家医图文问诊*不限次\n门诊预约协助服务*1次\n住院协助服务*1次\n名医视频问诊*3次\n专人1V1陪诊服务*3次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2000);
      return;
    } else if (awaitingStProductInfo && text.startsWith("[附件]")) {
      setAwaitingStProductInfo(false);
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
        content: "正在解析附件内容并设计交互卡片...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "提取基本信息...", status: "loading" },
            { id: "2", text: "生成询问与补充信息...", status: "pending" },
            { id: "3", text: "匹配标准套餐选项...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 0 ? { ...s, status: "complete" } : i === 1 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_basic",
            sender: "bot",
            type: "basic_info_card",
            content: "基本信息已提取",
            timestamp: new Date(),
            data: {
              customerName: "云南烟草集团",
              employeeCount: "8000+ 人",
              budget: "600-800 万元",
              requirement: "员工补充医疗保障、健康管理中台及高管健康绿通服务"
            }
          }
        ]);
      }, 1500);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_sup",
            sender: "bot",
            type: "supplementary_info_card",
            content: "已捕获并记录您的补充需求：",
            timestamp: new Date(),
            data: {
              text: "系统已自动记录需求细节并完善产品匹配模型。",
              supplementary: [
                "已选择：高管尊享绿通服务",
                "附加要求：需确保当地三甲医院100%覆盖",
                "附加要求：心理EAP服务需覆盖全体一线员工"
              ]
            }
          }
        ]);
      }, 3000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg",
            sender: "bot",
            type: "package_option_card",
            content: "套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\n门诊预约协助服务*1次\n专人1V1陪诊服务*1次\n名医视频问诊*1次\n健康护航大礼包*1次\n购药优惠券*12次\n福安好物专区*不限次" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\n普通陪诊: 29省234市\n全国住院安排协助: 31省322市" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\n幽门螺旋杆菌检测1份\n肺结节居家检测服务1份" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\n家庭医生音视频咨询30分钟\n专科医生实时音视频咨询2次\n名医三方音视频咨询1年无限次\n名医门诊预约协助3次\n名医住院安排协助1次\n健康定制好礼1次\n健康送到家, 每季度一次\n专属小秘书7*12线上服务" },
                    { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\n普通陪诊*1次\n家庭医生图文问诊-主治及以下 (年度会员)\n企业健康室 (升级版)\n全额抵扣券-小药箱\n心理健康测评 不限次\n心理图文咨询 2次\n心理电话咨询 1次" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\nAED专题讲座*2小时\n平安家医图文问诊*不限次\n门诊预约协助服务*1次\n住院协助服务*1次\n名医视频问诊*3次\n专人1V1陪诊服务*3次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 4500);
      return;
    }

    if (text === "#材料审查#") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“材料审查”技能",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingMaterialReview(true);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask",
            sender: "bot",
            type: "text",
            content: "请点击下方“附件”按钮，上传待审查的材料文件。",
            timestamp: new Date(),
          }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingMaterialReview && text.startsWith("[附件]")) {
      setAwaitingMaterialReview(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在智能审查材料内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "提取资质文件信息...", status: "loading" },
            { id: "2", text: "验证合同与发票要件...", status: "pending" },
            { id: "3", text: "评估整体合规性...", status: "pending" }],
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
      }, 3000);
      setTimeout(() => {
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
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_report",
            sender: "bot",
            type: "material_review_report",
            content: "企康项目材料智能审查结论",
            timestamp: new Date(),
            data: {},
          }]);
        setIsTyping(false);
      }, 4500);
      return;
    }

    if (text === "#述标材料生成#") { const newUserMsg = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() }; setMessages(prev => [...prev, newUserMsg]); const reasoningMsg = { id: Date.now().toString(), sender: "bot", type: "reasoning", content: "调用“述标材料生成”技能", timestamp: new Date() }; setMessages(prev => [...prev, reasoningMsg]); setIsTyping(true); setTimeout(() => { setIsTyping(false); const botMsg = { id: Date.now().toString() + "_bot", sender: "bot", type: "text", content: "为您生成述标材料...", timestamp: new Date(), data: { type: "tactic_recommendation", phases: [{ title: "PPT宣讲材料结构化生成", steps: ["开场背景与分析", "痛点匹配方案", "案例证明", "报价说明"] }] } }; setMessages(prev => [...prev, botMsg]); }, 1500); return; } if (text === "帮我解读这份招标文件，看看重点关注什么") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“招标文件解读”技能",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);

      setIsTyping(true);
      setTimeout(() => {
        setAwaitingTenderDocInterpretation(true);
        const askMsg: Message = {
          id: Date.now().toString() + "_ask",
          sender: "bot",
          type: "text",
          content:
            "请点击下方“附件”按钮，上传需要解读的招标书文件（支持 PDF、Word 等格式）。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, askMsg]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingTenderDocInterpretation && text.startsWith("[附件]")) {
      setAwaitingTenderDocInterpretation(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      setIsTyping(true);
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      setTimeout(() => {
        const reasoningMsg: Message = {
          id: reasoningMsgId,
          sender: "bot",
          type: "reasoning",
          content: "调用专家技能...",
          timestamp: new Date(),
          data: {
            steps: [
              { id: "1", text: "我要先理解本次招标的核心采购目标", status: "loading" },
            { id: "2", text: "我要识别哪些条款属于硬性门槛", status: "pending" },
            { id: "3", text: "我要找出影响得分的关键评分项", status: "pending" },
            { id: "4", text: "我要分析客户最关注的服务能力", status: "pending" },
            { id: "5", text: "我要确认是否存在特殊责任要求", status: "pending" },
            { id: "6", text: "我要识别可能导致废标的风险点", status: "pending" },
            { id: "7", text: "我要梳理需要提前准备的材料", status: "pending" },
            { id: "8", text: "我要形成可执行的投标策略", status: "pending" }
            ],
          },
        };
        setMessages((prev) => [...prev, reasoningMsg]);
      }, 2000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 1
                        ? { ...s, status: "complete" }
                        : idx === 1
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2300);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 2
                        ? { ...s, status: "complete" }
                        : idx === 2
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2600);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 3
                        ? { ...s, status: "complete" }
                        : idx === 3
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2900);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 4
                        ? { ...s, status: "complete" }
                        : idx === 4
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 3200);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 5
                        ? { ...s, status: "complete" }
                        : idx === 5
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 3500);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 6
                        ? { ...s, status: "complete" }
                        : idx === 6
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 3800);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 7
                        ? { ...s, status: "complete" }
                        : idx === 7
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 4100);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx <= 7 ? { ...s, status: "complete" } : s
                    ),
                  },
                }
              : m,
          ),
        );
      }, 4400);

      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "bid_doc_interpretation_card",
          content: "",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 4500);
      return;
    /*
      setAwaitingTenderDocInterpretation(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在解析招标文件内容...",
        timestamp: new Date(),
        data: {
          steps: [
            {
              id: "1",
              text: "正在提取项目概括与核心要求...",
              status: "loading",
            },
            { id: "2", text: "分析资质门槛与评分标准...", status: "pending" },
            {
              id: "3",
              text: "梳理体检需求要点及废标风险...",
              status: "pending",
            }],
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
      }, 3000);

      setTimeout(() => {
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

        const reportMsg: Message = {
          id: Date.now().toString() + "_report",
          sender: "bot",
          type: "bidding_document_analysis_report",
          content: "招标文件解析完成，以下是深度解读报告：",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 4500);
      return;
  */  } else if (text === "帮我评估现有资质和项目经验的匹配度") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      setIsTyping(true);
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      setTimeout(() => {
        const reasoningMsg: Message = {
          id: reasoningMsgId,
          sender: "bot",
          type: "reasoning",
          content: "调用专家技能...",
          timestamp: new Date(),
          data: {
            steps: [
              { id: "1", text: "我要确认招标要求对应哪些资质条件", status: "loading" },
            { id: "2", text: "我要判断现有资质是否满足要求", status: "pending" },
            { id: "3", text: "我要寻找最匹配的同类项目案例", status: "pending" },
            { id: "4", text: "我要验证服务网络覆盖能力", status: "pending" },
            { id: "5", text: "我要评估现有方案的覆盖程度", status: "pending" },
            { id: "6", text: "我要识别仍需补充的证明材料", status: "pending" },
            { id: "7", text: "我要找出可能影响中标的短板", status: "pending" },
            { id: "8", text: "我要给出最优响应建议", status: "pending" }
            ],
          },
        };
        setMessages((prev) => [...prev, reasoningMsg]);
      }, 0);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 1
                        ? { ...s, status: "complete" }
                        : idx === 1
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 300);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 2
                        ? { ...s, status: "complete" }
                        : idx === 2
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 600);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 3
                        ? { ...s, status: "complete" }
                        : idx === 3
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 900);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 4
                        ? { ...s, status: "complete" }
                        : idx === 4
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1200);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 5
                        ? { ...s, status: "complete" }
                        : idx === 5
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
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 6
                        ? { ...s, status: "complete" }
                        : idx === 6
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1800);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 7
                        ? { ...s, status: "complete" }
                        : idx === 7
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2100);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx <= 7 ? { ...s, status: "complete" } : s
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2400);

      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "qual_perf_match_card",
          content: "",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 2500);
      return;
    } else if (
      text === "#合规分析" ||
      text.includes("企康与保险差异") ||
      text.includes("合规分析")
    ) {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“合规分析”技能",
        timestamp: new Date(),
        data: {
          steps: [
            {
              id: "1",
              text: "正在检索相关合规政策与法律法规...",
              status: "loading",
            },
            {
              id: "2",
              text: "分析企康业态特征及其与传统商业保险的边界...",
              status: "pending",
            },
            {
              id: "3",
              text: "梳理自保模式转委托模式合规要求与推进路径...",
              status: "pending",
            }],
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
      }, 3000);

      setTimeout(() => {
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

        const reportMsg: Message = {
          id: Date.now().toString() + "_report",
          sender: "bot",
          type: "compliance_analysis_report",
          content: "这是一份关于企康与保险差异及合规化推进路径的深度分析报告：",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 4500);
      return;
    } else if (text === "帮我把分管总、HRD和经办人可能关心的问题准备好") {
      if (onStageChange) onStageChange("做准备");
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);

      const botMsg: Message = {
        id: Date.now().toString() + "_bot",
        sender: "bot",
        type: "text",
        content: "结合客户组织架构及决策链特征，我将针对分管总、HRD和项目经办人三类核心决策角色的关注点、决策诉求和价值诉求，生成差异化拜访策略与沟通话术。\n\n分管总可能关注： 行业内标杆企业如何开展？政策支持力度如何？是否符合监管要求与企业合规管理要求？\nHRD可能关注： 能为员工带来哪些实际获得感？如何提升员工满意度与组织凝聚力？对企业文化建设、健康企业创建及ESG实践有哪些价值？\n项目经办人可能关注： 是否符合企业现有管理规范与实施流程？项目推进是否便捷？理赔服务、运营管理及员工使用体验是否顺畅高效？",
        timestamp: new Date(),
      };
      
      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setTimeout(() => {
           const reportMsg: Message = {
             id: Date.now().toString() + "_report",
             sender: "bot",
             type: "visit_pitch_report",
             content: "",
             timestamp: new Date(),
           };
           setMessages((prev) => [...prev, reportMsg]);
           setIsTyping(false);
        }, 3000);
      }, 500);
      return;
    }
    if (text.startsWith("VIEW_DOC:")) {
      const filename = text.replace("VIEW_DOC:", "");
      setSelectedMaterial({ name: filename });
      return;
    }

    if (text === "进入招投标交流群") {
      if (onChatChange) onChatChange("maotai_bid");
      if (onStageChange) onStageChange("招投标");

      // Add initial message to maotai_bid chat if it's empty
      if (
        !globalMessages?.["maotai_bid"] ||
        globalMessages["maotai_bid"].length === 0
      ) {
        const initialMsg: Message = {
          id: Date.now().toString(),
          sender: "bot",
          type: "text",
          content:
            "这是云南烟草集团项目的招投标交流群，请大家在群里交流招投标事项。",
          timestamp: new Date(),
        };
        if (setGlobalMessages) {
          setGlobalMessages((prev: any) => ({
            ...prev,
            maotai_bid: [initialMsg],
          }));
        }
      }
      return;
    }

    if (
      text.includes("我可以领取的商机") ||
      text.includes("领商机") ||
      text.includes("高匹配度商机")
    ) {
      // Do not hide right panel
    }

    if (
      text.includes("请帮我完成标书合规性检查") ||
      text.toLowerCase().includes("合规性检查skill")
    ) {
      if (onStageChange) onStageChange("招投标");
      setAwaitingComplianceUpload(true);
      const msg: Message = {
        id: Date.now().toString(),
        sender: "bot",
        type: "text",
        content:
          "好的，我将为您进行标书合规性检查。请确认核心内容已完整，并点击输入框上方的附件按钮上传需要检查的标书文件（支持 .pdf, .docx 格式）。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, msg]);
      setIsTyping(false);
      return;
    }

    // Move bidding and compliance checks to the top to prevent incorrect stage transitions
    if (
      text.includes("投标") ||
      (text.includes("标书") &&
        !text.includes("合规性检查") &&
        !text.includes("商务标书_云南烟草项目_v1.0.pdf")) ||
      text.includes("倒排时间") ||
      text.includes("招投标") ||
      text.includes("招标助手")
    ) {
      if (onStageChange) onStageChange("招投标");
      const msg: Message = {
        id: Date.now().toString(),
        sender: "bot",
        type: "text",
        content:
          "好的，已为您调用**招标助手（bid）**技能。请上传云南烟草投标的筹备材料，我将为您进行自动化分析与处理。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, msg]);
      setIsTyping(false);
      return;
    } else if (
      text.includes("合规") ||
      text.includes("用印") ||
      text.includes("审核")
    ) {
      if (onStageChange) onStageChange("招投标");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您调用**合规性检查**",
        timestamp: new Date(),
        data: {
          steps: [{ text: "执行标书审核...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "执行标书审核...", status: "done" },
                      { text: "审核通过结果通知...", status: "loading" }],
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
                    steps: [
                      { text: "执行标书审核...", status: "done" },
                      { text: "审核通过结果通知...", status: "done" },
                      { text: "自动发起用印审批流程...", status: "loading" }],
                  },
                }
              : m,
          ),
        );
      }, 2000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "执行标书审核...", status: "done" },
                      { text: "审核通过结果通知...", status: "done" },
                      { text: "自动发起用印审批流程...", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const complianceMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "compliance_card",
          content:
            "【合规性检查】已完成。标书合规性检查通过，已为您自动发起用印流程。",
          timestamp: new Date(),
          data: {
            title: "标书合规性检查及用印申请",
            result: "✅ 合规性检查通过",
            details: [
              "资质文件：齐全且在有效期内",
              "报价范围：符合公司指导价标准",
              "法务条款：无异常风险条款"],
            sealProcess: [
              { step: "发起申请", status: "done", time: "10:00" },
              { step: "部门主管审批", status: "done", time: "10:15" },
              { step: "法务合规审批", status: "done", time: "10:30" },
              { step: "印章管理员盖章", status: "done", time: "11:00" }],
          },
        };
        setMessages((prev) => [...prev, complianceMsg]);
      }, 3000);
      return;
    }

    if (text === "挂断会议") {
      setAwaitingMeetingTarget(true);
      setMessages((prev) => [
        ...prev.filter((m) => m.type !== "meeting_in_progress"),
        {
          id: Date.now().toString(),
          sender: "bot",
          type: "text",
          content: "您这次拜访的对象是谁？是什么角色？",
          timestamp: new Date(),
        }]);
      return;
    } else if (
      text.includes(
        "根据我上传的分析云南省烟草公司2024-2027年补充医疗保险服务项目（二次）招标书初稿，检查标书内容和格式，总结标书可以改善的地方，生成述标的ppt、以及ppt逐字演讲稿。",
      )
    ) {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setAwaitingTenderDraft(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask",
            sender: "bot",
            type: "text",
            content: "请您点击输入框上部的附件上传按钮，上传投标书初稿。",
            timestamp: new Date(),
          }]);
        setIsTyping(false);
      }, 1200);
      return;
    } else if (
      text.includes(
        "根据云南省烟草公司2024-2027年补充医疗保险服务项目（二次）的招标书，帮我生成完整的投标书",
      )
    ) {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setAwaitingTenderDoc(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask",
            sender: "bot",
            type: "text",
            content: "请您点击输入框上部的附件上传按钮，上传招标书。",
            timestamp: new Date(),
          }]);
        setIsTyping(false);
      }, 1200);
      return;
    } else if (
      (awaitingTenderDoc || awaitingBidDocGeneration) &&
      text.startsWith("[附件]")
    ) {
      const wasAwaitingTender = awaitingTenderDoc;
      setAwaitingBidDocGeneration(false);
      setAwaitingTenderDoc(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();

      let reasoningMsg: Message;
      let allTexts: string[] = [];

      if (wasAwaitingTender) {
        allTexts = [
          "投标是高风险场景，我应该理解格式不规范直接废标",
          "获取并理解标书规范",
          "解读招标文件核心条款（服务范围、人员配置、报价）",
          "逐条对照平安资质，识别废标风险点",
          "我要确认输入是否完整：项目性质、截止时间、竞争对手、特殊要求",
          "根据评分标准分配篇幅（高分模块多写）",
          "通过知识库查询补充医疗条款和理赔流程",
          "按投标函、资质、技术方案、商务、报价、服务承诺的结构生成 标书，且必须含完整目录",
          "逐条自检：格式是否合规？必填项是否覆盖？有无废标条款触碰",
          "开始输出标书初稿"];
        reasoningMsg = {
          id: reasoningMsgId,
          sender: "bot",
          type: "reasoning",
          content: "标书撰写专家调用以下技能：智能标书生成",
          timestamp: new Date(),
          data: {
            title: "标书撰写专家思考与执行中...",
            steps: allTexts.map((title, idx) => ({
              id: String(idx + 1),
              text: title,
              status: idx === 0 ? "loading" : "pending",
            })),
          },
        };
      } else {
        allTexts = [
          "提取标书目录与结构...",
          "匹配高质量标书素材...",
          "组装文档并排版..."];
        reasoningMsg = {
          id: reasoningMsgId,
          sender: "bot",
          type: "reasoning",
          content: "正在生成标书内容...",
          timestamp: new Date(),
          data: {
            steps: allTexts.map((title, idx) => ({
              id: String(idx + 1),
              text: title,
              status: idx === 0 ? "loading" : "pending",
            })),
          },
        };
      }

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
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString() + "_report",
              sender: "bot",
              type: "bid_generation_report",
              content:
                "正在为您生成《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）投标书（初稿）》docx",
              timestamp: new Date(),
              data: {},
            }]);
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
      }, 1200);
      return;
    }

    if (text === "#标书质检#" || text === "#标书质量检查#") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“标书质检”技能",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingBidDocInspection(true);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask",
            sender: "bot",
            type: "text",
            content: "请点击下方“附件”按钮，上传需要质检的标书文件。",
            timestamp: new Date(),
          }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingTenderDraft && text.startsWith("[附件]")) {
      setAwaitingTenderDraft(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      const allTexts = [
        '定分析框架。 我要进行标书检查，不是通读一遍提意见，而是先建立"内容-结构-格式"三维检查框架，每一维再按严重程度分级（致命/严重/中等/轻微），确保评审专家拿到的是可排优先级的行动清单，不是一堆零散吐槽。',
        "对标招标要求找缺失。 我要分析标书不是自说自话，要站在评审专家视角看。",
        'PPT定位分析。理解述标PPT不是标书的缩写版，而是"10分钟内让评审记住你"的武器。所以结构按"理解你→服务你→凭什么是我→我怎么做"四段式，每段只讲评审最关心的点，不堆砌。',
        "演讲稿节奏设计。10分钟的述标，我要分配时间——服务方案给4分钟（占40%），因为这是评分权重最大的部分；核心优势2分钟（差异化得分点）；理解和承诺各1-2分钟（框架和收尾）。每段话只传递一个核心记忆点。",
        '演讲稿话术策略。 每个优势点我都要"说人话"：不说"属地化服务网络覆盖"，说"不是飞过来的服务，是住在这里的服务"；不说"全国通赔体系"，说"人在哪里，保障就在哪里"。'];
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "标书撰写专家调用以下技能：述标材料生成",
        timestamp: new Date(),
        data: {
          title: "标书撰写专家思考与执行中...",
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
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString() + "_report",
              sender: "bot",
              type: "bid_inspection_report",
              content:
                "正在为您生成《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）述标PPT》、《云南省烟草公司2024-2027年补充医疗保险服务项目（二次）述标PPT逐字稿》docx",
              timestamp: new Date(),
              data: {},
            }]);
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
      }, 1200);
      return;
    } else if (awaitingBidDocInspection && text.startsWith("[附件]")) {
      setAwaitingBidDocInspection(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在质检标书内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "核查内容完整性...", status: "loading" },
            { id: "2", text: "检查格式与排版...", status: "pending" },
            { id: "3", text: "检索敏感风险项...", status: "pending" }],
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
      }, 3000);
      setTimeout(() => {
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
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_report",
            sender: "bot",
            type: "bid_inspection_report",
            content: "企康项目投递标书质检结果",
            timestamp: new Date(),
            data: {},
          }]);
        setIsTyping(false);
      }, 4500);
      return;
    }

    if (text.includes("写一个标品营销方案") || text.includes("我要给")) {
      const matchName = text.match(/要给【?(.*?)】?写/);
      const matchBudget = text.match(/预算大概是【?([^】]+?)】?$/);
      let customerNameStr = "未知客户";
      if (matchName && matchName[1] && !matchName[1].includes("XXX")) customerNameStr = matchName[1];
      else if (text.includes("云天化")) customerNameStr = "云天化";
      
      let budgetStr = "未知预算";
      if (matchBudget && matchBudget[1] && !matchBudget[1].includes("XXX")) budgetStr = matchBudget[1];

      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在搜索客户基本信息...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "调用内部CRM获取客户画像...", status: "complete" },
            { id: "2", text: "分析所属行业", status: "loading" },
            { id: "3", text: "生成企业信息结果...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_basic_form",
            sender: "bot",
            type: "basic_info_card_form",
            content: "基本信息表单",
            timestamp: new Date(),
            data: {
              customerName: customerNameStr,
              budget: budgetStr
            }
          }]);
        setIsTyping(false);
      }, 2000);
      return;
    } else if (text.startsWith("[用户确认]")) {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在生成标品套餐选项...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg",
            sender: "bot",
            type: "package_option_card",
            content: "套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\n门诊预约协助服务*1次\n专人1V1陪诊服务*1次\n名医视频问诊*1次\n健康护航大礼包*1次\n购药优惠券*12次\n福安好物专区*不限次" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\n普通陪诊: 29省234市\n全国住院安排协助: 31省322市" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\n幽门螺旋杆菌检测1份\n肺结节居家检测服务1份" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\n家庭医生音视频咨询30分钟\n专科医生实时音视频咨询2次\n名医三方音视频咨询1年无限次\n名医门诊预约协助3次\n名医住院安排协助1次\n健康定制好礼1次\n健康送到家, 每季度一次\n专属小秘书7*12线上服务" },
                    { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\n普通陪诊*1次\n家庭医生图文问诊-主治及以下 (年度会员)\n企业健康室 (升级版)\n全额抵扣券-小药箱\n心理健康测评 不限次\n心理图文咨询 2次\n心理电话咨询 1次" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\nAED专题讲座*2小时\n平安家医图文问诊*不限次\n门诊预约协助服务*1次\n住院协助服务*1次\n名医视频问诊*3次\n专人1V1陪诊服务*3次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 1500);
      return;
    } else if (text.startsWith("[已选择套餐]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const botResMsg: Message = { id: Date.now().toString()+"_supp", sender: "bot", type: "supplementary_info_form_card", content: "补充信息卡片", timestamp: new Date(), data: { highLevelCount: 200, coreCount: 1800, baseCount: 6000, retireeRatio: "5%", activeRatio: "95%", avgAge: 35, maxAgeGroup: "30~40", maleCount: 4500, femaleCount: 3500, indoorCount: 3000, outdoorCount: 5000 } };
      setMessages(prev => [...prev, botResMsg]);
      return;
    } else if (text.startsWith("[忽略补充信息]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const botResMsg: Message = { id: Date.now().toString()+"_ask_ppt", sender: "bot", type: "text", content: "是否直接为您生成标品营销方案大纲和PPT？", timestamp: new Date() };
      setMessages(prev => [...prev, botResMsg]);
      return;
    } else if (text.startsWith("[已提交补充信息]")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在结合补充信息为您推荐更精准的套餐...",
        timestamp: new Date(),
        data: {
          title: "执行过程",
          steps: [
            { text: "思考过程", status: "loading" },
            { text: "使用 Skill：标准产品推荐", status: "pending" },
            { text: "生成套餐选项", status: "pending" }
          ]
        }
      };
      setMessages(prev => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: {
            ...m.data,
            steps: [
              { text: "思考过程", status: "done", details: "正在分析补充信息内容并提取关键要素" },
              { text: "使用 Skill：标准产品推荐", status: "loading" },
              { text: "生成套餐选项", status: "pending" }
            ]
          }
        } : m));
      }, 800);

      setTimeout(() => {
        setMessages((prev) => prev.map(m => m.id === reasoningMsgId ? {
          ...m,
          data: {
            ...m.data,
            steps: [
              { text: "思考过程", status: "done", details: "正在分析补充信息内容并提取关键要素" },
              { text: "使用 Skill：标准产品推荐", status: "done" },
              { text: "生成套餐选项", status: "done" }
            ]
          }
        } : m));
      }, 1600);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg_refined",
            sender: "bot",
            type: "package_option_card",
            content: "套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\n门诊预约协助服务*1次\n专人1V1陪诊服务*1次\n名医视频问诊*1次\n健康护航大礼包*1次\n购药优惠券*12次\n福安好物专区*不限次" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\n普通陪诊: 29省234市\n全国住院安排协助: 31省322市" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\n幽门螺旋杆菌检测1份\n肺结节居家检测服务1份" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\n家庭医生音视频咨询30分钟\n专科医生实时音视频咨询2次\n名医三方音视频咨询1年无限次\n名医门诊预约协助3次\n名医住院安排协助1次\n健康定制好礼1次\n健康送到家, 每季度一次\n专属小秘书7*12线上服务" },
                    { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\n普通陪诊*1次\n家庭医生图文问诊-主治及以下 (年度会员)\n企业健康室 (升级版)\n全额抵扣券-小药箱\n心理健康测评 不限次\n心理图文咨询 2次\n心理电话咨询 1次" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\nAED专题讲座*2小时\n平安家医图文问诊*不限次\n门诊预约协助服务*1次\n住院协助服务*1次\n名医视频问诊*3次\n专人1V1陪诊服务*3次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2400);
      return;
    } else if (text === "是" && messages.length > 0 && messages[messages.length - 1].content.includes("是否需要修改")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在重新生成营销方案PPT内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "重新分析修改需求...", status: "complete" },
            { id: "2", text: "调整PPT...", status: "loading" },
            { id: "3", text: "生成新PPT内容...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => prev.map((m) => m.id === reasoningMsgId ? {
          ...m,
          data: { ...m.data, steps: m.data.steps.map((s: any, i: number) => i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s) },
        } : m));
      }, 1500);

      setTimeout(() => {
        setMessages((prev) => prev.map((m) => m.id === reasoningMsgId ? {
          ...m,
          data: { ...m.data, steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })) },
        } : m));
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ppt_new",
            sender: "bot",
            type: "ppt_card",
            content: "新营销方案PPT",
            timestamp: new Date(),
            data: {
              title: "明道云标品营销方案PPT（优化版）",
              overview: "已根据您的要求，对营销方案PPT内容进行了优化和调整：",
              slides: [
                {
                  title: "企康助力明道云打造健康组织（优化版）",
                  bullets: ["深度剖析：互联网行业高强度工作下的健康隐患", "精准洞察：高管与核心骨干的身心健康诉求", "解决之道：系统性健康管理方案的必要性与紧迫性"]
                },
                {
                  title: "明道云专属企康保障方案（进阶版）",
                  bullets: ["方案总览：18W预算下的高性价比组合", "高管尊享绿通服务（全面解决就医痛点）", "全员健康档案建立（构建数字化管理平台）"]
                },
                {
                  title: "平安银行生态赋能（合作共赢）",
                  bullets: ["双强联手：平安健康+平安银行的品牌背书", "便捷就医：丰富的线上问诊与线下三甲网络资源", "管家服务：专职健康管家保障方案完美落地"]
                }
              ]
            }
          },
          {
            id: Date.now().toString() + "_ask_ppt_modify_new",
            sender: "bot",
            type: "text",
            content: "PPT内容已生成完毕。是否需要修改？（输入“是”或“否”）",
            timestamp: new Date(),
          }
        ]);
        setIsTyping(false);
      }, 3000);
      return;
    } else if (text === "否" && messages.length > 0 && messages[messages.length - 1].content.includes("是否需要修改")) {
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      setMessages((prev) => [...prev, { id: Date.now().toString() + "_ok", sender: "bot", type: "text", content: "好的，已为您保存当前PPT内容，您可以直接使用或导出。", timestamp: new Date() }]);
      return;
    } else if (text.startsWith("[生成方案]")) {
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在生成营销方案PPT内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "提取已选套餐内容...", status: "complete" },
            { id: "2", text: "调用行业标品PPT模板...", status: "loading" },
            { id: "3", text: "生成定制化PPT内容...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ppt",
            sender: "bot",
            type: "ppt_card",
            content: "营销方案PPT",
            timestamp: new Date(),
            data: {
              title: "明道云标品营销方案PPT",
              overview: "根据明道云所处软件/互联网行业特性及18W预算，结合您选择的推荐套餐，我们为您生成了以下健康保障营销方案PPT内容，您可以直接预览各页内容：",
              slides: [
                {
                  title: "企康助力明道云打造健康组织",
                  bullets: ["互联网行业面临的亚健康挑战", "高管与核心骨干的身心健康诉求", "系统性健康管理方案的必要性"]
                },
                {
                  title: "明道云专属企康保障方案",
                  bullets: ["方案总览：18W预算下的最优解", "高管尊享绿通服务（解决就医痛点）", "全员健康档案建立（系统性管理起点）"]
                },
                {
                  title: "平安银行生态赋能",
                  bullets: ["平安健康+平安银行的品牌背书", "便捷的线上问诊与线下三甲网络", "专职健康管家服务保障落地"]
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2500);
      return;
    } else if (text === "[重新推荐]") {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask_more",
            sender: "bot",
            type: "text",
            content: "请问您对套餐有哪些进一步的需求或调整建议？",
            timestamp: new Date()
          }
        ]);
        setAwaitingNewPkg(true);
        setIsTyping(false);
      }, 500);
      return;
    } else if (text.startsWith("[确认基本信息]")) {
      // DO NOT add user message to hide it
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在匹配推荐套餐...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "分析基本信息与痛点...", status: "complete" },
            { id: "2", text: "匹配标品套餐选项...", status: "loading" },
            { id: "3", text: "生成套餐卡片...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg",
            sender: "bot",
            type: "package_option_card",
            content: "推荐标品套餐选项",
            timestamp: new Date(),
            data: {}
          }
        ]);
        setIsTyping(false);
      }, 2000);
      return;
    } else if (awaitingNewPkg && text) {
      setAwaitingNewPkg(false); setPkgRetryCount(prev => prev + 1);
      const newUserMsg: Message = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在根据新需求调整套餐...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "分析新的套餐需求...", status: "complete" },
            { id: "2", text: "重新匹配标品套餐...", status: "loading" },
            { id: "3", text: "生成新套餐卡片...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, i: number) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
      }, 1000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg_new",
            sender: "bot",
            type: "package_option_card",
            content: "推荐标品套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\n门诊预约协助服务*1次\n专人1V1陪诊服务*1次\n名医视频问诊*1次\n健康护航大礼包*1次\n购药优惠券*12次\n福安好物专区*不限次" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\n普通陪诊: 29省234市\n全国住院安排协助: 31省322市" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\n幽门螺旋杆菌检测1份\n肺结节居家检测服务1份" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\n家庭医生音视频咨询30分钟\n专科医生实时音视频咨询2次\n名医三方音视频咨询1年无限次\n名医门诊预约协助3次\n名医住院安排协助1次\n健康定制好礼1次\n健康送到家, 每季度一次\n专属小秘书7*12线上服务" },
                    { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\n普通陪诊*1次\n家庭医生图文问诊-主治及以下 (年度会员)\n企业健康室 (升级版)\n全额抵扣券-小药箱\n心理健康测评 不限次\n心理图文咨询 2次\n心理电话咨询 1次" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\nAED专题讲座*2小时\n平安家医图文问诊*不限次\n门诊预约协助服务*1次\n住院协助服务*1次\n名医视频问诊*3次\n专人1V1陪诊服务*3次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 2000);
      return;
    } else if (awaitingStProductInfo && text.startsWith("[附件]")) {
      setAwaitingStProductInfo(false);
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
        content: "正在解析附件内容并设计交互卡片...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "提取基本信息...", status: "loading" },
            { id: "2", text: "生成询问与补充信息...", status: "pending" },
            { id: "3", text: "匹配标准套餐选项...", status: "pending" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 0 ? { ...s, status: "complete" } : i === 1 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_basic",
            sender: "bot",
            type: "basic_info_card",
            content: "基本信息已提取",
            timestamp: new Date(),
            data: {
              customerName: "云南烟草集团",
              employeeCount: "8000+ 人",
              budget: "600-800 万元",
              requirement: "员工补充医疗保障、健康管理中台及高管健康绿通服务"
            }
          }
        ]);
      }, 1500);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s, i) =>
                      i === 1 ? { ...s, status: "complete" } : i === 2 ? { ...s, status: "loading" } : s
                    ),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_sup",
            sender: "bot",
            type: "supplementary_info_card",
            content: "已捕获并记录您的补充需求：",
            timestamp: new Date(),
            data: {
              text: "系统已自动记录需求细节并完善产品匹配模型。",
              supplementary: [
                "已选择：高管尊享绿通服务",
                "附加要求：需确保当地三甲医院100%覆盖",
                "附加要求：心理EAP服务需覆盖全体一线员工"
              ]
            }
          }
        ]);
      }, 3000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s) => ({ ...s, status: "complete" })),
                  },
                } : m
          )
        );
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_pkg",
            sender: "bot",
            type: "package_option_card",
            content: "套餐选项",
            timestamp: new Date(),
            data: {
              packages: [
                {
                  id: "pkg1",
                  name: "基础健康保障版",
                  products: [
                    { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\n门诊预约协助服务*1次\n专人1V1陪诊服务*1次\n名医视频问诊*1次\n健康护航大礼包*1次\n购药优惠券*12次\n福安好物专区*不限次" },
                    { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\n普通陪诊: 29省234市\n全国住院安排协助: 31省322市" },
                    { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\n幽门螺旋杆菌检测1份\n肺结节居家检测服务1份" }
                  ],
                  sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
                },
                {
                  id: "pkg2",
                  name: "全场景黑金尊享版",
                  isRecommended: true,
                  products: [
                    { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\n家庭医生音视频咨询30分钟\n专科医生实时音视频咨询2次\n名医三方音视频咨询1年无限次\n名医门诊预约协助3次\n名医住院安排协助1次\n健康定制好礼1次\n健康送到家, 每季度一次\n专属小秘书7*12线上服务" },
                    { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                    { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\n普通陪诊*1次\n家庭医生图文问诊-主治及以下 (年度会员)\n企业健康室 (升级版)\n全额抵扣券-小药箱\n心理健康测评 不限次\n心理图文咨询 2次\n心理电话咨询 1次" }
                  ],
                  sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
                },
                {
                  id: "pkg3",
                  name: "高管特权定制版",
                  products: [
                    { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                    { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 800).toLocaleString() + "元", unit: "人/年" },
                    { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\nAED专题讲座*2小时\n平安家医图文问诊*不限次\n门诊预约协助服务*1次\n住院协助服务*1次\n名医视频问诊*3次\n专人1V1陪诊服务*3次" }
                  ],
                  sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
                }
              ]
            }
          }
        ]);
        setIsTyping(false);
      }, 4500);
      return;
    }

    if (text === "#材料审查#") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“材料审查”技能",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAwaitingMaterialReview(true);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_ask",
            sender: "bot",
            type: "text",
            content: "请点击下方“附件”按钮，上传待审查的材料文件。",
            timestamp: new Date(),
          }]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingMaterialReview && text.startsWith("[附件]")) {
      setAwaitingMaterialReview(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在智能审查材料内容...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "提取资质文件信息...", status: "loading" },
            { id: "2", text: "验证合同与发票要件...", status: "pending" },
            { id: "3", text: "评估整体合规性...", status: "pending" }],
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
      }, 3000);
      setTimeout(() => {
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
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_report",
            sender: "bot",
            type: "material_review_report",
            content: "企康项目材料智能审查结论",
            timestamp: new Date(),
            data: {},
          }]);
        setIsTyping(false);
      }, 4500);
      return;
    }

    if (awaitingMeetingTarget) {
      setAwaitingMeetingTarget(false);
      setInputValue("");

      const isCEO =
        text.includes("张总") ||
        text.includes("CEO") ||
        text.includes("董事长");

      const newUserMsg: Message = {
        id: Date.now().toString(),
        sender: "user",
        type: "text",
        content: displayTitle || text,
        timestamp: new Date(),
      };

      const reasoningMsgId = (Date.now() + 1).toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "会议已挂断，正在为您生成会议纪要",
        timestamp: new Date(),
        data: {
          steps: [{ text: "正在提取会议关键信息...", status: "loading" }],
        },
      };
      setMessages((prev) => [
        ...prev.filter((m) => m.type !== "meeting_in_progress"),
        newUserMsg,
        reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "正在提取会议关键信息...", status: "done" },
                      {
                        text: "正在【同步至CRM系统】并生成纪要卡片...",
                        status: "done",
                      },
                      { text: "会议纪要同步完成。", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const meetingMsg: Message = {
          id: (Date.now() + 2).toString(),
          sender: "bot",
          type: "meeting_card",
          content: "会议纪要已同步至CRM系统，并为您生成了纪要卡片。",
          timestamp: new Date(),
          data: {
            title: "云南烟草集团 - 客户拜访会议",
            date: "2026-04-24 14:00",
            attendees: isCEO
              ? ["刘明广 (HRD)", "客户经理-李经理"]
              : ["HRD-李总", "客户经理-李经理", "产品经理-肖姣"],
            keyPoints: isCEO
              ? [
                  "李总高度认可全球化战略下核心高管的健康保障刚需，提出要构建涵盖海内外的“医疗生命线”。",
                  "对于企康提出的“1+X定制体检与MDT多科会诊”，特别赞赏其北医体系的专业背书。",
                  "要求不仅解决就医通道问题，更为庞大的研发工程师队伍引入体系化的减重与心理压力疏导（EAP）。"]
              : [
                  "认可健康保障计划覆盖范围",
                  "关注理赔流程便捷性",
                  "需提供理赔操作指南"],
            tactics: isCEO
              ? `【客户维系建议】：
1. 产品触达：在日常沟通中，结合客户需求与场景，适度推荐公司的重点/金牌产品信息，提升客户认知与兴趣；
2. 体验运营：定期邀请客户参与健康管理相关的线下体验活动（如体检升级、健康讲座、沙龙等），增强互动与信任；
3. 节日关怀：在关键节假日主动进行关怀触达，通过定制化问候与关怀内容，持续维护客户关系。`
              : `【客户维系建议】：
1. 产品触达：在日常沟通中，结合客户需求与场景，适度推荐公司的重点/金牌产品信息，提升客户认知与兴趣；
2. 体验运营：定期邀请客户参与健康管理相关的线下体验活动（如体检升级、健康讲座、沙龙等），增强互动与信任；
3. 节日关怀：在关键节假日主动进行关怀触达，通过定制化问候与关怀内容，持续维护客户关系。`,
            todos: isCEO
              ? [
                  {
                    task: "协调北大医疗专家出具高管专属服务白皮书",
                    assignee: "李经理",
                    deadline: "2026-05-11",
                  },
                  {
                    task: "形成云南烟草全球化外派员工紧急救援方案指引",
                    assignee: "梁华耀",
                    deadline: "2026-05-12",
                  }]
              : [
                  {
                    task: "准备理赔操作指南",
                    assignee: "肖姣",
                    deadline: "2026-05-11",
                  },
                  {
                    task: "安排理赔管家演示",
                    assignee: "梁华耀",
                    deadline: "2026-05-12",
                  },
                  {
                    task: "跟进下次会议邀约",
                    assignee: "李经理",
                    deadline: "2025-05-13",
                  }],
            cloudDocs: [
              {
                name: "云南烟草集团 - 首次客户拜访会议纪要 - 20260424",
                url: "#",
              }],
            syncStatus: "已同步至 CRM",
            todoStatus: "待办已发送",
          },
        };
        setMessages((prev) => [...prev, meetingMsg]);
        setIsTyping(false);
        if (onMeetingCompleted) onMeetingCompleted();
      }, 2000);
      return;
    } else if (text === "跳转群组") {
      if (onChatChange) {
        onChatChange("maotai_prep");
      }
      return;
    }

    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      type: "text",
      content: displayTitle || text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    // AI Response logic
    setTimeout(() => {
      generateBotResponse(text);
    }, 1000);
  };

  const generateBotResponse = (text: string) => {
    setIsTyping(true);

    if (awaitingSurveyClient) {
      setAwaitingSurveyClient(false);
      if (text.includes("云南烟草")) {
        const reasoningMsgId = Date.now().toString();
        const reasoningMsg: Message = {
          id: reasoningMsgId,
          sender: "bot",
          type: "reasoning",
          content: "客户洞察专家已识别目标客户，为您执行详细信息概括分析...",
          timestamp: new Date(),
          data: {
            steps: [{ text: "信息挖掘中...", status: "loading" }],
          },
        };
        setMessages((prev) => [...prev, reasoningMsg]);
        setIsTyping(false);

        setTimeout(() => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === reasoningMsgId
                ? {
                    ...m,
                    data: {
                      steps: [{ text: "信息挖掘中...", status: "done" }],
                    },
                  }
                : m,
            ),
          );
          const reportMsg: Message = {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            type: "survey_report",
            content: `云南烟草基本情况最新调研报告：`,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, reportMsg]);
        }, 1500);
      }
      return;
    }

    // 1. 领商机阶段
    if (
      text.includes("我可以领取的商机") ||
      text.includes("领商机") ||
      text.includes("高匹配度商机")
    ) {
      if (onStageChange) onStageChange("领商机");
      setIsLeadClaimed(true);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您调用**领商机（opportunity）**技能",
        timestamp: new Date(),
        data: {
          steps: [{ text: "正在调取企康客户分配标准...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      // Removed show-right-panel dispatch as requested

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "正在调取企康客户分配标准...", status: "done" },
                      { text: "🔍 步骤1：能力匹配判断", status: "loading" },
                      { text: "🎯 步骤2：战略契合判断", status: "loading" },
                      { text: "💰 步骤3：商机价值评估", status: "loading" },
                      { text: "⏳ 步骤4：投入与周期评估", status: "loading" },
                      { text: "🤝 步骤5：合作基础分析", status: "loading" },
                      { text: "📊 优先级判断结论", status: "loading" }],
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
                    steps: [
                      { text: "正在调取企康客户分配标准...", status: "done" },
                      { text: "✅ 步骤1：能力匹配判断", status: "done" },
                      { text: "✅ 步骤2：战略契合判断", status: "done" },
                      { text: "✅ 步骤3：商机价值评估", status: "done" },
                      { text: "✅ 步骤4：投入与周期评估", status: "done" },
                      { text: "✅ 步骤5：合作基础分析", status: "done" },
                      { text: "✅ 优先级判断结论", status: "done" },
                      {
                        text: "分析完成，为您推荐以下高优商机。",
                        status: "done",
                      }],
                  },
                }
              : m,
          ),
        );

        const leadCardMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "lead_card_list",
          content: "为您匹配到5个高质量商机",
          timestamp: new Date(),
          data: {
            leads: [
              {
                id: 1,
                title: "云南烟草集团企业健康管理项目",
                company: "云南烟草集团",
                location: "北京",
                budget: "600万",
                score: 98,
                dimensions: [
                  { label: "地域", value: "北京", match: true },
                  { label: "行业", value: "IT科技", match: true },
                  { label: "预算", value: "¥600万", match: true },
                  { label: "任务缺口匹配", value: "全员体检", match: true }],
                tags: [
                  "大型战略客户",
                  "高匹配度",
                  "高价值潜力",
                  "中长周期",
                  "多区域合作机会"],
                onSelect: () => {
                  if (onChatChange) onChatChange("maotai");
                },
              },
              {
                id: 2,
                title: "百度集团员工EAP心理援助计划",
                company: "百度集团",
                location: "北京",
                budget: "260万",
                score: 85,
                dimensions: [
                  { label: "地域", value: "北京", match: true },
                  { label: "行业", value: "互联网", match: true },
                  { label: "预算", value: "¥260万", match: true },
                  { label: "任务缺口匹配", value: "心理援助", match: true }],
                tags: [
                  "互联网行业巨头",
                  "员工心理关怀强需",
                  "大型科技集团",
                  "中周期稳步推进",
                  "深度属地协同"],
              },
              {
                id: 3,
                title: "小米科技全国园区体检统筹项目",
                company: "小米科技",
                location: "北京",
                budget: "850万",
                score: 92,
                dimensions: [
                  { label: "地域", value: "北京", match: true },
                  { label: "行业", value: "高科技制造", match: true },
                  { label: "预算", value: "¥850万", match: true },
                  { label: "任务缺口匹配", value: "全员体检", match: true }],
                tags: [
                  "高科技制造头部",
                  "数字化能力匹配",
                  "大型总部客户",
                  "长周期精细化",
                  "全国联动潜力"],
              },
              {
                id: 4,
                title: "滴滴出行司机群体健康保障方案",
                company: "滴滴出行",
                location: "北京",
                budget: "1200万",
                score: 78,
                dimensions: [
                  { label: "地域", value: "北京", match: true },
                  { label: "行业", value: "出行服务", match: true },
                  { label: "预算", value: "¥1200万", match: true },
                  { label: "任务缺口匹配", value: "灵活就业保障", match: true }],
                tags: [
                  "灵活就业新生态",
                  "定制化保障高配",
                  "全域型大客户",
                  "中短周期协同",
                  "深度渗透潜力"],
              },
              {
                id: 5,
                title: "腾讯云(北京)管理层补充医疗计划",
                company: "腾讯云",
                location: "北京",
                budget: "400万",
                score: 88,
                dimensions: [
                  { label: "地域", value: "北京", match: true },
                  { label: "行业", value: "云计算", match: true },
                  { label: "预算", value: "¥400万", match: true },
                  { label: "任务缺口匹配", value: "高端补充医疗", match: true }],
                tags: [
                  "高管福利定制标杆",
                  "补充医疗强刚需",
                  "大型高端客户",
                  "短周期快速见效",
                  "重点区域深耕"],
              }],
          },
        };
        setMessages((prev) => [...prev, leadCardMsg]);
        setIsTyping(false);
      }, 3000);
      return;
    } else if (text.includes("认领")) {
      if (onStageChange) onStageChange("领商机");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在执行商机认领流程",
        timestamp: new Date(),
        data: {
          steps: [{ text: "正在验证商机状态...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "正在验证商机状态...", status: "done" },
                      {
                        text: "自动调用领取商机完成后台数据打标...",
                        status: "loading",
                      }],
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
                    steps: [
                      { text: "正在验证商机状态...", status: "done" },
                      {
                        text: "自动调用领取商机完成后台数据打标...",
                        status: "done",
                      },
                      {
                        text: "认领成功，已进入您的跟进列表。",
                        status: "done",
                      }],
                  },
                }
              : m,
          ),
        );

        const executionCard: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "lead_execution",
          content: "",
          timestamp: new Date(),
          data: {
            skillName: "领取商机",
            status: "执行完成",
            details: [
              {
                label: "商机名称",
                value:
                  text
                    .replace("认领", "")
                    .replace("帮我认领指定商机", "")
                    .trim() || "云南烟草集团企业健康管理项目",
              },
              { label: "认领时间", value: new Date().toLocaleString() },
              { label: "状态", value: "已认领 -> 进入跟进流程" },
              {
                label: "CRM标签",
                value:
                  "大型战略客户-高匹配度-高价值潜力-中长周期-多区域合作机会",
              }],
            nextStep: "建议下一步：调用“情报侦察兵”查看客户深度档案。",
            actionButton: {
              label: "跳转群聊",
              onClick: () => {
                if (onLeadClaimed) onLeadClaimed();
                if (onChatChange) onChatChange("maotai");
              },
            },
          },
        };
        setMessages((prev) => [...prev, executionCard]);
        setIsTyping(false);
        if (onLeadClaimed) onLeadClaimed();
      }, 2000);
      return;
    } else if (
      text.includes("生成云南烟草集团的客户画像") ||
      text.includes("#客户信息调研#") ||
      text.includes("基本情况调研")
    ) {
      if (onStageChange) onStageChange("看档案");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“客户信息调研技能”",
        timestamp: new Date(),
        data: {
          steps: [{ text: "提取多维结构化数据...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "提取多维结构化数据...", status: "done" },
                      { text: "分析企业性质...", status: "loading" }
                    ],
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
                    steps: [
                      { text: "提取多维结构化数据...", status: "done" },
                      { text: "分析企业性质...", status: "done" },
                      { text: "分析行业...", status: "done" },
                      { text: "分析组织结构...", status: "done" },
                      { text: "分析人员规模...", status: "done" },
                      { text: "分析性别结构...", status: "done" },
                      { text: "分析工种结构...", status: "done" },
                      { text: "分析人均预算...", status: "done" },
                      { text: "分析地域特点...", status: "done" },
                      { text: "生成客户画像报告...", status: "loading" }
                    ],
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
                    steps: [
                      { text: "提取多维结构化数据...", status: "done" },
                      { text: "分析企业性质...", status: "done" },
                      { text: "分析行业...", status: "done" },
                      { text: "分析组织结构...", status: "done" },
                      { text: "分析人员规模...", status: "done" },
                      { text: "分析性别结构...", status: "done" },
                      { text: "分析工种结构...", status: "done" },
                      { text: "分析人均预算...", status: "done" },
                      { text: "分析地域特点...", status: "done" },
                      { text: "生成客户画像报告...", status: "done" }
                    ],
                  },
                }
              : m,
          ),
        );
        const reportMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "customer_portrait_card",
          content: "为您生成云南烟草集团概览画像",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reportMsg]);
      }, 2500);
      return;
} else if (
      text.includes("#关键决策人分析#") ||
      text.includes("关键决策人分析")
    ) {
      if (onStageChange) onStageChange("看档案");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“关键决策人分析技能”",
        timestamp: new Date(),
        data: {
          steps: [
            { text: "调用“关键决策人分析技能”...", status: "done" },
            { text: "提取多维高管履历信息...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      {
                        text: "正确命中【关键决策人分析】技能...",
                        status: "done",
                      },
                      { text: "提取多维高管履历信息...", status: "done" },
                      { text: "生成决策链图谱分析...", status: "loading" }],
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
                    steps: [
                      {
                        text: "正确命中【关键决策人分析】技能...",
                        status: "done",
                      },
                      { text: "提取多维高管履历信息...", status: "done" },
                      { text: "生成决策链图谱分析...", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const reportMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "decision_makers_report",
          content: `【云南烟草】关键决策人分析报告`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reportMsg]);
      }, 3500);
      return;
    } else if (
      text.includes("调研") ||
      text.includes("背景档案") ||
      text.includes("情报报告") ||
      text.includes("档案") ||
      text.includes("背景报告") ||
      text.includes("查档案") ||
      text.includes("情报侦察兵") ||
      text.includes("请给我一份云南烟草的全面的背景报告")
    ) {
      if (onStageChange) onStageChange("看档案");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您调用**情报侦察兵（profile）**技能",
        timestamp: new Date(),
        data: {
          steps: [{ text: "正在调用【情报侦察兵】...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "正在调用【情报侦察兵】...", status: "done" },
                      {
                        text: "聚合多类外部信息工具，提取背景数据...",
                        status: "loading",
                      }],
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
                    steps: [
                      { text: "正在调用【情报侦察兵】...", status: "done" },
                      {
                        text: "聚合多类外部信息工具，提取背景数据...",
                        status: "done",
                      },
                      {
                        text: "按企康客户档案标准维度输出结构化报告...",
                        status: "loading",
                      }],
                  },
                }
              : m,
          ),
        );
      }, 3000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "正在调用【情报侦察兵】...", status: "done" },
                      {
                        text: "聚合多类外部信息工具，提取背景数据...",
                        status: "done",
                      },
                      {
                        text: "按企康客户档案标准维度输出结构化报告...",
                        status: "done",
                      },
                      { text: "报告生成完成。", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const reportMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "report_card",
          content:
            "客户洞察专家自动深入调研客户背景，并为您生成了一份详细的结构化情报报告：",
          timestamp: new Date(),
          data: {
            title: "云南烟草集团 - 全面背景报告",
            overview:
              "云南烟草集团是云南烟草集团在中国的核心运营主体，主要从事个人电脑、智能设备、基础设施及相关IT服务的研发、生产与销售。作为全球领先的科技企业，云南烟草不仅在PC市场占据全球第一的份额，近年来也在积极向智能化、云服务和企业级解决方案转型。",
            metrics: [
              { label: "客户名称", value: "云南烟草" },
              { label: "注册资本", value: "25000 万港币" },
              { label: "成立日期", value: "1992-12-24" },
              { label: "企业类型", value: "外商投资企业" },
              { label: "人员规模", value: "70000+人(全球)" }],
            executives: [
              {
                name: "张总",
                title: "董事长兼CEO",
                background: "云南烟草集团核心掌舵人，推动云南烟草全球化和智能化转型。",
              },
              {
                name: "刘军",
                title: "执行副总裁",
                background: "云南烟草中国区总裁，负责中国区业务及“日出东方”战略。",
              }],
            details: [
              {
                label: "行业与竞争格局",
                value:
                  "ICT设备和IT服务行业竞争激烈。云南烟草在PC端面临惠普、戴尔的竞争，智能设备端和基础设施端面临华为、浪潮等国内巨头的挤压。云南烟草通过“端-边-云-网-智”新IT架构构筑竞争护城河。",
              },
              {
                label: "业务结构分析",
                value:
                  "传统PC业务提供稳定营收和利润；基础设施方案（ISG）和方案服务（SSG）作为第二增长曲线快速增长，特别是AI服务器和企业级运维服务。",
              },
              {
                label: "员工画像与特征",
                value:
                  "员工群体庞大且类型多样，包括研发工程师、销售人员、产线工人等。核心研发与管理团队工作强度大、经常熬夜及跨国出差。员工整体呈高学历、年轻化、关注自身身心健康等特点。",
              },
              {
                label: "人力资源痛点",
                value:
                  "不同序列员工健康风险差异大，统包统配的体检方案难以满足个性化需求；外派和跨国员工医疗保障繁琐；缺乏针对高管亚健康的长期干预体系。",
              },
              {
                label: "营销与数字化策略",
                value: "全面All in AI，推动AI PC普及，加速企业数智化转型服务。",
              },
              {
                label: "财务与经营分析",
                value:
                  "营收稳健，现金流充裕。随着SSG业务占比提升，整体利润率改善。具备为高质量员工福利买单的能力和意愿。",
              },
              {
                label: "企业文化与价值观",
                value:
                  "奉行“说到做到，尽心尽力”，强调创新和员工关怀。注重ESG（环境、社会和公司治理），将员工福祉作为核心考量。",
              },
              {
                label: "未来机会与增长点",
                value:
                  "随着“健康中国2030”战略推进，企业对员工健康的重视度达到新高度；数字化福利平台需求爆发。",
              },
              {
                label: "商机洞察（重点）",
                value: `1. 分层健康管理计划：为高管及核心研发团队提供“黑金”级别私家医生及海外就医绿通服务。
2. 驻场及线上问诊服务：为庞大的产线及常驻办公区员工提供便捷医疗服务。
3. EAP心理援助：针对高压工作人群，提供职场心理健康支持与干预。`,
              },
              {
                label: "结论与建议",
                value:
                  "云南烟草（北京）对员工健康福利提升有刚性预算且诉求明确。建议以“定制化、数字化员工健康管理中台”为切入点，打通体检、医疗、保险闭环，优先主推“高管及研发骨干专属检后管理+绿通”。",
              }],
            ownership: [
              { name: "云南烟草集团（Tobacco Group）", percentage: 100 }],
          },
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 4500);
      return;
    } else if (
      text.includes("与云南烟草历史合作") ||
      text.includes("与云南烟草合作历史") ||
      text.includes("历史合作分析")
    ) {
      if (onStageChange) onStageChange("定制策略");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“历史合作分析”技能",
        timestamp: new Date(),
        data: {
          steps: [{ text: "调用“历史合作分析”技能...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "调用“历史合作分析”技能...", status: "done" },
                      {
                        text: "生成历史合作与产品覆盖深度分析报告",
                        status: "loading",
                      }],
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
                    steps: [
                      { text: "调用“历史合作分析”技能...", status: "done" },
                      {
                        text: "生成历史合作与产品覆盖深度分析报告",
                        status: "done",
                      }],
                  },
                }
              : m,
          ),
        );

        const reportMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "history_cooperation_report",
          content: "【云南烟草】历史合作与产品覆盖深度分析报告",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 3500);
      return;
    } else if (
      text.includes("市场分析") ||
      text.includes("策略建议") ||
      text.includes("产品适配") ||
      text.includes("定策略") ||
      text.includes("定制策略") ||
      text.includes("为云南烟草制定产品匹配与机会评估方案")
    ) {
      if (onStageChange) onStageChange("定制策略");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您调用**市场分析（strategy）**技能",
        timestamp: new Date(),
        data: {
          steps: [
            {
              text: "遵循企康策略制定标准，触发市场分析...",
              status: "loading",
            }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      {
                        text: "遵循企康策略制定标准，触发市场分析...",
                        status: "done",
                      },
                      {
                        text: "分步调用客户画像、产品能力库、竞品对比...",
                        status: "loading",
                      }],
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
                    steps: [
                      {
                        text: "遵循企康策略制定标准，触发市场分析...",
                        status: "done",
                      },
                      {
                        text: "分步调用客户画像、产品能力库、竞品对比...",
                        status: "done",
                      },
                      {
                        text: "生成符合规范的策略建议报告...",
                        status: "loading",
                      }],
                  },
                }
              : m,
          ),
        );
      }, 3000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      {
                        text: "遵循企康策略制定标准，触发市场分析...",
                        status: "done",
                      },
                      {
                        text: "分步调用客户画像、产品能力库、竞品对比...",
                        status: "done",
                      },
                      { text: "生成符合规范的策略建议报告...", status: "done" },
                      { text: "策略方案生成完成。", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const strategyMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "strategy_card",
          content:
            "为您生成了一份全面的策略建议报告，包含行业趋势、痛点洞察与产品适配评分：",
          timestamp: new Date(),
          data: {
            title: "云南烟草集团 - 策略建议报告",
            swot: {
              strengths: ["已有合作基础", "专属服务团队"],
              weaknesses: ["互联网大厂经验需加强", "针对高管专属资源有待验证"],
              opportunities: ["云南烟草AI PC战略升级", "企业健康管理市场增长"],
              threats: ["其他大平台抢占服务", "预算可能受行业影响"],
            },
            industryTrends: [
              "AI重塑工作模式",
              "核心人才留存压力大",
              "注重ESG和ESG评级"],
            competitors: [
              {
                name: "爱康集团",
                advantage: "体检/健康管理头部机构",
                threat: "体检入口垄断, 存量客户关系",
              },
              {
                name: "通用技术国中康健",
                advantage: "央国企/医院体系健康管理平台",
                threat: "医疗权威性, 政企关系资源",
              }],
            painPoints: [
              "全球供应链节点复杂，成本控制压力大",
              "多元业务线协同效率有待提升",
              "高管团队频受亚健康困扰，风险加剧"],
            adaptabilityScore: 92,
            products: [
              {
                name: "企业医务室管理与名医上门",
                reason: "匹配云南烟草大规模产线及办公园区",
                matchScore: 98,
                pitch: `【痛点切入】“咱们云南烟草各园区的研发和产线员工规模庞大，日常面临的小毛小病或突发不适，往往因为工作繁忙顾不上就医，导致亚健康和慢病积压。”
【方案价值】“平安企康可提供定制化的『企业医务室管理』，辅以『名医上门』和『治疗/护理上门』服务。让员工在园区内就能获得基础诊疗和开药服务。不仅如此，我们还可以安排三甲医院专家定期到企坐诊，真正做到小病不出园区，大幅提升员工满意度和出勤效率。”
【差异化优势】“依托北大国际医疗中心等超3000人专家网络，结合平安的驻场运营体系，我们的企业医务室不是药柜，而是有医生、有设备、能慢病管理的微型医院。”`,
              },
              {
                name: "1+X定制体检与MDT多科会诊",
                reason: "解决高管及核心骨干复杂健康问题",
                matchScore: 96,
                pitch: `【痛点切入】“针对咱们的高管和核心研发骨干，高强度的工作伴随着复杂的健康隐患，普通的统包体检往往查出问题却缺少后续干预，遇上疑难杂症更是求医无门。”
【方案价值】“我们可以升级为『1+X定制体检』：1个标准套餐加上X个自选项目，满足个性化需求。最关键的是『检后闭环』：对于重大异常，我们将启动『专业二诊意见』及『MDT多科会诊』。组织心外科、肿瘤内科等多学科专家共同会诊，确保拿出的方案最权威、最精准。”
【差异化优势】“我们不是卖体检，我们是提供一救到底的医疗保障。从体检到复诊，再到MDT确诊，全流程由北大医疗体系支撑。”`,
              },
              {
                name: "全球急难救援与高端海外就医",
                reason: "契合云南烟草全球化战略与驻外人员保障",
                matchScore: 94,
                pitch: `【痛点切入】“随着云南烟草全球化业务深化，大量高管出海、跨国驻派，面临异国他乡突发疾病无法及时就医的风险，这类群体是公司最宝贵的资产。”
【方案价值】“我们可以提供覆盖公务、旅行、留学的『全地域、全场景全球急难救援（Anywhere/Anytime）』服务，包含医疗事故、交通意外的秒级响应和直升机救援。对于长期海外驻派高管，我们支持『高端海外就医』，提供体检、二诊、医疗翻译陪诊一条龙服务。”
【差异化优势】“7x24全天候双语响应，无论在全球哪个角落，只要员工有需要，平安企康的百项标准救援服务能够实现‘一救到底’。”`,
              },
              {
                name: "EAP心理咨询与专属体重管理",
                reason: "缓解高压员工心理及亚健康积压",
                matchScore: 90,
                pitch: `【痛点切入】“IT行业高强度带来的长远问题是失眠、焦虑和超重。单纯的身体检查无法解决这些痛点。”
【方案价值】“我们引入了『国家体重管理行动』匹配的会员制减重服务，提供1V1真人解答和司美格鲁肽减肥包，联动智能穿戴设备进行数据追踪；同时配有专业的心理咨询服务模块。”`,
              }],
            actions: [
              "第一步：联系HR及福利采购团队对接初步需求",
              "第二步：准备平安企康产品定制化演示Demo",
              "第三步：跟进反馈，邀请参与高管健康研讨沙龙"],
          },
        };
        setMessages((prev) => [...prev, strategyMsg]);
        setIsTyping(false);
      }, 4500);
      return;
    } else if (text.includes("合规性检查")) {
      if (onStageChange) onStageChange("招投标");
      setAwaitingComplianceUpload(true);
      const complianceMsg: Message = {
        id: Date.now().toString(),
        sender: "bot",
        type: "text",
        content:
          "好的，我将为您进行标书合规性检查。请确认核心内容已完整，并点击输入框上方的附件按钮上传需要检查的标书文件（支持 .pdf, .docx 格式）。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, complianceMsg]);
      setIsTyping(false);
      return;
    } else if (
      text.includes("投标") ||
      (text.includes("标书") &&
        !text.includes("合规性检查") &&
        !text.includes("商务标书_云南烟草项目_v1.0.pdf")) ||
      text.includes("倒排时间") ||
      text.includes("招投标") ||
      text.includes("招标助手")
    ) {
      if (onStageChange) onStageChange("招投标");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您调用**招标助手**",
        timestamp: new Date(),
        data: {
          steps: [
            {
              text: "生成【内部】云南烟草集团 - 招投标交流群...",
              status: "loading",
            }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      {
                        text: "生成【内部】云南烟草集团 - 招投标交流群...",
                        status: "done",
                      },
                      { text: "邀请相关负责人进入群聊...", status: "loading" }],
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
                    steps: [
                      {
                        text: "生成【内部】云南烟草集团 - 招投标交流群...",
                        status: "done",
                      },
                      { text: "邀请相关负责人进入群聊...", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const bidMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "text",
          content:
            "已为您生成“【内部】云南烟草集团 - 招投标交流群”，并已将相关负责人（李经理、肖姣、梁华耀、梁镇宁）拉入群聊。请点击下方按钮进入群聊进行招投标事项交流。",
          timestamp: new Date(),
          data: {
            isBidGroupLink: true,
          },
        };
        setMessages((prev) => [...prev, bidMsg]);

        if (onBidCompleted) onBidCompleted();
      }, 3000);
      return;
    } else if (
      text.includes("筹备") ||
      text.includes("推荐方案") ||
      text.includes("做准备")
    ) {
      if (onStageChange) onStageChange("做准备");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您调用**筹备讨论助理**",
        timestamp: new Date(),
        data: {
          steps: [
            {
              text: "依照企康营销筹备标准，调用筹备讨论助理自动建群...",
              status: "loading",
            }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      {
                        text: "依照企康营销筹备标准，调用筹备讨论助理自动建群...",
                        status: "done",
                      },
                      {
                        text: "正在拉取相关负责人：肖姣 (产品经理)、梁镇宁、梁华耀...",
                        status: "done",
                      },
                      { text: "筹备组已创建完成。", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const prepCardMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "prep_card",
          content:
            "已为您创建“云南烟草健康管理推荐方案筹备组”，并拉入了相关负责人。",
          timestamp: new Date(),
          data: {
            title: "云南烟草健康管理推荐方案筹备组",
            members: [
              {
                name: "肖姣",
                role: "产品经理",
                avatar: "https://picsum.photos/seed/xj/100/100",
              },
              {
                name: "梁镇宁",
                role: "技术专家",
                avatar: "https://picsum.photos/seed/lzn/100/100",
              },
              {
                name: "梁华耀",
                role: "服务团队",
                avatar: "https://picsum.photos/seed/lhy/100/100",
              }],
            status: "已创建",
            actionButton: {
              label: "进入群聊",
              onClick: () => {
                if (onPrepCompleted) onPrepCompleted();
                if (onChatChange) onChatChange("maotai_prep");
              },
            },
          },
        };
        setMessages((prev) => [...prev, prepCardMsg]);
        if (addMessageToChat) {
          addMessageToChat("maotai_prep", {
            ...prepCardMsg,
            id: (Date.now() + 2).toString(),
            content:
              "企康助手已自动创建筹备组并拉入相关负责人，请各位开始讨论：",
          });
        }
        if (onPrepCompleted) onPrepCompleted();
        if (onChatChange) onChatChange("maotai_prep");
        setIsTyping(false);
      }, 2000);
      return;
    } else if (
      text.includes("会议记录") ||
      text.includes("转写") ||
      text.includes("同步CRM") ||
      text.includes("拜访") ||
      text.includes("开会") ||
      text.includes("平安纪要大师")
    ) {
      if (onStageChange) onStageChange("去拜访");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您调用**会议纪要助理**",
        timestamp: new Date(),
        data: {
          steps: [
            {
              text: "调用平安纪要大师，开启会议语音转写...",
              status: "loading",
            }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        const inProgressMsgId = (Date.now() + 1).toString();
        const inProgressMsg: Message = {
          id: inProgressMsgId,
          sender: "bot",
          type: "meeting_in_progress",
          content: "会议进行中...",
          timestamp: new Date(),
          data: {
            transcription: "",
          },
        };
        setMessages((prev) => [...prev, inProgressMsg]);
        setIsTyping(false);

        const fullTranscription = `李经理：客户您好，关于大健康产业的合作，我们初步考虑从高管健康保障切入...
客户：这个方向不错，我们确实需要更专业的医疗资源对接...
李经理：好的，我们会针对云南烟草的需求定制专属方案，包括绿色通道和数字化管理...`;
        let currentText = "";
        let index = 0;

        const interval = setInterval(() => {
          if (index < fullTranscription.length) {
            currentText += fullTranscription[index];
            setMessages((prev) =>
              prev.map((m) =>
                m.id === inProgressMsgId
                  ? {
                      ...m,
                      data: {
                        ...m.data,
                        transcription: currentText,
                      },
                    }
                  : m,
              ),
            );
            index++;
          } else {
            clearInterval(interval);
          }
        }, 50);
      }, 1000);
      return;
    } else if (text.includes("请帮我完成标书合规性检查")) {
      if (onStageChange) onStageChange("招投标");
      setAwaitingComplianceUpload(true);
      const msg: Message = {
        id: Date.now().toString(),
        sender: "bot",
        type: "text",
        content:
          "好的，我将为您进行标书合规性检查。请确认核心内容已完整，并点击输入框上方的附件按钮上传需要检查的标书文件（支持 .pdf, .docx 格式）。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, msg]);
      setIsTyping(false);
      return;
    } else if (
      (text.startsWith("[附件]") && awaitingComplianceUpload) ||
      text.includes("商务标书_云南烟草项目_v1.0.pdf")
    ) {
      setAwaitingComplianceUpload(false);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您执行【合规性检查Skill】...",
        timestamp: new Date(),
        data: {
          steps: [{ text: "执行标书审核...", status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "执行标书审核...", status: "done" },
                      { text: "审核通过结果通知...", status: "loading" }],
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
                    steps: [
                      { text: "执行标书审核...", status: "done" },
                      { text: "审核通过结果通知...", status: "done" },
                      { text: "自动发起用印审批流程...", status: "loading" }],
                  },
                }
              : m,
          ),
        );
      }, 2000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      { text: "执行标书审核...", status: "done" },
                      { text: "审核通过结果通知...", status: "done" },
                      { text: "自动发起用印审批流程...", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const complianceMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "compliance_card",
          content:
            "【合规性检查】已完成。标书合规性检查通过，已为您自动发起用印流程。",
          timestamp: new Date(),
          data: {
            title: "标书合规性检查及用印申请",
            result: "✅ 合规性检查通过",
            details: [
              "资质文件：齐全且在有效期内",
              "报价范围：符合公司指导价标准",
              "法务条款：无异常风险条款"],
            sealProcess: [
              { step: "发起申请", status: "done", time: "10:00" },
              { step: "部门主管审批", status: "done", time: "10:15" },
              { step: "法务合规审批", status: "done", time: "10:30" },
              { step: "印章管理员盖章", status: "done", time: "11:00" }],
          },
        };
        setMessages((prev) => [...prev, complianceMsg]);
      }, 3000);
      return;
    } else if (
      text.includes("客户提问") ||
      text.includes("最新动态") ||
      text.includes("跟客户") ||
      text.includes("客户服务") ||
      text.includes("监控") ||
      text.includes("动态")
    ) {
      if (onStageChange) onStageChange("跟客户");
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在为您调用**客户服务**",
        timestamp: new Date(),
        data: {
          steps: [
            {
              text: "开启主动服务模式，监测外部新闻舆情...",
              status: "loading",
            }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      {
                        text: "开启主动服务模式，监测外部新闻舆情...",
                        status: "done",
                      },
                      {
                        text: "生成标准化动态情报与互动话术...",
                        status: "loading",
                      }],
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
                    steps: [
                      {
                        text: "开启主动服务模式，监测外部新闻舆情...",
                        status: "done",
                      },
                      {
                        text: "生成标准化动态情报与互动话术...",
                        status: "done",
                      },
                      { text: "监控助手已就绪。", status: "done" }],
                  },
                }
              : m,
          ),
        );

        const monitorMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          type: "monitor_card",
          content: "已为您开启客户动态监控，并为您准备了最新的服务建议：",
          timestamp: new Date(),
          data: {
            title: "云南烟草集团 - 动态监控",
            customerInquiries: [
              {
                question: "黑金计划的理赔时效是多久？",
                answer: `【黑金计划理赔时效说明】
1. 标准理赔：资料齐全后2个工作日内完成审核；
2. 闪赔服务：支持线上申请，最快2小时到账。`,
              }],
            news: [
              {
                title: "云南烟草集团加大医疗健康投资",
                date: "2026-03-25",
                source: "新华网",
              },
              {
                title: "云南烟草高管团队调整",
                date: "2026-03-20",
                source: "财经网",
              }],
            internalSync: "健康保障计划已通过初审，下周三输出最终报价。",
            pushTargets: ["客户经理", "跟进群"],
            suggestedAction: {
              type: "微信问候建议",
              script:
                "王总，看到贵司在大健康领域的布局，我们的计划刚好能形成资源互补，下周三我带方案来拜访您？",
            },
          },
        };
        setMessages((prev) => [...prev, monitorMsg]);
        setIsTyping(false);
        if (onMonitorCompleted) onMonitorCompleted();
      }, 3000);
      return;
    } else {
      const newBotMsg: Message = {
        id: Date.now().toString(),
        sender: "bot",
        type: "text",
        content: "收到指令，正在处理...",
        timestamp: new Date(),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, newBotMsg]);
        setIsTyping(false);
      }, 1000);
      return;
    }
  };

  const handleNewChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInputValue("");
    setIsTyping(false);
  };

  return (
    <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 flex flex-col bg-white relative min-h-0 min-w-0">
        {/* Header */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 z-10">
          <div className="flex items-center">
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight line-clamp-1 max-w-lg">
                {messages.filter((m) => m.sender === "user").pop()?.content ||
                  "企康助手"}
              </h2>
              <div className="flex items-center mt-1 space-x-2 text-xs">
                <span className="flex items-center text-gray-500">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1.5"></span>
                  在线 · {currentExpert ? currentExpert.name : "全流程企康助手"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleNewChat}
              className="flex items-center px-3 py-1.5 bg-orange-50 text-orange-600 hover:bg-orange-100 rounded-lg text-sm font-medium transition-colors border border-orange-100 mr-2"
            >
              <PlusCircle size={16} className="mr-1.5" />
              新建对话
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded">
              <Phone size={18} />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded">
              <Video size={18} />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded">
              <LayoutTemplate size={18} />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F8F9FA]">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} onAction={handleSend} />
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1 shadow-sm">
                  <Bot size={18} className="text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center space-x-1">
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4 flex-shrink-0 relative z-10">
          <div className="flex items-center space-x-4 mb-2">
            <input
              type="file"
              accept=".pdf,.docx,.xlsx"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  const fileName = e.target.files[0].name;
                  if (awaitingComplianceUpload) {
                    handleComplianceAnalysis(fileName);
                  } else if (awaitingEmployeeListUpload) {
                    setAwaitingEmployeeListUpload(false);
                    handleSend(`[附件] ${fileName}`);
                  } else {
                    handleSend(`[附件] ${fileName}`);
                  }
                  e.target.value = ``;
                }
              }}
            />
            <button className="text-gray-400 hover:text-gray-600">
              <Smile size={20} />
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-gray-400 hover:text-gray-600"
            >
              <Paperclip size={20} />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <ImageIcon size={20} />
            </button>
            <button
              onClick={startRecording}
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Mic size={20} />
            </button>
            <div className="flex-1"></div>
            <div className="relative">
              <button
                onClick={() => setShowSkillMenu(!showSkillMenu)}
                className="flex items-center text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                我的技能
              </button>
              <AnimatePresence>
                {showSkillMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full right-0 mb-2 w-56 bg-white border border-gray-200 shadow-lg rounded-xl py-2 z-50 transform origin-bottom-right"
                  >
                    <div className="px-3 py-2 text-xs font-bold text-gray-500 border-b border-gray-100 mb-1">
                      快速调用技能
                    </div>
                    {QUICK_SKILLS.map((skill, index) => (
                      <button
                        key={index}
                        onClick={() => handleSkillClickLocal(skill)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {skill.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="relative bg-gray-50 rounded-xl p-2 border border-transparent focus-within:border-orange-200 focus-within:bg-white transition-colors">
            {currentExpert && (
              <div className="flex items-center space-x-1.5 mb-1 px-1">
                <img
                  src={currentExpert.img}
                  className="w-4 h-4 rounded-full object-cover"
                  alt={currentExpert.name}
                />
                <span className="text-xs font-bold text-orange-600">
                  {currentExpert.name}
                </span>
                <button
                  onClick={() => setCurrentExpert(null)}
                  className="ml-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 p-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            )}
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(inputValue);
                  setInputValue("");
                }
              }}
              placeholder="输入指令，如：“我可以领取的商机” 或点击上方快捷指令"
              className="w-full h-16 bg-transparent resize-none outline-none text-sm text-gray-800"
            />
            <button
              onClick={() => {
                handleSend(inputValue);
                setInputValue("");
              }}
              className="absolute right-2 bottom-2 p-2 text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {isRecording && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-10 max-w-xl w-full shadow-2xl flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-8 relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute inset-0 bg-orange-200 rounded-full opacity-50"
              />
              <Mic size={48} className="text-orange-500 relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              正在聆听...
            </h3>
            <div className="w-full bg-gray-50 rounded-2xl p-8 min-h-[160px] flex items-center justify-center text-center">
              <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                {recordingText || "请说话..."}
              </p>
            </div>
            <div className="mt-10 flex space-x-6 w-full">
              <button
                onClick={() => setIsRecording(false)}
                className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => {
                  setIsRecording(false);
                  setInputValue("我可以领取的商机");
                }}
                className="flex-1 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
              >
                说完了
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* 专家功能栏 */}
      <div className="w-64 bg-slate-50 border-l border-gray-200 flex-shrink-0 flex flex-col hide-scrollbar overflow-y-auto">
        <div className="h-16 px-5 flex items-center border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm flex-shrink-0">
          <h2 className="font-bold text-gray-800 text-[15px]">专家功能栏</h2>
        </div>
        <div className="p-4 space-y-3 flex-1 overflow-y-auto">
          {[
            {
              name: "客户洞察专家",
              img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Insight&backgroundColor=0ea5e9&eyes=happy&mouth=smile&accessories=prescription02&clothing=blazerAndShirt",
              desc: "深度研究靶向商机",
              skills: [
                "客户信息调研",
                "关键决策人分析",
                "历史合作分析"],
              prompts: {
                客户信息调研: "生成云南烟草集团的客户画像。人员约8000+人，高层员工：800人，核心员工6000人，在职人员平均35岁占比68%，男性员工4500+人，内勤员工：7000人，预算在600~800w左右",
                关键决策人分析: "#关键决策人分析#",
                历史合作分析: "#历史合作分析#",
              },
            },
            {
              name: "营销方案专家",
              img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marketing&backgroundColor=f97316&eyes=happy&mouth=smile&accessories=sunglasses&clothing=blazerAndSweater",
              desc: "定制专业产品组合",
              skills: ["拜访材料生成", "标准产品推荐", "明星方案匹配", "案例亮点提炼", "竞品多维对标", "拜访建议话术"],
              prompts: {
                拜访材料生成:
                  "我要去拜访云南烟草，帮我准备拜访材料",
                标准产品推荐: `我是平安银行的企康销售经理，要给明道云写一个标品营销方案，预算大概是18W`,
                明星方案匹配: "#明星方案匹配#",
                案例亮点提炼: "#案例亮点提炼#",
                竞品多维对标: "#竞品多维对标#",
                拜访建议话术: "帮我把分管总、HRD和经办人可能关心的问题准备好",
              },
            },
            {
              name: "标书撰写专家",
              img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Bidding&backgroundColor=8b5cf6&eyes=happy&mouth=smile&clothing=collarAndSweater",
              desc: "把控招投标全流程并合规质检",
              skills: ["招标文件解读", "方案一致性校验", "资质业绩匹配", "材料清单生成", "投标风险提示", "述标材料生成"],
              prompts: {
                智能标书生成: "根据云南省烟草公司2024-2027年补充医疗保险服务项目（二次）的招标书，帮我生成完整的投标书，要求内容完整、规范，符合正式投标使用。",
                招标文件解读: "帮我解读这份招标文件，看看重点关注什么",
                标书质量检查: "#标书质量检查#",
                资质业绩匹配: "帮我评估现有资质和项目经验的匹配度",
                方案一致性校验: "#方案一致性校验#",
                材料清单生成: "#材料清单生成#",
                投标风险提示: "#投标风险提示#",
                述标材料生成: "#述标材料生成#",
              },
            },
            {
              name: "企康业务合规专家",
              img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Compliance&backgroundColor=10b981&eyes=happy&mouth=smile&accessories=round&clothing=blazerAndShirt",
              desc: "严控自研与合规政策红线",
              skills: ["合规分析"],
              prompts: {
                合规分析: "#合规分析#",
              },
            },
            {
              name: "业绩追踪助手",
              img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tracker&backgroundColor=f43f5e&eyes=happy&mouth=twinkle&clothing=hoodie",
              desc: "实时全景透视个人及团队业绩跟进进度",
              skills: ["商机认领", "客户拜访记录", "任务追踪", "项目管理", "智能报价授权"],
              prompts: {
                商机认领: "我有哪些商机可以认领",
                客户拜访记录:
                  "我正在拜访云南中烟工业有限责任公司的朱洪武书记，帮我记录拜访过程，然后同步更新任务进度。",
                任务追踪: "#任务追踪#",
                项目管理: "#项目管理#",
                智能报价授权: "帮我生成报价建议并评估授权风险",
              },
            },
            {
              name: "运营管理专家",
              img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Operation&backgroundColor=64748b&eyes=happy&mouth=smile&accessories=prescription01&clothing=shirtVNeck",
              desc: "提供全流程、精细化的业务审核服务",
              skills: ["报销审核发起", "报销材料审核", "复核校验"],
              prompts: {
                报销审核发起: "请帮我审核以下报销材料。",
                报销材料审核: "确认执行报销审核。",
                复核校验: "请帮我复核所有报销申请，确认是否存在异常。",
              },
            }].map((expert, idx) => {
            const isCurrent = currentExpert?.name === expert.name;
            const isExpanded = expandedExpert === expert.name;

            const handleHeaderClick = () => {
              if (!isExpanded) {
                setExpandedExpert(expert.name);
              }
              handleExpertClick({ name: expert.name, img: expert.img });
            };

            return (
              <div
                key={idx}
                className={`flex flex-col bg-white rounded-xl border transition-all ${
                  isCurrent
                    ? "border-orange-500 ring-2 ring-orange-500/10 shadow-md"
                    : "border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* 专家头部 - 支持折叠/展开 */}
                <div className="flex items-center justify-between p-3 select-none rounded-t-xl">
                  <div
                    onClick={handleHeaderClick}
                    className="flex items-center min-w-0 flex-1 cursor-pointer"
                  >
                    <img
                      src={expert.img}
                      className="w-10 h-10 rounded-full object-cover mr-3 border border-gray-100 shrink-0"
                      alt={expert.name}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-800 text-[13px] mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-orange-500 transition-colors">
                        {expert.name}
                      </div>
                      <div className="text-[10px] text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                        {expert.desc}
                      </div>
                    </div>
                  </div>

                  {/* Chevron 指示器 - 独立点击，仅折叠/展开 */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isExpanded) {
                        setExpandedExpert(null);
                      } else {
                        setExpandedExpert(expert.name);
                      }
                    }}
                    className="p-1.5 hover:bg-slate-100 active:bg-slate-200 rounded-full transition-all cursor-pointer mr-0.5"
                    title={isExpanded ? "收起" : "展开"}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180 text-orange-500" : ``}`}
                    />
                  </div>
                </div>

                {/* 技能抽屉 - 动画展开/收起 */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-3 pb-3 pt-1 border-t border-dashed border-gray-100 flex flex-col gap-2">
                    <div className="text-[10px] text-gray-400 font-medium pb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-orange-400 shrink-0" />
                      <span>可点击调用技能:</span>
                    </div>
                    {expert.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentExpert({
                            name: expert.name,
                            img: expert.img,
                          });
                          setExpandedExpert(expert.name);
                          let targetTitle = skill;
                          let targetPrompt =
                            expert.prompts[
                              skill as keyof typeof expert.prompts
                            ];

                          handleSkillClickLocal({
                            title: targetTitle,
                            prompt: targetPrompt,
                          });
                        }}
                        className="w-full flex items-center justify-between text-left text-xs font-semibold bg-gradient-to-r from-orange-50/75 to-white hover:from-orange-500 hover:to-orange-500 border border-orange-100/80 hover:border-orange-500 text-orange-600 hover:text-white px-2.5 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 group/skill"
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <Zap className="w-3 h-3 text-orange-400 group-hover:text-white shrink-0" />
                          <span className="truncate">{skill}</span>
                        </div>
                        <span className="text-[9px] font-bold bg-orange-100 text-orange-600 group-hover:bg-white/20 group-hover:text-white px-1.5 py-0.5 rounded transition-all shrink-0">
                          调用
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function GroupChatWindow({
  activeChat,
  activeStage,
  showMeetingChats,
  showMonitorChat,
  onPrepCompleted,
  onMeetingCompleted,
  onBidCompleted,
  onMonitorCompleted,
  onStageChange,
  onChatChange,
  globalMessages,
  setGlobalMessages,
  addMessageToChat,
  updateMessageInChat,
}: {
  activeChat: string;
  activeStage: string;
  showMeetingChats?: boolean;
  showMonitorChat?: boolean;
  onPrepCompleted?: () => void;
  onMeetingCompleted?: () => void;
  onBidCompleted?: () => void;
  onMonitorCompleted?: () => void;
  onStageChange?: (stage: string) => void;
  onChatChange?: (chat: string) => void;
  globalMessages?: Record<string, Message[]>;
  setGlobalMessages?: any;
  addMessageToChat?: any;
  updateMessageInChat?: any;
}) {
  const messages = globalMessages?.[activeChat] || [];
  const setMessages = (
    newMessages: Message[] | ((prev: Message[]) => Message[]),
  ) => {
    if (setGlobalMessages) {
      if (typeof newMessages === "function") {
        setGlobalMessages((prev: any) => ({
          ...prev,
          [activeChat]: newMessages(prev[activeChat] || []),
        }));
      } else {
        setGlobalMessages((prev: any) => ({
          ...prev,
          [activeChat]: newMessages,
        }));
      }
    }
  };
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);
  const [awaitingMeetingTarget, setAwaitingMeetingTarget] = useState(false);
  const [awaitingComplianceUpload, setAwaitingComplianceUpload] =
    useState(false);
  const [awaitingTenderDocInterpretation, setAwaitingTenderDocInterpretation] =
    useState(false);
  const [awaitingEmployeeListUpload, setAwaitingEmployeeListUpload] =
    useState(false);
  const [awaitingSurveyClient, setAwaitingSurveyClient] = useState(false);
  const [awaitingStProductInfo, setAwaitingStProductInfo] = useState(false);
  const [awaitingNewPkg, setAwaitingNewPkg] = useState(false);
  const [pkgRetryCount, setPkgRetryCount] = useState(1);
  const [awaitingBidDocGeneration, setAwaitingBidDocGeneration] =
    useState(false);
  const [awaitingBidDocInspection, setAwaitingBidDocInspection] =
    useState(false);
  const [awaitingMaterialReview, setAwaitingMaterialReview] = useState(false);
  const [awaitingTenderDraft, setAwaitingTenderDraft] = useState(false);
  const [showSkillMenu, setShowSkillMenu] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const QUICK_SKILLS = [
    { title: "客户信息调研", prompt: "生成云南烟草集团的客户画像。人员约8000+人，高层员工：800人，核心员工6000人，在职人员平均35岁占比68%，男性员工4500+人，内勤员工：7000人，预算在600~800w左右" },
    { title: "合规分析", prompt: "#合规分析#" },
    { title: "关键决策人分析", prompt: "#关键决策人分析#" },
    { title: "历史合作分析", prompt: "#历史合作分析#" },
    { title: "拜访建议话术", prompt: "帮我把分管总、HRD和经办人可能关心的问题准备好" },
    { title: "招标文件解读", prompt: "帮我解读这份招标文件，看看重点关注什么" },
    { title: "招投标问答", prompt: "关于招投标内容我想提几个问题" },
    { title: "生成目录模板", prompt: "根据项目信息生成标书目录模板" },
    { title: "历史标书复用", prompt: "匹配并复用以往的标书素材" },
    { title: "资质业绩匹配", prompt: "帮我评估现有资质和项目经验的匹配度" },
    
    { title: "材料审查", prompt: "#材料审查#" },
    {
      title: "拜访材料生成",
      prompt: "我要去拜访云南烟草，帮我准备拜访材料",
    },
    { title: "标准产品推荐", prompt: `我是平安银行的企康销售经理，要给明道云写一个标品营销方案，预算大概是18W` },
    { title: "明星方案匹配", prompt: "#明星方案匹配#" },
    { title: "案例亮点提炼", prompt: "#案例亮点提炼#" },
    { title: "竞品多维对标", prompt: "#竞品多维对标#" },
    { title: "商机认领", prompt: "我有哪些商机可以认领" },
    {
      title: "客户拜访记录",
      prompt:
        "我正在拜访云南中烟工业有限责任公司的朱洪武书记，帮我记录拜访过程，然后同步更新任务进度。",
    },
    { title: "任务追踪", prompt: "#任务追踪#" },
    { title: "智能报价授权", prompt: "帮我生成报价建议并评估授权风险" },
    { title: "项目管理", prompt: "#项目管理#" },
    {
      title: "报销审核发起",
      prompt: "请帮我审核以下报销材料。",
    },
    { title: "报销材料审核", prompt: "确认执行报销审核。" },
    { title: "复核校验", prompt: "请帮我复核所有报销申请，确认是否存在异常。" }];

  const handleSkillClickLocal = (skill: { title: string; prompt: string }) => {
    setShowSkillMenu(false);

    if (
      skill.title === "招标助手" ||
      skill.title === "智能标书生成" ||
      skill.title === "合规性检查" ||
      skill.title === "标书生成" ||
      skill.title === "材料审查" ||
      skill.title === "招标文件解读" ||
      skill.title === "标书质量检查" ||
      skill.title === "述标材料生成"
    ) {
      if (onStageChange) onStageChange("招投标");
    } else if (skill.title === "领商机") {
      if (onStageChange) onStageChange("领商机");
    } else if (
      skill.title === "情报侦察兵" ||
      skill.title === "客户信息调研" ||
      skill.title === "关键决策人分析"
    ) {
      if (onStageChange) onStageChange("看档案");
    } else if (skill.title === "市场分析" || skill.title === "历史合作分析") {
      if (onStageChange) onStageChange("定制策略");
    } else if (
      skill.title === "筹备讨论助理" ||
      skill.title === "营销包装师" ||
      skill.title === "拜访建议话术"
    ) {
      if (onStageChange) onStageChange("做准备");
    } else if (skill.title === "平安纪要大师") {
      if (onStageChange) onStageChange("去拜访");
    } else if (skill.title === "客户服务Skill" || skill.title === "合规分析") {
      if (onStageChange) onStageChange("跟客户");
    }

    setInputValue(skill.prompt);
  };

  useEffect(() => {
    const handleSkillClick = (e: any) => {
      const { prompt } = e.detail;
      setInputValue(prompt);
    };
    window.addEventListener("skill-click", handleSkillClick);
    return () => window.removeEventListener("skill-click", handleSkillClick);
  }, []);

  const chatNames: Record<string, string> = {
    maotai: "云南烟草集团 - AI助手",
    maotai_bid: "【内部】云南烟草集团 - 招投标交流群",
    huadong: "华东医疗集团 - 项目筹备组",
    suzhou: "苏州高新科技 - 交流群",
    nanjing: "南京精密制造 - 投标工作组",
    hangzhou: "杭州数字科技 - 市场分析组",
    maotai_prep: "云南烟草健康管理推荐方案筹备组",
    xiaojiao: "肖姣 (产品经理)",
    lianghuayao: "梁华耀 (服务团队)",
    linpeixin: "李经理 (客户经理)",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateMaotaiBidProcess = () => {
    setIsTyping(true);
    let currentDelay = 1000;
    const addMsg = (msg: Omit<Message, "id" | "timestamp">) => {
      setTimeout(() => {
        if (setGlobalMessages) {
          setGlobalMessages((prev: any) => {
            const newMsg = {
              ...msg,
              id: Date.now().toString() + Math.random(),
              timestamp: new Date(),
            };
            return {
              ...prev,
              maotai_bid: [...(prev.maotai_bid || []), newMsg],
            };
          });
        }
      }, currentDelay);
      currentDelay += 2000;
    };
    const updateTaskStatus = (taskIndex: number) => {
      setTimeout(() => {
        if (setGlobalMessages) {
          setGlobalMessages((prev: any) => {
            const newMsgs = [...(prev.maotai_bid || [])];
            const bidCardIndex = newMsgs.findIndex(
              (m: any) => m.type === "bid_card",
            );
            if (bidCardIndex !== -1) {
              const bidCard = newMsgs[bidCardIndex];
              const newSchedule = [...bidCard.data.schedule];
              newSchedule[taskIndex].status = "done";
              if (taskIndex + 1 < newSchedule.length) {
                newSchedule[taskIndex + 1].status = "active";
              }
              newMsgs[bidCardIndex] = {
                ...bidCard,
                data: { ...bidCard.data, schedule: newSchedule },
              };
            }
            return {
              ...prev,
              maotai_bid: newMsgs,
            };
          });
        }
      }, currentDelay);
      currentDelay += 500;
    };

    // Step 1
    addMsg({
      sender: "huangzhifeng",
      type: "text",
      content: `这是招标方输入内容，包括招标文件、技术规范书、商务条款等。请大家查阅。
【附件：招标方输入内容.pdf】`,
    });
    addMsg({
      sender: "xiaojiao",
      type: "text",
      content: "收到，评分标准里对技术部分要求挺高的，我们需要重点准备。",
    });
    addMsg({
      sender: "liangzhenning",
      type: "text",
      content: "商务条款这边我看了一下，付款周期有点长，我们需要注意现金流。",
    });
    addMsg({
      sender: "bot",
      type: "text",
      content: `【AI总结】已分析对话内容。招标方输入已确认。重点关注技术评分和付款周期。
✅ 任务一已完成。`,
    });
    updateTaskStatus(0);

    // Step 2
    addMsg({
      sender: "liangzhenning",
      type: "text",
      content: `这是投标方输入内容，包括公司资质材料、过往项目经验、产品资料等。
【附件：投标方输入内容.zip】`,
    });
    addMsg({
      sender: "lianghuayao",
      type: "text",
      content:
        "过往项目经验里，我们可以重点突出之前做过的几个大型国企案例，这会是加分项。",
    });
    addMsg({
      sender: "huangzhifeng",
      type: "text",
      content: "成本测算这边，利润率要保证在公司要求范围内，大家注意把控。",
    });
    addMsg({
      sender: "bot",
      type: "text",
      content: `【AI总结】已分析对话内容。投标方输入已确认。重点突出国企案例，保证利润率。
✅ 任务二已完成。`,
    });
    updateTaskStatus(1);

    // Step 3
    addMsg({
      sender: "lianghuayao",
      type: "text",
      content: `@所有人 这是《分析与策略报告V1版》，请大家确认。
【附件：分析与策略报告V1版.pdf】`,
    });
    addMsg({
      sender: "huangzhifeng",
      type: "text",
      content: `报告写得不错，但我有3点建议：
1. 竞争对手分析可以再深入一点；
2. 中标策略要更突出我们的差异化优势；
3. 风险评估里加上对政策变动的应对预案。`,
    });
    addMsg({
      sender: "lianghuayao",
      type: "text",
      content: "收到，马上修改。",
    });
    addMsg({
      sender: "lianghuayao",
      type: "text",
      content: `@所有人 这是《分析与策略报告V2版》，已按建议修改，请确认。
【附件：分析与策略报告V2版.pdf】`,
    });
    addMsg({ sender: "xiaojiao", type: "text", content: "确认没问题。" });
    addMsg({ sender: "liangzhenning", type: "text", content: "确认。" });
    addMsg({
      sender: "bot",
      type: "text",
      content: `【AI总结】分析与策略报告已通过所有人确认。
✅ 任务三已完成。`,
    });
    updateTaskStatus(2);

    // Step 4
    addMsg({
      sender: "xiaojiao",
      type: "text",
      content: `@所有人 我开始执行商务标书和技术标书撰写。这是初稿，请查阅。
【附件：商务标书初稿.docx】
【附件：技术标书初稿.docx】`,
    });
    addMsg({
      sender: "huangzhifeng",
      type: "text",
      content: "商务标书里，报价部分再核对一下，确保没有计算错误。",
    });
    addMsg({
      sender: "liangzhenning",
      type: "text",
      content: "技术标书里，系统架构图可以再优化一下，显得更专业。",
    });
    addMsg({
      sender: "xiaojiao",
      type: "text",
      content: `收到，已修改。这是《商务标书V2版》和《技术标书V2版》。
【附件：商务标书V2版.docx】
【附件：技术标书V2版.docx】`,
    });
    addMsg({ sender: "huangzhifeng", type: "text", content: "没问题了。" });
    addMsg({ sender: "liangzhenning", type: "text", content: "可以。" });
    addMsg({
      sender: "bot",
      type: "text",
      content: `【AI总结】商务标书和技术标书已完成撰写并确认。
✅ 任务四已完成。`,
    });
    updateTaskStatus(3);

    // Step 5
    addMsg({
      sender: "liangzhenning",
      type: "text",
      content: "@AI助手 请执行商务标书和技术标书合规性检查。",
    });
    addMsg({
      sender: "bot",
      type: "reasoning",
      content: "正在为您执行【合规性检查】...",
      data: {
        steps: [
          { text: "执行标书审核...", status: "done" },
          { text: "审核通过结果通知...", status: "done" },
          { text: "自动发起用印审批流程...", status: "done" }],
      },
    });
    addMsg({
      sender: "bot",
      type: "compliance_card",
      content:
        "【合规性检查】已完成。标书合规性检查通过，已为您自动发起用印流程。",
      data: {
        title: "标书合规性检查及用印申请",
        result: "✅ 合规性检查通过",
        details: [
          "资质文件：齐全且在有效期内",
          "报价范围：符合公司指导价标准",
          "法务条款：无异常风险条款"],
        sealProcess: [
          { step: "发起申请", status: "done", time: "10:00" },
          { step: "部门主管审批", status: "done", time: "10:15" },
          { step: "法务合规审批", status: "done", time: "10:30" },
          { step: "印章管理员盖章", status: "done", time: "11:00" }],
      },
    });
    addMsg({
      sender: "bot",
      type: "text",
      content: `【AI总结】标书合规性检查通过，用印审批流程已完成。
✅ 任务五已完成。`,
    });
    updateTaskStatus(4);

    // Step 6
    addMsg({
      sender: "bot",
      type: "text",
      content: "@李经理 用印审批流程已完成，请执行标书封标最后确认。",
    });
    addMsg({ sender: "huangzhifeng", type: "text", content: "确认封标。" });
    addMsg({
      sender: "bot",
      type: "text",
      content: `【AI总结】已完成最终封标。
✅ 任务六已完成。`,
    });
    updateTaskStatus(5);

    // Step 7
    addMsg({
      sender: "bot",
      type: "text",
      content:
        "🎉 云南烟草集团项目招投标各项任务已全部完成！祝愿本次招投标取得圆满成功！",
    });

    setTimeout(() => {
      setIsTyping(false);
      if (onBidCompleted) onBidCompleted();
    }, currentDelay);
  };

  const handleSend = (text: string, displayTitle?: string) => {
    if (!text.trim()) return;

    if (text.includes("某烟草企业补充医疗保障管理办法")) {
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
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "已检测到您上传了《某烟草企业补充医疗保障管理办法》，我将自动解析全文内容，重点分析保障范围、报销规则、基金管理机制、理赔流程及合规要求，并结合行业标杆实践识别潜在优化方向与合作机会。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        
        setTimeout(() => {
          const progressMsg = {
            id: Date.now().toString() + "_bot_progress",
            sender: "bot",
            type: "doc_parsing_progress",
            content: "",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, progressMsg]);
          
          setTimeout(() => {
            const resultMsg = {
              id: Date.now().toString() + "_bot_result",
              sender: "bot",
              type: "doc_parsing_result",
              content: "",
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, resultMsg]);

            setTimeout(() => {
              const msg2 = {
                id: Date.now().toString() + "_bot_msg2",
                sender: "bot",
                type: "text",
                content: "企康助手正在为您深度解读管理办法",
                timestamp: new Date(),
              }
              setMessages((prev) => [...prev, msg2]);
              
              setTimeout(() => {
                 const detailMsg = {
                   id: Date.now().toString() + "_bot_interp",
                   sender: "bot",
                   type: "doc_interpretation_report",
                   content: "",
                   timestamp: new Date(),
                 };
                 setMessages((prev) => [...prev, detailMsg]);

                 setTimeout(() => {
                   const riskMsg = {
                     id: Date.now().toString() + "_bot_risk",
                     sender: "bot",
                     type: "doc_risk_opportunity_report",
                     content: "",
                     timestamp: new Date(),
                   };
                   setMessages((prev) => [...prev, riskMsg]);
                 }, 5000);
              }, 1500);
            }, 1000);

          }, 3500);
        }, 1000);
      }, 1000);
      return;
    }

    if (text.includes("请帮我审核以下报销材料")) {
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
        setIsTyping(false);
        setAwaitingEmployeeListUpload(true);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "请您上传需要审核的材料。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;
    }

    if (text.includes("[附件]") && awaitingEmployeeListUpload) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "已完成对您上传报销材料的分析，共包含报销发票1张、报销明细表1份。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1500);
      return;
    }

    if (text.includes("确认执行报销审核")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content: "正在为您执行报销材料审核。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);

        setTimeout(() => {
          const finalMsg = {
            id: Date.now().toString() + "_bot_final",
            sender: "bot",
            type: "text",
            content:
              "您的报销材料已审核通过，审核结果已发送至您的邮箱，请及时查收。",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, finalMsg]);
        }, 2000);
      }, 1000);
      return;
    }

    if (text.includes("请帮我复核所有报销申请，确认是否存在异常")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "已为您完成68次历史报销审核申请的复核，其中正常68次，异常0次。复核结果已发送至您的邮箱，请及时查收。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1500);
      return;
    }

    if (text.includes("我有哪些商机可以认领")) {
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
        setIsTyping(false);
        const reportMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "业绩追踪助手留意到您已经完成云南省烟草公司曲靖市公司2024-2027年补充医疗保险服务项目（二次）的投标。当前同行业的云南中烟工业有限责任公司已完成企业年金落地，企康业务仍具备较大的拓展空间。请您确认是否认领该企康商机，以便后续持续跟进与推进。",
          timestamp: new Date(),
        };
        const oppMsg = {
          id: Date.now().toString() + "_opp",
          sender: "bot",
          type: "business_opportunity",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reportMsg, oppMsg]);
      }, 1500);
      return;
    }

    if (
      text.includes("确认认领云南中烟工业有限责任公司企康商机") ||
      text.includes("认领商机")
    ) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: "确认认领",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const msg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "您已认领云南中烟工业有限责任公司的企康商机，在未来的5个工作日内，请完成一次客户拜访。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, msg]);
      }, 1000);
      return;
    }

    if (text.includes("我正在拜访云南中烟工业有限责任公司的朱洪武书记")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "正在调用客户拜访记录技能，将为您开启平安纪要大师，全程记录会议语音并自动内容转写。",
          timestamp: new Date(),
        };
        const meetingMsg = {
          id: Date.now().toString() + "_meeting",
          sender: "bot",
          type: "meeting_recording_yn",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg, meetingMsg]);
      }, 1000);
      return;
    }

    if (
      text.includes("会议已结束，请输出会议纪要") ||
      text.includes("会议已结束，请输出拜访会议纪要")
    ) {
      const newUserMsg = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: "结束会议并输出纪要",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const minMsg = {
          id: Date.now().toString() + "_min",
          sender: "bot",
          type: "meeting_minutes_yn",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, minMsg]);
      }, 1500);
      return;
    }

    if (text.includes("#项目管理#")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "product_match_assessment",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;
    }
    
    if (text.includes("帮我生成报价建议并评估授权风险")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "quote_auth_center",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 1000);
      return;
    }

    if (text.includes("#任务追踪#")) {
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
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "text",
          content:
            "您已完成拜访云南中烟工业有限责任公司任务，还有出具高管专属服务白皮书、制作差异化方案等任务请及时开展。",
          timestamp: new Date(),
        };
        const taskMsg = {
          id: Date.now().toString() + "_task",
          sender: "bot",
          type: "task_tracking_yn",
          content: "",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg, taskMsg]);
      }, 1000);
      return;
    }

    if (text === "#案例亮点提炼#") {
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
            { id: "2", text: "提炼历史案例卖点和亮点...", status: "pending" }],
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
            { id: "3", text: "分析销售打法...", status: "pending" }],
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
      }, 3000);
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
      }, 4500);
      return;
    } else if (
      text.includes("我要去拜访云南烟草，帮我准备拜访材料")
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
        content: "好的，根据标品营销方案生成流程，我需要先收集客户信息。请提供以下客户基本信息：\n\n---\n\n**必填项：**\n\n① **客户名称** (全称)：\n② **行业** (金融/能源/通讯/烟草/科技/邮政/制造/交通运输等)：\n③ **人员规模** (在职员工总数)：\n④ **地域** (省/市)：\n⑤ **预算** (年，如\"3000万\")：\n\n**选填项 (让方案更精准)：**\n\n- 组织结构：高层___人 / 核心员工___人 / 基层员工___人\n- 人员结构：离退休比例___ / 在职人员比例___，平均年龄___，年龄高峰区间___\n- 性别结构：男___人 / 女___人\n- 工种结构：内勤___人 / 外勤___人\n- 既往健康痛点：\n- 补充说明：",
        timestamp: new Date(),
      };
      
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setInputValue("对接人是HRD，本次是首次接触，希望建立初步信任，该烟草企业覆盖6个市级，总预算大概是600~800万元，历史赔付率偏低");
        setIsTyping(false);
      }, 500);
      return;
    } else if (
      text.includes("对方对接人是HRD")
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
        '客户特征识别：分析行业属性、组织架构、员工规模及已知预算情况，明确客户画像。',
        '历史信息研判：结合赔付数据完整度、现有福利体系等信息，评估客户当前保障体系成熟度。',
        '标杆客户对标：检索同类型央国企、省级多机构客户及长期合作案例，寻找可借鉴模式。',
        '需求场景挖掘：从保障管理、基金运营、健康服务、员工关怀等维度识别潜在需求。',
        '产品能力匹配：从补充医疗、委托基金管理、体检服务、慢病管理、就医协助等产品中筛选适配方案。',
        '方案组合设计：结合客户特点与预算情况，形成可落地的产品组合及服务模式。',
        '价值体系提炼：从政策合规、员工关怀、健康企业建设、ESG价值及企业文化建设等维度提炼方案价值。',
        '拜访策略生成：输出标杆案例、产品推荐、价值亮点及沟通重点，形成首次拜访材料。'];
      const reasoningMsg = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "营销方案专家调用以下技能：拜访材料生成、标准产品推荐、明星方案匹配、案例亮点提炼、竞品多维对标",
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
            type: "lenovo_new_marketing_plan",
            content:
              "为您生成云南烟草集团专属家庭医生补充营销方案PPT和营销话术html。",
            timestamp: new Date(),
            data: { isFamilyDoctor: true },
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
      }, 1200);
      return;
    } else if (text === "#述标材料生成#") { const newUserMsg = { id: Date.now().toString() + "_user", sender: "user", type: "text", content: text, timestamp: new Date() }; setMessages(prev => [...prev, newUserMsg]); const reasoningMsg = { id: Date.now().toString(), sender: "bot", type: "reasoning", content: "调用“述标材料生成”技能", timestamp: new Date() }; setMessages(prev => [...prev, reasoningMsg]); setIsTyping(true); setTimeout(() => { setIsTyping(false); const botMsg = { id: Date.now().toString() + "_bot", sender: "bot", type: "text", content: "为您生成述标材料...", timestamp: new Date(), data: { type: "tactic_recommendation", phases: [{ title: "PPT宣讲材料结构化生成", steps: ["开场背景与分析", "痛点匹配方案", "案例证明", "报价说明"] }] } }; setMessages(prev => [...prev, botMsg]); }, 1500); return; } if (text === "帮我解读这份招标文件，看看重点关注什么") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“招标文件解读”技能",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reasoningMsg]);

      setIsTyping(true);
      setTimeout(() => {
        setAwaitingTenderDocInterpretation(true);
        const askMsg: Message = {
          id: Date.now().toString() + "_ask",
          sender: "bot",
          type: "text",
          content:
            "请点击下方“附件”按钮，上传需要解读的招标书文件（支持 PDF、Word 等格式）。",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, askMsg]);
        setIsTyping(false);
      }, 1000);
      return;
    } else if (awaitingTenderDocInterpretation && text.startsWith("[附件]")) {
      setAwaitingTenderDocInterpretation(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用专家技能...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "我要先理解本次招标的核心采购目标", status: "loading" },
            { id: "2", text: "我要识别哪些条款属于硬性门槛", status: "pending" },
            { id: "3", text: "我要找出影响得分的关键评分项", status: "pending" },
            { id: "4", text: "我要分析客户最关注的服务能力", status: "pending" },
            { id: "5", text: "我要确认是否存在特殊责任要求", status: "pending" },
            { id: "6", text: "我要识别可能导致废标的风险点", status: "pending" },
            { id: "7", text: "我要梳理需要提前准备的材料", status: "pending" },
            { id: "8", text: "我要形成可执行的投标策略", status: "pending" }
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
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 1
                        ? { ...s, status: "complete" }
                        : idx === 1
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 800);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 2
                        ? { ...s, status: "complete" }
                        : idx === 2
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1100);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 3
                        ? { ...s, status: "complete" }
                        : idx === 3
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1400);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 4
                        ? { ...s, status: "complete" }
                        : idx === 4
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1700);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 5
                        ? { ...s, status: "complete" }
                        : idx === 5
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 6
                        ? { ...s, status: "complete" }
                        : idx === 6
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2300);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 7
                        ? { ...s, status: "complete" }
                        : idx === 7
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2600);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx <= 7 ? { ...s, status: "complete" } : s
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2900);

      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "bid_doc_interpretation_card",
          content: "",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 3000);
      return;
    /*
      setAwaitingTenderDocInterpretation(false);
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);

      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "正在解析招标文件内容...",
        timestamp: new Date(),
        data: {
          steps: [
            {
              id: "1",
              text: "正在提取项目概括与核心要求...",
              status: "loading",
            },
            { id: "2", text: "分析资质门槛与评分标准...", status: "pending" },
            {
              id: "3",
              text: "梳理体检需求要点及废标风险...",
              status: "pending",
            }],
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
      }, 3000);

      setTimeout(() => {
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

        const reportMsg: Message = {
          id: Date.now().toString() + "_report",
          sender: "bot",
          type: "bidding_document_analysis_report",
          content: "招标文件解析完成，以下是深度解读报告：",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 4500);
      return;
  */  } else if (text === "帮我评估现有资质和项目经验的匹配度") {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      
      const reasoningMsgId = Date.now().toString() + "_reasoning";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用专家技能...",
        timestamp: new Date(),
        data: {
          steps: [
            { id: "1", text: "我要确认招标要求对应哪些资质条件", status: "loading" },
            { id: "2", text: "我要判断现有资质是否满足要求", status: "pending" },
            { id: "3", text: "我要寻找最匹配的同类项目案例", status: "pending" },
            { id: "4", text: "我要验证服务网络覆盖能力", status: "pending" },
            { id: "5", text: "我要评估现有方案的覆盖程度", status: "pending" },
            { id: "6", text: "我要识别仍需补充的证明材料", status: "pending" },
            { id: "7", text: "我要找出可能影响中标的短板", status: "pending" },
            { id: "8", text: "我要给出最优响应建议", status: "pending" }
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
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 1
                        ? { ...s, status: "complete" }
                        : idx === 1
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 800);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 2
                        ? { ...s, status: "complete" }
                        : idx === 2
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1100);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 3
                        ? { ...s, status: "complete" }
                        : idx === 3
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1400);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 4
                        ? { ...s, status: "complete" }
                        : idx === 4
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 1700);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 5
                        ? { ...s, status: "complete" }
                        : idx === 5
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 6
                        ? { ...s, status: "complete" }
                        : idx === 6
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2300);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx < 7
                        ? { ...s, status: "complete" }
                        : idx === 7
                          ? { ...s, status: "loading" }
                          : s,
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2600);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    ...m.data,
                    steps: m.data.steps.map((s: any, idx: number) =>
                      idx <= 7 ? { ...s, status: "complete" } : s
                    ),
                  },
                }
              : m,
          ),
        );
      }, 2900);

      setTimeout(() => {
        setIsTyping(false);
        const botMsg = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          type: "qual_perf_match_card",
          content: "",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 3000);
      return;
    } else if (
      text === "#合规分析" ||
      text.includes("企康与保险差异") ||
      text.includes("合规分析")
    ) {
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      const reasoningMsgId = Date.now().toString();
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: "调用“合规分析”技能",
        timestamp: new Date(),
        data: {
          steps: [
            {
              id: "1",
              text: "正在检索相关合规政策与法律法规...",
              status: "loading",
            },
            {
              id: "2",
              text: "分析企康业态特征及其与传统商业保险的边界...",
              status: "pending",
            },
            {
              id: "3",
              text: "梳理自保模式转委托模式合规要求与推进路径...",
              status: "pending",
            }],
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
                    steps: m.data.steps.map((s: any, i: number) =>
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
      }, 3000);

      setTimeout(() => {
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

        const reportMsg: Message = {
          id: Date.now().toString() + "_report",
          sender: "bot",
          type: "compliance_analysis_report",
          content: "这是一份关于企康与保险差异及合规化推进路径的深度分析报告：",
          timestamp: new Date(),
          data: {},
        };
        setMessages((prev) => [...prev, reportMsg]);
        setIsTyping(false);
      }, 4500);
      return;
    } else if (text === "帮我把分管总、HRD和经办人可能关心的问题准备好") {
      if (onStageChange) onStageChange("做准备");
      const newUserMsg: Message = {
        id: Date.now().toString() + "_user",
        sender: "user",
        type: "text",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMsg]);
      setIsTyping(true);

      const botMsg: Message = {
        id: Date.now().toString() + "_bot",
        sender: "bot",
        type: "text",
        content: "结合客户组织架构及决策链特征，我将针对分管总、HRD和项目经办人三类核心决策角色的关注点、决策诉求和价值诉求，生成差异化拜访策略与沟通话术。\n\n分管总可能关注： 行业内标杆企业如何开展？政策支持力度如何？是否符合监管要求与企业合规管理要求？\nHRD可能关注： 能为员工带来哪些实际获得感？如何提升员工满意度与组织凝聚力？对企业文化建设、健康企业创建及ESG实践有哪些价值？\n项目经办人可能关注： 是否符合企业现有管理规范与实施流程？项目推进是否便捷？理赔服务、运营管理及员工使用体验是否顺畅高效？",
        timestamp: new Date(),
      };
      
      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setTimeout(() => {
           const reportMsg: Message = {
             id: Date.now().toString() + "_report",
             sender: "bot",
             type: "visit_pitch_report",
             content: "",
             timestamp: new Date(),
           };
           setMessages((prev) => [...prev, reportMsg]);
           setIsTyping(false);
        }, 3000);
      }, 500);
      return;
    }
    if (text.startsWith("VIEW_DOC:")) {
      const filename = text.replace("VIEW_DOC:", "");
      setSelectedMaterial({ name: filename });
      return;
    }

    if (text === "进入招投标交流群") {
      if (onChatChange) onChatChange("maotai_bid");
      if (onStageChange) onStageChange("招投标");

      // Add initial message to maotai_bid chat if it's empty
      if (
        !globalMessages?.["maotai_bid"] ||
        globalMessages["maotai_bid"].length === 0
      ) {
        const initialMsg1: Message = {
          id: Date.now().toString(),
          sender: "bot",
          type: "text",
          content:
            "这是云南烟草集团项目的招投标交流群，请大家在群里交流招投标事项。",
          timestamp: new Date(Date.now() - 2000),
        };
        const initialMsg2: Message = {
          id: (Date.now() + 1).toString(),
          sender: "xiaojiao",
          type: "text",
          content: `@AI助手 请根据4.15日的招投标节点，倒排时间生成招投标任务计划。
任务一：李经理负责提供招标方输入内容，包括招标文件、技术规范书 / 需求说明书、商务条款、评分标准、项目背景资料。
任务二：梁镇宁负责提供投标方输入，包括公司资质材料、过往项目经验、产品资料 / 解决方案白皮书、成本测算、合作资源。
任务三：梁华耀负责分析与策略输入，包括竞争对手分析、中标策略、风险评估。
任务四：肖姣负责统筹商务标书和技术标书撰写。
任务五：梁镇宁负责标书合规性自检与用印流程发起。
任务六：李经理负责最终标书封标。`,
          timestamp: new Date(Date.now() - 1000),
        };
        const initialMsg3: Message = {
          id: (Date.now() + 2).toString(),
          sender: "bot",
          type: "bid_card",
          content: "好的，已为您生成招投标任务计划：",
          timestamp: new Date(),
          data: {
            title: "招标助手 - 云南烟草投标材料筹备",
            deadline: "2026-04-15",
            remindersEnabled: true,
            schedule: [
              {
                task: "提供招标方输入内容（招标文件、技术规范书 / 需求说明书、商务条款、评分标准、项目背景资料）",
                date: "2026-03-28",
                owner: "李经理",
                status: "pending",
              },
              {
                task: "提供投标方输入（公司资质材料、过往项目经验、产品资料 / 解决方案白皮书、成本测算、合作资源）",
                date: "2026-03-30",
                owner: "梁镇宁",
                status: "pending",
              },
              {
                task: "分析与策略输入（竞争对手分析、中标策略、风险评估）",
                date: "2026-04-02",
                owner: "梁华耀",
                status: "pending",
              },
              {
                task: "统筹商务标书和技术标书撰写",
                date: "2026-04-05",
                owner: "肖姣",
                status: "pending",
              },
              {
                task: "标书合规性自检与用印流程发起",
                date: "2026-04-10",
                owner: "梁镇宁",
                status: "pending",
              },
              {
                task: "最终标书封标",
                date: "2026-04-14",
                owner: "李经理",
                status: "pending",
              }],
            documents: [],
            nextStep: "请各位负责人按时提交相关材料。",
          },
        };
        if (setGlobalMessages) {
          setGlobalMessages((prev: any) => ({
            ...prev,
            maotai_bid: [initialMsg1, initialMsg2, initialMsg3],
          }));
        }

        // Automatically start the simulation immediately
        setTimeout(() => {
          simulateMaotaiBidProcess();
        }, 0);
      }
      return;
    }

    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      type: "text",
      content: displayTitle || text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    // AI Response logic
    setTimeout(() => {
      generateBotResponse(text);
    }, 1000);
  };

  const generateBotResponse = (text: string) => {
    setIsTyping(true);

    if (text.includes("领商机") || text.includes("高匹配度商机")) {
      if (onStageChange) onStageChange("领商机");
      const botMsg: Message = {
        id: Date.now().toString(),
        sender: "bot",
        type: "lead_card_list",
        content: "为您匹配到5个高质量商机",
        timestamp: new Date(),
        data: {
          leads: [
            {
              id: "1",
              title: "云南烟草集团企业健康管理项目",
              company: "云南烟草集团",
              industry: "白酒制造",
              budget: "500万+",
              location: "贵州省仁怀市",
              score: 98,
              dimensions: [
                { label: "地域", value: "贵州", match: true },
                { label: "行业", value: "白酒快消", match: true },
                { label: "预算", value: "¥500万+", match: true },
                { label: "任务缺口匹配", value: "黑金套餐", match: true }],
              tags: [
                "大型战略账户",
                "高潜力价值",
                "黑金套餐高配",
                "中长周期规划",
                "全域联动机会"],
            },
            {
              id: "2",
              title: "五粮液集团数字化供应链升级",
              company: "五粮液集团",
              industry: "白酒制造",
              budget: "300万+",
              location: "四川省宜宾市",
              score: 85,
              dimensions: [
                { label: "地域", value: "四川", match: false },
                { label: "行业", value: "白酒快消", match: true },
                { label: "预算", value: "¥300万+", match: true },
                { label: "任务缺口匹配", value: "供应链升级", match: true }],
              tags: [
                "核心存量客户",
                "金融业务强匹配",
                "高价值金融协同",
                "短周期落地",
                "深度供应链切入"],
            },
            {
              id: "3",
              title: "洋河股份智慧园区建设项目",
              company: "洋河股份",
              industry: "白酒制造",
              budget: "200万+",
              location: "江苏省宿迁市",
              score: 92,
              dimensions: [
                { label: "地域", value: "江苏", match: true },
                { label: "行业", value: "白酒快消", match: true },
                { label: "预算", value: "¥200万+", match: true },
                { label: "任务缺口匹配", value: "智慧园区", match: true }],
              tags: [
                "智慧园区标杆",
                "数字化需求明确",
                "中型特色客户",
                "中短周期推进",
                "标准化复制潜力"],
            },
            {
              id: "4",
              title: "泸州老窖全国经销商融资计划",
              company: "泸州老窖",
              industry: "白酒制造",
              budget: "800万+",
              location: "四川省泸州市",
              score: 88,
              dimensions: [
                { label: "地域", value: "四川", match: false },
                { label: "行业", value: "白酒快消", match: true },
                { label: "预算", value: "¥800万+", match: true },
                { label: "任务缺口匹配", value: "经销商融资", match: true }],
              tags: [
                "全国布局大客户",
                "供应链金融强需",
                "高复杂度方案",
                "长周期精细化",
                "多区域联合推进"],
            },
            {
              id: "5",
              title: "山西汾酒员工福利升级方案",
              company: "山西汾酒",
              industry: "白酒制造",
              budget: "150万+",
              location: "山西省吕梁市",
              score: 82,
              dimensions: [
                { label: "地域", value: "山西", match: false },
                { label: "行业", value: "白酒快消", match: true },
                { label: "预算", value: "¥150万+", match: true },
                { label: "任务缺口匹配", value: "员工福利", match: true }],
              tags: [
                "企业健康管理",
                "员工福利刚需",
                "业务匹配度高",
                "中短周期见效",
                "属地运营深耕"],
            }],
        },
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 2000);
      return;
    } else if (text.includes("认领")) {
      const newBotMsg: Message = {
        id: Date.now().toString(),
        sender: "bot",
        type: "lead_execution",
        content: "",
        timestamp: new Date(),
        data: {
          skillName: "领商机",
          status: "执行完成",
          details: [
            {
              label: "商机名称",
              value:
                text.replace("认领", "").trim() ||
                "云南烟草集团企业健康管理项目",
            },
            { label: "认领时间", value: new Date().toLocaleString() },
            { label: "状态", value: "已认领 -> 进入跟进流程" },
            {
              label: "CRM标签",
              value: "大型战略客户-高匹配度-高价值潜力-中长周期-多区域合作机会",
            }],
          nextStep: "点击右侧「看档案」调研完整背景信息。",
        },
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, newBotMsg]);
        setIsTyping(false);
      }, 1500);
      return;
    } else if (
      text.includes("情报侦察兵") ||
      text.includes("背景报告") ||
      text.includes("全面") ||
      text.includes("档案") ||
      text.includes("客户信息调研") ||
      text.includes("基本情况调研")
    ) {
      if (onStageChange) onStageChange("看档案");
      const reasoningMsgId = Date.now().toString();
      const skillName = text.includes("云南烟草基本情况调研")
        ? "客户信息调研"
        : "情报侦察兵";
      const reasoningMsg: Message = {
        id: reasoningMsgId,
        sender: "bot",
        type: "reasoning",
        content: `我已经识别到您的需求，正在为您调用**${skillName}**技能`,
        timestamp: new Date(),
        data: {
          steps: [
            { text: `正确命中【${skillName}】技能...`, status: "loading" }],
        },
      };
      setMessages((prev) => [...prev, reasoningMsg]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      {
                        text: `正确命中【${skillName}】技能...`,
                        status: "done",
                      },
                      {
                        text: "正在调取云南烟草集团全量工商信息...",
                        status: "loading",
                      }],
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
                    steps: [
                      {
                        text: `正确命中【${skillName}】技能...`,
                        status: "done",
                      },
                      {
                        text: "正在调取云南烟草集团全量工商信息...",
                        status: "done",
                      },
                      {
                        text: "正在通过企康大数据分析其健康产业布局...",
                        status: "loading",
                      }],
                  },
                }
              : m,
          ),
        );
      }, 3000);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === reasoningMsgId
              ? {
                  ...m,
                  data: {
                    steps: [
                      {
                        text: `正确命中【${skillName}】技能...`,
                        status: "done",
                      },
                      {
                        text: "正在调取云南烟草集团全量工商信息...",
                        status: "done",
                      },
                      {
                        text: "正在通过企康大数据分析其健康产业布局...",
                        status: "done",
                      },
                      {
                        text: "正在生成多维度的情报洞察报告...",
                        status: "done",
                      },
                      {
                        text: `【${skillName}】已为您生成云南烟草集团全面背景报告。`,
                        status: "done",
                      }],
                  },
                }
              : m,
          ),
        );

        if (activeStage === "领商机" && activeChat !== "maotai") {
          const askNameMsg: Message = {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            type: "text",
            content:
              "生成一份精准、全面的结构化客户背景档案，请您提供客户的完整名称。",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, askNameMsg]);
        } else {
          const isSurvey = text.includes("云南烟草基本情况调研");
          const reportMsg: Message = {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            type: isSurvey ? "survey_report" : "report_card",
            content: isSurvey
              ? `云南烟草基本情况最新调研报告：`
              : "客户洞察专家自动深入调研客户背景，并为您生成了一份详细的结构化情报报告：",
            timestamp: new Date(),
            ...(!isSurvey && {
              data: {
                title: "情报侦察兵 - 云南烟草集团背景报告",
                overviewTitle: "公司概况",
                overview:
                  "云南烟草集团是云南烟草集团在中国的核心运营主体，主要从事个人电脑、智能设备、基础设施及相关IT服务的研发、生产与销售。作为全球领先的科技企业，云南烟草不仅在PC市场占据全球第一的份额，近年来也在积极向智能化、云服务和企业级解决方案转型。",
                metrics: [
                  { label: "注册资本", value: "25000 万港币" },
                  { label: "员工规模", value: "7.0 万+" },
                  { label: "行业地位", value: "PC No.1" }],
                executives: [
                  { name: "张总", title: "董事长兼CEO", role: "决策者" },
                  { name: "刘军", title: "执行副总裁", role: "执行者" }],
                details: [
                  {
                    label: "行业与竞争格局",
                    value:
                      "ICT设备和IT服务行业竞争激烈。云南烟草在PC端面临惠普、戴尔的竞争，智能设备端和基础设施端面临华为、浪潮等国内巨头的挤压。云南烟草通过“端-边-云-网-智”新IT架构构筑竞争护城河。",
                  },
                  {
                    label: "业务结构分析",
                    value:
                      "传统PC业务提供稳定营收和利润；基础设施方案（ISG）和方案服务（SSG）作为第二增长曲线快速增长，特别是AI服务器和企业级运维服务。",
                  },
                  {
                    label: "员工画像与特征",
                    value:
                      "员工群体庞大且类型多样，包括研发工程师、销售人员、产线工人等。核心研发与管理团队工作强度大、经常熬夜及跨国出差。员工整体呈高学历、年轻化、关注自身身心健康等特点。",
                  },
                  {
                    label: "人力资源痛点",
                    value:
                      "不同序列员工健康风险差异大，统包统配的体检方案难以满足个性化需求；外派和跨国员工医疗保障繁琐；缺乏针对高管亚健康的长期干预体系。",
                  },
                  {
                    label: "营销与数字化策略",
                    value:
                      "全面All in AI，推动AI PC普及，加速企业数智化转型服务。",
                  },
                  {
                    label: "财务与经营分析",
                    value:
                      "营收稳健，现金流充裕。随着SSG业务占比提升，整体利润率改善。具备为高质量员工福利买单的能力和意愿。",
                  },
                  {
                    label: "未来机会与增长点",
                    value:
                      "随着“健康中国2030”战略推进，企业对员工健康的重视度达到新高度；数字化福利平台需求爆发。",
                  }],
              },
            }),
          };
          setMessages((prev) => [...prev, reportMsg]);
        }
      }, 4500);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full relative">
      <div>Missing Content</div>
    </div>
  );
}

export default ChatWindow;
