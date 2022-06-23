import axios from "axios";

export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";

export const getProductByName = (name) => (dispatch) => {
    return axios
      .get(`http://localhost:3001/Catalog?name=${name}`)
      .then((productName) => {
        dispatch({
          type: GET_PRODUCT_BY_NAME,
          payload: productName.data,
        });
      })
      .catch((error) => {
        console.log(error);
        return alert ('Producto no encontrado')
      });
};
