import Link from "next/link";
import React from "react";
import Progression from "../progression";
import classes from "./testsLayout.module.scss";

const TestsLayout: React.FC<{ progress?: number; page: string }> = ({
    progress,
    page,
    children,
}) => {
    return (
        <section className={classes.tests_layout}>
            <header>
                <h2 className="h5">
                    Introduction to HTML course <span>{page === "final" ? "Final test" : "quizzes"}</span>
                </h2>
                {progress && <Progression progress={progress} />}
            </header>
            {children}
            <footer>
                {page === "quiz" ? (
                    <Link href="/learning/[page]" as="/learning/quizzes">
                        <button className="btn btn-outline">Next quiz</button>
                    </Link>
                ) : (
                    <React.Fragment>
                        {page === "quizzes" ? (
                            <Link  href="/learning/[page]" as={`/learning/final-test`}>
                                <button className="btn">
                                    Take the final test
                                </button>
                            </Link>
                        ) : (
                            <button className="btn">Submit</button>
                        )}
                        <Link href="/learning/[page]" as={`/learning/field`}>
                            <button className="btn btn-outline">
                                Back to the learning path
                            </button>
                        </Link>
                    </React.Fragment>
                )}
            </footer>
        </section>
    );
};

export default TestsLayout;
