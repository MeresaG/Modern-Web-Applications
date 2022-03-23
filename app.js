const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const { default: mongoose } = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const connectDB = require('./config/db');
const passportConfig = require('./config/passport');



//Load config
dotenv.config({ path : './config/config.env' });

//Passport config
passportConfig(passport);
connectDB();

const app = express();

//Body Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Handlebar helpers
const { formatDate } = require('./helpers/hbs')

//Handlebars
app.engine('hbs', exphbs.engine({ helpers: {formatDate, }, defaultLayout : 'main', extname : '.hbs'}));
app.set('view engine', 'hbs');

//sessions
app.use(session({
    secret: 'documentary app',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
  }))

//passport Middlewar
app.use(passport.initialize());
app.use(passport.session());



//static folder
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/documentaries', require('./routes/documentaries'));

const PORT = process.env.PORT || 3000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

