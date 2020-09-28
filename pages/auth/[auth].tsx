import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import AuthLayout from '../../components/authLayout';
import Layout from '../../components/layout';
import SignIn from '../../components/signin';
import SignUp from '../../components/signup';

interface Props {
    auth: 'login' | 'signup';
}

const Auth: React.FC<Props> = ({ auth }) => {
    return (
        <Layout title={'Kawen | ' + auth} logoOnly>
            <AuthLayout {...{ auth }}>
                {auth === 'login' ? <SignIn /> : <SignUp />}
            </AuthLayout>
        </Layout>
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
