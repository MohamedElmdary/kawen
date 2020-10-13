import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../components/layout";
import classes from "./Home.module.scss";
import graphQLClient from "../graphql";
import { circlesGql } from "../graphql/circles";

interface Field {
    id: any;
    name: string;
    description: string;
    cover: string;
}

type Props = { data: Field[] };

const Home: React.FC<Props> = ({ data }) => {
    return (
        <Layout title="Kawen">
            <section className={`${classes.Home} container`}>
                <h1 className="h4">
                    Explore our paths to find your perfect program
                </h1>
                {data.map((field: Field) => (
                    <section key={field.id}>
                        <img src={field.cover} alt={`${field.name} image`} />
                        <h2>{field.name}</h2>
                        <p>{field.description}</p>
                        <Link
                            href="/[fieldName]"
                            as={`/${field.name.split(" ").join("-")}`}
                        >
                            <button className="btn btn-round btn-outline">
                                Explore
                            </button>
                        </Link>
                    </section>
                ))}
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    let data: Field[] = [];
    try {
        let res = await graphQLClient.request(circlesGql);
        data = res.circles;
    } catch (err) {
        console.log(JSON.stringify(err))
    }

    return {
        props: { data },
    };
};

export default Home;
