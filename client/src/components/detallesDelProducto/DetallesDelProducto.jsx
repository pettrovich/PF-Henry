import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
            <h1 className={style.name}>{productDetail.name}.</h1>
            <img className={style.image} src={productDetail.image} alt='Not found' />
            <h4 className={style.datos}>Marca: {productDetail.brand}.</h4>
            <h4 className={style.datos}>Precio: {productDetail.price}. Descuento: {productDetail.discount}%.</h4>
            <h4 className={style.datos}>Quedan en stock: {productDetail.stock} unidades.</h4>
            <p className={style.descripcion}>Descripcion del producto:  <br />{productDetail.description}</p>
            <h4 className={style.freeShipping}> {productDetail.freeShipping === true ? "Envio Gratis"  : "" } </h4>
            <br />
            <Link to="/products"><button className={style.volver}>Ir a productos.</button></Link>
        </div>
    )
}

export default connect(null, { getOneProduct })(Producto)
