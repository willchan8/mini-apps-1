const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const PORT = 3000;


app.use(express.static('public'));

app.use(bodyParser.json());

// GET Route
app.get('/test', (req, res) => {  
  db.query("SELECT * FROM userdata;", (err, data) => {
    res.send(data[0]);
    }
  )}
)

// POST Route
app.post('/test', (req, res) => {
  console.log("I am posting")
  console.log(req.body.name);
  // let postQuery = `INSERT INTO userdata (name, email, password) VALUES ("${req.body.name}", "${req.body.email}", "${req.body.password}");`
  let postQuery = `INSERT INTO userdata (name, email, password) VALUES (?, ?, ?);`
  let option = [req.body.name, req.body.email, req.body.password];
  db.query(postQuery, option, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully Posted userdata');
    }
  })
  }
)

app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`))