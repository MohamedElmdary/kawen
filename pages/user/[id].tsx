import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

const UserProfile: React.FC = () => {
    const router = useRouter();
    const user = useSelector((state: AppState) => state.auth);

    console.log(user);

    return (
        <Layout title="kawen | User Profile">
            <div>
                <p>user Id -{router.query.id}</p>
                <p>{JSON.stringify(user)}</p>
            </div>
        </Layout>
    );
};

export default UserProfile;
