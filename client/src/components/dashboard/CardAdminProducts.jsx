import React from "react";


export default function Card ({id, name, price, stock, discount, amountSold}){
    return (
        <div >

            <p >
            ID: {id}.
            
            PRODUCTO: { name}. 

            PRICE: {price}.

            STOCK: {stock}.

            DISCOUNT: {discount}.

            SOLD: {amountSold}.
         
            </p>
            <button>Edit product</button>
                      
        </div>
    );
}