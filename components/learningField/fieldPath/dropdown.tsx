import React from 'react';
import Link from 'next/link';
import classes from './fieldPath.module.scss';

export interface Icourse {
    name: string;
    description: string;
    image: string;
    progress: number;
    checkList: {
        name: string;
        done: boolean;
    }[];
}

interface Props {
    activeLevel: {
        level: string;
        nick_name: string;
        progress: number;
        courses: Icourse[];
        project: {
            name: string;
            description: string;
            status: 'Done' | 'not started';
        };
    };
    checkListRef: React.RefObject<HTMLUListElement>;
    courseQuizzesRef: React.RefObject<HTMLUListElement>;
    field: string;
    checkList: { name: string; done: boolean }[] | null | undefined;
    openOverlay: () => void;
}

const Dropdown: React.FC<Props> = ({
    checkListRef,
    courseQuizzesRef,
    // field,
    activeLevel,
    openOverlay,
    checkList,
}) => {
    const stopPropagation = (
        e: React.MouseEvent<HTMLUListElement, MouseEvent>
    ) => {
        e.stopPropagation();
        openOverlay();
    };

    return (
        <React.Fragment>
            {/* Course check list */}
            <ul
                className={classes.drop_down}
                ref={checkListRef}
                onClick={(e) => stopPropagation(e)}
            >
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
            <ul
                className={classes.drop_down}
                ref={courseQuizzesRef}
                onClick={(e) => stopPropagation(e)}
            >
                <li>
                    <Link href={`/learning/quizzes`}>
                        <a>Quizzes</a>
                    </Link>
                </li>
                <li>
                    <Link href={`/learning/final-test`}>
                        <a>Final test</a>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Dropdown;
