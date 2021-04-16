var http = require('http');
var qs = require('querystring');
var fs = require('fs');
var port = 3000;

http.createServer(function(req, res) {
    if (req.url === "/login/" && req.method === "GET") {
        fs.readFile("htmlFile/login_form.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 not found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
    if (req.url === "/login/" && req.method === "POST") {
        var requestBody = '';
        req.on('data', function(data) {
            requestBody += data;

            if (requestBody.length > 1e7) {
                res.writeHead(413, 'Request entity too larger');
                res.end('<!doctype html> <html><head><title>413</title></head></html>')
            }
        });
        req.on('end', function() {
            var formData = qs.parse(requestBody);

            if (formData.username === "root" && formData.password === 'root') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h2>Selamat datang bos!</h2> ');
                res.write('<p>username: ' + formData.username + '</p>');
                res.write('<p>password: ' + formData.password + '</p>');
                res.write("<a href='/login/'>kembali</a>");
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h2>Login Gagal!</h2> ');
                res.write("<a href='/login/'>coba lagi</a>");
                res.end();
            }
        });
    }
}).listen(port);


console.log('server is running on http://localhost:' + port);