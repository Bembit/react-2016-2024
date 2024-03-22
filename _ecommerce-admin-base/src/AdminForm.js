import React, { useState } from 'react';

export default function AdminForm(props) {

// form toggler
    const [ isVisible, setIsVisible ] = useState(false);
    const toggle = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>  
            {isVisible ?
                <>
                <button className="additem" onClick={() => setIsVisible(toggle)}><i className="far fa-minus-square"></i></button> 
                <div className="form-container">
                    <form className="form main-form" onSubmit={(e) => {
                        e.preventDefault();
                        props.addNewItem(props.name, props.price, props.image);
                        props.onSubmitChange();
                        toggle();
                    }}>
                        <h3>title: {props.name}</h3>
                        <input required value={props.name} type="text" onChange={props.handleNameChange} placeholder={props.name}></input>

                        <h3>price: {props.price}</h3>
                        <input required value={props.price} type="number" onChange={props.handlePriceChange} placeholder={props.price}></input>

                        <h3>image: {props.image}</h3>
                        <input required value={props.image} type="text" onChange={props.handleImageChange} placeholder={props.image}></input>

                        <button className="submit">Submit</button>
                    </form>
               </div>
               </>
            :
            <>
            <button className="additem" onClick={() => setIsVisible(toggle)}>add item</button>
            <div></div>
            </>
            }

        </>
        
    )
}
