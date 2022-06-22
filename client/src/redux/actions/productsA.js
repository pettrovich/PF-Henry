import axios from "axios";

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export const getAllProducts = () => {
    return async function (dispatch) {
        const response = (await axios.get('/Catalog')).data;
        return dispatch({ type: GET_ALL_PRODUCTS, payload: response })
    }
}