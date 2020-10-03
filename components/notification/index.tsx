import React from 'react';
import { NotificationModel } from '../../data/notifications';
import classes from './notification.module.scss';

interface Props {
    notification: NotificationModel;
}

const Notification: React.FC<Props> = ({ notification }) => {
    const {
        // id,
        group: { title },
        user: { name, image },
        message,
        date,
    } = notification;

    // prettier-ignore
    const from = Math.floor((new Date().getTime() - new Date(date).getTime()) / 60000);

    return (
        <div className={classes.ntf}>
            <div className={classes.ntf__img}>
                <img src={image} alt={name + ' profile image'} />
            </div>
            <div className={classes.ntf__details}>
                <p>
                    <strong>{name}</strong>{' '}
                    <span className={classes.ntf__details__normal}>from</span>{' '}
                    <span className={classes.ntf__details__group}>{title}</span>{' '}
                    <span className={classes.ntf__details__normal}>
                        {message}
                    </span>
                    .
                </p>
                <span>{from} min ago</span>
            </div>
        </div>
    );
};

export default Notification;
