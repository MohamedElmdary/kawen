import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import classes from './chatBar.module.scss';
import ChatBox from './chatBox';

const ChatBar: React.FC = () => {
    const user = useSelector(({ auth }: AppState) => auth.currentUser);
    const chats = useSelector(({ chat }: AppState) => chat.activeChats);
    const [n, setN] = useState(3);

    useEffect(() => {
        const _onResize = () => {
            const w = window.innerWidth - 40;
            if (w < 0) return;
            console.log({ w });
            const newN = Math.floor(w / 370);
            if (newN !== n) {
                setN(newN);
            }
        };

        _onResize();
        window.addEventListener('resize', _onResize);
        return () => {
            window.removeEventListener('resize', _onResize);
        };
    }, [n, setN]);

    if (!user) return null;

    const chatsCmp = chats.slice(0, n).map((chat) => {
        return <ChatBox {...{ user }} chatInfo={chat} key={chat.id} />;
    });

    return (
        <section className={classes.bar}>
            {/* \n */}
            {chatsCmp}
        </section>
    );
};

export default ChatBar;
