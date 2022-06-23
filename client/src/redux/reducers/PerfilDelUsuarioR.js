const initialState = {
    perfilDelUsuario: []

}

const PerfilDelUsuarioR = (state = initialState, action) =>{
    switch (action.type) {

        case "PERFIL_USUARIO":
            return {
                ...state,
                perfilDelUsuario: action.payload
            }

        default:
            return state; 
    }
}

export default PerfilDelUsuarioR;
