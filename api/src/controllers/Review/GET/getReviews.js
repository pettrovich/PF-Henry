const {Review} = require('../../../db');

async function getReviews() {
    const reviewList = await Review.findAll();
    return reviewList;
}

module.exports = getReviews;