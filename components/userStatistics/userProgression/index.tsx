import React from 'react';
import classes from './userProgression.module.scss';
import { User } from '../../../store/auth';
import SvgCircle from '../../svgCircle';

interface Props {
    level: User['level'];
    experience: User['experience'];
    medals: User['medals'];
}

const UserProgression: React.FC<Props> = (props) => {
    /* prettier-ignore */
    const { level, medals, experience: { gained, total } } = props;

    const medalsCmp = medals.map(({ title, image: src }) => {
        return (
            <div className={classes.progression__medal} key={title}>
                <img {...{ src, title }} alt={title + ' medal'} />
            </div>
        );
    });

    return (
        <section className={classes.progression}>
            <h3 className="h5">Progression</h3>
            <div className={classes.progression__container}>
                <div className={classes.progression__exp}>
                    <SvgCircle progress={gained / total} />
                    <div className={classes.progression__exp__image}>
                        <img
                            src="/images/icons/progress-icon.svg"
                            alt="progess icon"
                        />
                        <p>
                            Level <span>{level}</span>
                        </p>
                    </div>
                </div>
                <div>
                    <p className={classes.progression__levelexp}>
                        {gained} / {total} XP
                    </p>
                </div>
                <div className={classes.progression__medals}>
                    {/* \n */}
                    {medalsCmp}
                </div>
            </div>
        </section>
    );
};

export default UserProgression;
