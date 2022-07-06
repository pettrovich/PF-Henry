const {User} = require('../../../db')

async function getUsers() {
    const where = {isAdmin: false, banned: false};
    const userList = await User.findAll({where});
    return userList;
}

module.exports = getUsers;