import React from "react";
import Link from "next/link";
import classes from "./fieldSidbar.module.scss";

export interface IFieldSidebar {
    field: string;
    image: string;
    learning_path: {
        [key: string]: {
            nick_name: string;
            progress: number;
        };
    };
}

const FieldSidebar: React.FC<{
    data: IFieldSidebar;
    currentLevel: string;
    changeLevel: (level: string) => void;
    showSidebar: boolean;
}> = ({ data, changeLevel, currentLevel, showSidebar }) => {
    const { field, image, learning_path } = data;

    return (
        <section
            className={`${classes.field_sidebar} ${
                showSidebar && classes.active
            }`}
        >
            <div>
                <header>
                    <h1
                        style={{ backgroundImage: `url(${image})` }}
                        className="h5 h5-regular"
                    >
                        {field}
                    </h1>
                    <Link href={`/[fieldName]`} as={`/front`}>
                        <a>FIELD OVERVIEW</a>
                    </Link>
                </header>
                <div className={classes.levels}>
                    {Object.keys(learning_path).map((level) => (
                        <button
                            key={level}
                            onClick={() => changeLevel(level)}
                            className={
                                currentLevel === level ? classes.active : ""
                            }
                        >
                            {`${level} level (${learning_path[level].nick_name})`}
                            <span>
                                {learning_path[level].progress === 100 ? (
                                    <img
                                        src="/images/correct.svg"
                                        alt="End path"
                                    />
                                ) : learning_path[level].progress ? (
                                    `${learning_path[level].progress}%`
                                ) : null}
                            </span>
                        </button>
                    ))}
                </div>
                <footer>
                    <Link href={`/challenge-group/[id]`} as="/challenge-group/0">
                        <a>Create challenge group</a>
                    </Link>
                    <Link href="/learning/[page]" as={`/learning/chat`}>
                        <a>Classroom chat</a>
                    </Link>
                    <Link href="/learning/[page]" as={`/learning/faq`}>
                        <a>FAQ section</a>
                    </Link>
                </footer>
            </div>
        </section>
    );
};

export default FieldSidebar;
