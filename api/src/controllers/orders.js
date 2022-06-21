const {user} = require('../db')

const orderName = async (req, res) => {
    let nameOrder = req.params.nameOrder;
    const users = await user.findAll()

    try {
        nameOrder === 'ASC' ?
        users.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            }) :
        users.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            res.send(users)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    orderName
}

