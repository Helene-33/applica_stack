const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const { helloWorld } = require('../models/HelloWorldSchema');

const KEY = process.env.MONGOKEY;

router.get('/', function(req, res, next) {
  mongoose.connect("mongodb+srv://meanxael:tt5FXQD1XudeUPLd@cluster0.u46go.mongodb.net/group3?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(() => {
    helloWorld.find({}).then((found) => {
      res.send({
        data: found,
        subtitle: "group 3 is in the house!"
      });
    })
  })
});

module.exports = router;