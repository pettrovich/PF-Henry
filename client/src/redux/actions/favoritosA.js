import axios from "axios";

export const ADD_PRODUCT_FAVORITO = 'ADD_PRODUCT_FAVORITO';
export const REMOVE_PRODUCT_FAVORITO = 'REMOVE_PRODUCT_FAVORITO';

export const addFavorite = (id) => {
    return async function (dispatch) {
        const response = (await axios.get(`/ProductDetail/${id}`)).data;
        return dispatch({ type: ADD_PRODUCT_FAVORITO, payload: response })
    }
}

export const removeFavorite = (id) => {
    return { type: REMOVE_PRODUCT_FAVORITO, payload: id }
}
