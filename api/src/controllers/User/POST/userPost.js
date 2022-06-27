const { User, Address } = require('../../../db')

const userPost = async (req, res) => {
    
    let {
        name,
        lastName,
        dni,
        email,
        celphone,
        username,
        password,
        isAdmin,
        address,
        number,
        zipCode,
        province,
        location,
        apartment,
        description
    } = req.body
    
    try {
        let allUsers = await User.findAll()
        let dniRepeated = allUsers.find(e => e.dni === dni)
        let emailRepeated = allUsers.find(e => e.email === email)
        let userRepeated = allUsers.find(e => e.username === username)

        if(dniRepeated) {
            res.send('Ya existe un usuario con ese DNI')
        } else if(emailRepeated) {
            res.send('Ya existe un usuario con ese e-mail')
        } else if(userRepeated) {
            res.send('Ya existe un usuario con ese username')
        } else {      

        let newUser = await User.create({
            name,
            lastName,
            dni,
            email,
            celphone,
            username,
            password,
            isAdmin
        })
        
        let newAddress = await Address.create({
            address,
            number,
            zipCode,
            province,
            location,
            apartment,
            description
        })
        
        newUser.setAddress(newAddress)
        res.send('Usuario creado exitosamente')
    }

    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    userPost
}