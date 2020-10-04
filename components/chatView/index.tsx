import React, {
    useState,
    FormEvent,
    useRef,
    useEffect,
    useCallback,
} from 'react';
import classes from './chatView.module.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import ChatMessage from './chatMessage';
import { User } from '../../store/auth';

const ChatView: React.FC = () => {
    const user = useSelector(({ auth }: AppState) => auth.currentUser) as User;
    const chat = useSelector(({ chat }: AppState) => (chat.contacts ?? [])[0]);
    const { messages } = chat;
    const [message, setMessage] = useState('');
    const imgRef = useRef<HTMLInputElement>(null);
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

    const onSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ message });
        setMessage('');
        scrollToEnd();
    };

    return (
        <section className={classes.chat}>
            <div className={classes.chat__container} {...{ onScroll }}>
                {messagesCmp}
                <span
                    ref={scrollRef}
                    className={classes.chat__container__scroll}
                />
            </div>
            <form onSubmit={onSendMessage}>
                <div className={classes.chat__action}>
                    <button type="button">
                        <img src="/images/icons/mic-icon.svg" alt="mic icon" />
                    </button>
                    <input type="file" hidden ref={imgRef} />
                    <button
                        type="button"
                        onClick={() => imgRef.current?.click()}
                    >
                        <img
                            src="/images/icons/image-icon.svg"
                            alt="image icon"
                        />
                    </button>
                    <div>
                        <input
                            type="text"
                            name="message"
                            value={message}
                            placeholder="Type a message"
                            onChange={(e) => setMessage(e.target.value)}
                            autoComplete="off"
                            spellCheck={true}
                        />
                        <button type="button">
                            <img
                                src="/images/icons/emoji-icon.svg"
                                alt="emoji icon"
                            />
                        </button>
                    </div>
                    <button
                        type="submit"
                        disabled={message.trim().length === 0}
                    >
                        <img
                            src="/images/icons/send-icon.svg"
                            alt="send icon"
                        />
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ChatView;
