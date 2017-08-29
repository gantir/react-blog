var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var session = require('express-session');

var user = require('./user');

var app = express();
var PORT = 9000;

app.use(express.static(path.join(__dirname,"/html")));
app.use(session({secret:'my-secret'}));
app.use(bodyParser.json());
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var sessions;

app.post('/signin', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  sessions = req.session;
  user.validateSignIn(email, password, (result) => {
    if(result) {
      sessions.email = email;
      res.send('success');
    } else {
      res.send('Wrong email or password');
    }
  });
});

app.post('/signup', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  try {
    if(name && email && password) {
      user.signup(name, email, password);
      res.send('success');
    }
    else {
      res.send('Failure');
    }
  } catch(e){
    console.log(e);
    res.send('Failure');
  }
});

app.post('/addpost', (req,res) => {
  var title = req.body.title;
  var subject = req.body.subject;
  var email = req.session.email;
  try {
    console.log(title,subject,req.session);
    res.send('success');
  }
  catch(e) {
    console.log(e);
    res.send('Failure');
  }

});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
});
