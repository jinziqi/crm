var keystone = require('keystone'),
    Case = keystone.list('Case'),
    XLSX = require('xlsx'),
    async = require('async');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Set locals
    locals.section = 'import';

    view.on('post', function (next) {

        var tasks = [];
        var users, batches;
        tasks.push(function (next) {
            keystone.list('User').model.find().exec(function (err, result) {
                users = result;
                next(err);
            });
        });

        tasks.push(function (next) {
            keystone.list('Batch').model.find().exec(function (err, result) {
                batches = result;
                next(err);
            });
        });

        tasks.push(function () {
            var fields_map = {};
            var fields = keystone.list('Case').fields;
            for(var key in fields) {
                fields_map[fields[key].label] = key;
            }

            var workbook = XLSX.readFile(req.files.import_file.path);
            var sheet = workbook.Sheets['Sheet1'];
            var range = XLSX.utils.decode_range(sheet['!ref']);

            var row;
            var action;
            var updateId;
            var rowNum;
            var colNum;
            var import_fields = {};
            var update_fields = {};
            for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
                row = {};
                action = 'insert';
                updateId = null;
                for(colNum=range.s.c; colNum<=range.e.c; colNum++){
                    var nextCell = sheet[
                        XLSX.utils.encode_cell({r: rowNum, c: colNum})
                        ];
                    if(nextCell) {
                        var cellValue = nextCell.w;
                        if(rowNum === 0) {
                            //load header
                            if(fields_map[cellValue]){
                                import_fields[colNum] = fields_map[cellValue];
                                update_fields[fields_map[cellValue]] = 1;
                            }

                        } else {
                            if(colNum === 0) {
                                if (cellValue) {
                                    updateId = cellValue;
                                    action = 'update';
                                } else {
                                    action = 'insert';
                                }
                            }

                            if(import_fields[colNum]){
                                var colKey = import_fields[colNum];
                                if(colKey === 'accessUsers') {
                                    var list = cellValue.split(',');
                                    var cellValueRelation = [];
                                    for(var i in list) {
                                        for(var j in users) {
                                            if(users[j].name === list[i]) {
                                                cellValueRelation.push(users[j]._id);
                                            }
                                        }
                                    }
                                    cellValue = cellValueRelation;

                                } else if(colKey === '批次') {
                                    var list = cellValue.split(',');
                                    var cellValueRelation = [];
                                    for(var i in list) {
                                        for(var j in batches) {
                                            if(batches[j].name === list[i]) {
                                                cellValueRelation.push(batches[j]._id);
                                            }
                                        }
                                    }
                                    cellValue = cellValueRelation;

                                }
                                row[colKey] = cellValue;
                            }

                        }
                    }

                }

                if(rowNum > 0 ) {
                    if(action === 'insert') {
                        var newCase = new Case.model(row);
                        newCase.save();
                    } else if (action === 'update') {
                        keystone.list('Case').model.findOneAndUpdate({_id: updateId},row,{
                            fields: update_fields
                        }).exec();
                    }
                }



            }

            next();
        });

        async.series(tasks);

    });

    // Render the view
    view.render('import');
};
