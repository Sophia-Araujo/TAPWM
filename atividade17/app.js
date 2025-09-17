let express = require('express');
let app = express(); 

app.get('/historia', function(req,res){
    res.send("<html><body>historia da fatec sorocaba</body></html>");
});

app.get('/cursos', function(req,res){
    res.send("<html><body>cursos da fatec sorocaba</body></html>");
});

app.get('/professores', function(req,res){
    res.send("<html><body>professores da fatec sorocaba</body></html>");
}); 

app.listen(3000, function(){
    console.log("Servidor com express foi carregado");
});

