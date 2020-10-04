import React from 'react';
import classes from './chatView.module.scss';

const ChatView: React.FC = () => {
    return (
        <section className={classes.chat}>
            <div className={classes.chat__container}>
                messages
                <span className={classes.chat__container__scroll} />
            </div>
            <div className={classes.chat__action}>actions</div>
        </section>
    );
};

export default ChatView;
