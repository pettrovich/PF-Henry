import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../carrito/assets/no-image.jpg';
import style from './assets/CardsLanding.module.css';

export default function CardsLanding({ name, image, price, description, category, stock, id, addProductCarrito, favorito = false, addFavorite, removeFavorite }) {
    return (
        <div id={id} className={style.card}>
            <img src={image} className={style.cardImg} alt='Imagen producto' onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = `${noImage}`;
            }} />
            <Link to={`/`} className={style.linkTo}><p className={style.textTitle}>{name.charAt(0).toUpperCase() + name.slice(1)}</p></Link>


            <div className={style.footer}>
                {/* <span className={style.textTitle}>${price}</span> */}
            </div>
        </div>
    )
}
