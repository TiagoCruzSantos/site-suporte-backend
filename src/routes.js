const { Router } = require("express")
const routes = Router()
const LoginController = require("./controllers/LoginController")
const UserController = require("./controllers/UsersController")
// /login
routes.post("/login", LoginController.login)

// /usuarios
routes.get("/usuarios/", UserController.listAll)
routes.get("/usuarios/:tipo", UserController.listSpecific)
routes.post("/usuarios/:tipo", UserController.newUser)
// /aulas


// /posts


// /horarios


module.exports = routes