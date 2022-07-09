const {Product, Review, User} = require('../../../db');

async function createReview (userId, productId, reviewData) {
    const {score, title, text} = reviewData; 
    let where = {id: userId};
    let user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    where = {id: productId};
    let product = await Product.findOne({where});
    if (!product) throw new Error('El producto no existe en la base de datos.');
    if (!(score && title))
        throw new Error('Falta enviar datos obligatorios de la reseña');
    const newReview = await Review.create({score, title, text});
    user.addReview(newReview);
    product.addReview(newReview);
    return newReview;
}

module.exports = createReview;