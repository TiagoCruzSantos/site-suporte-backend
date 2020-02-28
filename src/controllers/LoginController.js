const Usuario = require("../models/Usuario")

module.exports = {
    async login(req, res){
        const user = await Usuario.login(req.body.email, req.body.senha)
        if(user.logado){
            return res.json(user)
        }else{
            return res.status(401).json(user)
        }
    }
}