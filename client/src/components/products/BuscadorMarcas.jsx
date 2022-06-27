import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getbrand } from '../../redux/actions/productsA';
import style from './assets/Filtrado.module.css';

export default function SearchBar() {
    const dispatch = useDispatch()
    const [brand, setBrand] = useState("")


    function handleInputChange(e) {
        e.preventDefault()
        setBrand(e.target.value)

    }
    //boton
    function handleSubmit(e) {
        e.preventDefault();

        if (brand !== "") {
            dispatch(getbrand(brand));
            setBrand("");
        }

        else {
            alert("Ingrese una marca")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Escriba una marca."
                        onChange={(e) => handleInputChange(e)}
                        value={brand}
                    />
                    <button type='submit' className={style.inputBtn} onClick={handleSubmit}>Buscar</button>
                </div>
            </form>
        </div>
    )
}