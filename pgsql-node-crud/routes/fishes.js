var express = require('express');
var router = express.Router();
var db = require('../database/config');

router.get("/", async function(req, res, next) {
    console.log('awal');
    try {
        console.log('masuk sini');
        var result = await db.query('SELECT * FROM fishes');
        // console.log('masuk sini 2');
        // // console.log(result);
        // fs.readFile("htmlFile/show_all.html", (err, data) => {
        //     if (err) throw err;
        //     return res.end(data);
        // });
        return res.json(result.rows);
    } catch (err) {
        // console.log(err);
        return next(err);
    }
});

router.post("/", async function(req, res, next) {
    let formData = qs.parse(req.body);
    try {
        var result = await db.query("INSERT INTO fishes (name, type) VALUES ($1, $2) RETURNING *", [formData.name, formData.type]);
        return res.json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
});

router.patch("/:id", async function(req, res, next) {
    try {
        const result = await db.query("UPDATE fishes SET name=$1, type=$2 WHERE id=$3 RETURNING *", [req.body.name, req.body.type, req.params.id]);
        return res.json(result.rows[0]);
    } catch (err) {
        return next(err);
        // console.log(err);
    }
});

router.delete("/:id", async function(req, res, next) {
    try {
        const result = await db.query("DELETE FROM fishes WHERE id=$1", [req.params.id]);
        return res.json({ message: "Deleted" });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;