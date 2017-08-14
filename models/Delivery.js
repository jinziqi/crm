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
    name: { type: String, required: true, label:'材料名称' },

});
Delivery.relationship({ ref: 'Case', path: 'Delivery' });
Delivery.defaultColumns = 'name,材料类型,发送或收取,材料载体数量,收件单位,收件日期';
Delivery.register();
