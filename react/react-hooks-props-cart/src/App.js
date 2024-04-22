import React, { useState } from 'react';
import data from './data';

import Nav from './Nav';
import Main from './Main';
import Cart from './Cart';

export default function App() {

	const { menu } = data;
	const [ inCart, setInCart ] = useState([]);
	console.log(inCart);

	const addToCart = (item) => {
		const alreadyInCart = inCart.find((alreadyInCart) => alreadyInCart.id === item.id);
		if(alreadyInCart) {
			setInCart(
				inCart.map((check) => 
					check.id === item.id ? { ...alreadyInCart, qty: alreadyInCart.qty + 1 } : check
				)
			);
		} else {
			// starts at zero
			if(inCart.length <= 6) {
				setInCart([ ...inCart, { ...item, qty: 1 } ]);
			}
			else {
				alert('That\'s a big list, CSS is at risk! :D Please checkout.');
				return;
			}
		}
	};

	// if the cart item is found set the quantity to 0;
	const removeFromCart = (menu) => {
		const alreadyInCart = inCart.find((alreadyInCart) => alreadyInCart.id === menu.id);
		if(alreadyInCart.qty === 1) {
			setInCart(inCart.filter((match) => match.id !== menu.id));
		} else {
			setInCart(
				inCart.map((item) => 
					item.id === menu.id ? { ...alreadyInCart, qty: alreadyInCart.qty - 1 } : item
				)
			);
		};
	};

	// on checkout reset to the initial empty state
	const onCheckout = () => {
		setInCart([]);
	}

	return (
		<div>
			<Nav countCart={inCart}></Nav>
			<div className="app">
			<Main menu={menu} addToCart={addToCart}></Main>
			<Cart inCart={inCart} addToCart={addToCart} removeFromCart={removeFromCart} onCheckout={onCheckout}></Cart>
			</div>
		</div>
	);
};