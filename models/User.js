var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User', {
	label: '用户'
});

User.add({
	name: { type: String, required: true, index: true, label:'用户名' },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true, label:'密码' },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'System Admin', index: true },
	role: {type: Types.Relationship, ref: 'Role', label:'权限'}
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
User.relationship({ ref: 'Case', path: 'cases', refPath: 'client' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, role';
User.register();
