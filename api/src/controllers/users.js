const {Address,User} = require('../db');

async function createUser (name, lastName, dni, email, celphone, username, password, isAdmin, userAddress) {
    if (!(name && lastName && dni && email && celphone && username && password))
        return res.status(404).send('Falta enviar datos obligatorios del usuario');

    const user = await User.create({name, lastName, dni, email, celphone, username, password, isAdmin});
    await user.setAddress(userAddress);
    return user;
}

async function getAdminUsers() {
    const where = {isAdmin: true};
    const attributes = ['id','username', 'name', 'lastName', 'dni', 'email', 'celphone'];
    const userList = await User.findAll({
        where,
        attributes
    });
    return userList;
}

async function getNonAdminUsers() {
    const where = {isAdmin: false};
    const attributes = ['id','username', 'name', 'lastName', 'dni', 'email', 'celphone'];
    const userList = await User.findAll({
        where,
        attributes
    });
    return userList;
}

async function getUserByUsername(username) {
    const where = {username};
    const attributes = ['id','username', 'name', 'lastName', 'dni', 'email', 'celphone'];
    const user = await User.findOne({
        where,
        attributes
    });
    return user;
}

async function updateUser(username,userData) {
    const where = {username};
    let user = await User.update(userData, {where});
    return user;
}

async function deleteUser(username) {
    const where = {username};
    return await User.destroy({where});
}

module.exports={
    createUser,
    getAdminUsers,
    getNonAdminUsers,
    getUserByUsername,
    updateUser,
    deleteUser
};