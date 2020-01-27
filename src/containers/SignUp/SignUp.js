import React,{useState } from 'react';
import classes from './SignUp.css';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import imageURL from "../../assets/images/signup-image.jpg";
import {Redirect} from 'react-router-dom';
import * as actions from "../../store/actions";
import {connect} from "react-redux";

import { checkSignUpValidity } from '../../shared/utility';
import Layout from "../../hoc/Layout/Layout";


function SignUp(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("This email already exist!!");

    function handleSubmitBtn (event) {
        event.preventDefault();

        let authError = checkSignUpValidity(name,email,password,confirmPassword);

        if(authError==null) {
            props.onSignUp(name,email,password)
        } else {
            setError(true);
            setErrorMsg(authError);
        }
    }

    let authRedirect = null;
    if ( props.isSigned ) {
        authRedirect = <Redirect to='/login' />
    }

    return (
        <>
            <h2 className={classes.form_title}>Sign up</h2>
            {authRedirect}
            {
                props.isError || error ? <p className={classes.error}>{errorMsg}</p> : ''
            }
            <form method="POST" className={classes.register_form} id="register_form" onSubmit={handleSubmitBtn}>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    id="name"
                    placeholder="Your Name"
                    inputHandler={setName}
                />

                <Input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    placeholder="Your Email"
                    inputHandler={setEmail}
                />

                <Input
                    type="password"
                    name="pass"
                    value={password}
                    id="pass"
                    placeholder="Password"
                    inputHandler={setPassword}
                />

                <Input
                    type="password"
                    name="re_pass"
                    value={confirmPassword}
                    id="re_pass"
                    placeholder="Repeat your password"
                    inputHandler={setConfirmPassword}
                />

                <Button text="Submit" type="submit"/>
            </form>

        </>
    );
}

const mapStateToProps = state => {
    return {
        isSigned: state.fromSignUp,
        isError: state.error
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onSignUp: ( name,email, password ) => dispatch( actions.signUp( name,email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout(SignUp,imageURL,'/login','I am already member'));
