/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: '首页', key: 'case', href: 'http://118.190.85.174/keystone/' },
    { label: '导入案件列表', key: 'import', href: '/import'},
		{ label: '导入案件批次', key: 'importcasebatch', href: '/importcasebatch'},
		{ label: '导入证据保全', key: 'importevidenceprove', href: '/importevidenceprove'},
    { label: '导入材料', key: 'importdelivery', href: '/importdelivery'},
		{ label: '景象图片库', key: 'viewstock', href: 'http://www.viewstock.com'},
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};

exports.requireAdmin = function (req, res, next) {
    if (!req.user.isAdmin) {
        req.flash('error', 'Permission Denied.');
        res.redirect('/keystone/signin');
    } else {
        next();
    }
};
