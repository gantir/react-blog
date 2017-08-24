var mysql = require('mysql');
var assert = require('assert');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  port: 3307,
  database: 'react_blog'
});


module.exports = {
  signup: function(name, email, password) {
    connection.connect((err) => {
      if (err) throw err;
      var sqlquery = "insert into `user` (`name`,`email`,`password`) values('"+name+"','"+email+"','"+password+"');";
      connection.query(sqlquery, (err, result) =>{
        if(err) throw err;
        console.log('1 record inserted');console.log(result);
        return result.insertId;
      });
    });
  },

  validateSignIn: function(email, password, callback) {
    connection.connect((err) => {
      if(err) throw err;
      var sqlquery = "select name, email from `user` where email='"+email+"' and '"+password+"';";
      connection.query(sqlquery, (err, result, fields) => {
        if(err) throw err;
        console.log(result);
        if(null == result || 0 === result.length) {
          callback(false);
        }
        else {
          callback(true);
        }
      });
    });
  }
}
