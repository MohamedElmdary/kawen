import React from 'react';
import { MessageModel } from '../../../store/chat';
import classes from './chatMessage.module.scss';

interface Props {
    message: MessageModel;
    me: boolean;
}

const ChatMessage: React.FC<Props> = ({ message, me }) => {
    // prettier-ignore
    const { sender: { image, name }, message: msg } = message;

    return (
        <div className={[classes.msg, me ? classes.me : ''].join(' ')}>
            {!me && (
                <div className={classes.msg__img}>
                    <img src={image} alt={name + ' profile image'} />
                </div>
            )}
            <div className={classes.msg__details}>
                {!me && <p>{name}</p>}
                <div>
                    <p>{msg}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
