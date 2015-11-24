//Inicializamos las variables necesarias.
var express = require('express'),
	http = require('http'),
	app = express(),
	routes = require('./routes'),
	path = require('path');
//Establece el puerto donde se ejecutara el servidor
app.set('port', process.env.PORT || 3000);
//Se hace uso de las vistas layout
app.set('views',__dirname + '/views');
app.set('view engine', 'jade');
//Indicamos el directorio de acceso publico
console.log(__dirname)
app.use(express.static(path.join(__dirname,'public')));
//Marco la ruta de acceso y la vista a mostrar
app.get('/', routes.index);
app.get('/tablero', routes.tablero);
app.post("/login", routes.login)
/** 
Configuracion del servidor socket.io
*/
var server = http.createServer(app);
var port = process.env.PORT || 3000;
// Ponemos a ejecutar el servidor
server.listen(port, function () {
    console.log('Servidor inicializado en %d', port);
});