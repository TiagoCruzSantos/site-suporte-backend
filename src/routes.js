const { Router } = require("express")
const routes = Router()
const LoginController = require("./controllers/LoginController")
// /login
routes.post("/login", LoginController.login)

// /sup


// /lar


// /prof


// /aulas


// /posts


// /horarios


module.exports = routes