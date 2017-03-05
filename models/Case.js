var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
	label: '案件'
});

Case.add({
	name: { type: String, required: true, label:'名称' },
	identifierNumber: {type: Number, label:'编号'},
	state: { type: Types.Select, options: '未处理, 完成', default: '未处理', index: true, label:'状态' },
	batch: {type: Types.Relationship, ref: 'Batch', label:'批次', many: true},
    client: { type: Types.Relationship, ref: 'User', index: true, label:'客户'},
	url: {type: Types.Url, label:'网址'},
	accessUsers: { type: Types.Relationship, ref: 'User', index: true, many: true, label:'可见用户' },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' }, label:'日期' },
    content: { type: Types.Textarea, height: 150, label:'内容'},
});

Case.defaultColumns = 'name, state|20%, author|20%, publishedDate|20%';
Case.register();
