exports.index = function(req, res) {
  res.render('index',{title: 'Trello'})
};

exports.tablero = function(req, res){
	res.render('tablero',{title: 'Tablero Prueba', nombre: 'Prueba'})
};

exports.login = function(req, res){
	
}