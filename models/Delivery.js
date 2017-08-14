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
    "材料类型": {type: Types.select, options: '材料类型,起诉书,数码原图,委托创作说明,上诉状,肖像权协议,授权书,资质证件,胶片,登记证书,票据,法律服务协议,公证书,和解协议,撤诉裁定,其他', label: '材料类型'},
});
Delivery.relationship({ ref: 'Case', path: 'Delivery' });
Delivery.defaultColumns = 'name,材料类型,发送或收取,材料载体数量,收件单位,收件日期';
Delivery.register();
