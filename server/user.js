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
        if(null == result || 0 === result.length) {
          callback(false);
        }
        else {
          callback(true);
        }
      });
    });
  },

  getUserInfo: function(email, callback) {
    pool.getConnection((err, connection) => {
      if(err) throw err;
      let sqlquery = "select id, name, email,password from `user` where email='"+email+"';";
      connection.query(sqlquery, (qErr, result, fields) => {
        if(qErr) throw qErr;
        connection.release();
        if(null == result || 0 === result.length) {
          callback(false);
        }
        else {
          callback(result[0]);
        }
      });
    });
  },

  updateInfo: function(email, name, password, callback) {
    pool.getConnection((err, connection) => {
      var sqlquery = "update `user` set `name`='"+name+"', `password`='"+password+"' where `email`='"+email+"';";
      connection.query(sqlquery, (qErr, result) => {
        connection.release();
        if(null == err) {
          callback(true);
        }
        else {
          callback(false);
        }
      });
    });
  }
}
