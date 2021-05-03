var express = require('express');
var router = express.Router();
var moment = require("moment");
var wafiq = require("../wafiq");

console.log(wafiq.wafiqPagi());
console.log("sekarang : " + moment().format('D MMMM YYYY, h:mm:ss a'));
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;