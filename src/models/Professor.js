const knex = require("./index")
const Usuario = require("./Usuario")

class Professor extends Usuario {
    constructor(id, nome, email, senha){
        super(id, nome, email, senha, 'PROF')
    }
    
    
}

module.exports = Professor