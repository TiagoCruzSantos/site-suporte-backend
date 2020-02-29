const jwt = require("jsonwebtoken")

module.exports = { 
    jwtSign(data){
        return new Promise((resolve, reject) => {
            jwt.sign(data, process.env.JWT_SECRET, { algorithm: 'HS256' }, function(err, token) {
                if(err){
                    return reject(err)
                }
                return resolve(token)
            })
        })
    }
}