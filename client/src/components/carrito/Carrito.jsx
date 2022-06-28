import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { resetTotal } from '../../redux/actions/carritoA';
import { Link } from 'react-router-dom';
import style from './assets/Carrito.module.css';
import CarritoCards from './CarritoCards';


function Carrito({ resetTotal }) {
    const products = useSelector((state) => state.carrito);

    // let total
    // if (products.length <= 0) total = 0
    // else total = Math.trunc(products.map(e => e.price).reduce((prevValue, currentValue) => prevValue + currentValue)) // Saca el total de los productos dentro del carrito

    useEffect(() => {
        return () => {
            resetTotal()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (

        <div className={style.body}>
            <div className={style.container}>
                <div className={style.products}>
                    {
                        (products.productosCarrito.length === 0)
                            ?   <div> <br/> 
                                    <h1 className={style.title}>No has agregado productos al carrito... </h1>
                                    <Link to = "/products" > <button className = {style.verProductos}>Ver productos</button> </Link>
                                </div> 
                            : products.productosCarrito.map(e =>
                            (
                                < CarritoCards
                                    key={e.id}
                                    id={e.id}
                                    name={e.name}
                                    image={e.image}
                                    price={e.price}
                                    stock={e.stock}
                                />
                            ))}
                </div>
                <div className={style.containerTotal}>
                    <div className={style.cardTotal}>
                        <p className={style.total}>Total</p>
                        <h2>${products.totalCarrito}</h2>
                        <button className={style.comprarBtn}>Terminar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(null, { resetTotal })(Carrito)
