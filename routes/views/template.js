var keystone = require('keystone'),
    Case = keystone.list('Case'),
    XLSX = require('xlsx'),
    fs = require('fs');

exports = module.exports = function (req, res) {
    var sheet_from_array_of_arrays = function(data, opts) {
        var ws = {};
        var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
        for(var R = 0; R != data.length; ++R) {
            for(var C = 0; C != data[R].length; ++C) {
                if(range.s.r > R) range.s.r = R;
                if(range.s.c > C) range.s.c = C;
                if(range.e.r < R) range.e.r = R;
                if(range.e.c < C) range.e.c = C;
                var cell = {v: data[R][C] };
                if(cell.v == null) continue;
                var cell_ref = XLSX.utils.encode_cell({c:C,r:R});

                /* TEST: proper cell types and value handling */
                if(typeof cell.v === 'number') cell.t = 'n';
                else if(typeof cell.v === 'boolean') cell.t = 'b';
                else if(cell.v instanceof Date) {
                    cell.t = 'n'; cell.z = XLSX.SSF._table[14];
                    cell.v = datenum(cell.v);
                }
                else cell.t = 's';
                ws[cell_ref] = cell;
            }
        }

        /* TEST: proper range */
        if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
        return ws;
    }

    var wb = {};
    wb.Sheets = {};
    wb.Props = {};
    wb.SSF = {};
    wb.SheetNames = [];

    var data = [];
    var fields = keystone.list('Case').fields;
    for(var key in fields) {
        data.push(fields[key].label);
    }
    var ws = sheet_from_array_of_arrays([data]);
    var ws_name = "Sheet1";
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    XLSX.writeFile(wb, "template.xlsx");

    res.setHeader('Content-disposition', 'attachment; filename=' + "template.xlsx");
    res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    var filestream = fs.createReadStream("template.xlsx");
    filestream.pipe(res);
};
