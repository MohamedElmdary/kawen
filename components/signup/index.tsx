import React from 'react';
import classes from './signup.module.scss';
import InputControl from '../inputControl';

const SignUp: React.FC = () => {
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
                    <InputControl
                        label="Full Name"
                        type="text"
                        value=""
                        onChange={() => {}}
                    />
                    <InputControl
                        label="Full Name"
                        type="text"
                        value=""
                        onChange={() => {}}
                    />
                    <InputControl
                        label="Full Name"
                        type="text"
                        value=""
                        onChange={() => {}}
                    />
                </form>
            </div>
        </section>
    );
};

export default SignUp;
