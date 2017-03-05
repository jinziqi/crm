var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Init locals
    locals.section = 'case';
    locals.filters = {
        batch: req.query.batch,
    };
    locals.data = {
        cases: [],
    };
    locals.data.batch = req.query.batch ? '?batch=' + req.query.batch : '';

    // Load the posts
    view.on('init', function (next) {

        var q = keystone.list('Case').paginate({
            page: req.query.page || 1,
            perPage: 10,
            filters: {
                accessUsers :  {$in: [locals.user._id]}
            },
        })
            .sort('-publishedDate')
            .populate('author categories');



        q.exec(function (err, results) {
            locals.data.cases = results;
            next(err);
        });
    });

    // Render the view
    view.render('case');
};
