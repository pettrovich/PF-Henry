const {User} = require('../../../db');

async function createUser(name, email) {
    if (!(name && email)) throw new Error('Falta enviar datos obligatorios del usuario');
    const user = await User.create({name, email});
    // await user.setAddress(userAddress);
    return await user.save();
}

// async function

async function getAdminUsers() {
    const where = { isAdmin: true };
    const attributes = ['id', 'username', 'name', 'lastName', 'dni', 'email', 'celphone'];
    const userList = await User.findAll({
        where,
        attributes
    });
    return userList;
}



async function updateUser(id, userData) {
    const where = { id };
    let user = await User.findOne({ where });
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    user.set(userData);
    return await user.save();
}

async function deleteUser(username) {
    const where = { username };
    let user = await User.findOne({ where });
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return await User.destroy({ where });
}

module.exports = {
    createUser,
    getAdminUsers,
    updateUser,
    deleteUser
};