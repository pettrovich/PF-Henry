import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import carrito from './reducers/carritoR';
import products from './reducers/productsR';
import carritoR from './reducers/detailProductR';

const reducer = combineReducers({
    carrito,
    products,
    carritoR,
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

