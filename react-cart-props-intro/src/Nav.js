import React from 'react'

export default function Nav(props) {

    const countCart = props;
    console.log(countCart.countCart)

    return (
        <div className="nav">
        
            <h3>react props</h3>
            <div>
            <a href="#/">Cart
                
                {countCart.length !== 0 ? (
                <span>{countCart.countCart.length}</span>
                ) : (
                    <div></div>
                )}
            
            </a>
            
            <a href="#/">Profile</a>
            </div>


        


        </div>
    )
}
