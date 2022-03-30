const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();


const app = express();

//Logger
app.use(morgan('dev'));

app.use('/', require('./routes/add'))
app.use('/api', require('./routes/students'));

const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server running on ${server.address().port}`);
})