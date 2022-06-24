import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { orderByPrice, getByCategory } from '../../redux/actions/productsA';
import style from './assets/Filtrado.module.css';

function Filtrado({ orderByPrice, getByCategory }) {
    const [state, setState] = useState({
        price: '',
        categoria: ''
    })

    useEffect(() => {
        if (state.price.length > 2) orderByPrice(state.price)
        if (state.categoria.length > 2) getByCategory(state.categoria)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])


    return (
        <div>
            <form className={style.container}>
                <label htmlFor='asc/desc'>
                    <select value={state.price} onChange={(e) => setState({ ...state, price: e.target.value })}>
                        <option value={''}>Precio</option>
                        <option value='ASC'>[Ascendente]</option>
                        <option value='DESC'>[Descendente]</option>
                    </select>
                </label>
                <label htmlFor='categorias'>
                    <select value={state.categoria} onChange={(e) => setState({ ...state, categoria: e.target.value })}>
                        <option value={''}>Categoría</option>
                        <option value='MotherBoard'>MotherBoard</option>
                        <option value='RAM'>RAM</option>
                        <option value='Micro-procesador'>Micro-procesador</option>
                        <option value='SSD'>SSD</option>
                        <option value='HDD'>HDD</option>
                        <option value='M.2NVme'>M.2NVme</option>
                        <option value='Placa de video'>Placa de videos</option>
                        <option value='Monitor'>Monitores</option>
                        <option value='Fuente de alimentación'>Fuente de alimentación</option>
                        <option value='Teclados'>Teclados</option>
                        <option value='Auriculares'>Auriculares</option>
                        <option value='Mouse'>Mouse</option>
                        <option value='Mousepad'>Mousepad</option>
                        <option value='Sillas'>Sillas</option>
                        <option value='Gabinete'>Gabinetes</option>
                        <option value='Webcam'>Webcam</option>
                        <option value='Parlante'>Parlante</option>
                        <option value='Micrófono'>Microfonos</option>
                        <option value='Refrigeración'>Refrigeración</option>
                    </select>
                </label>
            </form>
        </div>
    )
}

export default connect(null, { orderByPrice, getByCategory })(Filtrado)