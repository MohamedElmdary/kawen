import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'emoji-mart/css/emoji-mart.css';
import useStore from '../../store';
import './_app.scss';
import { CurrentUser } from '../../store/auth';
import { ContactModel } from '../../store/chat';
import contacts from '../../data/contacts';
import ChatBar from '../../components/chatBar';
import 'emoji-mart/css/emoji-mart.css';
import graphQLClient from '../../graphql';
import { getCurrentUserGql } from '../../graphql/profile';

interface Props {
    Component: React.FC<any>;
    pageProps: { [key: string]: any };
    currentUser: CurrentUser | null;
    contacts: ContactModel[] | null;
}

const App: React.FC<Props> = (props) => {
    const { Component, pageProps, currentUser, contacts } = props;
    console.log(currentUser);

    const store = useStore({
        auth: { currentUser },
        chat: {
            contacts,
            activeChats: [{ id: 0, active: false }],
            miniChat: true,
        },
    });

    useEffect(() => {
        graphQLClient.setHeader(
            'Authorization',
            `JWT ${currentUser?.token ?? ''}`
        );
    }, [currentUser]);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
            <ChatBar />
        </Provider>
    );
};

(App as any).getInitialProps = async (ctx: any) => {
    // fetch real user from backend here
    const cookiesHeader: string = ctx.ctx?.req?.headers?.cookie ?? '';
    const cookies = cookiesHeader
        .split('; ')
        .filter((cookie) => !!cookie)
        .reduce((result: { [key: string]: string }, cookie) => {
            const [name, value] = cookie.split('=');
            result[name] = value;
            return result;
        }, {});
    const token = cookies.token;

    if (!token) {
        graphQLClient.setHeader('Authorization', '');
        return {};
    }

    graphQLClient.setHeader('Authorization', `JWT ${token}`);
    const { profile: currentUser } = await graphQLClient.request(
        getCurrentUserGql
    );

    currentUser.token = token;
    return { currentUser, contacts };
};

export default App;
