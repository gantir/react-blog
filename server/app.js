var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var session = require('express-session');

var user = require('./user');
var post = require('./post');

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

app.post('/getprofile', (req, res) => {
  user.getUserInfo(sessions.email, (result) => {
    res.send(result);
  });
});

app.post('/addpost', (req,res) => {
  var title = req.body.title;
  var subject = req.body.subject;
  var id = req.body.id;
  var email = req.session.email;
  try {
    if('' == id || undefined == id) {
      post.addPost(title,subject, (result)=> {
        res.send(result);
      });
    }
    else {
      post.updatePost(id, title, subject, (result)=> {
        res.send(result);
      });
    }
  }
  catch(e) {
    console.log(e);
    res.send('Failure');
  }
});

app.post('/getpost', (req,res) => {
  try {
    post.getPost((result) => {
      if(result) {
        res.send(result);
      }
      else {
        res.send('Failure');
      }
    });
  }
  catch(e) {
    res.send('Failure');
  }
});

app.post('/getpostwithid', (req, res) => {
  let id = req.body.id;
  try {
    post.getPostWithId(id, (result) => {
      if(result){
        res.send(result);
      }
      else {
        res.send('Failure');
      }
    })
  }
  catch(e) {
    res.send('Failure');
  }
});

app.post('/deletepost', (req, res) => {
  let id = req.body.id;
  try {
    post.deletePost(id, (result) => {
      if(result) {
        res.send(result);
      }
      else {
        res.send('Failure');    
      }
    });
  }
  catch(e) {
    res.send('Failure');
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
});
