const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const PORT = 3000;


app.use(express.static('public'));

app.use(bodyParser.json());

// POST Route
// app.get(
//   //TODO
// )

// GET Route
app.get('/test', (req, res) => {  
  db.query("select * from userdata;", (err, data) => {
  res.send(JSON.stringify(data[0].email));
  console.log(data)}
  )}
)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))