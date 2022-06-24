import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useSelector } from 'react-redux'
import './DetallesDelProducto.module.css';
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
        <div className='ProductCard'>
            <h1 className='NombreProducto'>Producto: {productDetail.name}</h1>
            <img className='Img' src={productDetail.image} alt='Not found' />
            <h4 className='Precio'>Precio: {productDetail.price}</h4>
            <p className='Descripcion'>{productDetail.description}</p>
            <h5 className='Stock'>Quedan en stock:{productDetail.stock}</h5>
            <br />
        </div>
    )
}

export default connect(null, { getOneProduct })(Producto)
