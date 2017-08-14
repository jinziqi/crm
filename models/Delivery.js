var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 *
 * ==========
 */

var Delivery = new keystone.List('Delivery', {
    label: '材料记录'
});

Delivery.add({
    name: { type: String, required: true, label:'材料名称' }
});
Delivery.relationship({ ref: 'Case', path: 'Delivery' });
Delivery.defaultColumns = 'name';
Delivery.register();
