module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
    //let dbConnection = require('../config/dbConection');
//
      async function getProfessores() {
        try{
              let dbConnection = app.config.dbConnection;
              const pool = await dbConnection();

                let professoresModel = app.models.professormodel;// 

                professoresModel.getProfessores(pool, function(error, results)
                {
	                res.render('informacao/professores', { profs : results.recordset });
	            });
           } catch (err) {
            console.log(err)
          }
       }
      getProfessores();
   });
}