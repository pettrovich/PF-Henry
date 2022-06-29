import axios from "axios";

export const DISCOUNTS = 'DISCOUNTS';

export const  getDiscounts = ()=> {
    return async function (dispatch) {
        var json = await axios.get('/newestProducts'); //CAMBIAR RUTA POR LA DE DESCUENTO
        // console.log ("acciones",json.data)
        return dispatch({
            type: DISCOUNTS,
            payload: json.data,
            
        })
    }
}