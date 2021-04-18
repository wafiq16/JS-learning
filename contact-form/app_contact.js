var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var nodemailer = require('nodemailer');
const port = 8000;

http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(302, {
            'Location': '/contact/'
        });
        res.end();
    }

    if (req.url === "/contact/" && req.method === "GET") {
        fs.readFile("htmlFile/contact_form.html", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }

    if (req.url === "/contact/" && req.method === "POST") {
        var requestBody = '';
        req.on('data', function(data) {
            requestBody += data;

            if (requestBody.length > 1e7) {
                res.writeHead(413, 'Request Entity Too Large', { 'Content-Type': 'text/html' });
                res.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
            }
        });

        req.on('end', function() {
            let formData = qs.parse(requestBody);

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'blueamethys16@gmail.com',
                    pass: 'kamaluddin123'
                }
            });

            let mailOption = {
                from: formData.email,
                replyTo: formData.email,
                to: 'wafiqkamal16@gmail.com',
                subject: formData.subject,
                text: formData.message
            };

            transporter.sendMail(mailOption, (err, info) => {
                if (err) throw err;
                console.log('Email sent' + info.response);
                res.end('Thanks');
            });
        });
    }
}).listen(port);

console.log('server on : ' + port);