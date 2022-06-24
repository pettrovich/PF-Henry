const {Address} = require('../db');

async function createAddress (address, number, zipCode, province, location, apartment, description) {
    if (!(address && zipCode && province))
        throw new Error('Falta enviar datos obligatorios de la dirección');
    const newAddress = await Address.create({address, number, zipCode, province, location, apartment, description});
    return newAddress;
}

async function getAddress(username) {
    const where = {username};
    const user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return user.getAddress();
}

async function updateAddress(username,addressData) {
    const userAddress = getAddress(username);
    return await userAddress.set(addressData);
}

module.exports={
    createAddress,
    getAddress,
    updateAddress
};