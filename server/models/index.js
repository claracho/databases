var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (body, callback) {
      var queryString = 'SELECT messages.id, messages.text, messages.roomname, users.username FROM messages INNER JOIN users ON (messages.user_id=users.id)';
      var params = [];
      return db.queryDatabase(queryString, params, callback);
    },
    // a function which can be used to insert a message into the database
    post: function (body, callback) {
      var queryString = 'INSERT INTO messages (text, roomname, user_id) VALUES \
      (?, ?, (SELECT id FROM users WHERE username = ?))';
      var params = [body.text, body.roomname, body.username];
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



