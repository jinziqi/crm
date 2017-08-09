var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Casebatch Model
 * ==========
 */

var Casebatch = new keystone.List('Casebatch', {
    label: '案件批次'
});

Casebatch.add({
    name: { type: String, required: true, label:'案件批次' },
    "案件批次编号": {type: Number, label: '案件批次编号'},
    "案件批次记录": {type: Types.Markdown, height: 100, label: '案件批次记录'},
  },
  '线索增加',
  {
    "线索来源": {type: Types.Select, options: '主任,公司,上海计易,作品通,张宏麟,其他', label: '线索来源'},
    "添加日期": {type: Types.Date, label: '添加日期'},
  },
  '主体查询',
  {
    "主体查询方": {type: Types.Select, options: '北京隆安,江苏海辉,张宏麟,其他', label: '主体查询方'},
    "主体查询申请日期": {type: Types.Date, label: '主体查询申请日期'},
    "主体查询反馈日期": {type: Types.Date, label: '主体查询反馈日期'},
    "主体查询状态": {type: Types.Select, options: '未查询,已申请,已完成', label: '主体查询状态'},
  },
  '租片查询',
  {
    "租片查询代理商": {type: Types.Select, options: '华盖,全景', label: '租片查询代理商'},
    "租片查询申请日期": {type: Types.Date, label: '租片查询申请日期'},
    "华盖反馈日期": {type: Types.Date, label: '华盖反馈日期'},
    "全景反馈日期": {type: Types.Date, label: '全景反馈日期'},
    "自查日期": {type: Types.Date, label: '自查日期'},
    "租片查询状态": {type: Types.Select, options: '未申请,已申请,已返回尚未比对,已完成', label: '租片查询状态'},
  },
  '证据保全',
  {
    "保全人": {type: Types.Select, options: '北京隆安,上海计易,时间戳张昌利,时间戳公司内部,其他', label: '保全人'},
    "证据保全申请日期": {type: Types.Date, label: '证据保全申请日期'},
    "证据保全完成日期": {type: Types.Date, label: '证据保全完成日期'},
    "证据保全状态": {type: Types.Select, options: '未申请,已申请,已完成', label: '证据保全状态'},
  },
  '案件移交律所',
  {
    "案件移交日期": {type: Types.Date, label: '"案件移交日期'},
    "案件负责律所": {type: Types.Select, options: '北京隆安,江苏海辉,上海计易,深圳谢涛,张宏麟,西安王正兴,其他', label: '案件负责律所'},
});

Batch.relationship({ ref: 'Case', path: 'Casebatch' });
Batch.defaultColumns = 'name';
Batch.register();
