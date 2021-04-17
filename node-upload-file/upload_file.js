var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');
var port = 1234;

http.createServer(function(req, res) {
    if (req.url === "/" && req.method === "GET") {
        fs.readFile("form_upload.html", (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            if (err) throw err;
            res.end(data);
        });
    }
    if (req.url == "/" && req.method === "POST") {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, field, files) {
            var oldpath = files.filetoupload.path;
            var newpath = __dirname + "/uploads/" + files.filetoupload.name;
            var newestpath = "/home/wafiq/JS-learning/node-mysql/image_assets/" + files.filetoupload.name;

            mv(oldpath, newestpath, function(err) {
                if (err) throw err;
                console.log("file upload succesfuly");
                return res.end("file upload succesfuly")
            })
        });
    }
}).listen(port);

console.log("server on " + port);