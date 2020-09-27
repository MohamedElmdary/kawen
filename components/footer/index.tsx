import React from 'react';
import classes from './footer.module.scss';

interface SocialLink {
    name: string;
    icon: string;
    url: string;
}

const socialLinks: SocialLink[] = [
    {
        name: 'facebook',
        icon: 'facebook-logo.svg',
        url: 'https://www.google.com',
    },
    {
        name: 'twitter',
        icon: 'twitter-logo.svg',
        url: 'https://www.google.com',
    },
    {
        name: 'instagram',
        icon: 'instagram-logo.svg',
        url: 'https://www.google.com',
    },
];

const Footer: React.FC = () => {
    const socialIcons = socialLinks.map(({ name, icon, url }) => {
        return (
            <a key={name} href={url} target="_blank">
                <img src={'/images/icons/' + icon} alt={name + ' logo'} />
            </a>
        );
    });

    return (
        <footer className={classes.footer}>
            <div className={classes.footer__logo}>
                <div>
                    <img src="/images/cat-logo.svg" alt="cat logo" />
                </div>
                <p>By CAT Reloaded, 2020 All Rights Reserved</p>
            </div>
            <div className={classes.footer__links}>{socialIcons}</div>
        </footer>
    );
};

export default Footer;
