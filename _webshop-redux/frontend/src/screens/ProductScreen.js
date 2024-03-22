import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    // const product = data.products.find(item => item.id === props.match.params.id);

    const dispatch = useDispatch();

    const productId = props.match.params.id;
    console.log(props.match.params.id);
    console.log(props.location)

    const [quantity, setQuantity] = useState(1);

    const productDetails =  useSelector( (state) => state.productDetails );
    
    // const cartDetails = useSelector(state => state.cartDetails);
    // const { cartItems } = cartDetails;

    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCardHandler = () => {
        props.history.push(`/cart/${productId}?quantity=${quantity}`);
    }

    const addToSavedHandler = () => {
        props.history.push(`/saveditems/${productId}?quantity=${quantity}`);
    }

    return (
        <div className="fullwidth-full-height">
        { loading ?
            (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant="info">{error}</MessageBox>)
            :
            <div>
                <Link to="/">Back to Shop</Link>
                <div className="row top">
                    <div className="col-2">
                        <img className="large" src={`${product.image}.jpg`} alt={product.name} />
                    </div>
                    <div className="col-1">

                        <ul>
                            <li>{product._id}</li>
                            <li>{product.name}</li>
                            <li>
                                <Rating rating={product.rating} numReviews={product.numReviews} />
                            </li>
                            <li>$&nbsp;{product.price}</li>
                            <li><p>{product.description}</p></li>
                        </ul>

                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                       
                                        {/* has to show discounted price and discount YOU SAVE */}
                                        { product.discountPercent === 0 ? (<div className="price">$&nbsp;{product.price}</div>) : 
                                        
                                        <div className="price">&nbsp;
                                        {
                                            (product.price && product.discountPercent) && product.discountPercent !== 0
                                            ?
                                            (<div><span>${parseFloat(product.price * `0.${100 - product.discountPercent}`).toFixed(2)}</span><span className="strike">${product.price}</span><span className="discount">{product.discountPercent}% off</span></div>)
                                            :
                                            (<span>{product.price}</span>)
                                        }
                                        </div>
                                        
                                        }
                                        {/* <div className="price">$&nbsp;{product.price}</div> */}
                                        
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status:&nbsp;</div>
                                        <div>
                                            {product.countInStock > 10 ? (<span className="success">In Stock</span>) : product.countInStock <= 10 && product.countInStock !== 0 ? (<span className="warning">Only {product.countInStock} left in stock</span>) : (<span className="danger">Out of stock</span>)}
                                        </div>
                                    </div>
                                </li>
                                {product.countInStock > 0 ? (
                                    <>
                                        <li>
                                            <div className="row">
                                                <div className="">Quantity</div>
                                                <div className="">
                                                    <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                                                        {
                                                           [...Array(product.countInStock).keys()].map(item => (
                                                               <option key={item+1} value={item+1}>{item+1}</option>
                                                           ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <button onClick={addToCardHandler} className="primary block">Add to cart</button>
                                        </li>
                                       
                                        {/* <li>
                                            <button onClick={addToSavedHandler} className="secondary block">Save for later</button>
                                        </li> */}

                                    </>
                                )
                                :
                                (
                                    <>
                                        <li className="primary block">Notify me when available</li>
                                    </>
                                )} 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
        )
    
}
