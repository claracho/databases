var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var queryDatabase = function (queryString, params) {
  var data;  

  var dbConnection = mysql.createConnection({
    user: 'root',
    password: 'plantlife',
    database: 'chat'
  });

  dbConnection.connect();

  // var tablename = 'messages';
  // var queryString = 'SELECT * FROM ' + tablename;
  // var data;

  // dbConnection.query(queryString, function(err, results) {
  //   if (err) { throw err; }
  //   console.log('query successful', results);
  //   data = results;
  // });

  dbConnection.query(queryString, params, function(err, results) {
    if (err) { throw err; }
    console.log('queryString', queryString, 'results', results);
    data = results;
  });

  dbConnection.end();

  return data;
};

module.exports = {
  queryDatabase: queryDatabase
};
