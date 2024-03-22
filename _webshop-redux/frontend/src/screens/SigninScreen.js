import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
    // login email password redux
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // login submit handler
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(signin(email, password));
    };

    // redirection after login
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo])

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>

                { loading && <LoadingBox></LoadingBox>}
                { error && <MessageBox variant="danger">{error}</MessageBox>}

                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" placeholder="enter email" required onChange={ event => setEmail(event.target.value)}></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="enter password" required onChange={ event => setPassword(event.target.value)}></input>

                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign in</button>
                </div>

                <div>
                    <label />
                    <div>
                        Don't have an account yet? &nbsp;
                        <Link to={`/signup?redirect=${redirect}`}>Create an account</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}
