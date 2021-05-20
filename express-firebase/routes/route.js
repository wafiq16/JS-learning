var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fire = require('./fire')


// router.use(bodyParser.json());

router.get('/', (req, res) => {
    var db = fire.firestore();
    // db.settings({
    //     timestampInSnapshots: true
    // });
    var allData = [];
    db.collection('node-js-coba')
        .orderBy('waktu', 'desc').get()
        .then(snapshot => {
            snapshot.forEach((hasil) => {
                allData.push(hasil.data())
            })
            console.log(allData)
            res.send(allData)
        }).catch((error) => {
            console.log(error)
        });
});

router.post('/', (req, res) => {
    var db = fire.firestore();
    // db.settings({
    //     timestampInSnapshots: true
    // });
    // console.log(req.query.nama);
    // console.log(req.query.usia);
    // console.log(req.query.kota);
    db.collection('node-js-coba').add({
        nama: req.query.nama,
        usia: req.query.usia,
        kota: req.query.kota,
        waktu: new Date()
    });
    res.send({
        nama: req.query.nama,
        usia: req.query.usia,
        kota: req.query.kota,
        waktu: new Date()
    });
});

module.exports = router;