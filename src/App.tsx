/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatList } from './components/ChatList';
import { ChatWindow } from './components/ChatWindow';
import { Workspace } from './components/Workspace';
import { BusinessExpert } from './components/BusinessExpert';
import { Message } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('universal');
  const [activeUniversalTab, setActiveUniversalTab] = useState('business_expert');
  const [activeChat, setActiveChat] = useState('ai_assistant');
  const [selectedExpertName, setSelectedExpertName] = useState<string | null>(null);

  const handleSelectExpert = (expertName: string) => {
    setSelectedExpertName(expertName);
    setActiveUniversalTab('new_chat');
    setActiveChat('ai_assistant');
    
    const greetings: Record<string, string> = {
      '客户洞察专家': '您好！我是您的**客户洞察专家**。我已经准备好为您深度分析客户背景、剖析关键决策人图谱并提供拜访建言。请告诉我要跟进哪个客户，或者输入“分析云南烟草”开始。',
      '营销方案专家': '您好！我是您的**营销方案专家**。我已加载最新标品方案与差异化控标级输出逻辑，可为您智能提炼产品亮点、生成竞品对比或定制营销文案。请问您需要针对哪个客户项目生成方案？',
      '标书撰写专家': '您好！我是您的**标书撰写专家**。我可以全流程协助您进行招投标素材解析、策略生成、风险对冲与标书自动化智能装配质检。您可以上传招标文件或直接说明您的投标项目需求。',
      '企康业务合规专家': '您好！我是您的**企康业务合规专家**。我可以从隐私合规、国密法、金融级等保及行业政策等方面，对您的业务材料进行严密的合规漏洞审计并提示隐藏风险点。请问有哪些条款或材料需要我为您把关？'
    };
    
    const msgText = greetings[expertName] || `您好！我是您的${expertName}。今天有什么我可以帮您的？`;
    
    setGlobalMessages(prev => ({
      ...prev,
      ai_assistant: [
        {
          id: Date.now().toString(),
          sender: 'bot',
          type: 'text',
          content: msgText,
          timestamp: new Date()
        }
      ]
    }));
  };
  const [showMaotaiChat, setShowMaotaiChat] = useState(false);
  const [showPrepGroup, setShowPrepGroup] = useState(false);
  const [showMeetingChats, setShowMeetingChats] = useState(false);
  const [showBidChat, setShowBidChat] = useState(false);
  const [showMonitorChat, setShowMonitorChat] = useState(false);
  const [activeStage, setActiveStage] = useState('领商机');

  const [globalMessages, setGlobalMessages] = useState<Record<string, Message[]>>({
    ai_assistant: [
      {
        id: '1',
        sender: 'bot',
        type: 'text',
        content: '您好！我是您的企康助手。今天有什么我可以帮您的？',
        timestamp: new Date()
      }
    ],
    maotai: [
      {
        id: 'sys-1',
        sender: 'system',
        type: 'text',
        content: '已创建“云南烟草集团 - AI助手”',
        timestamp: new Date()
      },
      {
        id: 'sys-2',
        sender: 'system',
        type: 'text',
        content: '已将客户经理黄志锋拉进群',
        timestamp: new Date()
      }
    ],
    maotai_prep: [
      {
        id: 'sys-1',
        sender: 'system',
        type: 'text',
        content: '已创建“云南烟草健康管理推荐方案筹备组”',
        timestamp: new Date()
      },
      {
        id: 'sys-2',
        sender: 'system',
        type: 'text',
        content: '已将肖姣 (产品经理)、梁镇宁、梁华耀拉进群',
        timestamp: new Date()
      }
    ]
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'universal') {
      // Don't auto reset the universal tab state
      if (activeUniversalTab === 'history') {
        setActiveChat('ai_assistant');
      }
    } else if (tab === 'messages') {
      if (activeChat === 'ai_assistant') {
        setActiveChat(showMaotaiChat ? 'maotai' : 'ai_assistant');
      }
    }
  };

  const handleChatChange = (chat: string) => {
    setActiveChat(chat);
    if (chat === 'ai_assistant') {
      setActiveStage('领商机');
    } else {
      if (chat === 'maotai_bid') {
        setActiveStage('招投标');
        // Add initial message to maotai_bid chat if it's empty
        setGlobalMessages(prev => {
          if (!prev['maotai_bid'] || prev['maotai_bid'].length === 0) {
            const initialMsg1: Message = {
              id: Date.now().toString(),
              sender: 'bot',
              type: 'text',
              content: '这是云南烟草集团项目的招投标交流群，请大家在群里交流招投标事项。',
              timestamp: new Date(Date.now() - 2000)
            };
            const initialMsg2: Message = {
              id: (Date.now() + 1).toString(),
              sender: 'xiaojiao',
              type: 'text',
              content: '@AI助手 请根据4.15日的招投标节点，倒排时间生成招投标任务计划。\n任务一：黄志锋负责提供招标方输入内容，包括招标文件、技术规范书 / 需求说明书、商务条款、评分标准、项目背景资料。\n任务二：梁镇宁负责提供投标方输入，包括公司资质材料、过往项目经验、产品资料 / 解决方案白皮书、成本测算、合作资源。\n任务三：梁华耀负责分析与策略输入，包括竞争对手分析、中标策略、风险评估。\n任务四：肖姣负责统筹商务标书和技术标书撰写。\n任务五：梁镇宁负责标书合规性自检与用印流程发起。\n任务六：黄志峰负责最终标书封标。',
              timestamp: new Date(Date.now() - 1000)
            };
            const initialMsg3: Message = {
              id: (Date.now() + 2).toString(),
              sender: 'bot',
              type: 'bid_card',
              content: '好的，已为您生成招投标任务计划：',
              timestamp: new Date(),
              data: {
                title: '招标助手 - 云南烟草投标材料筹备',
                deadline: '2026-04-15',
                remindersEnabled: true,
                schedule: [
                  { task: '提供招标方输入内容（招标文件、技术规范书 / 需求说明书、商务条款、评分标准、项目背景资料）', date: '2026-03-28', owner: '黄志锋', status: 'pending' },
                  { task: '提供投标方输入（公司资质材料、过往项目经验、产品资料 / 解决方案白皮书、成本测算、合作资源）', date: '2026-03-30', owner: '梁镇宁', status: 'pending' },
                  { task: '分析与策略输入（竞争对手分析、中标策略、风险评估）', date: '2026-04-02', owner: '梁华耀', status: 'pending' },
                  { task: '统筹商务标书和技术标书撰写', date: '2026-04-05', owner: '肖姣', status: 'pending' },
                  { task: '标书合规性自检与用印流程发起', date: '2026-04-10', owner: '梁镇宁', status: 'pending' },
                  { task: '最终标书封标', date: '2026-04-14', owner: '黄志锋', status: 'pending' }
                ],
                documents: [],
                nextStep: '请各位负责人按时提交相关材料。'
              }
            };
            return {
              ...prev,
              maotai_bid: [initialMsg1, initialMsg2, initialMsg3]
            };
          }
          return prev;
        });
      }
    }
  };

  const addMessageToChat = (chatId: string, message: Message | ((prev: Message[]) => Message[])) => {
    setGlobalMessages(prev => {
      const currentMessages = prev[chatId] || [];
      const updatedMessages = typeof message === 'function' ? message(currentMessages) : [...currentMessages, message];
      return {
        ...prev,
        [chatId]: updatedMessages
      };
    });
  };

  const updateMessageInChat = (chatId: string, messageId: string, updateFn: (msg: Message) => Message) => {
    setGlobalMessages(prev => {
      const currentMessages = prev[chatId] || [];
      return {
        ...prev,
        [chatId]: currentMessages.map(m => m.id === messageId ? updateFn(m) : m)
      };
    });
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white overflow-hidden font-sans text-gray-800">
      {/* Top Bar */}
      <div className="w-full h-14 bg-orange-500 flex items-center px-4 flex-shrink-0 z-30 shadow-sm">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-500 font-bold text-xs mr-3">
          快乐
        </div>
        <span className="text-white font-bold text-lg tracking-wide">快乐平安</span>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
        {activeTab === 'universal' && (
          <ChatList 
            activeUniversalTab={activeUniversalTab}
            onUniversalTabChange={(tab: string) => {
              setActiveUniversalTab(tab);
              if (tab === 'new_chat') {
                setActiveChat('ai_assistant');
              }
            }}
            activeChat={activeChat} 
            onChatChange={handleChatChange} 
            showMaotaiChat={showMaotaiChat}
            showPrepGroup={showPrepGroup}
            showMeetingChats={showMeetingChats}
            showBidChat={showBidChat}
            showMonitorChat={showMonitorChat}
            hasLeads={globalMessages['ai_assistant']?.some(m => m.type === 'lead_card_list')}
          />
        )}
        {activeTab === 'universal' && (activeUniversalTab === 'workspace' || activeUniversalTab === 'skills_list') ? (
          <Workspace />
        ) : activeTab === 'universal' && activeUniversalTab === 'business_expert' ? (
          <BusinessExpert onSelectExpert={handleSelectExpert} />
        ) : (
          <ChatWindow 
            activeChat={activeChat} 
            activeStage={activeStage}
            onChatChange={handleChatChange} 
            onLeadClaimed={() => setShowMaotaiChat(true)}
            onPrepCompleted={() => { setShowPrepGroup(true); setActiveStage('做准备'); }}
            onMeetingCompleted={() => { setShowMeetingChats(true); setActiveStage('去拜访'); }}
            onBidCompleted={() => { setShowBidChat(true); setActiveStage('招投标'); }}
            onMonitorCompleted={() => { setShowMonitorChat(true); setActiveStage('跟客户'); }}
            onStageChange={setActiveStage}
            showMeetingChats={showMeetingChats}
            showMonitorChat={showMonitorChat}
            globalMessages={globalMessages}
            setGlobalMessages={setGlobalMessages}
            addMessageToChat={addMessageToChat}
            updateMessageInChat={updateMessageInChat}
            selectedExpertName={selectedExpertName}
          />
        )}
      </div>
    </div>
  );
}


