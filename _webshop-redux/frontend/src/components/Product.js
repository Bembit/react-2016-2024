import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const { product } = props;

    return (

        <div key={product._id} className="card">
            <Link to={`/product/${product._id}`}>
                <img className="medium" src={`${product.image}.jpg`} alt={product.name} />
            </Link>
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>

                <Rating rating={product.rating} numReviews={product.numReviews} />

                <div className="price">
                    {
                        (product.price && product.discountPercent) && product.discountPercent !== 0
                        ?
                        (<div><span>${parseFloat(product.price * `0.${100 - product.discountPercent}`).toFixed(2)}</span><span className="strike">${product.price}</span><span className="discount">{product.discountPercent}% off</span></div>)
                        :
                        (<span>{product.price}</span>)
                    }
    
                    
                    {/* $&nbsp;{product.price} */}
                </div>
            </div>
        </div>
    )
}