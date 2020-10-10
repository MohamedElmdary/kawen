import React, { FormEvent, useEffect } from 'react';
import classes from './signin.module.scss';
import useForm, {
    requiredValidate,
    getFormValue,
    updateInput,
} from '../../hooks/useForm';
import { EMAIL_REGEX } from '../../constants/regex';
import InputControl from '../inputControl';
import { useRouter } from 'next/router';
import graphQLClient from '../../graphql';
import { loginGql } from '../../graphql/auth';
import cookies from 'js-cookie';

const SignIn: React.FC = () => {
    const router = useRouter();

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

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { valid, values, input } = getFormValue(SignInForm);
        console.log({ valid, values, input });
        if (!valid) return input?.focus();

        try {
            const { tokenAuth } = await graphQLClient.request(loginGql, {
                email: values.email,
                password: values.password,
            });
            const { refreshExpiresIn, token } = tokenAuth;
            cookies.set('token', token);
            cookies.set('refreshExpiresIn', refreshExpiresIn);
            router.push('/');
        } catch (err) {
            if (err.response.errors?.length) {
                updateInput(SignInForm, 'password')(
                    undefined,
                    'Email & Password not matched.'
                ).current?.focus();
            }
        }
    };

    useEffect(() => {
        const email = router.query.email as string;
        const href = router.asPath;
        if (href.includes('?email=') && !email) return;

        const emailInput = updateInput(SignInForm, 'email');
        if (email) {
            const passwordInput = updateInput(SignInForm, 'password');
            passwordInput().current?.focus();
            emailInput(email, '');
        } else {
            emailInput().current?.focus();
        }
    }, [router.query]);

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
