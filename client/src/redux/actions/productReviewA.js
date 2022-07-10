import axios from "axios";

export const GET_ALL_REVIEWS  = 'GET_ALL_REVIEWS';
export const USER_DETAIL  = 'USER_DETAIL';

export const postReview = (payload) => {
    return async function (dispatch) {
        var json = await axios.post(`/reviews/Create`, payload);
        return json
    }
}

export const getAllReviews = (id) => {
    return async function (dispatch) {
        var json = await axios.get(`/reviews/product/${id}`);
        return dispatch({
            type: GET_ALL_REVIEWS,
            payload: json.data,
        })
    }
}