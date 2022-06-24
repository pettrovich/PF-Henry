import {ADD_USER} from '../actions/createUsers';

const initialState = {
    userCreated: []
};

const userCreated = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_USER:
            return {
                ...state,
                userCreated: state.userCreated.concat(payload)
            }
        default:
            return state;

    }

}
export default userCreated;