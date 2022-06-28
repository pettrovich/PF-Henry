import React from 'react';
import Carousel from './Carousel';
import style from './assets/LandingPage.module.css'
import CardsLanding from './CardsLanding';

const images = ['./assets/imagen1.jpg', './assets/imagen2.jpg', './assets/imagen3.jpg', './assets/imagen4.jpg'];

export default function LandingPage() {

    return (
        <div className={style.body}>
            <Carousel images={images} />
            <div className={style.container}>
                <div className={style.section}>
                    <p className={style.title}>Productos mas vendidos</p>
                    <div className={style.productosVendidos}>
                        <CardsLanding
                            id={45}
                            key={78}
                            name={'GeForce RTX 2060 Super'}
                            price={450}
                            image={'https://c1.neweggimages.com/ProductImage/14-126-447-V01.jpg'}
                        />
                        <CardsLanding
                            id={45}
                            key={79}
                            name={'AMD Ryzen 5 3600'}
                            price={450}
                            image={'https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg'}
                        />
                        <CardsLanding
                            id={45}
                            key={80}
                            name={'HyperX Fury DDR4'}
                            price={450}
                            image={'https://images-na.ssl-images-amazon.com/images/I/51MsmHdYjnL._AC_SL1000_.jpg'}
                        />
                    </div>
                    <p className={style.title}>Nuevos productos</p>
                    <div className={style.productosVendidos}>
                        <CardsLanding
                            id={45}
                            key={78}
                            name={'GeForce RTX 2060 Super'}
                            price={450}
                            image={'https://c1.neweggimages.com/ProductImage/14-126-447-V01.jpg'}
                        />
                        <CardsLanding
                            id={45}
                            key={79}
                            name={'AMD Ryzen 5 3600'}
                            price={450}
                            image={'https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg'}
                        />
                        <CardsLanding
                            id={45}
                            key={80}
                            name={'HyperX Fury DDR4'}
                            price={450}
                            image={'https://images-na.ssl-images-amazon.com/images/I/51MsmHdYjnL._AC_SL1000_.jpg'}
                        />
                    </div>
                    <p className={style.title}>Ofertas</p>
                    <div className={style.productosVendidos}>
                        <CardsLanding
                            id={45}
                            key={78}
                            name={'GeForce RTX 2060 Super'}
                            price={450}
                            image={'https://c1.neweggimages.com/ProductImage/14-126-447-V01.jpg'}
                        />
                        <CardsLanding
                            id={45}
                            key={79}
                            name={'AMD Ryzen 5 3600'}
                            price={450}
                            image={'https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg'}
                        />
                        <CardsLanding
                            id={45}
                            key={80}
                            name={'HyperX Fury DDR4'}
                            price={450}
                            image={'https://images-na.ssl-images-amazon.com/images/I/51MsmHdYjnL._AC_SL1000_.jpg'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
