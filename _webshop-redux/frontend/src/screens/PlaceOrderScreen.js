import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props) {

    const cart = useSelector((state) => state.cartDetails);

    if(!cart.paymentMethod) {
        props.history.push('/payment');
    }

    const toPrice = (num) => Number(num.toFixed(2));

    cart.itemsPrice = toPrice(cart.cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0));

    cart.shippingPrice = cart.itemsPrice > 0 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const placeOrderHandler = (event) => {
        // event.preventDefault();
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="">
                    <div className="col-2">
                        <ul>
                            <li>
                                <div className="card card-body">
                                    <h2>Ships to:</h2>
                                    <p>
                                        <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                                        <strong>Address:</strong> {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalcode}, {cart.shippingAddress.country}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Payment</h2>
                                    <p>
                                        <strong>Method:</strong> {cart.paymentMethod}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Orders - Subtotal {}</h2>

                                    <ul>
                                    { cart.cartItems.map((item) => (
                                        <li key={item.product}>

                                            <div className="row">
                                                <div>
                                                    <img className="small" src={`${item.image}.jpg`} alt={item.name}></img>
                                                </div>
                                                <div className="min-30">
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>
                                                
                                                <div>{item.quantity} x ${item.price} = ${item.quantity * item.price}</div>
                                               
                                            </div>
                                        </li>
                                    )) }
                                    </ul>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li><h2>Summary</h2></li>
                                <li>Items: ${cart.itemsPrice}</li>
                                <li>Shipping: ${cart.shippingPrice}</li>
                                <li>Tax: ${cart.taxPrice}</li>
                                <li>Total: ${cart.totalPrice}</li>
                                <li><button className="primary block" onClick={placeOrderHandler} disabled={cart.cartItems.length === 0}>Checkout</button></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
