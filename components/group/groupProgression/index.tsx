import React from 'react';
import { Progression } from '../../../data/groups';
import ProgressionItem from './progressionItem';
import classes from './groupProgression.module.scss';

interface Props {
    progressions: Progression[];
}

const GroupProgression: React.FC<Props> = ({ progressions }) => {
    const progressionsCmp = progressions.map((progression) => {
        /* prettier-ignore */
        const {user: { id: key }} = progression
        return <ProgressionItem {...{ key, progression }} />;
    });

    return (
        <section className={classes.prog}>
            <h5 className={classes.prog__title}>
                {/* \n */}
                Progression board
            </h5>
            {progressionsCmp}
        </section>
    );
};

export default GroupProgression;
