const {Address} = require('../../../db');

async function updateAddress(username,addressData) {
    const userAddress = getAddress(username);
    userAddress.set(addressData);
    return await userAddress.save();
}

module.exports={
    updateAddress
};