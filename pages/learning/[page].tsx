import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import FieldSidebar, { IFieldSidebar } from "../../components/fieldSidebar";
import classes from "./learningPath.module.scss";
import FieldPath from "../../components/learningField/fieldPath";
import Project from "../../components/learningField/project";
import Quizzes from "../../components/learningField/quizzes";
import * as props from "./props";
import * as data from "./data";
import FinalTest from "../../components/learningField/final-test/final-test";

type Props = props.DefaultProps & any;
// (props.ProjectProps | props.LearningProps | props.quizzesProps);

const FieldLearningPath: React.FC<{ data: Props; page?: string }> = ({
    data: { field, image, learning_path, ...data },
    page,
}) => {
    const router = useRouter();
    const [closeOverlay, setCloseOverlay] = useState<boolean>(true);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
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
        if (page) router.push(`/learning/field`);
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
                            projectName={data.projectName}
                            projectDescription={data.projectDescription}
                        />
                    ) : page === "quizzes" ? (
                        <Quizzes
                            progress={data.progress}
                            quizzes={data.quizzes}
                        />
                    ) : page === "field" ? (
                        <FieldPath
                            activeLevel={activeLevel}
                            field={field}
                            closeOverlay={closeOverlay}
                            openOverlay={() => setCloseOverlay(false)}
                        />
                    ) : page === "final-test" ? (
                        <FinalTest />
                    ) : null}
                </section>
            </section>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { page: "project" },
            },
            {
                params: { page: "quizzes" },
            },
            {
                params: { page: "field" },
            },
            {
                params: { page: "final-test" },
            },
        ],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<any, any> = async ({
    params,
    query,
}: {
    params?: { page: string };
    query?: { quiz_id: string };
}) => {
    const { page } = params || { page: "" };
    const { quiz_id } = query || { quiz_id: "-1" };

    if (page === "project") {
        return {
            props: {
                data: { ...data.defaultData, ...data.projectData },
                page,
            },
        };
    } else if (page === "quizzes") {
        if (quiz_id == "-1")
            return {
                props: {
                    data: { ...data.defaultData, ...data.quizzesData },
                    page,
                },
            };
        else
            return {
                props: {
                    data: { ...data.defaultData, ...data.quizData },
                    page,
                },
            };
    } else if (page === "field") {
        return {
            props: {
                data: { ...data.defaultData, ...data.learningData },
                page,
            },
        };
    } else if (page === "final-test") {
        return {
            props: {
                data: { ...data.defaultData, ...data.finalTestData },
                page,
            },
        };
    } else {
        return {
            props: {},
        };
    }
};

export default FieldLearningPath;
