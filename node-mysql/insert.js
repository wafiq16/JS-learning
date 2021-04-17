var db = require('./db_config');

db.connect(function(err) {
    if (err) throw err;

    var img_path = "/home/wafiq/JS-learning/node-mysql/image_assets/gambar.jpeg"; // '"+ img_path + "'image_assets/gambar.jpeg
    let sql = "INSERT INTO `mahasiswa`(nama, nrp, jurusan, angkatan, foto) VALUES('Muhammad Wafiq Kamaluddin','2210181042', 'Teknik Komputer', '2018', LOAD_FILE('/var/lib/mysql/gambar1.jpeg'))";
    // let sql = "LOAD_FILE('/home/wafiq/JS-learning/node-mysql/image_assets/gambar.jpeg')";
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted" + result);
    });
});