const fs = require('fs');
let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// The pattern to replace is the products array.
const oldProductsStr1 = `products: [
                        { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年" },
                        { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年" },
                        { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年" }
                      ]`;

const newProductsStr1 = `products: [
                        { name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\\n门诊预约协助服务*1次\\n专人1V1陪诊服务*1次\\n名医视频问诊*1次\\n健康护航大礼包*1次\\n购药优惠券*12次\\n福安好物专区*不限次" },
                        { name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\\n普通陪诊: 29省234市\\n全国住院安排协助: 31省322市" },
                        { name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\\n幽门螺旋杆菌检测1份\\n肺结节居家检测服务1份" }
                      ]`;

const oldProductsStr2 = `products: [
                        { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年" },
                        { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 300).toLocaleString() + "元", unit: "人/年" },
                        { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年" }
                      ]`;
                      
const newProductsStr2 = `products: [
                        { name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\\n家庭医生音视频咨询30分钟\\n专科医生实时音视频咨询2次\\n名医三方音视频咨询1年无限次\\n名医门诊预约协助3次\\n名医住院安排协助1次\\n健康定制好礼1次\\n健康送到家, 每季度一次\\n专属小秘书7*12线上服务" },
                        { name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 300).toLocaleString() + "元", unit: "人/年", featuresDetail: "名医门诊/住院安排: 30省90+市\\n家庭医生音视频咨询(主治级)*30分钟\\n门诊预约协助(T+7)*2次\\n检查安排协助(六城)*1次\\n住院专属护工服务(普通护工)*3次\\n全国住院安排协助*1次\\n基础照护上门服务*3次\\n普通陪诊人员上门接送(双程)*1次" },
                        { name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\\n普通陪诊*1次\\n家庭医生图文问诊-主治及以下 (年度会员)\\n企业健康室 (升级版)\\n全额抵扣券-小药箱\\n心理健康测评 不限次\\n心理图文咨询 2次\\n心理电话咨询 1次" }
                      ]`;

const oldProductsStr3 = `products: [
                        { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 2000).toLocaleString() + "元", unit: "人/年" },
                        { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年" },
                        { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次" }
                      ]`;

const newProductsStr3 = `products: [
                        { name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 2000).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-主治及以下(年度会员)\\n企业健康室 (基础版)\\n门诊预约协助(T+4)*3次\\n普通陪诊*3次\\n智享洁牙服务*1次\\n药品券(满100减50)*6张\\n就医服务等待期30天" },
                        { name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助(T+4): 31省321市\\n普通陪诊: 29省234市\\n智享洁牙: 31省300+市\\n心理健康测评 不限次\\n心理图文咨询 2次\\n心理电话咨询 1次\\n保健医生+心理图文咨询*20次\\n心理电话咨询(外部)*3次" },
                        { name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\\nAED专题讲座*2小时\\n平安家医图文问诊*不限次\\n门诊预约协助服务*1次\\n住院协助服务*1次\\n名医视频问诊*3次\\n专人1V1陪诊服务*3次" }
                      ]`;

// Do replacement. But to be safe with indentation, we might want to just regex replace it.
// Let's use a simpler regex that matches the product name and replaces the line.

code = code.replace(/\{ name: "高管年度深度体检", target: "高层员工", price: \(3000 \+ pkgRetryCount \* 200\)\.toLocaleString\(\) \+ "元", unit: "人\/年" \}/g, '{ name: "高管年度深度体检", target: "高层员工", price: (3000 + pkgRetryCount * 200).toLocaleString() + "元", unit: "人/年", featuresDetail: "平安家医图文问诊*不限次\\n门诊预约协助服务*1次\\n专人1V1陪诊服务*1次\\n名医视频问诊*1次\\n健康护航大礼包*1次\\n购药优惠券*12次\\n福安好物专区*不限次" }');

code = code.replace(/\{ name: "核心骨干绿色就医", target: "核心员工", price: \(1000 \+ pkgRetryCount \* 100\)\.toLocaleString\(\) \+ "元", unit: "人\/年" \}/g, '{ name: "核心骨干绿色就医", target: "核心员工", price: (1000 + pkgRetryCount * 100).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助 (T+4): 31省321市\\n普通陪诊: 29省234市\\n全国住院安排协助: 31省322市" }');

code = code.replace(/\{ name: "入职体检套餐（基础）", target: "基层员工", price: \(150 \+ pkgRetryCount \* 20\)\.toLocaleString\(\) \+ "元", unit: "人\/年" \}/g, '{ name: "入职体检套餐（基础）", target: "基层员工", price: (150 + pkgRetryCount * 20).toLocaleString() + "元", unit: "人/年", featuresDetail: "专科医生图文问诊5次\\n幽门螺旋杆菌检测1份\\n肺结节居家检测服务1份" }');

