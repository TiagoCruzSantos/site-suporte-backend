const Usuario = require("../models/Usuario")
const Suporte = require("../models/Suporte")
const Lar = require("../models/Lar")

module.exports = {
    async listAll(req, res){
        const all = await Usuario.listAll()
        res.json(all)
    },

    async listSpecific(req, res){
        switch(req.params.tipo){
            case 'LAR':
            case 'lar':
                let lar = await Lar.listAll()
                return res.json(lar)
            case 'SUP':
            case 'sup':
                let sup = await Suporte.listAll()
                return res.json(sup)
        }
    }
}