const express = require('express');
const app = express();
const pg = require('pg'); 

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/rutas'));

app.listen(4000);
console.log("server listen on port 4000");