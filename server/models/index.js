var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (body, callback) {
      var queryString = 'SELECT * FROM messages';
      var params = [];
      return db.queryDatabase(queryString, params, callback);
    },
    // a function which can be used to insert a message into the database
    post: function (body, callback) {
      var queryString = 'INSERT INTO messages (message, roomname, user_id) VALUES \
      (?, ?, (SELECT id FROM users WHERE username = ?))';
      var params = [body.message, body.roomname, body.username];
      return db.queryDatabase(queryString, params, callback);
    }
  },

  users: {
    get: function (body, callback) {
      var queryString = 'SELECT * FROM users';
      var params = [];
      return db.queryDatabase(queryString, params, callback);
    },
    post: function (body, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      var params = [body.username];
      return db.queryDatabase(queryString, params, callback);
    }
  }
};



