const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// import controller
// const controller = require('./controller');

// parse request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})