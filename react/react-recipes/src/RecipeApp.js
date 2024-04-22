import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import './RecipeApp.css';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			recipes: [
			{
				id: 0,
				title: "something",
				instructions: "something else",
				ingredients: ["water", "milk", "shake"],
				img: "pic.jpg"
			},
			{
				id: 1,
				title: "something 2",
				instructions: "something blah",
				ingredients: ["sugar", "milk", "indianfood"],
				img: "pic.jpg"
			},
			{
				id: 2,
				title: "something 3",
				instructions: "something third",
				ingredients: ["pizza", "brownie", "coke"],
				img: "pic.jpg"
			}
			],
		nextRecipeId: 3,
		showForm: false
		}

		this.handleSave = this.handleSave.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	handleSave(recipe) {
		this.setState((prevState, props) => {
			const newRecipe = {...recipe, id: this.state.nextRecipeId};
			return {
				nextRecipeId: prevState.nextRecipeId + 1,
				recipes: [...this.state.recipes, newRecipe],
				showForm: false
			}
		});
	}

	onDelete(id) {
		const recipes = this.state.recipes.filter(r => r.id !== id);
		this.setState({recipes});
	}

  render() {
  	const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ? 
        	<RecipeInput
        		onSave={this.handleSave} 
        		onClose={() => this.setState({showForm: false})}
        	/> : null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
