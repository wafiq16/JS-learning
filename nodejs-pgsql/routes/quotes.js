const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');

router.get('/', async function(req, res, next) {
    // res.json({
    // data: [{
    //     quote: 'First, solve the problem. then, write the code.',
    //     author: 'Wafiq Kamaluddin'

    // }],
    // meta: {
    //     page: 1
    // }
    // res.setHeader(
    //     'Content-Security-Policy',
    //     "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    // );
    try {
        res.json(await quotes.getMultiple(req.query.page));
    } catch (err) {
        console.error('Err while getting quotes', err.message);
        next(err);
    }
    // });
});

/* POST quotes */
router.post('/', async function(req, res, next) {
    try {
        res.json(await quotes.create(req.body));
    } catch (err) {
        console.error(`Error while posting quotes `, err.message);
        next(err);
    }
});

module.exports = router;