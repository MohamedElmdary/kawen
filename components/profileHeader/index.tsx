import React, { useRef } from 'react';
import classes from './profileHeader.module.scss';
import { User } from '../../store/auth';
import useMediaQuery from '../../hooks/useMediaQuery';

interface Props {
    user: User;
    edit: boolean;
}

const ProfileHeader: React.FC<Props> = ({ user, edit }) => {
    const isMd = useMediaQuery('(max-width: 800px)');
    const pictureRef = useRef<HTMLInputElement>(null);
    const coverRef = useRef<HTMLInputElement>(null);

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
                    {edit && (
                        <>
                            <input type="file" hidden ref={pictureRef} />
                            <button
                                className={['btn', classes.edit__image].join(
                                    ' '
                                )}
                                onClick={() => pictureRef.current?.click()}
                            >
                                <img
                                    src="/images/icons/camera-icon.svg"
                                    alt="camera icon"
                                />
                            </button>
                        </>
                    )}
                </div>
                {edit && (
                    <>
                        <input type="file" hidden ref={coverRef} />
                        <button
                            className={[
                                'btn',
                                classes.edit__cover,
                                classes.edit__cover__md,
                            ].join(' ')}
                            onClick={() => coverRef.current?.click()}
                        >
                            <img
                                style={{ marginRight: '8px' }}
                                src="/images/icons/camera-icon.svg"
                                alt="camera icon"
                            />
                            {!isMd && <span>Edit Cover Photo</span>}
                        </button>
                    </>
                )}
            </div>
            <h1 className={['h4', classes.user__head].join(' ')}>
                {user.name}
            </h1>
        </div>
    );
};

export default ProfileHeader;
