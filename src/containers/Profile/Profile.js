import React,{Component} from 'react';
import classes from './Profile.css';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Profile extends Component{
    handleUpdateBtn = () => {
        this.props.onLogout();
    };

    handleHomeBtn = () => {
        this.props.history.push('/');
    };

    handleInputChange = (value) => {
        this.props.dataChange(value)
    };

    handleSubmitBtn =  (event) => {
        event.preventDefault();
        this.props.updateData(this.props.name)
    };

    render() {
        let authRedirect = null;
        if ( this.props.isAuthenticated ) {
            authRedirect = <Redirect to='/' />
        }

        return (
            <div className={classes.main}>
                {authRedirect}
                <nav className={classes.navigation}>
                    <Button text="Home" clickHandler={this.handleHomeBtn}/>
                    <Button text="Logout" clickHandler={this.handleUpdateBtn}/>
                </nav>
                <div className={classes.container}>
                   <h1 className={classes.form_title}>Profile</h1>
                    {
                        this.props.successMsg? 'Name Updated Successfully!!' : ''
                    }
                    <form method="POST" id="update_form" onSubmit={this.handleSubmitBtn}>
                        <Input
                            type="text"
                            name="pass"
                            id="pass"
                            placeholder="Name"
                            value={this.props.name}
                            inputHandler={this.handleInputChange}
                        />
                        <Button text="Update Profile" type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token == null,
        name: state.name,
        successMsg: state.successMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
        dataChange: (value) => dispatch(actions.dataChange(value)),
        updateData: (val) => dispatch(actions.updateData(val))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

