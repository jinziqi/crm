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

    };

    // Load the current post
    view.on('init', function (next) {

        var q = keystone.list('Case').model.findById(locals.filters.post);

        q.exec(function (err, result) {
            locals.data.post = result;
            next(err);
        });

    });

    // Render the view
    view.render('view');
};
