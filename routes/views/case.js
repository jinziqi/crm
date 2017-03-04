var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Init locals
    locals.section = 'case';
    // locals.filters = {
    //     category: req.params.category,
    // };
    locals.data = {
        cases: [],
    };

    // Load the posts
    view.on('init', function (next) {

        var q = keystone.list('Case').paginate({
            page: req.query.page || 1,
            perPage: 10,
            maxPages: 10,
            filters: {
                state: 'published',
                accessUsers :  {$in: ["58bae024b84cae31094da098"]}
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
