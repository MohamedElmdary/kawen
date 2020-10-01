import React, { useRef, useEffect } from 'react';
import classes from './gridLayout.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';

interface Props<T> {
    data: T[];
    id(item: T, i: number): number | string;
    Component: React.FC<any>;
}

function GridLayout<T>(props: Props<T>): JSX.Element {
    const isTablet = useMediaQuery('(max-width: 991px) and (min-width: 767px)');
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { data, Component, id } = props;
    const length = data.length;
    const refs = Array.from({ length }, () => useRef<HTMLDivElement>(null));

    const n = isTablet ? 2 : 3;
    const translates: number[] = [];
    const grid = data.map((item, idx) => {
        let translateY = 0;
        if (!isMobile && idx > n - 1) {
            const ref = refs[idx - n].current;
            const current = refs[idx].current;
            if (ref && current) {
                const { offsetTop, offsetHeight } = ref;
                translateY =
                    current.offsetTop -
                    offsetTop -
                    offsetHeight +
                    translates[idx - n];
            }
        }
        translates.push(translateY);

        return (
            <div
                className={classes.grid__item}
                key={id(item, idx)}
                ref={refs[idx]}
                style={{ transform: `translateY(${-1 * translateY}px)` }}
            >
                <div>
                    <Component {...{ item }} />
                </div>
            </div>
        );
    });

    return (
        <div className={classes.grid}>
            {/* \n */}
            {grid}
        </div>
    );
}

// function GridLayout<T>(props: Props<T>): JSX.Element {
//     const { data, Component, id = (_: T, i: number) => i } = props;
//     const array = splitArray(data, 3);
//     const grid = array.map((col, i) => {
//         const items = col.map((item, i) => {
//             return (
//                 <div className={classes.grid__item} key={id(item, i)}>
//                     <Component {...{ item }} />
//                 </div>
//             );
//         });
//         return (
//             <div className={classes.grid__col} key={i}>
//                 {items}
//             </div>
//         );
//     });

//     return (
//         <div className={classes.grid}>
//             {/* \n */}
//             {grid}
//         </div>
//     );
// }

export default GridLayout;
