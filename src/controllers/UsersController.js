const Usuario = require("../models/Usuario")
const Suporte = require("../models/Suporte")
const Lar = require("../models/Lar")
const Professor = require("../models/Professor")
const utils = require("../utils")

module.exports = {
    async listAll(req, res){
        const all = await Usuario.listAll()
        res.json(all)
    },

    async listSpecific(req, res){
        let user
        switch(req.params.tipo){
            case 'LAR':
            case 'lar':
                user = await Lar.listAll()
                return res.json(user)
            case 'SUP':
            case 'sup':
                user = await Suporte.listAll()
                return res.json(user)
            case 'PROF':
            case 'prof':
                user = await Professor.listAll()
                return res.json(user)
            default:
                return res.status(404).json({
                    erro: "Tipo não encontrado"
                })
        }
    },

    async newUser(req, res){
        try{
            let jwtDecoded = await utils.jwtDecode(req.body.jwt)
            let larUser = await Usuario.pullId(jwtDecoded.id)
            if(larUser.tipo === "LAR"){
                const larCd = await Lar.pullId(jwtDecoded.id)
                let resposta
                try{
                    switch(req.params.tipo){
                        case 'SUP':
                        case 'sup':
                            resposta = await larCd.cadastrarSuporte(req.body.nome, req.body.email, req.body.senha)
                            break
                        case 'PROF':
                        case 'prof':
                            resposta = await larCd.cadastrarProfessor(req.body.nome, req.body.email, req.body.senha)
                            break
                    }
                }catch(e){
                    return res.status(409).json({
                        erro: "Email já existe"
                    })
                }
                return res.json(resposta)
            }
            return res.status(403).json({
                erro: "Acesso não autorizado"
            })
        }catch(e){
            return res.status(401).json({
                erro: "Json Web Token invalido ou inexistente"
            })
        }
    }
}