var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Batch Model
 * ==========
 */

var CaseBatch = new keystone.List('CaseBatch', {
    label: '案件批次',
    plural: '案件批次'
});

CaseBatch.add({
    name: { type: String, required: true, label:'案件批次名称' },
    "案件批次编号": {type: Number, label: '案件批次编号'},
    "案件批次内容": { type: String, label:'案件批次内容' },
  },
  '线索增加',
  {
    "线索增加批次": {type: Number, label: '线索增加批次'},
    "线索来源": {type: Types.Select, options: '主任,公司,上海计易,作品通,张宏麟,外协,其他', label: '线索来源'},
    "添加日期": {type: Types.Date, label: '添加日期'},
  },
  '主体查询',
  {
    "主体查询批次": {type: Number, label: '主体查询批次'},
    "主体查询方": {type: Types.Select, options: '北京隆安,江苏海辉,张宏麟,其他', label: '主体查询方'},
    "主体查询申请日期": {type: Types.Date, label: '主体查询申请日期'},
    "主体查询反馈日期": {type: Types.Date, label: '主体查询反馈日期'},
    "主体查询状态": {type: Types.Select, options: '未查询,已申请,已完成', label: '主体查询状态'},
  },
  '租片查询',
  {
    "租片查询批次": {type: Number, label: '租片查询批次'},
    "租片查询申请日期": {type: Types.Date, label: '租片查询申请日期'},
    "华盖反馈日期": {type: Types.Date, label: '华盖反馈日期'},
    "全景反馈日期": {type: Types.Date, label: '全景反馈日期'},
    "自查日期": {type: Types.Date, label: '自查日期'},
    "租片查询状态": {type: Types.Select, options: '未申请,已申请,已返回尚未比对,已完成', label: '租片查询状态'},
  },
  '证据保全',
  {
    "证据保全批次": {type: Number, label: '证据保全批次'},
    "保全人": {type: Types.Select, options: '北京隆安,上海计易,时间戳张昌利,时间戳公司内部,其他', label: '保全人'},
    "证据保全申请日期": {type: Types.Date, label: '证据保全申请日期'},
    "证据保全完成日期": {type: Types.Date, label: '证据保全完成日期'},
    "证据保全状态": {type: Types.Select, options: '未申请,已申请,已完成', label: '证据保全状态'},
  },
  '案件移交律所',
  {
    "移交律所批次": {type: Number, label: '移交律所批次'},
    "案件移交日期": {type: Types.Date, label: '案件移交日期'},
    "案件负责律所": {type: Types.Select, options: '北京隆安,江苏海辉,上海计易,深圳谢涛,张宏麟,西安王正兴,其他', label: '案件负责律所'},
});

CaseBatch.relationship({ ref: 'Case', path: 'CaseBatch' });
CaseBatch.defaultColumns = 'name,案件批次编号,线索来源,主体查询状态,租片查询状态,证据保全状态,案件负责律所';
CaseBatch.register();
