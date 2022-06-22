import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import carrito from './reducers/carritoR';

const reducer = combineReducers({
    carrito,
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

