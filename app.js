
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
const app = express();


// app.use(express.static(path.join(__dirname, '/Client/dist/')));
// app.use(bodyParser.json());

// app.use(cors());
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

  



// Port Number
const PORT = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/Client'));
app.set('dist', __dirname + '/dist');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('./Client/dist/index.html');
});

app.use(logger('dev'));
app.use(express.json());

//routers
require('./config/passport')(passport);

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
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});


app.listen(PORT);


module.exports = app;
