import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
    // login email password redux
    const [email, setEmail] = useState('');
    
    const [name, setName] = useState('');
    
    const [password, setPassword] = useState('');
    
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const dispatch = useDispatch();

    // login submit handler
    const submitHandler = (event) => {
        event.preventDefault();
        if ( password !== confirmPassword ) {
            alert('passwords dont match yo')
        } else {
        dispatch(register(name, email, password));
        }
    };

    // redirection after register
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo])

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign Up</h1>
                </div>

                { loading && <LoadingBox></LoadingBox>}
                { error && <MessageBox variant="danger">{error}</MessageBox>}

                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="enter name" required onChange={ event => setName(event.target.value)}></input>

                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" placeholder="enter email" required onChange={ event => setEmail(event.target.value)}></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="enter password" required onChange={ event => setPassword(event.target.value)}></input>

                    <label htmlFor="confirmPassword">Password</label>
                    <input type="password" id="confirmPassword" placeholder="confirmPassword" required onChange={ event => setConfirmPassword(event.target.value)}></input>

                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign Up</button>
                </div>

                <div>
                    <label />
                    <div>
                        Already signed up? &nbsp;
                        <Link to={`/signin?redirect=${redirect}`}>Log in here</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}
