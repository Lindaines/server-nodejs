var Filme  = require('../models/filme');


exports.save =  function(nome,descricao, diretor, imdb, callback){
	new Filme ({
		'nome': nome,
		'descricao':descricao,
		'diretor':diretor,
		'imdb' : imdb
	}).save(function(error, filme){
		if(error){
			callback({error: 'Não foi possivel salvar'})
		}else{
			callback(filme);
		}
	});
}

exports.list = function(callback){
 Filme .find({}, function(error, filmes){
		if(error){
			callback({error: 'Não foi possivel encontrar os filmes'});
		}else{
			callback(filmes);
		}
	});
}

exports.delete = function(id, callback){
 Filme .findById(id, function(error, filme){
		if (error){
			callback({error:'Não foi possivel excluir'});
		}else{
			filme.remove(function(error){
				if(!error){
					callback({resposta: "Filme  excluido com sucesso"});
				}
			});
		}
	})
}


exports.update = function(id, _nome, descricao, diretor, imdb, callback){
	//console.log(_id,_nome)
	query = {_id: id}; 
	new_data = {nome : _nome, descricao : descricao, diretor: diretor, imdb: imdb};
	Filme.findOneAndUpdate(query, new_data, {upsert : true},function(err, doc){		
		if (!err){
			callback({resposta : "Filme atualizado"});
		} else{
			console.log(err);
		}

		console.log(doc);
	})

}