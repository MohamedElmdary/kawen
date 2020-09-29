import React from 'react';
import classes from './userContacts.module.scss';
import { User } from '../../store/auth';
import ContactItem from '../contactItem';

interface Props {
    contacts: User['contacts'] | User['challenges'];
}

const UserContacts: React.FC<Props> = ({ contacts }) => {
    const contactsCmp = (contacts as User['contacts']).map((contact) => {
        return (
            <div key={contact.id}>
                <ContactItem {...contact} />
            </div>
        );
    });

    return (
        <section className={classes.contacts}>
            {/* \n */}
            {contactsCmp}
        </section>
    );
};

export default UserContacts;
