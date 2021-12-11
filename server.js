const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require('dotenv')
dotenv.config();

const helloWorldAPI = require('./api/routes/helloWorldAPI');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, "./group3-app/build")));

app.use('/helloworld', helloWorldAPI);

const PORT = process.env.PORT || 5000;

// Global handler
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./group3-app/build", "index.html"));
});

app.listen(PORT, function () {
  console.log('Server running at http://127.0.0.1:' + PORT + '/');
});
module.exports = app;