const ClienteService = require('../services/ClienteService');
module.exports={
    buscarTodos: async (req, res) =>{
        let json = {error: '', result:[]};

        let cliente = await ClienteService.buscarTodos();

        for(let i in cliente){
            json.result.push({
                id: cliente[i].id,
                nome: cliente[i].nome,
                email : cliente[i].email


            });
        }
        res.json(json);
    }
}