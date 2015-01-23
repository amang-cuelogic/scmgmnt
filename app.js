//Include Express Framework
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var db = require('./db');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');
var sclass = require('./routes/sclass.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/sclass', sclass.assignclass);
app.post('/viewclass', sclass.viewclasses);
app.post('/addclass', sclass.addclass);
app.post('/addbook', sclass.addbook);
app.get('/getteachers', sclass.getteachers);
app.get('/getclasses', sclass.getclasses);
app.post('/login', routes.login);
app.post('/listclass', sclass.listclass);
app.post('/listbooks', sclass.listbooks);

app.get('/users', users.list);

module.exports = app;
http.createServer(app).listen(5000);