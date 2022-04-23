var express = require('express');
var router = express.Router();
var os = require("os");

/* GET os page. */
router.get('/', function (req, res, next) {
    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform()
    });
});

/* GET os/cpus page. */
router.get('/cpus', function (req, res, next) {
    res.json(os.cpus());
});

router.get('/cpus/:id', function (req, res, next) {
    res.json(os.cpus()[req.params.id] ? os.cpus()[req.params.id] : { error: 'cpu not found' });
});

module.exports = router;