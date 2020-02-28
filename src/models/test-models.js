const Usuario = require("./Usuario")
Usuario.pullEmail("atilioA@gmail.com").then(data => {
    console.log(data)
}).catch(erro => {
    console.log("um erro ocorreu" + erro)
}) 