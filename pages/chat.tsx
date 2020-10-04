import React from 'react';
import ChatView from '../components/chatView';
import contacts from '../data/contacts';

const Chat: React.FC = () => {
    return (
        <div style={{ height: '100vh' }}>
            <ChatView chat={contacts[0]} />
        </div>
    );
};

export default Chat;
