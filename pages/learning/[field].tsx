import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import FieldSidebar, { IFieldSidebar } from "../../components/fieldSidebar";
import classes from "./learningPath.module.scss";
import FieldPath from "../../components/learningField/fieldPath";
import { Icourse } from "../../components/learningField/fieldPath/dropdown";
import Project from "../../components/learningField/project";

interface Props {
    field: string;
    image: string;
    learning_path: {
        [key: string]: {
            nick_name: string;
            progress: number;
            courses: Icourse[];
            project: {
                name: string;
                description: string;
                status: "Done" | "not started";
            };
        };
    };
}

const data: Props = {
    field: "Front end development",
    image: "/images/learning_path__aside.png",
    learning_path: {
        Entry: {
            nick_name: "Front end basics",
            progress: 100,
            courses: [
                {
                    name: "Introduction to HTML",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 100,
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
                    progress: 100,
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
            progress: 50,
            courses: [
                {
                    name: "Introduction to Js",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 80,
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
                    progress: 20,
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
            progress: 0,
            courses: [
                {
                    name: "Introduction to react.js",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 0,
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
                    progress: 0,
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

const FieldLearningPath: React.FC<{ data: Props; page?: string }> = ({
    data: { field, image, learning_path },
    page,
}) => {
    const [closeOverlay, setCloseOverlay] = useState<boolean>(true);
    const [showSidebar, setShowSidebar] = useState<boolean>(true);
    const [activeLevel, setActiveLevel] = useState({
        ...learning_path.Entry,
        level: "Entry",
    });

    let sideBar: IFieldSidebar = {
        field,
        image,
        learning_path: {},
    };

    Object.keys(learning_path).map((level) => {
        sideBar.learning_path[level] = {
            nick_name: learning_path[level].nick_name,
            progress: learning_path[level].progress,
        };
    });

    const changeLevel = (level: string): void => {
        setActiveLevel({
            ...learning_path[level],
            level,
        });
    };

    return (
        <Layout title={`${field} learning path`} footer={false}>
            <section
                style={{ display: "flex" }}
                onClick={() => setCloseOverlay(true)}
            >
                <FieldSidebar
                    data={sideBar}
                    changeLevel={changeLevel}
                    currentLevel={activeLevel.level}
                    showSidebar={showSidebar}
                />
                <section className={classes.level}>
                    <header>
                        <button
                            className={`${classes.collapse_menu} ${
                                showSidebar && classes.active
                            }`}
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <h2 className="h5-regular">{`${activeLevel.level} level (${activeLevel.nick_name})`}</h2>
                        <span>
                            {`${
                                activeLevel.progress === 100
                                    ? "COMPLETED 100%"
                                    : activeLevel.progress
                                    ? `${activeLevel.progress}%`
                                    : " "
                            }`}
                        </span>
                    </header>
                    {page === "project" ? (
                        <Project
                            projectName={activeLevel.project.name}
                            projectDescription={activeLevel.project.description}
                        />
                    ) : (
                        <FieldPath
                            activeLevel={activeLevel}
                            field={field}
                            closeOverlay={closeOverlay}
                            openOverlay={() => setCloseOverlay(false)}
                        />
                    )}
                </section>
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    return {
        props: { data, page: ctx.query.page || "" },
    };
};

export default FieldLearningPath;
