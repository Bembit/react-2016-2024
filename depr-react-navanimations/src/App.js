import React, { useState, useRef, useEffect } from 'react';
import {CSSTransition} from 'react-transition-group'; 

import './index.css';

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

// <NavItem icon={<ChevronIcon />}/>

// const {useState} = React;

// const Data = {
// 	navitems : [
// 		{
// 			name: "name",
// 			icon: "😍"
// 		},
// 		{
// 			name: "name",
// 			icon: "😍"
// 		}
// 	]
// }

function HookCounter() {

	const [count, setCount] = useState(0)

	return (
		<button onClick={() => setCount(count+1)}>
			{count}
		</button>
	)
}


function App() {
	return(
	<>
	<Navbar>
		<NavItem icon={<PlusIcon/>}/>
		<NavItem icon={<BellIcon/>}/>
		<NavItem icon={<MessengerIcon/>}/>
		<NavItem icon={<CaretIcon/>}>
			<DropdownMenu></DropdownMenu>
		</NavItem>
	</Navbar>
	<HookCounter />
	</>

	);
}


function Navbar(props) {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				{props.children}
			</ul>
		</nav>
	);
}

function NavItem(props) {

const [open, setOpen] = useState(false);

return(
	<li className="nav-item">
		<a href="#" className="icon-button" onMouseEnter={() => setOpen(!open)}>
			{props.icon}
		</a>
		{open && props.children}
	</li>
	);
}

function DropdownMenu(props) {

	const [ activeMenu, setActiveMenu ] = useState('main'); 

	const [ menuHeight, setMenuHeight ] = useState(null);

	const dropdownRef = useRef(null);

	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
	}, []);

	function calcHeight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height);
	}

function DropdownItem(props) {
	return(
		<a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
			<span className="icon-button">{props.leftIcon}</span>
			{props.children}  	
			<span className="icon-right">{props.rightIcon}</span>
		</a>
	);
}

	return(
		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef} >
				<CSSTransition in={activeMenu === 'main'} timeout={500} classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
					<div className="menu">
						<h3>My Profile</h3>
						<DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings" >Settings</DropdownItem>
						<DropdownItem leftIcon={<BoltIcon />} >Logout</DropdownItem>
					</div>
				</CSSTransition>
			
				<CSSTransition in={activeMenu === 'settings'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
					<div className="menu">
						<DropdownItem leftIcon={<ChevronIcon />} goToMenu="main">Settings</DropdownItem>
						<DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon/>} goToMenu="advancedsettings">Advanced Settings</DropdownItem>
						<DropdownItem leftIcon={<PlusIcon />} goToMenu="settings">Account</DropdownItem>
						<DropdownItem leftIcon={<BellIcon />} goToMenu="settings">Privacy</DropdownItem>
					</div>
				</CSSTransition>

				<CSSTransition in={activeMenu === 'advancedsettings'} timeout={500} classNames="menu-tertiary" unmountOnExit onEnter={calcHeight}>
					<div className="menu">
						<DropdownItem leftIcon={<ChevronIcon />} goToMenu="settings">Advanced Settings</DropdownItem>
						<DropdownItem leftIcon={<BellIcon />} goToMenu="settings">Option 1</DropdownItem>
						<DropdownItem leftIcon={<PlusIcon />} goToMenu="settings">Option 2</DropdownItem>
						<DropdownItem leftIcon={<BellIcon />} goToMenu="settings">Option 3</DropdownItem>
						<DropdownItem leftIcon={<PlusIcon />} goToMenu="settings">Option 4</DropdownItem>
						<DropdownItem leftIcon={<BellIcon />} goToMenu="settings">Option 5</DropdownItem>
						<DropdownItem leftIcon={<BellIcon />} goToMenu="settings">Option 6</DropdownItem>
						<DropdownItem leftIcon={<PlusIcon />} goToMenu="settings">Option 7</DropdownItem>
						<DropdownItem leftIcon={<BellIcon />} goToMenu="settings">Option 8</DropdownItem>
						<DropdownItem leftIcon={<PlusIcon />} goToMenu="settings">Option 9</DropdownItem>
						<DropdownItem leftIcon={<BellIcon />} goToMenu="settings">Option 10</DropdownItem>
					</div>
				</CSSTransition>
		</div>
	)
}

export default App;
