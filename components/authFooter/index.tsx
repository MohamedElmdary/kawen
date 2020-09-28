import React from 'react';
import classes from './authFooter.module.scss';

const AuthFooter: React.FC = () => {
    return (
        <section className={classes.footer}>
            <div className={classes.footer__divider} />
            <div className={classes.footer__social}>
                <div>
                    <button>
                        <img
                            src="/images/icons/google-colored-logo.svg"
                            alt="google logo"
                        />
                        <span>Sign up with Google</span>
                    </button>
                </div>
                <div>
                    <button>
                        <img
                            src="/images/icons/facebook-colored-logo.svg"
                            alt="facebook logo"
                        />
                        <span>Sign up with Facebook</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AuthFooter;
