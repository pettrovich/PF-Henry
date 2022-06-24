import React from 'react';
import './Login.css'
import {Link} from "react-router-dom";
import iconFace from './assets/facebook.svg'
import iconGoogle from './assets/google.svg'
const Login = () => {
    return (
        <div className="container-loggin">
            <div className="info-container">
                <h1 className="title"> Inicia Secion</h1>
                <div className="social-login">
                    <div className="red-social">
                        <img src={iconGoogle} alt="img google"/>
                        <pan>Google</pan>
                    </div>
                    <div className="red-social">
                        <img src={iconFace} alt="img facebook"/>
                        <pan>Facebook</pan>
                    </div>
                </div>
                <p>O</p>
                <form className="inputs-container">
                    <input className="input" type="text" placeholder="ingrese el Correo"/>
                    <input className="input" type="password" placeholder="ingrese la Contraseña"/>
                    <p>Olvido Contraseña? <span className="div-span">Click Aqui</span></p>
                    <button className="btn">Iniciar Secion</button>
                    <p>No Tienes Cuenta?
                        <Link to="/createAccount">
                            <span className="div-span">Registrate</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;