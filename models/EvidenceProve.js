var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var EvidenceProve = new keystone.List('EvidenceProve', {
    label: '证据保全',
    plural: '证据保全',
    track: true
});

EvidenceProve.add({
        name: {type: String, required: true, label: '证书编号'},
        
    }
);

Case.customFilter = function (where, user) {
    if (!user.isAdmin)
        where.accessUsers = {$in: [user._id]};
    return where;
};

Case.schema.pre('save', function (next) {
    if (this.isNew) {
        if (this.accessUsers.length === 0 && this._req_user) {
            this.accessUsers.push(this._req_user._id);
        }
    }
    next();
});

Case.permission = true;

Case.defaultColumns = 'name|200px,案件编号|75px,案件批次,侵权形式,图片编号,侵权页面链接,发现人,线索处理意见,线索放弃原因,负责律所,诉讼状态,判决/调解赔偿金额,放弃诉讼原因,案件特别提醒';
Case.register();
