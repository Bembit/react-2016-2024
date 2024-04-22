import React from 'react'

export default function Cart(props) {

    const { inCart, onCheckout, removeFromCart, addToCart } = props;
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
                    <span>x {item.qty}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                    <button onClick={() => removeFromCart(item)}>-</button>
                    <span>$ {item.price * item.qty}</span>
                </div>
            )) }

           { inCart.length !== 0 && (
                <>
                <h2>$ {totalPrice}</h2>
                <button id="checkout" onClick={() => onCheckout()}>Check out</button>
                </>
           )}
        </div>
    )
}
