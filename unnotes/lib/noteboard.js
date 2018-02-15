var gbl = require('./globals.js');

exports.init = function(socket, io) {
	
	//Matricular Noteboard [Modo online]
	socket.on('matriculate', function(noteboardId){
		socket.join(noteboardId);

		socket.on(noteboardId, function(data){
			console.log(data);
			socket.broadcast.to(noteboardId).emit('noteboard', data);
		});
	});
}