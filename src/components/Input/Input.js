import React from "react";
import classes from './Input.css';
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Input = (props) => {
    return (
        <div className={classes.form_group}>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => props.inputHandler(e.target.value)}
            />
        </div>
    );
};

export default Input;

Input.propTypes = {
    inputHandler: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
};
