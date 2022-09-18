const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const bodyParse = require('body-parser');
const mongodb = require('./db/connect');


app
  .use(bodyParse.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes/'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log("Something went wrong: " + err);
  } else {
    app.listen(port);
    console.log(`I have connected on port ${port}!`);
  }
});