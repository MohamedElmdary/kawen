import React from 'react';
import classes from './profilePaths.module.scss';
import { User } from '../../store/auth';

interface Props {
    paths: User['learnPaths'];
}

const ProfilePaths: React.FC<Props> = ({ paths }) => {
    const pathsCmp = paths.map((path) => {
        return (
            <div className={classes.paths__path} key={path.id}>
                <div className={classes.paths__details}>
                    <h4 className={classes.paths__title}>{path.title}</h4>
                    <p className={classes.paths__description}>
                        {path.description}
                    </p>
                    <div className={classes.paths__progress}>
                        <div className={classes.paths__progress__header}>
                            <p>Progression</p>
                            <p>{path.progress * 100}%</p>
                        </div>
                        <div className={classes.paths__progress__progressbar}>
                            {/* prettier-ignore */}
                            <div 
                                className={classes.paths__progress__progressbar__bar}
                                style={{ transform: `scaleX(${path.progress})`}}
                                />
                            {/* prettier-ignore */}
                            <span 
                                className={classes.paths__progress__progressbar__indicator}
                                style={{ left: `calc(${path.progress * 100}% - 5px)`}}
                                />
                        </div>
                    </div>
                    <button className="btn">Continue</button>
                </div>
                <div className={classes.paths__image}>
                    <div style={{ backgroundImage: `url(${path.image})` }} />
                </div>
            </div>
        );
    });

    return (
        <section className={classes.paths}>
            <h2 className="h5">learning path</h2>
            <div>{pathsCmp}</div>
        </section>
    );
};

export default ProfilePaths;
