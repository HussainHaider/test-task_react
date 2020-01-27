import React, {useState} from 'react';
import classes from './Login.css';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {Redirect} from 'react-router-dom';


import imageURL from '../../assets/images/signin-image.jpg';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Layout from "../../hoc/Layout/Layout";


function Login (props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Please fill the fields");

    function handleSubmitBtn (event) {
        event.preventDefault();
        if(email.trim()==='' || password.trim()==='') {
            setError(true);
        } else {
            props.onAuth(email,password);
        }
    }

    let authRedirect = null;
    if ( props.isAuthenticated ) {
        authRedirect = <Redirect to='/profile' />
    }

    return (
        <>
            <h2 className={classes.form_title}>Sign In</h2>
            {authRedirect}
            {
                props.isError ? <p className={classes.error}>The username and password you entered did not match our records.</p> : ''
            }
            {
                error ? <p className={classes.error}>{errorMsg}</p> : ''
            }
            <form method="POST" className={classes.register_form} id="login_form" onSubmit={handleSubmitBtn}>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Your Email"
                    inputHandler={setEmail}
                />

                <Input
                    type="password"
                    name="pass"
                    id="pass"
                    value={password}
                    placeholder="Password"
                    inputHandler={setPassword}
                />
                <Button text="Submit" type="submit"/>
            </form>
        </>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null,
        isError: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password ) => dispatch( actions.login( email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout(Login,imageURL,'/signUp','Create an account'));
