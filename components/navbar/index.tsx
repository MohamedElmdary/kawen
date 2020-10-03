import React, { useState, Dispatch } from 'react';
import classes from './navbar.module.scss';
import SearchInput from '../searchInput';
import Link from 'next/link';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import Dropdown, { DropDownItem, DropDownDivider } from '../dropDownMenu';
import Notification from '../notification';
import notifications from '../../data/notifications';
import { AuthActions } from '../../store/auth';

interface Props {
    logoOnly: boolean;
}

const Navbar: React.FC<Props> = ({ logoOnly }) => {
    const [focus, setFocus] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const user = useSelector((state: AppState) => state.auth.currentUser);
    const dispatch: Dispatch<AuthActions> = useDispatch();

    const notificationsCmp = notifications.map((n) => {
        return (
            <DropDownItem
                key={n.id}
                style={{
                    backgroundColor: n.seen ? undefined : 'var(--it-2)',
                }}
            >
                <Notification notification={n} />
            </DropDownItem>
        );
    });

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
                        {user ? (
                            <div className={classes.auth__actions}>
                                <Dropdown
                                    actionElement={
                                        <img
                                            src="/images/icons/message-icon.svg"
                                            alt="message icon"
                                        />
                                    }
                                ></Dropdown>
                                <Dropdown
                                    dropdownClass={classes.auth__notification}
                                    actionElement={
                                        <img
                                            src="/images/icons/alarm-icon.svg"
                                            alt="alarm icon"
                                        />
                                    }
                                >
                                    {/* prettier-ignore */}
                                    <div className={classes.auth__notification__header}>
                                        <h5>Notifications</h5>
                                    </div>
                                    {notificationsCmp}
                                </Dropdown>
                                <Dropdown
                                    actionElement={
                                        <img
                                            className={classes.auth__img}
                                            src={user.image}
                                            alt={`${user.name} profile image`}
                                        />
                                    }
                                >
                                    <DropDownItem>Profile</DropDownItem>
                                    <DropDownItem>Notes</DropDownItem>
                                    <DropDownItem>Tasks</DropDownItem>
                                    <DropDownDivider />
                                    <DropDownItem>Settings</DropDownItem>
                                    <DropDownDivider />
                                    <DropDownItem
                                        onClick={() => {
                                            dispatch({
                                                type: '[Auth] SET_CURRENT_USER',
                                                payload: null,
                                            });
                                        }}
                                    >
                                        Logout
                                    </DropDownItem>
                                </Dropdown>
                            </div>
                        ) : (
                            <>
                                {' '}
                                <Link href="/auth/[auth]" as="/auth/login">
                                    <button className="btn btn-round btn-outline">
                                        {isMobile ? (
                                            <img
                                                src="/images/icons/login.svg"
                                                width={16}
                                                alt="login icon"
                                            />
                                        ) : (
                                            'Login'
                                        )}
                                    </button>
                                </Link>
                                <Link href="/auth/[auth]" as="/auth/signup">
                                    <button className="btn btn-round">
                                        {isMobile ? (
                                            <img
                                                src="/images/icons/register.svg"
                                                width={16}
                                                alt="register icon"
                                            />
                                        ) : (
                                            'Get Started'
                                        )}
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
