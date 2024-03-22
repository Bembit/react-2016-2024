import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import AdminForm from './AdminForm';
import AdminList from './AdminList';
import data from './data';
import Sidenav from './Sidenav';

export default function AdminView() {

    // click anywehere modal close? haha!
    // theme change
    // localstorage
    // alert at delete and edit red and yellow
    // categories and tags to data with sidebar
    // basic routing for 2 pages?
    // bookmarks

// data    
	const placeHolders = data.users;
    const initialData = JSON.parse(localStorage.getItem('items')) || placeHolders;
	const [ items, setItems ] = useState(initialData);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

	console.table(placeHolders);
    console.table(items);

// handlers
    const [ name, setName ] = useState("");
    const handleNameChange = event => {
        setName(event.target.value);
    };

    const [ price, setPrice ] = useState("");
    const handlePriceChange = event => {
        setPrice(event.target.value);
    };

    const [ image, setImage ] = useState("");
    const handleImageChange = event => {
        setImage(event.target.value);
    };

    const onSubmitChange = () => {
        setName("");
        setPrice("");
        setImage("");
    };
// "random" image
    const baseUrl = "https://source.unsplash.com/600x400/?"
// generate a unique uuid
    function uuidv4() {
        console.log("generating uuid")
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
// add new item
    const addNewItem =  () => {
        setItems([ ...items, { id: uuidv4(), name: name, price: Number(price), image: baseUrl + image, isAvailable: true }]);
    };
// delete an item
    const removeItem = removeId => {
        const updatedItems = items.filter((item) => item.id !== removeId);
        setItems(updatedItems);
    };
// edit item
    const editItem = (editId, newName = name, newPrice = price, newImage = image) => {
        const updatedItems = items.map((item) => 
            item.id === editId ? { ...item, name: newName, price: Number(newPrice), image: baseUrl + newImage } : item
        );
        console.table(updatedItems)
        setItems(updatedItems);
    }
// toggle in stock, available
    const toggleActive = activeId => {
        const updatedItems = items.map((item) => 
            item.id === activeId ? { ...item, isAvailable: !item.isAvailable } : item
        );
        setItems(updatedItems);
    }
// search
    const [query, setQuery ] = useState("")
    const handleQueryChange = event => {
        setQuery(event.target.value);
    };
// search filters
    let showingResults = items.filter(function(item) {
        const nameMatch = item.name.toLowerCase().includes(query.toLowerCase());
        // console.log(nameMatch)
        
        const priceMatch = item.price.toString().includes(query);
        // console.log(priceMatch)

        const imageMatch = item.image.toLowerCase().includes(query.toLowerCase());
        // console.log(imageMatch)
        
        return nameMatch || priceMatch || imageMatch
    })
// sorting

    const [ sortedField, setSortedField ] = useState(null);
    console.log(sortedField)
    const handleSortChange = event => {
        setSortedField(event.target.value);
    };

    let sortedItems = [...showingResults]
    sortedItems.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
            return -1;
        }
        if (a[sortedField] > b[sortedField]) {
            return 1;
        }
        return 0;
    }) 

    return (
        <>
            <Nav handleSortChange={handleSortChange} handleQueryChange={handleQueryChange} query={query} items={items}></Nav>
            <div className="app">
                <AdminForm name={name} price={price} image={image} addNewItem={addNewItem} handleNameChange={handleNameChange} handlePriceChange={handlePriceChange} handleImageChange={handleImageChange} onSubmitChange={onSubmitChange}></AdminForm>
                <div className="main">
                <Sidenav></Sidenav>
                <AdminList sortedItems={sortedItems} query={query} showingResults={showingResults} items={items} removeItem={removeItem} editItem={editItem} toggleActive={toggleActive}></AdminList>
                </div>
            </div>
            <Footer/>
        </>
    );
};
