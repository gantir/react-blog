var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");

var app = express();
var PORT = 9000;

app.use(express.static(path.join(__dirname,"/html")));
app.use(bodyParser.json());
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
});

app.post('/signin', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  if('admin@example.com' === email && 'admin' === password) {
    res.send('Success');
  } else {
    res.send('Failure');
  }
})

app.post('/signup', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  if('admin@example.com' === email && 'admin' === password && name && 0 !== name)) {
    res.send('Success');
  } else {
    res.send('Failure');
  }
})
