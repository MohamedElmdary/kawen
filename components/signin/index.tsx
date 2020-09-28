import React, { FormEvent } from 'react';
import classes from './signin.module.scss';
import useForm, { requiredValidate, getFormValue } from '../../hooks/useForm';
import { EMAIL_REGEX } from '../../constants/regex';
import InputControl from '../inputControl';

const SignIn: React.FC = () => {
    const SignInForm = useForm([
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
    ]);

    const SignInFormCmp = SignInForm.map((inp) => {
        return (
            <div key={inp.name} className={classes.login__forminput}>
                <InputControl {...inp} />
            </div>
        );
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { valid, values, input } = getFormValue(SignInForm);
        if (valid) {
            // submit form
            console.log(values);
            return;
        }
        input?.focus();
    };

    return (
        <section className={classes.login}>
            <div className={classes.login__header}>
                <h5 className="h5-regular">Sign in to your account</h5>
                <p>
                    Start your new career with us, Choose your path and start
                    learning.
                </p>
            </div>
            <div className={classes.login__container}>
                <form {...{ onSubmit }}>
                    {/* \n */}
                    {SignInFormCmp}
                    <div className={classes.login__submit}>
                        <button className="btn" type="submit">
                            Sign IN
                        </button>
                        <div>
                            <a href="#!">
                                <span>Forget Password?</span>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignIn;
