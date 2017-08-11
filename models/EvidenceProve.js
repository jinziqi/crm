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
    }
);

EvidenceProve.customFilter = function (where, user) {
    if (!user.isAdmin)
        where.accessUsers = {$in: [user._id]};
    return where;
};

EvidenceProve.schema.pre('save', function (next) {
    if (this.isNew) {
        if (this.accessUsers.length === 0 && this._req_user) {
            this.accessUsers.push(this._req_user._id);
        }
    }
    next();
});

EvidenceProve.permission = true;

EvidenceProve.defaultColumns = 'name';
EvidenceProve.register();
