import React, { FormEvent, useState, useRef, useEffect } from 'react';
import { Picker } from 'emoji-mart';
import classes from './chatInput.module.scss';
declare var MediaRecorder: any;

interface Props {
    scrollToEnd(): void;
}

const ChatInput: React.FC<Props> = ({ scrollToEnd }) => {
    const [message, setMessage] = useState('');
    const imgRef = useRef<HTMLInputElement>(null);
    const [emoji, setEmoji] = useState(false);

    const onSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ message });
        setMessage('');
        scrollToEnd();
    };

    /* recorded */
    // const [b, setB] = useState<any>(undefined);
    const onRecordAudio = async () => {
        const chunks: any[] = [];
        let stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e: any) => {
            chunks.push(e.data);
            if (recorder.state === 'inactive') {
                console.log('uncomment the following when backend ready');
                // const blob = new Blob(chunks, { type: 'audio/webm' });
                // setB(blob);
                // scrollToEnd();
            }
        };

        recorder.start();

        setTimeout(() => {
            console.log('done');
            recorder.stop();
        }, 5000);
    };

    useEffect(() => {
        if (emoji) {
            const _onClick = () => setEmoji(false);
            window.addEventListener('click', _onClick);
            return () => {
                window.removeEventListener('click', _onClick);
            };
        }
    }, [emoji]);

    return (
        <form onSubmit={onSendMessage}>
            <div className={classes.chat__action}>
                <button type="button" onClick={onRecordAudio}>
                    <img src="/images/icons/mic-icon.svg" alt="mic icon" />
                </button>
                <input type="file" hidden ref={imgRef} />
                <button type="button" onClick={() => imgRef.current?.click()}>
                    <img src="/images/icons/image-icon.svg" alt="image icon" />
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
                    <div className={classes.chat__emoji}>
                        {emoji && (
                            <div onClick={(e) => e.stopPropagation()}>
                                <Picker
                                    set="facebook"
                                    onSelect={(e: any) => {
                                        setMessage(message + ` ${e.native} `);
                                    }}
                                />
                            </div>
                        )}
                        <button
                            type="button"
                            onClick={emoji ? undefined : () => setEmoji(true)}
                        >
                            <img
                                src="/images/icons/emoji-icon.svg"
                                alt="emoji icon"
                            />
                        </button>
                    </div>
                </div>
                <button type="submit" disabled={message.trim().length === 0}>
                    <img src="/images/icons/send-icon.svg" alt="send icon" />
                </button>
            </div>
        </form>
    );
};

export default ChatInput;
