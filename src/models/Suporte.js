const knex = require("./index")
const Usuario = require("./Usuario")

class Suporte extends Usuario {
    constructor(id, nome, email, senha, tipo){
        if(tipo === 'SUP'){
            super(id, nome, email, senha, 'SUP')
        }else{
            throw new TypeError("Não é suporte")
        }
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