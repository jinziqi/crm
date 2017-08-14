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
    name: { type: String, required: true, label:'材料名称' },
    "材料类型": { type: types.select, options: '材料类型,起诉书,数码原图,委托创作说明,上诉状,肖像权协议,授权书,资质证件,胶片,登记证书,票据,法律服务协议,公证书,和解协议,撤诉裁定,其他', label: '材料类型' },
    "对应被告": { type: String, label: '对应被告' },
    "对应图片编号": { type: String, label: '对应图片编号' },
    "对应案件编号": { type: Number, label: '对应案件编号' },
    "制作日期": { type: types.Date, label: '制作日期' },
    "备注": { type: String, label: '备注' },
  },
  '权利证据',
  {
    "是否提供同组图片": { type: types.select, options: '是,否', label: '是否提供同组图片' },
    "是否提供花絮": { type: types.select, options: '是,否', label: '是否提供花絮' },
    "模特名称": { type: String, label: '模特名称' },
    "登记证书编号": { type: String, label: '登记证书编号' },
  },
  '资质证件',
  {
    "资质证件类型": { type: types.select, options: '法定代表人身份证明,营业执照,组织机构代码证,法定代表人身份证,身份证', label: '资质证件类型' },
    "资质证件主体": { type: String, label: '资质证件主体' },
    "注明有效期": { type: types.Date, label: '注明有效期' },
  },
  '票据',
  {
    "票据内容": { type: String, label: '票据内容' },
    "付款单位": { type: String, label: '付款单位' },
    "开票单位": { type: String, label: '开票单位' },
    "票据金额": { type: types.Money, label: '票据金额' },
    "票据编号": { type: Number, label: '票据编号' },
  },
  '材料收寄',
  {
    "发送或收取": { type: types.select, options: '发送,收取,流转', label: '发送或收取' },
    "递交形式": { type: types.select, options: '快递,面取,QQ,电子邮件', label: '递交形式' },
    "材料载体": { type: types.select, options: '原件,光盘,电子文件,扫描件,复印件,公证复印件,其他', label: '材料载体' },
    "材料载体数量": { type: Number, label: '材料载体数量' },
    "发件单位": { type: String, label: '发件单位' },
    "发件人": { type: String, label: '发件人' },
    "发件日期": { type: types.Date, label: '发件日期' },
    "收件单位": { type: String, label: '收件单位' },
    "收件人": { type: String, label: '收件人' },
    "收件日期": { type: types.Date, label: '收件日期' },
    "快递公司": { type: types.select, options: '顺丰,韵达,EMS,其他', label: '快递公司' },
    "快递单号": { type: String, label: '快递单号' },
    "快递费用": { type: types.Money, label: '快递费用' },
    "收寄备注": { type: String, label: '收寄备注' },
});

Delivery.defaultColumns = '';
Delivery.register();
