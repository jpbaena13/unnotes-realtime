var app = require('express')()
	,https = require('http').Server(app)
	,io = require('socket.io')(https)
	,unt = require('./unnotes');

app.get('/', function(req, res) {
	res.send('Lantia Realtime :)');
});

io.on('connection', function(socket) {
	unt.noteboard.init(socket, io);
});

var port = process.env.port || 8080;

https.listen(port, function() {
	console.log(unt.globals.lightblue + 'Iniciando Servidor de Tiempo Real', unt.globals.reset);
	console.log(unt.globals.lightblue + 'Servidor iniciado en puerto ' + port, unt.globals.reset);
});