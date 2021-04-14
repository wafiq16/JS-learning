var http = require('http');
var url = require('url');
var fs = require('fs');
var port = 2002;

var server = http.createServer(function(req, res) {
    // res.end("selamat server nodejs anda sudah berhasil");
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write("<b>halo ini percobaan respon html pada nodejs</b><br>");
    // untuk JSON
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.write("halo ini percobaan respon html pada nodejs");
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("URL : " + req.url + '\n');
        res.write(data);
        // var myUrl = new URL(req.url);
        var q = url.parse(req.url, true).query;
        var txt = "Keyword : " + q.jalan;
        res.write(txt);
        res.end();
    });
    // switch (req.url) {
    //     case '/about':
    //         res.write("Ini adalah halaman about");
    //         break;
    //     case '/profile':
    //         res.write("Ini adalah halaman profile");
    //         break;
    //     case '/produk':
    //         res.write("ini adalah halaman produk");
    //         break;
    //     default:
    //         res.write("404: Halaman tidak ditemukan");
    // }
    // untuk PDF
    // res.writeHead(200, { 'Content-Type': 'application/pdf' });
    // res.write("<b>halo ini percobaan respon html pada nodejs</b>");
    // untuk XML
    // res.writeHead(200, { 'Content-Type': 'application/xml' });
    // res.write("<b>halo ini percobaan respon html pada nodejs</b>");
}).listen(port);

// server.listen(2001);

console.log("server running on http://localhost:" + port);