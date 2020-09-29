import React, { useState } from 'react';
import Layout from '../../components/layout';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import classes from './user.module.scss';
import { GetServerSideProps } from 'next';
import { User } from '../../store/auth';

import users from '../../data/users';
import ProfileHeader from '../../components/profileHeader';
import ProfileNavbar from '../../components/profileNavbar';
import { useRouter } from 'next/router';
import { NAVITEMS } from '../../constants/data';
import ProfilePaths from '../../components/profilePaths';
import SvgCircle from '../../components/svgCircle';

interface Props {
    user: User;
    activePage: number;
}

const UserProfile: React.FC<Props> = ({ user, activePage }) => {
    const router = useRouter();
    const [active, setActive] = useState(activePage);
    const currentUser = useSelector(({ auth }: AppState) => auth.currentUser);
    // const me = currentUser?.id === user.id;

    return (
        <Layout title="kawen | User Profile">
            <section className={classes.user}>
                <ProfileHeader {...{ user }} />
                <div className={classes.user__container}>
                    <ProfileNavbar {...{ active, setActive }} />
                    <ProfilePaths paths={user.learnPaths} />
                    <div style={{ width: '100px' }}>
                        <SvgCircle progress={0.8} />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // get user's profile page from server
    const page = ctx.query.page as string;
    const activePage = NAVITEMS.findIndex((item) => item === page);

    return {
        props: {
            user: users[+(ctx.params as any).id] ?? users[1],
            activePage: activePage > -1 ? activePage : 0,
        },
    };
};

export default UserProfile;
