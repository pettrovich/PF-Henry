const {Product, Review} = require('../../../db');

async function getProductReviews(ProductId) {
    let where = {id: ProductId};
    let product = await Product.findOne({where});
    if (!product) throw new Error('El producto no existe en la base de datos.');
    where = {ProductId};
    const reviewList = await Review.findAll({where});
    return reviewList;
}
module.exports = getProductReviews;