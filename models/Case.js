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
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true, label:'状态' },
    client: { type: Types.Relationship, ref: 'User', index: true, label:'客户'},
	accessUsers: { type: Types.Relationship, ref: 'User', index: true, many: true, label:'用户' },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' }, label:'日期' },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150, label:'内容' },
	},
});

Case.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Case.defaultColumns = 'name, state|20%, author|20%, publishedDate|20%';
Case.register();
