var keystone = require('keystone'),
    Case = keystone.list('Case'),
    XLSX = require('xlsx');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Set locals
    locals.section = 'import';

    view.on('post', function (next) {
        var fields = keystone.list('Case').fields;

        var workbook = XLSX.readFile(req.files.import_file.path);
        var worksheet = workbook.Sheets['Sheet1'];
        for (z in worksheet) {
            /* all keys that do not begin with "!" correspond to cell addresses */
            if(z[0] === '!') continue;
            console.log(z + "=" + JSON.stringify(worksheet[z].v));
        }
    });

    // Render the view
    view.render('import');
};
