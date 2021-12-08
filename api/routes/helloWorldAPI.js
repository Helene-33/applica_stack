var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    text: "Hello World",
    subtitle: "group 3 is in the house!"
  });
});

module.exports = router;