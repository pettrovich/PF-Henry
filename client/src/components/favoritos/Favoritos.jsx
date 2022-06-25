import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../productCard/ProductCard';

export default function Favoritos() {
    const productosFavoritos = useSelector((state) => state.favoritos.productosFavoritos);

    return (
        <div>
            <div>
                <div>
                    {productosFavoritos.map(e => {
                        return (
                            <div key={e.id}>
                                <ProductCard
                                    id={e.id}
                                    name={e.name}
                                    price={e.price}
                                    category={e.category}
                                    image={e.image}
                                    description={e.description}
                                    favorito={true}
                                />
                            </div>

                        )
                    })}
                </div>
            </div>
        </div >
    )
}
