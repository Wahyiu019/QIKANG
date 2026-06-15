const fs = require('fs');

const newContent = `
import React, { useState } from 'react';
import { Mail, Briefcase, FileText, Layout, Users, ClipboardList, PenTool, Bot, Presentation, Search, Shield, MessageCircle, BookOpen, HelpCircle, ListTree, Copy, FileSignature, CheckCircle, FileCheck, BarChart2, PlusSquare, LayoutGrid, Flame } from 'lucide-react';

const SKILLS = [
  { category: '办公', title: '邮件查询', desc: '快速查找并总结相关邮件', tags: ['办公', '效率'], icon: <Mail size={24} className="text-orange-500"/> },
  { category: '效率', title: '定会约会', desc: '智能分析日程并自动预约会议', tags: ['内容', '效率'], icon: <Briefcase size={24} className="text-orange-500"/>, active: true },
  { category: '信息', title: '消息查询', desc: '跨平台消息检索及提炼', tags: ['文件', '分析'], icon: <Bot size={24} className="text-orange-500"/> },
  { category: '办公', title: '任务待办提取及管理', desc: '自动从群聊中提取待办事项', tags: ['标签'], icon: <ClipboardList size={24} className="text-orange-500"/> },
  { category: '创作', title: '会议纪要生成', desc: '语音实时转写及结构化纪要生成', tags: ['标签'], icon: <FileText size={24} className="text-orange-500"/> },
  { category: '创作', title: '访谈及报告生成', desc: '结构化产出访谈记录', tags: ['标签'], icon: <PenTool size={24} className="text-orange-500"/> },
  { category: '研究', title: '深度研究报告', desc: '多维度收集数据并形成深度研报', tags: ['标签'], icon: <Layout size={24} className="text-orange-500"/> },
  { category: '总结', title: '个人工作总结', desc: '月度/年度个人绩效成果汇总', tags: ['标签'], icon: <Users size={24} className="text-orange-500"/> },
  { category: '创作', title: 'PPT生成', desc: '一键生成汇报演示文稿', tags: ['标签'], icon: <Presentation size={24} className="text-orange-500"/> },
  
  // New Skills
  { category: '数据', title: '客户信息调研', desc: '全方位的客户背景及数据洞察', tags: ['分析', '客户'], icon: <Search size={24} className="text-orange-500"/> },
  { category: '文档', title: '合规分析', desc: '针对材料的合规风险评估', tags: ['合规', '风控'], icon: <Shield size={24} className="text-orange-500"/> },
  { category: '人事', title: '关键决策人分析', desc: '核心人物及高管关系网剖析', tags: ['高管', '人物'], icon: <Users size={24} className="text-orange-500"/> },
  { category: '数据', title: '历史合作分析', desc: '总结过往项目的合作情况及历史数据', tags: ['历史', '分析'], icon: <BarChart2 size={24} className="text-orange-500"/> },
  { category: '服务', title: '拜访建议话术', desc: '根据客户情况生成的针对性话术', tags: ['沟通', '销售'], icon: <MessageCircle size={24} className="text-orange-500"/> },
  { category: '文档', title: '招标文件解读', desc: '快速提取并解读招标文件核心要素', tags: ['招投标', '文档'], icon: <BookOpen size={24} className="text-orange-500"/> },
  { category: '文档', title: '招投标问答', desc: '基于招投标素材的智能问答', tags: ['问答', '知识库'], icon: <HelpCircle size={24} className="text-orange-500"/> },
  { category: '文档', title: '生成目录模板', desc: '自动生成结构化、规范化的标书目录', tags: ['模板', '结构'], icon: <ListTree size={24} className="text-orange-500"/> },
  { category: '文档', title: '历史标书复用', desc: '智能匹配并复用以往的高质量标书', tags: ['复用', '标书'], icon: <Copy size={24} className="text-orange-500"/> },
  { category: '创作', title: '标书生成', desc: '一键智能拼装与生成标准化投标书', tags: ['自动生成', '投标'], icon: <FileSignature size={24} className="text-orange-500"/> },
  { category: '文档', title: '标书质检', desc: '全方位的标书格式及内容质量检测', tags: ['校验', '审查'], icon: <CheckCircle size={24} className="text-orange-500"/> },
  { category: '文档', title: '材料审核', desc: '多维材料的交叉审核及内容校验', tags: ['审核', '复核'], icon: <FileCheck size={24} className="text-orange-500"/> },
];

const CATEGORIES = ['全部', '办公', '创作', '文档', '数据', '市场', '服务', '人事', '财务', '培训'];

export function Workspace() {
  const [activeCategory, setActiveCategory] = useState('全部');

  return (
    <div className="flex-1 bg-[#F8F9FA] h-full flex flex-col items-center pt-8 overflow-y-auto">
      <div className="w-full max-w-5xl px-8 pb-12">
        
        {/* 新建会话 */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <PlusSquare size={20} className="text-orange-500 mr-2" />
            新建会话
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 max-w-3xl flex flex-col items-center justify-center text-center hover:border-orange-300 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Bot size={24} className="text-orange-500" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">与万能助手开始对话</h3>
            <p className="text-sm text-gray-500">点击此处或使用左侧菜单，新建一个智能会话</p>
          </div>
        </div>

        {/* 技能市场 */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <LayoutGrid size={20} className="text-orange-500 mr-2" />
            技能市场推荐
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg p-4 text-white shadow-sm cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute right-[-10px] top-[-10px] opacity-20"><Flame size={80} /></div>
              <h3 className="font-bold mb-1 relative z-10">最热技能</h3>
              <p className="text-xs text-orange-100 relative z-10 mb-3">大家都在用的热门技能</p>
              <div className="bg-black/20 rounded p-2 text-xs backdrop-blur-sm relative z-10 font-bold w-max">
                标书智能生成工具
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-sm hover:border-orange-300 transition-all flex flex-col items-center justify-center text-center">
              <FileSignature size={28} className="text-amber-500 mb-2" />
              <h3 className="font-bold text-gray-800 text-sm">招标助手</h3>
              <p className="text-xs text-gray-500 mt-1">一键生成投标书</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-sm hover:border-orange-300 transition-all flex flex-col items-center justify-center text-center">
              <Presentation size={28} className="text-blue-500 mb-2" />
              <h3 className="font-bold text-gray-800 text-sm">方案包装大师</h3>
              <p className="text-xs text-gray-500 mt-1">快速产出汇报文档</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-sm hover:border-orange-300 transition-all flex flex-col items-center justify-center text-center">
              <Shield size={28} className="text-emerald-500 mb-2" />
              <h3 className="font-bold text-gray-800 text-sm">合规审查器</h3>
              <p className="text-xs text-gray-500 mt-1">自动识别风险内容</p>
            </div>
          </div>
        </div>

        {/* 技能清单 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <ListTree size={20} className="text-orange-500 mr-2" />
            技能清单
          </h2>
          
          <div className="flex space-x-2 mb-6 border-b border-gray-200 pb-2">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={\`px-4 py-1.5 rounded-full text-sm font-medium transition-colors \${activeCategory === cat ? 'bg-white shadow border border-gray-200 text-gray-800' : 'text-gray-500 hover:text-gray-800'}\`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className={\`bg-white border rounded-lg p-4 cursor-pointer hover:shadow-sm transition-all \${skill.active ? 'border-orange-400 bg-orange-50/20 shadow-sm' : 'border-gray-200 hover:border-orange-200'}\`}>
                <div className="flex items-start">
                  <div className="mr-3">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{skill.title}</h3>
                    <p className="text-[11px] text-gray-500 mb-3 line-clamp-2">{skill.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {skill.tags.map((tag, ti) => (
                        <span key={ti} className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('src/components/Workspace.tsx', newContent);
console.log('Saved');
