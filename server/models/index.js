var db = require('../db');

module.exports = {
  messages: {
    get: function (body) {
      var queryString = 'SELECT * FROM messages';
      var params = [];
      return db.queryDatabase(queryString, params);
    }, // a function which produces all the messages
    post: function (body) {
      var queryString = 'INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)';
      var params = [ body.message, body.username, body.roomname ];
      return db.queryDatabase(queryString, params);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (body) {
      var tablename = 'messages';
      var queryString = 'SELECT * FROM ' + tablename;
      db.queryDatabase(queryString, body);
    }
  }
};



