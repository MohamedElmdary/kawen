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
import { useRouter } from 'next/router';
import Message from '../message';
import { ChatActions } from '../../store/chat';

interface Props {
    logoOnly: boolean;
}

const Navbar: React.FC<Props> = ({ logoOnly }) => {
    const router = useRouter();
    const [focus, setFocus] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const user = useSelector((state: AppState) => state.auth.currentUser);
    const dispatch: Dispatch<AuthActions | ChatActions> = useDispatch();
    const contacts = useSelector((state: AppState) => state.chat.contacts);

    const messagesCmp = contacts?.map((c) => {
        return (
            <DropDownItem
                key={c.id}
                onClick={() => {
                    dispatch({
                        type: '[Chat] ADD_MINI_CHAT',
                        payload: c.id,
                    });
                }}
            >
                <Message contact={c} />
            </DropDownItem>
        );
    });

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
                                    dropdownClass={[
                                        classes.auth__notification,
                                        classes.auth__messages,
                                    ].join(' ')}
                                    actionElement={
                                        <img
                                            src="/images/icons/message-icon.svg"
                                            alt="message icon"
                                        />
                                    }
                                >
                                    {/* prettier-ignore */}
                                    <div className={classes.auth__notification__header}>
                                        <h5>Messages</h5>
                                    </div>
                                    {messagesCmp}
                                </Dropdown>
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
                                    <DropDownItem
                                        onClick={() => {
                                            router.push('/user/' + user.id);
                                        }}
                                    >
                                        Profile
                                    </DropDownItem>
                                    <DropDownItem
                                        onClick={() => {
                                            router.push('/notes');
                                        }}
                                    >
                                        Notes
                                    </DropDownItem>
                                    <DropDownItem
                                        onClick={() => {
                                            router.push('/todo-list');
                                        }}
                                    >
                                        Tasks
                                    </DropDownItem>
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
