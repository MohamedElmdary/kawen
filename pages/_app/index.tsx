import React from 'react';
import './_app.scss';

interface Props {
    Component: React.FC<any>;
    pageProps: { [key: string]: any };
}

const App: React.FC<Props> = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...{ pageProps }} />
        </>
    );
};

export default App;
