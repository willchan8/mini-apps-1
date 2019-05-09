// Imports the mysql library for use to connect to the mysql db
const mysql = require('mysql');

// Creating a connection configuration object to connect to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase'
})

// 
connection.connect(function(err) {
  if (err) {
    throw (err);
  }
  console.log('Connected!');
});

// Export the connection object which contains methods to
// manipulate, and query the mysql database specified in the connection object
module.exports = connection;