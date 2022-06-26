import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useSelector } from 'react-redux'
import style from './assets/DetallesDelProducto.module.css';
import { getOneProduct } from '../../redux/actions/detailProductA';
import noImage from './assets/no-image.jpg'


function Producto({ getOneProduct }) {
    const location = useLocation();
    const idProduct = location.pathname.substring(8, location.pathname.length);
    const productDetail = useSelector((state) => state.detailProduct.product)
    // console.log(idProduct)

    useEffect(() => {
        getOneProduct(idProduct)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function stockDisponible() {
        if (productDetail.stock > 0) return (<p>Stock disponible</p>)
        else return (<p> Stock no disponible </p>)
    }

    return (
        <div className={style.body}>
            <div className={style.productCard}>
                <img src={productDetail.image} className={style.cardImg} alt='Imagen producto' onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${noImage}`;
                }} />
                <div className={style.subContainer}>
                    <h1 className={style.nombreProducto}>{productDetail.name}</h1>
                    <p className={style.descripcion}>{productDetail.description}</p>
                    {stockDisponible()}
                    <p className={style.precio}>${productDetail.price}</p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default connect(null, { getOneProduct })(Producto)