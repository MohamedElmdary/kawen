import React, { FormEvent } from 'react';
import classes from './signup.module.scss';
import InputControl from '../inputControl';
import useForm, { requiredValidate, getFormValue } from '../../hooks/useForm';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp: React.FC = () => {
    const signUpForm = useForm([
        {
            name: 'username',
            label: 'Full Name',
            type: 'text',
            validates: [
                requiredValidate('Full Name'),
                {
                    validate(value) {
                        return value.length >= 3;
                    },
                    error: 'Full Name min length is 3 chars.',
                },
                {
                    validate(value) {
                        return value.length <= 50;
                    },
                    error: 'Full Name max length is 50 chars.',
                },
            ],
        },
        {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            validates: [
                requiredValidate('Email Address'),
                {
                    validate(value) {
                        return EMAIL_REGEX.test(value);
                    },
                    error: 'Invalid Email Adress.',
                },
            ],
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            validates: [
                requiredValidate('Password'),
                {
                    validate(value) {
                        return value.length > 5;
                    },
                    error: 'Password min length is 6.',
                },
            ],
        },
        {
            name: 'confirm_password',
            label: 'Confirm password',
            type: 'password',
            validates: [
                requiredValidate('Confirm Password'),
                {
                    validate(value, values) {
                        const password = values.find(
                            (input) => input.name === 'password'
                        );
                        return value === password?.value;
                    },
                    error: 'Passwords does not match.',
                },
            ],
        },
    ]);

    const signupFormCmp = signUpForm.map((inp) => {
        return (
            <div key={inp.name} className={classes.register__forminput}>
                <InputControl {...inp} />
            </div>
        );
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { valid, values, input } = getFormValue(signUpForm);
        if (valid) {
            // submit form
            console.log(values);
            return;
        }
        input?.focus();
    };

    return (
        <section className={classes.register}>
            <div className={classes.register__header}>
                <h5 className="h5-regular">Create your account</h5>
                <p>
                    Start your new career with us, Choose your path and start
                    learning.
                </p>
            </div>
            <div className={classes.register__container}>
                <form {...{ onSubmit }}>
                    {/* \n */}
                    {signupFormCmp}
                    <div className={classes.register__terms}>
                        <p>
                            By clicking Sign Up, you agree to our{' '}
                            <span>Terms of Use</span> and our{' '}
                            <span>Privacy Policy.</span>
                        </p>
                    </div>
                    <div className={classes.register__submit}>
                        <button className="btn" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
