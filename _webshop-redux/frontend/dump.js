{ cartItems.map((item) => (
    item.product.includes(productId)
        ?
        (
            <li>
                <button onClick={addToCardHandler} className="primary block">Already in cart</button>
            </li>
        ) 
        :
        (
            <li>
                <button onClick={addToCardHandler} className="primary block">Add to cart</button>
            </li>
        )
)) }


{ ((product._id === productId) && (product._id = props.match.params.id) && (productId)) ? (<div>{cartItems.map((item) => { console.log(item._id); return item._id } ) }</div>) : (<div>empty cart</div>) }


                                        { cartItems.find((item) => item._id = productId)
                                        ?
                                        (
                                            <li>
                                                {productId}
                                                <button onClick={addToCardHandler} className="primary block">Already in cart</button>
                                            </li>
                                        )
                                        :
                                        (
                                            <li>
                                                {productId}
                                                <button onClick={addToCardHandler} className="primary block">Add to cart</button>
                                            </li>
                                        )
                                        }

                                        { cartItems.map((item) => {
                                            return <div key={item._id}>{item._id}</div>
                                        })}