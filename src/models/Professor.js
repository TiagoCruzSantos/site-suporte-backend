const knex = require("./index")
const Usuario = require("./Usuario")

class Professor extends Usuario {
    constructor(id, nome, email, senha, tipo){
        if(tipo === "PROF"){
            super(id, nome, email, senha, 'PROF')
        }else{
            throw new TypeError("Não é professor")
        }
    }
    
    static async listAll(){
        return await knex("usuarios").select("id", "nome", "tipo").where({
            tipo: "PROF"
        })
    }
    
}

module.exports = Professor