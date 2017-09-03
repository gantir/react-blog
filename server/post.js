var assert = require('assert');

const pool = require('./db').connectionPool;

module.exports = {
    addPost: function(title, subject, tag, callback) {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            var sqlQuery = "insert into `posts` (`title`,`subject`,`tag`) values('"+title+"','"+subject+"','"+tag+"');";
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
    
    deletePost: function(id, callback) {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            var sqlQuery = "delete from `posts` where `id` ="+id+";";
            connection.query(sqlQuery, (err, result) => {
                connection.release();
                if(null == err) {
                    callback(true);
                }
                else {
                    callback(false);
                }
            })
        });
    },

    updatePost: function(id, title, subject, tag, callback) {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            var sqlQuery = "update `posts` set `title` ='"+title+"', `subject`='"+subject+"', `tag`='"+tag+"' where `id`="+id+";";
            connection.query(sqlQuery, (err, result) => {
                connection.release();
                if(null == err) {
                    callback(true);
                }
                else {
                    callback(false);
                }
            });
        });
    },

    getPost: function(callback) {
        pool.getConnection( (err, connection) => {
            if(err) throw err;
            var sqlQuery = "select `id`, `title`, `subject`,`tag` from `posts`;";
            connection.query(sqlQuery, (err,result, fields) => {
                connection.release();
                if(null != result && 0 !== result.length) {
                    callback(result);
                }                    
            })
        });
    },

    getPostWithId: function(id, callback) {
        pool.getConnection((err, connection) => {
            if(err) return err;
            var sqlQuery = "select `id`, `title`, `subject`,`tag` from `posts` where `id` ="+id+";";
            connection.query(sqlQuery, (err, result, fields) => {
                connection.release();
                if(null != result && 0 != result.length) {
                    callback(result[0]);
                }
            })
        });
    },

    addTag: function(tag, callback) {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            var sqlQuery= "insert into `tag` (`name`) values ('"+tag+"');";
            connection.query(sqlQuery, (qErr, result) => {
                connection.release();
                if(null == qErr) {
                    callback(true);
                }
                else {
                    callback(false);
                }
            });
        });
    },

    getTag: function(callback) {
        pool.getConnection((err, connection) => {
            if(err) throw err;
            let sqlQuery = "select `id`, `name` from `tag`;";
            connection.query(sqlQuery, (qerr, result) => {
                if(null == result || 0 == result.length){
                    callback(false);
                }
                else 
                {
                    callback(result);
                }
            })
        });
    }
}