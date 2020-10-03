import Link from "next/link";
import React from "react";
import classes from "./quizzes.module.scss";
import { quizzesProps } from "../../../pages/learning/props";
import TestsLayout from "../testsLayout";

const Quizzes: React.FC<quizzesProps> = ({ progress, quizzes }) => {
    return (
        <TestsLayout progress={progress} page="quizzes">
            <ul className={classes.quizzes}>
                {quizzes.map((quiz) => (
                    <li key={quiz.name}>
                        <span>{quiz.name}</span>
                        {quiz.status ? (
                            quiz.progress === 100 ? (
                                <span className={classes.full_mark}>
                                    COMPLETED 100%
                                </span>
                            ) : (
                                <span className={classes.undone}>
                                    {quiz.progress}%
                                </span>
                            )
                        ) : (
                            <Link href="/learning/quizzes?quiz_id=1">
                                <button className="btn">Take the quiz</button>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </TestsLayout>
    );
};

export default Quizzes;
