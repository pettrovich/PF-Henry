import React from 'react';
import { useSelector, connect } from 'react-redux';
import { deleteProductCarrito } from '../../redux/actions/carritoA';

function Carrito({ deleteProductCarrito }) {
    const products = useSelector((state) => state.carrito.productosCarrito);
    let total
    if (products.length <= 0) total = 0
    else total = Math.trunc(products.map(e => e.price).reduce((prevValue, currentValue) => prevValue + currentValue)) // Saca el total de los productos dentro del carrito

    function handleDelete(e) {
        deleteProductCarrito(e);
    }

    return (
        <div>
            <h1>Carrito</h1>
            {products.map(e => (
                <div key={e.id}>
                    <h1>{e.name}</h1>
                    <img src={e.image} alt='Imagen producto' width='150px' />
                    <h2>Precio: {e.price}</h2>
                    <h3 onClick={() => handleDelete(e)}>Sacar de carrito</h3>
                </div>
            )
            )}
            <h2>{total}</h2>
            <button>Terminar compra</button>
        </div>
    )
}


export default connect(null, { deleteProductCarrito })(Carrito)
