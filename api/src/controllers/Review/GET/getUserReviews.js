const {Review, User} = require('../../../db');

async function getUserReviews(UserId) {
    let where = {id: UserId};
    let user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    where = {UserId};
    const reviewList = await Review.findAll({where});
    return reviewList;
}

module.exports = getUserReviews;