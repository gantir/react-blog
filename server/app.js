var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var user = require('./user');

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
  user.validateSignIn(email, password, (result) => {
    if(result) {
      res.send('Success');
    } else {
      res.send('Wrong email or password');
    }
  });
})

app.post('/signup', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  try {
    if(name && email && password) {
      user.signup(name, email, password);
      res.send('Success');
    }
    else {
      res.send('Failure');
    }
  } catch(e){
    console.log(e);
    res.send('Failure');
  }
})
