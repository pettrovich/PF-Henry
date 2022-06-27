import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import carrito from './reducers/carritoR';
import products from './reducers/productsR';
import detailProduct from './reducers/detailProductR';
import productoscreados from './reducers/createProductR';
import users from './reducers/createUsers'
import favoritos from './reducers/favoritosR';
import PerfilDelUsuarioR from './reducers/PerfilDelUsuarioR';


const reducer = combineReducers({
    carrito,
    products,
    detailProduct,
    productoscreados,
    users,
    favoritos,
    PerfilDelUsuarioR,
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

