// node_modules and package-lock.json should never be modified. Use npm install to reinstall if accidently changed
const express = require('express');
const connectDB = require('./DB/connection');
var app = express();
// connect to database
connectDB()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Use either render's port from env or locally 3000
const port = process.env.PORT || 3000;

app.use('/', require("./routes"));

app.listen(port, ()=>{
    console.log(`It works! I'm on port ${port}`);
})