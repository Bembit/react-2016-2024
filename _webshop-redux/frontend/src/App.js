import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route, Switch, useLocation } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAdressScreen from './screens/ShippingAdressScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

// add recommendations based on card contents categories
// add wishlist - watchlist below cart, and make it moveable between cart and wishlist
// add categories for items
// add confirmation popup for deleting items
// add 404
// remove loader from important pages
// set a quantity limit for high avail items
// check if cart content IDs are valid or not, if not, remove items (disable them) -- refresh the api with dumping the product dbs and getting new IDs is a problem

function App() {

    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout);
    }

    // access  the cartDetails state to show in header
    const cartDetails = useSelector(state => state.cartDetails);
    const { cartItems } = cartDetails;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    // const total = cartItems.map((item) => {
    //     console.log(item.quantity)
    //     return item.quantity;
    // })

    const totalInCart = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

    // const totalSaved = savedItems.reduce((acc, curr) => acc + curr.quantity, 0);

    return (

        <BrowserRouter>
		<div className="grid-container">

            <header className="row">   
                <div>
                    <Link className="brand-logo" to="/">Webshop</Link>
                </div>
                <div>

                    {/* <Link to="/cart">Cart { cartItems.length > 0 && (<span className="badge">{cartItems.length}</span>) } </Link> */}             
                    <Link to="/cart">Cart { cartItems.length > 0 && (<span className="badge">{totalInCart}</span>) } </Link>             

                    {/* <Link to="/saveditems">Saved for later { savedItems.length > 0 && (<span className="badge">{totalSaved}</span>) } </Link>              */}
                    
                    {
                        userInfo
                    ? 
                    (
                        <div className="dropdown">
                            <Link to="#">
                                {userInfo.name} <i className="fas fa-caret-down"></i>
                            </Link>
                            <ul className="dropdown-content">
                                <Link to="/cart">Cart</Link>
                                <Link to="/saveditems">Saved Items</Link>
                                <Link to="#signout" onClick={signoutHandler}>Sign out</Link>
                            </ul>
                        </div>
                    )
                    : 
                    (
                        <Link to="/signin">
                            Sign In
                        </Link>
                    )
                    }

                </div>
            </header>

            <main>
            {/* Switch to handle 404 and remove duplicate rendering of not found route and loading */}
            <Switch>
                <Route path ="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route path="/signin" component={SigninScreen}></Route>
                <Route path="/signup" component={RegisterScreen}></Route>
                <Route path="/shipping" component={ShippingAdressScreen}></Route>
                <Route path="/payment" component={PaymentScreen}></Route>
                <Route path="/placeorder" component={PlaceOrderScreen}></Route>
                <Route path="*" exact><FourOhFour /></Route>
            </Switch>

            </main>

            <footer className="row center">
                footer temp
            </footer>

        </div>
        </BrowserRouter>
	);
}

function FourOhFour() {
    let location = useLocation();

    return (
        <div>404 No match for <code>{location.pathname}</code></div>
    )

}

export default App;
