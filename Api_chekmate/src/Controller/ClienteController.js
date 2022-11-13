const conection = require('../db');
module.exports= class clienteController {
    static async showClients(req, res){
        const query = 'SELECT * FROM cliente'
        conection.query(query, function(err, data){
            if(err){
                console.log(err)
                return
            }
            const clientes = data
            return res.status(200).json(clientes)

        })
    }

   
    static async insertUsario(req, res)  {
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        if(nome && email && senha){
            const query = 'INSERT into cliente  (nome,email,senha) values (nome,email,senha)';
            conection.query(query, function(err, data){
                if(err){
                    console.log(err)
                    return
                }
                const usuario = data
                return res.status(200).json(usario)
    
            })
        }else{
            console.log('erro')
        }


}
}