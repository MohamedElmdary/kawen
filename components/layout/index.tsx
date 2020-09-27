import React from 'react';
import classes from './layout.module.scss';

const Layout: React.FC = (props) => {
    const { children } = props;
    return <>{children}</>;
};

export default Layout;
