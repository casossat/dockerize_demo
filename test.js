var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var pg = require("./models/index")

var userFakeCtrl = require("./services/userFakeCtrl");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var userFakes = express.Router()

userFakes.route('/user_fake')
  .get(userFakeCtrl.findAllUserFake);

app.use('/api', userFakes);

app.listen(3000, function () {
  console.log('Listening port 3000!');
});

