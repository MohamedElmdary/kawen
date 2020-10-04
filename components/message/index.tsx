import React from 'react';
import classes from './message.module.scss';
import { ContactModel } from '../../store/chat';

interface Props {
    contact: ContactModel;
}

const Message: React.FC<Props> = ({ contact }) => {
    /**
     *  @Note
     *   well, in contacts we assume always two users
     *   this implementation is not correct but should be find for now
     */
    const { users, messages } = contact;
    let lastMsg = 'No Messages Yet.';
    let user = users[0];
    if (messages.length) {
        const last = messages[messages.length - 1];
        lastMsg = last.sender.name.split(' ')[0] + ': ' + last.message;
    }

    return (
        <section className={classes.msg}>
            <div className={classes.msg__img}>
                <img src={user.image} alt={user.name + ' profile image'} />
            </div>
            <div className={classes.msg__details}>
                <p>{user.name}</p>
                <span>{lastMsg}</span>
            </div>
            <div className={classes.msg__time}>
                <span>3 min</span>
            </div>
        </section>
    );
};

export default Message;
