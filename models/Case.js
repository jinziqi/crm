var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
	label: '案件',
});

Case.add({
	name: { type: String, required: true, label:'名称' },
	identifierNumber: {type: Number, label:'编号'},
	state: { type: Types.Select, options: '未处理, 完成', default: '未处理', index: true, label:'状态' },
	batch: {type: Types.Relationship, ref: 'Batch', label:'批次', many: true},
	accessUsers: { type: Types.Relationship, ref: 'User', index: true, many: true, label:'可见用户' },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' }, label:'日期' },
    data2: {type: String, label:'案件标签'},
    data3: {type: String, label:'图片编号'},
    data4: {type: String, label:'侵权主体'},
    data5: {type: String, label:'ICP备案号'},
    data6: {type: String, label:'品牌'},
    data7: {type: String, label:'关联主体'},
    data8: {type: String, label:'电商平台'},
    data9: {type: String, label:'生产商'},
    data10: {type: String, label:'销售商'},
    data11: {type: String, label:'店铺'},
    data12: {type: Types.Url, label:'侵权人主页链接'},
    data13: {type: String, label:'侵权页面链接'},
    data14: {type: String, label:'图片位置描述'},
    data15: {type: String, label:'页面内容描述'},
    data16: {type: String, label:'侵权形式'},
    data17: {type: String, label:'线索录入方ID'},
    data18: {type: String, label:'线索批次'},
    data19: {type: String, label:'发现日期'},
    data20: {type: String, label:'发现人'},
    data21: {type: String, label:'主体查询方ID'},
    data22: {type: String, label:'主体查询批次'},
    data23: {type: String, label:'主体查询日期'},
    data24: {type: String, label:'主体查询状态'},
    data25: {type: String, label:'自查租片批次'},
    data26: {type: String, label:'自查租片结果'},
    data27: {type: String, label:'代理商租片查询方ID'},
    data28: {type: String, label:'代理商租片查询批次'},
    data29: {type: String, label:'代理商租片查询日期'},
    data30: {type: String, label:'代理商租片查询状态'},
    data31: {type: String, label:'代理商租片查询结果'},
    data32: {type: String, label:'公证方ID'},
    data33: {type: String, label:'公正批次'},
    data34: {type: String, label:'公证形式'},
    data35: {type: String, label:'公证状态'},
    data36: {type: String, label:'申请公证日期'},
    data37: {type: String, label:'公证书编号'},
    data38: {type: String, label:'线索处理批次'},
    data39: {type: String, label:'线索处理意见'},
    data40: {type: String, label:'放弃原因'},
    data41: {type: String, label:'线索处理备注'},
    data42: {type: String, label:'律师ID'},
    data43: {type: String, label:'诉讼批次'},
    data44: {type: String, label:'案件受理日期'},
    data45: {type: String, label:'被告人'},
    data46: {type: String, label:'立案法院'},
    data47: {type: String, label:'法院案号'},
    data48: {type: String, label:'案件状态'},
    data49: {type: String, label:'应赔偿金额'},
    data50: {type: String, label:'实际赔偿金额'},
    data51: {type: String, label:'实际支付诉讼费'},
    data52: {type: String, label:'撤诉原因'},
    data53: {type: String, label:'执行状态'},
    data54: {type: String, label:'诉讼备注'},
    data55: {type: String, label:'案件备注'},
});

Case.defaultColumns = 'name, state|20%, data4|20%, publishedDate|20%';
Case.register();
