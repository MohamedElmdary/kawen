import React from 'react';
import ProfilePaths from './profilePaths';
import { User } from '../../store/auth';
import UserProgression from './userProgression';
import UserProductivity from './userProductivity';
import UserCertifications from './userCertifications';
import classes from './userStatistics.module.scss';

interface Props {
    user: User;
}

const UserStatistics: React.FC<Props> = ({ user }) => {
    return (
        <>
            <ProfilePaths paths={user.learnPaths} />
            <div className={classes.container}>
                <div className={classes.container__inner}>
                    <div className={classes.container__inner__item}>
                        <UserProgression
                            level={user.level}
                            experience={user.experience}
                            medals={user.medals}
                        />
                    </div>
                    <div className={classes.container__inner__item}>
                        <UserProductivity
                            productivities={user.productivities}
                        />
                    </div>
                </div>
                <div className={classes.container__item}>
                    <UserCertifications certifications={user.certifications} />
                </div>
            </div>
        </>
    );
};

export default UserStatistics;
