const {Product, Review, User} = require('../../../db');

async function getReview(ProductId, UserId) {
    let where = {id: ProductId};
    let product = await Product.findOne({where});
    if (!product) throw new Error('El producto no existe en la base de datos.');
    where = {id: UserId};
    let user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    where = {ProductId, UserId};
    const review = await Review.findOne({where});
    return review;
}
module.exports = getReview;