const express = require('express');
const app = express();
const PORT = 3000;

// express.static
app.use(express.static('dist'));

app.listen(PORT, () => console.log(`Your app is listening on port ${PORT}!`))