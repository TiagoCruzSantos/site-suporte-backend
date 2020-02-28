const knex = require("./index")
const bcrypt = require("bcrypt")
const jwtP = require("../utils")

class Usuario {
    constructor(id, nome, email, senha, tipo){
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
        this.tipo = tipo
    }

    static async pullId(_id){
        let user = await knex.select("id", "nome", "email", "senha", "tipo").from("usuarios").where({
            id: _id
        }).limit(1)
        if(user.length === 0){
            return undefined
        }
        let UserObj = new Usuario(user[0].id, user[0].nome, user[0].email, user[0].senha, user[0].tipo)
        return UserObj
    }

    static async pullEmail(_email){
        let user = await knex.select("id", "nome", "email", "senha", "tipo").from("usuarios").where({
            email: _email
        }).limit(1)
        if(user.length === 0){
            return undefined
        }
        let UserObj = new Usuario(user[0].id, user[0].nome, user[0].email, user[0].senha, user[0].tipo)
        return UserObj
    }

    static async login(email, senha){
        const user = await Usuario.pullEmail(email)
        if(user === undefined){
            return {
                erro: "Login invalido",
                logado: false
            }
        }
        const pass = await bcrypt.compare(senha, user.senha)
        if(pass){
            const jwt = await jwtP.jwtSign({
                id: user.id
            })
            return {
                JWT: jwt,
                logado: true
            }
        }
        return {
            erro: "Login invalido",
            logado: false
        }
    }
}

module.exports = Usuario