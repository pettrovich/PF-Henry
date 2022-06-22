import { GET_ALL_PRODUCTS } from "../actions/productsA";

const initialState = {
    products: [],
}

const carritoR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}

export default carritoR;