var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    let sql = `CREATE TABLE mahasiswa
    (
        id int NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        nrp VARCHAR(255),
        jurusan VARCHAR(255),
        angkatan VARCHAR(255),
        foto LONGBLOB,
        PRIMARY KEY (id)
    )`;
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created")
    });
});