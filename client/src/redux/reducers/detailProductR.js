import { GET_PRODUCT_ID } from "../actions/detailProductA";

const initialState = {
    product: [],
}

const detailProductR = (state = initialState, { type, payload }) => {
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

export default detailProductR;