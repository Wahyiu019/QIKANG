import React from 'react';
import { Search, Hash, Bot, FileText, FileCheck, BarChart2, Users, PlusSquare, LayoutGrid, Clock, FolderKanban, BookOpen, Clock3, ListTree } from 'lucide-react';

export function ChatList({ 
  activeChat, 
  onChatChange, 
  showMaotaiChat,
  showPrepGroup,
  showMeetingChats,
  showBidChat,
  showMonitorChat,
  activeUniversalTab,
  onUniversalTabChange,
  hasLeads
}: { 
  activeChat: string, 
  onChatChange: (chat: string) => void, 
  showMaotaiChat?: boolean,
  showPrepGroup?: boolean,
  showMeetingChats?: boolean,
  showBidChat?: boolean,
  showMonitorChat?: boolean,
  activeUniversalTab?: string,
  onUniversalTabChange?: (tab: string) => void,
  hasLeads?: boolean
}) {
  return (
    <div className="w-64 h-full bg-[#f8f9fa] border-r border-gray-200 flex flex-col flex-shrink-0 z-10 font-sans">
      <div className="p-4 flex flex-col justify-center border-b border-gray-100">
        <h2 className="font-bold text-lg text-gray-800 flex items-center">
          <span className="bg-orange-500 text-white w-6 h-6 rounded-md flex items-center justify-center mr-2 text-xs">智</span>
          智能运营
        </h2>
      </div>
      
      <div className="p-2 space-y-0.5 mt-2">
        <MenuItem 
          icon={<PlusSquare size={18} />} 
          label="新建会话" 
          active={activeUniversalTab === 'new_chat'} 
          onClick={() => onUniversalTabChange?.('new_chat')} 
        />
        <MenuItem 
          icon={<Users size={18} />} 
          label="企康专家团" 
          active={activeUniversalTab === 'business_expert'} 
          onClick={() => onUniversalTabChange?.('business_expert')} 
        />
        <MenuItem 
          icon={<LayoutGrid size={18} />} 
          label="技能市场" 
          active={false} 
          onClick={() => {}} 
        />
        <MenuItem 
          icon={<ListTree size={18} />} 
          label="技能清单" 
          active={activeUniversalTab === 'skills_list'} 
          onClick={() => onUniversalTabChange?.('skills_list')} 
        />
        <MenuItem 
          icon={<Clock size={18} />} 
          label="定时任务" 
          active={false} 
          onClick={() => {}} 
          badge={true} 
        />
        <MenuItem 
          icon={<FolderKanban size={18} />} 
          label="工作空间" 
          active={false} 
          onClick={() => {}} 
        />
        <MenuItem 
          icon={<BookOpen size={18} />} 
          label="平安知识库" 
          active={false} 
          onClick={() => {}} 
        />
      </div>

      <div className="mt-4 px-4 py-2 flex items-center text-sm font-bold text-gray-800">
        <Clock3 size={16} className="text-gray-500 mr-2" />
        历史会话
      </div>

      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        <div className="px-2 py-1 text-xs text-gray-400 font-medium mt-2">今天</div>
        
        {showMonitorChat && (
          <HistoryItem 
            title="【内部】某省烟草集团..."
            active={activeUniversalTab === 'history' && activeChat === 'maotai_bid'}
            onClick={() => { onUniversalTabChange?.('history'); onChatChange('maotai_bid'); }}
          />
        )}
        
        {showBidChat && !showMonitorChat && (
          <HistoryItem 
            title="【内部】某省烟草集团..."
            active={activeUniversalTab === 'history' && activeChat === 'maotai_bid'}
            onClick={() => { onUniversalTabChange?.('history'); onChatChange('maotai_bid'); }}
          />
        )}
        
        {showMeetingChats && !showMonitorChat && !showBidChat && (
          <HistoryItem 
            title="黄志峰 (客户经理)"
            active={activeUniversalTab === 'history' && activeChat === 'linpeixin'}
            onClick={() => { onUniversalTabChange?.('history'); onChatChange('linpeixin'); }}
            hasUpdate={true}
          />
        )}
        
        {showMaotaiChat && (
          <HistoryItem 
            title="某省烟草集团 - AI助手"
            active={activeUniversalTab === 'history' && activeChat === 'maotai'}
            onClick={() => { onUniversalTabChange?.('history'); onChatChange('maotai'); }}
            hasUpdate={true}
          />
        )}

        <HistoryItem 
          title="行业动态和政策更新"
          active={activeUniversalTab === 'history' && activeChat === 'industry'}
          onClick={() => { onUniversalTabChange?.('history'); onChatChange('industry'); }}
          hasUpdate={true}
        />
        <HistoryItem 
          title="车险续保客户分析"
          active={activeUniversalTab === 'history' && activeChat === 'insurance'}
          onClick={() => { onUniversalTabChange?.('history'); onChatChange('insurance'); }}
        />
        
        <div className="px-2 py-1 text-xs text-gray-400 font-medium mt-4">本周</div>
        <HistoryItem 
          title="团队成员月度考核"
          active={activeUniversalTab === 'history' && activeChat === 'team_eval'}
          onClick={() => { onUniversalTabChange?.('history'); onChatChange('team_eval'); }}
        />
        <HistoryItem 
          title="人员考核结果和改进建议"
          active={activeUniversalTab === 'history' && activeChat === 'personnel_eval'}
          onClick={() => { onUniversalTabChange?.('history'); onChatChange('personnel_eval'); }}
        />
        
        <div className="px-2 py-1 text-xs text-gray-400 font-medium mt-4">更早</div>
        <HistoryItem 
          title="团队成员月度考核 (4月)"
          active={activeUniversalTab === 'history' && activeChat === 'team_eval_old'}
          onClick={() => { onUniversalTabChange?.('history'); onChatChange('team_eval_old'); }}
        />
        <HistoryItem 
          title="人员考核结果和改进建议 (4月)"
          active={activeUniversalTab === 'history' && activeChat === 'personnel_eval_old'}
          onClick={() => { onUniversalTabChange?.('history'); onChatChange('personnel_eval_old'); }}
        />
      </div>
    </div>
  );
}

function MenuItem({ icon, label, active, badge, onClick }: any) {
  return (
    <div 
      onClick={onClick} 
      className={`flex flex-col relative px-2 cursor-pointer group`}
    >
      <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className={`flex items-center px-4 py-2.5 rounded-md transition-colors ${active ? 'bg-gray-200/60 font-medium text-gray-900 border border-gray-200' : 'text-gray-600 hover:bg-gray-100'}`}>
        <div className={`mr-3 ${active ? 'text-gray-800' : 'text-gray-500'}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0 text-[13px]">{label}</div>
        {badge && <div className="w-1.5 h-1.5 rounded-full bg-red-500 ml-2"></div>}
      </div>
    </div>
  );
}

function HistoryItem({ title, active, hasUpdate, onClick }: any) {
  return (
    <div 
      onClick={onClick} 
      className={`flex items-center px-4 py-2 cursor-pointer rounded-md transition-colors ${active ? 'bg-gray-200/60 font-medium text-gray-900 border border-gray-200' : 'text-gray-600 hover:bg-gray-100'}`}
    >
      <div className="flex-1 min-w-0 truncate text-[13px] ml-7 relative">
        <span className="truncate">{title}</span>
        {hasUpdate && <div className="absolute -left-3 top-1.5 w-1 h-1 rounded-full bg-red-500"></div>}
      </div>
    </div>
  );
}

