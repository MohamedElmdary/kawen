import React, { forwardRef, Ref } from 'react';
import classes from './inputControl.module.scss';

interface Props {
    label: string;
    type: 'text' | 'email' | 'number' | 'password';
    value: string | number;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    [key: string]: any;
    error: string;
}

function _InputControl(
    { children, label, ...inputProps }: Props,
    ref: Ref<HTMLInputElement>
) {
    const { type = 'text', ref: _, error, ...props } = inputProps;
    console.log(props);

    return (
        <div className={classes.control}>
            <input
                autoComplete="off"
                spellCheck
                ref={ref}
                className={classes.control__input}
                placeholder=" "
                {...{ type, ...props }}
            />
            <label className={classes.control__label}>{label}</label>
            <div
                className={[
                    error.length > 0 ? classes.active : '',
                    classes.control__error,
                ].join(' ')}
            >
                <p>{error}</p>
            </div>
        </div>
    );
}

const InputControl = forwardRef(_InputControl);

export default InputControl;
