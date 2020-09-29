import React from 'react';
import classes from './contactItem.module.scss';
import Link from 'next/link';

interface Props {
    id: number | string;
    image: string;
    title: string;
    subTitle?: string;
}

const ContactItem: React.FC<Props> = (props) => {
    const { id, image, title, subTitle } = props;

    const href = (subTitle ? `/challenge/` : `/user/`) + '[id]';
    const as = (subTitle ? `/challenge/` : `/user/`) + id;

    return (
        <Link {...{ href, as }}>
            <section className={classes.contact} {...{ title }}>
                <div
                    className={classes.contact__image}
                    role="img"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className={classes.contact__details}>
                    <h5 className="h5-regular">{title}</h5>
                    {subTitle && <p>{subTitle}</p>}
                </div>
            </section>
        </Link>
    );
};

export default ContactItem;
