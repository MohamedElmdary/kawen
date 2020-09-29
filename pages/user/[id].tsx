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
import UserProgression from '../../components/userProgression';
import UserProductivity from '../../components/userProductivity';
import UserCertifications from '../../components/userCertifications';

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
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                        }}
                    >
                        <div
                            style={{
                                width: 'calc((100% / 3) * 2)',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div style={{ width: 'calc(100% / 2 - 20px)' }}>
                                <UserProgression
                                    level={user.level}
                                    experience={user.experience}
                                    medals={user.medals}
                                />
                            </div>
                            <div style={{ width: 'calc(100% / 2 - 20px)' }}>
                                <UserProductivity
                                    productivities={user.productivities}
                                />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% / 3 - 20px)' }}>
                            <UserCertifications
                                certifications={user.certifications}
                            />
                        </div>
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
