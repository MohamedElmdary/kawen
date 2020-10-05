import { Icourse } from "../components/learningField/fieldPath/dropdown";

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

export interface quizProps {
    name: string;
    quizzes_progress: number;
    progress: number;
    questions: {
        qs: string;
        status: boolean;
        ans: {
            text: string;
            correct: boolean;
            reason: string;
        }[];
    }[];
}

export interface finalTestProps {
    questions: {
        qs: string;
        ans: {
            text: string;
            correct: boolean;
            reason: string;
        }[];
    }[];
}

export interface faqProps {
    posts: {
        author: string;
        author_img: string;
        date: string;
        question: string;
        comments: {
                author: string;
                author_img: string;
                comment: string;
                images: string[];
                votes_up: {
                    number: number;
                    isVoted: boolean;
                }
                votes_down: {
                    number: number;
                    isVoted: boolean;
                }
            }[]
    }[]
}

export interface ChatUsersProps {
    users: {
        name: string,
        img: string
    }[]
}