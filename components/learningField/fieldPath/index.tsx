import React, { useEffect, useRef, useState } from "react";
import classes from "./fieldPath.module.scss";
import Link from "next/link";
import Dropdown, { Icourse } from "./dropdown";
import Progression from "../progression";

interface Props {
    activeLevel: {
        level: string;
        nick_name: string;
        progress: number;
        courses: Icourse[];
        project: {
            name: string;
            description: string;
            status: "Done" | "not started";
        };
    };
    field: string;
    closeOverlay: boolean;
    openOverlay: () => void;
}

const FieldPath: React.FC<Props> = ({
    activeLevel,
    field,
    closeOverlay,
    openOverlay,
}) => {
    const [checkList, setCheckList] = useState<
        { name: string; done: boolean }[] | null
    >();
    const checkListRef = useRef<HTMLUListElement>(null);
    const courseQuizzesRef = useRef<HTMLUListElement>(null);

    const getCheckList = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        course: Icourse
    ) => {
        e.stopPropagation();
        openOverlay();
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
        openOverlay();
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

    useEffect(() => {
        if (closeOverlay) {
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
        }
    }, [closeOverlay]);

    return (
        <React.Fragment>
            <section className={classes.level_content}>
                {activeLevel.courses?.map((course, i) => (
                    <section key={i}>
                        <img
                            src="/images/learning_path__logo.svg"
                            alt="Lerning path logo"
                        />
                        <h3 className="h5">{course.name}</h3>
                        <p>{course.description}</p>
                        <div className={classes.course_controls}>
                            <Link href="https://www.google.com">
                                <button className="btn">Course source</button>
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
                                <img src="/images/three-dots.svg" alt="More" />
                            </button>
                        </div>
                        <Progression progress={course.progress} />
                    </section>
                ))}
                <section>
                    <img
                        src="/images/learning_path__logo.svg"
                        alt="Lerning path logo"
                    />
                    <h3 className="h5">{activeLevel.project?.name}</h3>
                    <p>{activeLevel.project?.description}</p>
                    {activeLevel.project?.status === "not started" ? (
                        <div className={classes.course_controls}>
                            <Link href={`/learning/project`}>
                                <button className="btn">Start project</button>
                            </Link>
                        </div>
                    ) : null}
                </section>
            </section>
            <Dropdown
                checkListRef={checkListRef}
                courseQuizzesRef={courseQuizzesRef}
                field={field}
                activeLevel={activeLevel}
                openOverlay={openOverlay}
                checkList={checkList}
            />
        </React.Fragment>
    );
};

export default FieldPath;
