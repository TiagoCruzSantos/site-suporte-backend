const knex = require("./index")
const Usuario = require("./Usuario")

class Suporte extends Usuario {
    constructor(id, nome, email, senha){
        super(id, nome, email, senha)
    }

    static async pullId(_id){
        let user = await knex.select("id", "nome", "email", "senha", "tipo").from("usuarios").where({
            id: _id,
            tipo: 'SUP'
        }).limit(1)
        if(user.length === 0){
            return undefined
        }
        let UserObj = new Suporte(user[0].id, user[0].nome, user[0].email, user[0].senha)
        return UserObj
    }
}

module.exports = Suporte