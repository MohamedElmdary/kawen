import React, {useState} from 'react'
import { GetServerSideProps } from "next";
import Layout from '../../components/layout'
import FieldSidebar, {IFieldSidebar} from '../../components/fieldSidebar';
import classes from "./learningPath.module.scss";
import {Icourse, calculateProgression} from "./util";

interface Props {
    field: string;
    image: string;
    learning_path: {
        [key: string]: {
            nick_name: string,
            courses: Icourse[],
            project: {
                name: string;
                description: string;
                status: "Done" | "Undone" | "not started"
            }
        }
    }
}

const data: Props = {
    field: "Front end development",
    image: "/images/learning_path__aside.png",
    learning_path: {
        Entry: {
            nick_name: "Front end basics",
            courses: [
                {
                    name: "Introduction to HTML",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: true,
                        },
                        {
                            name: "Main tags",
                            done: true,
                        },
                        {
                            name: "HTML attributes",
                            done: true,
                        },
                        {
                            name: "Open & closed tags",
                            done: true,
                        },
                        {
                            name: "topic1",
                            done: true,
                        },
                        {
                            name: "topic2",
                            done: true,
                        },
                    ],
                },
                {
                    name: "Introduction to HTML",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: true,
                        },
                        {
                            name: "Main tags",
                            done: true,
                        },
                        {
                            name: "HTML attributes",
                            done: true,
                        },
                        {
                            name: "Open & closed tags",
                            done: true,
                        },
                        {
                            name: "topic1",
                            done: true,
                        },
                        {
                            name: "topic2",
                            done: true,
                        },
                    ],
                },
            ],
            project: {
                name: "Entery level project",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                status: "Done",
            },
        },
        Intermediate: {
            nick_name: "Welcome to Js",
            courses: [
                {
                    name: "Introduction to Js",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: true,
                        },
                        {
                            name: "Main tags",
                            done: true,
                        },
                        {
                            name: "HTML attributes",
                            done: true,
                        },
                        {
                            name: "Open & closed tags",
                            done: true,
                        },
                        {
                            name: "topic1",
                            done: false,
                        },
                        {
                            name: "topic2",
                            done: false,
                        },
                    ],
                },
                {
                    name: "Introduction to Js",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: true,
                        },
                        {
                            name: "Main tags",
                            done: true,
                        },
                        {
                            name: "HTML attributes",
                            done: false,
                        },
                        {
                            name: "Open & closed tags",
                            done: false,
                        },
                        {
                            name: "topic1",
                            done: false,
                        },
                        {
                            name: "topic2",
                            done: false,
                        },
                    ],
                },
            ],
            project: {
                name: "Intermediate level project",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                status: "not started",
            },
        },
        Advanced: {
            nick_name: "Welcome to Js Frameworks",
            courses: [
                {
                    name: "Introduction to react.js",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: false,
                        },
                        {
                            name: "Main tags",
                            done: false,
                        },
                        {
                            name: "HTML attributes",
                            done: false,
                        },
                        {
                            name: "Open & closed tags",
                            done: false,
                        },
                        {
                            name: "topic1",
                            done: false,
                        },
                        {
                            name: "topic2",
                            done: false,
                        },
                    ],
                },
                {
                    name: "Introduction to React",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: false,
                        },
                        {
                            name: "Main tags",
                            done: false,
                        },
                        {
                            name: "HTML attributes",
                            done: false,
                        },
                        {
                            name: "Open & closed tags",
                            done: false,
                        },
                        {
                            name: "topic1",
                            done: false,
                        },
                        {
                            name: "topic2",
                            done: false,
                        },
                    ],
                },
            ],
            project: {
                name: "Advanced level project",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                status: "not started",
            },
        },
    },
};

const FieldLearningPath: React.FC<Props> = ({ field, image, learning_path }) => {
    const [activeLevel, setActiveLevel] = useState({...learning_path.Entry, level: "Entry", progress: 100 })
    
    let sideBar: IFieldSidebar = {
        field,
        image,
        learning_path: {}
    }

    Object.keys(learning_path).map(level => {
        sideBar.learning_path[level] = {
            nick_name: learning_path[level].nick_name,
            progress: 50
        };
    })

    return (
        <Layout title={`${field} learning path`} footer={false}>
            <section className={classes.learning_path}>
                <FieldSidebar data={sideBar} />
                <section className={classes.level}>
                    <header>
                        <h2>{`${activeLevel.level} level (${activeLevel.nick_name})`}</h2>
                        <span>
                            {`${
                                activeLevel.progress === 100
                                    ? "COMPLETED 100%"
                                    : activeLevel.progress
                                    ? activeLevel.progress
                                    : null
                            }`}
                        </span>
                    </header>
                    <section className={classes.level_content}>
                        {activeLevel.courses.map((course, i) => (
                            <section key={i}>
                                <img src="/images/learning_path__logo.svg" alt="Lerning path logo"/>
                                <h3>{course.name}</h3>
                                <p>{course.description}</p>
                                <div className={classes.course_controls}>
                                    <button className="btn">
                                        Course source
                                    </button>
                                    <button className="btn btn-outline">Course checklist</button>
                                    <button><img src="/images/three-dots.svg" alt="More"/></button>
                                </div>
                                <div className={classes.progression}>
                                    <p>Progrseeion <span>{calculateProgression(course)}%</span></p>
                                    <div></div>
                                </div>
                            </section>
                        ))}
                    </section>
                </section>
            </section>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: { ...data }
    }
}

export default FieldLearningPath
