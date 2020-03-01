const knex = require("./index")
const Usuario = require("./Usuario")

class Suporte extends Usuario {
    constructor(id, nome, email, senha){
        super(id, nome, email, senha, 'SUP')
    }

    static async pullId(id){
        let user = await Usuario.pullId(id)
        if(user.tipo === 'SUP'){
            return new Suporte(user.id, user.nome, user.email, user.senha)
        }
        return undefined
    }

    static async pullEmail(email){
        let user = await Usuario.pullEmail(email)
        if(user.tipo === 'SUP'){
            return new Suporte(user.id, user.nome, user.email, user.senha)
        }
        return undefined
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