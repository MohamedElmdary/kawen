import React from 'react';
import classes from './groupHeader.module.scss';

interface Props {
    cover: string;
    title: string;
    subTitle: string;
    isMobile: boolean;
}

const GroupHeader: React.FC<Props> = ({ cover, title, subTitle, isMobile }) => {
    return (
        <>
            <header className={classes.group__header}>
                <div
                    className={classes.group__header__cover}
                    style={{ backgroundImage: `url(${cover})` }}
                />
            </header>
            <div className={classes.group__details}>
                <div>
                    <h1 className="h2">{title}</h1>
                    <p className={classes.group__details__sub}>{subTitle}</p>
                </div>
                <div className={classes.group__details__action}>
                    <button className="btn">
                        <img src="/images/icons/edit.svg" alt="edit icon" />
                        {!isMobile && <span>Edit group settings</span>}
                    </button>
                </div>
            </div>
        </>
    );
};

export default GroupHeader;
