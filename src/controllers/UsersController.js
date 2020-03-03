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
            let jwtCoded = req.headers.authorization.split(" ")[1]
            let jwtDecoded = await utils.jwtDecode(jwtCoded)
            let larCd
            try{
                larCd = await Lar.pullId(jwtDecoded.id)
            }catch(e){
                res.status(403).json({
                    erro: e.message
                })
            }
            if(larCd.tipo === "LAR"){
                let resposta
                try{
                    switch(req.params.tipo){
                        case 'SUP':
                        case 'sup':
                            console.log("?????")
                            resposta = await larCd.cadastrarSuporte(req.body.nome, req.body.email, req.body.senha)
                            break
                        case 'PROF':
                        case 'prof':
                            resposta = await larCd.cadastrarProfessor(req.body.nome, req.body.email, req.body.senha)
                            break
                        default:
                            resposta = {
                                erro: "Tipo desconhecido"
                            }
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