var express = require('express');
var app = express();

app.get('/home', function(req, res) {
	res.send('Hello Home');
});

app.get('/info/:name?', function(req, res) {
	var name = req.params.name;
	res.send('Hello ' + name);
});

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