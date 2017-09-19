var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(req.body, (err, data) => {
        if (err) { throw err; }
        console.log(JSON.stringify({ results: data }));
        res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('access-control-allow-origin', '*');
        res.header('access-control-allow-headers', 'content-type, accept');
        res.header('access-control-max-age', 10);
        res.header('Content-Type', 'application/json');
        res.header('Last-Modified', (new Date()).toUTCString());
        res.json({results: data});
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('post', req.body);
      console.log('post', req.query);
      models.messages.post(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
      });
    },
    // a function which handles OPTIONS method
    options: function (req, res) {
      // can obtain query values by req.query()
      res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('access-control-allow-origin', '*');
      res.header('access-control-allow-headers', 'content-type, accept');
      res.header('access-control-max-age', 10);
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

