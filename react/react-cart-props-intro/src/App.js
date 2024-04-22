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
		// starts at zero
		if(inCart.length <= 6) {
			setInCart([ ...inCart, { ...item, qty: 1 } ]);
		}
		else {
			alert('That\'s a big list, CSS is at risk! :D Please checkout.');
			return;
		}
	};

	// if the cart item is found set the quantity to 0;
	const removeFromCart = (menu) => {
		setInCart(
			inCart.map((item) => 
				item.id === menu.id ? { qty: 0 } : item
			)
		)
	}

	// on checkout reset to the initial empty state
	// toggle "thanks" setinterval 2sec reset state
	const onCheckout = () => {
		setInCart([]);
	}

	return (
		<div>

			<Nav countCart={inCart}></Nav>
			<div className="app">
			<Main menu={menu} addToCart={addToCart}></Main>
			<Cart inCart={inCart} addToCart={addToCart} onCheckout={onCheckout}></Cart>
			</div>
		</div>
	);
};