var keystone = require('keystone');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Set locals
    locals.section = 'case';
    locals.filters = {
        post: req.params.post,
    };
    locals.data = {
        fields: keystone.list('Case').fields,
        case: []
    };

    view.on('init', function (next) {
        var q = keystone.list('Role').model.findById(locals.user.role);
        q.exec(function (err, result) {
            locals.role = {
                read: result.readPermission.split('|'),
                write: result.writePermission.split('|')
            };
            next(err);
        });
    });


    // Load the current post
    view.on('init', function (next) {

        var q = keystone.list('Case').model.findById(locals.filters.post);

        q.exec(function (err, result) {
            locals.data.case.name = result.name;
            for(var key in locals.data.fields) {
                var field = locals.data.fields[key];

                if(field.type !== 'relationship') {
                    if(locals.role.read.indexOf(field.label) === -1) {
                        continue;
                    }
                    var value;
                    if(field.type==='date') {
                        value = result._[key].format('YYYY-MM-DD');
                    } else {
                        value = result[key];
                    }
                    var fieldData = {
                        name: field.label,
                        value: value,
                        type: field.type,
                        edit: false
                    };
                    if(locals.role.write.indexOf(field.label) !== -1) {
                        fieldData.edit = true;
                    }
                    locals.data.case.push(fieldData);
                }
            }
            next(err);
        });

    });

    // Render the view
    view.render('view');
};
