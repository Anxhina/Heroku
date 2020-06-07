
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const Admin = require('./models/admin');
const config = require('./config/database');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pastaRouter = require('./routes/pasta')
var meatRouter = require('./routes/meat')
var fishRouter = require('./routes/fish')
var dessertRouter = require('./routes/dessert')
var drinkRouter = require('./routes/drink')
var ditoreRouter = require('./routes/ditore')
var reservationRouter = require('./routes/reservation')
var reviewRouter = require('./routes/review')

var app = express();


const PORT = process.env.PORT || 5000;

//Connection to database
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set up mongoose connection

let dev_db_url = "mongodb+srv://" + config.db_user + ":" + config.db_psswd + "@" + config.database;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));


// view engine setup
app.get('', function(req, res) {
  res.sendFile(path.join(__dirname, 'Client/src', 'index.html'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'Client/src', 'index.html'));
});

app.use(logger('dev'));
app.use(express.json());


//routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pasta', pastaRouter);
app.use('/meat', meatRouter);
app.use('/fish', fishRouter);
app.use('/drink', drinkRouter);
app.use('/dessert', dessertRouter);
app.use('/ditore', ditoreRouter);
app.use('/reservation', reservationRouter);

app.use('/review', reviewRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');


});
app.listen(PORT);


module.exports = app;
