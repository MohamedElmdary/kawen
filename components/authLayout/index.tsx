import React from 'react';
import Link from 'next/link';
import classes from './authLayout.module.scss';
import AuthFooter from '../authFooter';

interface Props {
    auth: 'login' | 'signup';
}

const AuthLayout: React.FC<Props> = ({ children, auth }) => {
    return (
        <section className={classes.auth}>
            <div className={classes.auth__routes}>
                <div className={auth === 'signup' ? classes.active : undefined}>
                    <Link href="/auth/[auth]" as="/auth/signup">
                        <button>Sign Up</button>
                    </Link>
                </div>
                <div>
                    <Link href="/auth/[auth]" as="/auth/login">
                        <button>Sign In</button>
                    </Link>
                </div>
            </div>
            <div className={classes.auth__container}>
                {children}
                <AuthFooter />
            </div>
        </section>
    );
};

export default AuthLayout;
