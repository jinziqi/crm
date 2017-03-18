var keystone = require('keystone');

/**
 * Role Model
 * ==================
 */

var Role = new keystone.List('Role', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: '权限',
    plural: '权限'
});

Role.add({
	name: { type: String, required: true, label:'名称' },
    readPermission: { type: String, height: 150, label:'可见字段',description:'s' },
    writePermission: { type: String, height: 150, label:'可写字段' },
	create: {type:Boolean, label:'可新建案件'}
});

Role.relationship({ ref: 'User', path: 'role' });

Role.defaultColumns = 'name,readPermission,writePermission';
Role.register();
