import React, { useState } from "react";
import classes from "./quiz.module.scss";
import { quizProps } from "../../../data/learning-fieldProps";
import TestsLayout from "../testsLayout";
import Progression from "../progression";
import PopupModal from "../../popupModal";
import { useRouter } from "next/router";

const Quiz: React.FC<quizProps> = ({
    name,
    progress,
    questions,
    quizzes_progress,
}) => {
    const totalQuestionsNum = questions.length;
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [openCorrect, setOpenCorrect] = useState(false);
    const [openFalse, setOpenFalse] = useState(false);
    const [answerIndex, setAnswerIndex] = useState(-1);
    const router = useRouter();

    const submitAnswer = () => {
        const correctAnswerIndex = questions[questionIndex].ans.findIndex(
            (answer) => answer.correct
        );
        if (answerIndex === -1) return;
        if (answerIndex === correctAnswerIndex) setOpenCorrect(true);
        else setOpenFalse(true);
    };

    const nextQuestion = () => {
        if (questionIndex + 1 === totalQuestionsNum) {
            router.push({
                path: "/learning/[page]",
                pathname: "/learning/quizzes",
            });
            return;
        }
        setQuestionIndex(questionIndex + 1);
        setOpenCorrect(false);
        setAnswerIndex(-1);
    };

    const retryQuestion = () => {
        setOpenFalse(false);
        setAnswerIndex(-1);
    };

    return (
        <TestsLayout page="quiz" progress={quizzes_progress}>
            <div className={classes.quiz}>
                <div className={classes.quiz_name}>
                    <h3 className="h5 h5-regular">{name}</h3>
                    <Progression progress={progress} />
                </div>
                <section>
                    <p>{questions[questionIndex].qs}</p>
                    <hr />
                    <ul>
                        {questions[questionIndex].ans.map((answer, i) => (
                            <li key={i}>
                                <input
                                    type="radio"
                                    name={`${questionIndex}`}
                                    id={`${questionIndex}-${i}`}
                                    hidden
                                    onChange={() => setAnswerIndex(i)}
                                    checked={answerIndex === i ? true : false}
                                />
                                <label htmlFor={`${questionIndex}-${i}`}>
                                    <span></span>
                                    {answer.text}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <p>
                            {questionIndex + 1} of {totalQuestionsNum}
                        </p>
                        <button className="btn" onClick={submitAnswer}>
                            Submit
                        </button>
                    </div>
                </section>
            </div>
            {/* Correct answer modal */}
            <PopupModal open={openCorrect}>
                <section className={classes.submit_answer}>
                    <img
                        src="/images/correct-answer.svg"
                        alt="Correct answer"
                    />
                    <p className={classes.welldone}>Well done!</p>
                    <p className={classes.reason}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                    </p>
                    <button className="btn" onClick={nextQuestion}>
                        Continue
                    </button>
                </section>
            </PopupModal>
            {/* Uncorrect answer modal */}
            <PopupModal open={openFalse}>
                <section className={classes.submit_answer}>
                    <img
                        src="/images/uncorrect-answer.svg"
                        alt="Uncorrect answer"
                    />
                    <p className={classes.tryagain}>Try again!</p>
                    <p className={classes.reason}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                    </p>
                    <button className="btn" onClick={retryQuestion}>
                        Retry
                    </button>
                </section>
            </PopupModal>
        </TestsLayout>
    );
};

export default Quiz;
