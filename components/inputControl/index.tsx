import React from 'react';
import classes from './inputControl.module.scss';

interface Props {
    label: string;
    type?: 'text' | 'email' | 'number' | 'password';
    value: string | number;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    [key: string]: any;
}

const InputControl: React.FC<Props> = ({ children, label, ...inputProps }) => {
    const { type = 'text', ...props } = inputProps;

    return (
        <div className={classes.control}>
            <input
                className={classes.control__input}
                placeholder=" "
                {...{ type, ...props }}
            />
            <label className={classes.control__label}>{label}</label>
        </div>
    );
};

export default InputControl;
