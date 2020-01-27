import React,{Component} from 'react';
import classes from './Welcome.css';
import Button from "../Button/Button";
import {connect} from "react-redux";
import * as actions from "../../store/actions";

class Welcome extends Component{

    componentDidMount() {
        this.props.onTryAutoLogin();
    }

    handleSignUpBtn = () => {
        this.props.history.push('/signUp');
    };

    handleLogInBtn = () => {
        this.props.history.push('/login');
    };

    handleWelcomeBtn = () => {
        this.props.history.push('/profile');
    };

    render() {

        return (
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    <h1>Welcome To Test Task</h1>
                    <h2>I don't know what to write!!</h2>
                    <div className={classes.Button_div}>
                        {
                            this.props.isAuthenticated ? (
                                <>
                                    <Button clickHandler={this.handleSignUpBtn} text="SignUp"/>
                                    <Button clickHandler={this.handleLogInBtn} text="LogIn"/>
                                </>
                            ) : (<Button clickHandler={this.handleWelcomeBtn} text="Welcome"/>)
                        }
                    </div>
                </header>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.token == null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoLogin: () => dispatch( actions.authCheckState())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
