import React from "react";
import { finalTestProps as Props } from "../../../data/learning-fieldProps";
import TestsLayout from "../testsLayout";
import classes from "./finalTest.module.scss";

const FinalTest: React.FC<Props> = ({ questions }) => {
    return (
        <TestsLayout page="final">
            <div className={classes.questions}>
                {questions.map((question, index) => (
                    <section key={index}>
                        <p>{question.qs}</p>
                        <hr />
                        <ul>
                            {question.ans.map((answer, i) => (
                                <li key={i}>
                                    <input
                                        type="radio"
                                        name={`${index}`}
                                        id={`${index}-${i}`}
                                        hidden
                                    />
                                    <label htmlFor={`${index}-${i}`}>
                                        <span></span>
                                        {answer.text}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </TestsLayout>
    );
};

export default FinalTest;
