var express = require('express')
var session = require('cookie-session')
var bodyParser = require('body-parser')
var jsParser = bodyParser.urlencoded({ extended: false});
var handleBars = require('handleBars')
var app = express();

app.use(session({secret: 'messagetopsecret'}))

