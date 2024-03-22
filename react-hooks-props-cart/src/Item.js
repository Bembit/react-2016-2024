import React from 'react'

export default function Item(props) {

    const { item, addToCart } = props;
    
    return (
        <div className="item">
            <img src={item.image} alt={item.name}></img>
            <h4>{item.name}</h4>

            <span>$ {item.price}</span>
            <div className="btns">
            <button onClick={() => addToCart(item)}>Add</button>
            </div>
        </div>
    )
}
