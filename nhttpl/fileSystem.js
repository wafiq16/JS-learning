const { EPROTONOSUPPORT } = require('constants');
var fs = require('fs');

fs.appendFile('myfile1.txt', "selamat pagi", function(err) {
    if (err) throw err;
    console.log("saved");
});

fs.open('myfile2.txt', 'r', function(err, file) {
    if (err) throw err;
    console.log("saved file2");
});

fs.open('myfile2.txt', 'w+', function(err, file) {
    if (err) throw err;
    let content = "hello dari barat";

    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log("saved for flag w+");
    });

    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log("isi file 2 " + data.toString('utf8'));
    });
});