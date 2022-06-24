import axios from "axios";
export const ADD_USER = 'ADD_USER';

export const addUserDb = (data) => {
    return async function () {
        return await axios.post('/user', data)
    }
}