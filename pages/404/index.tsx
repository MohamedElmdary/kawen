import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import classes from "./404.module.scss";

const Error = () => {
    return (
        <Layout title="Error 404">
            <section className={`${classes.content} container`}>
                <img src="/images/404error.svg" alt="404 Error icon"/>
                <div>
                    <h1>404</h1>
                    <p>Oops!, It seems that we can’t find this page</p>
                    <Link href="/" as="/">
                        <button className="btn">Kawen home</button>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Error;
