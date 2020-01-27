import React from "react";
import classes from './Button.css';

const Button = (props) => {
    return (
        <button className={classes.btn} onClick={props.clickHandler} type={props.type}>{props.text}</button>
    );
};

export default Button;

