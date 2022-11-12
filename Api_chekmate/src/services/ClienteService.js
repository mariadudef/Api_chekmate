const db = require('../db');
module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) =>{
            db.query('select * from  cliente', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
    
}