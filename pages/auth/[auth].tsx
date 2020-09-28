import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
    auth: 'login' | 'signup';
}

const Auth: React.FC<Props> = ({ auth }) => {
    return (
        <div>
            <p>auth working - {auth}</p>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { auth: 'login' },
            },
            {
                params: { auth: 'signup' },
            },
        ],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
    const {
        params: { auth },
    } = ctx;

    return {
        props: {
            auth,
        },
    };
};

export default Auth;
