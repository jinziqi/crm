var keystone = require('keystone');
var Types = keystone.Field.Types;
var Test = new keystone.List('Test', {
    label: '测试表'
});

Test.add({
      name: { type: String, required: true, label:'名称' },
      编号: { type: Number, label:'编号' }
    });

    Batch.relationship({ ref: 'Case', path: 'Test' });
    Batch.defaultColumns = '编号';
    Batch.register();
