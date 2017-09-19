var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      models.messages.post(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
      });
    },
    // a function which handles OPTIONS method
    options: function (req, res) {
      // can obtain query values by req.query()
      res.set('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.set('Content-Type', 'application/json');
      res.sendStatus(200);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
      });
    }
  }
};

