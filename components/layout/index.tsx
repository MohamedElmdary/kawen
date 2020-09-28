import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar';
import Footer from '../footer';
import classes from './layout.module.scss';

interface Meta {
    name: string;
    content: string;
}

interface Props {
    logoOnly?: boolean;
    title?: string;
    metas?: Meta[];
    footer?: boolean;
}

const Layout: React.FC<Props> = (props) => {
    const { children, logoOnly = false, title = '', metas = [], footer = true } = props;

    const metaTags = metas.map((meta) => {
        return <meta key={meta.name} {...meta} />;
    });

    return (
        <section className={classes.app_container}>
            <Head>
                <title>{title}</title>
                {metaTags}
            </Head>
            <Navbar {...{ logoOnly }} />
            <main>{children}</main>
            {!logoOnly && footer && <Footer />}
        </section>
    );
};

export default Layout;
