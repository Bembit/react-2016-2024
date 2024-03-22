import React, { useState } from 'react';
import EditItem from './EditItem';
import Modal from './Modal';

export default function Item(props) {

    const { id, removeItem, toggleActive, editItem, item } = props
    
    const [show, setShow] = useState(false);

    const [ isEditing, setIsEditing ] = useState(false);
    const toggle = () => {
        setIsEditing(!isEditing);
    }

    return (
            <div className="listitem" key={item.id}>

                    {!isEditing

                    ?

                    (
                    <> 
                        <div className="imagecontainer" style={{backgroundImage: `url(${item.image})`}}></div>
                        <h3 className="list-title">{item.name}</h3>
                        <div className="price">$ {item.price}</div>
                        <div className="listitem-buttons">
                        <button onClick={() => toggle()}><i className="far fa-edit"></i></button>
                        <button onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></button>
                        
                        <button onClick={() => setShow(true)}><i className="far fa-comment"></i></button>
                
                        <Modal toggleActive={toggleActive} item={item} onClose={() => setShow(false)} show={show}/>

                        </div>
                        <div className="check">
                        <label className="checkbox">
                        <input type="checkbox" checked={item.isAvailable} onChange={() => toggleActive(item.id)}></input>
                        {item.isAvailable ? <span>in stock</span> : <span>currently unavailable</span> }
                        </label>
                        </div>
                    </>
                    )

                    :

                    (
                    <>
                        <EditItem item={item} id={id} removeItem={removeItem} editItem={editItem} isEditing={isEditing} toggle={toggle}></EditItem>
                    </>
                    )
                    }
                    </div>
    )
}
