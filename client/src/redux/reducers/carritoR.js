import { ADD_PRODUCT_CARRITO, DELETE_PRODUCT_CARRITO, INCREMENT_TOTAL, DECREMENT_TOTAL, RESET_TOTAL } from "../actions/carritoA";

const initialState = {
    productosCarrito: (JSON.parse(localStorage.getItem('carrito')) === null) ? [] : JSON.parse(localStorage.getItem('carrito')),
    totalCarrito: 0
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
                productosCarrito: state.productosCarrito = JSON.parse(localStorage.getItem('carrito'))
            }
        case INCREMENT_TOTAL:
            return {
                ...state,
                totalCarrito: state.totalCarrito + payload
            }
        case DECREMENT_TOTAL:
            return {
                ...state,
                totalCarrito: state.totalCarrito - payload
            }
        case RESET_TOTAL:
            return {
                ...state,
                totalCarrito: 0
            }

        default:
            return state;
    }
}

export default carritoR;