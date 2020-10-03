import Link from "next/link";
import React from "react";
import Progression from "../progression";
import classes from "./quizzes.module.scss";
import { quizzesProps } from "../../../pages/learning/props";

const Quizzes: React.FC<quizzesProps> = ({ progress, quizzes }) => {
    return (
        <section className={classes.quizzes}>
            <header>
                <h2 className="h5">
                    Introduction to HTML course <span>quizzes</span>
                </h2>
                <Progression progress={progress} />
            </header>
            <ul>
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
            <footer>
                <Link href={`/learning/final-test`}>
                    <button className="btn">Take the final test</button>
                </Link>
                <Link href={`/learning/field`}>
                    <button className="btn btn-outline">
                        Back to the learning path
                    </button>
                </Link>
            </footer>
        </section>
    );
};

export default Quizzes;
