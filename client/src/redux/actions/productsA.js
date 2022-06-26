import axios from "axios";

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const ORDER_PRICE = 'ORDER_PRICE';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';

export const RANGO_PRICE = 'RANGO_PRICE';
export const DISCOUNT = 'DISCOUNT';
export const ENVIOS = 'ENVIOS';
export const GET_BRAND = 'GET_BRAND';

export const getAllProducts = () => {
    return async function (dispatch) {
        const response = (await axios.get('/catalog')).data;
        return dispatch({ type: GET_ALL_PRODUCTS, payload: response })
    }
}
export const orderByPrice = (data) => {
    return async function (dispatch) {
        let response;
        if (data === 'ASC') response = (await axios.get(`/order/${data}`)).data;
        if (data === 'DESC') response = ((await axios.get(`/order/ASC`)).data).reverse()
        return dispatch({ type: ORDER_PRICE, payload: response })
    }
}

export const getByCategory = (data) => {
    return async function (dispatch) {
        const response = (await axios.get(`/filter/${data}`)).data;
        return dispatch({ type: FILTER_CATEGORY, payload: response })
    }
}
export function rangoByPrice (payload){
    return async function (dispatch) {
      var json = await axios.get (`http://localhost:3001/filterPriceRange/${payload}`);
            return dispatch ({
                type: RANGO_PRICE,
                payload: json.data
            })
    }
}


export function byDiscount (payload){
    return async function (dispatch) {
      var json = await axios.get (`/filterDiscount/${payload}`);
            return dispatch ({
                type: DISCOUNT,
                payload: json.data
            })
    }
}

export function byEnvios (payload){
    return async function (dispatch) {
      var json = await axios.get (`http://localhost:3001/filterShipping/${payload}`);
            return dispatch ({
                type: ENVIOS,
                payload: json.data
            })
    }
}

export function getbrand(payload){
    return async function (dispatch){
        try{
            var json = await axios.get (`http://localhost:3001/filterBrand/${payload}`);
            return dispatch({
                type: GET_BRAND,
                payload: json.data

            })
        }catch (error){
            
            alert ("No tenemos esa marca.")
      
    }
}
}