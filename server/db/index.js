var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var queryDatabase = (queryString, params, callback) => {
  var connection = mysql.createConnection({
    user: 'root',
    password: 'plantlife',
    database: 'chat',
    multipleStatements: true
  });
  connection.connect();
  connection.query(queryString, params, (err, data) => {
    if (err) { throw err; }
    return callback(err, data);
  });
  connection.end();
};

module.exports = {
  queryDatabase: queryDatabase
};
