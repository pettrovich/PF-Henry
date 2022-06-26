import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import iconFace from './assets/facebook.svg'
import iconGoogle from './assets/google.svg'
const Login = () => {
    return (
        <div className="container-loggin">
            <div className="info-container">
                <h1 className="title">INICIA SESION</h1>
                <form className="inputs-container">
                    <input className="input" type="text" placeholder="Ingrese el correo" />
                    <input className="input" type="password" placeholder="Ingrese la contraseña" />
                    <p>Olvido su contraseña? <span className="div-span">Click Aquí</span></p>
                    <button className="btn">Iniciar sesión</button>
                    <p>No tienes cuenta?
                        <Link to="/createAccount">
                            <span className="div-span"> Registrate</span>
                        </Link>
                    </p>
                </form>
                <div className="social-login">
                    <div className="red-social">
                        <img src={iconGoogle} alt="img google" />
                        <span>Google</span>
                    </div>
                    <div className="red-social">
                        <img src={iconFace} alt="img facebook" />
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;