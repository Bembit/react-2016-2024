import React from 'react';

const tagList = [ 'fun', 'food', 'girl', 'pizza', 'birthday', 'something', 'whatever' ]

export default function Sidenav(props) {
    return (
        <div className="sidenav">
            <span className="sidenav-title">tags</span>
                {tagList.map((item, key) => (
                    <button key={key}>{item}</button>
                ))}
        </div>
    )
}
