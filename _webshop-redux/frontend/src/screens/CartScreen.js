import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    
    const productId = props.match.params.id;
    console.log(props.match.params.id)
    console.log(productId)

    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const cartDetails = useSelector(state => state.cartDetails);
    const { cartItems } = cartDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, quantity));
        }
    }, [dispatch, productId, quantity]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
        // redirect to sign in, after signed in go to shipping details
        props.history.push('/signin?redirect=shipping');
    }
    // const discountedItem = parseFloat(product.price * 100 - product.discountPercent).toFixed(2)};
    const sumTotal = parseFloat((cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)).toFixed(2));

    // fucking logic and shit to make .22
    const discountedTotal = parseFloat((cartItems.reduce((acc, curr) => acc + (curr.price * (100 - curr.discountPercent)) * curr.quantity, 0)).toFixed(2));
    console.log(discountedTotal)

    // const discountedItem = parseFloat((cartItems.reduce((acc, curr) => acc + (curr.price * (100 - curr.discountPercent)) * curr.quantity, 0)).toFixed(2));
    console.log(typeof(sumTotal))
    return (
        <div className="row top">
            <div className="col-2">
                <h1>My Cart</h1>
                { cartItems.length === 0 ? <MessageBox>Cart is empty. <Link to="/">Go shopping</Link></MessageBox> : (

                    <ul> { cartItems.map((item) => (
                        <li key={item.product}>
                            <div className="row">
                                <div>
                                    <img className="small" src={`${item.image}.jpg`} alt={item.name}></img>
                                </div>
                                <div className="min-30">
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </div>
                                <div>
                                    <select value={item.quantity} onChange={(event) => dispatch(addToCart(item.product, Number(event.target.value)))}>
                                        {
                                            [...Array(item.countInStock).keys()].map(item => (
                                                <option key={item+1} value={item+1}>{item+1}</option>
                                            ))
                                        }
                                    </select>
                                    <div>
                                    {/* needs logic to check stock so it wont go minus or above limit */}
                                        <button onClick={() => dispatch(addToCart(item.product, Number(item.quantity + 1)))}>+</button>
                                        <button onClick={() => dispatch(addToCart(item.product, Number(item.quantity - 1)))}>-</button>
                                    </div>
                                </div>

                                { item.discountPercent === 0 ? (<div>{item.price}</div>) : 
                                    
                                    (<div className="price"><span>&nbsp;${parseFloat(item.price * `0.${100 - item.discountPercent}`).toFixed(2)}</span></div>)
                                        
                                }

                                <div>{item.price}</div>

                                <div>
                                    <button type="button" onClick={() => removeFromCartHandler(item.product)}>Remove item</button>
                                </div>
                            </div>
                        </li>
                    )) }
                    </ul>) }
            </div>
            <div className="col-1">
                <div className="card card-body">
                {/* has to show discounted price */}
                    <ul>
                        <li>
                            <h2>
                                Subtotal
                                {/* ( {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} items ) : ${sumTotal} */}
                                ( {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} items ) : ${sumTotal}
                                ( {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} items ) : ${discountedTotal}
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="primary block" disabled={ cartItems.length === 0 }>
                                Proceed to checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
