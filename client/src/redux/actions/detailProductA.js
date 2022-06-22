import axios from "axios";

export const GET_PRODUCT_ID = 'GET_PRODUCT_ID';

export const getOneProduct = (id) => {
    return async function (dispatch) {
        const response = (await axios.get(`/ProductDetail/${id}`)).data;
        return dispatch({ type: GET_PRODUCT_ID, payload: response })
    }
}