import React, { Component} from 'react';
import './Pet.css';
import HobbyList from './HobbyList';

class Pet extends Component {
	render() {
		return (
			 <div className="card">
			  <h2 className="name">GirlFriend</h2>
			  <img src="https://farm5.staticflickr.com/4275/34582766670_737005b29e.jpg"
			   alt="Pet" />
			  <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
			  <HobbyList />
			 </div>);
	}
}

export default Pet;

