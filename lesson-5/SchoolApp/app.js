require('dotenv').config({path : "./config/.env"});
require('./api/data/db');
const express = require('express');
const morgan = require('morgan');


const app = express();

//Logger
app.use(morgan('dev'));

app.use('/api', require('./api/routes/students'));

const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server running on ${server.address().port}`);
})