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
        案件编号: {type: Number, label: '案件编号'},
        图片编号: {type: String, label: '图片编号'},
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
        "线索录入方ID": {type: String, label: '线索录入方ID'},
        线索批次: {type: String, label: '线索批次'},
        线索批次内小序号: {type: Number, label: '线索批次内小序号'},
        发现日期: {type: Types.Date, label: '发现日期'},
        发现人: {type: String, label: '发现人'},
        线索审核批注: {type: String, label: '线索审核批注'},
    },
    '案件筛选',
    {
        "主体查询方ID": {type: String, label: '主体查询方ID'},
        主体查询批次: {type: String, label: '主体查询批次'},
        主体查询日期: {type: String, label: '主体查询日期'},
        主体查询状态: {type: Types.Select, options: '未查询,查询中,完成', label: '主体查询状态'},
        自查租片日期: {type: Types.Date, label: '自查租片日期'},
        自查租片结果: {type: Types.Select, options: '有租片,无租片', label: '自查租片结果'},
        "代理商租片查询方ID": {type: String, label: '代理商租片查询方ID'},
        代理商租片查询批次: {type: String, label: '代理商租片查询批次'},
        代理商租片查询日期: {type: String, label: '代理商租片查询日期'},
        华盖租片查询状态: {type: Types.Select, options: '未查询,查询中,数据比对中,完成', label: '华盖租片查询状态'},
        华盖反馈日期: {type: Types.Date, label: '华盖反馈日期'},
        华盖租片查询结果: {type: Types.Select, options: '有租片,无租片,无结果', label: '华盖租片查询结果'},
        全景租片查询状态: {type: Types.Select, options: '未查询,查询中,数据比对中,完成', label: '全景租片查询状态'},
        全景反馈日期: {type: Types.Date, label: '全景反馈日期'},
        全景租片查询结果: {type: Types.Select, options: '有租片,无租片,无结果', label: '全景租片查询结果'},
    },
    '证据保全',
    {
        "公证方ID": {type: String, label: '公证方ID'},
        公证批次: {type: String, label: '公证批次'},
        公证形式: {type: Types.Select, options: '公证处,电子公证,简易取证', label: '公证形式'},
        公证状态: {type: Types.Select, options: '未申请,已申请,已保全,已出证', label: '公证状态'},
        申请公证日期: {type: String, label: '申请公证日期'},
        公证书编号: {type: String, label: '公证书编号'},
        分摊公证成本: {type: Types.Money, label: '分摊公证成本'},
        公证取消原因: {type: Types.Select, options: '图片下线,主体不适格,其他', label: '公证取消原因'},
    },
    '线索处理意见',
    {
        线索处理批次: {type: String, label: '线索处理批次'},
        线索处理意见: {type: Types.Select, options: '诉讼,放弃,暂缓', label: '线索处理意见'},
        放弃原因: {type: Types.Select, options: '正常租片,主体不适格,保全不能', label: '放弃原因'},
        线索处理备注: {type: String, label: '线索处理备注'},
    },
    '证据材料',
    {
        数码原图载体: {type: Types.Select, options: '光盘,电子文件,其他', label: '数码原图载体'},
        数码原图载体数量: {type: Number, label: '数码原图载体数量'},
        数码原图提供日期: {type: Types.Date, label: '数码原图提供日期'},
        数码原图提供快递公司及单号: {type: String, label: '数码原图提供快递公司及单号'},
        胶片提供日期: {type: Types.Date, label: '胶片提供日期'},
        胶片提供快递公司及单号: {type: String, label: '胶片提供快递公司及单号'},
        胶片回收日期: {type: Types.Date, label: '胶片回收日期'},
        作品委托创作说明提供日期: {type: Types.Date, label: '作品委托创作说明提供日期'},
        作品委托创作说明快递单号: {type: String, label: '作品委托创作说明快递单号'},
        作品委托创作说明形式: {type: Types.Select, options: '纸质单张,光盘批量,其他', label: '作品委托创作说明形式'},
        其他证据名称: {type: String, label: '其他证据名称'},
        其他证据提供日期: {type: Types.Date, label: '其他证据提供日期'},
        其他证据快递公司及单号: {type: String, label: '其他证据快递公司及单号'},
        提供证据备注: {type: String, label: '提供证据备注'},
    },
    '以租代赔',
    {
        是否以租代赔: {type: Types.Select, options: '是,否', label: '是否以租代赔'},
        以租代赔批次: {type: Number, label: '以租代赔批次'},
        最低谈判金额: {type: Types.Money, label: '最低谈判金额'},
        以租代赔合同金额: {type: Types.Money, label: '以租代赔合同金额'},
    },
    '诉讼',
    {
        "律师ID": {type: String, label: '律师ID'},
        诉讼批次: {type: String, label: '诉讼批次'},
        负责律所: {type: String, label: '负责律所'},
        公证书提供日期: {type: Types.Date, label: '公证书提供日期'},
        公证书提供数量: {type: Number, label: '公证书提供数量'},
        公证书提供快递公司及单号: {type: String, label: '公证书提供快递公司及单号'},
        起诉书发出日期: {type: Types.Date, label: '起诉书发出日期'},
        起诉书发出快递公司及单号: {type: String, label: '起诉书发出快递公司及单号'},
        案件受理日期: {type: String, label: '案件受理日期'},
        被告人: {type: String, label: '被告人'},
        立案法院: {type: String, label: '立案法院'},
        法院案号: {type: String, label: '法院案号'},
        诉讼状态: {type: Types.Select, options: '待立案,已立案,一审开庭,二审开庭,判决,和解/调解,撤诉', label: '诉讼状态'},
        应赔偿金额: {type: Types.Money, label: '应赔偿金额'},
        放弃诉讼原因: {type: Types.Select, options: '正常租片,管辖异议/错误,无法送达,主体不明/错误,证据不足,无赔偿能力', label: '放弃诉讼原因'},
        和解协议制作日期: {type: Types.Date, label: '和解协议制作日期'},
        和解协议发出日期: {type: Types.Date, label: '和解协议发出日期'},
        和解协议快递公司及单号: {type: String, label: '和解协议快递公司及单号'},
        和解协议是否返回: {type: Types.Select, options: '是,否', label: '和解协议是否返回'},
        和解协议备注: {type: String, label: '和解协议备注'},
        其他诉讼材料名称: {type: String, label: '其他诉讼材料名称'},
        其他诉讼材料发出日期: {type: Types.Date, label: '其他诉讼材料发出日期'},
        其他诉讼材料快递公司及单号: {type: String, label: '其他诉讼材料快递公司及单号'},
        其他诉讼材料备注: {type: String, label: '其他诉讼材料备注'},
        诉讼备注: {type: String, label: '诉讼备注'},
    },
    '退费与赔偿',
    {
        预付诉讼费: {type: Types.Money, label: '预付诉讼费'},
        退换诉讼费日期: {type: Types.Date, label: '退还诉讼费日期'},
        退换诉讼费备注: {type: String, label: '退还诉讼费备注'},
        "退还诉讼费（到律所）": {type: Types.Money, label: '退还诉讼费（到律所）'},
        "退还诉讼费（到公司）": {type: Types.Money, label: '退还诉讼费（到公司）'},
        "判决/调解赔偿金额": {type: Types.Money, label: '判决/调解赔偿金额'},
        实际赔偿日期: {type: Types.Date, label: '实际赔偿日期'},
        赔偿款实际支付人: {type: String, label: '赔偿款实际支付人'},
        实际赔偿日期（到律所）: {type: Types.Date, label: '实际赔偿日期（到律所）'},
        "实际赔偿金额（到律所）": {type: Types.Money, label: '实际赔偿金额（到律所）'},
        赔偿形式（到律所）: {type: Types.Select, options: '银行汇款,现金,法院支票,其他', label: '赔偿形式（到律所）'},
        实际赔偿日期（到公司）: {type: Types.Date, label: '实际赔偿日期（到公司）'},
        "实际赔偿金额（到公司）": {type: Types.Money, label: '实际赔偿金额（到公司）'},
        赔偿形式（到公司）: {type: Types.Select, options: '银行汇款,现金,法院支票,其他', label: '赔偿形式（到公司）'},
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
