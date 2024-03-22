import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';

export default function PaymentScreen(props) {

    const cart = useSelector(state => state.cartDetails);
    const { shippingAddress } = cart;

    if(!shippingAddress.address) {
        props.history.push('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment methods</h1>
                </div>
                <div>
                    <div className="payment">
                        <div>
                            <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required defaultChecked onChange={(event) => setPaymentMethod(event.target.value)}></input>
                            <label htmlFor="paypal">Paypal</label>
                        </div>
                        <div>
                            <input type="radio" id="stripe" value="Stripe" name="paymentMethod" required onChange={(event) => setPaymentMethod(event.target.value)}></input>
                            <label htmlFor="paypal">Stripe</label>
                        </div>
                        <div>
                            <input type="radio" id="simplepay" value="OTP SimplePay" name="paymentMethod" required onChange={(event) => setPaymentMethod(event.target.value)}></input>
                            <label htmlFor="paypal">OTP SimplePay</label>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
