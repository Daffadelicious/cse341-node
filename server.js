// node_modules and package-lock.json should never be modified. Use npm install to reinstall if accidently changed
var express = require('express');
var app = express();
const connectDB = require('./DB/connection');
connectDB();

// Use either render's port from env or locally 3000
const port = process.env.PORT || 3000;

app.use('/', require("./routes"));

app.listen(port, ()=>{
    console.log(`It works! I'm on port ${port}`);
})