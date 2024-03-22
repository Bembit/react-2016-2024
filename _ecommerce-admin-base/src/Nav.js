import React from 'react'

export default function Nav(props) {

    const { items } = props

    const isAvailable = items.filter((item) => item.isAvailable === false).length;

    return (
        <div className="nav">

            <div className="nav-left">
                <h3>react hooks</h3>
                <div>
                    <input id="search" value={props.query} onChange={props.handleQueryChange} type="text" placeholder="Search..."></input>
                    <button value="" className="reset" onClick={props.handleQueryChange}>reset</button>
                </div>
                <h3>sort by</h3>
                <select defaultValue="id" onChange={props.handleSortChange}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="id">Id</option>
                </select>
            </div>

            <div className="nav-right">
                <a href="#/">TOTAL
                    <span className="span-1">{items.length}</span>
                </a>
                <a href="#/">OUTOFSTOCK
                    <span className="span-2">{isAvailable}</span>
                </a>
            </div>

        </div>
    )
}
