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
            <button className="btn">Getting Started</button>
            <br />
            <button className="btn btn-round">Getting Started</button>
            <br />

            <button className="btn btn-round btn-outline">
                Getting Started
            </button>
        </>
    );
};

export default App;
