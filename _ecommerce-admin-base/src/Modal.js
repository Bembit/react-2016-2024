import React from 'react'

export default function Modal(props) {

    const { item, toggleActive } = props;

    if (!props.show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-title">
                 <img className="modal-image" src={item.image} alt={item.name}></img>
                </div>
                <div className="modal-body">
                    <h4>name: <span>{item.name}</span></h4>
                    <h4>price: <span>{item.price}</span></h4>
                </div>
                <div className="modal-footer">
                    <h4>image: <span>{item.image}</span></h4>
                    <label className="checkbox">
                        <input type="checkbox" checked={item.isAvailable} onChange={() => toggleActive(item.id)}></input>
                        {item.isAvailable ? <span>in stock</span> : <span>currently unavailable</span> }
                    </label>
                </div>
                    <button className="modal-close" onClick={props.onClose}><i className="far fa-times-circle"></i></button>
            </div>
        </div>
    )
}
