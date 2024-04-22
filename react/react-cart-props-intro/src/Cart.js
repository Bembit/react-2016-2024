import React from 'react'

export default function Cart(props) {

    const { inCart, onCheckout } = props;
    const totalPrice = inCart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);


    return (
        
        <div className="cart">
           { inCart.length !== 0 && (
                <>
                <h2>Your order:</h2>
                </>
           )}
            { inCart.length === 0 && <></>}
            { inCart.map((item) => (
                <div className="cartitem" key={item.id}>
                    <img src={item.image} alt={item.name}></img>
                    <span>{item.name}</span>
                    <span>$ {item.price}</span>
                </div>
            )) }

           { inCart.length !== 0 && (
                <>
                <h2>$ {totalPrice}</h2>
                <button onClick={() => onCheckout()}>Check out</button>
                </>
           )}
        </div>
    )
}
