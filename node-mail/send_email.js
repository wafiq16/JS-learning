var nodemailer = require('nodemailer');
var fs = require('fs');
var http = require('http');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'blueamethys16@gmail.com',
        pass: 'isienpasswordmudewe'
    }
});

fs.readFile('htmlFile/search.html', (err, data) => {
    if (err) {
        // res.writeHead(404, { 'Conten-Type': 'text/html' });
        // res.write(data);
        // return res.end("404 not found");
        throw err;
    }
    // kirim form search.html
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write(data);
    // return res.end();
    // console.log(data);
    var mailOption = {
        from: 'blueamethys16@gmail.com',
        to: 'wafiqkamal16@gmail.com',
        subject: 'Sending Email using Nodejs',
        html: data, //"<p><b>myHtmlFile</b></p>",
        attachments: [{
            filename: 'login_form.html',
            content: data
        }]
    };

    transporter.sendMail(mailOption, (err, info) => {
        if (err) throw err;
        console.log('Email sent : ' + info.response);
    });
});

// console.log(myHtmlFile);

// var mailOption = {
//     from: 'blueamethys16@gmail.com',
//     to: 'wafiqkamal16@gmail.com',
//     subject: 'Sending Email using Nodejs',
//     html: myHtmlFile //"<p><b>myHtmlFile</b></p>"
// };

// transporter.sendMail(mailOption, (err, info) => {
//     if (err) throw err;
//     console.log('Email sent : ' + info.response);
// });