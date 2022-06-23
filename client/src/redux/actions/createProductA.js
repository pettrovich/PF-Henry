import axios from  "axios";

export function catalogo (){
    return async function (dispatch){
        var info = await axios.get ("http://localhost:3001/Catalog",{
            
        });
        return dispatch({type: "CATALOGO", payload: info.data});
        };
    }

export function postProducto (payload){
    return async function (dispatch){
        var response = await axios.post ("http://localhost:3001/CreateProduct",payload);
        console.log (response)
        return response;
    }}

