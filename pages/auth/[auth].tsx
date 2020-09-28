import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface Props {
    auth: 'login' | 'signup';
}

const Auth: React.FC<Props> = (props) => {
    console.log(props);

    return (
        <div>
            <p>auth working - {props.auth}</p>
        </div>
    );
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

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    auth: 'login',
                },
            },
            {
                params: {
                    auth: 'signup',
                },
            },
        ],
        fallback: true,
    };
};

export default Auth;
