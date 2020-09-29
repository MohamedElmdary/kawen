import React, { useState } from 'react';
import classes from './navbar.module.scss';
import SearchInput from '../searchInput';
import Link from 'next/link';
import useMediaQuery from '../../hooks/useMediaQuery';

interface Props {
    logoOnly: boolean;
}

const Navbar: React.FC<Props> = ({ logoOnly }) => {
    const [focus, setFocus] = useState(false);
    const isMobile = useMediaQuery('(max-width: 667px)');

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
                    <SearchInput {...{ focus, isMobile, setFocus }} />
                    <div
                        className={[
                            classes.navbar__actions,
                            focus && isMobile
                                ? classes.navbar__actions__focus
                                : '',
                        ].join(' ')}
                    >
                        <Link href="/auth/[auth]" as="/auth/login">
                            <button className="btn btn-round btn-outline">
                                Login
                            </button>
                        </Link>
                        <Link href="/auth/[auth]" as="/auth/signup">
                            <button className="btn btn-round">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
