var express = require('express');
var app = express();

var myModule = require('./myModule.js');

app.get('/', function (req, res) {
	res.send(myModule.myFunction((Math.random() * 10))?'BAD': 'NOT BAD');
});

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s', host, port)

});