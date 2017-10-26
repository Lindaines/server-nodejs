/**sudo mongod --dbpath /srv/mongodb/ */
var app = require("./config/app_config");
var db  = require("./config/db_config");
var User = require("./models/filme")
var filmeController = require("./controllers/filmeController");
var filmes = require("./routes/filmeRouter");
var usuario = require("./routes/usuarioRouter");


app.get("/",function(req,res){
	res.end("Bem-vindo a API de Produtos")
});

//rotas de produtos
app.use("/filmes",filmes);
app.use("/usuarios",usuario);


