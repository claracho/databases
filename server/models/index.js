var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (body, callback) {
      var queryString = 'SELECT * FROM messages';
      var params = [];
      return db.connection.query(queryString, params, (err, data) => {
        if (err) { throw err; }
        return callback(err, data);
      });
    },
    // a function which can be used to insert a message into the database
    post: function (body, callback) {
      var queryString = 'INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)';
      var params = [body.message, body.username, body.roomname];
      return db.connection.query(queryString, params, (err, data) => {
        if (err) { throw err; }
        return callback(err, data);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (body) {
      // var tablename = 'messages';
      // var queryString = 'SELECT * FROM ' + tablename;
      // db.queryDatabase(queryString, body);
    }
  }
};



