import React from "react";
import classes from './Input.css';

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

