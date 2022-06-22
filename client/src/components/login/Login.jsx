import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <h3>Iniciar Secion</h3>
                </div>
                <div>
                    <input type="text" placeholder="Ingresar correo"/>
                    <input type="text" placeholder="Ingresar clave"/>
                </div>
                <div>
                    <p>Registrarme</p>
                    <p>Olvide mi clave</p>
                </div>
                <div>
                    <button>LOGIN</button>
                </div>
                <div>
                    <p>----------Iniciar Secion Con Google-------------</p>
                </div>
                <div>
                    <button>Continue con Google</button>
                </div>
                <p>Politica de Privacidad</p>
            </form>

        </div>
    );
};

export default Login;