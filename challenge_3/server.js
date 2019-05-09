const express = require('express');
const app = express();
const PORT = 3000;
// const db = require('./db');


app.use(express.static('public'));

// GET Route
// app.get(
//   //TODO
// )

// // POST Route
// app.post(
//   //TODO
// )

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))