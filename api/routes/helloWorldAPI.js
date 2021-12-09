const express = require('express');
const router = express.Router();
const { helloWorld } = require('../models/HelloWorldSchema');

router.get('/', async function(req, res, next) {
  const data = await helloWorld.find().then(data => data[0]);
  res.send({
    hello_world: data,
    subtitle: "group 3 is in the house!"
  });
});

module.exports = router;