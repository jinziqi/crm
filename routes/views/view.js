var keystone = require('keystone'),
    Case = keystone.list('Case');

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
    locals.validationErrors = {};
    locals.role = {
        read: [],
        write: []
    };

    view.on('init', function (next) {
        if(!locals.user.role) {
            return next();
        }
        var q = keystone.list('Role').model.findById(locals.user.role);
        q.exec(function (err, result) {
            locals.role = {
                read: result.readPermission ? result.readPermission.split('|') : [],
                write: result.writePermission ? result.writePermission.split('|') : []
            };
            next(err);
        });
    });

    view.on('post', { action: 'save' }, function (next) {

        var q = keystone.list('Case').model.findById(locals.filters.post);
        q.exec(function (err, result) {
            var updater = result.getUpdateHandler(req);

            updater.process(req.body, {
                flashErrors: true,
                errorMessage: '保存数据错误:',
            }, function (err) {
                if (err) {
                    locals.validationErrors = err.errors;
                    next();
                } else {
                    res.redirect('/case/' + locals.filters.post);
                }

            });
        });

    });

    view.on('post', {action: 'new'}, function (next) {
        var newCase = new Case.model();
        var updater = newCase.getUpdateHandler(req);
        updater.process(req.body, {
            flashErrors: true,
            errorMessage: '保存数据错误:',
        }, function (err) {
            if (err) {
                locals.validationErrors = err.errors;
                next();
            } else {
                res.redirect('/');
            }

        });
    });

    view.on('post', {action:'bulk'}, function (next) {
        var updated_vals = {};
        for(var key in locals.data.fields) {
            var field = locals.data.fields[key];

            if(req.body[key] && locals.role.write.indexOf(field.label) !== -1) {
                updated_vals[key] = req.body[key];
            }
        }

        var q = keystone.list('Case').model.update({},updated_vals,{ multi: true });
        q.exec(function (err, result) {
            if (err) {
                next(err);
            } else {
                res.redirect('/');
            }
        });
    });

    var generateViewData = function (result) {
        locals.data.case.name = result.name;
        for(var key in locals.data.fields) {
            var field = locals.data.fields[key];

            if(field.type !== 'relationship') {
                if(locals.role.read.indexOf(field.label) === -1) {
                    continue;
                }
                var value;
                if(field.type==='date' && result[key]) {
                    value = result._[key].format('YYYY-MM-DD');
                } else {
                    value = result[key];
                }
                var fieldData = {
                    name: field.label,
                    value: value,
                    type: field.type,
                    key: key,
                    edit: false
                };
                if(locals.role.write.indexOf(field.label) !== -1) {
                    fieldData.edit = true;
                }
                locals.data.case.push(fieldData);
            }
        }
    };


    // Load the current post
    view.on('init', function (next) {
        if(locals.filters.post !== 'new' && locals.filters.post !== 'bulk') {
            var q = keystone.list('Case').model.findById(locals.filters.post);

            q.exec(function (err, result) {
                generateViewData(result);
                locals.data.action = 'save';
                next(err);
            });
        } else {
            locals.data.action = locals.filters.post;
            generateViewData({});
            next();
        }


    });



    // Render the view
    view.render('view');
};
