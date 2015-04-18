var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
app.locals.pageTitle = ' Awesome Website';

// Set your own folder for views rather then the default called views
//app.set('views', __dirname + '/partials');

app.get('/', routes.index);

app.get('/about', routes.about);

app.get('/more-info/:name?/:title?', function(req, res) {
	var name = req.params.name;
	var title = req.params.title;
	res.send('Hello ' + name + ' who is ' + title);
});

app.get('*', function(req, res) {
	res.send('Whoops you got a bad route');
});

var server = app.listen(3000, function() {
	console.log('Listening on Port 3000');
});