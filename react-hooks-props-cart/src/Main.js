import React from 'react';
import Item from './Item';

export default function Main(props) {

    const { menu, addToCart } = props

    return (
        <div className="main">
            {menu.map((item) => (
                <Item key={item.id} item={item} addToCart={addToCart}></Item>
            ))}
        </div>
    )
}
