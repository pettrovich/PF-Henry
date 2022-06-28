import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import iconFace from './assets/facebook.svg'
import iconGoogle from './assets/google.svg'
const Login = () => {
    return (
        <div className="container-loggin">
            <div className="info-container">
                <h1 className="title">INICIAR SESIÓN</h1>
                <form className="inputs-container">
                    <input className="input" type="text" placeholder="Ingrese el correo." />
                    <input className="input" type="password" placeholder="Ingrese la contraseña." />
                    <p>¿Olvidó su contraseña? <span className="div-span">Haz click aquí.</span></p>
                    <button className="btn">Iniciar sesión</button>
                    <p>¿No esas registrado?    
                        <Link to="/createAccount">
                            <button className="btn2"> Registrate</button>
                        </Link>
                    </p>
                </form> <br/>
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