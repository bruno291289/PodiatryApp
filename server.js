var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var load = require('express-load');
var passport = require('passport');
var i18next = require('i18next');
var methodoverride = require('method-override')();
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var session = require('express-session');

i18next.init();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(i18next.handle);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodoverride);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

i18next.registerAppHelper(app);

mongoose.connect('mongodb://localhost/podologiaapp');
var db = mongoose.connection;

load('models').then('controllers').then('routes').into(app);
require('./config/passport')(app, passport);

app.listen(3000);
console.log("Server running on port 3000.");