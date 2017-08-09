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
    "案件批次编号": {type: Number, label: '案件批次编号'},
    "案件主要内容": { type: String, label:'名称' },
  },
  '测试分割线',
  {
    "测试字段2": {type: String, label: '测试字段2'},
});

Batch.relationship({ ref: 'Case', path: 'batch' });
Batch.defaultColumns = 'name';
Batch.register();
