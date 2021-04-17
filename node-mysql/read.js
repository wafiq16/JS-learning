var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;

    let sql = "SELECT * FROM mahasiswa";
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});