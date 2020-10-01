import React from 'react';
import classes from './gridLayout.module.scss';

interface Props<T> {
    data: T[];
    id(item: T, i: number): number | string;
    Component: React.FC<any>;
}

function GridLayout<T>(props: Props<T>): JSX.Element {
    const { data, Component, id } = props;

    return (
        <div className={classes.grid}>
            {data.map((item, i) => {
                return <Component key={id(item, i)} {...{ item }} />;
            })}
        </div>
    );
}

export default GridLayout;
