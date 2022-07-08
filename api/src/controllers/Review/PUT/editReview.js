const {Review} = require('../../../db');

async function editReview (id, reviewData) {
    const {score, title, text} = reviewData; 
    const where = {id};
    let review = await Review.findOne({where});
    if (!review) throw new Error('La reseña no existe en la base de datos.');
    if (!(score && title))
        throw new Error('Falta enviar datos obligatorios');
    review.set({score, title, text});
    return await review.save();
}

module.exports = editReview;