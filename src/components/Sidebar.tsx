import React from 'react';
import { Mail, MessageSquare, Calendar, LayoutGrid, FileText, PenTool, Hash, Bot, Sparkles } from 'lucide-react';

export function Sidebar({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) {
  return (
    <div className="w-16 h-full bg-[#F8F9FA] border-r border-gray-200 flex flex-col items-center py-4 justify-between flex-shrink-0 z-20">
      <div className="flex flex-col items-center space-y-6 w-full">
        <div className="flex flex-col space-y-2 w-full">
          <NavItem icon={<Mail size={20} />} label="邮件" active={activeTab === 'mail'} onClick={() => onTabChange('mail')} />
          <NavItem icon={<MessageSquare size={20} />} label="消息" badge={5} active={activeTab === 'messages'} onClick={() => onTabChange('messages')} />
          <NavItem icon={<Calendar size={20} />} label="日程" active={activeTab === 'calendar'} onClick={() => onTabChange('calendar')} />
          <NavItem icon={<LayoutGrid size={20} />} label="工作台" active={activeTab === 'workbench'} onClick={() => onTabChange('workbench')} />
          <NavItem icon={<FileText size={20} />} label="文档" active={activeTab === 'docs'} onClick={() => onTabChange('docs')} />
          <NavItem icon={<PenTool size={20} />} label="签报" active={activeTab === 'sign'} onClick={() => onTabChange('sign')} />
          <NavItem icon={<Hash size={20} />} label="协作中心" active={activeTab === 'collab'} onClick={() => onTabChange('collab')} />
          <NavItem icon={<Sparkles size={20} />} label="智能运营" badge={3} active={activeTab === 'universal'} onClick={() => onTabChange('universal')} />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 w-full">
        <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm mb-2 overflow-hidden">
          <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, badge, onClick }: { icon: React.ReactNode; label: string; active?: boolean; badge?: number; onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`w-full flex flex-col items-center justify-center py-2.5 relative group transition-colors ${active ? 'text-orange-500 bg-orange-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}>
      {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />}
      <div className="relative">
        {icon}
        {badge && (
          <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[9px] font-bold px-1 rounded-full min-w-[14px] text-center border border-white">
            {badge}
          </span>
        )}
      </div>
      <span className="text-[10px] mt-1 scale-90">{label}</span>
    </button>
  );
}

