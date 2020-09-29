import { useState, useRef } from 'react';
import getDateDetails from '../shared/utils/getDateDetails';

function useDate(initOffset: number) {
    const [offset, setOffset] = useState(initOffset);
    const todayIfno = useRef(getDateDetails(new Date()));

    const today = todayIfno.current;

    /* previous Month */
    /* prettier-ignore */
    const previous = getDateDetails(new Date(today.year, today.month - 1 + offset, 0));

    /* previous Month */
    /* prettier-ignore */
    const current = getDateDetails(
        new Date(today.year, today.month + offset, 0),
        new Date(today.year, today.month - 1 + offset, 1)
    );

    /* next Month */
    /* prettier-ignore */
    const next = getDateDetails(new Date(today.year, today.month + 1 + offset, 0));

    return {
        offset,
        setOffset,
        today: todayIfno.current,
        previous,
        current,
        next,
    };
}

export default useDate;
