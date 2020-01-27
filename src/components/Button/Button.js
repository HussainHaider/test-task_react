import React from "react";
import PropTypes from 'prop-types';
import classes from './Button.css';

const Button = (props) => {
    return (
        <button
            className={classes.btn}
            onClick={props.clickHandler}
            type={props.type}
        >
            {props.text}
        </button>
    );
};

export default Button;

Button.propTypes = {
    clickHandler: PropTypes.func,
    type: PropTypes.string,
    text: PropTypes.string
};
