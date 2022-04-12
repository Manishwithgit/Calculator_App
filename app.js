var express = require('express');
var app = express();
var path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static("public"));

// index page
app.get('/', function(req, res) {
    res.render('page/index');
});


app.listen(7000, function() {
    console.log('App connecting on port 7000!');
});