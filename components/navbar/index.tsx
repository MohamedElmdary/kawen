import React from 'react';
import classes from './navbar.module.scss';
import SearchInput from '../searchInput';

interface Props {
    logoOnly: boolean;
}

const Navbar: React.FC<Props> = ({ logoOnly }) => {
    return (
        <nav
            className={classes.navbar}
            style={{ justifyContent: logoOnly ? 'center' : undefined }}
        >
            <div className={classes.navbar__logo}>
                <img src="/images/logo.svg" alt="kawen logo" />
            </div>
            {!logoOnly && (
                <>
                    <SearchInput />
                    <div className={classes.navbar__actions}>
                        <button className="btn btn-round btn-outline">
                            Login
                        </button>
                        <button className="btn btn-round">Get Started</button>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
