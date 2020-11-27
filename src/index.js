const express = require('express');
const app = express();
const pg = require('pg'); 
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//routes
app.use(require('./routes/rutas'));

app.listen(5000);
console.log("server listen on port 5000");