code = code.replace(/\{ name: "高端私立医院VIP体检", target: "高层员工", price: \(6000 \+ pkgRetryCount \* 500\)\.toLocaleString\(\) \+ "元", unit: "人\/年" \}/g, '{ name: "高端私立医院VIP体检", target: "高层员工", price: (6000 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-副高及以上(年度会员)\\n家庭医生音视频咨询30分钟\\n专科医生实时音视频咨询2次\\n名医三方音视频咨询1年无限次\\n名医门诊预约协助3次\\n名医住院安排协助1次\\n健康定制好礼1次\\n健康送到家, 每季度一次\\n专属小秘书7*12线上服务" }');

code = code.replace(/\{ name: "三甲医院专家特需门诊", target: "核心员工", price: \(2000 \+ pkgRetryCount \* 300\)\.toLocaleString\(\) \+ "元", unit: "人\/年" \}/g, '{ name: "三甲医院专家特需门诊", target: "核心员工", price: (2000 + pkgRetryCount * 300).toLocaleString() + "元", unit: "人/年", featuresDetail: "名医门诊/住院安排: 30省90+市\\n家庭医生音视频咨询(主治级)*30分钟\\n门诊预约协助(T+7)*2次\\n检查安排协助(六城)*1次\\n住院专属护工服务(普通护工)*3次\\n全国住院安排协助*1次\\n基础照护上门服务*3次\\n普通陪诊人员上门接送(双程)*1次" }');

code = code.replace(/\{ name: "家属共享健康档案及问诊", target: "基层员工", price: \(200 \+ pkgRetryCount \* 50\)\.toLocaleString\(\) \+ "元", unit: "户\/年" \}/g, '{ name: "家属共享健康档案及问诊", target: "基层员工", price: (200 + pkgRetryCount * 50).toLocaleString() + "元", unit: "户/年", featuresDetail: "门诊预约协助 (T+7)*2次\\n普通陪诊*1次\\n家庭医生图文问诊-主治及以下 (年度会员)\\n企业健康室 (升级版)\\n全额抵扣券-小药箱\\n心理健康测评 不限次\\n心理图文咨询 2次\\n心理电话咨询 1次" }');

code = code.replace(/\{ name: "海外重疾就医协助及随诊", target: "高层员工", price: \(25000 \+ pkgRetryCount \* 2000\)\.toLocaleString\(\) \+ "元", unit: "人\/年" \}/g, '{ name: "海外重疾就医协助及随诊", target: "高层员工", price: (25000 + pkgRetryCount * 2000).toLocaleString() + "元", unit: "人/年", featuresDetail: "家庭医生图文问诊-主治及以下(年度会员)\\n企业健康室 (基础版)\\n门诊预约协助(T+4)*3次\\n普通陪诊*3次\\n智享洁牙服务*1次\\n药品券(满100减50)*6张\\n就医服务等待期30天" }');

code = code.replace(/\{ name: "专属私人健康管家（7x24）", target: "核心员工", price: \(12000 \+ pkgRetryCount \* 1000\)\.toLocaleString\(\) \+ "元", unit: "人\/年" \}/g, '{ name: "专属私人健康管家（7x24）", target: "核心员工", price: (12000 + pkgRetryCount * 1000).toLocaleString() + "元", unit: "人/年", featuresDetail: "门诊预约协助(T+4): 31省321市\\n普通陪诊: 29省234市\\n智享洁牙: 31省300+市\\n心理健康测评 不限次\\n心理图文咨询 2次\\n心理电话咨询 1次\\n保健医生+心理图文咨询*20次\\n心理电话咨询(外部)*3次" }');

code = code.replace(/\{ name: "家族基因筛查及抗衰方案", target: "基层员工", price: \(8800 \+ pkgRetryCount \* 500\)\.toLocaleString\(\) \+ "元", unit: "人\/次" \}/g, '{ name: "家族基因筛查及抗衰方案", target: "基层员工", price: (8800 + pkgRetryCount * 500).toLocaleString() + "元", unit: "人/次", featuresDetail: "AED急救技能培训*8小时\\nAED专题讲座*2小时\\n平安家医图文问诊*不限次\\n门诊预约协助服务*1次\\n住院协助服务*1次\\n名医视频问诊*3次\\n专人1V1陪诊服务*3次" }');

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log("ChatWindow packages replaced.");
