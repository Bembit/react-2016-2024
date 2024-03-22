import React from 'react'
import Item from './Item';

export default function AdminList(props) {

    const { removeItem, editItem, toggleActive, isEditing, handleToggle, query, showingResults, sortedItems } = props

    return (
        <div className="list-wrapper">
        <div className="list">
            
            {showingResults.length > 0 && query.length >= 2 ? 
            <>
                {sortedItems.map((item) => (
                    
                    <Item key={item.id} id={item.id} item={item} removeItem={removeItem} editItem={editItem} toggleActive={toggleActive} isEditing={isEditing} handleToggle={handleToggle}/>

                ))}
            </>
            :
            <>
                {props.sortedItems.map((item) => (
                        
                    <Item key={item.id} id={item.id} item={item} removeItem={removeItem} editItem={editItem} toggleActive={toggleActive} isEditing={isEditing} handleToggle={handleToggle}/>

                ))}
            </>
            }
           
        </div>
        </div>
)}
