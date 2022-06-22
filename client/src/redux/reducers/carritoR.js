import { ADD_PRODUCT_CARRITO, DELETE_PRODUCT_CARRITO } from "../actions/carritoA";

const initialState = {
    productosCarrito: [],
}

const carritoR = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_CARRITO:
            return {
                ...state,
                productosCarrito: state.productosCarrito.concat(payload)
            }
        case DELETE_PRODUCT_CARRITO:
            return {
                ...state,
                productosCarrito: state.productosCarrito.filter(e => e.name !== payload.name)
            }

        default:
            return state;
    }
}

export default carritoR;