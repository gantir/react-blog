var assert = require('assert');

const pool = require('./db').connectionPool;

module.exports = {
    addPost: function(title, subject, callback) {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            var sqlQuery = "insert into `posts` (`title`,`subject`) values('"+title+"','"+subject+"');";
            connection.query(sqlQuery, (err, result) => {
                connection.release();
                if(null == err) {
                    callback(true);
                } else {
                    callback(false);
                }
            });
        });
    },

    getPost: function(callback) {
        pool.getConnection( (err, connection) => {
            if(err) throw err;
            var sqlQuery = "select `id`, `title`, `subject` from `posts`;";
            connection.query(sqlQuery, (err,result, fields) => {
                connection.release();
                if(null != result && 0 !== result.length) {
                    callback(result);
                }                    
            })
        });
    }
}