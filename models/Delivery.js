var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 *
 * ==========
 */

var Delivery = new keystone.List('Delivery', {
    label: '发送材料'
});

Delivery.add({
  "自动编号": {type: Number, label: '自动编号'},
    name: { type: String, required: true, label:'发送材料' },
});

Delivery.relationship({ ref: 'Case', path: 'Delivery' });
Delivery.defaultColumns = '自动编号';
Delivery.register();
