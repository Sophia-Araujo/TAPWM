let express = require('express');
let consign = require('consign')
let bodyParser = require('body-parser'); 
let app = express(); //funcionando o express

app.set('view engine','ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign().include('app/routes').into(app)
consign({cwd:'app'}) // para incluir a pasta app
.include('routes')
.then('config/dbConnection.js') // garante que todos os arquivos do routes tenham sidos processados
.then('models')
.into(app) 
module.exports = app;   