import React from 'react';
import { Link } from 'react-router-dom';
import '../DetallesDelProducto/DetallesDelProducto.module.css'

export default function Producto ({ id, name, image, price, description, stock}) {
    return (
        <div className='ProductCard'>
            <h1 className='NombreProducto'>Producto: {name}</h1>
            <Link to={"/productos/" + id}>
                <img className='Img' src={image} alt='Not found'/>
            </Link>
            <h4 className='Precio'>Precio: {price}</h4>
            <p className='Descripcion'>{description}</p>
            <h5 className='Stock'>Quedan en stock:{stock}</h5>
            <br />
        </div>
    )
}