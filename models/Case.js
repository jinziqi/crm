var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
    label: '案件列表',
    plural: '案件列表',
    track: true
});

Case.add({
        name: {type: String, required: true, label: '名称'},
        标签: {type: Types.Relationship, ref: 'Batch', label: '标签', many: true},
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
        线索备注: {type: String, label: '线索备注'},
        线索审核批注: {type: String, label: '线索审核批注'},
    },
    '案件筛选',
    {
        主体查询批次号: {type: Number, label: '主体查询批次号'},
        主体查询结果: {type: Types.Select, options: '符合诉讼条件,不符合条件', label: '主体查询结果'},
        主体放弃原因: {type: Types.Select, options: '图片已下线,公司已注销,无ICP备案信息,无主体认证信息,个体工商户,个人,公司规模小,其他', label: '主体放弃原因'},
        自查租片结果: {type: Types.Select, options: '有租片,无租片', label: '自查租片结果'},
        租片查询批次: {type: Number, label: '租片查询批次'},
        华盖租片查询结果: {type: Types.Select, options: '有租片,无租片,无结果', label: '华盖租片查询结果'},
        全景租片查询结果: {type: Types.Select, options: '有租片,无租片,无结果', label: '全景租片查询结果'},
    },
    '证据保全',
    {
        提交公证批次: {type: Number, label: '提交公证批次'},
        公证状态: {type: Types.Select, options: '未申请,已申请,已保全,已出证', label: '公证状态'},
        保全日期: {type: Types.Date, label: '保全日期'},
        公证书编号: {type: String, label: '公证书编号'},
        "是否取消公证": {type: Types.Select, options: '取消公证,正常', label: '是否取消公证'},
        公证取消原因: {type: Types.Select, options: '图片下线,主体不适格,正常租片,其他', label: '公证取消原因'},
    },
    '线索处理意见',
    {
        线索处理意见: {type: Types.Select, options: '诉讼,放弃,暂缓', label: '线索处理意见'},
        线索放弃原因: {type: Types.Select, options: '正常租片,主体不适格,保全不能,重复线索,其他', label: '线索放弃原因'},
    },
    '移交律师',
    {
        移交批次: {type: Number, label: '移交批次'},
        移交日期: {type: Types.Date, label: '移交日期'},
        负责律所: {type: Types.Select, options: '北京王斌,江苏海辉,上海计易,深圳谢涛,天津肖坤,西安王正兴,其他', label: '负责律所'},
        公证书提供日期: {type: Types.Date, label: '公证书提供日期'},
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
        原始图提供日期: {type: Types.Date, label: '原始图提供日期'},
        原始图提供快递公司及单号: {type: String, label: '原始图提供快递公司及单号'},
        胶片回收日期: {type: Types.Date, label: '胶片回收日期'},
        "需要肖像权协议": {type: Types.Date, label: '需要肖像权协议'},
        肖像权协议提供日期: {type: Types.Date, label: '肖像权协议提供日期'},
        肖像权协议快递单号: {type: String, label: '肖像权协议快递单号'},
        肖像权协议形式: {type: Types.Select, options: '原件,扫描件,纸质复印件', label: '肖像权协议形式'},
        模特姓名: {type: String, label: '模特姓名'},
        "肖像权协议回收日期": {type: Types.Date, label: '肖像权协议回收日期'},
        "需要委托创作说明": {type: Types.Date, label: '需要委托创作说明'},
        作品委托创作说明提供日期: {type: Types.Date, label: '作品委托创作说明提供日期'},
        作品委托创作说明快递单号: {type: String, label: '作品委托创作说明快递单号'},
        是否摄影师委托创作说明: {type: Types.Select, options: '是,否', label: '是否摄影师委托创作说明'},
        摄影师名称: {type: String, label: '摄影师名称'},
        需要其他证据: {type: Types.Date, label: '需要其他证据'},
        其他证据名称: {type: String, label: '其他证据名称'},
    },
    '以租代赔',
    {
        是否以租代赔: {type: Types.Select, options: '是,否', label: '是否以租代赔'},
        以租代赔合同内容: {type: String, label: '以租代赔合同内容'},
        "以租代赔合同存档编号": {type: Number, label: '以租代赔合同存档编号'},
    },
    '诉讼',
    {
        诉讼批次: {type: Number, label: '诉讼批次'},
        需要起诉书: {type: Types.Date, label: '需要起诉书'},
        起诉书发出日期: {type: Types.Date, label: '起诉书发出日期'},
        起诉书发出快递公司及单号: {type: String, label: '起诉书发出快递公司及单号'},
        立案受理日期: {type: Types.Date, label: '立案受理日期'},
        被告人: {type: String, label: '被告人'},
        立案法院: {type: String, label: '立案法院'},
        法院案号: {type: String, label: '法院案号'},
        诉讼状态: {type: Types.Select, options: '未立案,待立案,已立案,一审开庭,二审开庭,判决,和解/调解,以租代赔,撤诉,放弃', label: '诉讼状态'},
        放弃诉讼原因: {type: Types.Select, options: '正常租片,管辖异议/错误,无法送达,主体不明/错误,证据不足,无赔偿能力,重复案件', label: '放弃诉讼原因'},
        需要和解协议: {type: Types.Date, label: '需要和解协议'},
        和解协议发出日期: {type: Types.Date, label: '和解协议发出日期'},
        和解协议快递公司及单号: {type: String, label: '和解协议快递公司及单号'},
        和解协议是否返回: {type: Types.Select, options: '是,否', label: '和解协议是否返回'},
        和解协议备注: {type: String, label: '和解协议备注'},
        存档编号: {type: Number, label: '存档编号'},
        诉讼备注: {type: String, label: '诉讼备注'},
    },
    '退费与赔偿',
    {
        "预付诉讼费金额": {type: Types.Money, label: '预付诉讼费金额'},
        "预付诉讼费结算申请日期": {type: Types.Date, label: '预付诉讼费结算申请日期'},
        "预付诉讼费支付律所日期": {type: Types.Date, label: '预付诉讼费支付律所日期'},
        "实退诉讼费金额": {type: Types.Money, label: '实退诉讼费金额'},
        "应付赔偿金额": {type: Types.Money, label: '应付赔偿金额'},
        "赔偿款付款人": {type: String, label: '赔偿款付款人'},
        "公司收款日期": {type: Types.Date, label: '公司收款日期'},
        "公司收款金额": {type: Types.Money, label: '公司收款金额'},
    },
    '收据',
    {
        退费收据开具日期: {type: Types.Date, label: '退费收据开具日期'},
        退费收据快递公司及单号: {type: String, label: '退费收据快递公司及单号'},
        赔偿款收据开具日期: {type: Types.Date, label: '赔偿款收据开具日期'},
        "是否为发票": {type: Types.Select, options: '是,否', label: '是否为发票'},
        赔偿款收据快递公司及单号: {type: String, label: '赔偿款收据快递公司及单号'},
        赔偿款收据备注: {type: String, label: '赔偿款收据备注'},
    },
    '备注',
    {
        案件状态总结: {type: Types.Select, options: '进行中,撤销,结案', label: '案件状态总结'},
        案件备注: {type: String, label: '案件备注'},
        导入表格文件名: {type: String, label: '导入表格文件名'},
        案件特别提醒: {type: String, label: '案件特别提醒'},
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

Case.defaultColumns = 'name|200px,案件编号|75px,案件批次,侵权形式,图片编号,侵权页面链接,发现人,线索处理意见,线索放弃原因,负责律所,诉讼状态,判决/调解赔偿金额,放弃诉讼原因,案件特别提醒';
Case.register();
