var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
    label: '案件',
    plural: '案件',
    track: true
});

Case.add({
        name: {type: String, required: true, label: '名称'},
        批次: {type: Types.Relationship, ref: 'Batch', label: '批次', many: true},
        accessUsers: {type: Types.Relationship, ref: 'User', index: true, many: true, label: '可见用户'},
    },
    '案件基本',
    {
        "案件批次": {type: Number, label: '案件批次'},
        案件标签: {type: String, label: '案件标签'},
        "临时标签": {type: String, label: '临时标签'},
        案件编号: {type: Number, label: '案件编号'},
        合作方案件编号: {type: String, label: '合作方案件编号'},
        图片编号: {type: String, label: '图片编号'},
        "图片编号补正": {type: Types.Select, options: '编号有误需补正,补正完毕,无需补正', label: '图片编号补正'},
        隶属主体侵权图片总数量: {type: Number, label: '隶属主体侵权图片总数量'},
        地区: {type: String, label: '地区'},
        侵权主体: {type: String, label: '侵权主体'},
        "ICP备案号": {type: String, label: 'ICP备案号'},
        品牌: {type: String, label: '品牌'},
        关联主体: {type: String, label: '关联主体'},
        电商平台: {type: Types.Select, options: '天猫超市,天猫商城,淘宝,1688,阿里巴巴,京东自营,京东三方,苏宁自营,苏宁三方,其他', label: '电商平台'},
        生产商: {type: String, label: '生产商'},
        销售商: {type: String, label: '销售商'},
        店铺: {type: String, label: '店铺'},
        侵权人主页链接: {type: Types.Url, label: '侵权人主页链接'},
        侵权页面链接: {type: Types.Url, label: '侵权页面链接'},
        图片位置描述: {type: String, label: '图片位置描述'},
        页面内容描述: {type: String, label: '页面内容描述'},
        侵权形式: {
            type: Types.Select,
            options: '官网(商业),官网(资讯),门户资讯网站,普通资讯网站,企业微博,企业公众号,大型直营电商,小型直营电商,大型电商三方,小型电商三方,大流量APP,其他APP,印刷品,其他',
            label: '侵权形式'
        },
        增加线索批次: {type: Number, label: '增加线索批次'},
        线索批次内小序号: {type: Number, label: '线索批次内小序号'},
        发现日期: {type: Types.Date, label: '发现日期'},
        发现人: {type: String, label: '发现人'},
        "优先级": {type: Types.Select, options: '紧要,普通', label: '优先级'},
        线索备注: {type: String, label: '线索备注'},
        线索审核批注: {type: String, label: '线索审核批注'},
    },
    '案件筛选',
    {
        "主体查询人": {type: String, label: '主体查询人'},
        主体查询批次号: {type: Number, label: '主体查询批次号'},
        主体查询时间: {type: Types.Date, label: '主体查询时间'},
        主体查询状态: {type: Types.Select, options: '未查询,查询中,完成', label: '主体查询状态'},
        自查租片日期: {type: Types.Date, label: '自查租片日期'},
        自查租片结果: {type: Types.Select, options: '有租片,无租片', label: '自查租片结果'},
        "租片查询人": {type: String, label: '租片查询人'},
        租片查询批次: {type: Number, label: '租片查询批次'},
        租片查询日期: {type: Types.Date, label: '租片查询日期'},
        华盖租片查询状态: {type: Types.Select, options: '未查询,查询中,数据比对中,完成', label: '华盖租片查询状态'},
        华盖反馈日期: {type: Types.Date, label: '华盖反馈日期'},
        华盖租片查询结果: {type: Types.Select, options: '有租片,无租片,无结果', label: '华盖租片查询结果'},
        全景租片查询状态: {type: Types.Select, options: '未查询,查询中,数据比对中,完成', label: '全景租片查询状态'},
        全景反馈日期: {type: Types.Date, label: '全景反馈日期'},
        全景租片查询结果: {type: Types.Select, options: '有租片,无租片,无结果', label: '全景租片查询结果'},
    },
    '证据保全',
    {
        "公证人": {type: String, label: '公证人'},
        提交公证批次: {type: Number, label: '提交公证批次'},
        提交公证日期: {type: Types.Date, label: '提交公证日期'},
        公证形式: {type: Types.Select, options: '公证处,电子公证,简易取证', label: '公证形式'},
        公证机构名称: {type: String, label: '公证机构名称'},
        公证状态: {type: Types.Select, options: '未申请,已申请,已保全,已出证', label: '公证状态'},
        保全日期: {type: Types.Date, label: '保全日期'},
        出证日期: {type: Types.Date, label: '出证日期'},
        公证书编号: {type: String, label: '公证书编号'},
        分摊公证成本: {type: Types.Money, label: '分摊公证成本'},
        "分摊公证附加费": {type: Types.Money, label: '分摊公证附加费'},
        "公证费结算批次": {type: Number, label: '公证费结算批次'},
        "隶属公证费单笔支付金额": {type: Types.Money, label: '隶属公证费单笔支付金额'},
        "隶属公证费单笔支付日期": {type: Types.Date, label: '隶属公证费单笔支付日期'},
        "是否取消公证": {type: Types.Select, options: '取消公证,正常', label: '是否取消公证'},
        公证取消原因: {type: Types.Select, options: '图片下线,主体不适格,正常租片,其他', label: '公证取消原因'},
        公证备注: {type: String, label: '公证备注'},
    },
    '线索处理意见',
    {
        线索处理意见: {type: Types.Select, options: '诉讼,放弃,暂缓', label: '线索处理意见'},
        放弃原因: {type: Types.Select, options: '正常租片,主体不适格,保全不能', label: '放弃原因'},
        线索处理备注: {type: String, label: '线索处理备注'},
    },
    '移交律师',
    {
        移交批次: {type: Number, label: '移交批次'},
        移交日期: {type: Types.Date, label: '移交日期'},
        负责律所: {type: String, label: '负责律所'},
        下级律所: {type: String, label: '下级律所'},
        公证书提供日期: {type: Types.Date, label: '公证书提供日期'},
        公证书提供数量: {type: Number, label: '公证书提供数量'},
        公证书提供快递公司及单号: {type: String, label: '公证书提供快递公司及单号'},
        "需要授权书": {type: Types.Date, label: '需要授权书'},
        授权书发出日期: {type: Types.Date, label: '授权书发出日期'},
        授权内容: {type: String, label: '授权内容'},
        授权截止日期: {type: Types.Date, label: '授权截止日期'},
        授权书发出快递公司及单号: {type: String, label: '授权书发出快递公司及单号'},
        授权书备注: {type: String, label: '授权书备注'},
    },
    '证据材料',
    {
        "需要原始图": {type: Types.Date, label: '需要原始图'},
        原始图载体: {type: Types.Select, options: '光盘,电子文件,胶片,其他', label: '原始图载体'},
        原始图载体数量: {type: Number, label: '原始图载体数量'},
        原始图提供日期: {type: Types.Date, label: '原始图提供日期'},
        原始图提供快递公司及单号: {type: String, label: '原始图提供快递公司及单号'},
        胶片回收日期: {type: Types.Date, label: '胶片回收日期'},
        胶片备注: {type: String, label: '胶片备注'},
        "需要委托创作说明": {type: Types.Date, label: '需要委托创作说明'},
        作品委托创作说明提供日期: {type: Types.Date, label: '作品委托创作说明提供日期'},
        作品委托创作说明快递单号: {type: String, label: '作品委托创作说明快递单号'},
        作品委托创作说明形式: {type: Types.Select, options: '纸质单张,光盘批量,其他', label: '作品委托创作说明形式'},
        是否摄影师委托创作说明: {type: Types.Select, options: '是,否', label: '是否摄影师委托创作说明'},
        摄影师名称: {type: String, label: '摄影师名称'},
        需要其他证据: {type: Types.Date, label: '需要其他证据'},
        其他证据名称: {type: String, label: '其他证据名称'},
        其他证据提供日期: {type: Types.Date, label: '其他证据提供日期'},
        其他证据快递公司及单号: {type: String, label: '其他证据快递公司及单号'},
        提供证据备注: {type: String, label: '提供证据备注'},
    },
    '以租代赔',
    {
        是否以租代赔: {type: Types.Select, options: '是,否', label: '是否以租代赔'},
        以租代赔批次: {type: Number, label: '以租代赔批次'},
        以租代赔协商结果: {type: Types.Select, options: '转为购图用户,转回诉讼程序', label: '以租代赔协商结果'},
        以租代赔合同金额: {type: Types.Money, label: '以租代赔合同金额'},
        以租代赔合同内容: {type: String, label: '以租代赔合同内容'},
    },
    '诉讼',
    {
        诉讼批次: {type: Number, label: '诉讼批次'},
        需要起诉书: {type: Types.Date, label: '需要起诉书'},
        起诉书发出日期: {type: Types.Date, label: '起诉书发出日期'},
        起诉书发出快递公司及单号: {type: String, label: '起诉书发出快递公司及单号'},
        起诉书备注: {type: String, label: '起诉书备注'},
        立案受理日期: {type: Types.Date, label: '立案受理日期'},
        被告人: {type: String, label: '被告人'},
        立案法院: {type: String, label: '立案法院'},
        法院案号: {type: String, label: '法院案号'},
        诉讼状态: {type: Types.Select, options: '待立案,已立案,一审开庭,二审开庭,判决,和解/调解,撤诉,放弃', label: '诉讼状态'},
        一审开庭日期: {type: Types.Date, label: '一审开庭日期'},
        一审判决日期: {type: Types.Date, label: '一审判决日期'},
        二审开庭日期: {type: Types.Date, label: '二审开庭日期'},
        二审判决日期: {type: Types.Date, label: '二审判决日期'},
        放弃诉讼原因: {type: Types.Select, options: '正常租片,管辖异议/错误,无法送达,主体不明/错误,证据不足,无赔偿能力', label: '放弃诉讼原因'},
        需要和解协议: {type: Types.Date, label: '需要和解协议'},
        和解协议制作日期: {type: Types.Date, label: '和解协议制作日期'},
        和解协议发出日期: {type: Types.Date, label: '和解协议发出日期'},
        和解协议快递公司及单号: {type: String, label: '和解协议快递公司及单号'},
        和解协议是否返回: {type: Types.Select, options: '是,否', label: '和解协议是否返回'},
        和解协议备注: {type: String, label: '和解协议备注'},
        需要其他诉讼材料: {type: Types.Date, label: '需要其他诉讼材料'},
        其他诉讼材料名称: {type: String, label: '其他诉讼材料名称'},
        其他诉讼材料发出日期: {type: Types.Date, label: '其他诉讼材料发出日期'},
        其他诉讼材料快递公司及单号: {type: String, label: '其他诉讼材料快递公司及单号'},
        其他诉讼材料备注: {type: String, label: '其他诉讼材料备注'},
        诉讼备注: {type: String, label: '诉讼备注'},
    },
    '退费与赔偿',
    {
        预付诉讼费: {type: Types.Money, label: '预付诉讼费'},
        应退诉讼费: {type: Types.Money, label: '应退诉讼费'},
        对方承担诉讼费: {type: Types.Money, label: '对方承担诉讼费'},
        "退还诉讼费（到律所）": {type: Types.Money, label: '退还诉讼费（到律所）'},
        "诉讼费退还日期（到律所）": {type: Types.Date, label: '诉讼费退还日期（到律所）'},
        "退费形式（到律所）": {type: Types.Select, options: '银行汇款,现金,法院支票,其他', label: '退费形式（到律所）'},
        诉讼费退款律所转公司日期: {type: Types.Date, label: '诉讼费退款律所转公司日期'},
        隶属退费单笔转账日期: {type: Types.Date, label: '隶属退费单笔转账日期'},
        "隶属退费单笔转账金额": {type: Types.Money, label: '隶属退费单笔转账金额'},
        "退还诉讼费（到公司）": {type: Types.Money, label: '退还诉讼费（到公司）'},
        "诉讼费退还日期（到公司）": {type: Types.Date, label: '诉讼费退还日期（到公司）'},
        "退费形式（到公司）": {type: Types.Select, options: '银行汇款,现金,法院支票,其他', label: '退费形式（到公司）'},
        退还诉讼费备注: {type: String, label: '退还诉讼费备注'},
        "判决/调解赔偿金额": {type: Types.Money, label: '判决/调解赔偿金额'},
        "赔偿款实际支付人（到律所）": {type: String, label: '赔偿款实际支付人（到律所）'},
        "实际赔偿日期（到律所）": {type: Types.Date, label: '实际赔偿日期（到律所）'},
        "实际赔偿金额（到律所）": {type: Types.Money, label: '实际赔偿金额（到律所）'},
        "赔偿形式（到律所）": {type: Types.Select, options: '银行汇款,现金,法院支票,其他', label: '赔偿形式（到律所）'},
        赔偿款律所转公司日期: {type: Types.Date, label: '赔偿款律所转公司日期'},
        隶属赔偿款单笔转账日期: {type: Types.Date, label: '隶属赔偿款单笔转账日期'},
        "隶属赔偿款单笔转账金额": {type: Types.Money, label: '隶属赔偿款单笔转账金额'},
        "赔偿款实际支付人（到公司）": {type: String, label: '赔偿款实际支付人（到公司）'},
        "实际赔偿日期（到公司）": {type: Types.Date, label: '实际赔偿日期（到公司）'},
        "实际赔偿金额（到公司）": {type: Types.Money, label: '实际赔偿金额（到公司）'},
        "赔偿形式（到公司）": {type: Types.Select, options: '银行汇款,现金,法院支票,支付宝,其他', label: '赔偿形式（到公司）'},
        赔偿款备注: {type: String, label: '赔偿款备注'},
        赔偿状态: {type: Types.Select, options: '赔偿中,赔偿完毕,强制执行中,放弃', label: '赔偿状态'},
    },
    '收据',
    {
        退费收据开具日期: {type: Types.Date, label: '退费收据开具日期'},
        退费收据快递公司及单号: {type: String, label: '退费收据快递公司及单号'},
        退费收据备注: {type: String, label: '退费收据备注'},
        赔偿款收据开具日期: {type: Types.Date, label: '赔偿款收据开具日期'},
        赔偿款收据快递公司及单号: {type: String, label: '赔偿款收据快递公司及单号'},
        赔偿款收据备注: {type: String, label: '赔偿款收据备注'},
    },
    '备注',
    {
        案件状态总结: {type: Types.Select, options: '进行中,撤销,结案', label: '案件状态总结'},
        案件备注: {type: String, label: '案件备注'},
        导入表格文件名: {type: String, label: '导入表格文件名'},
    }
);

Case.customFilter = function (where, user) {
    if (!user.isAdmin)
        where.accessUsers = {$in: [user._id]};
    return where;
};

Case.schema.pre('save', function (next) {
    if (this.isNew) {
        if (this.accessUsers.length === 0 && this._req_user) {
            this.accessUsers.push(this._req_user._id);
        }
    }
    next();
});

Case.permission = true;

Case.defaultColumns = 'name|250px,批次,案件编号,侵权形式,图片编号,侵权主体,侵权页面链接,图片位置描述,页面内容描述,线索处理意见,放弃原因,案件状态';
Case.register();
