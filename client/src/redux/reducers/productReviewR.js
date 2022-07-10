import { GET_ALL_REVIEWS } from "../actions/productReviewA";

const initialState = {
    productReviews: []
}

const productReviewR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_REVIEWS :
            return {
                ...state,
                productReviews: payload
            }
        default:
            return state;
    }
}
export default productReviewR;