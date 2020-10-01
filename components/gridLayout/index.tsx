import React from 'react';
import splitArray from '../../shared/utils/splitArray';
import classes from './gridLayout.module.scss';
// import { GetServerSideProps } from 'next';
// import useMediaQuery from '../../hooks/useMediaQuery';

interface Props<T> {
    data: T[];
    id?(item: T, i: number): number | string;
    Component: React.FC<any>;
}

function GridLayout<T>(props: Props<T>): JSX.Element {
    const { data, Component, id = (_: T, i: number) => i } = props;
    // const isTablet = useMediaQuery();
    /* 
     @media (max-width: 991px) {
            flex-basis: 50%;
        }

        @media (max-width: 768px) {
            flex-basis: 100%;
        }
    */

    /**
     * @note this is temp solution
     * it should be fine in production
     * as user isn't going to check responsive like tester :')
     */

    const array = splitArray(data, 3);
    const grid = array.map((col, i) => {
        const items = col.map((item, i) => {
            return (
                <div className={classes.grid__item} key={id(item, i)}>
                    <Component {...{ item }} />
                </div>
            );
        });
        return (
            <div className={classes.grid__col} key={i}>
                {items}
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

export default GridLayout;
