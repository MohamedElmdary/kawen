import React from 'react';
import { Progression } from '../../../../data/groups';
import classes from './progressionItem.module.scss';
import SvgCircle from '../../../svgCircle';
import UserProgressBar from '../../../userProgressBar';

interface Props {
    progression: Progression;
}

const ProgressionItem: React.FC<Props> = ({ progression }) => {
    const { user, productivity, finalTest, quizzes } = progression;
    const { image, name, level: l, medals, experience } = user;
    const { gained, total } = experience;

    const lvl = l > 2 ? 'Intermediate' : l > 5 ? 'Advanced' : 'beginner';
    const medalsCmp = medals.map(({ image: src, title }) => {
        return <img {...{ src, title, key: title, alt: title + ' medal' }} />;
    });

    return (
        <div className={classes.item}>
            <div className={classes.item__details}>
                <div className={classes.item__user}>
                    <div className={classes.item__user__img}>
                        <img src={image} alt={name + ' profile image'} />
                        <span>{l}</span>
                    </div>
                    <div className={classes.item__user__info}>
                        <p>{name}</p>
                        <span>{lvl} Level</span>
                        <div className={classes.item__user__info__medals}>
                            {medalsCmp}
                        </div>
                    </div>
                </div>
                <div className={classes.item__prog}>
                    <div className={classes.item__prog__header}>
                        <p>Progression</p>
                        <p>{productivity * 100}%</p>
                    </div>
                    <UserProgressBar progress={productivity} />
                </div>
            </div>
            <div className={classes.item__exp}>
                <div className={classes.item__exp__circle}>
                    <SvgCircle progress={gained / total} />
                    <img
                        src="/images/icons/progress-icon.svg"
                        alt="progress icon"
                    />
                </div>
                <p>
                    {gained}/{total} XP
                </p>
            </div>
        </div>
    );
};

export default ProgressionItem;
