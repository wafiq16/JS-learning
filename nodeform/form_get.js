var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);

    if (q.pathname == "/search/" && req.method === "GET") {
        var keyword = q.query.keyword;
        if (keyword) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h3>Search Results:</h3>");
            res.write("<p>Anda mencari: <b>" + keyword + "</b></p>");
            res.write("<pre>Tidak ada hasil! Maaf website ini masih dalam pengembangan</pre>");
            res.end("<a href='/search/'>Kembali</a>");
        }
    } else {
        fs.readFile('htmlFile/search.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Conten-Type': 'text/html' });
                // res.write(data);
                return res.end("404 not found");
            }
            // kirim form search.html
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
}).listen(2000);

console.log('running localhost:2000');