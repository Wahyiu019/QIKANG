import { ProjectManagementCard } from './ProjectManagementCard';
import React, { useState, useRef, useEffect } from "react";
import { Message } from "../types";
import { Bot, Check, User, CheckCircle2, CheckCircle, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Brain, Globe, Book, Save, Terminal, Wrench, Sparkles, Box, Target, Building2, MapPin, DollarSign, Loader2, Users, FileText, Presentation, Mic, Download, FileCheck, Calendar, BellRing, MessageSquare, X, Search, TrendingUp, Briefcase, Award, Layers, ThumbsUp, Cpu, ShieldCheck, PieChart, BarChart3, History, HelpCircle, FileBarChart, Handshake, HeartPulse, LineChart, Lightbulb, Map, UserCircle, MessageCircle, AlertCircle, Diamond, Compass, ListChecks, ShieldAlert, FileSearch, XCircle, Paperclip, AlertTriangle, Info, Circle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function HistoryCooperationReportCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "procurement" | "timeline" | "qikang" | "opportunity"
  >("overview");

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <History size={18} className="mr-2" />
          【云南烟草】历史合作与产品覆盖深度分析报告
        </div>
        <div className="text-white/80 text-sm">大数据分析平台</div>
      </div>

      <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 hide-scrollbar">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-none px-3 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "overview" ? "border-orange-500 text-orange-600 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          合作概况与空白分析
        </button>
        <button
          onClick={() => setActiveTab("procurement")}
          className={`flex-none px-3 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "procurement" ? "border-orange-500 text-orange-600 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          采购数据分析
        </button>
        <button
          onClick={() => setActiveTab("timeline")}
          className={`flex-none px-3 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "timeline" ? "border-orange-500 text-orange-600 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          历史业务线梳理
        </button>
        <button
          onClick={() => setActiveTab("qikang")}
          className={`flex-none px-3 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "qikang" ? "border-orange-500 text-orange-600 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          企康体系与标杆案例
        </button>
        <button
          onClick={() => setActiveTab("opportunity")}
          className={`flex-none px-3 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "opportunity" ? "border-orange-500 text-orange-600 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          合作诉求与机会探讨
        </button>
      </div>

      <div className="p-5 min-h-[300px]">
        {activeTab === "overview" && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <BarChart3 size={16} className="text-orange-500 mr-2" />
                总体合作数据摘要
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-orange-50/40 rounded-xl p-3 border border-orange-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">合作年限</div>
                  <div className="text-xl font-bold text-orange-700">
                    18<span className="text-xs ml-0.5">年</span>
                  </div>
                </div>
                <div className="bg-amber-50/40 rounded-xl p-3 border border-amber-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">
                    近三年采购项目
                  </div>
                  <div className="text-xl font-bold text-amber-700">
                    31<span className="text-xs ml-0.5">个</span>
                  </div>
                </div>
                <div className="bg-orange-50/40 rounded-xl p-3 border border-orange-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">
                    覆盖采购品类
                  </div>
                  <div className="text-xl font-bold text-orange-700">
                    5<span className="text-xs ml-0.5">类</span>
                  </div>
                </div>
                <div className="bg-amber-50/40 rounded-xl p-3 border border-amber-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">
                    企康渗透率
                  </div>
                  <div className="text-xl font-bold text-amber-600">
                    0<span className="text-xs ml-0.5">%</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <Search size={16} className="text-orange-500 mr-2" />
                合作总结与企康空白判断
              </h4>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="mb-3 pb-3 border-b border-gray-200">
                  <p className="text-xs text-gray-700 leading-relaxed font-bold text-orange-800">
                    结论：长情战略硬客，大健康及企康管理面临绝对“零渗透”空白，待挖掘潜力巨大。
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                      size={14}
                    />
                    <span>
                      <strong>信任基石稳固：</strong>{" "}
                      双方具备长达18年的深厚互信，在硬件基础设施、核心系统支持上合作紧密。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                      size={14}
                    />
                    <span>
                      <strong>合作呈严重“偏科”态势：</strong>{" "}
                      平安高度依赖云南烟草的设备与硬件支持，但在反向输出上（如健康管理、企康产品）尚未破局。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target
                      className="text-orange-500 mr-2 flex-shrink-0 mt-0.5"
                      size={14}
                    />
                    <span>
                      <strong>核心痛点与机会：</strong>{" "}
                      云南烟草作为科技巨头，高管及研发人员压力巨大，急需顶峰级的企业健康管理解决方案。
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "procurement" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-sm font-bold text-gray-900 flex items-center mb-3">
              <FileBarChart size={16} className="text-orange-500 mr-2" />
              近三年平安采购数据明细分析
            </h4>
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2.5 text-left text-xs font-bold text-gray-500 uppercase">
                      采购品类
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-bold text-gray-500 uppercase">
                      采购频次 (近三年)
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-bold text-gray-500 uppercase">
                      核心场景
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-xs">
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-900 flex items-center">
                      <span className="w-2 h-2 rounded-sm bg-orange-600 mr-2"></span>
                      计算终端设备
                    </td>
                    <td className="px-4 py-3 text-orange-700 font-bold">
                      14 次
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      平安内勤、外勤办公电脑与平板规模采购。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-900 flex items-center">
                      <span className="w-2 h-2 rounded-sm bg-amber-500 mr-2"></span>
                      服务器
                    </td>
                    <td className="px-4 py-3 text-gray-700 font-medium">
                      8 次
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      平安数据中心底层基础算力底座构建。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-900 flex items-center">
                      <span className="w-2 h-2 rounded-sm bg-orange-500 mr-2"></span>
                      存储设备
                    </td>
                    <td className="px-4 py-3 text-gray-700 font-medium">
                      4 次
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      备份存储阵列与云环境存储节点采购。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-900 flex items-center">
                      <span className="w-2 h-2 rounded-sm bg-amber-400 mr-2"></span>
                      策略规划
                    </td>
                    <td className="px-4 py-3 text-gray-700 font-medium">
                      3 次
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      IT与碳中和发展策略、云转型方案定投。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-900 flex items-center">
                      <span className="w-2 h-2 rounded-sm bg-orange-400 mr-2"></span>
                      品牌合作
                    </td>
                    <td className="px-4 py-3 text-gray-700 font-medium">
                      2 次
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      科技大会支持与大客户联合展厅搭建合作。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-sm font-bold text-gray-900 flex items-center mb-4">
              <TrendingUp size={16} className="text-orange-500 mr-2" />
              历史合作业务线梳理
            </h4>
            <div className="relative pl-6 border-l-2 border-orange-100 space-y-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white border-[3px] border-amber-500 rounded-full z-10 shadow-sm"></div>
                <div className="bg-white border border-gray-200 p-3.5 rounded-xl shadow-sm hover:border-amber-200 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-amber-700">
                      2006年7月
                    </span>
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-2 rounded-full font-bold">
                      史诗开局
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-gray-900 mb-1">
                    中国企年金史上的“0001号单”
                  </h5>
                  <p className="text-[11px] text-gray-600">
                    云南烟草成为平安养老险企年金首单客户，建立跨时代信任基石。
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white border-[3px] border-orange-400 rounded-full z-10 shadow-sm"></div>
                <div className="bg-white border border-gray-200 p-3.5 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-orange-700">
                      2012-2016年
                    </span>
                    <span className="text-[10px] bg-orange-50 text-orange-700 px-2 rounded-full border border-orange-100">
                      基础设施扩张
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-gray-900 mb-1">
                    核心网络与PC规模更替
                  </h5>
                  <p className="text-[11px] text-gray-600">
                    伴随平安金控架构确立，大量引入云南烟草服务器群组及终端设备升级。
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white border-[3px] border-orange-500 rounded-full z-10 shadow-sm"></div>
                <div className="bg-gradient-to-r from-orange-50 to-white border border-orange-200 p-3.5 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-orange-600">
                      2024年初至今
                    </span>
                    <span className="text-[10px] bg-orange-100 text-orange-700 px-2 rounded-full font-bold animate-pulse">
                      突破点
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-gray-900 mb-1">
                    大规模AI算力与终端换新探索
                  </h5>
                  <p className="text-[11px] text-gray-700">
                    迎合大模型落地应用，平安正大规模考察液冷AI服务器与AIPC更换。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "qikang" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-sm font-bold text-gray-900 flex items-center">
              <HeartPulse size={16} className="text-orange-500 mr-2" />
              平安企康产品体系与同业标杆
            </h4>
            <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-4 shadow-sm">
              <h5 className="text-xs font-bold text-orange-800 mb-1.5 flex items-center">
                企康定义与核心优势
              </h5>
              <p className="text-[11px] text-gray-600 mb-2.5 leading-relaxed">
                依托平安全球医疗领先资源，为大型政企客户量身打造强有力的
                <strong>“体检+绿通+慢病干预+员工保障”</strong>
                综合方案。形成健康保障闭环。
              </p>
              <div className="flex gap-2 text-[10px]">
                <span className="bg-white px-2 py-1 rounded text-orange-700 border border-orange-100 font-bold shadow-sm">
                  超10万名医绿通
                </span>
                <span className="bg-white px-2 py-1 rounded text-orange-700 border border-orange-100 font-bold shadow-sm">
                  千人千面健管方案
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="border border-gray-100 rounded-xl p-3.5 bg-white shadow-sm hover:shadow transition-shadow">
                <h5 className="text-xs font-bold text-gray-900 mb-2.5 border-b pb-1.5 border-gray-100">
                  核心企康产品目录
                </h5>
                <ul className="space-y-2 text-[11px] text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-1.5 w-3.5 h-3.5" />
                    高管尊享健康定制套餐
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-1.5 w-3.5 h-3.5" />
                    百强医院名医特需绿色通道
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-1.5 w-3.5 h-3.5" />
                    企业职场专属慢病与理疗站
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-1.5 w-3.5 h-3.5" />
                    EAP心理援助与干预资金
                  </li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-xl p-3.5 bg-gray-50/80 shadow-sm">
                <h5 className="text-xs font-bold text-gray-900 mb-2.5 border-b pb-1.5 border-gray-200">
                  同类科技巨头标杆案例
                </h5>
                <div className="space-y-3 text-[11px]">
                  <div>
                    <div className="font-bold text-orange-700 mb-0.5">
                      某大型通讯巨头 (华为)
                    </div>
                    <div className="text-gray-500 leading-relaxed">
                      部署超4万核心员工VIP体检方案，实现数据跟踪，降低心血管等高危病假率12%。
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-orange-700 mb-0.5">
                      某头部互联网大厂 (腾讯)
                    </div>
                    <div className="text-gray-500 leading-relaxed">
                      覆盖核心高管名医绿通，建立健康档案并进行动态实时干预及预防。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/80 border border-amber-100 rounded-xl p-4 shadow-sm">
              <h5 className="text-xs font-bold text-amber-900 mb-2 flex items-center">
                <MessageSquare size={14} className="mr-1.5" /> 核心推介话术参考
              </h5>
              <div className="bg-white p-3 rounded-lg border border-amber-100 text-[11px]">
                <p className="text-amber-800 italic font-medium leading-relaxed">
                  “杨总您好，平安这些年大量采购云南烟草顶级的AI算力设施，深知先进技术背后是研发团队极致的脑力燃烧，健康压力空前。今天平安拿出最强企康干预体系在H厂、T厂已成功防患。作为回馈云南烟草2006年给平安史诗级企年金0001号单的心意，平安同样想交还云南烟草一份极致的0001号健康绿通特单，为云南烟草中枢常青提供最强医疗算力兜底！”
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "opportunity" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-sm font-bold text-gray-900 flex items-center">
              <LineChart size={16} className="text-orange-500 mr-2" />
              合作诉求与机会探讨
            </h4>

            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2.5 font-bold text-gray-600 w-1/3">
                      核心维度
                    </th>
                    <th className="px-4 py-2.5 font-bold text-gray-600">
                      分析与匹配情况
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 align-top bg-gray-50/50">
                      客户核心需求匹配
                    </td>
                    <td className="px-4 py-3 text-gray-700 leading-relaxed">
                      云南烟草作为硬件科技巨头，高管与核心开发人员（如AIPC研发线）工作强度极大，面临亚健康、颈椎/心血管隐患与高压心理问题。极具对
                      <span className="font-bold text-orange-700">
                        高品质、稀缺医疗通道
                      </span>
                      与日常慢病管理体系的底层需求。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 align-top bg-gray-50/50">
                      合作机会点分析
                    </td>
                    <td className="px-4 py-3">
                      <ul className="space-y-1 text-gray-700">
                        <li>
                          <span className="text-amber-500 mr-1">•</span>
                          <strong>高管破冰点：</strong>
                          以“百强医院名医绿通”作为高管团队特供，提供就医VIP体验。
                        </li>
                        <li>
                          <span className="text-amber-500 mr-1">•</span>
                          <strong>全员覆盖点：</strong>
                          向云南烟草总部或各大研发基地植入“企康职场理疗站”，打通体检后数据追踪盲区。
                        </li>
                        <li>
                          <span className="text-amber-500 mr-1">•</span>
                          <strong>置换策略点：</strong>
                          利用平安即将大批采购AIPC的筹码，进行业务对等置换磋商。
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 align-top bg-gray-50/50">
                      预计合作价值评估
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1.5 text-gray-700">
                        <div>
                          <strong>商业价值：</strong>
                          若成功替代原有体检或保险供应商，预期年化保费及服务费增量可达
                          <span className="font-bold text-orange-600 text-sm">
                            千万级
                          </span>
                          。
                        </div>
                        <div>
                          <strong>战略价值：</strong>
                          补齐平安在大型硬科技巨头“企康生态”的又一核心标杆，带动中关村及上地科技园客群拓展。
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

export function VisitPitchReportCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  const [activeRole, setActiveRole] = useState<'vp' | 'hrd' | 'handler'>('vp');
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-3 font-['Microsoft_YaHei',_'sans-serif']">
      {/* Header */}
      <div className="bg-orange-600 px-6 py-6 text-center text-white flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 tracking-wide">高层拜访提纲</h2>
        <div className="text-white/80 text-sm">
          烟草企业 (分管总 / HRD / 经办人) | 生成时间: 2026/6/13
        </div>
      </div>

      <div className="p-6 overflow-y-auto max-h-[600px] space-y-8 bg-white">

        {/* 角色切换 Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto overflow-y-hidden mb-6">
          <button
            onClick={() => setActiveRole('vp')}
            className={`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeRole === 'vp'
                ? 'text-orange-600 bg-orange-50/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            企业分管总
            {activeRole === 'vp' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveRole('hrd')}
            className={`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeRole === 'hrd'
                ? 'text-amber-600 bg-amber-50/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            人力资源部门 (HRD)
            {activeRole === 'hrd' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 shadow-[0_0_8px_rgba(147,51,234,0.5)]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveRole('handler')}
            className={`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeRole === 'handler'
                ? 'text-orange-600 bg-orange-50/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            业务经办人
            {activeRole === 'handler' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
            )}
          </button>
        </div>

        {/* 方法论速览 */}
        <div className="bg-[#F8F9FB] rounded-lg p-5 border border-gray-100">
          <div className="flex items-center font-bold text-gray-800 mb-3 text-sm">
            <span className="text-red-500 mr-2">📌</span> 话术方法论速览：关联 → 洞察 → 价值
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p><span className="text-gray-500 mr-1">①</span> <strong className="text-gray-700">精准关联：</strong> 点出对方背景或最新动态，证明做过功课，建立"懂你"共鸣</p>
            <p><span className="text-gray-500 mr-1">②</span> <strong className="text-gray-700">行业洞察：</strong> 引申行业共性问题，抛出平安专业视角，展现"懂行"实力</p>
            <p><span className="text-gray-500 mr-1">③</span> <strong className="text-gray-700">价值锚定：</strong> 顾问式口吻落脚"我能帮到你"，强调定制化与共创，绝不推销</p>
            <div className="pt-1 flex items-center text-orange-600 font-medium">
              <span className="mr-1">💡</span> 加分项：平安生态杠杆・数据说话・时效敏感
            </div>
          </div>
        </div>

        {/* 一、拜访概况 */}
        <div>
          <h3 className="text-base font-bold text-orange-700 border-l-[3px] border-orange-600 pl-3 mb-4 flex items-center">
            一、拜访概况
          </h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white text-sm">
            <div className="grid grid-cols-[120px_1fr] border-b border-gray-100">
              <div className="bg-gray-50 py-3 px-4 font-medium text-gray-700 flex items-center">拜访对象</div>
              <div className="py-3 px-4 text-gray-600 flex items-center">烟草企业 (分管总 / HRD / 经办人)</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] border-b border-gray-100">
              <div className="bg-gray-50 py-3 px-4 font-medium text-gray-700 flex items-center">当前关系</div>
              <div className="py-3 px-4 text-gray-600 flex items-center">首次接触，无合作基础，需建立信任</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] border-b border-gray-100">
              <div className="bg-gray-50 py-3 px-4 font-medium text-gray-700 flex items-center">拜访目标</div>
              <div className="py-3 px-4 text-gray-600 flex items-center">建立信任关系，了解企业员工健康管理现状，探索企康补充医疗合作意向</div>
            </div>
            <div className="grid grid-cols-[120px_1fr]">
              <div className="bg-gray-50 py-3 px-4 font-medium text-gray-700 flex items-center">预期结果</div>
              <div className="py-3 px-4 text-gray-600 flex items-center">获取二次沟通机会，邀约方案汇报或安排企业健康需求调研</div>
            </div>
          </div>
        </div>

        {/* 二、开场破冰 */}
        <div>
          <h3 className="text-base font-bold text-[#6D28D9] border-l-[3px] border-[#6D28D9] pl-3 mb-4 flex items-center">
            二、开场破冰 (关联 Relevance)
          </h3>
          
          <div className="space-y-4">
            <div className="border border-amber-100 rounded-lg p-4 bg-white shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">方向1：从烟草行业健康管理政策趋势切入</h4>
              <div className="bg-[#F8F9FA] p-3 text-gray-700 text-sm leading-relaxed mb-3 border-l-[3px] border-gray-300">
                X总/X部长/X老师您好，我是平安企康的[姓名]。今天拜访主要是想跟您交流一下烟草行业在员工健康管理方面的一些新趋势。我们注意到，近两年国家卫健委和国资委对央企国企员工健康管理提出了更高要求，很多兄弟单位都在积极布局。平安作为服务了多家大型央企健康保障的机构，积累了一些经验，想跟您做个分享。
              </div>
              <div className="text-red-500 text-xs flex items-center bg-red-50 p-2 rounded">
                <span className="mr-1">⚠️</span> 首次拜访避免过度推销，以行业交流姿态开场。不提具体产品名称，先建立专业信任。
              </div>
            </div>

            <div className="border border-amber-100 rounded-lg p-4 bg-white shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">方向2：从烟草企业员工健康痛点切入</h4>
              <div className="bg-[#F8F9FA] p-3 text-gray-700 text-sm leading-relaxed mb-3 border-l-[3px] border-gray-300">
                X总，我们之前服务了多家大型烟草企业，发现一个共性现象——烟草行业员工平均年龄普遍在40岁以上，慢病率、职业病风险较高。很多单位在补充医疗和健康管理上投入不小，但员工获得感不强。平安近期在探索一种新的服务模式，把补充医疗和主动健康管理结合起来，效果不错。想听听您这边目前是怎么考虑的？
              </div>
              <div className="text-red-500 text-xs flex items-center bg-red-50 p-2 rounded">
                <span className="mr-1">⚠️</span> 提及行业痛点时用「很多单位」而非「你们」，避免让对方感觉被贴标签。
              </div>
            </div>
          </div>
        </div>

        {/* 三、核心沟通要点 */}
        <div>
          <h3 className="text-base font-bold text-orange-700 border-l-[3px] border-orange-600 pl-3 mb-4 flex items-center">
            三、核心沟通要点 (洞察 Insight)
          </h3>

          <div className="space-y-6">
            
            {activeRole === 'vp' && (
              <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex flex-wrap gap-2 items-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">重点话术</span> 
                分管总常见异议处理
              </div>
              <div className="p-4 space-y-4">
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景一：客户问"做企康对我们有什么政策上的好处？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"这个问题问到了关键点上。平安企康方案对烟草企业的政策帮助，主要体现在三个层面：<br/>
                    第一层：税优红利——直接省钱<br/>
                    根据国家政策，企业为员工支付的补充医疗保险费，在不超过工资总额5%标准内的部分，准予在计算企业所得税应纳税所得额时税前扣除。<br/>
                    举个例子：贵司年工资总额10亿，5%就是5000万——这笔钱如果直接发福利要交25%企业所得税，但通过企康的健康委托管理方案，这5000万可以全额税前列支，直接节省企业所得税1250万。<br/>
                    第二层：合规保障——不怕审计<br/>
                    2020年银保监会发布了《关于进一步规范健康保障委托管理业务有关事项的通知》，2024年保险业新'国十条'进一步明确——平安的企康方案完全符合监管要求，已通过审计署审查。烟草作为央企，合规是底线，平安的方案让您放心做、不怕查。<br/>
                    第三层：国企改革——加分项<br/>
                    国家持续鼓励企业建立多层次医疗保障体系，从2002年'可以做'→2009年'支持做'→2020年'规范做'，政策一直在加码。烟草企业推进员工健康管理，既符合国企改革方向，也是ESG评价的重要加分项。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景二：客户问"5%的税优政策具体怎么用？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"这个5%的税优政策，具体操作路径是这样的：<br/>
                    ① 政策依据：《关于企业补充医疗保险有关问题的通知》（2002年）明确企业可在基本医保基础上建立补充医疗保险；2009年进一步明确5%以内税前扣除。<br/>
                    ② 落地方式：通过平安的健康保障委托管理方案，将补充医疗保险费纳入委托管理账户。这笔费用计入福利费科目，在5%限额内直接税前列支。<br/>
                    ③ 使用范围：委托账户里的钱可以用于——员工门诊/住院报销、健康体检、购药直付、中医理疗、企业医务室运营等，覆盖医健安心四大维度1066项服务。<br/>
                    ④ 平安的优势：平安已服务超6.7万家企业客户，覆盖超50%的央国企，相关业务通过审计署审查——这意味着方案成熟、路径清晰、审计无忧。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景三：客户问"和以前买保险比，做企康在政策上有什么不同？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"这个问题非常专业。传统保险和企康在政策层面有本质区别：<br/>
                    对比维度 | 传统保险 | 平安企康（健康委托管理）<br/>
                    政策定位 | 商业保险，风险转移 | 员工福利，健康管理<br/>
                    税优方式 | 保费列支有限制 | 5%工资总额税前扣除，空间更大<br/>
                    资金使用 | 赔付给个人，用完即止 | 集体+个人双账户，灵活调配<br/>
                    合规依据 | 保险法 | 银保监办发〔2020〕13号+国十条<br/>
                    审计风险 | 保费列支可能被认定为福利费超标 | 明确纳入福利费管理，合规路径清晰<br/>
                    核心差异一句话：保险是'花钱买保障'，企康是'用政策红利做员工健康投资'——同样的预算，企康方案在合规性和税优空间上都更优。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景四：客户问"这对我们央企的合规审计有什么帮助？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"烟草作为央企，合规审计是头等大事。平安企康方案在这方面有三大保障：<br/>
                    ① 政策有据可依<br/>
                    2020年银保监会13号文专门规范了健康保障委托管理业务，平安的方案完全按此框架设计。2024年新'国十条'进一步明确事业单位可使用财政资金购买相关商业健康保险——政策越来越清晰。<br/>
                    ② 实践已验证<br/>
                    平安已服务超50%的央国企，相关业务通过审计署审查。这意味着平安的方案经得起最严格的审计检查。<br/>
                    ③ 资金管理透明<br/>
                    企康采用集体+个人双账户管理模式，每笔支出可追溯、可审计。资金流向清晰，完全符合央企'三重一大'决策要求。<br/>
                    总结：选择平安企康，不是'打擦边球'，而是在政策框架内合规地用好用足福利政策。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景五：客户问"这对我们烟草行业有什么特别的政策意义？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"烟草行业有几个特殊背景，让企康的政策价值更加突出：<br/>
                    ① 国企改革三年行动<br/>
                    国资委要求央企加强员工关怀、完善福利体系。企康方案直接响应这一要求，是国企改革的落地抓手。<br/>
                    ② ESG评价<br/>
                    烟草企业的ESG评级中，'员工健康与安全'是核心指标。平安企康的'防筛管治'体系，能显著提升ESG得分，对融资评级、品牌形象都有帮助。<br/>
                    ③ 退休人员社会化管理<br/>
                    烟草企业退休比例高，退休人员健康管理是刚需。企康方案可以延续退休员工健康服务，解决'人走了、关怀不能断'的难题。<br/>
                    ④ 税优空间充分利用<br/>
                    烟草企业工资总额大，5%的税优空间非常可观。用好这个政策，相当于用政策红利反哺员工健康，一举两得。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景六：客户问"政策未来会不会变？现在做会不会有风险？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"从政策演进脉络看，国家对企业健康管理的态度是持续加码的：<br/>
                    2002年：'可以做'——首次明确鼓励建立补充医保<br/>
                    2009年：'支持做'——明确5%税前扣除<br/>
                    2020年：'规范做'——银保监会13号文规范健康委托管理<br/>
                    2024年：'深化做'——新国十条明确财政资金可购买健康保险<br/>
                    政策方向非常清晰：国家在推动企业从'基本保障'走向'多层次健康保障'。企康是医保控费趋严、个人支付压力加大的大背景下，国家鼓励的方向。<br/>
                    平安作为综合金融集团，40年深耕医疗健康领域，对政策走向有深度把握。选择平安，就是选了一个懂政策、守合规、能落地的长期伙伴。"
                  </p>
                </div>
                
                <div className="bg-green-50/50 p-3 rounded border border-green-100">
                  <p className="text-sm font-bold text-green-800 mb-1">💡 一句话总结</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "平安企康帮烟草企业用好5%税优政策红利，合规落地员工健康管理，既省税、又合规、更得人心——是央企国企改革背景下的最优解。"
                  </p>
                </div>

              </div>
            </div>
              </div>
            )}

            {activeRole === 'hrd' && (
              <div className="space-y-6">
    
             <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex flex-wrap gap-2 items-center">
                <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">HRD关注</span> 
                重点4：员工有什么实际好处？ | 重点5：对企业文化、ESG有什么帮助？
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-800">关于员工好处：</strong>"第一，看病更省钱。第二，看病更方便。第三，健康有人管。第四，家人也能受益... 简单说就是：看病少花钱、小病不出门、健康有人管、家人也受益。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-800">关于企业文化与ESG：</strong>"员工健康福利是最有温度的企业文化载体... ESG方面，员工健康管理直接对应社会（S）维度。我们可以协助编制ESG报告中的员工健康板块，提供数据支撑和案例素材。"
                </p>
              </div>
            </div>


              </div>
            )}

            {activeRole === 'handler' && (
              <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 font-bold text-gray-800 flex flex-wrap gap-2 items-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">重点话术</span> 
                经办人常见异议处理
              </div>
              <div className="p-4 space-y-4">
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景一：客户问"平安和原来的供应商比有什么不一样？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"这个问题问得很关键。简单说，平安和其他供应商最大的区别在于三个字——'体系化'。
                    传统供应商通常只做单一环节——要么只做体检、要么只做保险理赔、要么只做医务室。但平安提供的是<strong>'健康委托管理+会员制健康管理+保险'的组合方案，覆盖医、健、安、心</strong>四大维度33个子类1066项服务。
                    打个比方：别的供应商是给员工开一个'药店'，平安是给企业建一座'健康大厦'——从体检筛查、慢病管理、在线问诊、就医绿通、企业医务室到心理健康，全链条打通。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景二：客户问"平安的服务网络能覆盖我们全国的分公司吗？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"这正是平安的核心优势之一。平安已服务超50%的大中型央国企和外企，服务网络遍布全国，累计服务超8万家企业客户、3100万名员工。
                    具体来说：<br/>
                    医疗网络：以北大国际医疗集团为核心，覆盖国内4000家医院、1300+海外权威机构<br/>
                    专家资源：合作国内外名医、院士、国医大师近3000名<br/>
                    服务能力：7×24小时专属家庭医生团队支持<br/>
                    像贵司这样全省15家分公司、员工遍布各地的烟草企业，平安可以做到统一标准、集中管理、全国覆盖，这是区域性供应商做不到的。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景三：客户问"平安的价格是不是比别的贵？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"从单点价格看，平安可能不是最便宜的。但从综合性价比看，平安是最优选择。
                    原因有三：<br/>
                    ① 一揽子解决：体检+医务室+慢病管理+就医绿通+心理健康，全部在一个平台解决，省去多头对接的管理成本<br/>
                    ② 规模效应：平安服务3100万员工，采购和服务成本被摊薄，同样的预算在平安能买到更丰富的服务<br/>
                    ③ 税优合规：平安的健康委托管理方案完全合规，福利费可纳入税前列支，财务上更划算<br/>
                    举个实际案例：某烟草央企二级单位，原委托规模400万，升级到平安方案后增加到1000万，但新增了600万的体检服务，员工满意度大幅提升——不是多花钱，是把钱花在了刀刃上。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景四：客户问"你们的企业医务室和外面第三方医务室有什么区别？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"区别很大。第三方医务室通常只是租个场地、派个护士，服务很有限。
                    平安的企业医务室是<strong>'防筛管治'一体化体系的线下枢纽</strong>：<br/>
                    线上联动：员工在医务室检查的数据，直接同步到家庭医生端，7×24h在线跟进<br/>
                    资源打通：医务室解决不了的，直接通过平安绿通转诊到三甲医院，不用员工自己跑<br/>
                    慢病管理：不只是看病开药，而是建立健康档案，对高血压、糖尿病等慢病进行持续跟踪<br/>
                    健康活动：定期安排名医进企讲座、中医理疗、AED培训等<br/>
                    简单说：别人的医务室是一个点，平安的医务室是一张网的入口。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景五：客户问"平安在烟草行业有什么经验？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"平安在烟草行业已经有非常成熟的合作案例：<br/>
                    案例一：某大型烟草企业（2.5万人），平安已持续服务超10年，合作覆盖年金+保险+委托+服务，委托年缴费超1亿元。我们为它量身定制了'8+4'企康方案，建设了企业医务室，员工满意度99%。<br/>
                    案例二：某烟草央企二级单位（3850人在职+3150人退休），合作超10年，委托规模从400万提升至1000万，新增体检服务600万，现合作涵盖企补+委托+年金+团养。<br/>
                    烟草行业员工平均年龄偏大、退休比例高、慢病率高——这些特征平安非常熟悉，方案设计就是围绕这些痛点来的。"
                  </p>
                </div>
                
                <div className="bg-orange-50/50 p-3 rounded border border-orange-100">
                  <p className="text-sm font-bold text-orange-800 mb-1">场景六：客户问"你们怎么帮我们解决员工年龄大、不会用手机的问题？"</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>话术：</strong>"这个问题我们在烟草客户中已经遇到过并解决了。
                    我们为某烟草总公司专门定制了<strong>'适老化'宣导方案</strong>：<br/>
                    ① 线下为主：邀请贵州本地名医、主治级别中医师进企面对面问诊，员工不用通过手机也能享受服务<br/>
                    ② 手把手教学：健康直付使用流程，安排专人一对一指导，直到学会为止<br/>
                    ③ 场景化体验：结合中医肩颈活动、项目体验等，寓教于乐<br/>
                    最终效果：宣导覆盖率95%，激活率98%，员工满意度99%。员工反馈'学会了用APP享受健康服务，中医专家问诊体验极佳'。"
                  </p>
                </div>
                
                <div className="bg-green-50/50 p-3 rounded border border-green-100">
                  <p className="text-sm font-bold text-green-800 mb-1">💡 一句话总结平安差异化优势</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "平安不是卖单一产品的供应商，而是为企业搭建'医健安心'全生命周期健康管理体系的战略合作伙伴。40年行业积淀、4000家医院网络、3100万员工服务经验、1066项服务覆盖——这些数字背后，是任何单一供应商都无法复制的体系化能力。"
                  </p>
                </div>

              </div>
            </div>
              </div>
            )}          </div>
        </div>

        {/* 四、产品自然切入 */}
        <div>
          <h3 className="text-base font-bold text-[#166534] border-l-[3px] border-[#166534] pl-3 mb-4 flex items-center">
            四、产品自然切入 (价值 Value)
          </h3>
          <div className="border border-green-200 rounded-lg p-5 bg-white shadow-sm space-y-4">
            <div className="text-sm text-gray-700">
              <div className="font-bold text-red-600 flex items-center mb-2"><span className="mr-1">🎯</span> 切入时机</div>
              <p>在沟通要点中，当对方对行业趋势或员工痛点产生共鸣时，自然过渡到方案介绍。<br/>- 分管总：当对方问「你们具体怎么做」或「有什么方案」时<br/>- HRD：当对方认同员工健康管理的重要性时<br/>- 经办人：当对方表示「可以看看方案」时</p>
            </div>
            
            <div>
               <div className="text-xs text-gray-500 mb-1 flex items-center"><span className="mr-1">💬</span> 衔接话术</div>
               <div className="bg-[#f0fdf4] border-[1px] border-green-200 p-3 text-sm text-gray-700 leading-relaxed rounded">
                 X总/X部长/X老师，既然您对这个方向感兴趣，我简单介绍一下平安企康的补充医疗解决方案：<br/><br/>
                 我们的核心模式是健康委托管理——企业将补充医疗保障资金委托平安管理，平安提供方案设计、费用审核、健康管理、数据分析等全流程服务。<br/><br/>
                 具体包括四大模块：<br/>
                 1. 补充医疗保障：覆盖门诊、住院、重疾等，员工看病报销更省心<br/>
                 2. 健康管理服务：体检管理、慢病管理、线上问诊、企业医务室等<br/>
                 3. 数据化运营：实时健康数据分析，为企业决策提供依据<br/>
                 4. 员工服务平台：统一APP/小程序入口，一站式体验<br/><br/>
                 我们不是卖保险，而是帮企业搭建一套完整的员工健康保障体系。具体方案可以根据贵单位的预算、人员结构、福利政策灵活定制。如果方便的话，我们可以安排一次专题汇报。
               </div>
            </div>
          </div>
        </div>

        {/* 五、建议提问清单 */}
        <div>
          <h3 className="text-base font-bold text-[#B45309] border-l-[3px] border-[#B45309] pl-3 mb-4 flex items-center">
            五、建议提问清单
          </h3>
          <div className="overflow-hidden rounded-lg border border-orange-200 shadow-sm">
             <table className="w-full text-sm text-left">
               <thead className="bg-[#D97706] text-white">
                 <tr>
                   <th className="px-3 py-2 text-center w-12">序号</th>
                   <th className="px-4 py-2">提问内容</th>
                   <th className="px-3 py-2 text-center w-16">场景</th>
                   <th className="px-4 py-2">目的</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-orange-100 bg-white text-gray-700">
                 <tr className="hover:bg-orange-50/50">
                   <td className="px-3 py-3 text-center">1</td>
                   <td className="px-4 py-3">贵单位目前在员工健康管理方面，最关注的是哪些方面？有没有什么痛点或想改善的地方？</td>
                   <td className="px-3 py-3 text-center text-orange-600 font-medium">试探</td>
                   <td className="px-4 py-3">了解对方现状和需求，为后续方案设计收集信息</td>
                 </tr>
                 <tr className="hover:bg-orange-50/50">
                   <td className="px-3 py-3 text-center">2</td>
                   <td className="px-4 py-3">目前贵单位的补充医疗保障是怎么做的？是自管还是委托第三方？员工满意度如何？</td>
                   <td className="px-3 py-3 text-center text-amber-600 font-medium">深入</td>
                   <td className="px-4 py-3">了解现有保障模式，找到优化空间</td>
                 </tr>
                 <tr className="hover:bg-orange-50/50">
                   <td className="px-3 py-3 text-center">3</td>
                   <td className="px-4 py-3">如果引入新的健康管理模式，您最看重的是哪几个方面？成本控制、员工体验、还是合规保障？</td>
                   <td className="px-3 py-3 text-center text-orange-600 font-medium">试探</td>
                   <td className="px-4 py-3">了解对方决策优先级，调整后续沟通重点</td>
                 </tr>
                 <tr className="hover:bg-orange-50/50">
                   <td className="px-3 py-3 text-center">6</td>
                   <td className="px-4 py-3">关于后续沟通，您看我们是先安排一次专题方案汇报，还是先做一个员工健康需求调研，用数据说话？</td>
                   <td className="px-3 py-3 text-center text-green-600 font-medium">收拢</td>
                   <td className="px-4 py-3">引导下一步行动，锁定二次沟通机会</td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>

        {/* 六、收尾与下一步 */}
        <div>
          <h3 className="text-base font-bold text-orange-700 border-l-[3px] border-orange-600 pl-3 mb-4 flex items-center">
            六、收尾与下一步
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="border border-green-200 rounded-lg p-4 bg-[#F0FDF4] shadow-sm">
                <h4 className="font-bold text-green-800 flex items-center mb-3">
                  <span className="bg-green-600 text-white p-0.5 rounded mr-2">✅</span> 达成预期结果
                </h4>
                <div className="text-sm text-gray-700 leading-relaxed border-l-2 border-green-400 pl-3">
                  非常感谢X总/X部长/X老师今天的宝贵时间。通过刚才的交流，我对贵单位的需求有了更深入的了解。<br/><br/>
                  接下来我建议这样推进：<br/>
                  1. 我回去整理一份针对贵单位的初步方案框架...<br/>
                  2. 大约一周内发给您，您看看方向是否合适<br/>
                  3. 如果方向对路，我们再安排一次专题汇报...<br/><br/>
                  您看这样安排可以吗？另外，如果方便的话，能否加个微信，后续沟通更方便？
                </div>
             </div>
             <div className="border border-orange-200 rounded-lg p-4 bg-[#F0F9FF] shadow-sm">
                <h4 className="font-bold text-orange-800 flex items-center mb-3">
                  <span className="bg-orange-600 text-white p-0.5 rounded mr-2">🔄</span> 未达成预期结果
                </h4>
                <div className="text-sm text-gray-700 leading-relaxed border-l-2 border-orange-400 pl-3">
                  非常感谢您今天的宝贵时间。虽然今天只是初步交流，但我收获很大，对贵单位的需求有了更清晰的了解。<br/><br/>
                  我回去后会整理一份行业案例资料和初步思路，发给您参考。如果您后续有任何需要，随时联系我。<br/><br/>
                  另外，我们近期会举办一场央企国企健康管理专题沙龙，会邀请几家烟草行业的同行交流，如果您感兴趣，我可以给您发邀请函。
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* Footer / Buttons */}
      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b-xl">
        <button onClick={onDownload} className="flex gap-2 items-center px-5 py-2.5 bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-bold rounded-lg shadow-sm transition-colors cursor-pointer">
           下载完整报告 (PDF)
        </button>
      </div>
    </div>
  );
}

export function ComplianceAnalysisReportCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"diff" | "strategy">("diff");

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <ShieldCheck size={18} className="mr-2" />
          企康与保险差异及合规化路径深度分析
        </div>
        <div className="text-white/80 text-sm">合规分析与策略中心</div>
      </div>

      <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 hide-scrollbar">
        <button
          onClick={() => setActiveTab("diff")}
          className={`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "diff" ? "border-orange-600 text-orange-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          企康与保险本质差异
        </button>
        <button
          onClick={() => setActiveTab("strategy")}
          className={`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "strategy" ? "border-orange-600 text-orange-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          合规转自保与委托策略
        </button>
      </div>

      <div className="p-5 min-h-[300px]">
        {activeTab === "diff" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-sm font-bold text-gray-900 border-l-4 border-orange-500 pl-2">
              一、企康与保险的差异（合规视角）
            </h4>
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2.5 font-bold text-gray-600 w-1/4">
                      对比维度
                    </th>
                    <th className="px-4 py-2.5 font-bold text-orange-700 w-3/8">
                      企业健康管理（企康）
                    </th>
                    <th className="px-4 py-2.5 font-bold text-orange-700 w-3/8">
                      传统商业保险
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 bg-gray-50/50">
                      1. 业务性质差异
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      本质为<strong>健康预警与干预服务</strong>
                      ，以降低疾病发生率和提高整体员工健康效能为核心，属于
                      <span className="text-orange-600 font-bold">
                        一般服务业范畴
                      </span>
                      。
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      本质为<strong>风险转移与财务补偿</strong>
                      ，以大数法则为基础，发生约定保险事故时给予经济赔偿，属于
                      <span className="text-orange-600 font-bold">
                        金融保险特许经营范畴
                      </span>
                      。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 bg-gray-50/50">
                      2. 监管框架差异
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      由卫健委、市场监管总局等进行常态化监督，
                      <strong>无类似金融牌照的强制性准入门槛</strong>。
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      受国家金融监督管理总局（原银保监会）严格监管，
                      <strong>必须持有相关保险业务经营牌照</strong>。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 bg-gray-50/50">
                      3. 合同要求差异
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      适用《民法典》服务合同相关编章，自由度较高，可根据企业诉求高度定制体检、慢病管理、绿通等项目条款。
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      适用专门的《保险法》，合同涉及极强的格式条款要求，强调如实告知义务、免责条款明确说明义务等。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 bg-gray-50/50">
                      4. 资金机制差异
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      企业直接支付服务采购费（服务费发票），多采用"据实结算"或"打包一口价"，资金池属于企业自有或服务方对等服务流结转。
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      形成“保费池”（保险费发票），必须依法提取各项准备金，受监管机构严格审查保险资金运用及偿付能力。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 bg-gray-50/50">
                      5. 税前扣除政策
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      往往可纳入职工福利费范围，按发生额的不超过工资薪金总额
                      <strong>14%</strong>的比例在企业所得税前扣除。
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      补充医疗保险费在不超过职工工资总额<strong>5%</strong>
                      标准内的部分，在计算企业所得税时准予扣除。
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50/20">
                    <td className="px-4 py-3 font-bold text-gray-800 bg-gray-50/50">
                      6. 服务范围差异
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      高频、广覆盖，包括且不限于：年度体检、职业病筛查、EAP心理辅导、企业内部医务室建设、高管特需绿通就医等。
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      相对低频，集中在突发重大疾病理赔、意外残疾/身故赔偿、住院医疗费用实报实销等“兜底性”场景。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "strategy" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-sm font-bold text-gray-900 border-l-4 border-amber-500 pl-2">
              二、合规转自保：策略与推进路径
            </h4>

            <div className="grid grid-cols-1 gap-3 mt-3">
              <div className="bg-amber-50/80 border border-amber-100 p-3.5 rounded-lg shadow-sm">
                <h5 className="text-[11px] font-bold text-amber-800 mb-1.5 flex items-center">
                  <FileCheck size={12} className="mr-1" /> 1. 企康合规推进要点
                </h5>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  建立清晰的服务界限，避免过度承诺“理赔补偿”等敏感字眼防止被认定为非法从事保险业务，聚焦于实质物理及健康指导类服务履约。
                </p>
              </div>
              <div className="bg-orange-50/80 border border-orange-100 p-3.5 rounded-lg shadow-sm">
                <h5 className="text-[11px] font-bold text-orange-800 mb-1.5 flex items-center">
                  <FileText size={12} className="mr-1" /> 2. 合同管理合规
                </h5>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  服务协议需写明具体服务项目明细、频次及单价，杜绝涉及“免赔额”、“理赔范围”等保险专属黑话，由企业采购或行政部门与三方健管机构直接签署服务采购协议。
                </p>
              </div>
              <div className="bg-amber-50/80 border border-amber-100 p-3.5 rounded-lg shadow-sm">
                <h5 className="text-[11px] font-bold text-amber-800 mb-1.5 flex items-center">
                  <DollarSign size={12} className="mr-1" /> 3. 资金管理合规
                </h5>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  不可建立带有公募性质或保本保息隐患的员工互助资金池，企业支付的款项应单独核算，开具增值税普通发票，并合理运用税务政策进入职工福利费列支账户。
                </p>
              </div>
              <div className="bg-orange-50/80 border border-orange-100 p-3.5 rounded-lg shadow-sm">
                <h5 className="text-[11px] font-bold text-orange-800 mb-1.5 flex items-center">
                  <AlertCircle size={12} className="mr-1" /> 4. 自保模式合规风险
                </h5>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  企业如果自行充当“类似承保人”角色报销大额医疗费，存在非法集资及变相经营金融业务的系统性法律红线风险，且巨灾冲击下自营赔付池易穿仓。
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <h5 className="text-xs font-bold text-gray-900 border-b pb-2 mb-2">
                转委托模式及演进总结
              </h5>
              <ul className="space-y-2 text-[11px] text-gray-600">
                <li className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 font-bold px-1.5 rounded mr-2 mt-0.5 whitespace-nowrap">
                    5. 自保转委托策略
                  </span>
                  <span>
                    引入专业持牌第三方TPA（第三方管理公司）或大型保险公司/健管集团进行受托管理，利用后者成熟的网络结算是唯一出路，实现风险阻断与税务合规。
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 font-bold px-1.5 rounded mr-2 mt-0.5 whitespace-nowrap">
                    6. 成功案例
                  </span>
                  <span>
                    某大型央企集团废除自营医疗员工统筹基金，以每年3亿元预算向平安集团集中统一采购“补充商业医疗与全球医疗绿通服务”，平稳解决数万人历史遗留待遇问题。
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 font-bold px-1.5 rounded mr-2 mt-0.5 whitespace-nowrap">
                    7. 监管政策演进
                  </span>
                  <span>
                    监管正强化“持牌经营”与“消费者权益保护”，打击“伪自保”及“黑网端互助”平台。趋向于鼓励险企建立“保险+大健康管理”一体化服务生态。
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 font-bold px-1.5 rounded mr-2 mt-0.5 whitespace-nowrap">
                    8. 制度体系清单
                  </span>
                  <span>
                    在向受托模式转型中，企业需自建：《员工福利与健康管理采购招标与决策制度》、《健管供应商绩效及医疗质量评价审计标准》、《合规涉税发票清分指引》。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

export function BiddingDocumentAnalysisCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "requirements" | "scoring" | "health"
  >("overview");

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <FileText size={18} className="mr-2" />
          招标文件解读报告 - 企康项目
        </div>
      </div>

      <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 hide-scrollbar">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "overview" ? "border-amber-600 text-amber-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          项目概括与资质
        </button>
        <button
          onClick={() => setActiveTab("requirements")}
          className={`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "requirements" ? "border-amber-600 text-amber-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          报价与响应要求
        </button>
        <button
          onClick={() => setActiveTab("scoring")}
          className={`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "scoring" ? "border-amber-600 text-amber-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          评分标准与废标
        </button>
        <button
          onClick={() => setActiveTab("health")}
          className={`flex-none px-4 py-2.5 text-center text-xs font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === "health" ? "border-amber-600 text-amber-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"}`}
        >
          体检需求要点
        </button>
      </div>

      <div className="p-5 min-h-[250px]">
        {activeTab === "overview" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">
                1、项目概括
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-amber-800">项目名称：</strong>
                云南烟草公司2024-2027年补充医疗保险服务项目（二次）
                <br />
                <strong className="text-amber-800">招标编号：</strong>
                YNYC-2024-001
                <br />
                <strong className="text-amber-800">项目预算：</strong>
                约千万级别
                <br />
                <strong className="text-amber-800">项目背景：</strong>
                为提升企业补充医疗保障水平，提供涵盖门急诊/住院报销及重疾援助的一体化健康管理解决方案。
              </p>
            </div>
            <div className="bg-orange-50/80 border border-orange-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-3">
                2、投标人资质要求
              </h4>
              <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                <li>具有独立承担民事责任的能力及相关营业执照。</li>
                <li>
                  具备省级及以上卫生行政部门颁发的《医疗机构执业许可证》。
                </li>
                <li>拥有覆盖全国至少30个重点城市的实体医疗或合作体检网络。</li>
                <li>
                  近三年内(2023年至今)具有至少3个合同金额在1000万元以上的同类项目成功案例。
                </li>
                <li>不接受联合体投标，严禁转包和违法分包。</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "requirements" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3">
                3、报销范围及起付标准
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                以<strong>《补充医疗保障管理办法》</strong>为准，保障人群覆盖在职、退休及特殊人群。
              </p>
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-amber-100 text-amber-900">
                    <th className="p-2 border border-amber-200 font-bold">字段抽取类别</th>
                    <th className="p-2 border border-amber-200 font-bold">详细规定</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">保障人群</td>
                    <td className="p-2 border border-amber-200">在职/退休/特殊人群</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">报销范围</td>
                    <td className="p-2 border border-amber-200">门诊/急诊/住院</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">统筹起付线</td>
                    <td className="p-2 border border-amber-200">补充医疗从4000起赔</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">企业承担部分</td>
                    <td className="p-2 border border-amber-200">赔付比例75%-90%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-amber-200 font-bold">特殊限制</td>
                    <td className="p-2 border border-amber-200 text-red-600">需定点医院或医保内药品</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
                4、响应文件要求
              </h4>
              <ul className="list-decimal pl-5 text-xs text-gray-700 space-y-1">
                <li>提交法定代表人授权书、资质证明文件复印件(加盖公章)。</li>
                <li>技术部分需说明理赔服务对接方案、理赔时效承诺及理赔纠纷处理预案等。</li>
                <li>商务部分需提供报价明细表，正本1份，副本5份，U盘电子版1份。</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "scoring" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                <thead className="bg-amber-50">
                  <tr>
                    <th
                      className="px-4 py-2.5 font-bold text-amber-900"
                      colSpan={3}
                    >
                      5、评分标准 (综合评分法，满分100分)
                    </th>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 text-gray-600 font-bold">维度</th>
                    <th className="px-4 py-2 text-gray-600 font-bold">满分</th>
                    <th className="px-4 py-2 text-gray-600 font-bold">
                      评分细则
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 font-bold">商务报价</td>
                    <td className="px-4 py-2 font-bold text-amber-700">30分</td>
                    <td className="px-4 py-2 text-gray-700">
                      以满足要求且评标价最低的为基准价(30分)。偏离基准价按比例扣分。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold">技术方案</td>
                    <td className="px-4 py-2 font-bold text-amber-700">45分</td>
                    <td className="px-4 py-2 text-gray-700">
                      系统对接能力(15分)、健康管理干预模型(15分)、体检网络广度与质量控制(15分)。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold">项目经验</td>
                    <td className="px-4 py-2 font-bold text-amber-700">15分</td>
                    <td className="px-4 py-2 text-gray-700">
                      近三年万人级企业健康管理标杆案例，每个3分，最高15分。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold">服务团队</td>
                    <td className="px-4 py-2 font-bold text-amber-700">10分</td>
                    <td className="px-4 py-2 text-gray-700">
                      项目经理经验、团队资质(含三甲医院主治以上医师、公卫专家比例)。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-orange-50/80 border border-orange-200 p-4 rounded-lg shadow-sm">
              <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-3">
                6、废标条款 (重大警示风险点)
              </h4>
              <div className="flex gap-2">
                <AlertCircle
                  size={16}
                  className="text-orange-600 mt-0.5 flex-shrink-0"
                />
                <ul className="list-disc pl-4 text-xs text-orange-800 space-y-1">
                  <li>未按时交纳人民币50万元的投标保证金。</li>
                  <li>发现提供虚假资质证明、伪造过往业绩的。</li>
                  <li>
                    核心要求不满足，如：“无法实现在线预约、退改和报告一站式在线解读闭环”。
                  </li>
                  <li>串通投标或以他人名义投标的。</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "health" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-orange-50/80 border border-orange-100 p-4 rounded-lg shadow-sm h-full">
              <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-3">
                7、体检需求要点与增值服务
              </h4>

              <div className="space-y-3">
                <div>
                  <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-[11px] font-bold mb-1">
                    专项健康筛查
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed border-l-2 border-orange-400 pl-2">
                    必选项包含：心脑血管风险深度评估、消化道早癌筛查（无痛胃肠镜）、肺部低剂量螺旋CT、女性两癌筛查升级版等。
                  </p>
                </div>
                <div>
                  <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-[11px] font-bold mb-1">
                    数据安全闭环
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed border-l-2 border-orange-400 pl-2">
                    要求中标人能够自建或对接企业内部系统，支持体检报告脱敏后在企业内网进行聚合查询，且符合《数据法》隐私合规。
                  </p>
                </div>
                <div>
                  <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-[11px] font-bold mb-1">
                    后端管理干预
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed border-l-2 border-orange-400 pl-2">
                    体检后一个月内，需驻场开展不少于5场“三高、甲状腺结节、脊柱健康”等专项解读会；对重症预警员工提供复查指导及3次以内的名医问诊费用报销豁免及绿通挂号。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

export function BidGenerationCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
          云南烟草公司补充医疗投标书（初稿）
        </div>
        <span className="text-white text-xs px-3 py-1 bg-white/20 rounded-full border border-white/30">
          已智能组装 100%
        </span>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 border-l-4 border-orange-500 pl-3">第一版方案输出</h3>
          <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full border border-orange-200">内部机密</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 shadow-sm transform transition-transform hover:scale-[1.02]">
            <h4 className="text-orange-900 font-bold mb-3 flex items-center border-b border-orange-200 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              覆盖评估卡
            </h4>
            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-gray-900 leading-none">78<span className="text-xl">%</span></span>
              <span className="ml-2 text-sm text-gray-500 font-medium mb-1">标准产品可覆盖 (演示)</span>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2 mb-3 mt-2 overflow-hidden">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <p className="text-xs text-gray-600">
              剩余22%为特殊非保项，需法务及精算团队介入二次测算审批。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 shadow-sm transform transition-transform hover:scale-[1.02]">
            <h4 className="text-amber-900 font-bold mb-3 flex items-center border-b border-amber-200 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              建议标准报价
            </h4>
            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-red-600 leading-none">1,620</span>
              <span className="ml-2 text-sm text-gray-600 font-medium mb-1">元/人/年</span>
            </div>
            <p className="text-xs text-amber-700 bg-amber-100/50 px-2 py-1.5 rounded inline-block mt-1 font-medium">
              * 基于历史理赔数据与同业利润率(15%)预测得出
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm mt-4">
          <h4 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">六大核心章节已就绪</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-700">
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 一、投标函及授权文件</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 二、商务资质证明文件</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 三、技术响应文件 (含理赔系统)</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 四、报价明细表</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg> 五、服务与运营保障体系</li>
            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mr-2 flex-shrink-0"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> 六、附加承诺与增值方案 (待定)</li>
          </ul>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button onClick={onDownload} className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            一键下载统装标书 (.docx)
          </button>
        </div>
      )}
    </div>
  );
}
export function BidInspectionCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-red-600 to-red-400 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          合规风险检查报告
        </div>
        <span className="text-red-100 text-xs px-3 py-1 bg-red-800/30 rounded-full border border-red-400/30">
          核心项拦截：是
        </span>
      </div>

      <div className="p-6 space-y-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">多维度风险分类</h3>
        <p className="text-sm text-gray-500 mb-4">智能解析企业赔付盲点与运营风险预警，支持一键拦截。</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50/50 border border-red-200 rounded-lg p-5 shadow-sm">
            <h4 className="flex items-center text-red-800 font-bold mb-3 border-b border-red-200 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2 shadow-sm animate-pulse"></span>
              核保类风险 (高风险)
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-gray-900">健康体检限制：</strong>未提供往期大病历史数据明细，预测赔付率可能超出90%的保底统筹起付线红线。</li>
              <li><strong className="text-gray-900">年龄结构分布：</strong>退休职工占比偏高，高血压/糖尿病等慢病发病率超均值。</li>
            </ul>
          </div>
          <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-5 shadow-sm">
            <h4 className="flex items-center text-amber-800 font-bold mb-3 border-b border-amber-200 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2 shadow-sm"></span>
              理赔类风险 (中风险)
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-gray-900">结算争议点：</strong>跨省异地就诊补充协议未明确结报标准。</li>
              <li><strong className="text-gray-900">票据报销合规：</strong>部分基层卫生院未完成医保联网直赔，可能引发大量手工材料报错。</li>
            </ul>
          </div>
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-5 shadow-sm">
            <h4 className="flex items-center text-emerald-800 font-bold mb-3 border-b border-emerald-200 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2 shadow-sm"></span>
              运营类风险 (低风险)
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-gray-900">体检宣发：</strong>宣传物料要求3周内覆盖全国47个下属机构，存在一定交付并发压力。</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 border-t border-gray-100 pt-5 mt-2">
          <div className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-600 font-bold">建议：需业务团队补充核心人员名单明细并重新评估风险溢价。</div>
        </div>
      </div>
    </div>
  );
}

export function MaterialReviewCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <FileSearch size={18} className="mr-2" />
          材料智能审查报告 - 企康项目
        </div>
        <div className="px-2.5 py-1 bg-orange-500 text-white rounded text-xs font-bold shadow-sm">
          不通过
        </div>
      </div>

      <div className="p-5 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden text-xs">
          <table className="min-w-full divide-y divide-gray-200 text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 font-bold text-gray-600">审查项</th>
                <th className="px-4 py-2 font-bold text-gray-600">审查内容</th>
                <th className="px-4 py-2 font-bold text-gray-600 w-24">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-bold text-gray-800">
                  资质完整性
                </td>
                <td className="px-4 py-3 text-gray-600">
                  营业执照、执业许可证、法人授权委托书、近三年财务审计报告审查。
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded">
                    <CheckCircle size={14} /> 正常
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-gray-800">合同要件</td>
                <td className="px-4 py-3 text-gray-600">
                  合同主体、服务期限、收款账户信息、违约责任条款齐备性检查。
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded">
                    <CheckCircle size={14} /> 正常
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-gray-800">发票金额</td>
                <td className="px-4 py-3 text-gray-600">
                  发票抬头、税号比对，开票总额（¥50,000,000）与合同金额匹配度核验。
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded">
                    <CheckCircle size={14} /> 正常
                  </span>
                </td>
              </tr>
              <tr className="bg-orange-50/30">
                <td className="px-4 py-3 font-bold text-orange-800 border-l-2 border-orange-500">
                  附件清晰度
                </td>
                <td className="px-4 py-3 text-gray-700">
                  相关人员（主治医师/公卫专家）执业资格证扫描件、授权签名清晰度。
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-orange-600 font-bold bg-orange-100 px-2 py-1 rounded">
                    <XCircle size={14} /> 异常
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-bold text-orange-900 border-b border-orange-200 pb-2 mb-2 flex items-center">
            <AlertCircle size={16} className="mr-2 text-orange-600" />
            审查结论：不通过
          </h4>
          <p className="text-xs text-orange-800 leading-relaxed">
            <strong>理由：</strong>
            <br />
            1.
            提供的《医疗机构执业许可证》附件扫描件分辨率过低，无法清晰识别有效期截止日期及发证机关印章，存在重大合规风险。
            <br />
            2.
            项目经理简历附件中，缺少承诺的“具备PMP项目管理证书”的实质性复印件材料。
            <br />
            <br />
            <strong>建议：</strong>
            请重新上传相关人员资格证书原件的高清彩色扫描件（要求分辨率不低于
            300dpi 且无遮挡）。
          </p>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

interface TypewriterTextProps {
  text: string;
  timestamp?: any;
  render: (content: string) => React.ReactNode;
  disableTyping?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  timestamp,
  render,
  disableTyping,
}) => {
  const isNew =
    timestamp &&
    Date.now() - new Date(timestamp).getTime() < 12000 &&
    !disableTyping;

  if (!isNew) {
    return <>{render(text)}</>;
  }

  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let index = 0;
    let timer: any = null;

    let speed = 20;
    if (text.length > 500) {
      speed = 3;
    } else if (text.length > 200) {
      speed = 6;
    } else if (text.length > 100) {
      speed = 10;
    }

    timer = setInterval(() => {
      index++;
      if (index >= text.length) {
        clearInterval(timer);
        setCurrentText(text);
      } else {
        setCurrentText(text.slice(0, index));
      }
    }, speed);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [text]);

  useEffect(() => {
    const containers = document.querySelectorAll(".overflow-y-auto");
    containers.forEach((container) => {
      container.scrollTop = container.scrollHeight;
    });
  }, [currentText]);

  return <>{render(currentText)}</>;
};

export function BusinessOpportunityCard({
  onAction,
}: {
  onAction: (text: string) => void;
}) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-3 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex items-center justify-between">
        <h4 className="text-white font-bold text-sm flex items-center">
          云南中烟工业有限责任公司
        </h4>
        <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded gap-1 flex items-center">
          <Building2 size={12} /> 商机
        </span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
          <span className="text-gray-500">地域：</span>
          <span className="font-medium text-gray-800">云南</span>
        </div>
        <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
          <span className="text-gray-500">行业：</span>
          <span className="font-medium text-gray-800">卷烟制造</span>
        </div>
        <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
          <span className="text-gray-500">预算：</span>
          <span className="font-medium text-orange-600">¥800万</span>
        </div>
        <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
          <span className="text-gray-500">任务缺口匹配：</span>
          <span className="font-medium text-gray-800">全员体检</span>
        </div>

        <div className="pt-2">
          <div className="text-xs text-gray-500 mb-2">商机标签：</div>
          <div className="flex flex-wrap gap-1.5">
            {[
              "大型战略客户",
              "高匹配度",
              "高价值潜力",
              "中长周期",
              "多区域合作机会",
            ].map((t) => (
              <span
                key={t}
                className="bg-orange-50 text-orange-600 text-[10px] px-2 py-1 rounded-sm border border-orange-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-3">
          <button className="flex-1 py-1.5 text-xs text-gray-500 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
            跳过
          </button>
          <button
            onClick={() => onAction("确认认领云南中烟工业有限责任公司企康商机")}
            className="flex-1 py-1.5 text-xs text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded hover:opacity-90 transition-opacity font-medium"
          >
            认领商机
          </button>
        </div>
      </div>
    </div>
  );
}

export function MeetingRecordingCard({
  onAction,
}: {
  onAction: (text: string) => void;
}) {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md mt-3 font-sans relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/50 pointer-events-none"></div>

      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100 bg-gray-50/50 relative z-10">
        <div className="flex items-center text-gray-800 text-sm font-bold">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse mr-3 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
          平安纪要大师进行中
        </div>
        <div className="text-orange-600 font-mono text-xs">REC {dots}</div>
      </div>

      <div className="p-5 relative z-10">
        <div className="flex items-center justify-center space-x-1 mb-6 h-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <motion.div
              key={i}
              animate={{
                height: ["8px", Math.random() * 30 + 10 + "px", "8px"],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 0.5 + 0.5,
              }}
              className="w-1.5 bg-orange-500 rounded-full"
            />
          ))}
        </div>

        <div className="space-y-3 mb-6 font-mono text-xs text-gray-700 h-24 overflow-y-auto bg-gray-50/80 p-3 rounded-lg border border-gray-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400"
          >
            [录音开始...]
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-orange-600/80 font-bold">[李经理]：</span>
            朱书记您好，我是平安企康的李经理，今天特地来拜访您...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <span className="text-blue-600/80 font-bold">[朱洪书记]：</span>
            小李啊，你好。平安的实力我们是认可的。
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5 }}
            className="text-gray-900"
          >
            <span className="text-orange-600/80 font-bold">[李经理]：</span>
            结合中烟实际情况，我们能提供定制化的企业健康管理...
          </motion.div>
        </div>

        <button
          onClick={() => onAction("会议已结束，请输出拜访会议纪要")}
          className="w-full py-2.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm font-bold transition-colors flex items-center justify-center border border-red-200"
        >
          <X className="w-4 h-4 mr-2 text-red-500" />
          结束会议
        </button>
      </div>
    </div>
  );
}

