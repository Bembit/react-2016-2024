import React from 'react'
// import { Link } from 'react-router-dom'

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {/* HomeScreen --> <MessageBox>{error}</MessageBox> */}
            {props.children}
        </div>
    )
}
