var express = require('express');
var router = express.Router();
// var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var nodemailer = require('nodemailer');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     //   res.send('respond with a resource');
//     res.writeHead(302, {
//         'Location': '/wafiq/contact/'
//     });
//     res.end();
// });

router.post('/', function(req, res, next) {
    if (req.url === "/" && req.method === "POST") {
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
                    user: 'wafiqkamal16@gmail.com',
                    pass: 'kamaluddin123'
                }
            });

            let mailOption = {
                from: formData.email,
                replyTo: formData.email,
                to: 'bluemaethys@gmail.com',
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
});

module.exports = router;