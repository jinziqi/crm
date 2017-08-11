var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * EvidenceProve Model
 * ==========
 */

var EvidenceProve = new keystone.List('EvidenceProve', {
    label: '证据保全',
    plural: '证据保全',
    track: true
});

EvidenceProve.add({
        name: {type: String, required: true, label: '证书编号'},
        "主要保全内容": {type: String, label: '主要保全内容'},
        "保全成本": {type: Types.Money, label: '保全成本'},
        "保全附加费": {type: Types.Money, label: '保全附加费'},
        "结算申请日期": {type: Types.Date, label: '结算申请日期'},
    }
);
EvidenceProve.defaultColumns = 'name';
EvidenceProve.register();
