import React from 'react';
import useFormHook from './useFormHook';

export default function EditItem(props) {
   
    const { id, item, removeItem, toggle, isEditing, editItem } = props

    const [ fields, handleFieldChange, reset ] = useFormHook({
        name: "",
        price: "",
        image: ""
    });
    
    return (
        <div className="edit-form">
                <form className="form" onSubmit={(e) => {
                            e.preventDefault();
                            editItem(id, fields.name, fields.price, fields.image);
                            reset();
                            toggle(isEditing);
                        }}> 
                            <h3>{item.id}</h3>
                            <h3>Name</h3>
                            <input id="name" value={fields.name} type="text" onChange={handleFieldChange} placeholder={item.name}></input>

                            <h3>Price</h3>
                            <input id="price" value={fields.price} type="text" onChange={handleFieldChange} placeholder={item.price}></input>

                            <h3>Image</h3>
                            <input id="image" value={fields.image} type="text" onChange={handleFieldChange} placeholder={item.image}></input>
                            <button className="edit">Save</button>
                </form>

                <div className="listitem-buttons">
                    <button onClick={() => toggle(isEditing)}><i className="far fa-window-close"></i></button>
                    <button onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></button>
                </div>
        </div>
    )

}