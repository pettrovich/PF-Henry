const { User } = require('../../../db');
const bcryp = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = (req, res) => {

    let { email, password } = req.body

    User.findOne({
        where: {
            email: email
        }        
    }).then(user => {

        if (!user) {
            res.status(404).json({Error: "Usuario con este correo no encontrado"});
        } else {

            if (bcryp.compareSync(password, user.password)) {

                let token = jwt.sign({ user: user }, "secret", {
                    expiresIn: "1h"
                })

                res.json({
                    mensaje: "Usuario logeado con exito",
                    user: user,
                    token: token
                })
            } else { 
                res.status(401).json({Error: "Contraseña incorrecta"})
            }
        }

    }).catch(err => {
        res.status(500).json(err)
    })

}

module.exports = {
    login
}