const Suporte = require("./Suporte")
const Professor = require("./Professor")
const knex = require("./index")
const bcrypt = require('bcrypt')

class Lar extends Suporte {
    constructor(id, nome, email, senha){
        super(id, nome, email, senha)
        this.tipo = 'LAR'
    }

    static async listAll(){
        return await knex("usuarios").select("id", "nome", "tipo").where({
            tipo: "LAR"
        })
    }

    async cadastrarSuporte(nome, email, senha){
        let senhaBc = await bcrypt.hash(senha, 12)
        let suporte = new Suporte(undefined, nome, email, senhaBc)
        return await suporte.save()
    }

    async cadastrarProfessor(nome, email, senha){
        let senhaBc = await bcrypt.hash(senha, 12)
        let professor = new Professor(undefined, nome, email, senhaBc)
        return await professor.save()
    }

    async elevarSuporte(id){
        let up = await knex("usuarios").where({
            id: id
        }).update({
            tipo: 'LAR'
        },["id","nome", "email", "tipo"])
        return up
    }

    static async listAll(){
        return await knex("usuarios").select("id", "nome", "tipo").where({
            tipo: "LAR"
        })
    }

}

module.exports = Lar