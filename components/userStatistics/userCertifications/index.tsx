import React from 'react';
import classes from './userCertifications.module.scss';
import { User } from '../../../store/auth';

interface Props {
    certifications: User['certifications'];
}

const UserCertifications: React.FC<Props> = ({ certifications }) => {
    const certificationsCmp = certifications.map((c) => {
        const { image: src, title } = c;
        return (
            <div key={title} className={classes.cert__item}>
                <img {...{ src, title }} alt={title + ' logo'} />
                <p>{title}</p>
            </div>
        );
    });

    return (
        <section className={classes.cert}>
            <h3 className="h5">Certifications</h3>
            <div>
                {/* \n */}
                {certificationsCmp}
            </div>
        </section>
    );
};

export default UserCertifications;
