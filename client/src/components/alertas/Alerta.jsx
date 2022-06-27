import React from 'react';
import style from './assets/Alertas.module.css';
import checked from './assets/checked.svg';
import error from './assets/error.svg';

export default function Alerta({ setOpenModal, type }) {

    setTimeout(() => {
        setOpenModal(false)
    }, 1500);

    function tipoAlerta() {
        switch (type) {
            case 'success':
                return (
                    <div className={style.success}>
                        <img src={checked} alt="checked" className={style.svgChecked} />
                        <div className={style.titleCloseBtn}>Producto agregado a carrito</div>
                    </div>
                )
            case 'error':
                return (
                    <div className={style.error}>
                        <img src={error} alt="error" className={style.svgChecked} />
                        <div className={style.titleCloseBtn}>Producto ya en carrito</div>
                    </div>
                )
            case 'warning':
                return (
                    <div className={style.modalContainer}>
                        <img src={checked} alt="checked" className={style.svgChecked} />
                        <div className={style.titleCloseBtn}>Producto agregado a carrito</div>
                    </div>
                )
            default:
                break;
        }
    }

    return (
        <>
            {tipoAlerta()}
        </>
        // <div className={style.modalContainer}>
        //     <img src={checked} alt="checked" className={style.svgChecked} />
        //     <div className={style.titleCloseBtn}>Producto agregado a carrito</div>
        // </div >
    );
}
