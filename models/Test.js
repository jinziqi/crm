var keystone = require('keystone');
var Types = keystone.Field.Types;
var Test = new keystone.List('Test', {
    label: '测试表'
});

Test.add({
    序号: { type: Number, required: true, label:'序号' },
    名称: { type: String, label:'名称' },
});

Test.relationship({ ref: 'Case', path: 'Test' });
Test.defaultColumns = '序号';
Test.register();
