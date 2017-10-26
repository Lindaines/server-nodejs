var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var FilmeSchema = new Schema({
	nome:String,
	descricao: String,
	diretor:String,
	imdb : String 
});

module.exports = mongoose.model('Filme', FilmeSchema);