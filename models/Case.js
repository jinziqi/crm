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
    identifierNumber: {type: Number, label: '编号'},
    state: {type: Types.Select, options: '未处理, 完成', default: '未处理', index: true, label: '状态'},
    batch: {type: Types.Relationship, ref: 'Batch', label: '批次', many: true},
    accessUsers: {type: Types.Relationship, ref: 'User', index: true, many: true, label: '可见用户'},
    },
    '案件基本',
    {
        data2: {type: String, label: '案件标签'},
        data3: {type: String, label: '图片编号'},
        data4: {type: String, label: '侵权主体'},
        data5: {type: String, label: 'ICP备案号'},
        data6: {type: String, label: '品牌'},
        data7: {type: String, label: '关联主体'},
        data8: {type: Types.Select, options: '天猫超市,天猫商城,淘宝,1688,阿里巴巴,京东自营,京东三方,苏宁自营,苏宁三方,其他', label: '电商平台'},
        data9: {type: String, label: '生产商'},
        data10: {type: String, label: '销售商'},
        data11: {type: String, label: '店铺'},
        data12: {type: Types.Url, label: '侵权人主页链接'},
        data13: {type: String, label: '侵权页面链接'},
        data14: {type: String, label: '图片位置描述'},
        data15: {type: String, label: '页面内容描述'},
        data16: {
            type: Types.Select,
            options: '官网(商业),官网(资讯),门户资讯网站,普通资讯网站,企业微博,企业公众号,大型直营电商,小型直营电商,大型电商三方,小型电商三方,大流量APP,其他APP,印刷品,其他',
            label: '侵权形式'
        },
        data17: {type: String, label: '线索录入方ID'},
        data18: {type: String, label: '线索批次'},
        data19: {type: Types.Date, label: '发现日期'},
        data20: {type: String, label: '发现人'},
    },
    '案件筛选',
    {
        data21: {type: String, label: '主体查询方ID'},
        data22: {type: String, label: '主体查询批次'},
        data23: {type: String, label: '主体查询日期'},
        data24: {type: Types.Select, options: '未查询,查询中,完成', label: '主体查询状态'},
        data25: {type: String, label: '自查租片批次'},
        data26: {type: Types.Select, options: '有租片,无租片', label: '自查租片结果'},
        data27: {type: String, label: '代理商租片查询方ID'},
        data28: {type: String, label: '代理商租片查询批次'},
        data29: {type: String, label: '代理商租片查询日期'},
        data30: {type: Types.Select, options: '未查询,查询中,数据比对中,完成', label: '代理商租片查询状态'},
        data31: {type: Types.Select, options: '有租片,无租片', label: '代理商租片查询结果'},
    },
    '公证',
    {
        data32: {type: String, label: '公证方ID'},
        data33: {type: String, label: '公正批次'},
        data34: {type: Types.Select, options: '公证处,电子公证,简易取证', label: '公证形式'},
        data35: {type: Types.Select, options: '未申请;已申请;已保全;已出证;', label: '公证状态'},
        data36: {type: String, label: '申请公证日期'},
        data37: {type: String, label: '公证书编号'},
    },
    '线索处理意见',
    {
        data38: {type: String, label: '线索处理批次'},
        data39: {type: Types.Select, options: '诉讼,放弃,暂缓', label: '线索处理意见'},
        data40: {type: Types.Select, options: '正常租片,主体不适格,保全不能', label: '放弃原因'},
        data41: {type: String, label: '线索处理备注'},
    },
    '诉讼',
    {
        data42: {type: String, label: '律师ID'},
        data43: {type: String, label: '诉讼批次'},
        data44: {type: String, label: '案件受理日期'},
        data45: {type: String, label: '被告人'},
        data46: {type: String, label: '立案法院'},
        data47: {type: String, label: '法院案号'},
        data48: {type: Types.Select, options: '待立案,已立案,一审开庭,二审开庭,判决,和解/调解,撤诉', label: '案件状态'},
        data49: {type: String, label: '应赔偿金额'},
        data50: {type: String, label: '实际赔偿金额'},
        data51: {type: String, label: '实际支付诉讼费'},
        data52: {type: Types.Select, options: '正常租片,管辖异议/错误,无法送达,主体不明/错误,证据不足,无赔偿能力', label: '撤诉原因'},
        data53: {type: Types.Select, options: '赔偿中,赔偿完毕,强制执行中,放弃', label: '执行状态'},
        data54: {type: String, label: '诉讼备注'},
    },
    {
        data55: {type: String, label: '案件备注'},
    }
);

Case.customFilter = function (where, user) {
    if(!user.isAdmin)
        where.accessUsers = {$in: [user._id]};
    return where;
};

Case.permission = true;

Case.defaultColumns = 'name, state|20%, data4|20%, publishedDate|20%';
Case.register();
