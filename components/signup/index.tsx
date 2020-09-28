import React from 'react';
import classes from './signup.module.scss';
import InputControl from '../inputControl';
import useForm from '../../hooks/useForm';

const SignUp: React.FC = () => {
    const signUpForm = useForm([
        {
            name: 'username',
            label: 'Full Name',
            type: 'text',
            validates: [
                {
                    validate(value) {
                        return value.trim().length > 0;
                    },
                    error: 'Full Name is Required',
                },
                {
                    validate(value) {
                        return value.trim().length >= 3;
                    },
                    error: 'Full Name min length is 3 chars.',
                },
                {
                    validate(value) {
                        return value.trim().length <= 50;
                    },
                    error: 'Full Name max length is 50 chars.',
                },
            ],
        },
        {
            name: 'username1',
            label: 'Full Name',
            type: 'text',
            validates: [
                {
                    validate(value) {
                        return value.trim().length > 0;
                    },
                    error: 'Full Name is Required',
                },
                {
                    validate(value) {
                        return value.trim().length >= 3;
                    },
                    error: 'Full Name min length is 3 chars.',
                },
                {
                    validate(value) {
                        return value.trim().length <= 50;
                    },
                    error: 'Full Name max length is 50 chars.',
                },
            ],
        },
        {
            name: 'username2',
            label: 'Full Name',
            type: 'text',
            validates: [
                {
                    validate(value) {
                        return value.trim().length === 0;
                    },
                    error: 'Full Name is Required',
                },
                {
                    validate(value) {
                        return value.trim().length < 3;
                    },
                    error: 'Full Name min length is 3 chars.',
                },
                {
                    validate(value) {
                        return value.trim().length > 50;
                    },
                    error: 'Full Name max length is 50 chars.',
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
                <form>
                    {/* \n */}
                    {signupFormCmp}
                </form>
            </div>
        </section>
    );
};

export default SignUp;
