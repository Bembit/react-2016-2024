import React from 'react'

export default function Nav(props) {

    const {countCart} = props;
    const totalQty = countCart.reduce((a, c) => a + c.qty, 0);

    return (
        <div className="nav">
        
            <h3>react props</h3>
            <div>
            <a href="#/">Cart
                
                {countCart.length !== 0 ? (
                <span>{totalQty}</span>
                ) : (
                    <span>0</span>
                )}
            
            </a>
            
            <a href="#/">Profile</a>
            </div>


        


        </div>
    )
}
