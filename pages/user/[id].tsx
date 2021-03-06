import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import classes from './user.module.scss';
import { GetServerSideProps } from 'next';
import { User } from '../../store/auth';

import users from '../../data/users';
import ProfileHeader from '../../components/profileHeader';
import ProfileNavbar from '../../components/profileNavbar';
import { NAVITEMS } from '../../constants/data';
import UserStatistics from '../../components/userStatistics';
import UserContacts from '../../components/userContacts';
import { useRouter } from 'next/router';

interface Props {
    user: User;
    activePage: number;
}

const UserProfile: React.FC<Props> = ({ user, activePage }) => {
    const router = useRouter();
    const [active, setActive] = useState(activePage);
    const [edit, setEdit] = useState(false);
    const currentUser = useSelector(({ auth }: AppState) => auth.currentUser);
    const me = currentUser?.id === user.id;

    useEffect(() => {
        const page = router.query.page;
        const activePage = NAVITEMS.findIndex((item) => item === page);
        const newActive = activePage > -1 ? activePage : 0;
        if (active !== newActive) {
            setActive(newActive);
        }
    }, [router.query.page, router.query.id]);

    useEffect(() => {
        if (edit) {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, [edit]);

    return (
        <Layout title={'kawen | User ' + NAVITEMS[active]} {...{ edit }}>
            {edit && <div className={classes.navbar__overlay} />}
            <section className={classes.user}>
                <ProfileHeader {...{ user, edit }} />
                <div className={classes.user__container}>
                    <ProfileNavbar
                        {...{ active, setActive, me, setEdit, edit }}
                    />
                    <div className={edit ? classes.edit : undefined}>
                        {active === 0 ? (
                            <UserStatistics {...{ user }} />
                        ) : active === 1 ? (
                            <UserContacts contacts={user.contacts} />
                        ) : (
                            <UserContacts contacts={user.challenges} />
                        )}
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
