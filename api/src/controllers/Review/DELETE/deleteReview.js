const {Review} = require('../../../db');

async function deleteReview (id) {
    const where = {id};
    let review = await Review.findOne({where});
    if (!review) return 0;
    return await Review.destroy({ where });
}

module.exports = deleteReview;