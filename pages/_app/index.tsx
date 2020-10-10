import React from 'react';
import { Provider } from 'react-redux';
import 'emoji-mart/css/emoji-mart.css';
import useStore from '../../store';
import './_app.scss';
import { User } from '../../store/auth';
import users from '../../data/users';
import { ContactModel } from '../../store/chat';
import contacts from '../../data/contacts';
import ChatBar from '../../components/chatBar';
import 'emoji-mart/css/emoji-mart.css';
import cookies from 'js-cookie';

interface Props {
    Component: React.FC<any>;
    pageProps: { [key: string]: any };
    currentUser: User | null;
    contacts: ContactModel[] | null;
}

const App: React.FC<Props> = (props) => {
    const { Component, pageProps, currentUser, contacts } = props;
    const store = useStore({
        auth: { currentUser },
        chat: {
            contacts,
            activeChats: [{ id: 0, active: false }],
            miniChat: true,
        },
    });

    return (
        <Provider store={store}>
            <Component {...pageProps} />
            <ChatBar />
        </Provider>
    );
};

(App as any).getInitialProps = async (ctx: any) => {
    // fetch real user from backend here

    const cookies = (ctx.ctx?.req?.headers?.cookie ?? '')
        .split('; ')
        .reduce((result: { [key: string]: string }, cookie: string) => {
            const [name, value] = cookie.split('=');
            result[name] = value;
            return result;
        }, {});

    console.log(cookies);

    return { currentUser: cookies['token'] ? users[0] : null, contacts };
};

export default App;
