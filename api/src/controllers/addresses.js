const {Address} = require('../db');

async function createAddress (address, number, zipCode, country, houseType) {
    if (!(address && number && zipCode && country && houseType))
        throw new Error('Falta enviar datos obligatorios de la dirección');
    const newAddress = await Address.create({address, number, zipCode, country, houseType});
    return newAddress;
}

async function getAddressByUsername(username) {
    const where = {username};
    const attributes = ['address','number', 'zipcode', 'country', 'housetype'];
    const userAddress = await User.findOne({
        where,
        include: {
            model: Address,
            attributes: attributes
        }
    });
    return userAddress;
}

async function updateAdress(username,addressData) {
    const userAddress = getAddressByUsername(username);
    await userAddress.update(userData);
    return userAddress;
}

module.exports={
    createAddress,
    getAddressByUsername,
    updateAdress
};