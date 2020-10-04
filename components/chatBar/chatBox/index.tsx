import React, { useState, Dispatch } from 'react';
import classes from './chatBox.module.scss';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../store';
import ChatView from '../../chatView';
import { User } from '../../../store/auth';
import { ChatActions } from '../../../store/chat';

interface Props {
    chatId: string | number;
    user: User;
}

const ChatBox: React.FC<Props> = ({ chatId, user }) => {
    const dispatch: Dispatch<ChatActions> = useDispatch();
    const [min, setMin] = useState(true);
    const chat = useSelector(
        createSelector(
            ({ chat }: AppState) => chat.contacts ?? [],
            (contacts) => contacts.filter((c) => c.id === chatId)[0]
        )
    );
    const chatUser = chat.users.find(({ id }) => id !== user.id) as User;
    const { image, name } = chatUser;

    return (
        <section className={[classes.box, min ? classes.min : ''].join(' ')}>
            <div
                className={classes.box__header}
                onClick={min ? () => setMin(false) : undefined}
            >
                <div className={classes.box__header__container}>
                    <div className={classes.box__header__img}>
                        <img src={image} alt={name + ' profile image'} />
                    </div>
                    <p>{name}</p>
                </div>
                <div className={classes.box__header__actions}>
                    {!min && (
                        <button onClick={() => setMin(true)}>
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
