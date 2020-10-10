import React, { useState, useRef, useEffect, useCallback } from 'react';
import classes from './chatView.module.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import ChatMessage from './chatMessage';
import { ContactModel } from '../../store/chat';
import ChatInput from './chatInput';

interface Props {
    chat: ContactModel;
}

const ChatView: React.FC<Props> = ({ chat }) => {
    const user = useSelector(({ auth }: AppState) => auth.currentUser);

    /* this line should do nothing in production */
    if (!user) return null;

    const { messages } = chat;
    const scrollRef = useRef<HTMLSpanElement>(null);
    const [scroll, setScroll] = useState(true);

    const messagesCmp = messages.map((msg) => {
        return (
            <ChatMessage
                key={msg.id}
                message={msg}
                me={msg.sender.id === user.id}
            />
        );
    });

    const scrollToEnd = useCallback(() => {
        if (scroll) {
            scrollRef.current?.scrollIntoView();
        }
    }, [scroll, scrollRef.current]);

    type ScrollEvent = React.UIEvent<HTMLDivElement, UIEvent>;
    const onScroll = useCallback(
        (e: ScrollEvent) => {
            const s = e.target as HTMLDivElement;
            const { scrollHeight, offsetHeight, scrollTop } = s;
            const shouldScroll = scrollHeight <= offsetHeight + scrollTop + 100;
            if (scroll !== shouldScroll) {
                setScroll(shouldScroll);
            }
        },
        [setScroll]
    );

    useEffect(() => {
        scrollToEnd();
    }, []);

    return (
        <section className={classes.chat}>
            <div className={classes.chat__container} {...{ onScroll }}>
                {messagesCmp}
                <span
                    ref={scrollRef}
                    className={classes.chat__container__scroll}
                />
            </div>
            <ChatInput {...{ scrollToEnd }} />
        </section>
    );
};

export default ChatView;
