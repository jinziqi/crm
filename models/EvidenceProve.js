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
        name: {type: String, required: true, unique: true, label: '证书编号'},
        "保全内容": {type: String, label: '保全内容'},
        "保全成本": {type: Types.Money, label: '保全成本'},
        "保全附加费": {type: Types.Money, label: '保全附加费'},
        "结算申请日期": {type: Types.Date, label: '结算申请日期'},
        "付款日期": {type: Types.Date, label: '付款日期'},
    }
);

EvidenceProve.customFilter = function (where, user) {
    if (!user.AccessEvidenceProve)
        where.AccessEvidenceProve = {$in: [user._id]};
    return where;
};

EvidenceProve.schema.pre('save', function (next) {
    if (this.isNew) {
        if (this.AccessEvidenceProve.length === 0 && this._req_user) {
            this.AccessEvidenceProve.push(this._req_user._id);
        }
    }
    next();
});


EvidenceProve.defaultColumns = 'name,保全内容,保全成本,保全附加费,结算申请日期,付款日期';
EvidenceProve.register();
