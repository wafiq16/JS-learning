var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;

    let sql = "INSERT INTO `mahasiswa`(nama, nrp, jurusan, angkatan, foto) VALUES ?";
    var values = [
        ['wafiq', '2210181042', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['3AM Coffee', 'Lowstreet 4', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Apple Cafe', 'Apple st 652', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Laravel Coffee', 'Mountain 21', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Nodejs Cafe', 'Valley 345', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['PHP Hotel', 'Ocean blvd 2', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['One Cafe', 'Green Grass 1', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Richard bar', 'Sky st 331', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Susan Cafe', 'One way 98', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Vicky Club', 'Yellow Garden 2', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Ben Resto', 'Park Lane 38', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['William Company', 'Central st 954', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Chuck Food', 'Main Road 989', 'Teknik Komputer', '2018', 'haha gaiso'],
        ['Viola Coffee', 'Sideway 1633', 'Teknik Komputer', '2018', 'haha gaiso']
    ];
    db.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});