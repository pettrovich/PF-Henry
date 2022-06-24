import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useSelector } from 'react-redux'
import style from './assets/DetallesDelProducto.module.css';
import { getOneProduct } from '../../redux/actions/detailProductA';


function Producto({ getOneProduct }) {
    const location = useLocation();
    const idProduct = location.pathname.substring(8, location.pathname.length);
    const productDetail = useSelector((state) => state.detailProduct.product)
    // console.log(idProduct)

    useEffect(() => {
        getOneProduct(idProduct)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={style.ProductCard}>
            <h1 className={style.NombreProducto}>Producto: {productDetail.name}</h1>
            <img className={style.Img} src={productDetail.image} alt='Not found' />
            <h4 className={style.Precio}>Precio: {productDetail.price}</h4>
            <p className={style.Descripcion}>{productDetail.description}</p>
            <h5 className={style.Stock}>Quedan en stock:{productDetail.stock}</h5>
            <br />
        </div>
    )
}

export default connect(null, { getOneProduct })(Producto)
