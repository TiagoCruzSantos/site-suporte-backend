const Usuario = require("../models/Usuario")

module.exports = {
    async login(req, res){
        const user = await Usuario.pullEmail(req.body.email)
        const login = await user.login(req.body.senha)
        if(login.logado){
            return res.json(login)
        }
        return res.status(401).json(login)
    }
}