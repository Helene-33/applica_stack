var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello World! This is Group 3!');
});

module.exports = router;