var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var handleBars = require('handleBars');
var app = express();
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({secret: 'messagetopsecret'}));
app.use(express.static('views'));
app.use(express.static('files'));

app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.name + '".');
});


var server = app.listen(3000, listening);
function listening(){
    console.log("listening");
}
// console.log(data);
