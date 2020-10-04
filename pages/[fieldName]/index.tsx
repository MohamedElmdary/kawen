import React from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/layout";
import classes from "./fieldOverview.module.scss";

interface Props {
    field: string;
    description: string;
    field_overview: string;
    learning_path: { [key: string]: string[] };
}

const data: Props = {
    field: "Front end development",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua",
    field_overview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli esse cillum dolore eu fugiat nulla pariatur. Excepteur sin occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    learning_path: {
        Entry: [
            "Introduction to HTML",
            "CSS - the completed course",
            "CSS3 - Including flexbox, transition, and animation",
        ],
        Intermediate: [
            "Javascript syntax",
            "Javascript dom",
            "Javascript events",
        ],
        Master: ["React.js", "Redux", "Redux saga"],
    },
};

const FieldOverview: React.FC<Props> = ({
    field,
    description,
    field_overview,
    learning_path,
}) => {
    return (
        <Layout title={`${field} overview`}>
            <header className={`${classes.field_header}`}>
                <h1 className="h2">{field}</h1>
                <p>{description}</p>
                <Link href="/learning/[page]" as="/learning/field">
                    <button className="btn">Enroll for learning path</button>
                </Link>
            </header>
            <section className={`${classes.field_content} container`}>
                <h2 className="h4">Field Overview</h2>
                <p className={`${classes.field_overview}`}>{field_overview}</p>
                <section className={`${classes.learning_path}`}>
                    <h3 className="h5 h5-regular">Learning path Overview</h3>
                    {Object.keys(learning_path).map((level) => (
                        <React.Fragment key={level}>
                            <h4 className="h5-regular">{level} Level</h4>
                            <ul>
                                {learning_path[level].map((path) => (
                                    <li key={path}>{path}</li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ))}
                </section>
                <section>
                    <section className={`${classes.enroll_features}`}>
                        <h3 className="h5 h5-regular">Enrollment features</h3>
                        <ul>
                            <li>Take quizzes</li>
                            <li>Take Tasks</li>
                            <li>Submit projects</li>
                            <li>Join your classmates chat</li>
                            <li>Follow your progress</li>
                            <li>Challenge your friends</li>
                        </ul>
                        <Link href="/learning/[page]" as="/learning/field">
                            <button className="btn">Enroll now</button>
                        </Link>
                    </section>
                </section>
            </section>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { fieldName: "front" },
            },
        ],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<any, any> = async () => {
    return {
        props: { ...data },
    };
};

export default FieldOverview;
