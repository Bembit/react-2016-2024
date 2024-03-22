import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';

export default function ShippingAdressScreen(props) {

    const userSignin = useSelector(state => state.userSignin);

    const cart = useSelector(state => state.cartDetails);
    
    const { shippingAddress } = cart;

    const { userInfo } = userSignin;

    if ( !userInfo ) {
        props.history.push('/signin');
    }

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalcode, setPostalcode] = useState(shippingAddress.postalcode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(saveShippingAddress({
            fullName, address, city, postalcode, country
        }));
        props.history.push('/payment');
        // dispatch save shipping address action
    }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" value={fullName || ''} id="fullName" placeholder="fullName" onChange={(event) => setFullName(event.target.value)} required></input>

                    <label htmlFor="address">Address</label>
                    <input type="text" value={address || ''} id="address" placeholder="address" onChange={(event) => setAddress(event.target.value)} required></input>

                    <label htmlFor="city">city</label>
                    <input type="text" value={city || ''} id="city" placeholder="city" onChange={(event) => setCity(event.target.value)} required></input>

                    <label htmlFor="postalcode">postalcode</label>
                    <input type="text" value={postalcode || ''} id="postalcode" placeholder="postalcode" onChange={(event) => setPostalcode(event.target.value)} required></input>

                    <label htmlFor="country">country</label>
                    <input type="text" value={country || ''} id="country" placeholder="country" onChange={(event) => setCountry(event.target.value)} required></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
