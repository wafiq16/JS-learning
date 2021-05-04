var express = require('express');
var router = express.Router();
var db = require('../database/config');

router.get("/", async function(req, res, next) {
    try {
        var result = await db.query("SELECT * FROM fishes");
        return res.json(result.row);
    } catch (err) {
        return next(err);
    }
});

router.post("/", async function(req, res, next) {
    try {
        var result = await db.query("INSERT INTO fishes (name, type) VALUES ($1, $2) RETURNING *", [req.body.name, req.body.type]);
        return res.json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
});

router.patch("/:id", async function(req, res, next) {
    try {
        var result = await db.query(
            "UPDATE fishes SET name=$1, type=$2 WHERE id=$3 RETURNING *", [req.body.name], [req.body.type], [req.params.id]
        );
        return res.json(result.row[0]);
    } catch (err) {
        return next(err);
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