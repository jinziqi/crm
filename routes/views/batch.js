var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Init locals
    locals.section = 'batch';
    // locals.filters = {
    //     category: req.params.category,
    // };
    locals.data = {
        batches: [],
    };
    locals.batchIds = [];

    view.on('init', function (next) {
        var q = keystone.list('Case').model.find({
            accessUsers :  {$in: [locals.user._id]}
        });
        q.distinct('batch', function (err, results) {
            locals.batchIds = results;
            next(err);
        });
    });


    // Load the posts
    view.on('init', function (next) {

        var q = keystone.list('Batch').model.find({
            _id :  {$in: locals.batchIds}
        })
            .sort('name');

        q.exec(function (err, results) {
            locals.data.batches = results;
            next(err);
        });
    });

    // Render the view
    view.render('batch');
};
