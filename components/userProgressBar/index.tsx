import React from 'react';
import classes from './userProgressBar.module.scss';

interface Props {
    progress: number;
}

const UserProgressBar: React.FC<Props> = ({ progress }) => {
    return (
        <div className={classes.paths__progress}>
            <div className={classes.paths__progress__header}>
                <p>Progression</p>
                <p>{progress * 100}%</p>
            </div>
            <div className={classes.paths__progress__progressbar}>
                <div
                    className={classes.paths__progress__progressbar__bar}
                    style={{ transform: `scaleX(${progress})` }}
                />
                <span
                    className={classes.paths__progress__progressbar__indicator}
                    style={{ left: `calc(${progress * 100}% - 5px)` }}
                />
            </div>
        </div>
    );
};

export default UserProgressBar;
