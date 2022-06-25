import { GET_ALL_PRODUCTS, ORDER_PRICE, FILTER_CATEGORY } from "../actions/productsA";
import { GET_PRODUCT_BY_NAME } from '../actions/productName';

const initialState = {
    products: [],
}

const productsR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case ORDER_PRICE:
            return {
                ...state,
                products: payload
            }
        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                products: payload
            }
        case FILTER_CATEGORY:
            return {
                ...state,
                products: payload
            }

        default:
            return state;
    }
}

export default productsR;