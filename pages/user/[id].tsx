import React from 'react';
import Layout from '../../components/layout';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import classes from './user.module.scss';
import { GetServerSideProps } from 'next';
import { User } from '../../store/auth';

import users from '../../data/users';
import ProfileHeader from '../../components/profileHeader';

interface Props {
    user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {
    const currentUser = useSelector(({ auth }: AppState) => auth.currentUser);
    // const me = currentUser?.id === user.id;

    return (
        <Layout title="kawen | User Profile">
            <section className={classes.user}>
                <ProfileHeader {...{ user }} />
                <div className={classes.user__container}>
                    <div className={classes.user__navbar}>navbar</div>
                </div>
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // get user's profile page from server
    return {
        props: {
            user: users[+(ctx.params as any).id] ?? users[1],
        },
    };
};

export default UserProfile;
