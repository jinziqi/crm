var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Batch Model
 * ==========
 */

var CaseBatch = new keystone.List('CaseBatch', {
    label: '案件批次'
});

CaseBatch.add({
    name: { type: String, required: true, label:'案件批次名称' },
});

CaseBatch.relationship({ ref: 'Case', path: 'CaseBatch' });
CaseBatch.defaultColumns = 'name';
CaseBatch.register();
