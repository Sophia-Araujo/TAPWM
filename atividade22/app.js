let app = require('./app/config/server');//carregando servidor
/*
let rotaHome = require('./app/routes/home');
rotaHome(app); // executando

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app); // executando

let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app); // executando

let rotaCursos = require('./app/routes/cursos');
rotaCursos(app); // executando

let rotaProfessores = require('./app/routes/professores');
rotaProfessores(app); // executando



app.get('/', function(req,res){
    res.render("home/index");
});

app.get('/formulario_adicionar_usuario',function(req,res){
    res.render("admin/adicionar_usuario");
}); 

app.get('/informacao/historia', function(req,res){
    res.render("informacao/historia");
});

app.get('/informacao/cursos', function(req,res){
    res.render("informacao/cursos");
});

app.get('/informacao/professores', function(req,res){
    res.render("informacao/professores");
}); 
*/

app.listen(3000, function(){
    console.log("Servidor com express foi carregado");
    // console.log(texto);
});

