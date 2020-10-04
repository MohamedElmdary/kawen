import React from 'react';
import { MessageModel } from '../../../store/chat';

interface Props {
    message: MessageModel;
    me: boolean;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
    return (
        <>
            <div>
                <span>{message.message}</span>
            </div>
            <br />
            <br />
        </>
    );
};

export default ChatMessage;
