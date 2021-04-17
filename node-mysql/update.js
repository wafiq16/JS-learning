var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;

    // kita akan mengubah alamat Starbucks
    let sql = `UPDATE mahasiswa
               SET nrp='1110181034'
               WHERE id=35`;

    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});