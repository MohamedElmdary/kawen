import React, { useRef, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import FieldSidebar, { IFieldSidebar } from "../../components/fieldSidebar";
import classes from "./learningPath.module.scss";
import Link from "next/link";

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

interface Icourse {
    name: string;
    description: string;
    image: string;
    progress: number;
    checkList: {
        name: string;
        done: boolean;
    }[];
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

const FieldLearningPath: React.FC<Props> = ({
    field,
    image,
    learning_path,
}) => {
    const [activeLevel, setActiveLevel] = useState({
        ...learning_path.Entry,
        level: "Entry",
    });
    const [checkList, setCheckList] = useState<
        { name: string; done: boolean }[] | null
    >();
    const checkListRef = useRef<HTMLUListElement>(null);
    const courseQuizzesRef = useRef<HTMLUListElement>(null);

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

    const getCheckList = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        course: Icourse
    ) => {
        e.stopPropagation();
        if (checkListRef.current) {
            if (
                +checkListRef.current.style.top.split("px")[0] ===
                e.currentTarget.offsetTop + 32
            ) {
                setCheckList(null);
                checkListRef.current.style.left = `0`;
                checkListRef.current.style.top = `0`;
                checkListRef.current.style.opacity = `0`;
            } else {
                checkListRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
                checkListRef.current.style.top = `${
                    e.currentTarget.offsetTop + 32
                }px`;
                checkListRef.current.style.opacity = `1`;
                setCheckList(course.checkList);
            }
        }
    };

    const getQuizzesList = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        if (courseQuizzesRef.current) {
            if (
                +courseQuizzesRef.current.style.top.split("px")[0] ===
                e.currentTarget.offsetTop + 32
            ) {
                courseQuizzesRef.current.style.left = `0`;
                courseQuizzesRef.current.style.top = `0`;
                courseQuizzesRef.current.style.opacity = `0`;
            } else {
                courseQuizzesRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
                courseQuizzesRef.current.style.top = `${
                    e.currentTarget.offsetTop + 32
                }px`;
                courseQuizzesRef.current.style.opacity = `1`;
            }
        }
    };

    const closeOverlays = () => {
        if (checkListRef.current) {
            checkListRef.current.style.left = `0`;
            checkListRef.current.style.top = `0`;
            checkListRef.current.style.opacity = `0`;
            setCheckList(null);
        }
        if (courseQuizzesRef.current) {
            courseQuizzesRef.current.style.left = `0`;
            courseQuizzesRef.current.style.top = `0`;
            courseQuizzesRef.current.style.opacity = `0`;
        }
    };

    return (
        <Layout title={`${field} learning path`} footer={false}>
            <section className={classes.learning_path} onClick={closeOverlays}>
                <FieldSidebar
                    data={sideBar}
                    changeLevel={changeLevel}
                    currentLevel={activeLevel.level}
                />
                <section className={classes.level}>
                    <header>
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
                    <section className={classes.level_content}>
                        {activeLevel.courses.map((course, i) => (
                            <section key={i}>
                                <img
                                    src="/images/learning_path__logo.svg"
                                    alt="Lerning path logo"
                                />
                                <h3 className="h5">{course.name}</h3>
                                <p>{course.description}</p>
                                <div className={classes.course_controls}>
                                    <Link href="https://www.google.com">
                                        <button className="btn">
                                            Course source
                                        </button>
                                    </Link>
                                    <button
                                        className="btn btn-outline"
                                        onClick={(e) => getCheckList(e, course)}
                                    >
                                        Course checklist
                                    </button>
                                    <button
                                        className={classes.more}
                                        onClick={getQuizzesList}
                                    >
                                        <img
                                            src="/images/three-dots.svg"
                                            alt="More"
                                        />
                                    </button>
                                </div>
                                <div className={classes.progression}>
                                    <p>
                                        Progrseeion{" "}
                                        <span>{course.progress}%</span>
                                    </p>
                                    <div>
                                        <style jsx>{`
                                            div::before {
                                                left: ${course.progress}%;
                                            }
                                            div::after {
                                                width: ${course.progress}%;
                                            }
                                        `}</style>
                                    </div>
                                </div>
                            </section>
                        ))}
                        <section>
                            <img
                                src="/images/learning_path__logo.svg"
                                alt="Lerning path logo"
                            />
                            <h3 className="h5">{activeLevel.project.name}</h3>
                            <p>{activeLevel.project.description}</p>
                            {activeLevel.project.status === "not started" ? (
                                <div className={classes.course_controls}>
                                    <Link href={`/project/${field}`}>
                                        <button className="btn">
                                            Start project
                                        </button>
                                    </Link>
                                </div>
                            ) : null}
                        </section>
                    </section>
                </section>
                {/* Course check list */}
                <ul className={classes.drop_down} ref={checkListRef}>
                    {checkList?.map((item) => (
                        <li key={item.name}>
                            <input
                                type="checkbox"
                                name={activeLevel.level}
                                id={item.name}
                                defaultChecked={item.done}
                                hidden
                            />
                            <label htmlFor={item.name}>
                                <span></span>
                                {item.name}
                            </label>
                        </li>
                    ))}
                </ul>
                {/* Course quizzes */}
                <ul className={classes.drop_down} ref={courseQuizzesRef}>
                    <li>
                        <Link href={`/quizzes/${field}`}>
                            <a>Quizzes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/final/${field}`}>
                            <a>Final test</a>
                        </Link>
                    </li>
                </ul>
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: { ...data },
    };
};

export default FieldLearningPath;
