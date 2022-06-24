import React from 'react';
import Carousel from './Carousel';
import style from './assets/LandingPage.module.css'

const images = ['./assets/imagen1.jpg', './assets/imagen2.jpg', './assets/imagen3.jpg', './assets/imagen4.jpg'];

export default function LandingPage() {
    return (
        <div className={style.body}>
            <Carousel images={images} />
            <div className={style.container}>
                <div className={style.section}>
                    <p>Productos mas vendidos</p>
                    <div className={style.productosVendidos}></div>
                    <p>Nuevos productos</p>
                    <div className={style.productosVendidos}></div>
                    <p>Ofertas</p>
                    <div className={style.productosVendidos}></div>
                </div>
            </div>
        </div>
    )
}
