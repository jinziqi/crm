var keystone = require('keystone');

/**
 * Role Model
 * ==================
 */

var Role = new keystone.List('Role', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: '权限'
});

Role.add({
	name: { type: String, required: true, label:'名称' },
});

Role.relationship({ ref: 'User', path: 'role' });

Role.register();
