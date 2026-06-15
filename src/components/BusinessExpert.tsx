import React from 'react';
import { Users, FileText, BarChart2, Shield, Search, Copy, CheckCircle, MessagesSquare, Target } from 'lucide-react';

const EXPERT_MAPPINGS = [
  {
    expert: '客户洞察专家',
    img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Insight&backgroundColor=0ea5e9&eyes=happy&mouth=smile&accessories=prescription02&clothing=blazerAndShirt',
    skills: ['客户信息调研', '关键决策人分析', '历史合作分析', '拜访建议话术'],
    desc: '精准剖析客户背景与需求，全面掌握决策人图谱及历史合作脉络。'
  },
  {
    expert: '营销方案专家',
    img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Marketing&backgroundColor=f97316&eyes=happy&mouth=smile&accessories=sunglasses&clothing=blazerAndSweater',
    skills: ['三段式营销材料', '标准产品推荐', '明星方案匹配', '案例亮点提炼', '竞品多维对标'],
    desc: '生成高度匹配客户痛点的标准解决方案，并输出硬核竞品对比与案例优势。'
  },
  {
    expert: '标书撰写专家',
    img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Bidding&backgroundColor=8b5cf6&eyes=happy&mouth=smile&clothing=collarAndSweater',
    skills: ['招标文件解读', '智能标书生成', '标书质量检查', '述标材料生成'],
    desc: '全流程辅助招投标素材解析、策略生成与标书自动化装配、质检。'
  },
  {
    expert: '企康业务合规专家',
    img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Compliance&backgroundColor=10b981&eyes=happy&mouth=smile&accessories=round&clothing=blazerAndShirt',
    skills: ['合规分析'],
    desc: '评估业务及材料的合规风险，构建企业级信任屏障。'
  },
  {
    expert: '业绩追踪助手',
    img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Tracker&backgroundColor=f43f5e&eyes=happy&mouth=twinkle&clothing=hoodie',
    skills: ['商机认领', '客户拜访记录', '任务追踪', '项目管理'],
    desc: '实时全景透视个人及团队业绩跟进进度，推动目标达成。'
  },
  {
    expert: '运营管理专家',
    img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Operation&backgroundColor=64748b&eyes=happy&mouth=smile&accessories=prescription01&clothing=shirtVNeck',
    skills: ['报销审核发起', '报销材料审核', '复核校验'],
    desc: '提供全流程、精细化的业务与材料运营审核服务。'
  }
];

export function BusinessExpert({ onSelectExpert }: { onSelectExpert?: (expertName: string) => void }) {
  return (
    <div className="flex-1 bg-[#F8F9FA] h-full flex flex-col items-center pt-8 overflow-y-auto">
      <div className="w-full max-w-5xl px-8 pb-12">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
            <Users size={20} className="text-orange-500 mr-2" />
            企康专家团
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERT_MAPPINGS.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => onSelectExpert?.(item.expert)}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-orange-300 cursor-pointer transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="bg-gradient-to-r from-orange-50/50 to-white p-5 border-b border-gray-100 flex items-start">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden shrink-0 mr-4 group-hover:scale-105 transition-transform">
                      <img src={item.img} alt={item.expert} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{item.expert}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">拥有技能与能力项</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 hover:border-orange-200 text-xs font-medium rounded-lg flex items-center transition-colors">
                          <Target size={12} className="text-orange-400 mr-1.5" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="px-5 pb-5 pt-1.5 flex justify-end">
                  <button className="text-xs font-semibold text-orange-600 group-hover:text-white bg-orange-50 group-hover:bg-orange-500 border border-orange-100 group-hover:border-orange-500 px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-sm">
                    <MessagesSquare size={14} />
                    立即召唤
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
