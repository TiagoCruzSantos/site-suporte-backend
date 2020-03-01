const knex = require("./index")
const Suporte = require("./Suporte")

class Lar extends Suporte {
    constructor(id, nome, email, senha){
        super(id, nome, email, senha)
        this.tipo = 'LAR'
    }

    async cadastrarSuporte(nome, email, senha){
        let suporte = new Suporte(undefined, nome, email, senha)
        return await suporte.save()
    }

    async elevarSuporte(id){
        let up = await knex("usuarios").where({
            id: id
        }).update({
            tipo: 'LAR'
        }).returning("id","nome", "email", "tipo")
        return up
    }

    static async listAll(){
        return await knex("usuarios").select("id", "nome", "tipo").where({
            tipo: "LAR"
        })
    }

}

module.exports = Lar