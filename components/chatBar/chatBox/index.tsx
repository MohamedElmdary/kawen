import React, { Dispatch } from 'react';
import classes from './chatBox.module.scss';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../store';
import ChatView from '../../chatView';
import { User } from '../../../store/auth';
import { ChatActions, ChatState } from '../../../store/chat';

interface Props {
    chatInfo: ChatState['activeChats'][0];
    user: User;
}

const ChatBox: React.FC<Props> = ({ chatInfo, user }) => {
    const { id, active } = chatInfo;
    const min = !active;
    const dispatch: Dispatch<ChatActions> = useDispatch();
    const chat = useSelector(
        createSelector(
            ({ chat }: AppState) => chat.contacts ?? [],
            (contacts) => contacts.filter((c) => c.id === id)[0]
        )
    );
    const chatUser = chat.users.find(({ id }) => id !== user.id) as User;
    const { image, name } = chatUser;

    const toggleActive = () => {
        dispatch({
            type: '[Chat] TOGGLE_MINI_CHAT_ACTIVE',
            payload: id,
        });
    };

    return (
        <section className={[classes.box, min ? classes.min : ''].join(' ')}>
            <div
                className={classes.box__header}
                onClick={min ? toggleActive : undefined}
            >
                <div className={classes.box__header__container}>
                    <div className={classes.box__header__img}>
                        <img src={image} alt={name + ' profile image'} />
                    </div>
                    <p>{name}</p>
                </div>
                <div className={classes.box__header__actions}>
                    {!min && (
                        <button onClick={toggleActive}>
                            <span />
                        </button>
                    )}
                    <button
                        onClick={() => {
                            dispatch({
                                type: '[Chat] REMOVE_MINI_CHAT',
                                payload: chat.id,
                            });
                        }}
                    >
                        <img
                            src="/images/icons/close-icon.svg"
                            alt="close icon"
                        />
                    </button>
                </div>
            </div>
            {!min && (
                <div className={classes.box__container}>
                    <ChatView {...{ chat }} />
                </div>
            )}
        </section>
    );
};

export default ChatBox;
