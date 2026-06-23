export type MessageType = 'qual_perf_match_card' | 'bid_doc_interpretation_card' | 'quote_auth_center' | 'product_match_assessment' | 'project_plan_generation' | 'expert_consultation_report' | 'doc_risk_opportunity_report' | 'doc_interpretation_report' | 'doc_parsing_progress' | 'doc_parsing_result' | 'text' | 'lead_card' | 'report_card' | 'strategy_card' | 'prep_card' | 'meeting_card' | 'bid_card' | 'monitor_card' | 'reasoning' | 'lead_card_list' | 'lead_execution' | 'meeting_in_progress' | 'compliance_card' | 'survey_report' | 'decision_makers_report' | 'history_cooperation_report' | 'visit_pitch_report' | 'compliance_analysis_report' | 'bidding_document_analysis_report' | 'bid_generation_report' | 'bid_inspection_report' | 'material_review_report' | 'standard_product_plan_report' | 'case_highlight_report' | 'competitor_analysis_report' | 'lenovo_panoramic_analysis' | 'citic_competitor_analysis' | 'lenovo_tech_bid_advantage' | 'basic_info_card' | 'inquiry_card' | 'supplementary_info_card' | 'package_option_card' | 'basic_info_card_form';

export interface Message {
  id: string;
  sender: 'user' | 'bot' | 'system' | 'xiaojiao' | 'huangzhifeng' | 'liangzhenning' | 'lianghuayao' | string;
  type: MessageType | string;
  content: string;
  timestamp: Date;
  data?: any;
  disableTyping?: boolean;
}
