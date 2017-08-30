var mysql = require('mysql');
var assert = require('assert');

const pool = require('./db').connectionPool;


module.exports = {
  signup: function(name, email, password) {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      var sqlquery = "insert into `user` (`name`,`email`,`password`) values('"+name+"','"+email+"','"+password+"');";
      connection.query(sqlquery, (err, result) => {
        if(err) throw err;
        connection.release();
        console.log('1 record inserted');console.log(result);
        return result.insertId;
      });
    });
  },

  validateSignIn: function(email, password, callback) {
    pool.getConnection((poolErr, connection) => {
      if(poolErr) throw poolErr;
      var sqlquery = "select name, email from `user` where email='"+email+"' and password='"+password+"';";
      connection.query(sqlquery, (qErr, result, fields) => {
        if(qErr) throw qErr;
        connection.release();
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
