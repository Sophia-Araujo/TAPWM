module.exports = function(){
    const sql = require('mssql');
 
    this.getProfessores = function(pool, callback){
        // pool é um ConnectionPool do mssql
        pool.request().query('SELECT * FROM professores', callback);
    }
 
    this.getProfessor = function(pool, callback){
        pool.request().query('SELECT * FROM professores WHERE id_professor = 1', callback);
    }
 
    // Salva um professor usando consultas parametrizadas para evitar SQL injection
    this.salvarProfessor = async function(professor, pool, callback){
        try {
            const request = pool.request();
            request.input('nome', sql.VarChar(200), professor.nome_professor);
            request.input('email', sql.VarChar(200), professor.email_professor);
 
            const result = await request.query('INSERT INTO professores (NOME_PROFESSOR, EMAIL_PROFESSOR) VALUES (@nome, @email)');
            // Passa o resultado para o callback para manter compatibilidade
            callback(null, result);
        } catch (err) {
            callback(err);
        }
    }
 
    return this;
}