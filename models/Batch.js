var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Batch Model
 * ==========
 */

var Batch = new keystone.List('Batch', {
    label: '批次'
});

Batch.add({
    name: { type: String, required: true, label:'名称' },
});

Batch.relationship({ ref: 'Case', path: 'batch' });
Batch.defaultColumns = 'name';
Batch.register();
