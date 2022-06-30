import React from "react";
import { useState, } from "react";
import style from './assets/Dashboard.module.css';
import CreateProduct from "../createProduct/CreateProduct";
import AdminProd from "./AdminProducts";


const Dashboard = () => {
    

    const [isShown, setIsShown] = useState(false);
    const [buttIndex, setButtIndex] = useState(null);

    const handleClick = event => {
        event.preventDefault();
        // toggle shown state
        setIsShown(current => !current);
        setButtIndex(Number(event.target.id))
        
    };

    return (
        <div className={style.container}>
            <h1>Dashboard</h1>
            <div>
                <button id={1} onClick={handleClick}>Create product</button>
                {isShown && buttIndex === 1 && <CreateProduct />}
            </div>
            <div>
                <button id={2} onClick={handleClick}>Catalogo producto</button>
                {isShown && buttIndex === 2 && <AdminProd />}
            </div>
        </div>
        
    )
}

export default Dashboard;