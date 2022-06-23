const {Address} = require('../db');

async function createAddress (address, number, zipCode, province, location, apartment, description) {
    if (!(address && zipCode && province))
        throw new Error('Falta enviar datos obligatorios de la dirección');
    const newAddress = await Address.create({address, number, zipCode, province, location, apartment, description});
    return newAddress;
}

async function getAddressByUsername(username) {
    const where = {username};
    const attributes = ['address', 'number', 'zipCode', 'province', 'location', 'apartment', 'description'];
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
    await userAddress.update(addressData);
    return userAddress;
}

module.exports={
    createAddress,
    getAddressByUsername,
    updateAdress
};