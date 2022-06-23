import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import carrito from './reducers/carritoR';
import products from './reducers/productsR';
import detailProduct from './reducers/detailProductR';
import productName from './reducers/productNameR';
import productoscreados from './reducers/createProductR';

const reducer = combineReducers({
    carrito,
    products,
    detailProduct,
    productName,
    productoscreados
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

