import { ADD_PRODUCT_FAVORITO, REMOVE_PRODUCT_FAVORITO } from "../actions/favoritosA";

const initialState = {
    productosFavoritos: [],
}

const favoritosR = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_FAVORITO:
            return {
                ...state,
                productosFavoritos: state.productosFavoritos.concat(payload)
            }
        case REMOVE_PRODUCT_FAVORITO:
            return {
                ...state,
                productosFavoritos: state.productosFavoritos.filter(e => e.id !== payload)
            }

        default:
            return state;
    }
}

export default favoritosR;