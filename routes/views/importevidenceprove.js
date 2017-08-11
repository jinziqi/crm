var keystone = require('keystone'),
    EvidenceProve = keystone.list('EvidenceProve'),
    XLSX = require('xlsx'),
    async = require('async');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Set locals
    locals.section = 'importevidenceprove';
    locals.errors = [];

    view.on('post', function (next) {

        var tasks = [];
        var dataUpdates = [];

        var EvidenceProvees;
        tasks.push(function (next) {
            keystone.list('EvidenceProve').model.find().exec(function (err, result) {
                EvidenceProvees = result;
                next(err);
            });
        });
        tasks.push(function (next) {
            var fields_map = {};
            var fields = keystone.list('EvidenceProve').fields;
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
            var update_fields = [];

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
                            cellValue = cellValue.trim();
                            if(fields_map[cellValue]){
                                import_fields[colNum] = fields_map[cellValue];
                                update_fields.push(fields_map[cellValue])
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
                    (function (row, rowNum, action, updateId) {
                        dataUpdates.push(function (next) {
                            if(action === 'insert') {
                                EvidenceProve.updateItem(new EvidenceProve.model(), row, {}, function (err) {
                                    if(err) {
                                        locals.errors.push({row: rowNum + 1, detail: err.detail});
                                    }
                                    next();
                                })
                            } else if (action === 'update') {
                                EvidenceProve.model.findById(updateId, function (err, model) {
                                    if(model) {
                                        EvidenceProve.updateItem(model, row, {fields:update_fields}, function (err) {
                                            if(err) {
                                                locals.errors.push({row: rowNum + 1, detail: err.detail});
                                            }
                                            next();
                                        })
                                    } else {
                                        locals.errors.push({row: rowNum + 1, detail: {ID:{fieldLabel:'ID'}}});
                                        next();
                                    }

                                });

                            }
                        });
                    })(row, rowNum, action, updateId);
                }

            }

            next();

        });

        async.series(tasks, function () {
            async.series(dataUpdates, next);
        });



    });

    // Render the view
    view.render('importevidenceprove');
};
