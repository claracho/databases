var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (body, callback) {
      var queryString = 'SELECT messages.id, messages.text, messages.roomname, users.username \
                        FROM messages INNER JOIN users ON messages.user_id=users.id';
      var params = [];
      return db.queryDatabase(queryString, params, callback);
    },
    // a function which can be used to insert a message into the database
    post: function (body, callback) {
      var queryString1 = 'INSERT INTO users (username) VALUES (?) ON DUPLICATE KEY UPDATE username=username';
      var params1 = [body.username];
      return db.queryDatabase(queryString1, params1, (err, data) => {
        if (err) { throw err; }
        var queryString2 = 'INSERT INTO messages (text, roomname, user_id) VALUES (?, ?, (SELECT id FROM users WHERE username = ?))';
        var params2 = [body.text, body.roomname, body.username];
        return db.queryDatabase(queryString2, params2, callback);
        // return db.queryDatabase(queryString2, params2, (err, data) => {
        //   if (err) { throw err; }
        //   var queryString3 = 'INSERT INTO messages (text, room_id, user_id) VALUES (?, (SELECT id FROM rooms WHERE roomname = ?), (SELECT id FROM users WHERE username = ?))';
        //   var params3 = [body.text, body.roomname, body.username];
        //   console.log('params3', params3);
        //   return db.queryDatabase(queryString3, params3, callback);
        // });
      });
    }
  },

  users: {
    get: function (body, callback) {
      var queryString = 'SELECT * FROM users';
      var params = [];
      return db.queryDatabase(queryString, params, callback);
    },
    post: function (body, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?) ON DUPLICATE KEY UPDATE username=username';
      var params = [body.username];
      return db.queryDatabase(queryString, params, callback);
    }
  }
};



