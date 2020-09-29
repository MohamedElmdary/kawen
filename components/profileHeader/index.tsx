import React from 'react';
import classes from './profileHeader.module.scss';
import { User } from '../../store/auth';

interface Props {
    user: User;
}

const ProfileHeader: React.FC<Props> = ({ user }) => {
    return (
        <div className={classes.user__header}>
            <div
                className={classes.user__cover}
                style={{ backgroundImage: `url(${user.cover})` }}
            >
                <div
                    className={classes.user__image}
                    style={{
                        backgroundImage: `url(${user.image})`,
                    }}
                >
                    <span className={classes.user__level}>{user.level}</span>
                </div>
            </div>
            <h1 className={['h4', classes.user__head].join(' ')}>
                {user.name}
            </h1>
        </div>
    );
};

export default ProfileHeader;
