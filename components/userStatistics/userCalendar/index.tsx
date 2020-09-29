import React, { useRef, useState, useEffect } from 'react';
import classes from './userCalendar.module.scss';
import { User } from '../../../store/auth';
import { DAYS } from '../../../constants/data';
import useDate from '../../../hooks/useDate';
import toArray from '../../../shared/utils/toArray';
import {
    isToday,
    getTodayProductivity,
} from '../../../shared/utils/getDateDetails';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface Props {
    productivities: User['productivities'];
}

const UserCalendar: React.FC<Props> = ({ productivities }) => {
    const isLaptop = useMediaQuery(
        '(max-width: 1024px) and (min-width: 667px)'
    );
    const pRef = useRef<HTMLParagraphElement>(null);
    const [height, setHeight] = useState<string | undefined>(undefined);
    const { offset, setOffset, ...date } = useDate(0);

    const { startDayIndex } = date.current;
    const previousLength = (startDayIndex === 6 ? 0 : startDayIndex) as number;
    const currentLength = date.current.monthLong;
    const nextLength = 42 - previousLength - currentLength;

    const daysCmp = DAYS.map((d) => (
        <div key={d}>
            <p>{d}</p>
        </div>
    ));

    const prods = productivities.map((p) => {
        return {
            ...p,
            date: new Date(p.date),
        };
    });

    const previousCmp = toArray(previousLength).map((key) => {
        const thisDay = {
            ...date.previous,
            day: date.previous.monthLong - previousLength + key + 1,
        };

        return (
            <div {...{ key }}>
                <p
                    ref={key === 0 ? pRef : undefined}
                    className={[
                        classes.calendar__day__prev,
                        isToday(thisDay, date.today) ? classes.today : '',
                    ].join(' ')}
                    style={{ height }}
                >
                    {thisDay.day}
                </p>
            </div>
        );
    });

    const currentCmp = toArray(currentLength).map((key) => {
        const thisDay = {
            ...date.current,
            day: key + 1,
        };

        const activity = prods.find((p) => {
            return getTodayProductivity(p.date, thisDay);
        });

        const today = isToday(thisDay, date.today);

        return (
            <div {...{ key }} style={{ position: 'relative' }}>
                <p
                    style={{ height }}
                    className={[
                        classes.calendar__day__current,
                        !today && activity ? classes.active : '',
                        today ? classes.today : '',
                    ].join(' ')}
                >
                    {thisDay.day}
                </p>
                {!today && activity ? (
                    <div className={classes.activity__list}>
                        <p>
                            <span>{activity.quizzes}</span> Quizzes
                        </p>
                        <p>
                            <span>{activity.finalTest}</span> Final Test
                        </p>
                    </div>
                ) : null}
            </div>
        );
    });

    const nextCmp = toArray(nextLength).map((key) => {
        const thisDay = {
            ...date.next,
            day: key + 1,
        };

        return (
            <div {...{ key }}>
                <p
                    style={{ height }}
                    className={[
                        classes.calendar__day__next,
                        isToday(thisDay, date.today) ? classes.today : '',
                    ].join(' ')}
                >
                    {thisDay.day}
                </p>
            </div>
        );
    });

    useEffect(() => {
        const _onResize = () => setHeight(pRef.current?.offsetWidth + 'px');
        _onResize();
        window?.addEventListener('resize', _onResize);
        return () => {
            window?.removeEventListener('resize', _onResize);
        };
    }, [pRef.current?.offsetWidth, isLaptop]);

    return (
        <section className={classes.calendar}>
            <div className={classes.calendar__header}>
                <button onClick={() => setOffset(offset - 1)}>
                    <img src="/images/icons/arrow-left.svg" alt="left arrow" />
                </button>
                <p>
                    {date.current.monthName} {date.current.year}
                </p>
                <button onClick={() => setOffset(offset + 1)}>
                    <img
                        src="/images/icons/arrow-right.svg"
                        alt="right arrow"
                    />
                </button>
            </div>
            <div className={classes.calendar__days}>
                {/* \n */}
                {daysCmp}
            </div>
            <div className={classes.calendar__calenderdays}>
                {previousCmp}
                {currentCmp}
                {nextCmp}
            </div>
        </section>
    );
};

export default UserCalendar;
