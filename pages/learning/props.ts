import { Icourse } from "../../components/learningField/fieldPath/dropdown";

export interface DefaultProps {
    field: string;
    image: string;
    learning_path: {
        [key: string]: {
            nick_name: string;
            progress: number;
        };
    };
}

export interface LearningProps {
    field: string;
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

export interface ProjectProps {
    projectName: string;
    projectDescription: string;
}

export interface quizzesProps {
    progress: number;
    quizzes: {
        name: string;
        status: boolean;
        progress?: number;
    }[];
}

interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
    0: T;
    length: L;
}

export interface quizProps {
    name: string;
    progress: number;
    questions: {
        qs: string;
        status: boolean;
        ans: FixedLengthArray<
            {
                text: string;
                correct: boolean;
                reason: string;
            },
            4
        >;
    }[];
}

export interface finalTestProps {
    questions: {
        qs: string;
        ans: FixedLengthArray<
            {
                text: string;
                correct: boolean;
                reason: string;
            },
            4
        >;
    }[];
}
