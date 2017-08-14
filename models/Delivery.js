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
    "材料类型": {type: Types.Select, options: '数码原图,胶片,委托创作说明,肖像权协议,资质证件,版权登记证书,票据,法律服务协议,其他', label: '材料类型'},
    "对应被告": { type: String, label: '对应被告' },
    "对应图片编号": { type: String, label: '对应图片编号' },
    "对应案件编号": { type: Number, label: '对应案件编号' },
    "制作日期": { type: types.Date, label: '制作日期' },
    "备注": { type: String, label: '备注' },
});

Delivery.defaultColumns = 'name,材料类型,发送或收取,材料载体数量,收件单位,收件日期';
Delivery.register();