export function MeetingMinutesCard() {
  return (
    <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-3 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 flex items-center justify-between">
        <h4 className="text-white font-bold flex items-center text-sm">
          <FileText size={16} className="mr-2" /> 拜访会议纪要
        </h4>
        <button className="text-white hover:text-orange-100 flex items-center text-xs bg-white/20 px-2 py-1 rounded border-0">
          <Download size={14} className="mr-1" /> 导出
        </button>
      </div>

      <div className="p-5 space-y-5 text-sm text-gray-800">
        <div>
          <h5 className="font-bold text-orange-700 flex items-center border-b border-orange-100 pb-1 mb-2">
            <Target size={14} className="mr-1.5" /> 核心纪要
          </h5>
          <p className="text-gray-600 leading-relaxed pl-5 bg-gray-50 p-2 rounded text-xs border border-gray-100">
            客户对平安品牌表示高度认可，对全员定制化体检服务及检后健康管理（尤其是对慢病员工的干预闭环）展现出浓厚兴趣。针对客户所关注的价格及服务覆盖网络，已作初步解答，客户期望后续提供更具象的差异化方案。
          </p>
        </div>

        <div>
          <h5 className="font-bold text-orange-700 flex items-center border-b border-orange-100 pb-1 mb-2">
            <Lightbulb size={14} className="mr-1.5" /> 客户维系建议
          </h5>
          <ul className="text-gray-600 leading-relaxed list-disc list-outside ml-4 text-xs space-y-1">
            <li>在出具专项方案时，需着重突出“检后健康管理”闭环的落地案例。</li>
            <li>
              建议由医疗大咖领衔，出具一份高管专属的健康服务白皮书，以彰显极高的专业度和尊享感。
            </li>
            <li>
              加强与客户基层对接人的沟通频次，探明具体预算及审批关键流转环节。
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-orange-700 flex items-center border-b border-orange-100 pb-1 mb-2">
            <ListChecks size={14} className="mr-1.5" /> 待办事项
          </h5>
          <div className="pl-1 space-y-1">
            <div className="flex items-center text-xs bg-orange-50/50 p-1.5 rounded border border-orange-100">
              <span className="w-3 h-3 rounded-full border border-gray-300 mr-2 flex-shrink-0 bg-white"></span>{" "}
              出具高管专属服务白皮书
            </div>
            <div className="flex items-center text-xs bg-orange-50/50 p-1.5 rounded border border-orange-100">
              <span className="w-3 h-3 rounded-full border border-gray-300 mr-2 flex-shrink-0 bg-white"></span>{" "}
              制作差异化方案并跟进客户反馈
            </div>
            <div className="flex items-center text-xs bg-orange-50/50 p-1.5 rounded border border-orange-100">
              <span className="w-3 h-3 rounded-full border border-gray-300 mr-2 flex-shrink-0 bg-white"></span>{" "}
              摸底具体预算
            </div>
            <div className="text-[10px] text-green-600 mt-2 flex items-center pt-1">
              <CheckCircle size={10} className="mr-1" /> 已自动同步至任务追踪表
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center justify-between text-xs p-2 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors text-blue-600"
          >
            <div className="flex items-center">
              <Paperclip size={14} className="mr-2" /> 云会议录音文稿.docx
            </div>
            <span className="text-gray-400 text-[10px]">点击查看</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function TaskTrackingCard() {
  const tasks = [
    {
      title: "拜访云南中烟工业有限责任公司",
      status: "completed",
      date: "2026-05-29 14:30",
      assignee: "本人",
    },
    {
      title: "出具高管专属服务白皮书",
      status: "pending",
      date: "2026-05-31",
      assignee: "本人",
    },
    {
      title: "制作差异化方案并跟进客户反馈",
      status: "pending",
      date: "2026-06-02",
      assignee: "本人",
    },
    {
      title: "摸底具体预算",
      status: "pending",
      date: "2026-06-03",
      assignee: "本人",
    },
  ];

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-3 font-sans">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-3 pb-4">
        <h4 className="text-white font-bold flex items-center text-sm">
          <ListChecks size={16} className="mr-2" /> 个人待办项清单
        </h4>
      </div>

      <div
        className="bg-white -mt-2 rounded-t-xl overflow-hidden relative z-10 w-full"
        style={{ width: "100%", minWidth: "600px" }}
      >
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 border-b border-gray-200 text-xs">
            <tr>
              <th className="font-medium text-left px-4 py-2">任务名称</th>
              <th className="font-medium text-left px-4 py-2">责任人</th>
              <th className="font-medium text-left px-4 py-2">
                完成时间/计划时间
              </th>
              <th className="font-medium text-left px-4 py-2 w-24">状态</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs">
            {tasks.map((t, idx) => (
              <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {t.title}
                </td>
                <td className="px-4 py-3 text-gray-600">{t.assignee}</td>
                <td className="px-4 py-3 text-gray-500 font-mono text-[11px]">
                  {t.date}
                </td>
                <td className="px-4 py-3">
                  {t.status === "completed" ? (
                    <span className="inline-flex items-center text-[10px] text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                      <CheckCircle2 size={10} className="mr-1" /> 已完成
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-[10px] text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                      <AlertCircle size={10} className="mr-1" /> 未完成
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const MessageBubble: React.FC<{
  message: Message;
  onAction: (text: string) => void;
}> = ({ message, onAction }) => {
  const isBot = message.sender === "bot";
  const bubbleRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!bubbleRef.current) return;
    const clone = bubbleRef.current.cloneNode(true);

    // Remote elements we don't want downloaded
    const actions = clone.querySelectorAll(".download-exclude");
    actions.forEach((a) => a.remove());

    const htmlContent = clone.innerHTML;
    const htmlWrapper = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${message.data?.title || "企康助手报告"}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; background-color: #f9fafb; display: flex; justify-content: center; }
    .download-exclude { display: none !important; }
  </style>
</head>
<body>
  <div style="width: 100%; max-w: 1000px;">
    ${htmlContent}
  </div>
</body>
</html>`;
    const blob = new Blob([htmlWrapper], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `企康助手报告_${new Date().getTime()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const isSystem = message.sender === "system";
  const isXiaojiao = message.sender === "xiaojiao";
  const isLijingli = message.sender === "lijingli";
  const isLiangzhenning = message.sender === "liangzhenning";
  const isLianghuayao = message.sender === "lianghuayao";
  const isUser = message.sender === "user";

  if (isSystem) {
    return (
      <div className="flex justify-center my-2">
        <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">
          {message.content}
        </span>
      </div>
    );
  }

  const isLeft =
    isBot || isXiaojiao || isLijingli || isLiangzhenning || isLianghuayao;

  const getAvatarColor = () => {
    if (isBot) return "bg-orange-500 mr-3";
    if (isXiaojiao) return "bg-amber-500 mr-3 text-white font-bold text-xs";
    if (isLijingli) return "bg-orange-500 mr-3 text-white font-bold text-xs";
    if (isLiangzhenning)
      return "bg-yellow-500 mr-3 text-white font-bold text-xs";
    if (isLianghuayao) return "bg-amber-500 mr-3 text-white font-bold text-xs";
    return "bg-orange-600 ml-3";
  };

  const getAvatarContent = () => {
    if (isBot) return <Bot size={18} className="text-white" />;
    if (isXiaojiao) return "肖";
    if (isLijingli) return "李";
    if (isLiangzhenning) return "梁";
    if (isLianghuayao) return "梁";
    return <User size={18} className="text-white" />;
  };

  const getSenderName = () => {
    if (isXiaojiao) return "肖姣";
    if (isLijingli) return "李经理";
    if (isLiangzhenning) return "梁镇宁";
    if (isLianghuayao) return "梁华耀";
    return null;
  };

  const renderContentWithAttachments = (content: string) => {
    if (!content) return null;
    const parts = content.split(/(【附件：.*?】)/g);
    return parts.map((part, index) => {
      if (part.startsWith("【附件：") && part.endsWith("】")) {
        const filename = part.slice(4, -1);
        return (
          <div key={index} className="mt-2 mb-1 block">
            <button
              onClick={() => onAction(`VIEW_DOC:${filename}`)}
              className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors w-full text-left"
            >
              <FileText
                size={16}
                className="text-orange-500 mr-2 flex-shrink-0"
              />
              <span className="flex-1 truncate text-gray-700">{filename}</span>
              <span className="text-orange-600 text-xs font-medium ml-2 flex-shrink-0">
                点击查看
              </span>
            </button>
          </div>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start ${isLeft ? "" : "flex-row-reverse"}`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm ${getAvatarColor()}`}
      >
        {getAvatarContent()}
      </div>

      <div
        className={`flex flex-col ${isLeft ? "items-start" : "items-end"} max-w-[85%] w-full`}
        ref={bubbleRef}
      >
        {getSenderName() && (
          <span className="text-xs text-gray-500 mb-1 ml-1">
            {getSenderName()}
          </span>
        )}
        {(message.type === "text" || (isLeft && message.content)) && (
          <div
            className={`px-4 py-3 shadow-sm text-sm whitespace-pre-wrap leading-relaxed inline-block ${
              isLeft
                ? "bg-white border border-gray-200 rounded-2xl rounded-tl-none text-gray-800"
                : "bg-orange-600 text-white rounded-2xl rounded-tr-none"
            }`}
          >
            {isLeft ? (
              <TypewriterText
                text={message.content}
                timestamp={message.timestamp}
                disableTyping={message.disableTyping}
                render={renderContentWithAttachments}
              />
            ) : (
              renderContentWithAttachments(message.content)
            )}
            {message.data?.isBidGroupLink && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => onAction("进入招投标交流群")}
                  className="w-full py-2 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors flex items-center justify-center"
                >
                  <Users size={16} className="mr-2" />
                  进入招投标交流群
                </button>
              </div>
            )}
          </div>
        )}

        {isBot && message.type === "reasoning" && message.data && (
          <ReasoningProcess
            steps={message.data.steps}
            title={message.data.title}
            timestamp={message.timestamp}
          />
        )}

        {isBot && message.type === "lead_card_list" && message.data && (
          <LeadCardCarousel leads={message.data.leads} onAction={onAction} />
        )}

        {isBot && message.type === "lead_execution" && message.data && (
          <LeadExecutionCard data={message.data} onAction={onAction} />
        )}

        {isBot && message.type === "report_card" && message.data && (
          <ReportCard data={message.data} onDownload={handleDownload} />
        )}

        {isBot && message.type === "customer_portrait_card" && (
          <CustomerPortraitCard />
        )}
        {isBot && message.type === "survey_report" && (
          <SurveyReportCard data={message.data} onDownload={handleDownload} />
        )}

        {isBot && message.type === "business_opportunity" && (
          <BusinessOpportunityCard onAction={onAction} />
        )}
        {isBot && message.type === "meeting_recording_yn" && (
          <MeetingRecordingCard onAction={onAction} />
        )}
        {isBot && message.type === "meeting_minutes_yn" && (
          <MeetingMinutesCard />
        )}
        {isBot && message.type === "task_tracking_yn" && <TaskTrackingCard />}
        {isBot && message.type === "project_management_overview" && <ProjectManagementCard />}

        {isBot && message.type === "lenovo_panoramic_analysis" && (
          <LenovoPanoramicCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}

        {isBot && message.type === "decision_makers_report" && (
          <DecisionMakersReportCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}

        {isBot && message.type === "history_cooperation_report" && (
          <HistoryCooperationReportCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}
        {isBot && message.type === "visit_pitch_report" && (
          <VisitPitchReportCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}

        {isBot && message.type === "compliance_analysis_report" && (
          <ComplianceAnalysisReportCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}
        {isBot && message.type === "bidding_document_analysis_report" && (
          <BiddingDocumentAnalysisCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}
        {isBot && message.type === "bid_generation_report" && (
          <BidGenerationCard data={message.data} onDownload={handleDownload} />
        )}
        {isBot && message.type === "bid_inspection_report" && (
          <BidInspectionCard data={message.data} onDownload={handleDownload} />
        )}

        {isBot &&
          message.type === "lenovo_new_marketing_plan" &&
          message.data && (
            <LenovoNewMarketingPlanCard
              data={message.data}
              onDownload={handleDownload}
            />
          )}

        {isBot && message.type === "standard_product_plan_report" && (
          <StandardProductPlanCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}
        {isBot && message.type === "case_highlight_report" && (
          <CaseHighlightCard data={message.data} onDownload={handleDownload} />
        )}
        {isBot && message.type === "competitor_analysis_report" && (
          <CompetitorAnalysisCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}
        {isBot && message.type === "citic_competitor_analysis" && (
          <CiticCompetitorAnalysisCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}
        {isBot && message.type === "lenovo_tech_bid_advantage" && (
          <LenovoTechBidAdvantageCard
            data={message.data}
            onDownload={handleDownload}
          />
        )}
        {isBot && message.type === "doc_parsing_progress" && (
          <div className="mt-2">
            <DocParsingProgressCard />
          </div>
        )}
        {isBot && message.type === "doc_parsing_result" && (
          <div className="mt-2">
            <DocParsingResultCard />
          </div>
        )}
        {isBot && message.type === "doc_interpretation_report" && (
          <div className="mt-2 w-full">
            <DocInterpretationCard />
          </div>
        )}
        {isBot && message.type === "doc_risk_opportunity_report" && (
          <div className="mt-2 w-full">
            <DocRiskOpportunityCard onConsultation={() => onAction('专家会诊评估申请')} />
          </div>
        )}
        {isBot && message.type === "expert_consultation_report" && (
          <div className="mt-2 w-full">
            <ExpertConsultationCard onGeneratePlan={() => onAction('发起项目方案生成')} />
          </div>
        )}
        {isBot && message.type === "product_match_assessment" && (
          <div className="mt-2 w-full">
            <ProductMatchAssessmentCard />
          </div>
        )}
        {isBot && message.type === "quote_auth_center" && (
          <div className="mt-2 w-full">
            <QuoteAuthCenterCard />
          </div>
        )}
        {isBot && message.type === "bid_doc_interpretation_card" && (
          <div className="mt-2 w-full">
            <BidDocInterpretationCard />
          </div>
        )}
        {isBot && message.type === "qual_perf_match_card" && (
          <div className="mt-2 w-full">
            <QualPerfMatchCard />
          </div>
        )}
        {isBot && message.type === "basic_info_card_form" && (
          <BasicInfoFormCard onSend={onAction} data={message.data} />
        )}
        {isBot && message.type === "supplementary_info_card" && (
          <div className="mt-2 w-full max-w-2xl bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm font-sans">
            <h3 className="font-bold text-lg text-green-900 border-b border-green-200 pb-2 mb-3">补充信息卡片</h3>
            <div className="text-sm text-green-800 space-y-2">
              <p>{message.data?.text || "信息已记录。"}</p>
              {message.data?.supplementary && (
                <ul className="list-disc pl-5 mt-2">
                  {message.data.supplementary.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
        {isBot && message.type === "supplementary_info_form_card" && (
          <SupplementaryInfoFormCard data={message.data} onSend={onAction} />
        )}
        {isBot && message.type === "ppt_card" && (
          <PPTCard data={message.data} onSend={onAction} />
        )}
        {isBot && message.type === "package_option_card" && (
          <PackageOptionCard data={message.data} onSend={onAction} />
        )}
        {isBot && message.type === "strategy_card" && (
          <StrategyReportCard data={message.data} onDownload={handleDownload} />
        )}

        {isBot &&
          [
            "report_card",
            "survey_report",
            "lenovo_panoramic_analysis",
            "decision_makers_report",
            "history_cooperation_report",
            "visit_pitch_report",
            "compliance_analysis_report",
            "bidding_document_analysis_report",
            "bid_generation_report",
            "bid_inspection_report",
            "standard_product_plan_report",
            "case_highlight_report",
            "competitor_analysis_report",
            "citic_competitor_analysis",
            "lenovo_tech_bid_advantage",
            "strategy_card",
          ].includes(message.type) && (
            <div className="mt-3 hidden justify-end download-exclude w-full max-w-5xl">
              <button
                onClick={handleDownload}
                className="flex flex-row items-center justify-center text-sm text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-lg transition-colors font-bold shadow-sm"
                style={{ pointerEvents: "auto" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                下载保存至本地
              </button>
            </div>
          )}
      </div>
    </motion.div>
  );
};

export function LenovoPanoramicCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-4xl bg-white border border-orange-500/20 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] mt-4 font-sans text-gray-800 overflow-hidden">
      {/* Header with reduced opacity (Orange and Gold) */}
      <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b border-orange-500/20 px-6 py-4 flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 flex items-center text-orange-950">
          <div className="mr-4 p-2 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-wide text-orange-950">
              云南烟草集团全景客户画像 (Tobacco Group)
            </h3>
            <p className="text-xs text-orange-850/80 mt-1 opacity-90 tracking-wider">
              最后更新时间: 2026-05-26 | 数据密级: 内部核心机密
            </p>
          </div>
        </div>
        <div className="relative z-10 text-xs font-bold px-3 py-1 bg-gradient-to-r from-orange-500/15 to-amber-500/15 text-orange-700 border border-orange-500/20 rounded-full uppercase tracking-widest shadow-sm">
          战略级 KA
        </div>
      </div>

      <div className="p-6 space-y-6 bg-gray-50/20">
        {/* Top Metric Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-500/10">
            <p className="text-xs text-gray-500 mb-1 font-medium">企业性质</p>
            <p className="text-sm font-bold text-gray-900">大型国企</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-500/10">
            <p className="text-xs text-gray-500 mb-1 font-medium">行业</p>
            <p className="text-sm font-bold text-gray-900">烟草</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-500/10">
            <p className="text-xs text-gray-500 mb-1 font-medium">组织分布</p>
            <p className="text-sm font-bold text-gray-900">总部 + 多分公司 + 多机构</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-500/10">
            <p className="text-xs text-gray-500 mb-1 font-medium">人群画像</p>
            <p className="text-sm font-bold text-gray-900">高级/核心/基础/内勤/退休</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-500/10">
            <p className="text-xs text-gray-500 mb-1 font-medium">预算池</p>
            <p className="text-sm font-bold text-gray-900">近千万级 (演示)</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-500/10">
            <p className="text-xs text-gray-500 mb-1 font-medium">
              数据完整度
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-gray-900">62%</p>
              <div className="h-1.5 w-full max-w-[60px] bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-400"
                  style={{ width: "62%" }}
                ></div>
              </div>
            </div>
            <p className="text-[10px] text-red-500 mt-1 font-medium">
              待补：管理规范、赔付明细
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: 平安合作存量与企康需求洞察 */}
          <div className="col-span-1 space-y-6">
            {/* 存量业务 */}
            <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-orange-500/5 border-b border-orange-500/10 px-4 py-2.5 font-bold text-orange-950 flex justify-between items-center">
                <span>
                  <span className="text-orange-600 mr-2">█</span>
                  平安内部合作存量全景图
                </span>
                <span className="text-xs text-gray-500 font-normal">
                  多线条数据打通
                </span>
              </div>
              <div className="p-4 grid grid-cols-1 gap-4">
                <div className="border border-orange-500/15 bg-orange-500/5 rounded-md p-3">
                  <h5 className="font-bold text-orange-900 text-xs mb-2 flex items-center">
                    <svg
                      className="w-3.5 h-3.5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    财产险/车险 (深度合作)
                  </h5>
                  <ul className="text-xs text-gray-600 space-y-1.5 mb-2">
                    <li>• 承保北京等核心园区财企险项目</li>
                    <li>• 部分企业用车、高管用车承保</li>
                  </ul>
                  <div className="text-[10px] bg-white px-2 py-1 text-orange-600 rounded border border-orange-500/15 inline-block">
                    客户粘性：强 | 信任度：高
                  </div>
                </div>

                <div className="border border-orange-500/15 bg-orange-500/5 rounded-md p-3">
                  <h5 className="font-bold text-orange-900 text-xs mb-2 flex items-center">
                    <svg
                      className="w-3.5 h-3.5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                    团险与健康管理 (破冰阶段)
                  </h5>
                  <ul className="text-xs text-gray-600 space-y-1.5 mb-2">
                    <li>• 仅少部分高管含团意险定做</li>
                    <li>• 全员健康管理(企康)处于空白</li>
                  </ul>
                  <div className="text-[10px] bg-white px-2 py-1 text-orange-600 rounded border border-orange-500/15 inline-block">
                    企康渗透机会点！
                  </div>
                </div>
              </div>
            </div>

            {/* 人群健康画像 */}
            <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-orange-500/5 border-b border-orange-500/10 px-4 py-2.5 font-bold text-orange-950">
                <span className="text-orange-600 mr-2">█</span>
                云南烟草分层员工画像与健康痛点洞察
              </div>
              <div className="divide-y divide-gray-100">
                <div className="p-4 grid grid-cols-1 gap-4 hover:bg-gray-50 transition-colors">
                  <div className="col-span-1 text-xs flex flex-col justify-center">
                    <span className="font-bold text-gray-800">
                      研发及IT人员
                    </span>
                    <span className="text-gray-400 mt-0.5">北京/深圳/上海</span>
                    <span className="bg-orange-500/10 text-orange-700 px-2 py-0.5 rounded-full text-[10px] w-max mt-1">
                      占比 ~40%
                    </span>
                  </div>
                  <div className="col-span-1">
                    <div className="text-xs text-gray-700 bg-orange-500/5 p-2 rounded-md border border-orange-500/10 relative">
                      <span className="font-bold text-orange-900 block mb-1">
                        健康危象定性分析：
                      </span>
                      高强度脑力劳动导致严重的职场焦虑、睡眠障碍。大量员工面临颈椎/腰椎等长期职业劳损。
                      <div className="mt-2 flex gap-2">
                        <span className="px-2 py-0.5 bg-orange-500/10 text-orange-700 rounded text-[10px]">
                          心脏早搏隐患
                        </span>
                        <span className="px-2 py-0.5 bg-amber-500/15 text-amber-800 rounded text-[10px]">
                          抑郁/重度焦虑倾向
                        </span>
                        <span className="px-2 py-0.5 bg-orange-500/10 text-orange-700 rounded text-[10px]">
                          亚健康爆表
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-1 gap-4 hover:bg-gray-50 transition-colors">
                  <div className="col-span-1 text-xs flex flex-col justify-center">
                    <span className="font-bold text-gray-800">
                      厂线生产/智能制造
                    </span>
                    <span className="text-gray-400 mt-0.5">
                      合肥(联宝)/武汉
                    </span>
                    <span className="bg-orange-500/10 text-orange-700 px-2 py-0.5 rounded-full text-[10px] w-max mt-1">
                      占比 ~45%
                    </span>
                  </div>
                  <div className="col-span-1">
                    <div className="text-xs text-gray-700 bg-orange-500/5 p-2 rounded-md border border-orange-500/10">
                      <span className="font-bold text-orange-900 block mb-1">
                        工伤防护薄弱点：
                      </span>
                      智能装配线重复劳损、倒班导致生物钟紊乱、特定厂区的职业健康筛查履约情况复杂。亟缺整体工伤预防方案
                      and 急救保障体系。
                    </div>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-1 gap-4 hover:bg-gray-50 transition-colors">
                  <div className="col-span-1 text-xs flex flex-col justify-center">
                    <span className="font-bold text-gray-800">
                      高管与核心管理层
                    </span>
                    <span className="text-gray-400 mt-0.5">全球分布</span>
                    <span className="bg-amber-500/15 text-amber-800 px-2 py-0.5 rounded-full text-[10px] w-max mt-1">
                      极少数但最核心
                    </span>
                  </div>
                  <div className="col-span-1">
                    <div className="text-xs text-gray-700 bg-amber-500/10 p-2 rounded-md border border-amber-500/20">
                      <span className="font-bold text-amber-900 block mb-1">
                        健康管理失位：
                      </span>
                      日常出差极为频繁、高端应酬多导致三高频发。目前对高管及家属仍缺乏"一站式、尊享、绿通化"的VIP医疗特权服务体系。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 竞品与切入策略 */}
          <div className="col-span-1 space-y-6">
            {/* 竞品情报 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500/10 border-l border-b border-orange-500/15 text-orange-700 text-[10px] px-2 py-0.5 rounded-bl-lg font-bold">
                竞对扫描
              </div>
              <h4 className="font-bold text-gray-800 text-sm mb-3 flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                当前健康管理现状
              </h4>
              <div className="space-y-3">
                <div className="text-xs bg-gray-50 p-2.5 rounded border border-gray-100">
                  <span className="font-bold text-gray-700 block mb-1">
                    年度体检合作方
                  </span>
                  <p className="text-gray-500">
                    员工多选爱康/美年等传统体检机构或属地公立医院。
                  </p>
                  <p className="text-orange-600 mt-1 font-medium">
                    👉 痛点: 数据割裂，体检后无人追踪干预
                  </p>
                </div>
                <div className="text-xs bg-gray-50 p-2.5 rounded border border-gray-100">
                  <span className="font-bold text-gray-700 block mb-1">
                    心理EAP供应商
                  </span>
                  <p className="text-gray-500">
                    外部零散的心理咨询机构，服务质量参差不齐。
                  </p>
                  <p className="text-orange-600 mt-1 font-medium">
                    👉 痛点: 与实体医疗不打通，治标不治本
                  </p>
                </div>
              </div>
            </div>

            {/* AI 推荐切入路径 - Overhauled to transparent orange & gold */}
            <div className="bg-gradient-to-br from-orange-500/5 to-amber-500/5 border border-orange-500/20 rounded-lg p-4 shadow-sm text-gray-850">
              <h4 className="font-bold text-orange-955 text-sm mb-3 flex items-center border-b border-orange-500/20 pb-2">
                <svg
                  className="w-4 h-4 mr-1 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                AI 推荐企康破局策略
              </h4>

              <div className="space-y-3 relative">
                <div className="absolute left-[7px] top-4 bottom-4 w-px bg-orange-500/20 max-h-full"></div>

                <div className="text-xs relative pl-6">
                  <div className="absolute left-[3px] top-1 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-orange-500/20"></div>
                  <span className="font-bold text-orange-900 block mb-0.5">
                    破冰切入点 (短期)
                  </span>
                  <p className="text-gray-655 leading-snug">
                    利用现有产险客情关系拜访HRD/工会，以赠送**"百人体验版线上问诊绿通卡"**及**"高管三甲绿通通道"**为开门契机。
                  </p>
                </div>

                <div className="text-xs relative pl-6">
                  <div className="absolute left-[3px] top-1 w-2.5 h-2.5 bg-orange-400 rounded-full ring-2 ring-orange-500/20"></div>
                  <span className="font-bold text-orange-900 block mb-0.5">
                    方案渗透 (中期)
                  </span>
                  <p className="text-gray-655 leading-snug">
                    针对IT研发中心，主推**"身心健康关怀驿站"**及企业EAP打包方案。解决员工职场焦虑痛点。
                  </p>
                </div>

                <div className="text-xs relative pl-6">
                  <div className="absolute left-[3px] top-1 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-orange-500/20"></div>
                  <span className="font-bold text-orange-900 block mb-0.5">
                    全面绑定 (长期)
                  </span>
                  <p className="text-gray-655 leading-snug">
                    将全国数十个厂区体检与公立绿通数据全面接入企康平台数字化看板。
                  </p>
                </div>
              </div>

              <button className="w-full mt-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/25 text-orange-850 hover:bg-orange-500/20 text-xs font-bold py-2 rounded shadow-sm transition-all">
                生成《云南烟草企康专项拓展报告》
              </button>
            </div>
          </div>
        </div>

        {/* 5分钟拜访开场话术 */}
        <div className="bg-white border text-sm box-border border-gray-200 rounded-lg overflow-hidden shadow-sm mt-6">
          <div className="bg-orange-500/5 border-b border-orange-500/10 px-4 py-2.5 font-bold text-orange-950 flex items-center">
            <span className="text-orange-600 mr-2">█</span>5分钟拜访开场话术建议
            (针对张总)
          </div>
          <div className="p-4 space-y-3">
            <div>
              <h5 className="font-bold text-orange-900 text-xs mb-1">
                【破冰阶段：云南烟草AI战略+员工健康数字化】
              </h5>
              <p className="text-xs text-gray-700 bg-gray-50 p-2 rounded">
                杨总您好，今天非常荣幸来拜访您。我们一直高度关注云南烟草今年全面推进的“全栈AI”战略，深知云南烟草正在打造新一代的核心竞争力。同样，平安也正在通过数字化重塑服务。今天我们来，不仅是代表保险服务，更是希望在这个“智能化转型”的契机上，探讨如何用数字化的手段，为云南烟草的宝贵人才资产搭建起坚实的健康底座。
              </p>
            </div>
            <div>
              <h5 className="font-bold text-orange-900 text-xs mb-1">
                【痛点共鸣阶段：7.2万人分散管理难】
              </h5>
              <p className="text-xs text-gray-700 bg-gray-50 p-2 rounded">
                云南烟草在全球有几万名员工，特别是咱们大量的研发骨干和产线员工。我们调研发现，目前这种规模的人群，如果只靠传统的单次体检，数据是分散的，缺乏统一的标准和持续的健康追踪预警系统。平时有点小毛病，大家工作一忙就忽视了，长此以往对公司整体的生产力是隐形的巨大损害。
              </p>
            </div>
            <div>
              <h5 className="font-bold text-orange-900 text-xs mb-1">
                【方案切入阶段：平安云南烟草数字化方案合作】
              </h5>
              <p className="text-xs text-gray-700 bg-gray-50 p-2 rounded">
                所以，我们今天带来的是平安企康全新的“数字化企业健康管理方案”。它不仅能打通全链条数据，还能在云南烟草各大园区直接建立配备医疗专家的“企业医务室”，将线下问诊与线上24小时绿通无缝结合。这种服务不仅极具科技感，而且真正落到了实处，非常契合云南烟草一直倡导的“务实与高效”文化。
              </p>
            </div>
          </div>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

export function StandardProductPlanCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-orange-700 to-orange-500 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
          云南烟草集团专门营销方案
        </div>
        <span className="text-orange-100 text-xs px-3 py-1 bg-orange-800/30 rounded-full border border-orange-400/30">
          机密 / 客户专属方案
        </span>
      </div>
      {data?.isFamilyDoctor ? (
        <div className="p-6 bg-gray-50/20 w-full font-sans">
          <h3 className="text-xl font-bold mb-4 text-orange-950">三段式访问材料</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
              <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
                <h4 className="font-bold text-orange-900 text-sm">哪些大客户在做</h4>
              </div>
              <ul className="p-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>同类型央国企</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>省级多机构客户</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>长期合作标杆</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
              <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
                <h4 className="font-bold text-orange-900 text-sm">平安标准产品</h4>
              </div>
              <ul className="p-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>分层补充医疗</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>委托基金管理</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>体检/慢病/就医协助</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-orange-500/20 overflow-hidden">
              <div className="bg-orange-500/10 px-4 py-2 border-b border-orange-500/20">
                <h4 className="font-bold text-orange-900 text-sm">明星方案价值</h4>
              </div>
              <ul className="p-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>政策合规</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>员工关怀</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>ESG/健康企业</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>企业文化与荣誉</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-gray-50/20">
          <h3 className="text-xl font-bold mb-4">标准方案</h3>
        </div>
      )}
    </div>
  );
}

export function CaseHighlightCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-amber-700 to-yellow-600 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          历史成功案例 · 亮点与卖点提炼
        </div>
        <span className="text-amber-100 text-xs px-3 py-1 bg-amber-900/30 rounded-full border border-amber-400/30">
          智能抽取匹配成功率 98%
        </span>
      </div>

      {/* Scene 05 - 高亮卡片内容 */}
      <div className="p-6 bg-amber-50/50">
        <h3 className="text-xl font-bold text-amber-950 mb-4 pb-2 border-b border-amber-200">标品先行，低成本打开客户</h3>
        <p className="text-sm text-gray-700 mb-6 font-medium">推荐策略关键动作：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm flex items-start">
            <div className="bg-amber-100 text-amber-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs">1</div>
            <div>
              <p className="font-bold text-gray-900 mb-1">标准产品先行</p>
              <p className="text-xs text-gray-500">通过成熟体检与健康计划切入，降低决策门槛</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm flex items-start">
            <div className="bg-amber-100 text-amber-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs">2</div>
            <div>
              <p className="font-bold text-gray-900 mb-1">明星案例背书</p>
              <p className="text-xs text-gray-500">展示同级别央国企标杆案例，建立信任基石</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm flex items-start">
            <div className="bg-amber-100 text-amber-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs">3</div>
            <div>
              <p className="font-bold text-gray-900 mb-1">输出待确认问题</p>
              <p className="text-xs text-gray-500">形成清晰需求清单，引导后续深度调研</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm flex items-start">
            <div className="bg-amber-100 text-amber-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs">4</div>
            <div>
              <p className="font-bold text-gray-900 mb-1">暂不进入重非标</p>
              <p className="text-xs text-gray-500">避免初期陷入复杂定制流程，保持敏捷推进</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LenovoTechBidAdvantageCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-5xl bg-amber-50/5 border border-orange-500/20 rounded-2xl overflow-hidden shadow-xl mt-4 font-sans text-gray-800">
      {/* Header with reduced opacity (Orange and Gold) */}
      <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b border-orange-500/20 px-6 py-6 relative overflow-hidden flex items-center justify-between shadow-sm">
        <div className="absolute top-0 right-0 p-4 opacity-10 mix-blend-overlay">
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-orange-550/20"
          >
            <path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" />
          </svg>
        </div>
        <div className="relative z-10 flex items-center text-orange-950">
          <div className="mr-5 p-3 bg-orange-500/10 rounded-xl border border-orange-500/20 shadow-inner text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-black tracking-wide text-orange-950">
              云南烟草企康技术标核心优势与响应架构
            </h3>
            <p className="text-sm text-orange-800/80 mt-1.5 tracking-widest font-medium">
              对标传统体检机构 ｜ 差异化控标级输出方案
            </p>
          </div>
        </div>
        <div className="relative z-10 text-xs font-bold px-4 py-1.5 bg-gradient-to-r from-orange-500/15 to-amber-500/15 text-orange-700 border border-orange-500/20 rounded-full uppercase tracking-widest shadow-md">
          投 标 专 家 · 核 心 密 卷
        </div>
      </div>

      <div className="p-8 space-y-8 bg-gradient-to-b from-orange-500/5 to-white">
        {/* Core summary text directly from response prompt */}
        <div className="bg-white border-l-4 border-orange-500 p-5 rounded-r-xl shadow-md flex items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full mix-blend-multiply filter blur-2xl opacity-70 transform translate-x-10 -translate-y-10"></div>
          <svg
            className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <div className="relative z-10">
            <p className="text-sm text-gray-800 font-medium leading-relaxed">
              <span className="font-bold text-orange-700 text-base block mb-1">
                🎯 核心控标打法思路：降维打击
              </span>
              用IT巨头在{" "}
              <strong className="text-orange-600 bg-orange-500/5 border border-orange-500/15 px-1 rounded mx-0.5">
                顶层架构
              </strong>
              、
              <strong className="text-orange-600 bg-orange-500/5 border border-orange-500/15 px-1 rounded mx-0.5">
                全国产化信创
              </strong>{" "}
              和{" "}
              <strong className="text-orange-600 bg-orange-500/5 border border-orange-500/15 px-1 rounded mx-0.5">
                金融级数据安全
              </strong>{" "}
              上的绝对专业壁垒，强力冲击传统医疗/体检机构在技术方案设计与IT系统实施上的天然短板，成功把甲方的考核重心与评分标准引导到系统架构与信创合规上来。
            </p>
          </div>
        </div>

        {/* Content grid - Flat layout instead of grid cols */}
        <div className="space-y-6">
          {/* 第一章 */}
          <div className="bg-white border border-orange-500/15 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/5 px-5 py-3 font-bold text-orange-950 flex items-center border-b border-orange-500/15">
              <span className="bg-gradient-to-br from-orange-500/15 to-amber-500/15 border border-orange-500/20 text-orange-700 w-7 h-7 rounded-lg flex items-center justify-center text-sm mr-3 shrink-0 shadow-sm font-bold">
                1
              </span>
              项目整体理解与需求分析
            </div>
            <div className="p-5">
              <p className="text-xs text-orange-850 border-l-2 border-orange-300 pl-3 bg-orange-500/5 py-1.5 rounded-r">
                💡 央国企看重供应商是否真正懂他们的政策背景 and
                业务痛点，而非上来就堆砌技术。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-3">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <span className="text-orange-600 font-bold block mb-1">
                    1.1 建设背景与目标
                  </span>{" "}
                  <div className="text-gray-600 text-xs">
                    深度结合国家政策（如数字化转型、健康中国）及集团长远战略目标构建方案。
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <span className="text-orange-600 font-bold block mb-1">
                    1.2 现状痛点分析
                  </span>{" "}
                  <div className="text-gray-600 text-xs">
                    直击现有系统的不足（如数据孤岛、缺乏统一管控、员工体验断层）。
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <span className="text-orange-600 font-bold block mb-1">
                    1.3 核心需求理解
                  </span>{" "}
                  <div className="text-gray-600 text-xs">
                    对业务需求、技术规范、安全与合规红线进行手术刀式精准拆解响应。
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二章 */}
          <div className="bg-white border-2 border-orange-500/20 rounded-xl overflow-hidden shadow-md relative group">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500/15 to-amber-500/15 border-l border-b border-orange-500/25 text-orange-750 text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm">
              👑 核心得分区
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/5 px-5 py-4 font-bold text-orange-950 flex items-center border-b border-orange-500/15">
              <span className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/25 text-orange-750 w-7 h-7 rounded-lg flex items-center justify-center text-sm mr-3 shrink-0 shadow-sm font-bold">
                2
              </span>
              总体技术方案 (核心得分区)
            </div>
            <div className="p-5">
              <p className="text-xs text-orange-850 border-l-2 border-orange-300 pl-3 bg-orange-500/5 py-1.5 rounded-r">
                💡
                这是展示云南烟草“软硬一体”等底层基建实力的最佳位置，构建技术壁垒。
              </p>
              <div className="space-y-3 mt-3">
                <div className="flex bg-white border border-orange-500/10 p-3 rounded-lg">
                  <div className="w-16 shrink-0 text-orange-600 font-bold text-sm tracking-wide">
                    2.1
                  </div>{" "}
                  <div className="text-gray-700 text-sm">
                    <strong className="text-gray-900">总体设计原则：</strong>
                    坚持高可靠、高网络安全、弹性可扩展、全面信创兼容原则。
                  </div>
                </div>
                <div className="flex bg-white border border-orange-500/10 p-3 rounded-lg">
                  <div className="w-16 shrink-0 text-orange-600 font-bold text-sm tracking-wide">
                    2.2
                  </div>{" "}
                  <div className="text-gray-700 text-sm">
                    <strong className="text-gray-900">总体架构设计：</strong>
                    四大架构全景展现——业务架构(健康管理闭环)、技术架构(微服务/端边云网智体系)、数据架构(多源异构采集)、物理部署架构(私有化/专有云隔离)。
                  </div>
                </div>
                <div className="flex bg-white border border-orange-500/10 p-3 rounded-lg">
                  <div className="w-16 shrink-0 text-orange-600 font-bold text-sm tracking-wide">
                    2.3
                  </div>{" "}
                  <div className="text-gray-700 text-sm">
                    <strong className="text-gray-900">
                      核心关键技术攻坚：
                    </strong>
                    针对项目极端难点的专项技术解答(如百万级高并发抢号、海量IoT硬件终端低延迟并发接入)。
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第三章 & 第四章并排 */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {/* 第三章 */}
            <div className="bg-white border border-orange-500/15 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/5 px-4 py-3 font-bold text-orange-950 flex items-center border-b border-orange-500/15">
                <span className="bg-gradient-to-br from-orange-500/15 to-amber-500/15 border border-orange-500/20 text-orange-700 w-6 h-6 rounded-lg flex items-center justify-center text-xs mr-2 shrink-0 font-bold">
                  3
                </span>
                详细功能方案设计
              </div>
              <div className="p-5 space-y-4">
                <p className="text-[11px] text-orange-850 border-l-2 border-orange-300 pl-2 bg-orange-500/5 py-1 rounded">
                  须严格按招标文件功能清单点对点逐一无死角响应。
                </p>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <span className="text-orange-600 font-bold mr-1">
                      3.1 终端/硬件侧：
                    </span>
                    <span className="text-gray-600">
                      云南烟草智能穿戴、体检一体机边缘接入。
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="text-orange-600 font-bold mr-1">
                      3.2 云端/管理平台：
                    </span>
                    <span className="text-gray-600">
                      健康档案管理引擎、极速体检排期、高管预警大屏。
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="text-orange-600 font-bold mr-1">
                      3.3 开放接口集成：
                    </span>
                    <span className="text-gray-600">
                      提供标准化API与OA、E-HR、SSO单点登录平滑对接。
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 第四章 */}
            <div className="bg-white border-2 border-orange-500/15 rounded-xl overflow-hidden shadow-sm relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500/15 to-amber-500/15 border-l border-b border-orange-500/25 text-orange-750 text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-sm">
                ⛔ 一票否决红线
              </div>
              <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/5 px-4 py-3 font-bold text-orange-950 flex items-center border-b border-orange-500/15">
                <span className="bg-gradient-to-br from-orange-500/15 to-amber-500/15 border border-orange-500/25 text-orange-750 w-6 h-6 rounded-lg flex items-center justify-center text-xs mr-2 shrink-0 font-bold">
                  4
                </span>
                非功能性与极高安全体系
              </div>
              <div className="p-5 space-y-4">
                <p className="text-[11px] text-orange-850 border-l-2 border-orange-300 pl-2 bg-orange-500/5 py-1 rounded">
                  央国企对非功能指标考核极其严格，安全防护重中之重。
                </p>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <span className="text-orange-600 font-bold mr-1">
                      4.1 性能与容量：
                    </span>
                    <span className="text-gray-600">
                      5万级高并发、秒级响应、99.99%高可用(HA)集群架构。
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="text-orange-600 font-bold mr-1">
                      4.2 信息安全网：
                    </span>
                    <span className="text-gray-600">
                      防篡改风控、金融级等保三级/国密法密评合规响应方案。
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="text-orange-600 font-bold mr-1">
                      4.3 隐私合规引擎：
                    </span>
                    <span className="text-gray-600">
                      敏感体检数据物理级脱敏、最小权责动态隔离管控机制。
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 第五章: 大版块展示信创能力 */}
          <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-2 border-amber-550/20 rounded-xl overflow-hidden shadow-lg relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5 mix-blend-multiply"></div>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-5 py-4 font-bold text-amber-955 flex items-center justify-between border-b border-amber-500/25 relative z-10">
              <div className="flex items-center">
                <span className="bg-amber-500/15 border border-amber-500/20 text-amber-900 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3 shrink-0 shadow-inner font-black">
                  5
                </span>
                <span className="text-lg font-black">信创与国产化适配方案</span>
              </div>
              <span className="bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-800 px-3 py-1 text-xs rounded-full border border-amber-500/25">
                央国企必考题 · 绝对护城河
              </span>
            </div>
            <div className="p-6 relative z-10">
              <div className="bg-white/60 backdrop-blur-sm border border-orange-550/20 p-4 rounded-xl mb-6 shadow-sm">
                <p className="text-sm text-orange-955 font-bold leading-relaxed mb-2">
                  ⭐
                  这是目前央国企招标的“安全基盘”部分，传统医疗机构极难独立完成。也是云南烟草企康拉开与竞品差距的最关键护城河。
                </p>
                <div className="grid md:grid-cols-1 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-500/10">
                    <div className="text-orange-600 font-bold mb-2 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      基础软硬件全栈信创适配
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      全面深度兼容国产CPU(鲲鹏/海光/飞腾)、国产操作系统(统信UOS/银河麒麟/鸿蒙OS)、国产数据库(达梦/人大金仓/TiDB)及中间件。
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-500/10">
                    <div className="text-orange-600 font-bold mb-2 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      云南烟草信创生态集成优势
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      着重强调云南烟草作为中国IT龙头在国家级整机、服务器国产化替代中的原生整合能力，直接抛出千万级/亿级信创替换全链路标杆成功案例。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-550/20">
                <div className="text-center font-bold text-orange-900 border-b border-orange-100 pb-2 mb-4 w-full uppercase tracking-widest text-sm">
                  竞争态势对垒：维次降级打击路线图
                </div>
                <div className="flex flex-col justify-center items-center gap-6 text-sm">
                  <div className="flex flex-col items-center bg-gray-50 px-6 py-4 rounded-xl border border-gray-200 w-full text-center">
                    <span className="font-bold text-gray-800 text-lg mb-1">
                      传统体检 / 医疗SAAS
                    </span>
                    <span className="text-orange-600 font-medium bg-orange-500/5 border border-orange-500/15 px-3 py-1 rounded-full text-xs mt-2">
                      无底层信创池 / 依赖公有云组合
                    </span>
                  </div>
                  <div className="text-amber-600 font-black text-xl bg-orange-500/5 w-10 h-10 rounded-full border border-orange-500/15 flex items-center justify-center shrink-0 shadow-inner">
                    VS
                  </div>
                  <div className="flex flex-col items-center bg-gradient-to-b from-orange-500/5 to-amber-500/5 px-6 py-4 rounded-xl border-2 border-orange-500/30 w-full text-center shadow-sm relative">
                    <span className="font-bold text-orange-900 text-lg mb-1">
                      云南烟草企康 (软硬一体)
                    </span>
                    <span className="text-orange-700 font-medium bg-white px-3 py-1 rounded-full text-xs mt-2 shadow-sm border border-orange-500/10">
                      全栈信创闭环 / 原厂服务器调优
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第六、七、八章 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4">
            <div className="bg-gray-100 px-5 py-3 font-bold text-gray-800 flex items-center border-b border-gray-200">
              <span className="text-gray-500 mr-2 tracking-wide uppercase text-xs">
                后置支撑章节：实施、交付、运维服务长效保障
              </span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-3 relative">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-100 hidden md:block"></div>
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/20 text-amber-700 font-bold flex items-center justify-center mr-2 text-xs">
                    6
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    实施与交付管理
                  </span>
                </div>
                <p className="text-[11px] text-gray-505 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block mb-2">
                  证明有能力把PPT变成现实
                </p>
                <div className="text-xs text-gray-700 space-y-2">
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>成熟实施方法论 (PMP/敏捷)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>精准项目排期与里程碑追踪 (Gantt图表)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>顶配交付团队资质 (亮出原厂高工、架构师认证)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>严苛的里程碑质量控制与标准体系验收</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 relative">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-100 hidden md:block"></div>
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/20 text-amber-700 font-bold flex items-center justify-center mr-2 text-xs">
                    7
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    培训、运维与售后
                  </span>
                </div>
                <p className="text-[11px] text-gray-505 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block mb-2">
                  展现全生命周期长线服务
                </p>
                <div className="text-xs text-gray-700 space-y-2">
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>分层级用户与系统管理员赋能培训</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>极速SLA与故障响应 (7x24专线, 30min内排障响应)</span>
                  </div>
                  <div className="mt-3 bg-orange-500/5 border border-orange-500/15 p-2 rounded-lg relative overflow-hidden">
                    <span className="absolute -right-2 -top-2 text-3xl opacity-20">
                      🌍
                    </span>
                    <span className="font-bold text-orange-900 block mb-1">
                      ⭐ 绝对加分项
                    </span>
                    <span className="text-orange-850 font-medium">
                      云南烟草星罗密布的全国县乡级线下强实体IT服务网点极速覆盖能力。
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/20 text-amber-700 font-bold flex items-center justify-center mr-2 text-xs">
                    8
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    应急预案与控制
                  </span>
                </div>
                <p className="text-[11px] text-gray-505 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block mb-2">
                  极限界兜底预案风险对冲
                </p>
                <div className="text-xs text-gray-700 space-y-2">
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>同城双活/异地机房数据灾备与系统秒级切换恢复预案</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>硬件瘫痪/网关故障紧急逃生备用链路方案</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-550 mr-1.5 leading-none mt-0.5">
                      •
                    </span>
                    <span>项目实施过程中的高危风险模型识别与提前规避策略</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

export function CiticCompetitorAnalysisCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mt-4 font-sans text-gray-800">
      {/* Header with reduced opacity (Orange and Gold) */}
      <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b border-orange-500/20 px-6 py-5 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-orange-550/20"
          >
            <path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" />
          </svg>
        </div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center text-orange-950 font-bold text-xl tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 text-orange-600"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
            竞品分析 AI 执行报告
          </div>
          <div className="text-orange-700 text-xs font-mono bg-orange-500/10 px-3 py-1 rounded border border-orange-500/20">
            中信银行信用卡中心员工体检项目 (2025-ZJKZX-068)
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 bg-gray-50/50">
        {/* Core summary text directly from response prompt */}
        <div className="bg-orange-500/5 border border-orange-500/15 p-4 rounded-lg text-sm text-gray-750">
          <span className="font-bold text-orange-955 block mb-1">
            结论提炼：
          </span>
          本次投标最大对手是 <strong>爱康国宾</strong> 和{" "}
          <strong>泰康保险集团</strong>
          。我方制胜关键在于强调全职医疗团队的重履约属性与合规隔离，直击对手服务同质化与业务连带推销的软肋。
        </div>

        {/* 态势与规则 */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {/* 竞争态势 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 font-bold text-gray-800 text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-orange-500/40 mr-2"></span>{" "}
              竞争态势总览 (12家投标方)
            </div>
            <div className="p-4 space-y-4">
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-bold text-orange-755">
                    🔴 高威胁 (2家)
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-700 border border-orange-500/15 rounded text-xs">
                    爱康国宾
                  </span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-700 border border-orange-500/15 rounded text-xs">
                    泰康保险集团
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-bold text-orange-655">
                    🟠 中威胁 (4家)
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-700 border border-orange-500/15 rounded text-xs">
                    元化医疗
                  </span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-700 border border-orange-500/15 rounded text-xs">
                    乐荐健康
                  </span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-700 border border-orange-500/15 rounded text-xs">
                    国康健康
                  </span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-700 border border-orange-500/15 rounded text-xs">
                    美年大健康
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-bold text-amber-655">
                    🟢 低威胁 (5家)
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">
                    霓蝶健康
                  </span>
                  <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">
                    康康在线
                  </span>
                  <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">
                    禾连健康
                  </span>
                  <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">
                    中康体检
                  </span>
                  <span className="px-2 py-1 flex-1 text-center bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs truncate">
                    健康同城
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI 关键判断规则 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 font-bold text-gray-800 text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 mr-2"></span>{" "}
              关键判断规则库
            </div>
            <table className="min-w-full text-xs text-left">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2 font-medium">触发条件</th>
                  <th className="px-4 py-2 font-medium w-32">判定结果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="px-4 py-2">上期中标本项目 / 行业龙头</td>
                  <td className="px-4 py-2 font-medium text-orange-600">
                    🔴 高威胁
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">已中标同客户其他项目</td>
                  <td className="px-4 py-2 font-medium text-orange-600">
                    🔴 高威胁
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">有银行客户案例 ≥ 3</td>
                  <td className="px-4 py-2 font-medium text-orange-500">
                    🟠 中威胁
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">有专精特新 / 高新资质</td>
                  <td className="px-4 py-2 font-medium text-amber-600">
                    🟡 需关注
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">自有体检机构 / 重资产</td>
                  <td className="px-4 py-2 font-medium text-amber-705">
                    ⚠️ 需重点应对
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">与我方无明显竞争点</td>
                  <td className="px-4 py-2 font-medium text-amber-600 font-bold">
                    🟢 低威胁
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 高威胁竞品画像 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-orange-500/5 border-b border-orange-500/10 px-4 py-3 font-bold text-orange-955 text-sm flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>{" "}
              重点高威胁竞品画像与打法分析
            </div>
          </div>
          <div className="p-4 space-y-4">
            {/* Competitor Detail Row */}
            <div className="border border-orange-500/10 rounded-lg p-4 bg-white relative">
              <div className="absolute top-4 right-4 text-xs font-bold bg-orange-500/10 text-orange-700 px-2 py-1 rounded border border-orange-500/15">
                威胁等级：高
              </div>
              <h5 className="font-bold text-lg text-gray-900 mb-1">爱康国宾</h5>
              <div className="text-xs text-gray-500 mb-4">
                成立时间：2015年 | 互联网医疗综合体
              </div>
              <div className="grid grid-cols-1 gap-4 text-xs">
                <div>
                  <span className="font-bold text-gray-700 block mb-1">
                    核心优势：
                  </span>
                  <ul className="list-disc pl-4 text-gray-600 space-y-1">
                    <li>包含直营医疗网络和高密度的线下合作网点</li>
                    <li>多点执业医生资源库丰富，体检排队流程系统成熟</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-gray-700 block mb-1">
                    历史中标与重合点：
                  </span>
                  <ul className="list-disc pl-4 text-gray-600 space-y-1">
                    <li>XX银行总行体检项目</li>
                    <li>XX大厂全国员工体检福利采购</li>
                    <li className="text-orange-600 font-medium mt-1">
                      竞争点：同样主打全面覆盖与线上统筹一站式服务
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-amber-500/5 border border-amber-500/15 p-3 rounded-md">
                <div className="text-xs">
                  <span className="font-bold text-amber-950">
                    克制策略：主打『医疗质量防线』
                  </span>
                  <p className="text-amber-850 mt-1">
                    向客户强调其作为轻资产第三方平台的资源不可控风险，突出我方
                    <strong className="text-amber-900 bg-amber-500/15 px-1 rounded mx-1">
                      千人全职医生天团
                    </strong>
                    的稳定性和专业履约能力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 定价参考 & 我方差异化 */}
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <h5 className="font-bold text-gray-800 text-sm mb-3 flex items-center border-b border-gray-100 pb-2">
              <span className="text-orange-600 mr-2">✦</span> 我方独家差异化壁垒
            </h5>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="bg-orange-550/10 text-orange-700 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5">
                  1
                </div>
                <span>
                  <strong>重医疗属性：</strong>
                  全职医疗团队规模与自有诊所建设，重履约，服务质量可控（而多数竞品只是外包）。
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-550/10 text-orange-700 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5">
                  2
                </div>
                <span>
                  <strong>金融级信赖：</strong>
                  平安集团品牌背书，世界500强，天然契合中信银行的合规审核要求与采购偏好。
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-550/10 text-orange-700 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5">
                  3
                </div>
                <span>
                  <strong>更深的履约网络：</strong>
                  全国千家深度直连的三甲绿通网络，触角极深。
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 bg-white border border-amber-500/20 rounded-lg shadow-sm p-4 bg-amber-500/5">
            <h5 className="font-bold text-amber-955 text-sm mb-3 flex items-center border-b border-amber-550/15 pb-2">
              <span className="text-amber-600 mr-2">¥</span> 投标定价建议推演
            </h5>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">
                  基础全员体检套餐
                </div>
                <div className="text-lg font-bold text-amber-800">
                  〜 880<span className="text-sm font-normal">元/人</span>
                </div>
                <div className="text-[10px] text-gray-500 leading-tight mt-1">
                  根据12家竞品历史中标中位数推算。建议小幅下探，或通过增加高频特色赠项(如不限次线上问诊)提高性价比得分。
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">
                  核心高管/专项深度筛查
                </div>
                <div className="text-lg font-bold text-amber-800">
                  1.5k-2.0k<span className="text-sm font-normal">元/人</span>
                </div>
                <div className="text-[10px] text-gray-500 leading-tight mt-1">
                  利用早癌基因检测/心脑血管精密筛查等项目作为利润核心，拉开竞品差异打造溢价。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

export function CompetitorAnalysisCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-4 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b border-orange-500/20 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center text-orange-950 font-bold text-xl tracking-wide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-3 text-orange-600"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          全面纵深：首要竞品侦测与阻击分析报告
        </div>
        <div className="flex gap-2">
          <span className="text-orange-700 text-xs px-3 py-1 bg-orange-500/15 rounded-full border border-orange-500/20 backdrop-blur-sm font-bold">
            绝密
          </span>
          <span className="text-amber-800 text-xs px-3 py-1 bg-amber-500/15 rounded-full border border-amber-500/20 backdrop-blur-sm font-bold">
            实时生成
          </span>
        </div>
      </div>

      <div className="p-7 space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-700 bg-gray-50/20">
        <section>
          <div className="flex items-center mb-3">
            <div className="w-2 h-6 bg-orange-500/30 rounded-sm mr-3"></div>
            <h3 className="text-lg font-bold text-orange-955">
              1. 执行摘要与分析背景
            </h3>
          </div>
          <div className="bg-white p-5 rounded-xl border border-orange-500/10 shadow-sm text-sm text-gray-600 leading-7">
            <strong>分析意图：</strong>本次竞标对手为体检巨头“
            <strong>爱康国宾</strong>”与险企巨头“<strong>泰康保险集团</strong>
            ”。本次侦测旨在彻底拆解两大巨头的优势包装，从战略基本盘到战术执行层剖析其真实短板与盲区。针对爱康的“重资产同质化”和泰康的“重获客轻履约”特点，精准投射火力网，并通过强力对比我方平安品牌背书的合规保障与重医疗履约能力，直接锁定胜局。
          </div>
        </section>

        <section>
          <div className="flex items-center mb-3">
            <div className="w-2 h-6 bg-amber-500/30 rounded-sm mr-3"></div>
            <h3 className="text-lg font-bold text-amber-955">
              2. 竞品底牌与战略定调解析
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-500/5 border border-orange-500/15 p-5 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" />
                </svg>
              </div>
              <h4 className="font-bold text-orange-950 mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                爱康国宾：重直营门店，服务标准化但同质严重
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                <strong>核心特征：</strong>
                以线下直营体检中心扩张为主，标化流水线作业。
              </p>
              <ul className="text-sm text-orange-850 space-y-1 ml-4 list-disc">
                <li>
                  <strong>软肋1 (重筛查、轻干预)：</strong>
                  前端体检设备全，但检后医生资源不足导致的深度解读缺失，客户痛感极强。
                </li>
                <li>
                  <strong>软肋2 (品牌疲惫)：</strong>
                  作为老牌体检机构，对B端客户而言缺乏新鲜感与高端差异化体验，容易陷于价格战。
                </li>
              </ul>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/15 p-5 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.13 8.9-7 10.02-3.87-1.12-7-5.35-7-10.02v-4.7l7-3.12zM12 11h-2v2h2v-2h2v-2h2v-2H12V9z" />
                </svg>
              </div>
              <h4 className="font-bold text-amber-955 mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-amber-505 mr-2"></span>
                泰康保险集团：借医引流，重金融轻实际履约
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                <strong>核心特征：</strong>
                以大健康生态作为保险销售的敲门砖与增值项，健康服务的终极目的是促成保单转化。
              </p>
              <ul className="text-sm text-amber-850 space-y-1 ml-4 list-disc">
                <li>
                  <strong>软肋1 (强推销属性)：</strong>
                  企业员工极度反感健康管理附带的浓厚保险推销行为，合规红线与隐私暴露风险高。
                </li>
                <li>
                  <strong>软肋2 (履约外包)：</strong>
                  其体检与部分健康管理服务大量采购外包，难以控制底层服务质量与用户体验，一旦发生医疗纠纷溯源困难。
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center mb-3">
            <div className="w-2 h-6 bg-amber-500/30 rounded-sm mr-3"></div>
            <h3 className="text-lg font-bold text-amber-955">
              3. 核心维度打击矩阵对比
            </h3>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-amber-500/10 px-4 py-3 border-b border-amber-500/15 flex items-center">
              <span className="font-bold text-amber-955 text-sm">
                竞争劣势狙击：我方如何实现降维打击
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-white text-gray-400 uppercase text-xs tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="px-5 py-3 w-1/4">评测维度</th>
                    <th className="px-5 py-3 w-1/4 bg-orange-500/5">
                      爱康国宾痛点
                    </th>
                    <th className="px-5 py-3 w-1/4 bg-amber-500/5">
                      泰康集团痛点
                    </th>
                    <th className="px-5 py-3 w-1/4 bg-amber-500/10 text-amber-850 font-bold">
                      我方优势 (企康方案)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-gray-800">
                      服务闭环深度
                    </td>
                    <td className="px-5 py-4 text-orange-600">
                      重检前检中，检后数据孤岛，缺乏长效健康干预。
                    </td>
                    <td className="px-5 py-4 text-amber-700">
                      底层医疗服务靠外部拼接，服务割裂，履约不稳定。
                    </td>
                    <td className="px-5 py-4 text-amber-900 font-medium bg-amber-500/5">
                      <strong>全自营名医天团</strong>
                      ，构建“检-诊-疗-愈”无缝闭环与长效1对1管理。
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-gray-800">
                      数据隐私与合规
                    </td>
                    <td className="px-5 py-4 text-gray-500">
                      商业体检模式下数据易被二次开发。
                    </td>
                    <td className="px-5 py-4 text-amber-700 font-bold">
                      健康数据极易被导流至保险电销，员工反弹情绪极大。
                    </td>
                    <td className="px-5 py-4 text-amber-900 font-medium bg-amber-500/5">
                      <strong>平安银行级合规金钟罩</strong>
                      ，信息绝缘圈，国密算法级脱敏。
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-gray-800">
                      企业级定制能力
                    </td>
                    <td className="px-5 py-4 text-gray-500">
                      套餐固化，难以为大型企业实现精细化岗位健康拆解。
                    </td>
                    <td className="px-5 py-4 text-gray-500">
                      依赖标准金融险种附赠健康卡，缺乏职场场景深度适配。
                    </td>
                    <td className="px-5 py-4 text-amber-900 font-medium bg-amber-500/5">
                      基于百亿大数据实现<strong>千企千面弹性定制</strong>
                      ，高度适配企业职场。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="flex items-center mb-3 border-b border-gray-100 pb-2">
              <div className="w-2 h-5 bg-orange-500/30 rounded-sm mr-3"></div>
              <h3 className="text-base font-bold text-gray-900">
                4. 讲标阻击/话术推演
              </h3>
            </div>
            <div className="text-sm text-gray-600 space-y-3 flex-1">
              <p>
                <strong>防守泰康的保单夹带：</strong>
                重点提示采购方：“我们要的是真正的员工健康福利还是员工购买保险的线索库？金融机构背景不是原罪，关键在于业务隔离。我方系统提供三级阻断防火墙。”
              </p>
              <p>
                <strong>反刺爱康的流水线化：</strong>
                向评委抛出问题：“流水线体检能不能管好异常指标？体检查出结节，谁来跟进？我们的自营全职医疗团队，不赚仪器机器的钱，直接为员工最终的健康结果兜底。”
              </p>
              <div className="mt-4 p-3 bg-orange-500/5 text-orange-955 border border-orange-500/10 rounded-lg text-xs leading-relaxed font-bold">
                核心攻击点锚定：撕开对手“服务不到底”（爱康）与“居心不良”（泰康）的伪装。
              </div>
            </div>
          </section>

          {/* AI-designed low opacity list container (strictly Orange and Gold) */}
          <section className="bg-gradient-to-b from-amber-500/5 to-orange-500/5 p-5 rounded-xl border border-amber-500/20 shadow-sm text-gray-800 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber-600"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
              </svg>
            </div>
            <div className="flex items-center mb-4 border-b border-amber-500/15 pb-2 relative z-10">
              <h3 className="text-base font-bold text-amber-955">
                5. 我们的必胜武器库 (Highlight)
              </h3>
            </div>

            <ul className="space-y-4 text-sm relative z-10 flex-1">
              <li className="flex items-start">
                <div className="bg-amber-500/15 text-amber-800 border border-amber-500/20 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5 shadow-sm">
                  1
                </div>
                <span>
                  <strong>平安集团世界500强背书：</strong>
                  双巨头的信赖之选，不推销，重隔离，天然契合大型国企/央企的合规与采购偏好。
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-500/15 text-amber-800 border border-amber-500/20 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5 shadow-sm">
                  2
                </div>
                <span>
                  <strong>重医疗属性：</strong>
                  自建真实医疗履约团队，全职医生与就医绿通，服务质量100%可控，降维打击第三方拼凑外包。
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-500/15 text-amber-800 border border-amber-500/20 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-0.5 shadow-sm">
                  3
                </div>
                <span>
                  <strong>企康专属科技底座：</strong>
                  将健康数据转化为可视化企业健康报告看板，赋能HR，让管理层直观感受到投入产出比。
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

export function StrategyReportCard({
  data,
  onDownload,
}: {
  data: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <Target size={18} className="mr-2" />
          {data.title}
        </div>
        <div className="text-white/80 text-sm">策略参谋</div>
      </div>

      <div className="p-5 space-y-6">
        {/* Opportunity Assessment */}
        {data.swot && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
              <span className="w-1 h-4 bg-amber-500 rounded mr-2"></span>
              机会评估 (SWOT)
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                <div className="text-yellow-700 font-bold text-xs mb-1">
                  优势 (Strengths)
                </div>
                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                  {data.swot.strengths?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                <div className="text-orange-700 font-bold text-xs mb-1">
                  劣势 (Weaknesses)
                </div>
                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                  {data.swot.weaknesses?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                <div className="text-orange-700 font-bold text-xs mb-1">
                  机会 (Opportunities)
                </div>
                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                  {data.swot.opportunities?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                <div className="text-orange-700 font-bold text-xs mb-1">
                  威胁 (Threats)
                </div>
                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                  {data.swot.threats?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Industry Trends & Competitors */}
        {data.industryTrends && (
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
                <span className="w-1 h-4 bg-amber-500 rounded mr-2"></span>
                行业发展趋势
              </h4>
              <ul className="text-xs text-gray-700 space-y-2 list-disc list-inside">
                {data.industryTrends?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
                <span className="w-1 h-4 bg-amber-500 rounded mr-2"></span>
                核心竞品对比
              </h4>
              <div className="space-y-2">
                {data.competitors?.map((comp: any, i: number) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-2 rounded border border-gray-100 flex justify-between items-center"
                  >
                    <div>
                      <div className="text-xs font-bold text-gray-900">
                        {comp.name}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        {comp.advantage}
                      </div>
                    </div>
                    <div
                      className={`text-[10px] px-1.5 py-0.5 rounded ${comp.threat === "高" ? "bg-orange-100 text-orange-700" : "bg-orange-100 text-orange-700"}`}
                    >
                      威胁: {comp.threat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Customer Pain Points */}
        {data.painPoints && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
              <span className="w-1 h-4 bg-amber-500 rounded mr-2"></span>
              客户关键痛点洞察
            </h4>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
              <ul className="text-xs text-orange-800 space-y-1 list-disc list-inside">
                {data.painPoints?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Product Matching */}
        {data.products && data.products.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3 border-b pb-2">
              <h4 className="text-sm font-bold text-gray-900 flex items-center">
                <span className="w-1 h-4 bg-amber-500 rounded mr-2"></span>
                推荐产品组合
              </h4>
              {data.adaptabilityScore && (
                <div className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-100">
                  综合适配度: {data.adaptabilityScore}%
                </div>
              )}
            </div>
            <div className="space-y-3">
              {data.products.map((product: any, i: number) => (
                <div
                  key={i}
                  className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        {product.name}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {product.reason}
                      </div>
                    </div>
                    <div className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded ml-3 flex-shrink-0">
                      匹配度 {product.matchScore}%
                    </div>
                  </div>
                  {product.pitch && (
                    <div className="mt-3 bg-white p-3 rounded border border-orange-100 text-xs text-gray-700">
                      <div className="font-bold text-orange-700 mb-1 flex items-center">
                        <CheckCircle size={12} className="mr-1" />
                        产品话术及方案
                      </div>
                      <div className="whitespace-pre-line leading-relaxed">
                        {product.pitch}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Plan */}
        {data.actions && data.actions.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
              <span className="w-1 h-4 bg-amber-500 rounded mr-2"></span>
              行动建议
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <ul className="space-y-2">
                {data.actions.map((action: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

function ReportCard({
  data,
  onDownload,
}: {
  data: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <Building2 size={18} className="mr-2" />
          {data.title}
        </div>
        <div className="text-white/80 text-sm">企康助手</div>
      </div>

      <div className="p-5 space-y-6">
        {/* Company Overview */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
            <span className="w-1 h-4 bg-orange-500 rounded mr-2"></span>
            {data.overviewTitle || "核心概述"}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
            {data.overview}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
          {data.metrics?.map((metric: any, i: number) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg p-3 border border-gray-100"
            >
              <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
              <div className="text-sm font-bold text-gray-900">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Team */}
        {data.executives && data.executives.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
              <span className="w-1 h-4 bg-orange-500 rounded mr-2"></span>
              高管团队
            </h4>
            <div className="space-y-3">
              {data.executives.map((exec: any, i: number) => (
                <div
                  key={i}
                  className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    {exec.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      {exec.name}{" "}
                      <span className="text-xs font-normal text-gray-500 ml-2">
                        {exec.title}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {exec.background}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ownership Structure */}
        {data.ownership && data.ownership.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
              <span className="w-1 h-4 bg-orange-500 rounded mr-2"></span>
              股权结构
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              {data.ownership.map((owner: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-between mb-2 last:mb-0"
                >
                  <div className="text-sm text-gray-700 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                    {owner.name}
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    {owner.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Details Section */}
        {data.details && data.details.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
              <span className="w-1 h-4 bg-orange-500 rounded mr-2"></span>
              深度分析
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {data.details?.map((detail: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-orange-50/50 rounded-xl p-4 border border-orange-100/50 hover:bg-orange-50 transition-colors"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                    <span className="text-sm font-bold text-gray-900">
                      {detail.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed pl-3.5 border-l-2 border-orange-100">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.materials && data.materials.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center border-b pb-2">
              <span className="w-1 h-4 bg-orange-500 rounded mr-2"></span>
              推介材料
            </h4>
            <div className="space-y-2">
              {data.materials?.map((m: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg p-3"
                >
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {m.name}
                      </div>
                      <div className="text-xs text-gray-500">{m.type}</div>
                    </div>
                  </div>
                  <button className="text-orange-600 hover:bg-orange-50 p-1.5 rounded transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3 mt-6 border-t pt-4">
          <button className="flex-1 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
            <Download size={16} className="mr-2" />
            导出报告
          </button>
          <button className="flex-1 py-2 bg-orange-50 text-orange-600 border border-orange-100 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors flex items-center justify-center">
            <FileText size={16} className="mr-2" />
            嵌入策略文档
          </button>
        </div>
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

function SurveyReportCard({
  data,
  onDownload,
}: {
  data: any;
  onDownload?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "strategy" | "business"
  >("overview");

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <Building2 size={18} className="mr-2" />
          云南烟草基本情况最新调研报告
        </div>
        <div className="text-white/80 text-sm">情报侦察兵</div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 ${
            activeTab === "overview"
              ? "border-orange-500 text-orange-600 bg-white"
              : "border-transparent text-gray-505 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          }`}
        >
          股权结构与基本概况
        </button>
        <button
          onClick={() => setActiveTab("strategy")}
          className={`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 ${
            activeTab === "strategy"
              ? "border-orange-500 text-orange-600 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          }`}
        >
          最新战略规划
        </button>
        <button
          onClick={() => setActiveTab("business")}
          className={`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 ${
            activeTab === "business"
              ? "border-orange-500 text-orange-600 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          }`}
        >
          最新业务规划
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {activeTab === "overview" && (
          <div className="space-y-5">
            {/* Ownership structure table */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <PieChart size={16} className="text-orange-500 mr-2" />
                第一部分：股权结构与控股情况
              </h4>
              <div className="overflow-hidden border border-gray-100 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        股东名称
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        持股比例
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        股权性质与治理结构
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100 text-xs">
                    <tr className="hover:bg-orange-50/20 transition-colors">
                      <td className="px-4 py-2.5 font-bold text-gray-900 flex items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>
                        云南烟草控股 (3396.HK)
                      </td>
                      <td className="px-4 py-2.5 text-orange-600 font-bold">
                        30.56%
                      </td>
                      <td className="px-4 py-2.5 text-gray-600">
                        第一大股东，核心战略控制权，长期产业协同
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50/20 transition-colors">
                      <td className="px-4 py-2.5 font-medium text-gray-900 flex items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400 mr-2"></span>
                        中国科学院控股
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 font-bold">
                        约 9.5%
                      </td>
                      <td className="px-4 py-2.5 text-gray-600">
                        科技背景国资股东，代表科研背景与国家级资源支持
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50/20 transition-colors">
                      <td className="px-4 py-2.5 font-medium text-gray-900 flex items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-300 mr-2"></span>
                        公众股东及H股
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 font-bold">
                        约 50.0%
                      </td>
                      <td className="px-4 py-2.5 text-gray-600">
                        在香港联交所公开交易，具备极高资本化与国际化水平
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50/20 transition-colors">
                      <td className="px-4 py-2.5 font-medium text-gray-900 flex items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-200 mr-2"></span>
                        管理层股份/其他
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 font-semibold">
                        约 9.94%
                      </td>
                      <td className="px-4 py-2.5 text-gray-600">
                        高管利益与公司捆绑，治理结构公开、透明且极具韧性
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Core metrics KPI bubbles */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <BarChart3 size={16} className="text-orange-500 mr-2" />
                第二部分：最新核心运营数据 (24/25财年Q3)
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-orange-50/30 rounded-xl p-3 border border-orange-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">
                    营业收入 (Q3)
                  </div>
                  <div className="text-base font-bold text-orange-600">
                    1,133 亿
                  </div>
                  <div className="text-[9px] text-yellow-600 font-medium">
                    同比增长 +3%
                  </div>
                </div>
                <div className="bg-orange-50/30 rounded-xl p-3 border border-orange-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">
                    单季净利润 (Q3)
                  </div>
                  <div className="text-base font-bold text-orange-600">
                    超 24 亿
                  </div>
                  <div className="text-[9px] text-yellow-600 font-medium font-bold">
                    超市场预期
                  </div>
                </div>
                <div className="bg-orange-50/30 rounded-xl p-3 border border-orange-100 flex flex-col justify-center items-center">
                  <div className="text-[10px] text-gray-500 mb-1">
                    非PC业务贡献占比
                  </div>
                  <div className="text-base font-bold text-orange-600">
                    45 %
                  </div>
                  <div className="text-[9px] text-amber-600 font-medium">
                    多元引擎成型
                  </div>
                </div>
              </div>
            </div>

            {/* Business groups division table */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <Layers size={16} className="text-orange-500 mr-2" />
                第三部分：三大业务集团 (BG) 定位、主攻与格局
              </h4>
              <div className="overflow-hidden border border-gray-100 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        业务集团 (BU)
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        定位、产品与战略方向
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        核心战绩 / 行业地位
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100 text-xs">
                    <tr className="hover:bg-orange-50/20 transition-colors">
                      <td className="px-4 py-2 font-bold text-gray-900">
                        IDG
                        <span className="block text-[9px] text-gray-400 font-normal">
                          智能设备业务集团
                        </span>
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        个人电脑(PC/NB)、摩托罗拉智能手机、平板电脑以及丰富的智能
                        IoT 设备。全面在端侧部署私有化智能体与高级大模型。
                      </td>
                      <td className="px-4 py-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-yellow-50 text-yellow-700 border border-yellow-100">
                          全球PC市场份额 24% (首位)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50/20 transition-colors">
                      <td className="px-4 py-2 font-bold text-gray-900">
                        ISG
                        <span className="block text-[9px] text-gray-400 font-normal">
                          基础设施方案集团
                        </span>
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        AI服务器、并行存储系统、混合云基础设施以及温水液冷服务器技术。完美覆盖高密、超大算力需求及低能碳智算。
                      </td>
                      <td className="px-4 py-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-100">
                          全球第三大 AI 服务器供应商
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50/20 transition-colors">
                      <td className="px-4 py-2 font-bold text-gray-900">
                        SSG
                        <span className="block text-[9px] text-gray-400 font-normal">
                          方案服务业务集团
                        </span>
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        TruScale一切即服务(IDaaS)、智能制造综合工业方案、智慧教育、智慧医疗全案。托管与咨询一体。
                      </td>
                      <td className="px-4 py-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
                          利润引擎与转型增长第一支柱
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Development directions and execution chains */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                <div className="text-xs font-bold text-gray-900 flex items-center mb-1.5 text-orange-700">
                  <TrendingUp size={14} className="mr-1" /> 发展方向总结
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  全面从纯硬件设备供应商向
                  <strong>
                    “高增长、全端、数智化解决方案与全周期服务转型供应商”
                  </strong>
                  跃升。依托“端-边-云-网-智”的新IT系统架构赋能核心企业。
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                <div className="text-xs font-bold text-gray-900 flex items-center mb-1.5 text-orange-700">
                  <ShieldCheck size={14} className="mr-1" /> 高管决策链机制
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  最高顶层战略拍板为 <strong>LEC（云南烟草执行委员会）</strong>
                  ，张总为主帅；中国区业务刘军统率；HR郑孝明对员工大健康福利、体检采购具有核心发起与建议权。
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "strategy" && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 flex items-center border-b pb-2">
              <Cpu size={16} className="text-orange-500 mr-2" />
              云南烟草集团三大最新战略规划
            </h4>

            <div className="space-y-3">
              <div className="bg-gradient-to-r from-orange-50/40 to-amber-50/10 border border-orange-100 rounded-xl p-4">
                <div className="flex items-center mb-1.5">
                  <span className="w-5 h-5 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    1
                  </span>
                  <div className="text-sm font-bold text-gray-900">
                    “AI for All”（让AI全方位普惠每个人与组织）
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-7">
                  将AI模型核心技术、加速算法硬件植入PC、智能手机，打造“个人/企业级专属AI助理（智能体）”，实现本地私密的高效智能服务。
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50/40 to-amber-50/10 border border-orange-100 rounded-xl p-4">
                <div className="flex items-center mb-1.5">
                  <span className="w-5 h-5 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    2
                  </span>
                  <div className="text-sm font-bold text-gray-900">
                    3S 战略深化与高阶演进
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-7">
                  不断深化：**Smart IoT** 部署百亿传感计算触角；**Smart
                  Infrastructure** 整合大范围算力基座；推动 **Smart Vertical**
                  深入政企、智造、高校等重应用场景落地。
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50/40 to-amber-50/10 border border-orange-100 rounded-xl p-4">
                <div className="flex items-center mb-1.5">
                  <span className="w-5 h-5 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    3
                  </span>
                  <div className="text-sm font-bold text-gray-900">
                    “混合人工智能” 深度布局
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-7">
                  公共大模型与私有大模型完美共存。用户敏感数据绝不出端、不出本地，极大程度突破了大型政企关于数据合规的实质性壁垒。
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "business" && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 flex items-center border-b pb-2">
              <Briefcase size={16} className="text-orange-500 mr-2" />
              云南烟草集团三大最新业务规划行动
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="border border-orange-100 bg-orange-50/5 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <Cpu size={16} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-1.5">
                  AI内嵌智能终端
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  加速生产端侧推理和专属小助理（云南烟草小天）嵌入式PC，启动智能重塑，推动PC业界新一类爆发增长。
                </p>
              </div>

              <div className="border border-orange-100 bg-orange-50/5 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <Layers size={16} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-1.5">
                  全栈基础设施打造
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  加力部署绿色液冷、高能效比智算机架、大型AI服务器销售。建立世界级工业设计护城河。
                </p>
              </div>

              <div className="border border-orange-100 bg-orange-50/5 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <TrendingUp size={16} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-1.5">
                  垂直数字化方案服务
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  深耕世界标杆式的智能工厂体系，将先进工业制造、智慧研发运维等标准化成智慧政企全效服务。
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg text-xs text-gray-500 flex items-start">
              <span className="text-orange-500 font-bold mr-1.5">
                📌 AI 关键结论
              </span>
              <span>
                云南烟草当前在全栈混合 AI
                底层加码巨大、其员工大多具有极高强度和极高学历特征。对自身健康（Well-being）、诊疗效率要求很高，是高端体检及综合企康一揽子服务采购的高优超级商机（超级买手）。
              </span>
            </div>
          </div>
        )}
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

function DecisionMakersReportCard({
  data,
  onDownload,
}: {
  data: any;
  onDownload?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<
    "timeline" | "decisionChain" | "tactics"
  >("timeline");

  const executives = [
    {
      name: "张总",
      title: "董事长兼CEO",
      role: "👑 顶层战略决策",
      timeline: [
        { year: "1989", desc: "加入云南烟草集团，从基层销售做起。" },
        {
          year: "1994",
          desc: "出任云南烟草微机事业部总经理，战功显赫，带领云南烟草PC取得中国市场占有率第一。",
        },
        { year: "2001", desc: "担任云南烟草集团总裁兼CEO。" },
        {
          year: "2005",
          desc: "主导完成震惊全球业界的“蛇吞象”——收购IBM PC业务，拉开史诗般国际化征程。",
        },
        {
          year: "2011至今",
          desc: "担任集团董事长兼CEO，全力推进“3S”与“AI for All”智能化转型大计。",
        },
      ],
    },
    {
      name: "刘军",
      title: "执行副总裁兼中国区总裁",
      role: "🚀 中国区业务拍板",
      timeline: [
        { year: "1993", desc: "清华大学自动控制系毕业后加入云南烟草。" },
        {
          year: "2000-2015",
          desc: "历任研发、企划、全球供应链系统总负责人及移动业务集团总裁。",
        },
        {
          year: "2017至今",
          desc: "荣耀重回云南烟草并担任执行副总裁兼中国区总裁，主导落地“日出东方”战略，狠抓新客生态。",
        },
      ],
    },
    {
      name: "郑孝明",
      title: "高级副总裁兼首席人力资源官",
      role: "🤝 福利采购与健康一审决定人",
      timeline: [
        {
          year: "历任",
          desc: "曾在多家国际巨头高科技与跨国通信及网络外企公司执掌核心HR大权。",
        },
        {
          year: "近期",
          desc: "加入云南烟草主导全球组织大融合。极其关注核心高压奋斗科技团队的高水准健康与福祉。",
        },
      ],
    },
    {
      name: "贺志强",
      title: "高级副总裁兼云南烟草创投集团总裁",
      role: "🌱 新客/智慧生态推荐发起人",
      timeline: [
        {
          year: "1986",
          desc: "入司。长期负责计算机核心软件、高新架构的深度战略研究和前沿研发。",
        },
        {
          year: "1999-2016",
          desc: "长期任云南烟草集团全球首席技术官(CTO)及云南烟草研究院院长。",
        },
        {
          year: "2016至今",
          desc: "出任云南烟草创投集团总裁，负责内部孵化培育，重仓投资物联网、混合AI及硬核智慧医疗领域。",
        },
      ],
    },
    {
      name: "冯晨晰",
      title: "大客户业务板块核心代表",
      role: "⚖️ 落地跟进、执行与合规红线把关",
      timeline: [
        {
          year: "2010",
          desc: "起步于政企大客户销售经理，统筹多条业务线的订单落地和大客户维系。",
        },
        {
          year: "至今",
          desc: "主抓大型采购招标项目的实际申报与执行。在商务、资质对齐和财务法规对标中持关键签字合规红线权限。",
        },
      ],
    },
  ];

  const [activeExec, setActiveExec] = useState(0);

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <Users size={18} className="mr-2" />
          【云南烟草】关键决策人分析报告
        </div>
        <div className="text-white/80 text-sm">利益相关者图谱</div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        <button
          onClick={() => setActiveTab("timeline")}
          className={`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 ${
            activeTab === "timeline"
              ? "border-amber-500 text-amber-600 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          }`}
        >
          高管时间线履历
        </button>
        <button
          onClick={() => setActiveTab("decisionChain")}
          className={`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 ${
            activeTab === "decisionChain"
              ? "border-amber-500 text-amber-600 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          }`}
        >
          结构化决策链表格
        </button>
        <button
          onClick={() => setActiveTab("tactics")}
          className={`flex-1 py-2.5 text-center text-xs font-bold transition-all border-b-2 ${
            activeTab === "tactics"
              ? "border-amber-500 text-amber-600 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          }`}
        >
          攻攻战术与高管话术
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {activeTab === "timeline" && (
          <div className="grid grid-cols-1 gap-4">
            {/* Left selector sidebar */}
            <div className="col-span-1 border-r border-gray-100 pr-2 space-y-1">
              <span className="text-[10px] font-bold text-gray-400 block mb-2 uppercase tracking-wide">
                云南烟草高层 (点击切换)
              </span>
              {executives.map((exec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveExec(idx)}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold transition-all flex flex-col ${
                    activeExec === idx
                      ? "bg-amber-50 text-amber-700 border-l-4 border-amber-505 border-amber-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <span className="text-gray-950 font-bold">{exec.name}</span>
                  <span className="text-[10px] text-gray-450 text-gray-400 font-normal truncate mt-0.5">
                    {exec.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right timeline view */}
            <div className="col-span-1 pl-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b pb-2 mb-3">
                  <div className="flex items-center">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-xs rounded mr-2">
                      {executives[activeExec].name}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {executives[activeExec].title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-600 bg-amber-5px bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 leading-none">
                    {executives[activeExec].role}
                  </span>
                </div>

                {/* Timeline */}
                <div className="space-y-3.5 pl-2 overflow-y-auto max-h-[220px]">
                  {executives[activeExec].timeline.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative pl-4 border-l border-amber-100 last:border-transparent"
                    >
                      <div className="absolute -left-1.5 top-1 w-3 h-3 bg-white border-2 border-amber-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-amber-700 mr-2">
                          {item.year}
                        </span>
                        <p className="text-gray-600 mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "decisionChain" && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 flex items-center">
              <ShieldCheck size={16} className="text-amber-500 mr-2" />
              关键人决策角色及核心管控点
            </h4>

            <div className="overflow-hidden border border-gray-100 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-500 uppercase">
                      决策分工 / 角色
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-500 uppercase font-bold">
                      关键责任人
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-500 uppercase">
                      决策权限等级与重点考量点
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-xs">
                  <tr className="hover:bg-amber-50/10 transition-colors">
                    <td className="px-3 py-2 font-bold text-gray-900">
                      👑 顶层战略决策
                    </td>
                    <td className="px-3 py-2 text-amber-750 text-amber-700 font-bold">
                      张总
                    </td>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      把握全集团年度总体预算方向与战略性外资合作建立，关注两司长期合作的社会美誉和双赢战略合作大势。
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/10 transition-colors">
                    <td className="px-3 py-2 font-bold text-gray-900">
                      🚀 中国区业务审批
                    </td>
                    <td className="px-3 py-2 text-amber-750 text-amber-700 font-bold">
                      刘军
                    </td>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      对中国区大范围、重特大采购招投标、大单采购具有
                      <strong>一锤定音的终极拍板表决权</strong>
                      。极度看中合作回报效益以及新 IT 和智慧城市的软硬绑定。
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/10 transition-colors">
                    <td className="px-3 py-2 font-bold text-gray-900">
                      🤝 福利健康发起审核
                    </td>
                    <td className="px-3 py-2 text-amber-750 text-amber-700 font-bold">
                      郑孝明
                    </td>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      主政HR全局，决定员工整体体检及就医保障、高管检后管理采购核心规范。具有
                      <strong>第一业务发起权</strong>
                      ，极重视业界一流同行的顶级健康标杆实践。
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/10 transition-colors">
                    <td className="px-3 py-2 font-bold text-gray-900">
                      🌱 生态联合引荐协同
                    </td>
                    <td className="px-3 py-2 text-amber-750 text-amber-700 font-bold">
                      贺志强
                    </td>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      作为研究院和投资的先锋，注重技术与战略关联，在智慧医疗及硬科技上是关键推荐引荐和业务协同推力。
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/10 transition-colors">
                    <td className="px-3 py-2 font-bold text-gray-900">
                      ⚖️ 落地执行合规监督
                    </td>
                    <td className="px-3 py-2 text-amber-750 text-amber-700 font-bold">
                      冯晨晰
                    </td>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      特定大客户销售及商务落地审核，负责招投标一线的严密合规校验、商务合同和法务审核，持有一票合规否决红牌。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "tactics" && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 flex items-center border-b pb-2">
              <Award size={16} className="text-amber-500 mr-2" />
              高层精准突击拜访攻坚锦囊
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
              <div className="bg-amber-50/30 border border-amber-100 rounded-xl p-3 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-800 mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>
                    攻坚突破口 - 第一枪
                  </div>
                  <div className="text-xs font-bold text-gray-900 mb-1.5">
                    郑孝明 / HR高管团队
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed">
                    直奔痛点：提供高阶体检与“高管尊享检后健康管理”。送出
                    <strong>
                      “腾讯、华为核心高管名医健康防御标杆绿通案例”
                    </strong>
                    ，一键命中其对王牌人才稳定的核心诉求。
                  </p>
                </div>
                <span className="text-[9px] text-amber-600 font-bold mt-2.5">
                  攻坚推荐：★ ★ ★ ★ ★
                </span>
              </div>

              <div className="bg-amber-50/30 border border-amber-100 rounded-xl p-3 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-800 mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>
                    协同共建层 - 连环枪
                  </div>
                  <div className="text-xs font-bold text-gray-900 mb-1.5">
                    刘军 / 中国区总裁
                  </div>
                  <p className="text-[10px] text-gray-650 text-gray-600 leading-relaxed">
                    对对子：切入平安在金融、保险、大健康、智慧生态底座上的顶级大局。将多端协同体验和福利结合，打出
                    <strong>生态联动牌</strong>
                    ，增强其PC及服务在中国区落地壁垒。
                  </p>
                </div>
                <span className="text-[9px] text-amber-600 font-bold mt-2.5">
                  攻坚推荐：★ ★ ★ ★ ☆
                </span>
              </div>

              <div className="bg-amber-50/30 border border-amber-100 rounded-xl p-3 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-800 mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>
                    高层共振铺垫 - 终结枪
                  </div>
                  <div className="text-xs font-bold text-gray-900 mb-1.5">
                    张总 / 云南烟草帅印
                  </div>
                  <p className="text-[10px] text-gray-650 text-gray-600 leading-relaxed">
                    打历史牌：强调平安与云南烟草长达18年、被载入产业史册的
                    <strong>“0001号大额企业年金”超级合作典故</strong>
                    。促成平安管理高层与其直面会见，将企康上升至两司全面战合新章。
                  </p>
                </div>
                <span className="text-[9px] text-amber-600 font-bold mt-2.5">
                  攻坚推荐：★ ★ ★ ★ ★
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {onDownload && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-end download-exclude w-full">
          <button
            onClick={onDownload}
            className="flex flex-row items-center justify-center text-sm text-orange-600 bg-white hover:bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl transition-colors font-bold shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载保存至本地
          </button>
        </div>
      )}
    </div>
  );
}

function ReasoningProcess({
  steps,
  title,
  timestamp,
}: {
  steps: {
    text: string;
    status: "loading" | "done" | "complete" | "pending";
  }[];
  title?: string;
  timestamp?: any;
}) {
  const [expanded, setExpanded] = useState(true);
  const [historyExpanded, setHistoryExpanded] = useState(false);

  const activeSteps = steps?.filter((s) => s.status !== "pending") || [];
  const isRunning = activeSteps.some((s) => s.status === "loading");
  
  useEffect(() => {
    if (!isRunning && activeSteps.length > 3) {
      setExpanded(false);
    }
  }, [isRunning, activeSteps.length]);

  const getIcon = (text: string, status: string) => {
    const isDone = status === "done" || status === "complete";
    if (isDone) {
      return <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 ml-3 flex-shrink-0" />;
    }
    if (status === "loading") {
      return <Loader2 size={15} className="text-blue-500 animate-spin mt-0.5 ml-3 flex-shrink-0" />;
    }
    return <CheckCircle2 size={15} className="text-gray-200 mt-0.5 ml-3 flex-shrink-0" />;
  };

  const getNodeIcon = (text: string) => {
    if (text.includes("思考") || text.includes("分析") || text.includes("理解") || text.includes("识别") || text.includes("评估") || text.includes("梳理") || text.includes("提炼") || text.includes("确认") || text.includes("判断")) return <Brain size={15} className="mr-2 text-gray-500 flex-shrink-0" />;
    if (text.includes("搜索") || text.includes("检索")) return <Search size={15} className="mr-2 text-gray-500 flex-shrink-0" />;
    if (text.includes("文件") || text.includes("提取")) return <FileText size={15} className="mr-2 text-gray-500 flex-shrink-0" />;
    if (text.includes("命令")) return <Terminal size={15} className="mr-2 text-gray-500 flex-shrink-0" />;
    if (text.includes("Skill") || text.includes("技能") || text.includes("调用")) return <Wrench size={15} className="mr-2 text-gray-500 flex-shrink-0" />;
    return <Box size={15} className="mr-2 text-gray-500 flex-shrink-0" />;
  };

  const getSummaryText = () => {
    if (isRunning) return "过程执行中...";
    const count = activeSteps.length;
    return `已完成 ${count} 个步骤`;
  };

  const renderText = (text: string) => {
    if (text.includes(" | ")) {
      const parts = text.split(" | ");
      return (
        <>
          <span className="font-medium text-gray-700">{parts[0]}</span>
          <span className="text-gray-300 mx-1.5">|</span>
          <span className="text-gray-500">{parts.slice(1).join(" | ")}</span>
        </>
      );
    }
    return text;
  };

  const renderStep = (step: any, idx: number) => (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      key={step.text + idx}
      className="flex items-start text-[14px] py-1.5"
    >
      <div className="mt-0.5">
        {getNodeIcon(step.text)}
      </div>
      <span className={`flex-1 ${step.status === "loading" ? "text-gray-500" : "text-gray-700"}`}>
        <TypewriterText
          text={step.text}
          timestamp={timestamp}
          render={(c: string) => <>{renderText(c)}</>}
        />
      </span>
      {getIcon(step.text, step.status)}
    </motion.div>
  );

  const displayHistory = isRunning && activeSteps.length > 3 && !historyExpanded;
  const historySteps = displayHistory ? activeSteps.slice(0, activeSteps.length - 3) : [];
  const recentSteps = displayHistory ? activeSteps.slice(-3) : activeSteps;

  return (
    <div className="download-exclude w-full max-w-3xl mt-1 mb-3 font-sans">
      <div 
        className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900 transition-colors py-1 w-max"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center text-[14px] font-medium">
          <Sparkles size={16} className="mr-2 text-orange-500" />
          {expanded ? "收起过程" : "查看过程"}
          {expanded ? <ChevronUp size={16} className="ml-1 text-gray-400" /> : <ChevronDown size={16} className="ml-1 text-gray-400" />}
        </div>
      </div>
      
      <AnimatePresence>
        {!expanded && (
          <motion.div
             initial={{ height: 0, opacity: 0 }} 
             animate={{ height: "auto", opacity: 1 }} 
             exit={{ height: 0, opacity: 0 }}
             className="overflow-hidden"
          >
             <div className="text-[13px] text-gray-500 mt-1 ml-6 cursor-pointer" onClick={() => setExpanded(true)}>
               {getSummaryText()}
             </div>
          </motion.div>
        )}
        {expanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-1 mt-2 bg-gray-50/50 rounded-lg p-3">
              {displayHistory && historySteps.length > 0 && (
                <div className="mb-2">
                  <div 
                    className="flex items-center text-xs text-gray-400 cursor-pointer hover:text-gray-600 py-1"
                    onClick={() => setHistoryExpanded(true)}
                  >
                    <div className="h-px bg-gray-200 flex-1 mr-3" />
                    已折叠 {historySteps.length} 个历史节点
                    <div className="h-px bg-gray-200 flex-1 ml-3" />
                  </div>
                </div>
              )}
              
              {!displayHistory && historySteps.length > 0 && historySteps.map(renderStep)}
              
              {recentSteps.map(renderStep)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LeadCardCarousel({
  leads,
  onAction,
}: {
  leads: any[];
  onAction: (text: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleCount < (leads?.length || 0)) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, leads]);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const width = containerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
  };

  const visibleLeads = leads?.slice(0, visibleCount) || [];

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      {/* Orange Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold">
          <Target size={18} className="mr-2" />
          领商机·AI匹配结果
        </div>
        <div className="text-white/80 text-sm">
          {visibleLeads.length} 个高优商机
        </div>
      </div>

      {/* Swipeable Content */}
      <div className="p-4 bg-gray-50 relative">
        <button
          onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-md ${currentIndex === 0 ? "bg-gray-100 text-gray-300 opacity-50 cursor-not-allowed" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() =>
            scrollTo(Math.min(visibleLeads.length - 1, currentIndex + 1))
          }
          disabled={currentIndex === visibleLeads.length - 1}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-md ${currentIndex === visibleLeads.length - 1 ? "bg-gray-100 text-gray-300 opacity-50 cursor-not-allowed" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
        >
          <ChevronRight size={18} />
        </button>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 transition-all duration-500"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {visibleLeads.map((lead, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={lead.id}
              className="w-full flex-shrink-0 snap-center px-1"
            >
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 text-gray-900 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {lead.title}
                    </h3>
                    <div className="flex flex-wrap items-center text-gray-500 text-xs gap-y-2 space-x-4">
                      <span className="flex items-center">
                        <Building2 size={12} className="mr-1" /> {lead.company}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={12} className="mr-1" /> {lead.location}
                      </span>
                      <span className="flex items-center text-orange-500 font-medium">
                        <DollarSign size={12} className="mr-1" /> {lead.budget}
                      </span>
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-full border-4 border-orange-50 flex items-center justify-center flex-shrink-0 relative bg-white">
                    <svg
                      className="absolute inset-0 w-full h-full -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-orange-500"
                        strokeDasharray={`${lead.score}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="text-center">
                      <div className="text-lg font-bold leading-none text-orange-500">
                        {lead.score}
                      </div>
                      <div className="text-[8px] text-gray-500">匹配度</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100 relative z-10">
                  <div className="text-xs text-gray-500 mb-3 font-medium">
                    匹配维度分析
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {lead.dimensions?.map((dim: any, i: number) => (
                      <div key={i} className="flex items-center text-sm">
                        {dim.match ? (
                          <CheckCircle2
                            size={14}
                            className="text-yellow-500 mr-2 flex-shrink-0"
                          />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-gray-300 mr-2 flex-shrink-0 bg-white"></div>
                        )}
                        <span className="text-gray-500 mr-2">{dim.label}:</span>
                        <span className="text-gray-900 font-medium truncate">
                          {dim.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {lead.tags?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="bg-orange-50 text-orange-600 border border-orange-100 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 relative z-10">
                  <button
                    onClick={() => {
                      if (currentIndex < (leads?.length || 0) - 1) {
                        scrollTo(currentIndex + 1);
                      }
                    }}
                    className="flex-1 py-2.5 bg-white hover:bg-gray-50 text-gray-600 rounded-lg text-sm font-medium transition-colors border border-gray-200 shadow-sm"
                  >
                    × 跳过
                  </button>
                  <button
                    onClick={() => onAction(`认领 ${lead.title}`)}
                    className="flex-1 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center shadow-sm"
                  >
                    <CheckCircle2 size={16} className="mr-1.5" /> 认领商机
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-4 px-2">
          <div className="flex space-x-1.5">
            {visibleLeads.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-orange-500 mt-3 font-medium">
          👈 左右滑动查看更多商机
        </div>
      </div>
    </div>
  );
}

function LeadExecutionCard({
  data,
  onAction,
}: {
  data: any;
  onAction: (text: string) => void;
}) {
  return (
    <div className="w-full max-w-2xl flex flex-col space-y-4">
      {/* Top White Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <div className="flex items-center text-yellow-600 font-bold text-base mb-4">
          <CheckCircle2 size={20} className="mr-2" />
          {data.skillName} {data.status}
        </div>
        <p className="text-sm text-gray-700 mb-4">
          已调用商机认领接口，后台数据打标成功：
        </p>
        <ul className="space-y-3 mb-4">
          {data.details?.map((detail: any, i: number) => (
            <li key={i} className="flex items-start text-sm">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span className="text-gray-500 w-20 flex-shrink-0">
                {detail.label}:
              </span>
              <span className="text-gray-900 font-medium break-words overflow-hidden">
                {detail.value}
              </span>
            </li>
          ))}
        </ul>
        <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 flex items-start">
          <span className="mr-2">🎉</span>
          <span>商机已进入您的跟进列表！已为您自动创建跟进会话。</span>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg text-sm text-orange-800 flex items-start mt-2 border border-orange-100">
          <span className="mr-2">💡</span>
          <span>
            <strong>建议下一步：</strong>
            {data.nextStep}
          </span>
        </div>
      </div>
    </div>
  );
}

function PrepCard({
  data,
  onAction,
}: {
  data: any;
  onAction: (text: string) => void;
}) {
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 flex items-center text-white font-bold">
        <Presentation size={18} className="mr-2" />
        {data.title}
      </div>
      <div className="p-4">
        <div className="mb-4 text-sm text-gray-600">{data.summary}</div>

        <div className="mb-4">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider uppercase tracking-wider">
            讨论群组
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center">
              <Users size={16} className="text-orange-600 mr-2" />
              <span className="text-sm font-medium text-orange-900">
                {data.groupName}
              </span>
              <span className="ml-3 text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                {data.members?.length} 人
              </span>
            </div>
            {data.onJump && (
              <button
                onClick={data.onJump}
                className="text-xs bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center shadow-sm"
              >
                <MessageSquare size={14} className="mr-1" />
                跳转群组
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.members?.map((m: string, i: number) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div>
          {data.materials && data.materials.length > 0 && (
            <div>
              <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
                生成材料
              </div>
              <div className="space-y-2">
                {data.materials?.map((m: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg p-3"
                  >
                    <div className="flex items-center">
                      <FileText size={16} className="text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {m.name}
                        </div>
                        <div className="text-xs text-gray-500">{m.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedMaterial(m)}
                        className="text-orange-600 hover:bg-orange-50 p-1.5 rounded transition-colors text-xs font-medium"
                      >
                        查看
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded transition-colors">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedMaterial && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMaterial(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
              <h3 className="text-lg font-bold">
                {selectedMaterial.name} 详情
              </h3>
              <button
                onClick={() => setSelectedMaterial(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            {selectedMaterial.content ? (
              <div
                dangerouslySetInnerHTML={{ __html: selectedMaterial.content }}
              />
            ) : (
              <div className="text-sm text-gray-600 mb-6">
                这里是 {selectedMaterial.name}{" "}
                的详细内容预览。您可以查看文档的摘要、关键数据点以及建议的修改方向。
              </div>
            )}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedMaterial(null)}
                className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MeetingInProgressCard({
  onAction,
  transcription,
}: {
  onAction: (text: string) => void;
  transcription?: string;
}) {
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2 p-5 flex flex-col items-center justify-center">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-full h-full bg-amber-100 rounded-full flex items-center justify-center border-2 border-amber-200">
          <Mic size={28} className="text-amber-600 animate-pulse" />
        </div>
      </div>
      <div className="text-lg font-bold text-gray-900 mb-1">会议进行中...</div>
      <div className="text-sm text-gray-500 text-center mb-4">
        正在为您实时转写并提取关键信息
      </div>

      {transcription && (
        <div className="w-full bg-gray-50 rounded-lg p-3 mb-4 border border-gray-100 min-h-[80px] max-h-[120px] overflow-y-auto">
          <p className="text-xs text-gray-600 italic leading-relaxed">
            {transcription}
            <span className="inline-block w-1 h-3 bg-amber-500 ml-1 animate-pulse"></span>
          </p>
        </div>
      )}

      <div className="mb-6 flex space-x-1">
        <div className="w-1.5 h-4 bg-amber-400 rounded-full animate-[bounce_1s_infinite_0ms]"></div>
        <div className="w-1.5 h-6 bg-amber-500 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
        <div className="w-1.5 h-3 bg-amber-300 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
        <div className="w-1.5 h-5 bg-amber-600 rounded-full animate-[bounce_1s_infinite_600ms]"></div>
        <div className="w-1.5 h-4 bg-amber-400 rounded-full animate-[bounce_1s_infinite_800ms]"></div>
      </div>

      <button
        onClick={() => onAction("挂断会议")}
        className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-bold transition-colors flex items-center justify-center shadow-md"
      >
        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
        挂断并生成纪要
      </button>
    </div>
  );
}

function MeetingCard({ data }: { data: any }) {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-3 flex items-center text-white font-bold">
        <Mic size={18} className="mr-2" />
        {data.title}
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar size={14} className="mr-1" /> {data.date}
          <span className="mx-2">|</span>
          <Users size={14} className="mr-1" /> {data.attendees?.join(", ")}
        </div>

        <div className="mb-4">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider flex justify-between items-center">
            <span>核心纪要</span>
            {data.syncStatus && (
              <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full flex items-center font-normal">
                <CheckCircle2 size={10} className="mr-1" /> {data.syncStatus}
              </span>
            )}
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {data.keyPoints?.map((p: string, i: number) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            客户维系建议
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-sm text-amber-900 italic">
            "{data.tactics}"
          </div>
        </div>

        <div>
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider flex justify-between items-center">
            <span>待办事项</span>
            {data.todoStatus && (
              <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full flex items-center font-normal">
                <MessageSquare size={10} className="mr-1" /> {data.todoStatus}
              </span>
            )}
          </div>
          <div className="space-y-2">
            {data.todos?.map((t: any, i: number) => (
              <div
                key={i}
                className="flex items-start bg-gray-50 border border-gray-100 rounded-lg p-3"
              >
                <div className="mt-0.5 mr-3">
                  <div className="w-4 h-4 rounded border border-gray-300"></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {t.task}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    负责人: {t.assignee} | 截止: {t.deadline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {data.cloudDocs && (
          <div className="mt-4">
            <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              云文档链接
            </div>
            <div className="grid grid-cols-1 gap-2">
              {data.cloudDocs?.map((doc: any, i: number) => (
                <a
                  key={i}
                  href={doc.url}
                  className="flex items-center p-2 bg-orange-50 border border-orange-100 rounded-lg text-orange-700 hover:bg-orange-100 transition-colors"
                >
                  <FileText size={14} className="mr-2" />
                  <span className="text-xs font-medium">{doc.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BidCard({
  data,
  onAction,
}: {
  data: any;
  onAction?: (text: string) => void;
}) {
  const [selectedDoc, setSelectedDoc] = React.useState<any>(null);

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-3 flex items-center text-white font-bold">
        <FileCheck size={18} className="mr-2" />
        {data.title}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between bg-amber-50 border border-amber-100 rounded-lg p-3 mb-4">
          <div className="flex items-center text-amber-900">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm font-medium">截标时间</span>
          </div>
          <span className="text-sm font-bold text-amber-700">
            {data.deadline}
          </span>
        </div>

        {data.schedule && (
          <div className="mb-6">
            <div className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider flex justify-between items-center">
              <span>时间节点智能倒排图</span>
              {data.remindersEnabled && (
                <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full flex items-center font-normal">
                  <BellRing size={10} className="mr-1" /> 已开启提醒
                </span>
              )}
            </div>
            <div className="relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-amber-100">
              {data.schedule?.map((item: any, i: number) => (
                <div key={i} className="relative flex items-start group">
                  <div
                    className={`absolute left-[-25px] w-6 h-6 rounded-full border-2 border-white flex items-center justify-center z-10 ${
                      item.status === "done"
                        ? "bg-yellow-500 text-white shadow-sm"
                        : i === 0
                          ? "bg-amber-500 text-white shadow-sm"
                          : "bg-white border-amber-500 text-amber-500"
                    }`}
                  >
                    {item.status === "done" ? (
                      <CheckCircle2 size={12} />
                    ) : i === 0 ? (
                      <CheckCircle2 size={12} />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                    )}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-amber-200 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span
                        className={`text-sm font-bold ${item.status === "done" ? "text-yellow-700 line-through" : i === 0 ? "text-amber-700" : "text-gray-900"}`}
                      >
                        {item.task}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-100">
                        {item.date}
                      </span>
                    </div>
                    <div className="flex items-center text-[11px] text-gray-500">
                      <Users size={10} className="mr-1" />
                      <span>负责人: </span>
                      <span className="ml-1 text-orange-600 font-bold bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100 flex items-center">
                        @{item.owner}
                      </span>
                      {item.status === "active" && (
                        <span className="ml-2 text-[10px] text-orange-500 animate-pulse flex items-center">
                          <BellRing size={10} className="mr-0.5" /> 待处理提醒
                        </span>
                      )}
                      {item.status === "done" && (
                        <span className="ml-2 text-[10px] text-yellow-600 flex items-center">
                          <CheckCircle2 size={10} className="mr-0.5" /> 已完成
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            生成文件
          </div>
          <div className="space-y-2">
            {data.documents?.map((d: any, i: number) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg p-3 cursor-pointer hover:border-amber-300 transition-colors"
                onClick={() => setSelectedDoc(d)}
              >
                <div className="flex items-center">
                  <FileText size={16} className="text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {d.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      状态: {d.status}
                    </div>
                  </div>
                </div>
                <button
                  className="text-amber-600 hover:bg-amber-50 p-1.5 rounded transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDoc(d);
                  }}
                >
                  <Search size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            后续流程
          </div>
          <div className="text-sm text-gray-700 flex items-center">
            <CheckCircle2 size={16} className="text-amber-500 mr-2" />
            {data.nextStep}
          </div>
        </div>
      </div>

      {selectedDoc && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-6">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-gray-50 rounded-t-xl shrink-0">
              <div className="flex items-center">
                <FileText size={20} className="text-amber-600 mr-3" />
                <h3 className="font-bold text-gray-900 text-lg">
                  {selectedDoc.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 prose prose-sm max-w-none">
              {selectedDoc.content ? (
                <div
                  dangerouslySetInnerHTML={{ __html: selectedDoc.content }}
                />
              ) : (
                <div className="text-center text-gray-500 mt-20">
                  <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                  <p>文档内容加载中...</p>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl flex justify-end shrink-0">
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                关闭预览
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ComplianceCard({ data }: { data: any }) {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 flex items-center text-white font-bold">
        <FileCheck size={18} className="mr-2" />
        {data.title}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between bg-orange-50 border border-orange-100 rounded-lg p-3 mb-4">
          <div className="flex items-center text-orange-900">
            <CheckCircle size={16} className="mr-2" />
            <span className="text-sm font-medium">检查结果</span>
          </div>
          <span className="text-sm font-bold text-orange-700">
            {data.result}
          </span>
        </div>

        {data.details && (
          <div className="mb-4">
            <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              检查明细
            </div>
            <ul className="space-y-1">
              {data.details.map((detail: string, i: number) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="text-orange-500 mr-2 mt-0.5">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.sealProcess && (
          <div className="mb-4">
            <div className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">
              用印流程进度
            </div>
            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
              <div className="space-y-4">
                {data.sealProcess.map((step: any, i: number) => (
                  <div key={i} className="relative flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                        step.status === "done"
                          ? "bg-orange-500 text-white"
                          : step.status === "active"
                            ? "bg-orange-100 border-2 border-orange-500 text-orange-500"
                            : "bg-gray-100 border-2 border-gray-300 text-gray-400"
                      }`}
                    >
                      {step.status === "done" ? (
                        <CheckCircle size={12} />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-current"></div>
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div
                        className={`text-sm font-medium ${
                          step.status === "done"
                            ? "text-gray-900"
                            : step.status === "active"
                              ? "text-orange-700"
                              : "text-gray-500"
                        }`}
                      >
                        {step.step}
                      </div>
                      <div className="text-xs text-gray-400">{step.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MonitorCard({ data }: { data: any }) {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-3 flex items-center text-white font-bold">
        <BellRing size={18} className="mr-2" />
        {data.title}
      </div>
      <div className="p-4">
        {data.customerInquiries && data.customerInquiries.length > 0 && (
          <div className="mb-4">
            <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              客户提问与推荐答案
            </div>
            <div className="space-y-3">
              {data.customerInquiries.map((inquiry: any, i: number) => (
                <div
                  key={i}
                  className="bg-orange-50 border border-orange-100 rounded-lg p-3"
                >
                  <div className="flex items-start mb-2">
                    <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs mr-2 flex-shrink-0">
                      问
                    </div>
                    <div className="text-sm font-medium text-gray-900 mt-0.5">
                      {inquiry.question}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs mr-2 flex-shrink-0">
                      答
                    </div>
                    <div className="text-sm text-gray-700 mt-0.5 whitespace-pre-wrap">
                      {inquiry.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            最新动态
          </div>
          <div className="space-y-3">
            {data.news?.map((n: any, i: number) => (
              <div key={i} className="border-l-2 border-amber-500 pl-3">
                <div className="text-sm font-medium text-gray-900">
                  {n.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {n.date} | {n.source}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider flex justify-between items-center">
            <span>内部协同</span>
            {data.pushTargets && (
              <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full flex items-center font-normal">
                <MessageSquare size={10} className="mr-1" /> 已推送至:{" "}
                {data.pushTargets?.join(", ")}
              </span>
            )}
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 text-sm text-gray-700">
            {data.internalSync}
          </div>
        </div>

        <div>
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            建议行动
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
            <div className="flex items-start">
              <MessageSquare size={16} className="text-amber-600 mr-2 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-amber-900 mb-1">
                  {data.suggestedAction.type}
                </div>
                <div className="text-sm text-amber-800 italic">
                  "{data.suggestedAction.script}"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LenovoNewMarketingPlanCard({
  data,
  onDownload,
}: {
  data?: any;
  onDownload?: () => void;
}) {
  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-['Microsoft_YaHei',_'sans-serif'] text-gray-800">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-5 flex justify-between items-center text-white">
        <div className="flex flex-col">
          <div className="flex items-center text-lg font-bold mb-1">
            <svg
              className="w-5 h-5 mr-3 text-white/90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            平安企康 · 企业健康保障服务
          </div>
          <div className="text-white/80 text-sm ml-8">
            云南烟草专卖局（公司） | 首次拜访材料
          </div>
        </div>
        <div className="text-right text-sm text-white/80 leading-relaxed">
          <div>平安产险·企康服务团队</div>
          <div>2026年6月</div>
        </div>
      </div>

      
      <div className="px-4 pt-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-amber-500 text-white px-4 py-2 flex items-center font-bold text-sm">
            <span className="mr-2 text-base">💡</span> 烟草行业特征及企康需求
          </div>
          <div className="p-4">
            <div className="overflow-x-auto rounded-lg border border-[#e2e8f0]">
                <table className="w-full text-xs text-left border-collapse leading-tight">
                  <thead className="bg-[#fce4a6]/50 text-[#b88c3a] font-bold">
                    <tr>
                      <th className="px-4 py-2 border-b border-[#e2e8f0]">行业特征</th>
                      <th className="px-4 py-2 border-b border-[#e2e8f0]">对应的企康需求</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-[#e2e8f0]">员工规模大(数千~数万人)</td>
                      <td className="px-4 py-2 border-b border-[#e2e8f0]">需覆盖全国、统一标准的健康体系</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-[#e2e8f0] bg-gray-50/50">平均年龄偏高</td>
                      <td className="px-4 py-2 border-b border-[#e2e8f0] bg-gray-50/50">慢病管理、中老年专属服务</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-[#e2e8f0]">退休员工比例高</td>
                      <td className="px-4 py-2 border-b border-[#e2e8f0]">退休人员健康管理延续、医务室需求</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-[#e2e8f0] bg-gray-50/50">一线员工轮班制</td>
                      <td className="px-4 py-2 border-b border-[#e2e8f0] bg-gray-50/50">7×24小时在线问诊、远程医疗</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-[#e2e8f0]">国企福利体系完善</td>
                      <td className="px-4 py-2 border-b border-[#e2e8f0]">补充医疗、健康委托等综合福利</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-[#e2e8f0] bg-gray-50/50">网络化接受度偏低</td>
                      <td className="px-4 py-2 border-b border-[#e2e8f0] bg-gray-50/50">需要线下+线上融合指导</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-r border-[#e2e8f0]">职业病风险</td>
                      <td className="px-4 py-2 border-[#e2e8f0]">尘肺/呼吸道职业病防范、定期体检</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>

      <div className="p-4 pt-1 flex flex-col md:flex-row gap-4">
        {/* Column 1 */}
        <div className="flex-[1.2] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
          <div className="bg-amber-500 text-white px-4 py-3 font-bold flex items-center text-sm">
            <span className="mr-2 text-base">🏆</span> 哪些大客户在做
          </div>
          <div className="p-4 space-y-6 text-sm">


            <div>
              <div className="flex items-center font-bold text-amber-600 mb-3 border-b border-gray-100 pb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                同类型央国企
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-gray-800 mb-1 leading-relaxed">央企千万级委托单 <span className="font-normal text-gray-500">—— 平安产险江门中支产养联合，中标央企客户千万级企康业务，运用"三张地图"战略精准破局</span></div>
                  <div className="inline-flex items-center bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded border border-green-200 mt-1">✅ 已中标</div>
                </div>
                <div>
                  <div className="font-bold text-gray-800 mb-1 leading-relaxed">五矿盐湖有限公司 <span className="font-normal text-gray-500">—— 平安产险青海分公司</span></div>
                  <div className="text-gray-500 mb-1 leading-relaxed">拜访对接，企康项目涵盖健康体检、健康评估、健康干预、医疗服务一站式方案</div>
                  <div className="inline-flex items-center bg-yellow-50 text-yellow-700 text-xs px-2 py-0.5 rounded border border-yellow-200">⭐ 推进中</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center font-bold text-amber-600 mb-3 border-b border-gray-100 pb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                省级多机构客户
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-gray-800 mb-1 leading-relaxed">海南省烟草商业系统 <span className="font-normal text-gray-500">—— 2025-2027年补充医疗保险项目，平安产险中标</span></div>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[#37b275] font-bold text-xs flex items-center">2300元/人/年</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-800 mb-1 leading-relaxed">贵州省烟草公司 <span className="font-normal text-gray-500">—— 2025-2028年补充医疗保险采购，平安产险中标（得分85.36，远超竞品69.53）</span></div>
                </div>
                <div>
                  <div className="font-bold text-gray-800 mb-1 leading-relaxed">重庆市烟草公司 <span className="font-normal text-gray-500">—— 2026-2027年职工补充医疗保障，平安产险中标</span></div>
                </div>
                <div>
                  <div className="font-bold text-gray-800 mb-1 leading-relaxed">遵义市烟草公司 <span className="font-normal text-gray-500">—— 2025年补充医疗保险，平安养老险中标</span></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center font-bold text-amber-600 mb-3 border-b border-gray-100 pb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                长期合作标杆
              </div>
              <div className="">
                <div className="font-bold text-gray-800 mb-1 leading-relaxed">金华烟草 · 全国标杆 <span className="font-normal text-gray-500">—— 平安产险总部戴新媛总带队，联合浙江分公司及多地中支机构赴金华烟草开展企康服务专项交流。双方围绕企业健康险服务提质升级、深化长期合作深度沟通。金华烟草被定位为<strong className="text-gray-900 border-b border-gray-900">可复制、可推广</strong>的企康服务标杆样本，推动全国企康业务精细化、标准化升级。</span></div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-amber-50 text-amber-700 text-[10px] px-2 py-0.5 rounded font-medium">总部级标杆</span>
                  <span className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 rounded font-medium">产养协同</span>
                  <span className="bg-orange-50 text-orange-700 text-[10px] px-2 py-0.5 rounded font-medium">长期合作</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
          <div className="bg-orange-500 text-white px-4 py-3 font-bold flex items-center text-sm">
            <span className="mr-2 text-base">📦</span> 平安标准产品
          </div>
          <div className="p-4 space-y-6 text-sm">
            <div>
              <div className="flex items-center font-bold text-orange-500 mb-3 border-b border-gray-100 pb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                分层补充医疗
              </div>
              <div className="text-gray-600 space-y-1.5">
                <p>提供<strong className="text-gray-900">多层次、可定制</strong>的补充医疗保障方案：</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 py-1">
                  <li>基础层：门急诊/住院费用补充报销</li>
                  <li>增强层：重大疾病定额给付</li>
                  <li>高端层：特需医疗/海外就医</li>
                </ul>
                <p className="font-bold text-[#4f73b6] pt-1">支持按岗位/职级/工龄分层设计</p>
                <div className="flex gap-2 pt-1">
                  <span className="bg-orange-50 text-orange-500 text-[10px] px-2 py-0.5 rounded border border-orange-200 font-medium">灵活定制</span>
                  <span className="bg-[#f0f4fc] text-[#4f73b6] text-[10px] px-2 py-0.5 rounded border border-[#d2def2] font-medium">全员覆盖</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center font-bold text-orange-500 mb-3 border-b border-gray-100 pb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                委托基金管理
              </div>
              <div className="text-gray-600 space-y-1.5">
                <p className="font-bold text-gray-800">15年+运营经验 · 管理基金超千亿</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 py-1">
                  <li>专户管理、专款专用，接受审计监督</li>
                  <li>按企业制定的报销规则精准支付</li>
                  <li>覆盖门急诊、住院、体检、高额医疗补助、急难津贴等</li>
                  <li>年度结余可滚存使用，<strong className="text-[#4f73b6]">预算池灵活高效</strong></li>
                </ul>
                <div className="flex gap-2 pt-2">
                  <span className="bg-orange-50 text-orange-500 text-[10px] px-2 py-0.5 rounded border border-orange-200 font-medium">资金安全</span>
                  <span className="bg-amber-50 text-amber-600 text-[10px] px-2 py-0.5 rounded border border-amber-200 font-medium">数据沉淀</span>
                  <span className="bg-orange-50 text-orange-600 text-[10px] px-2 py-0.5 rounded border border-orange-200 font-medium">灵活滚存</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center font-bold text-orange-500 mb-3 border-b border-gray-100 pb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                体检 / 慢病 / 就医协助
              </div>
              <div className="text-gray-600 space-y-3">
                <p className="text-gray-800 font-bold">"四到"服务体系 —— 到线·到院·到企·到家</p>
                <div className="space-y-2">
                  <div className="flex items-start"><span className="mr-2">🏥</span><span><strong className="text-gray-800">体检管理：</strong>定制套餐 + 报告解读 + 异常追踪</span></div>
                  <div className="flex items-start"><span className="mr-2">💊</span><span><strong className="text-gray-800">慢病管理：</strong>专属保健医生 + 用药指导 + 健康干预</span></div>
                  <div className="flex items-start"><span className="mr-2">🚑</span><span><strong className="text-gray-800">就医协助：</strong>全国百强三甲绿色通道 + 挂号转诊</span></div>
                  <div className="flex items-start"><span className="mr-2">🏢</span><span><strong className="text-gray-800">到企服务：</strong>驻场医务室 + 健康讲座 + 急救培训</span></div>
                  <div className="flex items-start"><span className="mr-2">📱</span><span><strong className="text-gray-800">到线服务：</strong>7×24小时在线问诊 + 健康档案</span></div>
                </div>
                <div className="flex gap-2 pt-1">
                  <span className="bg-[#f0f4fc] text-[#4f73b6] text-[10px] px-2 py-0.5 rounded font-bold">5万+医生</span>
                  <span className="bg-orange-50 text-orange-500 text-[10px] px-2 py-0.5 rounded font-bold">5100+医院</span>
                  <span className="bg-amber-50 text-amber-600 text-[10px] px-2 py-0.5 rounded font-bold">24万+药店</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
          <div className="bg-[#d86f44] text-white px-4 py-3 font-bold flex items-center text-sm">
            <span className="mr-2 text-base">💎</span> 明星方案价值
          </div>
          <div className="p-4 flex flex-col h-full">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-center flex flex-col items-center shadow-sm">
                <div className="text-2xl mb-2">📋</div>
                <div className="font-bold text-gray-800 text-sm mb-1">政策合规</div>
                <div className="text-xs text-gray-500 leading-relaxed">严格遵循国资委、银保监监管要求<br/>合规目录全覆盖，审计零风险</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-center flex flex-col items-center shadow-sm">
                <div className="text-2xl mb-2">❤️</div>
                <div className="font-bold text-gray-800 text-sm mb-1">员工关怀</div>
                <div className="text-xs text-gray-500 leading-relaxed">全周期健康管理闭环<br/>体检→慢病→就医→康复</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-center flex flex-col items-center shadow-sm">
                <div className="text-2xl mb-2">🌿</div>
                <div className="font-bold text-gray-800 text-sm mb-1">ESG / 健康企业</div>
                <div className="text-xs text-gray-500 leading-relaxed">助力"健康中国2030"战略<br/>提升企业ESG评级与社会形象</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-center flex flex-col items-center shadow-sm">
                <div className="text-2xl mb-2">🏅</div>
                <div className="font-bold text-gray-800 text-sm mb-1">企业文化与荣誉</div>
                <div className="text-xs text-gray-500 leading-relaxed">平安集团世界500强<br/>企康服务4500+企业客户</div>
              </div>
            </div>

            <div className="bg-[#fff9eb] border border-[#fce4a6] rounded-xl p-5 mt-auto relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-6xl opacity-10">🎯</div>
              <div className="font-bold text-[#b88c3a] mb-3 flex items-center text-sm">
                <span className="mr-2">🎯</span> 为什么选择平安企康
              </div>
              <div className="text-sm text-gray-700 space-y-3 leading-relaxed relative z-10">
                <p><strong className="text-[#d86f44]">综合金融+医疗健康</strong>双轮驱动，区别于单一保险公司的碎片化服务。</p>
                <p>平安集团战略级业务，<strong className="text-gray-900 border-b border-[#fce4a6]">4500+</strong>企业客户信赖选择，B端业务同比增长<strong className="text-gray-900">40.6%</strong>。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center download-exclude">
        <div className="flex flex-col">
          <span className="font-bold text-gray-800 text-sm mb-0.5">平安产险 · 企康服务团队</span>
          <span className="text-xs text-gray-500">覆盖全省各地市，县级区域属地化服务</span>
        </div>
        {onDownload ? (
          <button
            onClick={onDownload}
            className="flex items-center text-sm text-white bg-[#d36437] hover:bg-[#bd582f] px-6 py-2.5 rounded-lg shadow-sm transition-colors font-bold cursor-pointer"
          >
            期待与您携手 共建健康职场
          </button>
        ) : (
          <div className="flex items-center text-sm text-white bg-[#d36437] px-6 py-2.5 rounded-lg shadow-sm font-bold opacity-90">
            期待与您携手 共建健康职场
          </div>
        )}
      </div>
    </div>
  );
}

export function CustomerPortraitCard() {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-sans text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-lg">
          云南烟草集团 - 客户画像概览
        </div>
        <span className="text-white text-xs px-3 py-1 bg-white/20 rounded-full border border-white/30">
          智能洞察
        </span>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 font-bold mb-1">企业性质</p>
            <p className="text-sm font-semibold text-gray-900">大型国企</p>
          </div>
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 font-bold mb-1">行业</p>
            <p className="text-sm font-semibold text-gray-900">烟草</p>
          </div>
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 font-bold mb-1">人员规模</p>
            <p className="text-sm font-semibold text-gray-900">8,840 人</p>
          </div>
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 font-bold mb-1">地域</p>
            <p className="text-sm font-semibold text-gray-900">某省某市</p>
          </div>
        </div>

        <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">人员结构切面</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <h5 className="font-bold text-gray-900 text-sm mb-3">按职级划分</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between items-center"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>高层员工</span> <span className="font-medium">800 人</span></li>
              <li className="flex justify-between items-center"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></span>核心员工</span> <span className="font-medium">6,000 人</span></li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <h5 className="font-bold text-gray-900 text-sm mb-3">按工种划分</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between items-center"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>内勤员工</span> <span className="font-medium">约 6,000 人 (占比68%)</span></li>
              <li className="flex justify-between items-center"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>外勤员工</span> <span className="font-medium">约 2,840 人 (占比32%)</span></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 shadow-sm md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div>
                 <p className="text-xs text-gray-500 mb-1">平均年龄</p>
                 <p className="text-sm font-bold text-gray-800">35岁 <span className="text-xs text-gray-500 font-normal">(占比68%)</span></p>
               </div>
               <div>
                 <p className="text-xs text-gray-500 mb-1">性别分布</p>
                 <div className="text-sm font-bold text-gray-800">
                   <div>男性 4,840 人 <span className="text-xs text-gray-500 font-normal">(占比55%)</span></div>
                   <div className="mt-1">女性 4,000 人 <span className="text-xs text-gray-500 font-normal">(占比45%)</span></div>
                 </div>
               </div>
               <div className="col-span-2">
                 <p className="text-xs text-gray-500 mb-1">预算区间</p>
                 <p className="text-sm font-bold text-red-600">600万 ~ 800万元 左右</p>
               </div>
            </div>
          </div>
        </div>

        <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-3">特有痛点与风险分析</h4>
        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
          <p className="text-sm text-gray-800 mb-2"><strong>既往健康痛点：</strong>职工长期处于高风险作业环境，健康管理需求迫切，亟需系统化、专业化服务支撑。</p>
          <p className="text-sm text-gray-800 mb-2"><strong>特有职业病与慢性病风险：</strong></p>
          <ul className="text-sm text-gray-700 list-disc pl-6 space-y-1">
            <li>尘肺病高发风险</li>
            <li>噪声性听力损伤</li>
            <li>慢性呼吸系统疾病</li>
            <li>心脑血管疾病高发</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export function DocParsingProgressCard() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      if (p >= 100) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(p);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-3 font-sans p-4">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600">📄</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-sm">文档解析状态</h3>
          <p className="text-xs text-gray-500">
            {progress < 100 ? "正在解析全文内容..." : "解析已完成"}
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-right text-xs font-medium text-blue-600">
        {progress}%
      </div>
    </div>
  );
}


export function DocParsingResultCard() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm mt-3 font-sans overflow-hidden">
       <div className="p-4 space-y-4">
         <div>
           <div className="text-sm font-bold text-gray-800 mb-1">状态</div>
           <div className="flex items-center text-sm text-green-700 bg-green-50 px-3 py-2 rounded-md border border-green-100">
             <span className="mr-2">✅</span> 已完成制度解析
           </div>
         </div>
         <div>
           <div className="text-sm font-bold text-gray-800 mb-1">系统研判</div>
           <div className="flex items-center text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-md border border-blue-100">
             <div className="w-4 h-4 mr-2 text-blue-500 flex items-center justify-center animate-spin">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
             </div>
             正在进行责任定义映射与保障缺口识别
           </div>
         </div>
         <div>
           <div className="text-sm font-bold text-gray-800 mb-1">机会洞察</div>
           <div className="flex items-center text-sm text-orange-700 bg-orange-50 px-3 py-2 rounded-md border border-orange-100">
             <span className="mr-2">🔥</span> 发现高价值业务机会
           </div>
         </div>
       </div>
    </div>
  );
}



export function DocInterpretationCard() {
  const [step, setStep] = React.useState(0);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    let isCancelled = false;
    const runSequence = async () => {
      const delays = [
        0,    // 0: init
        1000,  // 1: highlight 保障人群 (第四条) - "正式在职员工及退休人员", "特殊困难职工"
        500,   // 2: show 保障人群
        1500,  // 3: highlight 报销范围 (第五条) - "（一）...（四）..."
        500,   // 4: show 报销范围
        1500,  // 5: highlight 支付口径 (第六条) - "医保后个人自付、符合规定的目录外自费"
        500,   // 6: show 支付口径
        1500,  // 7: highlight 年度限额 (第七条) - "10万元"
        500,   // 8: show 年度限额
        1500,  // 9: highlight 大病限额 (第七条) - "30万元"
        500,   // 10: show 大病限额
        1500,  // 11: highlight 基金模式 (第八条) - "实行统筹管理"
        500,   // 12: show 基金模式
        1500,  // 13: highlight 账户规则 (第八条) - "公共基金池"
        500,   // 14: show 账户规则
        1500,  // 15: highlight 支付方式 (第八条) - "统一支付和扣减"
        500,   // 16: show 支付方式
        1500,  // 17: highlight 结余规则 (第八条) - "年度结余转入下一年度继续使用"
        500,   // 18: show 结余规则
        1500,  // 19: show Footer Insight
      ];
      for (let i = 1; i <= 19; i++) {
        await new Promise(r => setTimeout(r, delays[i]));
        if (isCancelled) break;
        setStep(i);
        
        // Auto-scroll logic
        if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9 || i === 11 || i === 13 || i === 15 || i === 17) {
          const el = document.getElementById(`highlight-step-${i}`);
          if (el && scrollRef.current) {
             el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    };
    runSequence();
    return () => { isCancelled = true; };
  }, []);

  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-['Microsoft_YaHei',_'sans-serif'] text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-5 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-base">
          <FileText className="mr-2 h-5 w-5 opacity-80" />
          某烟草企业补充医疗保障管理办法 - AI 解析
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Original Text */}
        <div className="p-5 border-r border-gray-200 bg-[#FAF9F6]">
          <div className="font-bold text-center text-sm text-gray-900 mb-4 border-b border-gray-300 pb-2">
            《某烟草企业补充医疗保障管理办法》原文
          </div>
          <div ref={scrollRef} className="text-xs text-gray-700 leading-relaxed font-serif space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar relative">
            <div className="font-bold text-gray-900">第四章 保障对象</div>
            <div>
              第四条 本办法适用于公司
              <span id="highlight-step-1" className={`transition-all duration-300 ${step >= 1 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>
                正式在职员工及退休人员
              </span>
              。对于因工伤致残、重大疾病长期治疗等
              <span className={`transition-all duration-300 ${step >= 1 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>
                特殊困难职工
              </span>
              ，经公司补充医疗保障管理委员会审核后，可纳入专项医疗救助保障范围。
            </div>
            
            <div className="font-bold text-gray-900 mt-4">第五章 保障责任</div>
            <div>第五条 补充医疗保障基金主要用于补偿参保人员在基本医疗保险报销后的个人负担医疗费用。</div>
            <div>保障范围包括：</div>
            <div id="highlight-step-3" className="pl-2">
              （一）<span className={`transition-all duration-300 ${step >= 3 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>门诊及急诊医疗费用；</span><br/>
              （二）<span className={`transition-all duration-300 ${step >= 3 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>定点医疗机构住院医疗费用；</span><br/>
              （三）<span className={`transition-all duration-300 ${step >= 3 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>医保定点药店购药费用；</span><br/>
              （四）<span className={`transition-all duration-300 ${step >= 3 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>符合条件的重大疾病医疗救助费用。</span>
            </div>
            
            <div className="font-bold text-gray-900 mt-4">第六章 支付标准</div>
            <div id="highlight-step-5">第六条 对参保人员发生的符合规定的医疗费用，在基本医疗保险报销后，<span className={`transition-all duration-300 ${step >= 5 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>由补充医疗保障基金按规定进行补偿（含医保后个人自付、符合规定的目录外自费）。</span></div>
            
            <div className="font-bold text-gray-900 mt-4">第七章 给付限额</div>
            <div>第七条 补充医疗保障基金实行年度总额控制。职工个人年度最高补偿限额为<span id="highlight-step-7" className={`transition-all duration-300 ${step >= 7 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>人民币10万元</span>。重大疾病医疗救助年度最高补偿限额为<span id="highlight-step-9" className={`transition-all duration-300 ${step >= 9 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>人民币30万元</span>。</div>

            <div className="font-bold text-gray-900 mt-4">第八章 基金管理</div>
            <div id="highlight-step-11">第八条 补充医疗保障基金<span className={`transition-all duration-300 ${step >= 11 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>实行统筹管理。</span></div>
            <div>
              基金由企业福利费统一划拨形成
              <span id="highlight-step-13" className={`transition-all duration-300 ${step >= 13 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>公共基金池</span>
              ，按照实际发生医疗费用进行
              <span id="highlight-step-15" className={`transition-all duration-300 ${step >= 15 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>统一支付和扣减。</span>
            </div>
            <div id="highlight-step-17"><span className={`transition-all duration-300 ${step >= 17 ? 'bg-yellow-200 px-1 rounded font-bold shadow-sm ring-2 ring-yellow-300 ring-opacity-50' : ''}`}>基金年度结余转入下一年度继续使用。</span></div>
          </div>
        </div>

        {/* Right: AI Parsed Results */}
        <div className="p-5 bg-[#F4F7FC]">
          <div className="font-bold text-center text-sm text-orange-900 mb-4 flex items-center justify-center">
            <span className="bg-orange-600 text-white p-1 rounded mr-2"><CheckCircle size={14} /></span> 
            AI 结构化解析结果
          </div>
          
          <div className="w-full space-y-2">
            <div className="grid grid-cols-12 gap-2 bg-orange-100/50 p-2 rounded text-xs font-bold text-orange-900 border border-orange-200">
              <div className="col-span-4 text-center">字段名称</div>
              <div className="col-span-8">解析结果</div>
            </div>

            <div className="space-y-1.5 h-[340px] overflow-y-auto custom-scrollbar relative">
              {step >= 2 && (
                <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="grid grid-cols-12 gap-2 bg-white p-2.5 rounded text-xs border border-orange-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400"></div>
                  <div className="col-span-4 text-gray-500 font-bold flex items-center justify-center">保障人群</div>
                  <div className="col-span-8 text-orange-800 font-bold flex items-center">在职员工、退休人员、特殊困难职工</div>
                </motion.div>
              )}
              
              {step >= 4 && (
                <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="grid grid-cols-12 gap-2 bg-white p-2.5 rounded text-xs border border-orange-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                  <div className="col-span-4 text-gray-500 font-bold flex items-center justify-center">报销范围</div>
                  <div className="col-span-8 text-orange-800 font-bold flex items-center leading-relaxed">门急诊医疗、住院医疗、药店购药、大病救助</div>
                </motion.div>
              )}

              {step >= 6 && (
                 <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-orange-50 shadow-sm">
                   <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">支付口径</div>
                   <div className="col-span-8 text-gray-800 flex items-center">医保后个人自付、符合规定的目录外自费</div>
                 </motion.div>
              )}
              
              {step >= 8 && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-orange-50 shadow-sm">
                  <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">年度限额</div>
                  <div className="col-span-8 text-gray-800 flex items-center">个人年度最高补偿10万元</div>
                </motion.div>
              )}

              {step >= 10 && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-orange-50 shadow-sm">
                  <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">大病限额</div>
                  <div className="col-span-8 text-gray-800 flex items-center">大病救助年度最高补偿30万元</div>
                </motion.div>
              )}

              {step >= 12 && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-orange-50 shadow-sm">
                  <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">基金模式</div>
                  <div className="col-span-8 text-gray-800 flex items-center">企业统筹基金</div>
                </motion.div>
              )}

              {step >= 14 && (
                <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="grid grid-cols-12 gap-2 bg-white p-2.5 rounded text-xs border border-orange-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600"></div>
                  <div className="col-span-4 text-gray-500 font-bold flex items-center justify-center">账户规则</div>
                  <div className="col-span-8 text-orange-800 font-bold flex items-center">公共账户（基金池模式）</div>
                </motion.div>
              )}

              {step >= 16 && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-orange-50 shadow-sm">
                  <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">支付方式</div>
                  <div className="col-span-8 text-gray-800 flex items-center">基金池统一支付</div>
                </motion.div>
              )}

              {step >= 18 && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="grid grid-cols-12 gap-2 bg-white p-2 rounded text-xs border border-orange-50 shadow-sm">
                  <div className="col-span-4 text-gray-500 font-medium flex items-center justify-center">结余规则</div>
                  <div className="col-span-8 text-gray-800 flex items-center">结转至下一年度使用</div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      {step >= 19 && (
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="bg-gray-50 p-4 border-t border-gray-200">
           <div className="font-bold text-gray-800 text-sm mb-3">【系统识别结果】</div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
             <div className="bg-white p-2.5 rounded shadow-sm border border-gray-100 flex items-center">
               <span className="text-green-500 mr-2 text-lg">🟢</span>
               <div>
                 <div className="text-[10px] text-gray-400">保障模式</div>
                 <div className="text-xs font-bold text-gray-800 mt-0.5">企业统筹型补充医疗基金</div>
               </div>
             </div>
             <div className="bg-white p-2.5 rounded shadow-sm border border-gray-100 flex items-center">
               <span className="text-green-500 mr-2 text-lg">🟢</span>
               <div>
                 <div className="text-[10px] text-gray-400">管理模式</div>
                 <div className="text-xs font-bold text-gray-800 mt-0.5">公共基金池统一管理</div>
               </div>
             </div>
             <div className="bg-white p-2.5 rounded shadow-sm border border-gray-100 flex items-center">
               <span className="text-green-500 mr-2 text-lg">🟢</span>
               <div>
                 <div className="text-[10px] text-gray-400">赔付规则</div>
                 <div className="text-xs font-bold text-gray-800 mt-0.5">医保报销后补充赔付</div>
               </div>
             </div>
             <div className="bg-white p-2.5 rounded shadow-sm border border-gray-100 flex items-center">
               <span className="text-green-500 mr-2 text-lg">🟢</span>
               <div>
                 <div className="text-[10px] text-gray-400">覆盖范围</div>
                 <div className="text-xs font-bold text-gray-800 mt-0.5">在职+退休+特殊人群</div>
               </div>
             </div>
           </div>
           <div className="bg-orange-50 border border-orange-100 rounded p-3 flex items-start">
             <span className="text-orange-500 mr-2 font-bold mt-0.5">🔥</span>
             <div>
               <div className="text-xs font-bold text-orange-800 mb-1">识别到潜在业务合作机会</div>
               <div className="text-sm font-bold text-gray-800 flex flex-wrap gap-2">
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-orange-50 text-orange-700">补充医疗基金管理</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-orange-50 text-orange-700">基金运营服务</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-orange-50 text-orange-700">健康管理服务</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-orange-50 text-orange-700">家庭医生服务</span>
               </div>
             </div>
           </div>
        </motion.div>
      )}
    </div>
  );
}

export function DocRiskOpportunityCard({ onConsultation }: { onConsultation?: () => void }) {
  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-['Microsoft_YaHei',_'sans-serif'] text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-base">
          <Target className="mr-2 h-5 w-5 opacity-80" />
          AI 风险与机会识别卡
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* 高风险 */}
        <div className="border border-red-100 rounded-lg overflow-hidden">
          <div className="bg-red-50 px-4 py-2 flex items-center font-bold text-red-800 text-sm border-b border-red-100">
            <span className="mr-2">🔴</span> 重点确认事项（高优先级）
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white text-gray-500 text-xs border-b border-red-50">
                <tr>
                  <th className="px-4 py-2 font-medium w-1/3">管理办法原文</th>
                  <th className="px-4 py-2 font-medium w-1/2">AI识别结果</th>
                  <th className="px-4 py-2 font-medium w-1/6">标签</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-50">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">职工个人年度最高补偿限额按管理办法执行</td>
                  <td className="px-4 py-2 text-gray-900">年度给付限额描述不完整，需确认实际赔付上限及超限处理规则</td>
                  <td className="px-4 py-2 text-red-600 font-bold text-xs">【需核保确认】</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">符合规定的医保目录外自费费用纳入补偿范围</td>
                  <td className="px-4 py-2 text-gray-900">目录外费用责任边界较宽，可能影响基金赔付成本测算</td>
                  <td className="px-4 py-2 text-red-600 font-bold text-xs">【需核保确认】</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">基金由公共账户统一支付和管理</td>
                  <td className="px-4 py-2 text-gray-900">需明确基金超支责任主体及风险分担机制</td>
                  <td className="px-4 py-2 text-red-600 font-bold text-xs">【需理赔确认】</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 中风险 */}
        <div className="border border-yellow-100 rounded-lg overflow-hidden">
          <div className="bg-yellow-50 px-4 py-2 flex items-center font-bold text-yellow-800 text-sm border-b border-yellow-100">
            <span className="mr-2">🟡</span> 运营关注事项（中优先级）
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white text-gray-500 text-xs border-b border-yellow-50">
                <tr>
                  <th className="px-4 py-2 font-medium w-1/3">管理办法原文</th>
                  <th className="px-4 py-2 font-medium w-2/3">AI识别结果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yellow-50">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">医保定点药店购药费用纳入保障范围</td>
                  <td className="px-4 py-2 text-gray-900">需进一步分析药店购药频次及费用占比情况</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">退休人员纳入保障对象范围</td>
                  <td className="px-4 py-2 text-gray-900">需评估退休人员年龄结构及赔付风险特征</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">异地就医费用按规定申请补偿</td>
                  <td className="px-4 py-2 text-gray-900">需关注异地服务响应及时性及理赔便利性</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 低风险 */}
        <div className="border border-green-100 rounded-lg overflow-hidden">
          <div className="bg-green-50 px-4 py-2 flex items-center font-bold text-green-800 text-sm border-b border-green-100">
            <span className="mr-2">🟢</span> 匹配度较高事项（低风险）
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white text-gray-500 text-xs border-b border-green-50">
                <tr>
                  <th className="px-4 py-2 font-medium w-1/3">管理办法原文</th>
                  <th className="px-4 py-2 font-medium w-2/3">AI识别结果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-50">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">门诊及急诊医疗费用纳入保障范围</td>
                  <td className="px-4 py-2 text-gray-900">可直接匹配企康标准门诊保障责任</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">住院医疗费用纳入保障范围</td>
                  <td className="px-4 py-2 text-gray-900">可直接匹配企康标准住院保障责任</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">基本医疗保险后个人负担费用补偿</td>
                  <td className="px-4 py-2 text-gray-900">与现有补充医疗产品责任体系高度一致</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 综合判断 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
           <div className="font-bold text-gray-800 text-sm mb-3 border-b border-gray-200 pb-2">AI 综合判断</div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
             <div>
               <div className="text-xs text-gray-500 mb-1">制度成熟度</div>
               <div className="text-sm font-bold text-yellow-500">★★★★☆</div>
             </div>
             <div>
               <div className="text-xs text-gray-500 mb-1">责任匹配度</div>
               <div className="text-sm font-bold text-gray-800">85%</div>
             </div>
             <div>
               <div className="text-xs text-gray-500 mb-1">风险等级</div>
               <div className="text-sm font-bold text-green-600">中低风险</div>
             </div>
             <div>
               <div className="text-xs text-gray-500 mb-1">合作可行性</div>
               <div className="text-sm font-bold text-orange-600">高</div>
             </div>
           </div>
           <div>
             <div className="text-xs text-gray-500 mb-1">主要关注点</div>
             <div className="text-sm font-bold text-gray-800 flex flex-wrap gap-2">
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200">年度赔付限额</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200">目录外费用责任边界</span>
                 <span className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200">基金池超支机制</span>
             </div>
           </div>
        </div>

        <div className="flex justify-center border-t border-gray-100 pt-4">
          <button
            onClick={onConsultation}
            className="flex items-center text-sm text-white bg-orange-600 hover:bg-orange-700 px-6 py-2.5 rounded-lg shadow-sm font-bold transition-colors"
          >
            <span className="mr-2">🩺</span>
            发起专家会诊
          </button>
        </div>

      </div>
    </div>
  );
}



export function ExpertConsultationCard({ onGeneratePlan }: { onGeneratePlan?: () => void }) {
  const [phase, setPhase] = React.useState('thinking'); // 'thinking' | 'done'

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('done');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-4 font-['Microsoft_YaHei',_'sans-serif'] text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-gradient-to-r from-orange-700 to-indigo-800 px-5 py-3 flex justify-between items-center text-white">
        <div className="flex items-center font-bold text-base">
          <Users className="mr-2 h-5 w-5 opacity-80" />
          专家会诊
        </div>
        <div className="text-xs opacity-80">已自动召集核保、理赔、运营专家开展联合评估</div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* 核保专家 */}
          <div className="border border-orange-100 rounded-lg overflow-hidden bg-orange-50/30 flex flex-col h-full">
            <div className="bg-orange-100/50 px-4 py-3 flex items-center border-b border-orange-100">
              <span className="text-2xl mr-2">👨‍⚕️</span>
              <div>
                <div className="font-bold text-orange-900 text-sm">核保专家</div>
                <div className="text-xs text-orange-600 mt-0.5">
                  {phase === 'thinking' ? (
                    <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity, duration:1.5}}>正在将管理办法条款映射为保险责任...</motion.span>
                  ) : (
                    <span className="text-green-600 font-bold">✅ 会诊完成</span>
                  )}
                </div>
              </div>
            </div>
            
            {phase === 'done' && (
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="p-4 space-y-4 text-xs">
                {/* 系统初判 */}
                <div>
                  <div className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-green-500 mr-1 text-sm">✅</span> 系统初判：已完成管理办法责任解析</div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>识别保障对象：在职、退休及特殊人群</li>
                    <li>识别保障责任：门诊、住院、药店、大病救助</li>
                    <li>识别基金模式：公共基金池管理</li>
                  </ul>
                </div>
                {/* 需人工确认 */}
                <div className="bg-orange-50 border border-orange-100 rounded p-2.5">
                  <div className="font-bold text-orange-800 mb-1 flex items-center"><span className="mr-1">⚠️</span> 责任边界存在待确认事项</div>
                  <ul className="list-disc pl-5 space-y-1 text-orange-700">
                    <li>目录外自费费用纳入范围是否有限制</li>
                    <li>年度最高给付额度是否存在分层规则</li>
                    <li>特殊困难职工是否适用独立赔付标准</li>
                  </ul>
                </div>
                {/* 输出意见 */}
                <div className="bg-orange-50 border border-orange-100 rounded p-2.5 flex-1">
                  <div className="font-bold text-orange-800 mb-1 flex items-center"><span className="mr-1">💡</span> 建议采用“标准责任+定制扩展责任”模式</div>
                  <ul className="list-disc pl-5 space-y-1 text-orange-700">
                    <li>标准门诊及住院责任直接匹配</li>
                    <li>目录外责任需专项测算</li>
                    <li>建议引入年度赔付上限控制机制</li>
                  </ul>
                </div>
              </motion.div>
            )}
            {phase === 'thinking' && (
              <div className="p-4 flex-1 flex flex-col justify-center items-center opacity-50 space-y-4">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            )}
          </div>

          {/* 理赔专家 */}
          <div className="border border-green-100 rounded-lg overflow-hidden bg-green-50/30 flex flex-col h-full">
            <div className="bg-green-100/50 px-4 py-3 flex items-center border-b border-green-100">
              <span className="text-2xl mr-2">👨‍⚕️</span>
              <div>
                <div className="font-bold text-green-900 text-sm">理赔专家</div>
                <div className="text-xs text-green-600 mt-0.5">
                  {phase === 'thinking' ? (
                     <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity, duration:1.5, delay:0.2}}>正在测算赔付压力...</motion.span>
                  ) : (
                    <span className="text-green-600 font-bold">✅ 会诊完成</span>
                  )}
                </div>
              </div>
            </div>
            
            {phase === 'done' && (
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="p-4 space-y-4 text-xs">
                {/* 系统初判 */}
                <div>
                  <div className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-green-500 mr-1 text-sm">✅</span> 系统初判：已完成赔付规则与基金压力测算</div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>医保后补偿模式清晰</li>
                    <li>公共账户统一支付</li>
                    <li>理赔流程具备标准化基础</li>
                  </ul>
                </div>
                {/* 需人工确认 */}
                <div className="bg-orange-50 border border-orange-100 rounded p-2.5">
                  <div className="font-bold text-orange-800 mb-1 flex items-center"><span className="mr-1">⚠️</span> 存在赔付风险评估事项</div>
                  <ul className="list-disc pl-5 space-y-1 text-orange-700">
                    <li>药店购药责任历史赔付情况</li>
                    <li>退休人员赔付占比情况</li>
                    <li>公共基金池超支责任归属</li>
                  </ul>
                </div>
                {/* 输出意见 */}
                <div className="bg-green-50 border border-green-100 rounded p-2.5 flex-1">
                  <div className="font-bold text-green-800 mb-1 flex items-center"><span className="mr-1">💡</span> 建议开展历史赔付数据补充分析</div>
                  <ul className="list-disc pl-5 space-y-1 text-green-700">
                    <li>建立基金年度消耗预测模型</li>
                    <li>增加药店责任专项监测</li>
                    <li>输出年度基金运营分析报告</li>
                  </ul>
                </div>
              </motion.div>
            )}
             {phase === 'thinking' && (
              <div className="p-4 flex-1 flex flex-col justify-center items-center opacity-50 space-y-4">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
              </div>
            )}
          </div>

          {/* 运营专家 */}
          <div className="border border-amber-100 rounded-lg overflow-hidden bg-amber-50/30 flex flex-col h-full">
            <div className="bg-amber-100/50 px-4 py-3 flex items-center border-b border-amber-100">
              <span className="text-2xl mr-2">👨‍💼</span>
              <div>
                <div className="font-bold text-amber-900 text-sm">运营专家</div>
                <div className="text-xs text-amber-600 mt-0.5">
                   {phase === 'thinking' ? (
                     <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity, duration:1.5, delay:0.4}}>正在评估多机构落地方案...</motion.span>
                   ) : (
                     <span className="text-green-600 font-bold">✅ 会诊完成</span>
                   )}
                </div>
              </div>
            </div>
            
            {phase === 'done' && (
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="p-4 space-y-4 text-xs">
                {/* 系统初判 */}
                <div>
                  <div className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-green-500 mr-1 text-sm">✅</span> 系统初判：已完成运营模式评估</div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                     <li>支持公共基金池运营</li>
                     <li>支持多机构统一管理</li>
                     <li>支持员工分层服务配置</li>
                  </ul>
                </div>
                {/* 需人工确认 */}
                 <div className="bg-orange-50 border border-orange-100 rounded p-2.5">
                  <div className="font-bold text-orange-800 mb-1 flex items-center"><span className="mr-1">⚠️</span> 存在运营实施细节待确认</div>
                  <ul className="list-disc pl-5 space-y-1 text-orange-700">
                     <li>各机构额度分配规则</li>
                     <li>人员异动与保全流程</li>
                     <li>异地机构服务覆盖要求</li>
                  </ul>
                </div>
                {/* 输出意见 */}
                 <div className="bg-amber-50 border border-amber-100 rounded p-2.5 flex-1">
                  <div className="font-bold text-amber-800 mb-1 flex items-center"><span className="mr-1">💡</span> 建议采用“统一平台+分级运营”模式</div>
                  <ul className="list-disc pl-5 space-y-1 text-amber-700">
                    <li>总部统一管理基金账户</li>
                    <li>分支机构统一服务标准</li>
                    <li>建立多机构运营看板与预警机制</li>
                  </ul>
                </div>
              </motion.div>
            )}
             {phase === 'thinking' && (
              <div className="p-4 flex-1 flex flex-col justify-center items-center opacity-50 space-y-4">
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            )}
          </div>
        </div>

        {/* AI会诊结论 */}
        {phase === 'done' && (
          <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay: 0.4}} className="border-t border-gray-100 pt-5">
            <div className="font-bold text-gray-800 text-sm mb-4">AI会诊结论</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded p-3 text-center border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">项目匹配度</div>
                <div className="text-sm font-bold text-gray-800"><span className="text-green-500">🟢</span> 高匹配（85%）</div>
              </div>
              <div className="bg-gray-50 rounded p-3 text-center border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">风险等级</div>
                <div className="text-sm font-bold text-gray-800"><span className="text-yellow-500">🟡</span> 中低风险</div>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg flex items-center justify-between mt-4">
               <div className="text-orange-900 text-sm font-bold">
                 🤖 AI已完成核保、理赔、运营三方联合评估，确认项目具备方案设计条件，建议进入产品匹配与方案生成阶段。
               </div>
               {onGeneratePlan && (
                 <button 
                   onClick={onGeneratePlan}
                   className="flex items-center text-sm text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg shadow-sm font-bold transition-colors ml-4 whitespace-nowrap"
                 >
                   <span className="mr-1">🚀</span> 发起方案生成
                 </button>
               )}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}



export function ProductMatchAssessmentCard() {
  const [phase, setPhase] = React.useState('initial'); // 'initial' (0-1s) -> 'summary' (1-3s) -> 'loading_chart' (3-5s) -> 'done' (5-8s) -> 'highlight' (8s+)

  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase('summary'), 1000);
    const t3 = setTimeout(() => setPhase('loading_chart'), 3000);
    const t5 = setTimeout(() => setPhase('done'), 5000);
    const t8 = setTimeout(() => setPhase('highlight'), 8000);
    return () => { clearTimeout(t1); clearTimeout(t3); clearTimeout(t5); clearTimeout(t8); };
  }, []);

  return (
    <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-2 duration-500 font-['Microsoft_YaHei',_'sans-serif'] mt-2">
      {phase !== 'initial' && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-visible shadow-sm text-gray-800 relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-3 rounded-t-xl flex justify-between items-center text-white relative">
            <div className="flex items-center font-bold text-base">
              <Target className="mr-2 h-5 w-5 opacity-90" />
              标品匹配评估
            </div>
            {phase === 'summary' && (
              <div className="text-xs font-medium animate-pulse opacity-90 bg-white/20 px-3 py-1 rounded-full">
                正在汇总专家会诊结果...
              </div>
            )}
            {(phase === 'loading_chart' || phase === 'done' || phase === 'highlight') && (
              <div className="text-xs font-medium opacity-90">
                已完成多维度专项评估
              </div>
            )}
          </div>

          <div className="p-5 relative">
            {phase === 'summary' && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
                <div className="text-gray-500 font-medium">AI 正在汇总专家库解析映射...</div>
              </div>
            )}

            {(phase === 'loading_chart' || phase === 'done' || phase === 'highlight') && (
              <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
                
                {/* Left col - Chart */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-orange-50/50 rounded-xl border border-orange-100">
                  <div className="text-gray-700 font-bold mb-6">标品覆盖率评估</div>
                  
                  <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                    {/* SVG Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#ffedd5" strokeWidth="12" fill="none" />
                      <motion.circle 
                        cx="50" cy="50" r="40" 
                        stroke="#f97316" 
                        strokeWidth="12" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: phase === 'loading_chart' ? 55.26 : 55.26 }} 
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-orange-600">78%</span>
                      <span className="text-[10px] text-gray-500 mt-1">标准产品覆盖率</span>
                    </div>
                  </div>

                  {/* Stats under circle */}
                  <motion.div initial={{opacity:0}} animate={{opacity:(phase === 'done' || phase === 'highlight') ? 1 : 0}} className="w-full space-y-2 text-sm">
                    <div className="bg-white px-3 py-2 rounded shadow-sm border border-green-100 flex justify-between items-center">
                      <div className="flex items-center"><span className="text-green-500 mr-2">🟢</span> <span className="text-gray-700">可直接匹配</span></div>
                      <span className="font-bold text-green-700">7项</span>
                    </div>
                    <div className="bg-white px-3 py-2 rounded shadow-sm border border-yellow-100 flex justify-between items-center">
                      <div className="flex items-center"><span className="text-yellow-500 mr-2">🟡</span> <span className="text-gray-700">需专项确认</span></div>
                      <span className="font-bold text-yellow-700">5项</span>
                    </div>
                  </motion.div>
                </div>

                {/* Right col - Details & Conclusion */}
                <div className="lg:col-span-8 flex flex-col">
                  {/* 待专项确认事项清单 */}
                  <div className="mb-4">
                     <div className="text-gray-800 font-bold mb-3 flex items-center">
                        <ListChecks className="w-4 h-4 mr-2 text-gray-500" /> 待专项确认事项清单
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="border border-orange-100 bg-orange-50/30 rounded-lg p-3">
                           <div className="font-bold text-orange-900 text-sm mb-2 flex justify-between items-center">
                             <span>👨‍⚕️ 核保确认</span>
                             <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">2项</span>
                           </div>
                           <ul className="space-y-1.5 text-xs text-orange-800">
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">目录外自费费用责任边界</span></li>
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">特殊困难职工保障责任定义</span></li>
                           </ul>
                        </div>
                        <div className="border border-green-100 bg-green-50/30 rounded-lg p-3">
                           <div className="font-bold text-green-900 text-sm mb-2 flex justify-between items-center">
                             <span>👩‍⚕️ 理赔确认</span>
                             <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">2项</span>
                           </div>
                           <ul className="space-y-1.5 text-xs text-green-800">
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">公共基金池超支处理机制</span></li>
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">药店购药责任历史赔付情况</span></li>
                           </ul>
                        </div>
                        <div className="border border-amber-100 bg-amber-50/30 rounded-lg p-3">
                           <div className="font-bold text-amber-900 text-sm mb-2 flex justify-between items-center">
                             <span>👨‍💼 运营确认</span>
                             <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full">1项</span>
                           </div>
                           <ul className="space-y-1.5 text-xs text-amber-800">
                              <li className="flex items-start"><span className="mr-1.5 text-orange-400">🔸</span> <span className="leading-tight">多机构统一运营与额度配置规则</span></li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* 评估建议 */}
                  <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:(phase === 'done' || phase === 'highlight') ? 1 : 0, scale:1}} className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex-1">
                     <div className="font-bold text-gray-800 mb-3">评估建议</div>
                     <div className="space-y-2.5 text-sm">
                        <div className="flex items-start"><span className="mr-2">🟢</span> <span className="text-gray-700">项目整体匹配度较高，建议优先采用标准产品方案快速响应客户需求</span></div>
                        <div className="flex items-start"><span className="mr-2">📊</span> <span className="text-gray-700">78%的保障责任可直接映射至现有产品体系，无需额外定制开发</span></div>
                        <div className="flex items-start"><span className="mr-2">⚠️</span> <span className="text-gray-700">目录外费用、基金池管理等特殊规则建议进入专项确认流程</span></div>
                        <div className="flex items-start"><span className="mr-2">🚀</span> <span className="text-orange-700 font-medium">推荐立即启动方案生成，边界责任同步开展专家复核</span></div>
                     </div>
                  </motion.div>

                </div>
              </motion.div>
            )}

            {/* Float Highlight */}
            <AnimatePresence>
            {phase === 'highlight' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 15 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-orange-50 border-2 border-orange-500 rounded-full py-2.5 px-6 shadow-xl whitespace-nowrap z-20"
              >
                <div className="text-orange-700 font-bold text-sm flex items-center">
                   <span className="mr-1.5 text-base">🔥</span> 发现快速落地机会：78%责任无需定制开发，可直接采用标准产品方案。
                </div>
              </motion.div>
            )}
            </AnimatePresence>

            {/* AI状态提示 */}
            {(phase === 'done' || phase === 'highlight') && (
               <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mt-5 text-xs text-gray-500 bg-gray-50/80 p-3 rounded-lg border border-gray-100 flex items-start">
                 <Bot className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                 <div>AI已完成产品匹配评估，78%的保障责任可直接映射至标准产品体系，建议优先采用标品方案快速推进，边界责任进入专项确认流程。</div>
               </motion.div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export function QuoteAuthCenterCard() {
  const [phase, setPhase] = React.useState('matching'); // matching -> checking -> evaluating -> done

  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase('checking'), 1500);
    const t2 = setTimeout(() => setPhase('evaluating'), 3000);
    const t3 = setTimeout(() => setPhase('done'), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-2 duration-500 font-sans mt-2">
      <div className="bg-white border border-gray-200 rounded-xl overflow-visible shadow-sm text-gray-800 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-3 rounded-t-xl flex justify-between items-center text-white relative">
          <div className="flex items-center font-bold text-base">
            <BarChart3 className="mr-2 h-5 w-5 opacity-90" />
            智能报价授权
          </div>
          {phase !== 'done' && (
            <div className="text-xs font-medium animate-pulse opacity-90 bg-white/20 px-3 py-1 rounded-full">
              智能分析中...
            </div>
          )}
          {phase === 'done' && (
            <div className="text-xs font-medium opacity-90">
              分析完成
            </div>
          )}
        </div>

        <div className="p-5 relative">
          {phase !== 'done' && (
             <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                <div className="text-gray-500 font-medium">
                   {phase === 'matching' && '正在匹配定价规则...'}
                   {phase === 'checking' && '正在校验授权边界...'}
                   {phase === 'evaluating' && '正在评估利润空间...'}
                </div>
             </div>
          )}

          {phase === 'done' && (
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-6">
              
              {/* Top Dashboard & Right Rules Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                 {/* Left Dashboard */}
                 <div className="lg:col-span-2 border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white rounded-xl p-5">
                    <div className="text-center mb-6">
                       <div className="text-gray-500 text-sm font-medium mb-1">标准报价</div>
                       <div className="text-4xl font-black text-blue-800">¥1,620<span className="text-sm text-gray-500 font-normal ml-1">/人/年</span></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                       <div className="bg-white border border-blue-100 rounded-lg p-3 text-center shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">建议区间</div>
                          <div className="font-bold text-gray-800">¥1,480 - ¥1,560</div>
                       </div>
                       <div className="bg-white border border-blue-100 rounded-lg p-3 text-center shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">授权底线</div>
                          <div className="font-bold text-gray-800">¥1,420</div>
                       </div>
                       <div className="bg-white border border-blue-100 rounded-lg p-3 text-center shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">风险等级</div>
                          <div className="font-bold text-yellow-600 flex items-center justify-center"><span className="mr-1">🟡</span>黄色</div>
                       </div>
                    </div>
                 </div>

                 {/* Right Rules */}
                 <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
                    <div className="font-bold text-gray-800 mb-3 flex items-center">
                       <ShieldAlert className="w-4 h-4 mr-2 text-indigo-500" /> 审批规则 (演示)
                    </div>
                    <div className="space-y-3 text-sm">
                       <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-500">当前报价</span>
                          <span className="font-bold">¥1,620/人/年</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-500">状态</span>
                          <span className="text-green-600 font-medium">🟢 无需审批</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-500">授权底线</span>
                          <span className="font-bold">¥1,420/人/年</span>
                       </div>
                       <div className="text-xs text-gray-500 bg-white p-2 rounded border border-gray-100">
                          <strong>规则：</strong>低于底线自动触发专项审批<br/>
                          <strong>风险控制：</strong>项目存在基金责任及运营规则待确认事项
                       </div>
                    </div>
                 </div>
              </div>

              {/* Middle Range Chart */}
              <div className="border border-gray-200 rounded-xl p-5">
                 <div className="font-bold text-gray-800 mb-6">报价授权区间分析</div>
                 
                 {/* Visual Bar */}
                 <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mb-8 mt-4 mx-4">
                    {/* Markers */}
                    <div className="absolute -top-1 -left-2 w-4 h-4 rounded-full bg-white border-2 border-red-500 shadow"></div>
                    <div className="absolute -top-1 left-[30%] w-4 h-4 rounded-full bg-white border-2 border-yellow-500 shadow"></div>
                    <div className="absolute -top-1 left-[70%] w-4 h-4 rounded-full bg-white border-2 border-green-500 shadow"></div>
                    <div className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow"></div>
                    
                    {/* Labels */}
                    <div className="absolute top-4 -left-6 text-xs font-bold text-red-600">Trigger<br/>&lt; 1420</div>
                    <div className="absolute top-4 left-[30%] -translate-x-1/2 text-xs font-bold text-yellow-600">1480</div>
                    <div className="absolute top-4 left-[70%] -translate-x-1/2 text-xs font-bold text-green-600">1560</div>
                    <div className="absolute top-4 -right-4 text-xs font-bold text-blue-700">1620+</div>

                    {/* Zone Names */}
                    <div className="absolute -top-6 left-[15%] -translate-x-1/2 text-[10px] text-gray-500">审批区</div>
                    <div className="absolute -top-6 left-[50%] -translate-x-1/2 text-[10px] text-gray-500">授权区</div>
                    <div className="absolute -top-6 left-[85%] -translate-x-1/2 text-[10px] text-gray-500">低风险区</div>
                 </div>

                 {/* Details Columns */}
                 <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-red-50/50 border border-red-100 rounded-lg p-3">
                       <div className="font-bold text-red-700 text-sm mb-1">🔴 红色区</div>
                       <div className="font-bold text-red-900 mb-2">低于 ¥1,420</div>
                       <div className="text-xs text-red-600 leading-tight">风险过高，触及红线，需强制触发集团专项审批流程。</div>
                    </div>
                    <div className="bg-yellow-50/50 border border-yellow-100 rounded-lg p-3">
                       <div className="font-bold text-yellow-700 text-sm mb-1">🟡 黄色区</div>
                       <div className="font-bold text-yellow-900 mb-2">¥1,420 - ¥1,480</div>
                       <div className="text-xs text-yellow-700 leading-tight">符合授权规则边界，可用于对抗激烈竞争，但需谨慎。</div>
                    </div>
                    <div className="bg-green-50/50 border border-green-100 rounded-lg p-3">
                       <div className="font-bold text-green-700 text-sm mb-1">🟢 绿色区</div>
                       <div className="font-bold text-green-900 mb-2">¥1,480 - ¥1,560</div>
                       <div className="text-xs text-green-700 leading-tight">推荐成交区间，兼顾市场竞争力与内部利润要求。</div>
                    </div>
                 </div>
              </div>

              {/* Bottom Recommendation */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
                 <div className="font-bold text-indigo-900 mb-3">AI 定价建议</div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                       <div className="text-xs text-indigo-500 mb-1">核心优化策略</div>
                       <div className="text-sm font-medium text-indigo-800 mb-2">优先调整服务配置提升竞争力：</div>
                       <ul className="space-y-1 text-sm text-indigo-700 pl-4 list-disc">
                          <li>适度优化低使用率服务</li>
                          <li>调整高成本增值服务配置</li>
                          <li>保持核心医疗责任不变</li>
                       </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                       <div className="bg-white rounded-lg p-3 border border-indigo-200 shadow-sm">
                          <div className="flex items-center text-orange-600 font-bold text-sm mb-1">
                             <Info className="w-4 h-4 mr-1" /> 风险提示
                          </div>
                          <div className="text-xs text-gray-600">
                             不建议通过直接降价获取项目，优先采用服务结构优化方式提升报价竞争力。
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* AI Conclusion */}
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                 <div className="font-bold text-gray-800 mb-3 flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-blue-600" /> AI 报价结论
                 </div>
                 <div className="space-y-2 text-sm">
                    <div className="flex items-center"><span className="mr-2">🟢</span> <span className="text-gray-600">标准报价：</span><span className="font-bold text-gray-800">¥1,620/人/年</span></div>
                    <div className="flex items-center"><span className="mr-2">🟡</span> <span className="text-gray-600">建议成交区间：</span><span className="font-bold text-gray-800">¥1,480 - ¥1,560/人/年</span></div>
                    <div className="flex items-center"><span className="mr-2">🔴</span> <span className="text-red-600 font-medium">低于 ¥1,420 需专项审批</span></div>
                    <div className="flex items-start mt-2 pt-2 border-t border-gray-200"><span className="mr-2 mt-0.5">💡</span> <span className="text-blue-700 font-medium">建议优先优化服务组合，不建议直接降价竞争</span></div>
                 </div>
              </motion.div>

            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}


export function BidDocInterpretationCard() {
  return (
    <div className="w-full max-w-5xl bg-[#f8faf7] border border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-4 font-['Microsoft_YaHei',_'sans-serif'] text-[#263238] animate-in fade-in slide-in-from-bottom-2 p-6 md:p-12 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-end mb-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-[44px] font-extrabold text-[#004a3f] leading-tight mb-4 m-0 border-none">
            烟草企康投标分析
          </h1>
          <div className="text-[#34454a] text-lg md:text-[20px] leading-relaxed font-medium">
            云南省烟草公司曲靖市公司2025-2027年企业健康委托管理及补充医疗保险服务项目
          </div>
        </div>
        <div className="w-full md:w-[300px] bg-gradient-to-b from-white to-[#fff8f3] border border-[#f3c6aa] rounded-2xl p-[18px] shadow-[0_14px_34px_rgba(0,74,63,0.08)] shrink-0">
          <div className="text-[#f26a21] font-extrabold text-[16px] mb-2">销售第一性原理</div>
          <div className="text-[#004a3f] font-extrabold text-[28px] mb-2">先定节点</div>
          <div className="text-[#34454a] text-[15px] font-medium leading-relaxed">24小时内确认时间、主体、预算、评分、废标项</div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-[14px] mb-[34px]">
        <div className="px-[17px] py-[9px] rounded-full border border-[#dce7e1] bg-white text-[#004a3f] font-bold text-[16px]">
          主投：平安产险云南分公司
        </div>
        <div className="px-[17px] py-[9px] rounded-full border border-[#f3c6aa] bg-[#fff8f3] text-[#b64a12] font-bold text-[16px]">
          履约：曲靖中心支公司
        </div>
        <div className="px-[17px] py-[9px] rounded-full border border-[#dce7e1] bg-white text-[#004a3f] font-bold text-[16px]">
          输出：销售投标作战版
        </div>
      </div>

      {/* Summary Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] mb-[26px]">
        <div className="border border-[#f3c6aa] bg-white rounded-2xl p-[18px] pb-[16px]">
          <strong className="block text-[#004a3f] text-[16px] font-extrabold mb-1.5">项目形态</strong>
          <span className="text-[#667085] text-[15px] leading-[1.45] font-medium">健康委托管理 + 补充医疗 + 门诊购药 + 就医协助</span>
        </div>
        <div className="border border-[#f3c6aa] bg-white rounded-2xl p-[18px] pb-[16px]">
          <strong className="block text-[#004a3f] text-[16px] font-extrabold mb-1.5">主体打法</strong>
          <span className="text-[#667085] text-[15px] leading-[1.45] font-medium">云南分公司主投，曲靖中心支公司属地履约</span>
        </div>
        <div className="border border-[#f3c6aa] bg-white rounded-2xl p-[18px] pb-[16px]">
          <strong className="block text-[#004a3f] text-[16px] font-extrabold mb-1.5">关键风险</strong>
          <span className="text-[#667085] text-[15px] leading-[1.45] font-medium">主体资质、联合体限制、健康数据合规、保证金</span>
        </div>
        <div className="border border-[#f3c6aa] bg-white rounded-2xl p-[18px] pb-[16px]">
          <strong className="block text-[#004a3f] text-[16px] font-extrabold mb-1.5">竞争重点</strong>
          <span className="text-[#667085] text-[15px] leading-[1.45] font-medium">健康委托经验、直付服务、退休人员服务、管理费率</span>
        </div>
      </div>

      {/* Section 1 */}
      <div className="bg-white border border-[#f3c6aa] rounded-2xl p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex flex-wrap items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">1</div>
          <h2 className="text-[#004a3f] text-[26px] font-extrabold m-0 tracking-tight">投标关键节点</h2>
          <div className="md:ml-auto text-[#b64a12] bg-[#fff2e8] border border-[#f3c6aa] rounded-full px-[14px] py-[7px] font-extrabold text-[14px] whitespace-nowrap">第一动作：当天转群</div>
        </div>
        <div className="relative pt-3 pb-1 px-1.5 hidden md:block">
          <div className="absolute left-[68px] right-[68px] top-[71px] h-[4px] bg-[#f26a21] rounded-full"></div>
          <div className="grid grid-cols-7 gap-0 relative">
            {[
              { name: '公告发布', date: '2025.04.18' },
              { name: '文件获取', date: '04.18-04.25\n17:00' },
              { name: '答疑截止', date: '04.28\n17:00' },
              { name: '澄清发布', date: '04.30' },
              { name: '保证金截止', date: '05.08\n16:00' },
              { name: '投标/开标', date: '05.09\n09:30' },
              { name: '服务启动', date: '06.01' },
            ].map((step, idx) => (
              <div key={idx} className="text-center relative min-h-[132px]">
                <div className="text-[#34454a] font-extrabold text-[16px] mb-[24px]">{step.name}</div>
                <div className="w-[24px] h-[24px] mx-auto mb-[16px] border-[4px] border-[#f26a21] bg-white rounded-full relative z-10"></div>
                <div className="text-[#42535a] text-[16px] font-medium whitespace-pre-line leading-[1.35]">{step.date}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile timeline */}
        <div className="md:hidden space-y-[16px]">
          {[
            { name: '公告发布', date: '2025.04.18' },
            { name: '文件获取', date: '04.18-04.25 17:00' },
            { name: '答疑截止', date: '04.28 17:00' },
            { name: '澄清发布', date: '04.30' },
            { name: '保证金截止', date: '05.08 16:00' },
            { name: '投标/开标', date: '05.09 09:30' },
            { name: '服务启动', date: '06.01' },
          ].map((step, idx) => (
            <div key={idx} className="grid grid-cols-[110px_32px_1fr] items-center text-left">
               <div className="text-[#34454a] font-extrabold text-[16px]">{step.name}</div>
               <div className="w-[24px] h-[24px] border-[4px] border-[#f26a21] bg-white rounded-full"></div>
               <div className="text-[#42535a] text-[16px] font-medium">{step.date}</div>
            </div>
          ))}
        </div>
        <div className="mt-[6px] mx-auto max-w-[690px] text-center border border-[#f3c6aa] rounded-full bg-[#fff2e8] text-[#f26a21] py-[10px] px-[18px] font-extrabold text-[18px] md:text-[20px]">
          销售第一动作：当天拉群、转发节点、确认能否投。
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white border border-[#dce7e1] rounded-2xl p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">2</div>
          <h2 className="text-[#004a3f] text-[26px] font-extrabold m-0 tracking-tight">项目关键信息</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          <div className="border border-[#f3c6aa] bg-[#f6fbf8] rounded-xl p-[18px] min-h-[145px]">
            <div className="text-[#004a3f] font-extrabold text-[19px] mb-[10px]">项目类型</div>
            <p className="text-[#3d4d52] font-medium text-[17px] leading-[1.55] m-0">健康委托管理 + 补充医疗 + 门诊购药 + 就医协助。</p>
          </div>
          <div className="border border-[#f3c6aa] bg-[#f6fbf8] rounded-xl p-[18px] min-h-[145px]">
            <div className="text-[#004a3f] font-extrabold text-[19px] mb-[10px]">服务对象</div>
            <p className="text-[#3d4d52] font-medium text-[17px] leading-[1.55] m-0">在岗员工、内部退养、退休人员；家属是否纳入待确认。</p>
          </div>
          <div className="border border-[#f3c6aa] bg-[#f6fbf8] rounded-xl p-[18px] min-h-[145px]">
            <div className="text-[#004a3f] font-extrabold text-[19px] mb-[10px]">服务期限</div>
            <p className="text-[#3d4d52] font-medium text-[17px] leading-[1.55] m-0">三年，合同一年一签，年度评价合格后续签。</p>
          </div>
          <div className="border border-[#f3c6aa] bg-[#fff8f3] rounded-xl p-[18px] min-h-[145px]">
            <div className="text-[#f26a21] font-extrabold text-[19px] mb-[10px]">预算口径</div>
            <p className="text-[#3d4d52] font-medium text-[17px] leading-[1.55] m-0">总预算XXX万元；人均限价XXX元/年；管理费率XXX%。</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white border border-[#f3c6aa] rounded-2xl p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex flex-wrap items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">3</div>
          <h2 className="text-[#004a3f] text-[26px] font-extrabold m-0 tracking-tight">主投主体与分工</h2>
          <div className="md:ml-auto text-[#b64a12] bg-[#fff2e8] border border-[#f3c6aa] rounded-full px-[14px] py-[7px] font-extrabold text-[14px] whitespace-nowrap">颗粒度到分支机构</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[45%_1fr] gap-[28px] items-start">
          <div className="w-full shrink-0">
            <div className="border-[2px] border-[#f26a21] bg-[#fff8f3] rounded-[14px] p-[18px] px-[22px] mb-[18px]">
              <div className="text-[#f26a21] font-extrabold text-[16px] mb-[6px]">主投主体</div>
              <div className="text-[#263238] font-extrabold text-[20px] leading-[1.35]">中国平安财产保险股份有限公司云南分公司</div>
            </div>
            <div className="border-[2px] border-[#9bd8c4] bg-[#eaf6f1] rounded-[14px] p-[18px] px-[22px]">
              <div className="text-[#004a3f] font-extrabold text-[16px] mb-[6px]">属地履约</div>
              <div className="text-[#263238] font-extrabold text-[20px] leading-[1.35]">中国平安财产保险股份有限公司曲靖中心支公司</div>
            </div>
          </div>
          <div className="w-full">
            <ul className="m-0 p-0 text-[#3d4d52] font-medium text-[17px] leading-[1.5]">
              <li className="relative pl-[18px] pb-[10px]"><div className="absolute left-0 top-[0.66em] w-[7px] h-[7px] rounded-full bg-[#f26a21]"></div>云南分公司负责省级授权、合同签署、开票出单、核保协调、集团健康资源统筹。</li>
              <li className="relative pl-[18px] pb-[10px]"><div className="absolute left-0 top-[0.66em] w-[7px] h-[7px] rounded-full bg-[#f26a21]"></div>曲靖中心支公司负责员工宣导、材料收集、理赔协助、线下服务、日常客户沟通。</li>
              <li className="relative pl-[18px] pb-[10px]"><div className="absolute left-0 top-[0.66em] w-[7px] h-[7px] rounded-full bg-[#f26a21]"></div>若招标要求健康险/养老险主体，切换平安健康险或平安养老险主投。</li>
              <li className="relative pl-[18px] pb-[10px]"><div className="absolute left-0 top-[0.66em] w-[7px] h-[7px] rounded-full bg-[#f26a21]"></div>不接受联合体时，协同资源写为集团服务支持，避免违规分包。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-white border border-[#f3c6aa] rounded-2xl p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex flex-wrap items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">4</div>
          <h2 className="text-[#004a3f] text-[26px] font-extrabold m-0 tracking-tight">竞对门槛识别</h2>
          <div className="md:ml-auto text-[#b64a12] bg-[#fff2e8] border border-[#f3c6aa] rounded-full px-[14px] py-[7px] font-extrabold text-[14px] whitespace-nowrap">重点前置，不再埋在后面</div>
        </div>
        <div className="overflow-x-auto rounded-[10px] border-[2px] border-[#f26a21] bg-gradient-to-b from-[#fff8f3] to-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-[#f26a21] text-white">
              <tr>
                <th className="py-[13px] px-[16px] font-extrabold text-[17px] w-[22%] border-b border-[#f26a21]">门槛</th>
                <th className="py-[13px] px-[16px] font-extrabold text-[17px] w-[34%] border-b border-[#f26a21]">竞对优势</th>
                <th className="py-[13px] px-[16px] font-extrabold text-[17px] border-b border-[#f26a21]">平安打法</th>
              </tr>
            </thead>
            <tbody className="text-[16px]">
              <tr className="bg-white border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] text-[#34454a] font-bold border-r border-[#dce7e1]">
                  健康委托经验 
                  <span className="inline-block mt-1 xl:mt-0 xl:ml-2 px-[10px] py-[3px] bg-[#fff2e8] border border-[#f3c6aa] text-[#b64a12] rounded-full text-[13px] font-extrabold whitespace-nowrap">平安需补强</span>
                </td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium border-r border-[#dce7e1] leading-[1.5]">泰康、国寿养老、太平养老、人保健康常用补医/委托管理案例抢分。</td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium leading-[1.5]">调取平安体系央国企补医、健康委托、员工福利项目案例，优先放烟草或制造业相近案例。</td>
              </tr>
              <tr className="bg-[#fffaf6] border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] text-[#34454a] font-bold border-r border-[#dce7e1]">
                  线上直付服务 
                  <span className="inline-block mt-1 xl:mt-0 xl:ml-2 px-[10px] py-[3px] bg-[#fff2e8] border border-[#f3c6aa] text-[#b64a12] rounded-full text-[13px] font-extrabold whitespace-nowrap">评分敏感</span>
                </td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium border-r border-[#dce7e1] leading-[1.5]">互联网医疗、TPA平台、原服务商更容易证明直付链路。</td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium leading-[1.5]">突出平安线上医院、药房网络、服务专员、线上理赔入口，写清直付范围和操作路径。</td>
              </tr>
              <tr className="bg-white border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] text-[#34454a] font-bold border-r border-[#dce7e1]">
                  退休人员服务 
                  <span className="inline-block mt-1 xl:mt-0 xl:ml-2 px-[10px] py-[3px] bg-[#fff2e8] border border-[#f3c6aa] text-[#b64a12] rounded-full text-[13px] font-extrabold whitespace-nowrap">烟草高频</span>
                </td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium border-r border-[#dce7e1] leading-[1.5]">本地医疗机构和原供应商熟悉退休员工线下服务习惯。</td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium leading-[1.5]">写慢病随访、用药提醒、异地就医、线下材料协助和服务热线。</td>
              </tr>
              <tr className="bg-[#fffaf6]">
                <td className="py-[13px] px-[16px] text-[#34454a] font-bold border-r border-[#dce7e1]">
                  价格与管理费率 
                  <span className="inline-block mt-1 xl:mt-0 xl:ml-2 px-[10px] py-[3px] bg-[#fff2e8] border border-[#f3c6aa] text-[#b64a12] rounded-full text-[13px] font-extrabold whitespace-nowrap">不宜硬卷</span>
                </td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium border-r border-[#dce7e1] leading-[1.5]">激进低价供应商可能用低管理费率抢价格分。</td>
                <td className="py-[13px] px-[16px] text-[#34454a] font-medium leading-[1.5]">不卷低价，强调审计安全、赔付稳定、服务质量、年度复盘和可持续履约。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-white border border-[#f3c6aa] rounded-2xl p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">5</div>
          <h2 className="text-[#004a3f] text-[26px] font-extrabold m-0 tracking-tight">服务内容要求</h2>
        </div>
        <div className="overflow-x-auto rounded-[10px] border border-[#dce7e1] bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <tbody className="text-[16px]">
              <tr className="border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-white border-r border-[#dce7e1] w-[18%]">健康委托管理</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-white border-r border-[#dce7e1] w-[32%] leading-[1.5]">资金管理、赔付流程、月报、审计配合。</td>
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-white border-r border-[#dce7e1] w-[18%]">补充医疗</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-white w-[32%] leading-[1.5]">住院、门诊、重疾、既往症、退休人员服务。</td>
              </tr>
              <tr className="border-b border-[#dce7e1]">
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-[#fbfffd] border-r border-[#dce7e1]">门诊购药</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-[#fbfffd] border-r border-[#dce7e1] leading-[1.5]">药店网络、线上问诊、处方流转、慢病药配送。</td>
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-[#fbfffd] border-r border-[#dce7e1]">直付服务</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-[#fbfffd] leading-[1.5]">线上医院、线上直付、线下直付。</td>
              </tr>
              <tr>
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-white border-r border-[#dce7e1]">健康管理</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-white border-r border-[#dce7e1] leading-[1.5]">体检解读、慢病随访、心理咨询、健康讲座。</td>
                <td className="py-[13px] px-[16px] font-extrabold text-[#004a3f] bg-white border-r border-[#dce7e1]">就医协助</td>
                <td className="py-[13px] px-[16px] font-medium text-[#34454a] bg-white leading-[1.5]">专家门诊、住院协助、重疾绿通、异地就医。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 6 */}
      <div className="bg-white border border-[#dce7e1] rounded-2xl p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">6</div>
          <h2 className="text-[#004a3f] text-[26px] font-extrabold m-0 tracking-tight">资格与经营要求</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[14px]">
          {[
            '经营保险业务许可证，业务范围含健康保险或短期健康保障。',
            '项目所在地设有分支机构或服务机构。',
            '未列入烟草行业不良供应商名单。',
            '信用中国、裁判文书、行贿记录提前自查。',
            '同负责人或控股管理关系单位不得同时投标。'
          ].map((req, idx) => (
             <div key={idx} className="border border-[#f3c6aa] bg-[#fcfefd] rounded-[14px] p-[18px] flex flex-col min-h-[165px]">
                <div className="w-[34px] h-[34px] mx-auto mb-[14px] flex items-center justify-center border-2 border-[#f26a21] text-[#f26a21] font-extrabold rounded-full shrink-0">
                  {idx + 1}
                </div>
                <p className="text-[#3d4d52] text-[15px] font-medium leading-[1.48] text-center m-0">{req}</p>
             </div>
          ))}
        </div>
      </div>

      {/* Section 7 */}
      <div className="bg-white border border-[#f3c6aa] rounded-2xl p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">7</div>
          <h2 className="text-[#004a3f] text-[26px] font-extrabold m-0 tracking-tight">评分拆解与拿分点</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[14px]">
          {[
            { title: '价格', score: '20-30分', points: '控制人均价、管理费率、含税口径，避免报价表前后不一致。', bar: '82%', highlight: true },
            { title: '服务方案', score: '20-25分', points: '突出直付、慢病、退休人员、就医协助。', bar: '72%' },
            { title: '理赔时效', score: '10-15分', points: '小额快赔T+1，复杂案件T+5审核，重大案件绿色通道。', bar: '68%' },
            { title: '类似业绩', score: '8-15分', points: '烟草、央国企、制造业、补医/企康案例优先。', bar: '70%' },
            { title: '团队承诺', score: '5-10分', points: '省分统筹 + 曲靖属地项目组，明确人员与响应时限。', bar: '64%' },
          ].map((item, idx) => (
            <div key={idx} className={`border border-[#f3c6aa] rounded-[14px] p-[18px] min-h-[190px] ${item.highlight ? 'bg-[#fff8f3]' : 'bg-[#fcfefd]'}`}>
              <div className={`font-extrabold text-[19px] mb-[4px] ${item.highlight ? 'text-[#f26a21]' : 'text-[#004a3f]'}`}>{item.title}</div>
              <div className="text-[#263238] font-bold text-[17px] mb-[18px]">{item.score}</div>
              <div className="h-[13px] w-full bg-[#d6ddd9] rounded-full overflow-hidden mb-[18px]">
                <div className="h-full bg-[#f26a21] rounded-full" style={{ width: item.bar }}></div>
              </div>
              <p className="text-[#3d4d52] font-medium text-[15px] leading-[1.45] m-0">{item.points}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 8 */}
      <div className="bg-white border border-[#dce7e1] rounded-2xl p-[24px] shadow-[0_8px_20px_rgba(0,74,63,0.04)] mt-[26px] relative">
        <div className="flex items-center gap-[16px] mb-[22px]">
          <div className="w-[44px] h-[44px] bg-[#f26a21] text-white rounded-[10px] flex items-center justify-center font-extrabold text-[24px] shrink-0">8</div>
          <h2 className="text-[#004a3f] text-[26px] font-extrabold m-0 tracking-tight">首日行动与废标风险</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="border border-[#9bd8c4] bg-[#eaf6f1] rounded-[14px] p-[22px] min-h-[300px]">
            <h3 className="text-[#004a3f] text-[21px] font-extrabold mb-[14px] mt-0">首日行动（务必完成）</h3>
            <ol className="list-decimal pl-[26px] m-0 text-[#34454a] font-medium text-[16px] leading-[1.68] marker:text-[#004a3f] marker:font-bold">
              <li className="pl-1 mb-[5px]">下载文件并完成报名CA准备。</li>
              <li className="pl-1 mb-[5px]">建立投标群，明确分工与节点。</li>
              <li className="pl-1 mb-[5px]">锁定时间表，标记关键截止时间。</li>
              <li className="pl-1 mb-[5px]">确认主体资质与业务范围。</li>
              <li className="pl-1 mb-[5px]">拉齐服务人数、预算、管理费率参数。</li>
              <li className="pl-1 mb-[5px]">梳理答疑清单，提前提交重要问题。</li>
              <li className="pl-1 mb-[5px]">启动报价测算与责任方案设计。</li>
              <li className="pl-1">调取类似业绩、资质、授权材料。</li>
            </ol>
          </div>
          <div className="border border-[#f3c6aa] bg-[#fff8f3] rounded-[14px] p-[22px] min-h-[300px]">
            <h3 className="text-[#f26a21] text-[21px] font-extrabold mb-[14px] mt-0">废标风险（重点防控）</h3>
            <ol className="list-decimal pl-[26px] m-0 text-[#34454a] font-medium text-[16px] leading-[1.68] marker:text-[#f26a21] marker:font-bold">
              <li className="pl-1 mb-[5px]">主体不符或业务范围不满足。</li>
              <li className="pl-1 mb-[5px]">保证金金额、账户、主体、到账时间错误。</li>
              <li className="pl-1 mb-[5px]">报价超限：人均价或管理费率超预算。</li>
              <li className="pl-1 mb-[5px]">责任负偏离：核心责任漏项。</li>
              <li className="pl-1 mb-[5px]">联合体表述违规或协同资源写法不当。</li>
              <li className="pl-1 mb-[5px]">业绩不相似：财险/车险替代企康业绩。</li>
              <li className="pl-1 mb-[5px]">授权缺失：总公司授权、负责人授权。</li>
              <li className="pl-1 mb-[5px]">健康数据合规缺失：授权、脱敏、保密未说明。</li>
              <li className="pl-1">上传逾期：电子标未在截止前完成上传。</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[34px] md:mx-[28px] bg-[#f26a21] rounded-[18px] text-white py-[22px] px-[28px] text-center text-[18px] md:text-[22px] font-extrabold shadow-sm tracking-wide">
        AI结论：先保节点和主体，再谈方案。24小时内钉死时间、资质、预算、评分、废标项。
      </div>
    </div>
  );
}


export function QualPerfMatchCard() {
  const [phase, setPhase] = useState('matching_qual'); 
  // 'matching_qual' -> 'matching_case' -> 'matching_coverage' -> 'done'

  useEffect(() => {
    const t0 = setTimeout(() => setPhase('matching_case'), 1500);
    const t1 = setTimeout(() => setPhase('matching_coverage'), 3000);
    const t2 = setTimeout(() => setPhase('done'), 4500);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-2 duration-500 font-['Microsoft_YaHei',_'sans-serif'] mt-2">
      <div className="bg-orange-50/50 border border-orange-200 rounded-xl overflow-hidden shadow-sm text-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 flex justify-between items-center text-white">
          <div className="flex items-center font-bold text-base">
            <Award className="mr-2 h-5 w-5 opacity-90" />
            资质业绩匹配分析
          </div>
          {phase !== 'done' && (
            <div className="text-xs font-medium animate-pulse opacity-90 bg-white/20 px-3 py-1 rounded-full flex items-center">
               <Loader2 className="w-3 h-3 mr-1 animate-spin" /> AI匹配分析中...
            </div>
          )}
          {phase === 'done' && (
             <div className="text-xs font-medium opacity-90 bg-white/20 px-3 py-1 rounded-full">
               分析完成
             </div>
          )}
        </div>

        <div className="p-5 relative">
          
          {phase !== 'done' && (
             <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
                <div className="text-gray-500 font-medium">
                   {phase === 'matching_qual' && '正在匹配企业资质库...'}
                   {phase === 'matching_case' && '正在检索同类项目案例...'}
                   {phase === 'matching_coverage' && '正在校验服务能力覆盖情况...'}
                </div>
             </div>
          )}

          {phase === 'done' && (
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-6">
              
              {/* Top Overview */}
              <div className="flex flex-col md:flex-row gap-5 items-stretch">
                
                {/* Left: Overall Match */}
                <div className="md:w-1/3 bg-white border border-green-100 rounded-xl p-5 flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-2 text-xs text-gray-400 font-medium">（演示）</div>
                   <div className="text-sm font-bold text-gray-600 mb-4">综合匹配度</div>
                   <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                     <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="10" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="10" fill="none" strokeDasharray="251.2" strokeDashoffset="35.168" className="transition-all duration-1000" strokeLinecap="round" />
                     </svg>
                     <div className="absolute flex flex-col items-center">
                        <span className="text-3xl font-black text-gray-800">86%</span>
                     </div>
                   </div>
                </div>

                {/* Right: Summary Breakdown */}
                <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between">
                     <div className="flex items-center text-green-800 font-bold">
                        <span className="text-xl mr-3">🟢</span> 满足项
                     </div>
                     <div className="text-green-700 font-black text-xl">18<span className="text-sm font-medium ml-1 text-green-600">项</span></div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center justify-between">
                     <div className="flex items-center text-yellow-800 font-bold">
                        <span className="text-xl mr-3">🟡</span> 偏离项
                     </div>
                     <div className="text-yellow-700 font-black text-xl">4<span className="text-sm font-medium ml-1 text-yellow-600">项</span></div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-between">
                     <div className="flex items-center text-red-800 font-bold">
                        <span className="text-xl mr-3">🔴</span> 风险项
                     </div>
                     <div className="text-red-700 font-black text-xl">2<span className="text-sm font-medium ml-1 text-red-600">项</span></div>
                  </div>
                </div>

              </div>

              {/* Three Dimensions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                 
                 {/* 1. 满足项 */}
                 <div className="border border-green-200 bg-white rounded-xl overflow-hidden flex flex-col">
                    <div className="bg-green-50 px-4 py-3 border-b border-green-100">
                       <div className="font-bold text-green-800 text-base mb-1">🟢 满足项（18项）</div>
                       <div className="text-xs text-green-700">已满足招标要求，可直接响应</div>
                    </div>
                    <div className="p-4 space-y-4 text-sm flex-1">
                       <div>
                         <div className="font-bold text-gray-800 mb-2">企业资质（4项）</div>
                         <ul className="space-y-1.5 text-gray-600 text-xs">
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 营业执照</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 行业准入资质</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 医疗服务相关资质</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 招标资格要求</li>
                         </ul>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 mb-2">服务网络（4项）</div>
                         <ul className="space-y-1.5 text-gray-600 text-xs">
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 全国服务网络覆盖</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 多机构服务能力</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 线上服务平台</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 异地服务支持</li>
                         </ul>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 mb-2">项目经验（5项）</div>
                         <ul className="space-y-1.5 text-gray-600 text-xs">
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 央国企项目经验</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 大型员工福利项目经验</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 补充医疗项目经验</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 健康管理项目经验</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 多机构统筹项目经验</li>
                         </ul>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 mb-2">产品能力（5项）</div>
                         <ul className="space-y-1.5 text-gray-600 text-xs">
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 补充医疗保障</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 健康管理服务</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 就医协助服务</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 慢病管理服务</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0"/> 医疗资源协同能力</li>
                         </ul>
                       </div>
                    </div>
                    <div className="bg-green-50 px-4 py-2 border-t border-green-100 text-green-800 font-bold text-sm text-right">
                       合计：18项
                    </div>
                 </div>

                 {/* 2. 偏离项 */}
                 <div className="border border-yellow-200 bg-white rounded-xl overflow-hidden flex flex-col">
                    <div className="bg-yellow-50 px-4 py-3 border-b border-yellow-100">
                       <div className="font-bold text-yellow-800 text-base mb-1">🟡 偏离项（4项）</div>
                       <div className="text-xs text-yellow-700">存在差异，可补充完善</div>
                    </div>
                    <div className="p-4 space-y-4 text-sm flex-1">
                       <div>
                         <ul className="space-y-3 text-gray-600 text-xs">
                            <li className="flex items-start"><CheckCircle2 className="w-3.5 h-3.5 text-yellow-500 mr-2 shrink-0 mt-0.5"/> <span className="leading-tight">烟草行业专项案例证明</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-3.5 h-3.5 text-yellow-500 mr-2 shrink-0 mt-0.5"/> <span className="leading-tight">分支机构服务承诺文件</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-3.5 h-3.5 text-yellow-500 mr-2 shrink-0 mt-0.5"/> <span className="leading-tight">项目实施成果证明</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-3.5 h-3.5 text-yellow-500 mr-2 shrink-0 mt-0.5"/> <span className="leading-tight">服务团队配置说明</span></li>
                         </ul>
                       </div>
                    </div>
                    <div className="bg-yellow-50 px-4 py-2 border-t border-yellow-100 text-yellow-800 font-bold text-sm text-right">
                       合计：4项
                    </div>
                 </div>

                 {/* 3. 风险项 */}
                 <div className="border border-red-200 bg-white rounded-xl overflow-hidden flex flex-col">
                    <div className="bg-red-50 px-4 py-3 border-b border-red-100">
                       <div className="font-bold text-red-800 text-base mb-1">🔴 风险项（2项）</div>
                       <div className="text-xs text-red-700">需专项确认</div>
                    </div>
                    <div className="p-4 space-y-4 text-sm flex-1">
                       <div>
                         <ul className="space-y-3 text-gray-600 text-xs">
                            <li className="flex items-start"><AlertCircle className="w-3.5 h-3.5 text-red-500 mr-2 shrink-0 mt-0.5"/> <span className="leading-tight">额外责任承诺条款</span></li>
                            <li className="flex items-start"><AlertCircle className="w-3.5 h-3.5 text-red-500 mr-2 shrink-0 mt-0.5"/> <span className="leading-tight">服务响应时效口径</span></li>
                         </ul>
                       </div>
                    </div>
                    <div className="bg-red-50 px-4 py-2 border-t border-red-100 text-red-800 font-bold text-sm text-right">
                       合计：2项
                    </div>
                 </div>

              </div>

              {/* Bottom AI Suggestion Card */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                 <div className="font-bold text-orange-900 mb-4 flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-orange-600" /> AI评估建议
                 </div>
                 
                 <div className="space-y-3 text-sm">
                    <div className="flex items-start"><span className="mr-2">🟢</span> <span className="text-orange-900 font-medium leading-relaxed">已满足18项核心要求，具备投标基础条件</span></div>
                    <div className="flex items-start"><span className="mr-2">🟡</span> <span className="text-orange-900 font-medium leading-relaxed">4项偏离项均可通过补充材料解决</span></div>
                    <div className="flex items-start"><span className="mr-2">🔴</span> <span className="text-orange-900 font-medium leading-relaxed">2项风险项建议发起专项复核</span></div>
                    <div className="flex items-start"><span className="mr-2">🚀</span> <span className="text-orange-700 font-bold leading-relaxed">建议进入投标材料生成阶段</span></div>
                 </div>

                 <div className="border-t border-orange-200/50 mt-4 pt-4 flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-3">
                       <button className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 transition-colors rounded-lg text-white font-medium text-sm flex items-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                          <Target className="w-4 h-4 mr-2" /> 发起专项复核
                       </button>
                       <button className="px-5 py-2.5 bg-white border border-orange-200 hover:bg-orange-50 transition-colors rounded-lg text-orange-700 font-medium text-sm flex items-center shadow-sm">
                          <FileText className="w-4 h-4 mr-2" /> 投标材料生成
                       </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}

function BasicInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {
  const [formData, setFormData] = React.useState({
    channel: "银行",
    customerName: data?.customerName || "明道云",
    industry: "软件/互联网",
    healthPainPoints: "员工亚健康问题严重，高管缺乏就医绿通，整体缺乏系统性健康管理方案",
    budget: data?.budget || "18W",
  });
  
  React.useEffect(() => {
    if (data?.customerName) {
      setFormData(prev => ({ ...prev, customerName: data.customerName, budget: data.budget || prev.budget }));
    }
  }, [data]);

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (onSend) {
      onSend(`[确认基本信息]`);
    }
  };

  return (
    <div className="mt-2 w-full max-w-2xl bg-white border border-orange-200 rounded-xl shadow-lg overflow-hidden relative">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-rose-400/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-gradient-to-tr from-amber-400/20 to-orange-300/20 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-3 flex items-center justify-between shadow-sm relative z-10">
        <div className="flex items-center space-x-2 text-white">
          <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
            <Building2 size={16} className="text-white" />
          </div>
          <h3 className="font-bold text-sm tracking-wide">企业信息搜索结果</h3>
        </div>
        <div className="px-2 py-0.5 bg-white/20 rounded text-xs text-white/90 backdrop-blur-sm flex items-center">
          <Sparkles size={12} className="mr-1" />
          AI 自动匹配
        </div>
      </div>
      
      <div className="p-4 space-y-3 bg-gradient-to-b from-white/90 to-orange-50/50 backdrop-blur-sm relative z-10">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg border border-orange-100/50 p-2.5 shadow-sm flex items-center hover:border-orange-200 transition-colors">
            <div className="w-16 text-gray-500 font-medium text-xs flex items-center"><MapPin size={12} className="mr-1"/> 所属渠道</div>
            <input type="text" className="flex-1 border-none bg-transparent focus:ring-0 text-gray-900 text-xs p-0 font-semibold" disabled={submitted} value={formData.channel} onChange={(e) => setFormData({...formData, channel: e.target.value})} />
          </div>
          
          <div className="bg-white rounded-lg border border-orange-100/50 p-2.5 shadow-sm flex items-center hover:border-orange-200 transition-colors">
             <div className="w-16 text-gray-500 font-medium text-xs flex items-center"><Briefcase size={12} className="mr-1"/> 行业</div>
             <input type="text" className="flex-1 border-none bg-transparent focus:ring-0 text-gray-900 text-xs p-0 font-semibold" disabled={submitted} value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg border border-orange-100/50 p-2.5 shadow-sm flex items-center hover:border-orange-200 transition-colors">
            <div className="w-16 text-gray-500 font-medium text-xs flex items-center"><Users size={12} className="mr-1"/> 客户名称</div>
            <input type="text" className="flex-1 border-none bg-transparent focus:ring-0 text-gray-900 text-xs p-0 font-semibold" disabled={submitted} value={formData.customerName} onChange={(e) => setFormData({...formData, customerName: e.target.value})} />
          </div>
          
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-2.5 shadow-sm flex items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-500 rounded-bl-full opacity-20"></div>
             <div className="w-16 text-orange-600 font-bold text-xs flex items-center"><DollarSign size={12} className="mr-0.5"/> 预算</div>
             <input type="text" className="flex-1 border-none bg-transparent focus:ring-0 text-orange-700 text-xs p-0 font-bold" disabled={submitted} value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-orange-100/50 p-3 shadow-sm hover:border-orange-200 transition-colors">
          <div className="text-gray-500 font-medium text-xs mb-1.5 flex items-center"><HeartPulse size={12} className="mr-1"/> 健康痛点</div>
          <textarea className="w-full border-none bg-gray-50 rounded p-2 focus:ring-1 focus:ring-orange-200 text-gray-800 text-xs resize-none font-medium leading-relaxed" disabled={submitted} value={formData.healthPainPoints} rows={2} onChange={(e) => setFormData({...formData, healthPainPoints: e.target.value})} />
        </div>

        {!submitted && (
          <div className="pt-2 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm rounded-lg font-bold shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:-translate-y-0.5 flex items-center"
            >
              <Check size={16} className="mr-1.5" /> 确认
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function PackageOptionCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {
  const [selectedId, setSelectedId] = React.useState<string | null>(null); // Default to recommended
  const [submitted, setSubmitted] = React.useState(false);

  const defaultPackages = [
    {
      id: "pkg1",
      name: "基础健康保障版",
      products: [
        { name: "高管年度深度体检", target: "高层员工", price: "3,000元", unit: "人/年" },
        { name: "核心骨干绿色就医", target: "核心员工", price: "1,000元", unit: "人/年" },
        { name: "入职体检套餐（基础）", target: "基层员工", price: "150元", unit: "人/年" }
      ],
      sellingPoint: "覆盖各层级基础健康需求，低成本实现企业健康福利从无到有。"
    },
    {
      id: "pkg2",
      name: "全场景黑金尊享版",
      isRecommended: true,
      products: [
        { name: "高端私立医院VIP体检", target: "高层员工", price: "6,000元", unit: "人/年" },
        { name: "三甲医院专家特需门诊", target: "核心员工", price: "2,000元", unit: "人/年" },
        { name: "家属共享健康档案及问诊", target: "基层员工", price: "200元", unit: "户/年" }
      ],
      sellingPoint: "分层定制，精准满足不同层级员工及家属健康痛点，性价比最高的主力推荐方案。"
    },
    {
      id: "pkg3",
      name: "高管特权定制版",
      products: [
        { name: "海外重疾就医协助及随诊", target: "高层员工", price: "25,000元", unit: "人/年" },
        { name: "专属私人健康管家（7x24）", target: "核心员工", price: "12,000元", unit: "人/年" },
        { name: "家族基因筛查及抗衰方案", target: "基层员工", price: "8,800元", unit: "人/次" }
      ],
      sellingPoint: "顶配医疗资源，彰显高管尊贵身份，提供全天候一对一顶级私密健康管理服务。"
    }
  ];

  const packages = data?.packages && data.packages.length > 0 ? data.packages : defaultPackages;

  const handleGenerate = () => {
    setSubmitted(true);
    if(onSend) onSend("[生成方案] 已选择套餐，请生成PPT");
  };

  const handleRecommendAgain = () => {
    setSubmitted(true);
    if(onSend) onSend("[重新推荐]");
  };

  return (
    <div className="mt-2 w-full max-w-4xl bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 mb-2 p-6 pb-0">
        <Layers className="w-6 h-6 text-orange-500" />
        <h3 className="font-bold text-xl text-gray-900">推荐标品套餐选项</h3>
      </div>
      
      <div className="p-6 pt-2">
        <div className="h-px bg-gray-100 w-full mb-4 mt-2"></div>
        <p className="text-[13px] text-gray-500 mb-4">{submitted ? "您已完成套餐选择：" : "为您匹配了以下标准产品组合，请选择其中之一："}</p>
        <div className="grid grid-cols-1 gap-4 mb-6">
          {packages.map((pkg: any) => {
            const isSelected = selectedId === pkg.id;
            return (
              <div 
                key={pkg.id} 
                onClick={() => { if(!submitted) setSelectedId(pkg.id) }}
                className={`relative border rounded-lg transition-all duration-200 cursor-pointer flex flex-col ${isSelected ? 'border-orange-500 shadow-sm' : 'border-gray-200 hover:border-orange-300'}`}
              >
                {pkg.isRecommended && (
                  <div className="absolute top-0 left-0 -mt-3 ml-4">
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded shadow-sm flex items-center">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      推荐
                    </div>
                  </div>
                )}
                
                <div className={`flex justify-between items-center p-4 ${pkg.isRecommended ? 'bg-orange-50/50' : 'bg-gray-50/50'} border-b border-gray-100 rounded-t-lg`}>
                  <h4 className={`font-bold text-[17px] ${pkg.isRecommended ? 'text-orange-800' : 'text-gray-800'}`}>{pkg.name}</h4>
                  <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${isSelected ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-gray-300'}`}>
                    {isSelected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                  </div>
                </div>

                {pkg.products && pkg.products.length > 0 && (
                  <div className="bg-white">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50/50 text-orange-600/80 text-[13px]">
                        <tr>
                          <th className="px-5 py-3 font-bold border-b border-gray-100">产品名称</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-28">适用人群</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-28">单价</th>
                          <th className="px-5 py-3 font-bold border-b border-gray-100 w-28">计价方式</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {pkg.products.map((prod: any, idx: number) => (
                          <tr key={idx} className="hover:bg-gray-50/30">
                            <td className="px-5 py-3 text-gray-700 font-medium">{prod.name}</td>
                            <td className="px-5 py-3 text-gray-600 text-[13px]">{prod.target}</td>
                            <td className="px-5 py-3 text-gray-800 font-mono text-[13px]">{prod.price}</td>
                            <td className="px-5 py-3 text-gray-500 text-[13px]">{prod.unit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {pkg.sellingPoint && (
                  <div className="px-5 py-4 bg-orange-50/50 border-t border-gray-100 rounded-b-lg">
                    <div className="flex items-start">
                      <div className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mr-2 mt-0.5 whitespace-nowrap">一句话卖点</div>
                      <p className="text-[13px] text-gray-700 leading-snug font-medium">
                        {pkg.sellingPoint}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGenerate}
            disabled={!selectedId || submitted}
            className={`flex-1 max-w-[200px] py-3 rounded text-sm transition-colors flex items-center justify-center gap-2 ${submitted ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : selectedId ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-orange-300 text-white cursor-not-allowed'}`}
          >
            生成方案
          </button>
          <button
            onClick={handleRecommendAgain}
            disabled={submitted}
            className={`flex-1 max-w-[200px] py-3 rounded text-sm transition-colors flex items-center justify-center gap-2 ${submitted ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            重新推荐
          </button>
        </div>
      </div>
    </div>
  )
}
function SupplementaryInfoFormCard({ onSend, data }: { onSend?: (text: string) => void, data?: any }) {
  const [formData, setFormData] = React.useState({
    painPoints: [] as string[],
    orgStructure: "省级公司本部，含办公室、财务、销售、烟叶、专卖、信息中心等职能部门",
    personnelStructure: "省级公司管理层+各部门员工",
    genderStructure: "男女比例约6:4",
    jobStructure: "管理类、技术类、销售类、行政类",
    notes: "烟草行业属于特殊体制内行业，员工福利偏好稳定全面",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleIgnore = () => {
    setSubmitted(true);
    if(onSend) onSend("[忽略补充信息] 直接生成标品营销方案大纲和PPT");
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if(onSend) onSend("[已提交补充信息] 根据补充信息重新推荐标品套餐");
  }

  const togglePainPoint = (val: string) => {
    if (submitted) return;
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(val) ? prev.painPoints.filter(p => p !== val) : [...prev.painPoints, val]
    }));
  };

  const painPointOptions = ["常见心血管疾病", "颈椎/腰椎等职业病", "心理压力大/焦虑", "癌症发病率偏高"];

  return (
    <div className="mt-8 w-full max-w-3xl bg-white border border-gray-100 rounded-xl p-8 shadow-sm relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer transition-colors z-10">
        <ChevronLeft className="w-4 h-4 rotate-90" />
      </div>

      <div className="flex items-center justify-center gap-2 mb-8">
        <h3 className="font-bold text-xl text-gray-900">补充信息</h3>
      </div>

      <div className="space-y-6">
         {/* 既往健康痛点 */}
         <div>
            <h4 className="text-[13px] text-gray-400 mb-2">既往健康痛点</h4>
            <div className="relative" ref={dropdownRef}>
              <div 
                className={`w-full border-none bg-transparent py-2 text-[15px] flex items-center justify-between transition-colors ${submitted ? 'text-gray-500 cursor-not-allowed' : 'text-gray-900 cursor-pointer'}`}
                onClick={() => !submitted && setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex flex-wrap gap-1">
                  {formData.painPoints.length === 0 ? (
                    <span className="text-gray-900">请选择</span>
                  ) : (
                    formData.painPoints.map(p => (
                      <span key={p} className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {p}
                        {!submitted && (
                          <span 
                            className="ml-1 cursor-pointer hover:bg-gray-200 rounded-full p-0.5 flex items-center justify-center"
                            onClick={(e) => { e.stopPropagation(); togglePainPoint(p); }}
                          >
                            <X className="w-3 h-3" />
                          </span>
                        )}
                      </span>
                    ))
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {isDropdownOpen && !submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden"
                  >
                    <div className="max-h-60 overflow-y-auto py-1">
                      {painPointOptions.map(option => (
                        <label 
                          key={option} 
                          className={`flex items-center px-4 py-2.5 cursor-pointer transition-colors hover:bg-gray-50 ${formData.painPoints.includes(option) ? 'bg-gray-50/50' : ''}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input 
                            type="checkbox" 
                            className="rounded text-orange-500 focus:ring-orange-500 w-4 h-4 border-gray-300 mr-3" 
                            checked={formData.painPoints.includes(option)} 
                            onChange={() => togglePainPoint(option)} 
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="h-px bg-gray-100 w-full mt-1"></div>
         </div>

         {/* 组织结构 */}
         <div>
            <h4 className="text-[13px] text-gray-400 mb-2">组织结构</h4>
            <textarea className="w-full border-none bg-transparent py-2 text-[15px] focus:ring-0 min-h-[40px] p-0 resize-none text-gray-900" disabled={submitted}
                      value={formData.orgStructure} onChange={e=>setFormData({...formData, orgStructure:e.target.value})}></textarea>
            <div className="h-px bg-gray-100 w-full mt-1"></div>
         </div>

         {/* 人员结构 */}
         <div>
            <h4 className="text-[13px] text-gray-400 mb-2">人员结构</h4>
            <textarea className="w-full border-none bg-transparent py-2 text-[15px] focus:ring-0 min-h-[40px] p-0 resize-none text-gray-900" disabled={submitted}
                      value={formData.personnelStructure} onChange={e=>setFormData({...formData, personnelStructure:e.target.value})}></textarea>
            <div className="h-px bg-gray-100 w-full mt-1"></div>
         </div>

         {/* 性别结构 */}
         <div>
            <h4 className="text-[13px] text-gray-400 mb-2">性别结构</h4>
            <textarea className="w-full border-none bg-transparent py-2 text-[15px] focus:ring-0 min-h-[40px] p-0 resize-none text-gray-900" disabled={submitted}
                      value={formData.genderStructure} onChange={e=>setFormData({...formData, genderStructure:e.target.value})}></textarea>
            <div className="h-px bg-gray-100 w-full mt-1"></div>
         </div>

         {/* 工种结构 */}
         <div>
            <h4 className="text-[13px] text-gray-400 mb-2">工种结构</h4>
            <textarea className="w-full border-none bg-transparent py-2 text-[15px] focus:ring-0 min-h-[40px] p-0 resize-none text-gray-900" disabled={submitted}
                      value={formData.jobStructure} onChange={e=>setFormData({...formData, jobStructure:e.target.value})}></textarea>
            <div className="h-px bg-gray-100 w-full mt-1"></div>
         </div>

         {/* 补充说明 */}
         <div>
            <h4 className="text-[13px] text-gray-400 mb-2">补充说明</h4>
            <textarea className="w-full border-none bg-transparent py-2 text-[15px] focus:ring-0 min-h-[60px] p-0 resize-none text-gray-900" disabled={submitted}
                      value={formData.notes} onChange={e=>setFormData({...formData, notes:e.target.value})} placeholder="其他需要补充的信息..."></textarea>
            <div className="h-px bg-gray-100 w-full mt-1"></div>
         </div>
      </div>

      <div className="pt-8 flex items-center justify-end gap-3">
         <button className={`px-8 py-2.5 rounded bg-white border border-gray-200 font-medium text-sm transition-colors ${submitted ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50'}`} onClick={handleIgnore} disabled={submitted}>忽略</button>
         <button className={`px-8 py-2.5 rounded text-sm transition-colors ${submitted ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-[#f8b284] text-white hover:bg-[#f39c6b]'}`} onClick={handleSubmit} disabled={submitted}>提交信息</button>
      </div>
    </div>
  )
}

function PPTCard({ data, onSend }: { data?: any, onSend?: (text: string) => void }) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slides = data?.slides || [];

  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
      <div className="bg-[#D34125] px-4 py-2.5 flex justify-between items-center">
        <div className="flex items-center text-white font-bold text-sm">
          <Presentation size={18} className="mr-2" />
          {data?.title || "明道云标品营销方案PPT"} - PowerPoint
        </div>
        <div className="flex items-center space-x-2 text-white/90">
            <button className="flex items-center text-xs bg-black/10 hover:bg-black/20 px-3 py-1.5 rounded transition-colors"><Download size={14} className="mr-1"/> 导出为PPTX</button>
        </div>
      </div>
      
      {/* PPT Toolbar Mock */}
      <div className="bg-[#F3F2F1] border-b border-gray-300 px-4 py-2 flex items-center space-x-4 text-xs text-gray-700 font-medium">
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">文件</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer bg-white shadow-sm border border-gray-200">开始</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">插入</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">设计</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">切换</span>
        <span className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">动画</span>
      </div>

      <div className="flex h-[450px] bg-gray-100">
        {/* Thumbnails Sidebar */}
        <div className="w-48 bg-white border-r border-gray-200 overflow-y-auto p-2 space-y-2">
          {slides.map((slide: any, i: number) => (
            <div 
              key={i} 
              onClick={() => setActiveSlide(i)}
              className={`flex items-start p-1 rounded cursor-pointer ${activeSlide === i ? 'bg-orange-100/50' : 'hover:bg-gray-50'}`}
            >
              <div className="w-4 text-right text-[10px] text-gray-500 font-medium pt-1 pr-1">{i + 1}</div>
              <div className={`flex-1 aspect-video bg-white border shadow-sm rounded flex flex-col overflow-hidden ${activeSlide === i ? 'border-orange-500 ring-1 ring-orange-500' : 'border-gray-200'}`}>
                <div className="h-4 bg-gray-50 border-b border-gray-100 flex items-center px-2">
                  <div className="text-[6px] font-bold text-gray-800 truncate w-full">{slide.title}</div>
                </div>
                <div className="flex-1 p-1">
                   <div className="space-y-0.5">
                     {slide.bullets?.map((_: any, j: number) => (
                       <div key={j} className="flex items-center">
                         <div className="w-0.5 h-0.5 rounded-full bg-gray-400 mr-0.5"></div>
                         <div className="h-0.5 bg-gray-200 w-full rounded"></div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Main Slide View */}
        <div className="flex-1 flex items-center justify-center p-6 bg-[#E1E1E1] overflow-hidden">
          {slides[activeSlide] && (
            <div className="w-full max-w-3xl aspect-video bg-white shadow-lg flex flex-col relative overflow-hidden transform scale-95 origin-center">
              {/* Slide Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full -z-0 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-100 rounded-tr-full -z-0 opacity-50"></div>
              
              <div className="relative z-10 px-12 py-10 border-b-2 border-orange-500">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{slides[activeSlide].title}</h2>
              </div>
              
              <div className="relative z-10 flex-1 px-14 py-10 flex flex-col justify-center">
                {slides[activeSlide].title?.includes("打造健康组织") ? (
                   <div className="grid grid-cols-3 gap-6 w-full h-full pt-4">
                     <div className="bg-white/80 border border-orange-100 p-5 rounded-xl shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                           <TrendingUp size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2 relative z-10">行业亚健康挑战</h4>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                          {slides[activeSlide].bullets?.[0] || "互联网高强度工作环境下，颈椎病、失眠等亚健康问题频发，严重影响团队整体战斗力。"}
                        </p>
                     </div>
                     <div className="bg-white/80 border border-orange-100 p-5 rounded-xl shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                           <HeartPulse size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2 relative z-10">身心健康核心诉求</h4>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                          {slides[activeSlide].bullets?.[1] || "高管与骨干不仅需要基础医疗保障，更期望获得定制化、私密性强的高端健康管理服务。"}
                        </p>
                     </div>
                     <div className="bg-white/80 border border-orange-100 p-5 rounded-xl shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                           <ShieldCheck size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2 relative z-10">系统性方案必要性</h4>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                          {slides[activeSlide].bullets?.[2] || "亟需构建涵盖“预防-问诊-治疗-康复”的全周期健康管理闭环，提升员工安全感与归属感。"}
                        </p>
                     </div>
                     
                     <div className="col-span-3 mt-4 bg-orange-500 text-white rounded-lg p-4 flex items-center justify-between shadow-sm">
                       <div>
                         <h4 className="font-bold text-lg mb-1">企康综合解决方案</h4>
                         <p className="text-orange-100 text-sm">提供智能化、分层定制的数字化健康管理服务，构建企业级健康福利平台。</p>
                       </div>
                       <div className="flex space-x-4">
                         <div className="text-center px-4 border-r border-orange-400">
                           <div className="text-2xl font-bold">100+</div>
                           <div className="text-xs text-orange-200 mt-1">覆盖城市</div>
                         </div>
                         <div className="text-center px-4 border-r border-orange-400">
                           <div className="text-2xl font-bold">3000+</div>
                           <div className="text-xs text-orange-200 mt-1">合作医院</div>
                         </div>
                         <div className="text-center px-4">
                           <div className="text-2xl font-bold">7x24</div>
                           <div className="text-xs text-orange-200 mt-1">全天候响应</div>
                         </div>
                       </div>
                     </div>
                   </div>
                ) : (
                  <ul className="space-y-6">
                    {slides[activeSlide].bullets?.map((b: string, j: number) => (
                      <li key={j} className="flex items-start group">
                        <div className="w-2.5 h-2.5 rounded-sm bg-orange-500 mt-2 mr-4 flex-shrink-0 shadow-sm"></div>
                        <span className="text-xl text-gray-700 leading-relaxed font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Footer */}
              <div className="absolute bottom-4 left-10 right-10 flex justify-between text-xs text-gray-400 font-medium z-10">
                <span>平安企康 x 明道云</span>
                <span>{activeSlide + 1}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="bg-[#F3F2F1] border-t border-gray-300 px-4 py-1.5 flex justify-between items-center text-[11px] text-gray-600">
        <div>幻灯片 {activeSlide + 1} / {slides.length}</div>
        <div className="flex items-center space-x-3">
            <span>备注</span>
            <span>批注</span>
            <div className="flex items-center space-x-1">
                <span className="w-3 h-3 border border-gray-400 block"></span>
                <span className="w-3 h-3 border border-gray-400 grid grid-cols-2 gap-0.5 p-0.5"><div className="bg-gray-400"></div><div className="bg-gray-400"></div><div className="bg-gray-400"></div><div className="bg-gray-400"></div></span>
                <span className="w-3 h-3 border border-gray-400 flex items-end justify-center"><div className="w-2 h-1.5 bg-gray-400"></div></span>
            </div>
            <div className="flex items-center space-x-2 ml-4">
                <span className="w-4 h-0.5 bg-gray-400 block"></span>
                <span className="text-xs">68%</span>
                <span className="w-4 h-0.5 flex items-center justify-center relative"><div className="absolute w-full h-px bg-gray-400"></div><div className="absolute w-1 h-2 bg-gray-600"></div></span>
            </div>
        </div>
      </div>
    </div>
  );
}