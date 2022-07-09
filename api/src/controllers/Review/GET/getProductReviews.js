const {Product, Review, User} = require('../../../db');

async function getProductReviews(ProductId) {
    let where = {id: ProductId};
    let product = await Product.findOne({where});
    if (!product) throw new Error('El producto no existe en la base de datos.');
    where = {ProductId};
    const reviewList = await Review.findAll({
        where, 
        include: [{model: User, attributes: ['id', 'name']}]
    });
    return reviewList;
}
module.exports = getProductReviews;