import { GET_PRODUCT_ID } from "../actions/detailProductA";

const initialState = {
    product: [],
}

const carritoR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_ID:
            return {
                ...state,
                product: payload
            }
        default:
            return state;
    }
}

export default carritoR;