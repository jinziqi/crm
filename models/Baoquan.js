var keystone = require('keystone');
var Types = keystone.Field.Types;
var Baoquan = new keystone.List('Baoquan', {
    label: '证据保全'
});

Baoquan.add({
    name: { type: String, required: true, label:'证据保全' },
  },
  '测试分割线',
  {
    "测试字段2": {type: String, label: '测试字段2'},
});

Baoquan.relationship({ ref: 'Case', path: 'Baoquan' });
Delivery.defaultColumns = 'name';
Delivery.register();
