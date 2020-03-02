const knex = require("./index")
const Usuario = require("./Usuario")

class Suporte extends Usuario {
    constructor(id, nome, email, senha){
        super(id, nome, email, senha, 'SUP')
    }
    
    static async listAll(){
        return await knex("usuarios").select("id", "nome", "tipo").where({
            tipo: "SUP"
        })
    }

    async desligarComputadores(){}
    async ligarCoputadores(){}

}

module.exports = Suporte