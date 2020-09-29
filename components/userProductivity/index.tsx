import React from 'react';
import classes from './userProductivity.module.scss';
import UserCalendar from '../userCalendar';
import { User } from '../../store/auth';

interface Props {
    productivities: User['productivities'];
}

const UserProductivity: React.FC<Props> = ({ productivities }) => {
    return (
        <section className={classes.productivity}>
            <h3 className="h5">Productivity</h3>
            <UserCalendar {...{ productivities }} />
        </section>
    );
};

export default UserProductivity;
