import React, { Component } from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

class Navbar extends Component {
	static defaultProps = {
		onNewRecipe() {}

	}

	static propTypes = {
		onNewRecipe: PropTypes.func
	}

	render() {
		return (
			<header className="container">
				<nav className="nav-div">
					<li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
				</nav>
			</header>
			);
	}
}

export default Navbar;