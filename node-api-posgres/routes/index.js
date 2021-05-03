var express = require('express');
var router = express.Router();
// const router = express();
const bodyParser = require('body-parser');
var query = require('../query');

router.use(bodyParser.json())
router.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

router.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

router.get('/users', query.getUsers)
router.get('/users/:id', query.getUserById)
router.post('/users', query.createUser)
router.put('/users/:id', query.updateUser)
router.delete('/users/:id', query.deleteUser)

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    // res.json({ info: 'Node.Js, Express, and Postgres API' });
});

module.exports = router;