var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
	label: '案件',
    plural: '案件'
});

Case.add({
    name: {type: String, required: true, label: '名称'},
    编号: {type: Number, label: '编号'},
    状态: {type: Types.Select, options: '未处理, 完成', default: '未处理', index: true, label: '状态'},
    批次: {type: Types.Relationship, ref: 'Batch', label: '批次', many: true},
    accessUsers: {type: Types.Relationship, ref: 'User', index: true, many: true, label: '可见用户'},
    },
    '案件基本',
    {
        案件标签: {type: String, label: '案件标签'},
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
        侵权页面链接: {type: String, label: '侵权页面链接'},
        图片位置描述: {type: String, label: '图片位置描述'},
        页面内容描述: {type: String, label: '页面内容描述'},
        侵权形式: {
            type: Types.Select,
            options: '官网(商业),官网(资讯),门户资讯网站,普通资讯网站,企业微博,企业公众号,大型直营电商,小型直营电商,大型电商三方,小型电商三方,大流量APP,其他APP,印刷品,其他',
            label: '侵权形式'
        },
        "线索录入方ID": {type: String, label: '线索录入方ID'},
        线索批次: {type: String, label: '线索批次'},
        发现日期: {type: Types.Date, label: '发现日期'},
        发现人: {type: String, label: '发现人'},
    },
    '案件筛选',
    {
        "主体查询方ID": {type: String, label: '主体查询方ID'},
        主体查询批次: {type: String, label: '主体查询批次'},
        主体查询日期: {type: String, label: '主体查询日期'},
        主体查询状态: {type: Types.Select, options: '未查询,查询中,完成', label: '主体查询状态'},
        自查租片批次: {type: String, label: '自查租片批次'},
        自查租片结果: {type: Types.Select, options: '有租片,无租片', label: '自查租片结果'},
        "代理商租片查询方ID": {type: String, label: '代理商租片查询方ID'},
        代理商租片查询批次: {type: String, label: '代理商租片查询批次'},
        代理商租片查询日期: {type: String, label: '代理商租片查询日期'},
        代理商租片查询状态: {type: Types.Select, options: '未查询,查询中,数据比对中,完成', label: '代理商租片查询状态'},
        代理商租片查询结果: {type: Types.Select, options: '有租片,无租片', label: '代理商租片查询结果'},
    },
    '公证',
    {
        "公证方ID": {type: String, label: '公证方ID'},
        公正批次: {type: String, label: '公正批次'},
        公证形式: {type: Types.Select, options: '公证处,电子公证,简易取证', label: '公证形式'},
        公证状态: {type: Types.Select, options: '未申请;已申请;已保全;已出证;', label: '公证状态'},
        申请公证日期: {type: String, label: '申请公证日期'},
        公证书编号: {type: String, label: '公证书编号'},
    },
    '线索处理意见',
    {
        线索处理批次: {type: String, label: '线索处理批次'},
        线索处理意见: {type: Types.Select, options: '诉讼,放弃,暂缓', label: '线索处理意见'},
        放弃原因: {type: Types.Select, options: '正常租片,主体不适格,保全不能', label: '放弃原因'},
        线索处理备注: {type: String, label: '线索处理备注'},
    },
    '诉讼',
    {
        "律师ID": {type: String, label: '律师ID'},
        诉讼批次: {type: String, label: '诉讼批次'},
        案件受理日期: {type: String, label: '案件受理日期'},
        被告人: {type: String, label: '被告人'},
        立案法院: {type: String, label: '立案法院'},
        法院案号: {type: String, label: '法院案号'},
        案件状态: {type: Types.Select, options: '待立案,已立案,一审开庭,二审开庭,判决,和解/调解,撤诉', label: '案件状态'},
        应赔偿金额: {type: String, label: '应赔偿金额'},
        实际赔偿金额: {type: String, label: '实际赔偿金额'},
        实际支付诉讼费: {type: String, label: '实际支付诉讼费'},
        撤诉原因: {type: Types.Select, options: '正常租片,管辖异议/错误,无法送达,主体不明/错误,证据不足,无赔偿能力', label: '撤诉原因'},
        执行状态: {type: Types.Select, options: '赔偿中,赔偿完毕,强制执行中,放弃', label: '执行状态'},
        诉讼备注: {type: String, label: '诉讼备注'},
    },
    {
        案件备注: {type: String, label: '案件备注'},
    }
);

Case.customFilter = function (where, user) {
    if(!user.isAdmin)
        where.accessUsers = {$in: [user._id]};
    return where;
};

Case.schema.pre('save', function (next) {
    if(this.isNew) {
        if(this.accessUsers.length === 0) {
            this.accessUsers.push(this._req_user._id);
        }
    }
    next();
});

Case.permission = true;

Case.defaultColumns = 'name, state|20%, data4|20%, publishedDate|20%';
Case.register();
