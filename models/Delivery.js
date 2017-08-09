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
    name: { type: String, required: true, label:'发送材料' },
  },
  '测试分割线',
  {
    "测试字段2": {type: String, label: '测试字段2'},
});

Delivery.relationship({ ref: 'Case', path: 'Delivery' });
Delivery.defaultColumns = 'name';
Delivery.register();
