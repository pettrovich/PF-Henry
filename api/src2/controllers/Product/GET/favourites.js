const {Product, User} = require('../../../db');

async function getFavourites(username) {
    const where = {username};
    const user = User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return user.getFavouriteProducts();
}

async function addFavourite(username, productId) {
    const where = {username};
    const user = User.findOne({where});
    const product = Product.findByPk(productId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    if (!product) throw new Error('El producto no existe en la base de datos.');
    await user.addFavouriteProduct(product);
    return getFavourites(username);
}

async function removeFavourite(username, productId) {
    const where = {username};
    const user = User.findOne({where});
    const product = Product.findByPk(productId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    if (!product) throw new Error('El producto no existe en la base de datos.');
    await user.removeFavouriteProduct(product);
    return getFavourites(username);
}

module.exports={
    addFavourite,
    getFavourites,
    removeFavourite
}